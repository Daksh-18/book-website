import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Authen.css';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle registration logic here
        console.log('Registered with:', { name, email, password });
    };

    return (
        <div className="auth-container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Register</button>
            </form>
            <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
    );
};

export default Register;
