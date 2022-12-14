import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import UserData from './Components/UserData'
import Category from './Components/Category'
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" exact element={ <Home/> } />
        <Route path="/UserData" element={ <UserData/> } />
        <Route path="/Category" element={ <Category/> } />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
