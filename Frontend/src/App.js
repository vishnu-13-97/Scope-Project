import './App.css';

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from './Components/Header';
import Contact from './Components/contact';
import About from './Components/about';
import Login from './Components/Login';
import Footer from './Components/Footer';
import Register from './Components/register';
import Home from './Components/home';
import FirstTimelog from './Components/FirstTimelog';
// import Dashboard from  './Components/dashboard';

function App() {
  return (
    <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path='/firstTime' element={<FirstTimelog/>}/>
    </Routes>
    <Footer/>
  </Router>
  // <Dashboard />
  );
}

export default App;
