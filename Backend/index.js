const express = require("express");
const app = express();
const session = require('express-session');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
app.use(express.json());
const mongodbUrl = `mongodb+srv://user:user@mongodbtrial.3w9nzbg.mongodb.net/?retryWrites=true&w=majority&appName=mongodbtrial`
// const multer = require('multer');
const path = require('path');
// const studentmodel = require('./models/student');
// const contactmodel = require('./models/contact')
// const coursemodel = require('./models/courses')
path.join(__dirname, 'uploads');
// const nodemailer = require('nodemailer');
app.use('/uploads', express.static('uploads'));
// const bcrypt = require('bcrypt');
const MongoStore = require('connect-mongo');
// const jwt = require('jsonwebtoken');
const StudentRouter = require('./routes/student');
const DashboardRouter = require('./routes/dashboard');
app.use(cookieParser());
app.use(session({
    secret: process.env.SESSION_PASS,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: mongodbUrl , ttl: 14 * 24 * 60 * 60}),
    cookie: {
        secure: false, 
        httpOnly: true,
        sameSite: 'lax',
         path: '/',
        maxAge: 10 * 60 * 1000 // 10 minutes
    }
}));

app.use(cors({
  origin: 'http://localhost:3000', 
  credentials: true 
}));


app.use(express.urlencoded({ extended: true }));
app.use('/dashboard',DashboardRouter);
app.use('/student',StudentRouter)

// let transporter = nodemailer.createTransport({
//     host:'smtp.gmail.com',
//     secure:false,
//     port:587,
//     auth:{
//         user:process.env.EMAIL_USER,
//         pass:process.env.EMAIL_PASS
//     }
// });






// // Set up Multer storage engine
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './uploads');  // Define the uploads directory
//     },
//     filename: function (req, file, cb) {
//         // Define the file name format: fileFieldname-Timestamp.extension
//         cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//     }
// });

// // File type validation (optional)
// function checkFileType(file, cb) {
//     // Allowed file types (you can customize this)
//     const filetypes = /jpeg|jpg|png|gif/;
//     const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
//     const mimetype = filetypes.test(file.mimetype);

//     if (extname && mimetype) {
//         return cb(null, true);
//     } else {
//         cb(new Error('Only images are allowed!'));  // Handle error
//     }
// }

// // Initialize the Multer middleware
// const upload = multer({
//     storage: storage,
//     limits: { fileSize: 1000000 },  // Limit file size to 1MB
//     fileFilter: function (req, file, cb) {
//         checkFileType(file, cb);  // Filter by file type
//     }
// }).single('avatar');  // Accept a file with the form field name 'myFile'



// app.post('/register', async(req, res) => {
//     // Multer handles the file upload
//     upload(req, res, async(err) => {
//         if (err) {
         
//             return res.status(400).json({ message: err.message });
//         }

       
//         if (!req.file) {
//             return res.status(400).json({ message: 'No file uploaded' });
//         }

       
//         const { firstname,lastName,dateOfBirth,gender,email,phone,country,state,city,hobbiesList} = req.body; 
       
//            const avatar = req.file.path;
//          const text = `Hi ${req.body.firstname} Your registration succesfull .Login and create new password`
//     let mailOptions = {
//         from:process.env.EMAIL_USER,
//         to:req.body.email, 
//         subject:"Succesfully Registered", 
//         text:text
//     };
    


//            try {
         
//             const user = await studentmodel.findOne({ email: req.body.email });
            
//             if (user) {
//                 return res.status(400).json({ message: 'Email already registered' });
//             }

        
//             const newStudent = new studentmodel({
//                 name:firstname,
//                 lastName:lastName,
//                 email: email,
//                 dateOfBirth:dateOfBirth,
//                 gender:gender,
//                 phone:phone,
//                 country:country,
//                 state:state,
//                 city:city,
//                 hobbies:hobbiesList ,
//                 avatar:avatar,
             
//             });
                 
            
//             await newStudent.save();
//             transporter.sendMail(mailOptions, function (err, info) {
//                 if (err) {
//                     console.log("Error:", err);
//                     res.status(500).send('Error sending mail');
//                 } else {
//                     console.log("Message sent: ", info.response);
//                     res.send(`<h1>Mail sent successfully to ${req.body.email}</h1>`);
//                 }
//             });
            
//             res.status(201).json({ message: 'Student registered successfully!', file: req.file });
//         } catch (error) {
//             console.error(error);
//             res.status(500).json({ message: 'Database error', error });
//         }

