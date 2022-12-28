import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import UserData from './Components/UserData'
import Session from './Components/Session'
import QuizData from './Components/QuizData'
import Category from './Components/Category'
import Quiz from './Components/Quiz'
import './App.css'
import { useState } from 'react'

function App() {
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false)
  const [user, setUser] = useState({})

  const [categoryId, setCategoryId] = useState('')
  const changeCategoryId = (id) => setCategoryId(id)

  const [sessionId, setSessionId] = useState('')
  const changeSessionId = (id) => setSessionId(id)

  const changeUser = (id) => {
    // set user to new logged in user
    fetch(`http://localhost:3001/users/${id}`)
      .then(res => res.json())
      .then(resData => {
        setUser(resData)
        setUserIsLoggedIn(true)
      })
      .catch(err => console.log(err))

    // update last login field of user

  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home user={user} userIsLoggedIn={userIsLoggedIn} changeUser={changeUser} />} />
          <Route path="/UserData" element={<UserData user={user} />} />
          <Route path="/Category" element={<Category user={user} changeCategoryId={changeCategoryId} />} />
          <Route path="/Quiz" element={<Quiz user={user} categoryId={categoryId} />} />
          <Route path="/Session" element={<Session user={user} changeSessionId={changeSessionId} />} />
          <Route path="/QuizData" element={<QuizData user={user} sessionId={sessionId} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
