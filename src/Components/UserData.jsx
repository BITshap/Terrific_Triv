import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Home from '../Components/Home'
import {Link} from 'react-router-dom'

const user = {
    firstName: "Chunky",
    lastName: "Cheese",
    email: "chunkycheese@gmail.com",
    age: 2,
    overallGrade: 'FF',
    lastPlayed: "12-13-17",
    lastLogin: "12-13-17",
}

const Userdata = () => {
    return (
        <div className="user-wrapper">
        <Card className="text-center card">
        <Card.Header id="names">{user.firstName} {user.lastName}'s Stats</Card.Header>
        <Card.Body>
        <br />
        <Card.Title>Current Grade: {user.overallGrade}</Card.Title>
        <Card.Text>
        <br />
        <h5>Age: {user.age}</h5>
        <br />
        <h5>Last terrific quiz: {user.lastPlayed}</h5>
        <br />
        <h5>Last terrific login: {user.lastLogin}</h5>
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