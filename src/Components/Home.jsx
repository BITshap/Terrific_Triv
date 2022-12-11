
//import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";


const Home = (user) => {
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
            </div>
        </div>
    )  
}

export default Home