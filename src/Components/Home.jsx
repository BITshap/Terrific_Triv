import { Link } from "react-router-dom";
import React, { useState } from "react";
import Button from 'react-bootstrap/Button'
import Category from './Category'
import Login from "./Login"
import Register from "./Register"


const Home = (props) => {
    const [currentForm, setCurrentForm] = useState('login');
    const toggleForm = (formName) => {
        setCurrentForm(formName);
    }
    console.log(props.userIsLoggedIn)
    return (
        <div className="wrapper">
            <div className="container display:flex  margin:auto justify-content-center text-align-center">
            <h1>Welcome to Terrific Trivia!</h1>
            <h3>Be Prepared for some Terrifically Tricky Questions</h3>
            <nav>
                    <ul>
                        <li>
                        <Link to="/YourData">
                            <Button id="data" className="linky-button glow-on-hover glow-on-hover:before glow-on-hover:active glow-on-hover:active:after glow-on-hover:hover:before glow-on-hover:after glowing">Your Data</Button>
                            </Link>
                        </li>
                        <li>
                        <Link to="/Category">
                            <Button id="category" className="linky-button glow-on-hover glow-on-hover:before glow-on-hover:active glow-on-hover:active:after glow-on-hover:hover:before glow-on-hover:after glowing">
                            Categories
                                </Button></Link>
                        </li>
                    </ul>
                </nav>       
            </div>
            <div>
                <div>
                    <div>
                    {
                        !props.userIsLoggedIn ? 
                        (currentForm === "login" ? <Login onFormSwitch={toggleForm} changeUser={props.changeUser} /> : <Register onFormSwitch={toggleForm} changeUser={props.changeUser}/>) :
                        <p className="header-grow">Welcome {props.user.firstName}!</p>
                    }
                    </div>
                </div>
            </div>
        </div>
)
}

export default Home