const express = require("express");
const app = express();
const session = require('express-session');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
app.use(express.json());
const mongodbUrl = process.env.MONGO_URI
const path = require('path');
path.join(__dirname, 'uploads');
app.use('/uploads', express.static('uploads'));
const MongoStore = require('connect-mongo');
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
  origin:https:'//scope-project-frontend.onrender.com' || 'http://localhost:3000', 
  credentials: true 
}));


app.use(express.urlencoded({ extended: true }));
app.use('/dashboard',DashboardRouter);
app.use('/student',StudentRouter)


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
