import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Authen.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Logging in with:', { email, password });
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <div className="login-form-section">
                    <h2>Sign in</h2>
                    <form onSubmit={handleLogin}>
                        <input
                            type="text"
                            placeholder="Enter name"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button type="submit">Sign in</button>
                    </form>
                    <p>or with</p>
                    <div className="social-login">
                        <button className="social-btn google">Google</button>
                    </div>
                </div>
                <div className="welcome-section">
                    <h2>Welcome back!</h2>
                    <p>We are so happy to have you here. It's great to see you again. We hope you had a safe and enjoyable time away.</p>
                    <p>No account yet? <Link to="/register">Signup.</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;