//     });
// });

// // First Time Log in route

// app.post('/send-otp', async (req, res) => {
//   const { email } = req.body;

//     try {
     
      
  
//       // Check if the email is registered
//       const user = await studentmodel.findOne({ email: email });
//       if (!user) {
//         return res.status(400).json({ message: 'Email not registered' });
//       }
  
//       // Generate OTP and set expiry
//     const otp = Math.floor(1000000 + Math.random() * 9000000).toString();
//     req.session.otp = otp;
//     req.session.otpExpires = Date.now() + 10 * 60 * 1000; // OTP valid for 10 minutes
//     req.session.email=email;
    


    
  
//     console.log("OTP generated:", otp); // For debugging, can be removed in production
 
  
//       // Set up mail options
//       const mailOptions = {
//         from: process.env.EMAIL_USER,
//         to: req.session.email,
//         subject: "Your OTP Code",
//         text: `Your OTP is: ${otp}. It is valid for 10 minutes.`
//       };
  
//       // Send the email
//       transporter.sendMail(mailOptions, (err, info) => {
//         if (err) {
//           console.error("Error sending OTP:", err);
//           return res.status(500).json({ error: "Error sending OTP" });
//         }
//         console.log("Message sent: ", info.response);
//         res.status(200).json({ message: "OTP sent successfully" ,email:req.session.email});
//       });
  
//     } catch (error) {
//       console.error("Error during OTP process:", error);
//       res.status(500).json({ error: "Internal server error" });
//     }
//   });

  
//   app.post("/verify-otp", (req, res) => {
//     const { otp } = req.body;
  
    
//     try {
     
      
    
      
//       // Check if OTP exists in the session
//       if (!req.session.otp) {
//         console.log("No OTP stored in session");
//         return res.status(400).json({ error: "Invalid OTP" });
//       }
  
//       // Validate if the provided OTP matches the session OTP
//       if (req.session.otp !== otp.trim()) {
//         console.log("Session OTP and provided OTP do not match");
//         return res.status(400).json({ error: "Invalid OTP" });
//       }
  
//       // Check if the OTP has expired
//       if (Date.now() > req.session.otpExpires) {
//         console.log("OTP expired");
//         req.session.otp = null;
//         req.session.otpExpires = null;
//         return res.status(400).json({ error: "OTP expired" });
//       }
  
//       // Retrieve the email from the session
//       const email = req.session.email;
     
  
//       // Clear OTP and its expiry from session
//       req.session.otp = null;
//       req.session.otpExpires = null;
  
//       // Send success response
//       return res.status(200).json({ message: "OTP verified", email: email });
  
//     } catch (error) {
//       console.error("Error during OTP verification process:", error);
//       return res.status(500).json({ error: "Internal server error" });
//     }
//   });
  

//   app.post('/set-password', async (req, res) => {
//     console.log("Received body:", req.body);
//     try {
//         const { newPassword, confirmPassword } = req.body;
  
//       if (newPassword !== confirmPassword) {
//         return res.status(400).json({ error: "Passwords do not match" });
//       }
  
//       if (!req.session.email) {
//         return res.status(400).json({ error: "No email found.Please verify OTP first ." });
//       }
  
//       // Hash the new password
//       const salt = await bcrypt.genSalt(10);
//       const hashedPassword = await bcrypt.hash(newPassword, salt);
  
//       // Update the password in the database
//       await studentmodel.updateOne({ email: req.session.email }, { password: hashedPassword });
  
//       // Destroy the session after the password reset
//       req.session.destroy();
  
//       return res.status(200).json({ message: "Password reset successfully" });
  
//     } catch (error) {
//       console.error("Error during password reset:", error);
//       return res.status(500).json({ error: "Internal server error" });
//     }
//   });
  

// app.post('/login', async (req, res) => {
//     const { email, password,rememberMe } = req.body;
//     try {
       
//         const user = await studentmodel.findOne({ email });
//         if (!user) return res.status(400).json({ message: 'Invalid credentials' });

//         const isMatch = await bcrypt.compare(password, user.password);
      
        
//         if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

//         const token = jwt.sign({ id:user._id, username:user.name,email:user.email},process.env.JWT_SECRET,    { expiresIn: rememberMe ? '7d' : '1h' });
      
        
//         res.cookie('token', token, { httpOnly: true, secure: false, maxAge: rememberMe ? 7 * 24 * 60 * 60 * 1000 : 1 * 60 * 60 * 1000 ,sameSite:'lax' });
         

      
         
