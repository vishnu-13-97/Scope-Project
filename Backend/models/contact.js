const mongoose = require('mongoose');


const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,   
             
    },
    email: {
        type: String,
        required: true,      
  
    
    },
    subject: {
        type: String,
        required: true,        
      
    },
    message: {
        type: String,
        required: true,       
        trim: true
    }
}, { timestamps: true });


const Contact = mongoose.model('Contact', ContactSchema);

module.exports = Contact;
