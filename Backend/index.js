const express = require("express");
const app = express();
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');

require('dotenv').config();
const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.json());
const mongodbUrl = `mongodb+srv://user:user@mongodbtrial.3w9nzbg.mongodb.net/?retryWrites=true&w=majority&appName=mongodbtrial`
const studentmodel = require('./models/student');
const multer = require('multer');
const path = require('path');
const contactmodel = require('./models/contact')
const coursemodel = require('./models/courses')
path.join(__dirname, 'uploads');
const nodemailer = require('nodemailer');
const session = require('express-session');
app.use('/uploads', express.static('uploads'));
const bcrypt = require('bcrypt');
const MongoStore = require('connect-mongo');


app.use(cookieParser());





  app.use(session({
    secret: process.env.SESSION_PASS,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: mongodbUrl , ttl: 14 * 24 * 60 * 60}),
    cookie: {
        secure: false, // should be true in production
        httpOnly: true,
        sameSite: 'Lax',
         path: '/',
        maxAge: 10 * 60 * 1000 // 10 minutes
    }
}));


app.use(cors({
  origin: 'http://localhost:3000', // Frontend origin
  credentials: true // Allow credentials (cookies)
}));

let transporter = nodemailer.createTransport({
    host:'smtp.gmail.com',
    secure:false,
    port:587,
    auth:{
        user:process.env.EMAIL_USER,
        pass:process.env.EMAIL_PASS
    }
});






// Set up Multer storage engine
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');  // Define the uploads directory
    },
    filename: function (req, file, cb) {
        // Define the file name format: fileFieldname-Timestamp.extension
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

// File type validation (optional)
function checkFileType(file, cb) {
    // Allowed file types (you can customize this)
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (extname && mimetype) {
        return cb(null, true);
    } else {
        cb(new Error('Only images are allowed!'));  // Handle error
    }
}

// Initialize the Multer middleware
const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 },  // Limit file size to 1MB
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);  // Filter by file type
    }
}).single('avatar');  // Accept a file with the form field name 'myFile'


// Register route to handle file uploads and form data


// app.get('/set', (req, res) => {
//     req.session.views = (req.session.views || 0) + 1;
//     res.send(`Session set. Views: ${req.session.views}`);
// });

// app.get('/get', (req, res) => {
//     res.send(`Views: ${req.session.views || 0}`);
// });

app.post('/register', async(req, res) => {
    // Multer handles the file upload
    upload(req, res, async(err) => {
        if (err) {
         
            return res.status(400).json({ message: err.message });
        }

       
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

       
        const { firstname,lastName,dateOfBirth,gender,email,phone,country,state,city,hobbiesList} = req.body;  
           const avatar = req.file.path;
         const text = `Hi ${req.body.firstname} Your registration succesfull .Login and create new password`
    let mailOptions = {
        from:process.env.EMAIL_USER,
        to:req.body.email, 
        subject:"Succesfully Registered", 
        text:text
    };
    


           try {
         
            const user = await studentmodel.findOne({ email: req.body.email });
            
            if (user) {
                return res.status(400).json({ message: 'Email already registered' });
            }

        
            const newStudent = new studentmodel({
                name:firstname,
                lastName:lastName,
                email: email,
                dateOfBirth:dateOfBirth,
                gender:gender,
                phone:phone,
                country:country,
                state:state,
                city:city,
                hobbies:hobbiesList ,
                avatar:avatar,
             
            });
                 
            
            await newStudent.save();
            transporter.sendMail(mailOptions, function (err, info) {
                if (err) {
                    console.log("Error:", err);
                    res.status(500).send('Error sending mail');
                } else {
                    console.log("Message sent: ", info.response);
                    res.send(`<h1>Mail sent successfully to ${req.body.email}</h1>`);
                }
            });
            
            res.status(201).json({ message: 'Student registered successfully!', file: req.file });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Database error', error });
        }

    });
});

// First Time Log in route

