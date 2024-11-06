const multer = require('multer');
const path = require('path');



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



module.exports= upload;