//         req.session.user = { id: user.id, username: user.name};
//         res.status(200).json({ message: 'Login successful'});
        
        
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: 'Server error' });
//     }
// });



// // Middleware to authenticate with JWT
// const authenticateJWT = (req, res, next) => {
//    const token = req.cookies.token;
//   if (!token) return res.status(403).json({ message: 'Token not found' });

//     try {
//         const decoded = jwt.verify(token,process.env.JWT_SECRET);
//         req.user = decoded; 
//         next();
//     } catch (err) {
//         return res.status(401).json({ message: 'Invalid token' });
//     }
// };


// app.get('/login',authenticateJWT,(req,res)=>{
//   const user = req.user;
  
//   if (user) {
//     return res.status(200).json({ message: 'User already logged in', user });
// }
//   })


// app.get('/dashboard', authenticateJWT, async (req, res) => {
//   try {
   
//     const user = await studentmodel.findOne({ email:req.user.email }); 
   
    

//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });

//     }

//     // res.status(200).json(user); 

//     res.json({
//       name: user.name,            
//       lastName: user.lastName,    
//       email: user.email,          
//       country: user.country,      
//       avatar: user.avatar,
//       enrolledCourses:user.enrolledCourses
      
//     });
//   } catch (error) {
//     console.error('Error fetching user data:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });



// app.post('/dashboard/changepassword', authenticateJWT, async (req, res) => {
//   const { currentPassword, newPassword, confirmPassword } = req.body;
// console.log(req.session);
// console.log(req.user);


//   try {
//       // Find the user by the id stored in the JWT
//       const user = await studentmodel.findById(req.user.id);
//       if (!user) return res.status(404).json({ message: 'User not found' });

//       // Validate session email matches the user email
//       if (req.session.user.id !== user.id) {
//           return res.status(400).json({ message: 'Email validation failed' });
//       }

//       // Compare the current password with the stored hashed password
//       const isMatch = await bcrypt.compare(currentPassword, user.password);
//       if (!isMatch) return res.status(400).json({ message: 'Incorrect current password' });

//       // Check if newPassword and confirmPassword match
//       if (newPassword !== confirmPassword) {
//           return res.status(400).json({ message: 'New password and confirmation do not match' });
//       }

      
//       // Hash the new password
//       const salt = await bcrypt.genSalt(10);
//       const hashedPassword = await bcrypt.hash(newPassword, salt);

//       // Update the user's password in the database
//       user.password = hashedPassword;
//       await user.save();
//       req.session.destroy((err) => {
//         if (err) return res.status(500).json({ message: "Session destruction error" });})
   
//    res.clearCookie('token'); // Clear specific cookie if applicable
//    res.clearCookie('connect.sid', {
//      path: '/',
//      httpOnly: true,
//      secure: false, // Adjust based on environment (false for localhost, true for production https)
//      sameSite: 'Lax'
//    });

//       res.status(200).json({ message: 'Password changed successfully' });
//   } catch (err) {
//       console.error(err);
//       res.status(500).json({ message: 'Server error' });
//   }
// });


// app.get('/dashboard/edit-profile',authenticateJWT,async(req,res)=>{
//   try {
    
//     const user = await studentmodel.findById(req.user.id);
//     if (!user) return res.status(404).send('User not found');


//     res.json(user);


//   } catch (error) {
//     res.status(500).send('Server error');
    
//   }
// })


// app.put('/dashboard/update-profile', authenticateJWT, (req, res) => {
  
  
  
//   upload(req, res, async (err) => {
//     if (err) {

//       return res.status(400).json({ error: err.message });
//     }

//     try {
//       const { name, lastName, gender,email, phone,dateOfBirth, country, state, city, hobbies,avatar } = req.body;
//       const userId = req.user.id;
     
      
//       const updateData = { name, lastName, gender, email, phone,dateOfBirth, country, state, city, hobbies,avatar };
    
//       if (typeof req.body.hobbies === 'string') {
//         req.body.hobbies = JSON.parse(req.body.hobbies);
//       }
    
//       console.log("Parsed hobbies:", req.body.hobbies); // Check if hobbies is an array
    

//       if (req.file) {
//         updateData.avatar = req.file.path;
//       }
    
      
      

//       const updatedUser = await studentmodel.findByIdAndUpdate(userId, updateData, { new: true });

//       if (!updatedUser) {
//         return res.status(404).json({ message: 'User not found' });
//       }

