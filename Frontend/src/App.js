import './App.css';
// import './Components/Dashboard/css/custom.css'
// import './Components/Dashboard/css/bootstrap.min.css'
// import './Components/Dashboard/css/bootstrap.min.css.map'
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Contact from './Components/contact';
import About from './Components/about';
import Login from './Components/Login';
import Register from './Components/register';
import Home from './Components/home';
import FirstTimelog from './Components/FirstTimelog';
import Courses from './Components/Courses';
import Dashboard from './Components/Dashboard/Dashboard';
import DashboardHome from './Components/Dashboard/DashboardHome';
import DashboardChangepassword from './Components/Dashboard/DashboardChangepassword';
import DashboardProfileedit from './Components/Dashboard/DashboardProfileedit';
import DashboardMainContent from './Components/Dashboard/DashboardMainContent';

function App() {
  return (
  
      <Routes>
        {/* Public routes with Header and Footer */}
        <Route path="/" element={<><Header /><Home /><Footer /></>} />
        <Route path="/contact" element={<><Header /><Contact /><Footer /></>} />
        <Route path="/about" element={<><Header /><About /><Footer /></>} />
        <Route path="/login" element={<><Header /><Login /><Footer /></>} />
        <Route path="/register" element={<><Header /><Register /><Footer /></>} />
        <Route path="/firstTime" element={<><Header /><FirstTimelog /><Footer /></>} />
        <Route path="/courses" element={<><Header /><Courses /><Footer /></>} />

        {/* Dashboard related routes without Header and Footer */}
        <Route path="/dashboard/*" element={<Dashboard />}>
          <Route path="" element={<DashboardHome />} />
          <Route path="selectcourses" element={<DashboardMainContent />} />
          <Route path="changepassword" element={<DashboardChangepassword />} />
          <Route path="editProfile" element={<DashboardProfileedit />} />
        </Route>
      </Routes>
 
  );
}

export default App;
