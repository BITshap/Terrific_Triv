import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Home from '../Components/Home'
import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react'

const Userdata = (props) => {

    return (
        <div className="user-wrapper">
        <Card className="text-center card">
        <Card.Header id="names">{props.user.firstName} {props.user.lastName}'s Stats</Card.Header>
        <Card.Body>
        <br />
        <Card.Title>Current Grade: {props.user.overallGrade}</Card.Title>
        <Card.Text>
        <br />
        <h5>Age: {props.user.age}</h5>
        <br />
        <h5>Last terrific quiz: {props.user.lastPlayed}</h5>
        <br />
        <h5>Last terrific login: {props.user.lastLogin}</h5>
        <br />
        </Card.Text>
       <Link to="/">
        <Button className="linky-button glow-on-hover glow-on-hover:before glow-on-hover:active glow-on-hover:active:after glow-on-hover:hover:before glow-on-hover:after glowing">Home</Button>
        </Link>
        </Card.Body>  
        </Card>
        </div>
    )
   
}

export default Userdata