//       res.status(200).json({ message: 'Profile updated successfully', user: updatedUser });
//     } catch (error) {
//       console.error('Error updating profile:', error);
//       res.status(500).json({ message: 'Error updating profile', error });
//     }
//   });
// });





// // Contact route

// app.post('/contact',async(req,res) => {
//     const {name,email,subject,message}=req.body;
//      let mailOptions = {
//         from:process.env.EMAIL_USER,
//         to:req.body.email, 
//         subject:req.body.subject, 
//         text:req.body.message
//     };
//     const newContact = new contactmodel({
//        name:name,
//        email:email,
//        subject:subject,
//        message:message
//     })
//     await newContact.save();
//    transporter.sendMail(mailOptions, function (err, info) {
//         if (err) {
//             console.log("Error:", err);
//             res.status(500).send('Error sending mail');
//         } else {
//             console.log("Message sent: ", info.response);
//             res.send(`<h1>Mail sent successfully to ${email}</h1>`);
//         }
//     });
// });


// app.post('/set-course', async (req, res) => {
//     const { CourseName, CourseFee, Duration } = req.body;
  
//     if (!CourseName || !CourseFee || !Duration) {
//       return res.status(400).json({ error: "All fields are required" });
//     }
  
//     try {
//       const newCourse = new coursemodel({
//         CourseName: CourseName,
//         CourseFee: CourseFee,
//         Duration: Duration,
//       });
  
//       await newCourse.save();
//       res.status(201).json({ message: "Course created successfully", course: newCourse });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: "Failed to create course" });
//     }
//   });



  
//   app.get('/dashboard/courses',authenticateJWT, async (req, res) => {
//     try {
//       const courses = await coursemodel.find();
//       res.status(200).json(courses); 
//     } catch (error) {
//       console.error('Error fetching courses:', error);
//       res.status(500).json({ message: 'Server error, could not retrieve courses.' });
//     }
//   });


//   // app.get('/dashboard/courses',async (req, res) => {
//   //   try {
//   //     const courses = await coursemodel.find();
//   //     res.status(200).json(courses); 
//   //   } catch (error) {
//   //     console.error('Error fetching courses:', error);
//   //     res.status(500).json({ message: 'Server error, could not retrieve courses.' });
//   //   }
//   // });

  
//   app.post('/dashboard/add-course', authenticateJWT, async (req, res) => {
//     const studentId = req.user.id; // Get the student ID from the JWT
//     const { courseId } = req.body; // Get the course ID from the request body

//     try {
//         // Find the course by its ID
//         const course = await coursemodel.findById(courseId);
//         if (!course) {
//             return res.status(404).json({ message: 'Course not found' });
//         }

//         // Find the student and check their enrolledCourses
//         const student = await studentmodel.findById(studentId);
//         if (!student) {
//             return res.status(404).json({ message: 'Student not found' });
//         }

//         // Check if the student is already enrolled in the course
//         const isAlreadyEnrolled = student.enrolledCourses.some(enrolled => enrolled.courseId.equals(course._id));
//         if (isAlreadyEnrolled) {
//             return res.status(400).json({ message: 'Already enrolled in this course' });
//         }

//         // Check if the student has reached the maximum number of courses
//         if (student.enrolledCourses.length >= 3) {
//             // Replace the first course with the new course if maximum is reached
//             student.enrolledCourses[0] = {
//                 courseId: course._id,
//                 courseName: course.CourseName // Update course name here
//             };
//         } else {
//             // Enroll the student in the new course if they haven't reached the maximum
//             student.enrolledCourses.push({
//                 courseId: course._id,
//                 courseName: course.CourseName // Add course name here
//             });
//         }

//         // Save the updated student document
//         await student.save();

//         // Respond with a success message
//         res.status(200).json({ message: 'Successfully enrolled', courseName: course.CourseName });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Error enrolling in course', error });
//     }
// });




//   app.post('/dashboard/logout', (req, res) => {
//     req.session.destroy((err) => {
//       if (err) {
//         console.error('Error destroying session:', err); 
//         return res.status(500).json({ message: 'Could not log out' });
//       }
  

//       console.log('Session destroyed, clearing cookies...');
      
     
//       res.clearCookie('token');
//       res.clearCookie('connect.sid', {
//         path: '/',
//         httpOnly: true,
//         secure: false, 
//         sameSite: 'Lax'
//       });
  
      
//       return res.status(200).json({ message: 'Logged out successfully' });
//     });
//   });
  
  
  

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
