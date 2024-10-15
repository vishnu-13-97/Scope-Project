const mongoose = require('mongoose');

const CourseSchema = mongoose.Schema({
    CourseName: {
        type: String,
        required: true
    },
    CourseFee: {
        type: Number,
        required: true
    },
    Duration: {
        type: String,
        required: true,
},
  });

const Course = mongoose.model('Course', CourseSchema);

module.exports = Course;