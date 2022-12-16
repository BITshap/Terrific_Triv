import { useState,useEffect } from "react"
import { Button } from "react-bootstrap"
import Option from "react-multiple-choice/dist/Option"
import Question from "react-multiple-choice/dist/Question"
import QuestionGroup from "react-multiple-choice/dist/QuestionGroup"

const Quiz = (props) => {
    const [questions, setQuestions] = useState([])
    const [selectedOptions, setSelectedOptions] = useState({})
    const [userSelection, setUserSelection] = useState('')

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

    return (
        <div>
            <p>Quizes</p>

            <Test onOptionSelect={selectedOptions => setSelectedOptions({selectedOptions})}>
                {
                    questions.map((question, i) => {
                        <QuestionGroup questionNumber={i}>
                            <Question>{question.question}</Question>
                            {
                                question.genAnswerOrder().map(answerOption => {
                                    <Option value={answerOption}>{answerOption}</Option>
                                })
                            }
                        </QuestionGroup>
                    })
                }
            </Test>
            <Button onClick={handleSubmit}>Submit</Button>
        </div>
    )
}


export default Quiz
