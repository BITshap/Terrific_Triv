//import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Button from 'react-bootstrap/Button'
import Category from './Category'
import Login from "./Login"
import Register from "./Register"

const Home = (user) => {
    const [currentForm, setCurrentForm] = useState('login');
    const toggleForm = (formName) => {
        setCurrentForm(formName);
    }

    return (
        <div className="container">
            <div className="mx-auto, text-center">
            <h1>Welcome {user.firstName} to Terrific Trivia!</h1>
            <h3>Be Prepared for some Terrifically Tricky Questions</h3>       
            </div>
            <div>
                <nav>
                    <ul>
                        <li>
                        <Link to="/YourData">Your Data</Link>
                        </li>
                        <li>
                        <Link to="/Category">Categories</Link>
                        </li>
                    </ul>
                </nav>
                <div>
                    <div>
                    {
                        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm}/>
                    }
                    </div>
                    <Category />
                    <Button>Start your Quiz!</Button>
                </div>
            </div>
        </div>
    )
}

export default Home