app.post('/send-otp', async (req, res) => {
    try {
      const { email } = req.body;
      console.log(email);
      
  
      // Check if the email is registered
      const user = await studentmodel.findOne({ email: email });
      if (!user) {
        return res.status(400).json({ message: 'Email not registered' });
      }
  
      // Generate OTP and set expiry
    const otp = Math.floor(1000000 + Math.random() * 9000000).toString();
    req.session.otp = otp;
    req.session.otpExpires = Date.now() + 10 * 60 * 1000; // OTP valid for 10 minutes
    req.session.email=email;

    
  
    console.log("OTP generated:", otp); // For debugging, can be removed in production
       
       
  
      // Set up mail options
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Your OTP Code",
        text: `Your OTP is: ${otp}. It is valid for 10 minutes.`
      };
  
      // Send the email
      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.error("Error sending OTP:", err);
          return res.status(500).json({ error: "Error sending OTP" });
        }
        res.status(200).json({ message: "OTP sent successfully" ,email:req.session.email});
      });
  
    } catch (error) {
      console.error("Error during OTP process:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  
app.post("/verify-otp", (req, res) => {
    console.log('session data',req.session);
    
    

    
    
    const { otp } = req.body;
    req.session.otp = otp;
 
    console.log("Received OTP from client:", otp); 
    console.log("Stored OTP in session:", req.session.otp); 
  
    
    if (!req.session.otp) {
      console.log("No OTP stored in session"); 
      return res.status(400).json({ error: "Invalid OTP" });
    }
  
    if (req.session.otp !== otp.trim()) {
      console.log("Session OTP and provided OTP do not match"); 
      return res.status(400).json({ error: "Invalid OTP" });
    }
  
   
    if (Date.now() > req.session.otpExpires) {
      console.log("OTP expired");
      req.session.otp = null;
      req.session.otpExpires = null;
      return res.status(400).json({ error: "OTP expired" });
    }
  
    console.log("OTP verified successfully"); // Log success
   
    const email = req.session.email;
    console.log("Email associated with this OTP:", email);
    
    req.session.otp = null;
    req.session.otpExpires = null;

    
    
 
    return res.status(200).json({ message: "OTP verified",email:email });
  });


  app.post('/set-password', async (req, res) => {
    try {
      req.session.email = req.session.email;
  
      console.log(req.session);
  
      const { newPassword, confirmPassword } = req.body;
  
      if (newPassword !== confirmPassword) {
        return res.status(400).json({ error: "Passwords do not match" });
      }
  
      if (!req.session.email) {
        return res.status(400).json({ error: "No email found.Please verify OTP first ." });
      }
  
      // Hash the new password
      const hashedPassword = await bcrypt.hash(newPassword, 15);
  
      // Update the password in the database
      await studentmodel.updateOne({ email: req.session.email }, { password: hashedPassword });
  
      // Destroy the session after the password reset
      req.session.destroy();
  
      return res.status(200).json({ message: "Password reset successfully" });
  
    } catch (error) {
      console.error("Error during password reset:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  });
  

app.post('/login', async (req, res) => {
    const { email, password,rememberMe } = req.body;

    
    try {
        // Find user by username (correctly using await)
        const user = await studentmodel.findOne({ email });
        if (!user) return res.status(400).json({ message: 'Invalid credentials' });

        // Compare the provided password with the stored hashed password
        const isMatch = await bcrypt.compare(password, user.password);
      
        
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        // If the login is successful, you can proceed to generate a JWT or establish a session
        const token = jwt.sign({ id: user._id, username: user.name },process.env.JWT_SECRET,    { expiresIn: rememberMe ? '7d' : '1h' });
        console.log(token);
        
        res.cookie('token', token, { httpOnly: true, secure: false, maxAge: rememberMe ? 7 * 24 * 60 * 60 * 1000 : 1 * 60 * 60 * 1000  }); // Add secure:true in production
        req.session.user = { id: user.id, username: user.name };
        res.status(200).json({ message: 'Login successful'});
        
        
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});



// Middleware to authenticate with JWT
const authenticateJWT = (req, res, next) => {
    const token = req.cookies.token;
    console.log("token ",token);
    
    
    if (!token) return res.status(403).json({ message: 'Token not found' });

    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.user = decoded; // Store decoded user info in the request
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Invalid token' });
    }
};

app.get('/protected', authenticateJWT, (req, res) => {
    res.json({ message: `Hello, ${req.user.username}. You have access!` });
});

app.post('/logout', (req, res) => {
    req.session.destroy(); // Destroy session
    res.clearCookie('token'); // Clear cookie
    res.json({ message: 'Logged out successfully' });
});

// Contact route

app.post('/contact',async(req,res) => {
    const {name,email,subject,message}=req.body;
     let mailOptions = {
        from:process.env.EMAIL_USER,
        to:req.body.email, 
        subject:req.body.subject, 
        text:req.body.message
    };
    const newContact = new contactmodel({
       name:name,
       email:email,
       subject:subject,
       message:message
    })
    await newContact.save();
   transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
            console.log("Error:", err);
            res.status(500).send('Error sending mail');
        } else {
            console.log("Message sent: ", info.response);
            res.send(`<h1>Mail sent successfully to ${email}</h1>`);
        }
    });
});


app.post('/set-course', async (req, res) => {
    const { CourseName, CourseFee, Duration } = req.body;
  
    if (!CourseName || !CourseFee || !Duration) {
      return res.status(400).json({ error: "All fields are required" });
    }
  
    try {
      const newCourse = new coursemodel({
        CourseName: CourseName,
        CourseFee: CourseFee,
        Duration: Duration,
      });
  
      await newCourse.save();
      res.status(201).json({ message: "Course created successfully", course: newCourse });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to create course" });
    }
  });
  



// Connect to MongoDB
mongoose.connect(mongodbUrl)
    .then(() => {
        console.log("Database connected");
    })
    .catch(err => {
        console.log(err);
    });

// Start the server
app.listen(process.env.PORT, () => {
    console.log(`Server listening on PORT ${process.env.PORT}`);
});
