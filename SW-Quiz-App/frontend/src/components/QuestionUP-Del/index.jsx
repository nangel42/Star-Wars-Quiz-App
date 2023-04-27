import { useState } from "react"
import { updateQuestions, deleteQuestions } from '../../../utils/backend'

export default function QuestionUPDel({ data, refreshQuestions }) {

    const [editMode, setEditMode] = useState(false)
    const [editForm, setEditForm] = useState({
        question: data.question,
        answers: data.answers,
        correctAnswer: data.correctAnswer,
        category: data.category,
        difficulty: data.difficulty,
    })

    // Update the form fields as the user types
    function handleInputChange(event) {
        setEditForm(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    // Execute form submission logic
    function handleSubmit(event) {
        // prevent the page from reloading
        event.preventDefault()
        // close the form
        setEditMode(false)
        // refresh the questions
        updateQuestions(data._id, editForm)
            .then(() => refreshQuestions())
    }

    // Execute delete logic
    function handleDelete() {
        // send the data to the backend
        deleteQuestions(data._id)
            .then(() => refreshQuestions())
    }

    //  Default JSX of each comment
    let questionElement = <div>
        <p>{data.question}</p>
        <p>{data.difficulty}</p>
        <div>
            <button onClick={() => { setEditMode(true) }}>
                Edit
            </button>
            <button onClick={handleDelete}>
                Delete
            </button>
        </div>
    </div>

    // Render a form that allows a user to edit a question on submit
    // if (editMode) {
        questionElement = (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="question">Question</label>
                <input
                    type="text"
                    id="question"
                    name="question"
                    value={editForm.question}
                    onChange={handleInputChange}
                />
            </div>

            {/* map over answerrs */}
            <div>
                <label htmlFor="answers">Answers</label>
                {editForm.answers.map((answer, i) => (
                    <input
                        key = {i}
                        type="text"
                        id={`answers${i}`}
                        name={`answers${i}`}
                        value={answer}
                        // make a new array of answers and updates state
                        onChange={(event) => {
                            let newAnswers = [...editForm.answers]
                            newAnswers[i] = event.target.value
                            setEditForm(prevState => ({
                                ...prevState,
                                answers: newAnswers
                            }))
                        }}
                    />
                ))}
            </div>

            <div>
                <label htmlFor="correctAnswer">Correct Answer</label>
                <input
                    type="text"
                    id="correctAnswer"
                    name="correctAnswer"
                    value={editForm.correctAnswer}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="category">Category</label>
                <input
                    type="text"
                    id="category"
                    name="category"
                    value={editForm.category}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="difficulty">Difficulty</label>
                <input
                    type="text"
                    id="difficulty"
                    name="difficulty"
                    value={editForm.difficulty}
                    onChange={handleInputChange}
                />
            </div>
            <button type="submit" className="btn btn-submit" >Submit</button>
            <button type="button" className="btn btn-delete" onClick={handleDelete}>Delete</button>
        </form>
    )
    return questionElement
}
// }