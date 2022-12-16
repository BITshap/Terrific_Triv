import { useState,useEffect } from "react"
import { Button } from "react-bootstrap"

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
        <div>
            <p>Quizes</p>

            <ul>
                { 
                    questions.map((question, index) => (
                        <div>
                            <li key={ index }>{index + 1}: {question.question}</li>
                            <Question quesstion={question}/>
                        </div>
                    ))
                }
            </ul>

            {/* <Test onOptionSelect={selectedOptions => setSelectedOptions({selectedOptions})}>
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
            </Test> */}
            <Button onClick={handleSubmit}>Submit</Button>
        </div>
    )
}

export default Quiz
