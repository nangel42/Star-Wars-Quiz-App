import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'


export default function CRUDSection() {

    const [existingQuestions, setExistingQuestions] = useState([])
    const [newQuestion, setNewQuestion] = useState(false)
    const [createForm, setCreateForm] = useState({
        question: "",
        answers: "",
        correctAnswer: "",
        category: "",
        difficulty: "",
    })

    // Render a form that allows a user to create a question on submit
    //scotts code
    function toggleCreateForm() {
        setNewQuestion(!newQuestion)
    }

    

    return (
        <>
        <h1>CRUD Page</h1>


        <div>
            <Link to ="/">
                <button>Back</button>
            </Link>
        </div>
        </>
    )
}