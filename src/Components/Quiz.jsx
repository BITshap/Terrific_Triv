import { useState,useEffect } from "react"
import { Form, Button } from "react-bootstrap"

const Quiz = (props) => {
    const [questions, setQuestions] = useState([])
    const [selectedOptions, setSelectedOptions] = useState([])

    useEffect(() => {
        // get 10 random questions
        fetch(`http://localhost:3001/categories/${props.categoryId}/get-ten`)
            .then(res => res.json())
            .then(resData => setQuestions(resData))
            .catch(err => console.log(err))
    })

    // handle quiz submission
    const handleSubmit = () => {

    }
    
    // for when use selects opetion
    // setSelectedOptions([ ...selectedOptions, newlySelectedOption ])
    return (
        <Form onSubmit={handleSubmit}>
            { 
                questions.map((question, index) => {
                    <Form.Group>
                        <Form.Label>{question.question}</Form.Label>
                            {
                                props.question.genAnswerOrder().map((answer) => {
                                    <div key={props.question._id}>
                                        <Form.Check
                                            type='radio'
                                            label={answer}
                                            value={answer}
                                            name={question.question}
                                            />
                                    </div>
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
