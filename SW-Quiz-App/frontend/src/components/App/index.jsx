import { Routes, Route, Link } from "react-router-dom";
import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import HomePage from '../HomePage'
import './styles.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Routes>
        <Route path="/" element={<HomePage/>} />

      </Routes>
    </>
  )
}

export default App
