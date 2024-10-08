import React from 'react';
import Home from './components/Home';
import Shop from './components/Shop';
import About from './components/About';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="header">
        <div className="brand-name">ReadSphere</div>
        <nav className="nav-links">
          <a href="/">Shop</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/cart">Cart</a>
        </nav>
      </header>

      <section className="hero">
        <div className="writing">
          <h1><span>Welcome to</span></h1>
          <h1><span>ReadSphere</span></h1>
          <p>Where the world of books meets the world of you.</p>
          <p>Your gateway to endless stories.</p>
        </div>
        <div className="hero-image">
          {/* <div className="hero-text">
            Welcome people t.
          </div> */}
        </div>
      </section>

      <main className='main'>
        <Home />
        <Shop />
        <About />
        <Footer />
      </main>
    </div>
  );
}

export default App;
