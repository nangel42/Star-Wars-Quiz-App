import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import HomePage from '../HomePage'
import QuizPage from "../QuizPage";
import MoreInfoPage from "../MoreInfoPage";
import QuestionCRUDPage from "../QuestionCRUDPage";
import DetailPage from "../DetailPage";
import './styles.css'

function App() {

 
  return ( 
    <>

      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/quiz/:difficulty" element={<QuizPage/>} />
        <Route path="/info" element={<MoreInfoPage/>} />
        <Route path="/question" element={<QuestionCRUDPage/>} />
        <Route path="/detail/:category/:id" element={<DetailPage/>} />
      </Routes>
    </>
  )
}

export default App
