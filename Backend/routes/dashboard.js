const express = require('express');
const router = express.Router();
const studentmodel = require('../models/student');
const coursemodel =require('../models/courses')
const bcrypt = require("bcrypt");
const authenticateJWT = require('../middleware/authenticateJWT');
const upload = require("../multerconfig");



router.get('/', authenticateJWT, async (req, res) => {
    try {
     
      const user = await studentmodel.findOne({ email:req.user.email }); 
     
      
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
  
      }
  
      // res.status(200).json(user); 
  
      res.json({
        name: user.name,            
        lastName: user.lastName,    
        email: user.email,          
        country: user.country,      
        avatar: user.avatar,
        enrolledCourses:user.enrolledCourses
        
      });
    } catch (error) {
      console.error('Error fetching user data:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  router.post('/changepassword', authenticateJWT, async (req, res) => {
    const { currentPassword, newPassword, confirmPassword } = req.body;

  
  
    try {
        // Find the user by the id stored in the JWT
        const user = await studentmodel.findById(req.user.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
  
        // Validate session email matches the user email
        if (req.session.user.id !== user.id) {
            return res.status(400).json({ message: 'Email validation failed' });
        }
  
        // Compare the current password with the stored hashed password
        const isMatch = await bcrypt.compare(currentPassword, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Incorrect current password' });
  
        // Check if newPassword and confirmPassword match
        if (newPassword !== confirmPassword) {
            return res.status(400).json({ message: 'New password and confirmation do not match' });
        }
  
        
        // Hash the new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);
  
        // Update the user's password in the database
        user.password = hashedPassword;
        await user.save();
        req.session.destroy((err) => {
          if (err) return res.status(500).json({ message: "Session destruction error" });})
     
     res.clearCookie('token'); // Clear specific cookie if applicable
     res.clearCookie('connect.sid', {
       path: '/',
       httpOnly: true,
       secure: false, // Adjust based on environment (false for localhost, true for production https)
       sameSite: 'Lax'
     });
  
        res.status(200).json({ message: 'Password changed successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
  });

  
router.get('/edit-profile',authenticateJWT,async(req,res)=>{
    try {
      
      const user = await studentmodel.findById(req.user.id);
      if (!user) return res.status(404).send('User not found');
  
  
      res.json(user);
  
  
    } catch (error) {
      res.status(500).send('Server error');
      
    }
  })
  
  router.put('/update-profile',authenticateJWT, (req, res) => {
  
  
  
    upload(req, res, async (err) => {
      if (err) {
  
        return res.status(400).json({ error: err.message });
      }
  
      try {
        const { name, lastName, gender,email, phone,dateOfBirth, country, state, city, hobbies,avatar } = req.body;
        const userId = req.user.id;
       
        
        const updateData = { name, lastName, gender, email, phone,dateOfBirth, country, state, city, hobbies,avatar };
       
        
      
        if (typeof req.body.hobbies === 'string') {
          req.body.hobbies = JSON.parse(req.body.hobbies);
        }
      
 
      
  
        if (req.file) {
          updateData.avatar = req.file.path;
        }
      
        
        
  
        const updatedUser = await studentmodel.findByIdAndUpdate(userId, updateData, { new: true });
       
        
  
        if (!updatedUser) {
          return res.status(404).json({ message: 'User not found' });
        }
  
        res.status(200).json({ message: 'Profile updated successfully', user: updatedUser });
      } catch (error) {
        console.error('Error updating profile:', error);
        res.status(500).json({ message: 'Error updating profile', error });
      }
    });
  });
  
  router.post('/set-course', async (req, res) => {
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

   
  router.get('/courses',authenticateJWT, async (req, res) => {
    try {
      const courses = await coursemodel.find();
      res.status(200).json(courses); 
    } catch (error) {
      console.error('Error fetching courses:', error);
      res.status(500).json({ message: 'Server error, could not retrieve courses.' });
    }
  });


  router.post('/add-course', authenticateJWT, async (req, res) => {
    const studentId = req.user.id; 
    const { courseId } = req.body;

    try {
        // Find the course by its ID
        const course = await coursemodel.findById(courseId);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        // Find the student and check their enrolledCourses
        const student = await studentmodel.findById(studentId);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

        // Check if the student is already enrolled in the course
        const isAlreadyEnrolled = student.enrolledCourses.some(enrolled => enrolled.courseId.equals(course._id));
        if (isAlreadyEnrolled) {
            return res.status(400).json({ message: 'Already enrolled in this course' });
        }

        // Check if the student has reached the maximum number of courses
        if (student.enrolledCourses.length >= 3) {
            // Replace the first course with the new course if maximum is reached
            student.enrolledCourses[0] = {
                courseId: course._id,
                courseName: course.CourseName // Update course name here
            };
        } else {
            // Enroll the student in the new course if they haven't reached the maximum
            student.enrolledCourses.push({
                courseId: course._id,
                courseName: course.CourseName // Add course name here
            });
        }

        // Save the updated student document
        await student.save();

        // Respond with a success message
        res.status(200).json({ message: 'Successfully enrolled', courseName: course.CourseName });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error enrolling in course', error });
    }
});

router.post('/logout', (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        console.error('Error destroying session:', err); 
        return res.status(500).json({ message: 'Could not log out' });
      }
  


      
     
      res.clearCookie('token');
      res.clearCookie('connect.sid', {
        path: '/',
        httpOnly: true,
        secure: false, 
        sameSite: 'Lax'
      });
  
      
      return res.status(200).json({ message: 'Logged out successfully' });
    });
  });
  

  module.exports =router;