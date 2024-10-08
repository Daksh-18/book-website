import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-image">
        <img src="https://images.pexels.com/photos/256450/pexels-photo-256450.jpeg?auto=compress&cs=tinysrgb&w=600" alt="About our brand" />
      </div>
      <div className="about-content">
        <h2>About our brand</h2>
        <p>
          At ReadSphere, we believe in the transformative power of stories. Our mission is to connect readers with eBooks that inspire, educate, and entertain. Whether you're a casual reader or a literary enthusiast, our curated collection brings the world of books to your fingertips.
          We understand that every reader is unique, so we've created a platform that allows you to discover books tailored to your tastes. 
          
        </p>
        <p>
        At ReadSphere, we don't just sell books; we offer a community where readers and stories come together.
        Join us on this journey, and explore the universe of words with ReadSphere. Your next great read is just a click away!
        </p>
        <button className="learn-more-btn">Learn more</button>
      </div>
    </section>
  );
};

export default About;
