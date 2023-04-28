import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getQuestions, postQuestions} from '../../../utils/backend'
import QuestionUPDel from '../QuestionUP-Del'



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

    useEffect(() => {
        getQuestions().then(data => setExistingQuestions(data))
    }, [])
    

    // Update the form fields as the user types
    function handleInputChange(event) {
        setCreateForm(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    function refreshQuestions() {
        getQuestions().then(data => setExistingQuestions(data))
    }    

    // Render a form that allows a user to create a question on submit
    //scotts code
    function toggleCreateForm() {
        setNewQuestion(!newQuestion)
    }



    // Execute form submission logic
    function handleSubmit(event) {
        // prevent the page from reloading
        event.preventDefault()

        // clear the form
        setCreateForm({
            question: "",
            answers: "",
            correctAnswer: "",
            category: "",
            difficulty: "",
        })
        // close the form
        setNewQuestion(false)

        // Format the form data
        const formData = { ...createForm }
        //Split at every comma, then trim the whitespace
        formData.answers = formData.answers.split(',').map(answer => answer.trim())

        postQuestions(formData)
            .then(() => refreshQuestions())
    }

    // conditionally render questions
    let questionElements = [<p key='0' className='text-center'>No questions yet, be the first to make one!</p>]
    if (existingQuestions.length > 0) {
        questionElements = existingQuestions.map(question => {
            return <QuestionUPDel
                key={question._id}
                data={question}
                refreshQuestions={refreshQuestions}
            />
        })
    }

    // conditionally display the text of the create form button
    let btnText = 'Create'
    if (newQuestion) {
        btnText = 'Close'
    }

    return (
    <>
        <h1>CRUD Page</h1>

        <div>
            <h1>Viewer Insights</h1>
            <button onClick={toggleCreateForm}>
                {btnText}
            </button>
            {
                newQuestion && <form onSubmit={handleSubmit}>
                    <input
                        name="question"
                        placeholder="New Question"
                        value={createForm.question}
                        onChange={handleInputChange}
                    />
                    <br />
                    <textarea
                        name="answers"
                        placeholder="Write 4 answers, separated by commas"
                        value={createForm.answers}
                        onChange={handleInputChange}               
                    />
                    <br />
                    <input
                        name="correctAnswer"
                        placeholder="What is the correct answer?"
                        value={createForm.correctAnswer}
                        onChange={handleInputChange}
                    />
                    <br />
                    <input
                        name="category"
                        placeholder="Category"
                        value={createForm.category}
                        onChange={handleInputChange}
                    />
                    <br />
                    <input
                        name="difficulty"
                        placeholder="Difficulty"
                        value={createForm.difficulty}
                        onChange={handleInputChange}
                    />
                    <button type="submit">
                        Post
                    </button>
                </form>
            }
            {questionElements}
        </div>

        <div>
            <Link to ="/">
                <button>Back</button>
            </Link>
        </div>
    </>
    )
}