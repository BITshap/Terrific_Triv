import React, { useEffect, useState } from "react";

const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');

    const [userList, setUserList] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        // fetch array of all users' emails to check for emails that have already been used
        fetch('http://localhost:3001/users/loginInfo')
            .then(response => response.json())
            .then(resData => setUserList(resData))
            .catch(error => console.log(error.message))
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // check email to see if account already exists
        let emailIsValid = true;
        if (userList.length > 0) {
            userList.forEach(user => {
                if (user.email === email) {
                    setErrorMessage(`${email} is already associated with a Terrific Trivia account!`)
                    emailIsValid = false;
                }
            })
        }

        // if email is valid POST new user
        if (emailIsValid) {
            try {
                let res = await fetch('http://localhost:3001/users', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        "firstName": firstName,
                        "lastName": lastName,
                        "email": email,
                        "password": pass,
                        "age": age,
                        "lastPlayed": new Date(0),
                        "lastLogin": new Date(),
                        "overallGrade": 'No Session Data (YET!)',
                        "sessions": []
                    })
                })
                let resJson = await res.text()
                if (res.status === 200) {
                    // reset field values
                    setEmail('')
                    setPass('')
                    setFirstName('')
                    setLastName('')
                    setAge('')
                    // send user to login screen
                    props.onFormSwitch('login')
                } else {
                    setErrorMessage(resJson)
                    console.log(resJson)
                }
            } catch (error) {
                console.log(error)
            }
        }
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name:</label>
                <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="firstName" placeholder="First Name" id="firstName" name="firstName" />
                <label htmlFor="lastName">Last Name:</label>
                <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="lastName" placeholder="Last Name" id="lastName" name="lastName" />
                <label htmlFor="age">Age:</label>
                <input value={age} onChange={(e) => setAge(e.target.value)} type="age" placeholder="Age" id="age" name="age" />
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*******" id="password" name="password" />
                <button type="submit" className="login-button">Register</button>
                {
                    errorMessage != '' ? errorMessage : ''
                }
            </form>
            <button className="link-btn login-button" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </div>
    )
}

export default Register 