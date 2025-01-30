# ![Scope India Logo](https://github.com/vishnu-13-97/Scope-Project/blob/main/Frontend/public/assets/scope%20Images/scope-india-logo-home-page.png) 
Scope India Educational Website

## Overview
This is a web-based educational platform built for Scope India, allowing users to browse and enroll in various courses. The website is developed using React.js, Bootstrap CSS, Express.js, and MongoDB, offering a dynamic and interactive experience for students.

## 🚀 Features
- 📚 Course listing with details
- 👥 User registration and authentication (JWT-based authentication)
- ✅ Course enrollment functionality
- 🎨 Modern UI with React.js and Bootstrap CSS
- 🔒 Secure backend with Express.js and MongoDB

## 🛠 Tech Stack
- **Frontend**: ![React](https://img.shields.io/badge/React-blue) ![Bootstrap](https://img.shields.io/badge/Bootstrap-purple) ![HTML](https://img.shields.io/badge/HTML5-orange) ![CSS](https://img.shields.io/badge/CSS3-blue) ![JavaScript](https://img.shields.io/badge/JavaScript-yellow)
- **Backend**: ![Node.js](https://img.shields.io/badge/Node.js-green) ![Express.js](https://img.shields.io/badge/Express.js-black)
- **Database**: ![MongoDB](https://img.shields.io/badge/MongoDB-darkgreen)
- **Authentication**: ![JWT](https://img.shields.io/badge/JWT-red)
- **Hosting**: ![Render](https://img.shields.io/badge/Render-blue)

## 📁 Folder Structure
```
📦 scope-edu
 ┣ 📂 Frontend (React App)
 ┃ ┣ 📂 src
 ┃ ┃ ┣ 📂 components
 ┃ ┃ ┣ 📂 pages
 ┃ ┃ ┣ App.js
 ┃ ┃ ┗ index.js
 ┣ 📂 Backend (Backend)
 ┃ ┣ 📂 routes
 ┃ ┃ ┣ auth.js
 ┃ ┃ ┗ courses.js
 ┃ ┣ 📂 models
 ┃ ┃ ┗ User.js
 ┃ ┣ 📂 config
 ┃ ┃ ┗ db.js
 ┃ ┗ server.js
 ┣ 📜 .env
 ┣ 📜 package.json
 ┗ 📜 README.md
```

## 🔧 Installation & Setup

### Prerequisites
Ensure you have the following installed:
- Node.js
- MongoDB (local or cloud-based, e.g., MongoDB Atlas)

### Steps to Run the Project
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/scope-edu.git
   cd scope-edu
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   Create a `.env` file in the root directory and add the following:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```
4. Start the backend server:
   ```bash
   npm start
   ```
5. Navigate to the client directory and install dependencies:
   ```bash
   cd client
   npm install
   ```
6. Start the React app:
   ```bash
   npm start
   ```
7. Open the application in your browser:
   ```
   http://localhost:3000 (React Frontend)
   http://localhost:5000 (Backend API)
   ```

## 🎯 Usage
- Users can browse available courses.
- New users can register and log in.
- Registered users can enroll in courses.

## 🌟 Future Improvements
- Implement payment gateway for course purchases.
- Add an admin panel for course management.
- Improve UI/UX with additional frontend enhancements.

## 🤝 Contributing
Feel free to fork the repository and submit pull requests.

## 📜 License
This project is licensed under the MIT License.
