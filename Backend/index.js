const express = require("express");
const app = express();
const session = require('express-session');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const MongoStore = require('connect-mongo');
const StudentRouter = require('./routes/student');
const DashboardRouter = require('./routes/dashboard');

const mongodbUrl = process.env.MONGO_URI;

// Middleware configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Serve static files
const path = require('path');
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Enable trust proxy for secure cookies on Render
app.set('trust proxy', 1);

// CORS middleware
app.use(
  cors({
    origin: 'https://scope-project-frontend.onrender.com', // Replace with your frontend domain
    credentials: true, // Allow cookies to be sent
  })
);

// Session middleware
app.use(
  session({
    secret: process.env.SESSION_PASS,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: mongodbUrl,
      ttl: 14 * 24 * 60 * 60, // 14 days in seconds
    }),
    cookie: {
      secure: process.env.NODE_ENV === 'production', // Send cookies only over HTTPS in production
      httpOnly: true, // Prevent client-side JavaScript access
      sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Lax', // Cross-origin compatibility
      path: '/', // Root path
      maxAge: 10 * 60 * 1000, // 10 minutes
    },
  })
);

// Routers
app.use('/dashboard', DashboardRouter);
app.use('/student', StudentRouter);

// Connect to MongoDB
mongoose
  .connect(mongodbUrl)
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server listening on PORT ${process.env.PORT}`);
});
