import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
// import DifficultyRating from '../DifficultyRating';
import { getQuestions } from "../../../utils/backend";




export default function QuizPage() {

    const [questions, setQuestions] = useState([]);

    // useEffect(() => {
    //     getQuestions().then(data => {
    //       const questionElements = data.map((question, i) => {
    //         return (
    //           <div key={i}>
    //             <p>{question.question}</p>
    //             <button>{question.answers[i]}</button>

    //           </div>
    //         )
    //       })
    //       setQuestions(questionElements);
    //     });
    //   }, [])

    useEffect(() => {
        getQuestions().then(data => setQuestions(data))
    }, [])

    // console.log(questions)

    // let q = questions
    
    // if (q.length > 0) {
    //     const questionElements = questions.map((question, i) => {
    //         return (
    //             <div key={i}>
    //                 <p>{question.question}</p>
    //                 <button>{question.answers.map(a, i)}</button>
    //             </div>
    //         )
    //     })
    //     setQuestions(questionElements)
    // }

    let questionElements = null;

    if (questions.length > 0) {
        const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
        // questionElements = questions.Math.random().map((question, i) => {
            const answerElements = randomQuestion.answers.map((answer, j) => (
                <button key={j}>{answer}</button>
            ));
                    // return (
                    // <div key={i}>
                    //     <p>{question.question}</p>
                    //     {answerElements}
                    // </div>
        questionElements = (
            <div>
                <p>{randomQuestion.question}</p>
                {answerElements}
            </div>
        );
        // });
        };
    

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