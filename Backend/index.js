const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const StudentRouter = require("./routes/student");
const DashboardRouter = require("./routes/dashboard");

const mongodbUrl = process.env.MONGO_URI;

// Middleware Configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Trust proxy for Render's reverse proxy
app.set("trust proxy", 1);

// CORS Configuration
app.use(
  cors({
    origin: "https://scope-project-frontend.onrender.com", // Frontend URL (no trailing /)
    credentials: true, // Allow cookies
  })
);

// Serve static files
const path = require("path");
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// JWT Authentication Middleware (Add this to protected routes)
// const authenticateJWT = (req, res, next) => {
//   const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  
//   if (!token) {
//     return res.status(403).json({ error: "Authentication required" });
//   }

//   jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
//     if (err) {
//       return res.status(403).json({ error: "Invalid or expired token" });
//     }
//     req.user = user;
//     next();
//   });
// };

// Routes
app.use("/student", StudentRouter);
app.use("/dashboard", DashboardRouter); // Protected route

// MongoDB Connection
mongoose
  .connect(mongodbUrl)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
