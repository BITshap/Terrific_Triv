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
                <h1>Weclome {user.firstName} to Terrific Trivia!</h1>
                <h3>Be Prepared for some Terrifically Tricky Questions</h3>
                <div className="User-Data-Wrapper">
                    <h2>Your Stats</h2>
                    <h1>{user.firstName} + {user.lastName}</h1>
                    <h2>{user.email}</h2>
                    <h2>{user.age}</h2>
                    <h2>{user.lastPlayed}</h2>
                    <h2>{user.lastLogin}</h2>
                </div>
                {/*
                possible boolean where if time between CURRENT DATE 
                and user.lastPlayed is >= 1 week display
                "user.firstName are you tired of being terrific?!"
                */}
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