const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const path = require("path");
require("dotenv").config();

// Routes
const StudentRouter = require("./routes/student");
const DashboardRouter = require("./routes/dashboard");

// =======================
// Core Middlewares
// =======================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Required for Render / reverse proxy
app.set("trust proxy", 1);

// =======================
// CORS Configuration
// =======================
app.use(
  cors({
    origin: "https://scope-project-frontend.onrender.com",
    credentials: true,
  })
);

// =======================
// SESSION (OTP Support)
// =======================
app.use(
  session({
    name: "student-session",
    secret: process.env.SESSION_SECRET || "otp-secret-key",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // MUST be true on Render
      sameSite: "none", // REQUIRED for cross-site cookies
      maxAge: 10 * 60 * 1000, // 10 minutes
    },
  })
);

// =======================
// Static Files
// =======================
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// =======================
// Routes
// =======================
app.use("/student", StudentRouter);
app.use("/dashboard", DashboardRouter);

// =======================
// MongoDB Connection
// =======================
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// =======================
// Server
// =======================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
