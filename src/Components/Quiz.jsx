import { useState,useEffect } from "react"

const Quiz = (props) => {
    const [session, setSession] = useState({
        user: props.user._id,
        questions: [{}]
    })

    const [questions, setQuestions] = useState([])

    useEffect(() => {
        // get 10 random questions
        fetch(`http://localhost:3001/categories/${props.categoryId}/get-ten`)
            .then(res => res.json())
            .then(resData => setQuestions(resData))
            .catch(err => console.log(err))
    })

    // handle quiz submission

    return (
        <div>
            <p>Quizes</p>
        </div>
    )
}

export default Quiz
