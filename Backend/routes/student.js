const express = require("express");
const router = express.Router();
const studentmodel = require('../models/student');
const contactmodel = require('../models/contact')
const sendMail = require("../mailer");
const upload = require("../multerconfig");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authenticateJWT = require('../middleware/authenticateJWT')

router.post('/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  const newContact = new contactmodel({
     name,
     email,
     subject,
     message
  });

  try {
     await newContact.save();
     const info = await sendMail(email, subject, message);
     console.log("Message sent:", info.response);
     return res.json({ message: `Thank you for enquiry we will contact you shortly!` });
  } catch (error) {
     console.error("Error processing request:", error);
     res.status(500).json({ message: 'Error processing request' });
  }
});



router.post('/register', async(req, res) => {

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
       const to =email;
      const subject="Succesfully Registered";
      
  


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
      await  sendMail(to,subject,text, function (err, info) {
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


router.post("/send-otp", async (req, res) => {
  const { email } = req.body;

  try {
    // Check if the email is registered
    const user = await studentmodel.findOne({ email: email });
    if (!user) {
      return res.status(400).json({ message: "Email not registered" });
    }
  

    // Generate OTP and set expiry
     const otp = Math.floor(100000 + Math.random() * 900000).toString();

    req.session.otp = otp;
    req.session.otpExpires = Date.now() + 10 * 60 * 1000; // OTP valid for 10 minutes
    req.session.email = email;
console.log("Session data in send-otp:", req.session);

    console.log("OTP generated:", otp); // For debugging

    // Set up email subject and text
    const subject = "Your OTP Code";
    const text = `Your OTP is: ${otp}. It is valid for 10 minutes.`;

    // Send the email
    await sendMail(email, subject, text);
 

    res.status(200).json({ message: "OTP sent successfully", email: req.session.email });

  } catch (error) {
    console.error("Error during OTP process:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});


router.post("/verify-otp", (req, res) => {
  const { otp } = req.body;
  console.log(req.body);
  try {
    console.log("Session data in verify-otp:", req.session);

    // Check if OTP exists in the session
    if (!req.session.otp) {
      console.log("No OTP stored in session");
      return res.status(400).json({ error: "Invalid OTP" });
    }

    // Validate if the provided OTP matches the session OTP
    if (req.session.otp !== otp.trim()) {
      console.log("Session OTP and provided OTP do not match");
      return res.status(400).json({ error: "Invalid OTP" });
    }

    // Check if the OTP has expired
    if (Date.now() > req.session.otpExpires) {
      console.log("OTP expired");
      req.session.otp = null;
      req.session.otpExpires = null;
      return res.status(400).json({ error: "OTP expired" });
    }

    // Retrieve the email from the session
    const email = req.session.email;
    // Clear OTP and its expiry from session
    req.session.otp = null;
    req.session.otpExpires = null;

    // Send success response
    return res.status(200).json({ message: "OTP verified", email: email });
  } catch (error) {
    console.error("Error during OTP verification process:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/set-password", async (req, res) => {

  try {
    const { newPassword, confirmPassword } = req.body;

    if (newPassword !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    if (!req.session.email) {
      return res
        .status(400)
        .json({ error: "No email found.Please verify OTP first ." });
    }

    // Hash the new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    // Update the password in the database
    await studentmodel.updateOne(
      { email: req.session.email },
      { password: hashedPassword }
    );

    // Destroy the session after the password reset
    req.session.destroy();

    return res.status(200).json({ message: "Password reset successfully" });
  } catch (error) {
    console.error("Error during password reset:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password, rememberMe } = req.body;

  try {
    const user = await studentmodel.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { id: user._id, username: user.name, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: rememberMe ? "7d" : "1h" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      maxAge: rememberMe ? 7 * 24 * 60 * 60 * 1000 : 1 * 60 * 60 * 1000,
      sameSite: "lax",
    });

    req.session.user = { id: user.id, username: user.name };

    // Include token in the response body
    res.status(200).json({
      message: "Login successful",
      token, // Add the token here
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

router.get('/login', authenticateJWT, (req, res) => {
  const user = req.user;
  
  if (user) {
    return res.status(200).json({ message: 'User already logged in', user });
  } else {
    return res.status(401).json({ message: 'User not logged in' });
  }
});


  

module.exports = router;
