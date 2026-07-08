
import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Apply from "./pages/Apply";
import Home from "./pages/Home";
import Footer from "./pages/Footer";


function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
         <Route path="/apply" element={<Apply />} />
         <Route path="/home" element={<Home />} />
        
        
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};
export default App;


