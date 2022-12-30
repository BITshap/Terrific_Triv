import { useEffect, useState } from "react"
import SesDropDown from './SesDropDown'

const Session = (props) => {
    const [sessions, setSessions] = useState([])

    useEffect(() => {
        // fetch array of all sessions
        console.log(props)
        console.log(props.user._id)
        fetch(`http://localhost:3001/session/${props.user._id}`)
            .then(foundSessions => foundSessions.json())
            .then(sessions => setSessions(sessions))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="session-container">
            <h1>Your Sessions</h1>
            <SesDropDown options={sessions} setId={props.changeSessionId} />
        </div>
    )
}

export default Session