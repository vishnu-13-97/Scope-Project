import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from './Components/Header';
import Contact from './Components/contact';

import About from './Components/about';
import Login from './Components/Login';
import Footer from './Components/Footer';

import Register from './Components/register';
import Home from './Components/home';

function App() {
  return (
    <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      {/* <Route path="/staff" element={<Staff />} /> */}
      {/* <Route path="/news" element={<News />} /> */}
      {/* <Route path="/gallery" element={<Gallery />} /> */}
      {/* <Route path="/elements" element={<Elements />} /> */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
    <Footer/>
  </Router>
  );
}

export default App;
