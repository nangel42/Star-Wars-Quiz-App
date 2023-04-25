import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import DifficultyRating from '../DifficultyRating';
import { getQuestions } from "../../../utils/backend";




export default function QuizPage() {

    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        getQuestions().then(data => setQuestions(data))
    }, [])

    // console.log(questions)
    console.log(DifficultyRating)


    let questionElements = null;

    // && DifficultyRating === "easy"

    if (questions.length > 0) {
        const randomQuestion = questions[Math.floor(Math.random() * questions.length)]; //Makes a random question chosen from the length of the questions objects list
            const answerElements = randomQuestion.answers.map((answer, i) => (
                <button key={i}>{answer}</button>
            ));

        questionElements = (
            <div>
                <p>{randomQuestion.question}</p>
                {answerElements}
            </div>
        )}
    // }else{
    //     questionElements = (<div><p>No Data</p></div>)
    // }
    

    return (
        <>
            <h1>Quiz Page!</h1>
            <p>Difficulty:  </p>
            
            <h3>Question : {questionElements} </h3>

            <div>
                <Link to ="/">
                    <button>Back</button>
                </Link>
            </div>
        </>
    )
}