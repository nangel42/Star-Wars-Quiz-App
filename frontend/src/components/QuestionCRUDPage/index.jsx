import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getQuestions, postQuestions} from '../../../utils/backend'
import QuestionUPDel from '../QuestionUP-Del'
import { Button, Form, Input, Select } from 'antd'
import { LeftOutlined } from '@ant-design/icons';



export default function CRUDSection() {

    const { Option } = Select;
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
    

    // Update the form fields as the user types ONLY if event target is defined
    function handleInputChange(event) {
        if (event.target) {
            setCreateForm(prevState => ({
                ...prevState,
                [event.target.name]: event.target.value
            }))
        }
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
        <nav>
            <Link to ="/">
                <LeftOutlined />
            </Link>
        </nav>

        <h1>Create a Question!</h1>
        <h2>Or change one! (Don't Cheat!)</h2>

        <br />

        <div>
            
            <Button onClick={toggleCreateForm}>
                {btnText}
            </Button>

            {newQuestion && (
          <Form onSubmit={handleSubmit} layout="vertical">

                <Form.Item
                label="New Question"
                name="question"
                rules={[{ required: true, message: "Please input a question!" }]}
                >
                    <Input
                    placeholder="New Question"
                    name="question"
                    value={createForm.question}
                    onChange={handleInputChange}
                    />
                </Form.Item>


                <Form.Item
                label="Answers"
                name="answers"
                rules={[{ required: true, message: "Please input 4 answers!" }]}
                >
                    <Input.TextArea
                    placeholder="Write 4 answers, separated by commas"
                    name="answers"
                    value={createForm.answers}
                    onChange={handleInputChange}
                    />
                </Form.Item>


                <Form.Item
                label="Correct Answer"
                name="correctAnswer"
                rules={[{ required: true, message: "Please input the correct answer!" }]}
                >
                    <Input
                    placeholder="What is the correct answer?"
                    name="correctAnswer"
                    value={createForm.correctAnswer}
                    onChange={handleInputChange}
                    />
                </Form.Item>


                <Form.Item label="Category" name="category" rules={[{ required: true, message: 'Please select a category!' }]}>
                    <Select placeholder="Select a category" name="category" value={createForm.category} onChange={handleInputChange}>
                        <Select.Option value="Films">Films</Select.Option>
                        <Select.Option value="People">People</Select.Option>
                        <Select.Option value="Planets">Planets</Select.Option>
                        <Select.Option value="Species">Species</Select.Option>
                        <Select.Option value="Starships">Starships</Select.Option>
                        <Select.Option value="Vehicles">Vehicles</Select.Option>
                    </Select>
                </Form.Item>


                <Form.Item
                label="Difficulty"
                name="difficulty"
                rules={[{ required: true, message: "Please select a difficulty!" },]}
                >
                    <Select placeholder="Select a difficulty" name="difficulty" value={createForm.difficulty} onChange={handleInputChange}>
                        <Option value="Easy">Easy</Option>
                        <Option value="Medium">Medium</Option>
                        <Option value="Hard">Hard</Option>
                    </Select>
                </Form.Item>


                <Button type="primary" htmlType="button" onClick={handleSubmit}>
                    Post
                </Button>
                {/* <Button onClick={(e) => handleSubmit(e)}>Submit</Button> */}

          </Form>
        )}


            {questionElements}
        </div>

        {/* <div>
            <Link to ="/">
                <Button>Back</Button>
            </Link>
        </div> */}
    </>
    )
}

            {/* { newQuestion && 
                <form onSubmit={handleSubmit}>

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
                    <Button type="submit">
                        Post
                    </Button>
                </form>
            } */}