import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import UserData from './Components/UserData'
import Category from './Components/Category'
import './App.css'

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState('')
  const changeUser = (id) => {
      setUserLoggedIn(id)
  }

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" exact element={ <Home user={userLoggedIn} changeUser={changeUser}/> } />
        <Route path="/YourData" element={ <UserData user={userLoggedIn}/> } />
        <Route path="/Category" element={ <Category user={userLoggedIn}/> } />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
