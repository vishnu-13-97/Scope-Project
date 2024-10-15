const mongoose = require('mongoose');



const StudentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique:true,
        
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
    enum: ['Reading', 'Gaming', 'Travelling', 'Cooking', 'Gardening'],
    },
    avatar:{
        type: String,
        required: true
    },
    password:{
        type: String
    }
   
});

const student = mongoose.model('Student', StudentSchema);

module.exports = student;