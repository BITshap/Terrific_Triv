import React, { useEffect, useState } from "react";

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const [userList, setUserList] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        // fetch array of all users' emails and passwords to check that password is correct
        fetch('http://localhost:3001/users/loginInfo')
            .then(response => response.json())
            .then(resData => setUserList(resData))
            .catch(error => console.log(error.message))
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        
        let loginIsValid = false,
            emailIsValid = false
        userList.forEach(user => {
            // find email
            if (user.email === email) {
                emailIsValid = true
                // check if password is correct
                if (user.password === pass) {
                    loginIsValid = true
                } else {
                    loginIsValid = false
                    setErrorMessage(`Password for ${user.email} is incorrect.`)
                }
            }
        })

        if (loginIsValid) {
            // LOG IN
        } else if (!emailIsValid) {
            setErrorMessage(`There is no account associated with ${email}, please register with the link below.`)
        }
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
                {
                    errorMessage != '' ? errorMessage : ''
                }
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