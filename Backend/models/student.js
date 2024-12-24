const mongoose = require('mongoose');
const StudentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
     
    },
    email: {
        type: String,
        required: true,
        unique:true,
        
    },
    phone:{
        type:String,
        
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    hobbies:{
    type: [String],
    enum: ['Reading','Gaming','Travelling','Cooking','Gardening'],
  },
    avatar:{
        type: String,
        required: true
    },
    password:{
        type: String
    },
    enrolledCourses: [
        {
            courseId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Course', // Reference to the Course model
                required: true
            },
            courseName: {
                type: String,
                required: true
            }
        }
    ]
});

const student = mongoose.model('Student', StudentSchema);

module.exports = student;