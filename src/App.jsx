import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import {Link} from 'react-router-dom';                                              //client side navigation easy csn also use anchor tags

import Home from './components/Home';
import Shop from './components/Shop';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Login from './components/Login';
import Register from './components/Register';
import Footer from './components/Footer';
import './App.css';
// import router from 'express/lib/router';

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <div className="brand-name">ReadSphere</div>
          <nav className="nav-links">
            <Link to="/home">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">ContactUs</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/login">Login</Link>
           
          </nav>
        </header>

        

        <main className='main'>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Navigate to="login" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
