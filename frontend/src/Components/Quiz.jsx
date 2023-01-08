import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Home from "./Home";

const Quiz = (props) => {
    const [questions, setQuestions] = useState([])
    const [selectedOptions, setSelectedOptions] = useState(['', '', '', '', '', '', '', '', '', ''])
    const navigate = useNavigate();

    useEffect(() => {
        // get 10 random questions
        fetch(`https://terrific-triv-be.herokuapp.com/categories/${props.categoryId}/questions/get-ten`)
            .then(res => res.json())
            .then(resData => {
                console.log(resData[0].incorrectAnswers[0][0][1])
                setQuestions(resData)
            })
            .catch(err => console.log(err))
    }, [])

    // shuffle answer options
    const genAnswerOrder = (inputArray) => {
        let answerArray = [...inputArray]

        // shuffle answerArray using Frisher-Yates method
        let currentIndex = answerArray.length
        let randomIndex

        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex--
            [answerArray[currentIndex], answerArray[randomIndex]] = [answerArray[randomIndex], answerArray[currentIndex]]
        }

        // return array of all answer options in random order
        return answerArray
    }

    // handle answer option selections
    const handleSelection = (index, selection) => {
        let tempArray = selectedOptions
        tempArray[index] = selection
        setSelectedOptions(tempArray)
        console.log(selectedOptions)
    }

    // handle quiz submission
    const handleSubmit = async (e) => {
        e.preventDefault()

        // create record of questions and answers
        let submittedQuestions = []
        let score = 0
        for (let i = 0; i < 10; i++) {
            submittedQuestions.push({
                questionId: questions[i]._id,
                question: questions[i].question,
                correctAnswer: questions[i].correctAnswer,
                selectedAnswer: selectedOptions[i],
                isCorrect: selectedOptions[i] === questions[i].correctAnswer
            })
            if (questions[i].correctAnswer === selectedOptions[i]) {
                score++
            }
        }

        // create new session and populate with data from quiz
        try {
            let res = await fetch(`https://terrific-triv-be.herokuapp.com/session/${props.user._id}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    user: props.user._id,
                    questions: submittedQuestions,
                    score: score,
                    date: new Date()
                })
            })
            //let resJson = await res.text()
            if (res.status === 200) {
                // TODO: show result page
                console.log("Sessions sucessfully saved!");
                navigate("/");
            }
        } catch (error) {
    console.log(error)
}
    }

return (
    <div className="quiz-wrapper">
        <Form onSubmit={handleSubmit}>
            {
                questions.map((question, index) => {
                    return (
                        <Form.Group key={'form_' + question._id} onChange={e => handleSelection(index, e.target.value)}>
                            <Card key={'card_' + question._id} className='card'>
                                <Card.Header id="names">{question.question}</Card.Header>
                                <Card.Body>
                                    <br />
                                    {
                                        genAnswerOrder([question.correctAnswer, question.incorrectAnswers[0][0][1], question.incorrectAnswers[0][0][2], question.incorrectAnswers[0][0][3]]).map((answer) => {
                                            return (
                                                <Form.Check className='card' style={{ textalign: 'left' }}
                                                    key={answer + '_' + index.toString()}
                                                    type='radio'
                                                    label={answer}
                                                    value={answer}
                                                    name={question.question}
                                                />
                                            )
                                        })
                                    }
                                </Card.Body>
                            </Card>
                        </Form.Group>
                    )
                })
            }
            <Link to="/">
                <Button className="linky-button glow-on-hover glow-on-hover:before glow-on-hover:active glow-on-hover:active:after glow-on-hover:hover:before glow-on-hover:after glowing" onClick={handleSubmit}>Submit</Button>
            </Link>
        </Form>
    </div>
)
}

export default Quiz