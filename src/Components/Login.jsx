import React, { useState } from "react";

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    const playAnoymously = () => {
        setEmail("anonymous@anonymous.com");
        setPass("anonymous");
        handleSubmit();
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*******" id="password" name="password" />
                <button type="submit" className="login-button">Login</button>
            </form>
            <button className="link-btn login-button" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
            <button className="link-btn login-button" onClick={() => playAnoymously()}>Just want to play anonymously?</button>
        </div>
    )
}

export default Login 