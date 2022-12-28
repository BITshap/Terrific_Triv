import { Form, Button } from "react-bootstrap"
import Card from 'react-bootstrap/Card'
import Home from './Home'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'


const QuizData = (props) => {
    const [questions, setQuestions] = useState([])
    const [score, setScore] = useState('')

    useEffect(() => {
        // get session data
        fetch(`http://localhost:3001/session/${props.user._id}/${props.sessionId}`)
            .then(res => res.json())
            .then(resData => {
                console.log(resData)
                setQuestions(resData.questions)
                setScore(resData.score)
            })
            .catch(err => console.log(err))
    }, [])

    // highlist correct answers
    function ListItem(props) {
        if (props.isCorrect) {

            return <li key={props.correctAnswer} style={{ textalign: 'left', color: 'green' }}>{props.correctAnswer}</li>

        } else {

            return <li key={props.correctAnswer} style={{ textalign: 'left', color: 'red' }}><span style={{ textDecoration: 'line-through', color: 'red' }}>{props.selectedAnswer}</span>&nbsp;<span style={{ color: 'green' }}>{props.correctAnswer}</span></li>

        }
    }



    return (
        <div className="quiz-wrapper">
            <h2>Your Score: {score} out of 10</h2>
            {
                questions.map((question) => {
                    return (
                        <Card key={'card_' + question._id} className='card'>
                            <Card.Header id="names">{question.question}</Card.Header>
                            <Card.Body>
                                <br />
                                <ul>
                                    {ListItem(question)}
                                </ul>
                            </Card.Body>
                        </Card>
                    )
                })
            }
            <Link to="/">
                <Button className="linky-button glow-on-hover glow-on-hover:before glow-on-hover:active glow-on-hover:active:after glow-on-hover:hover:before glow-on-hover:after glowing">Home</Button>
            </Link>
        </div>
    )

}

export default QuizData