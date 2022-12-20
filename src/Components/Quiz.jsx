import { useState,useEffect } from "react"
import { Form, Button } from "react-bootstrap"

const Quiz = (props) => {
    const [questions, setQuestions] = useState([])
    const [selectedOptions, setSelectedOptions] = useState(['','','','','','','','','',''])

    useEffect(() => {
        // get 10 random questions
        fetch(`http://localhost:3001/categories/${props.categoryId}/get-ten`)
            .then(res => res.json())
            .then(resData => setQuestions(resData))
            .catch(err => console.log(err))
    })

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
                isCorrect: selectedAnswer === correctAnswer
            })
            if (questions[i].correctAnswer === selectedOptions[i]) {
                score++
            }
        }

        // create new session and populate with data from quiz
        try {
            let res = await fetch(`http://localhost:3001/users/${props.user._id}/sessions`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    user: props.user._id,
                    questions: submittedQuestions,
                    score: score,
                    date: new Date()
                })
            })
            let resJson = await res.text()
            if (res.status === 200) {
                // TODO: show result page
            }
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <Form onSubmit={handleSubmit}>
            { 
                questions.map((question, index) => {
                    <Form.Group onChange={e => handleSelection(index, e.target.value)}>
                        <Form.Label>{question.question}</Form.Label>
                        {
                            props.question.genAnswerOrder().map((answer) => {
                                <Form.Check
                                    type='radio'
                                    label={answer}
                                    value={answer}
                                    name={question.question}
                                />
                            })
                        }
                    </Form.Group>
                })
            }
            <Button onClick={handleSubmit}>Submit</Button>
        </Form>
    )
}

export default Quiz
