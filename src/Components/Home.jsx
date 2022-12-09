const React = require('react')
const user = require('../../models/user')

import Category from './Category'

const Home = (user) => {
    return (
        <div className="Home-Page">
            <h1>Weclome {user.firstName} to Terrific Trivia!</h1>
            <h3>Be Prepared for some Terrificly Tricky Questions</h3>
            <div className="User-Data-Wrapper">
                <h1>Your Stats</h1>
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
                <Category />
            </div>          
        </div>
    )  
}

export default Home