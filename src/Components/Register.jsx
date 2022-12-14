import React, { useEffect, useState } from "react";

const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [emailList, setEmailList] = useState([]);
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        // fetch array of all users' emails to check for emails that have already been used
        fetch('http://localhost:3001/users/emails')
            .then(response => response.json())
            .then(resData => setEmailList(resData))
            .catch(error => console.log(error.message))
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // check email to see if account already exists
        let emailIsValid = true;
        emailList.forEach(existingEmail => {
            if (existingEmail === email) {
                setErrorMessage(`${email} is already associated with a Terrific Trivia account!`)
                emailIsValid = false;
                // TODO: display error message and reset form
            }
        })

        // if email is valid POST new user
        if (emailIsValid) {
            try {
                let res = await fetch('http://localhost:3001/users', {
                    method: 'POST',
                    body: JSON.stringify({
                        firstName: firstName,
                        lastName: lastName,
                        email: email,
                        password: pass,
                        age: age,
                        lastPlayed: new Date(0),
                        lastLogin: new Date(),
                        overallGrade: 'No Session Data (YET!)',
                        sessions: []
                    })
                })
                let resJson = await res.json()
                if (res.status === 200) {
                    // reset field values
                    setEmail('')
                    setPass('')
                    setFirstName('')
                    setLastName('')
                    setAge('')
                } else {
                    setErrorMessage(resJson)
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
                <label htmlfor="firstName">First Name:</label>
                <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="firstName" placeholder="First Name" id="firstName" name="firstName" />
                <label htmlfor="lastName">Last Name:</label>
                <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="lastName" placeholder="Last Name" id="lastName" name="lastName" />
                <label htmlfor="age">Age:</label>
                <input value={age} onChange={(e) => setAge(e.target.value)} type="age" placeholder="Age" id="age" name="age" />
                <label htmlfor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlfor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*******" id="password" name="password" />
                <button type="submit" className="login-button">Login</button>
            </form>
            <button className="link-btn login-button" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </div>
    )
}

export default Register 