import { Routes, Route, Link } from "react-router-dom";
import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import HomePage from '../HomePage'
import QuizPage from "../QuizPage";
import MoreInfoPage from "../MoreInfoPage";
import './styles.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/quiz" element={<QuizPage/>} />
        <Route path="/info" element={<MoreInfoPage/>} />
      </Routes>
    </>
  )
}

export default App
