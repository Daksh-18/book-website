import React from 'react'
import './Footer.css';
const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-content'>
                <div className="footer-section">
                    <h2>ReadSphere</h2>
                    <p>Copyright 2024 ReadSphere</p>
                    <p>Made with care &hearts;</p>
                </div>
                <div className="footer-section">
                    <h2>Contact Us</h2>
                    <p><a href='ReadSphere18@gmail.com'>ReadSphere18@gmail.com</a></p>
                    <p>Phone: 8077306548</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer