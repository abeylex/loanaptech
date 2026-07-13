
import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./pages/Login";
import Apply from "./pages/Apply";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";



function App() {
  return (
    <Router>
      <div className='App'>
       
        <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
         <Route path="/apply" element={<Apply />} />
         <Route path="/" element={<Home />} />
         <Route path="/signup" element={<Signup />} />
         <Route path="/dashboard" element={<Dashboard />} />
         <Route path="/navbar" element={<Navbar />} />
         

        
        
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};
export default App;


