import { getQuestions } from "../../../utils/backend";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";




export default function Questions() {
    const [questions, setQuestions] = useState([]);
    const [rightAnswer, setRightAnswer] = useState(0);
    const [wrongAnswer, setWrongAnswer] = useState(0);
    const [questionLimit, setQuestionLimit] = useState(0);
    //Steven is the GOAT for this one
    const { difficulty } = useParams();


    useEffect(() => {
        getQuestions().then(data => setQuestions(data))
    }, [])

    // console.log(questions)
    // console.log(DifficultyRating())
    // console.log(difficulty)

    



    let questionElements = null;


    if (questions.length >0 && difficulty === "Easy" && questionLimit < 10) {
        //Makes a random question chosen from the length of the questions objects list
        const randomQuestion = questions[Math.floor(Math.random() * questions.length)]; 
            const answerElements = randomQuestion.answers.map((answer, i) => (
                //Create a button for each answer choice, and when clicked, run the handleAnswerClick function to determine if right or wrong
                <button key={i} onClick= {() => handleAnswerClick(answer, randomQuestion.correctAnswer)}>{answer}</button> 
            ));

        questionElements = (
            <div>
                <p>{randomQuestion.question}</p>
                {answerElements}
            </div>
        )
    } else if (questions.length >0 && difficulty === "Medium" && questionLimit < 10) {
        //Makes a random question chosen from the length of the questions objects list
        const randomQuestion = questions[Math.floor(Math.random() * questions.length)]; 
            const answerElements = randomQuestion.answers.map((answer, i) => (
                //Create a button for each answer choice, and when clicked, run the handleAnswerClick function to determine if right or wrong
                <button key={i} onClick= {() => handleAnswerClick(answer, randomQuestion.correctAnswer)}>{answer}</button> 
            ));

        questionElements = (
            <div>
                <p>{randomQuestion.question}</p>
                {answerElements}
            </div>
        )
    } else if (questions.length >0 && difficulty === "Hard" && questionLimit < 10) {
        //Makes a random question chosen from the length of the questions objects list
        const randomQuestion = questions[Math.floor(Math.random() * questions.length)]; 
            const answerElements = randomQuestion.answers.map((answer, i) => (
                //Create a button for each answer choice, and when clicked, run the handleAnswerClick function to determine if right or wrong
                <button key={i} onClick= {() => handleAnswerClick(answer, randomQuestion.correctAnswer)}>{answer}</button> 
            ));

        questionElements = (
            <div>
                <p>{randomQuestion.question}</p>
                {answerElements}
            </div>
        )
    } else if (questionLimit === 10) {
        questionElements = (
            <div>
                <p>Right Answers: {rightAnswer}</p>
                <p>Wrong Answers: {wrongAnswer}</p>
            </div>
        )
    }else{
        questionElements = (<div><p>Error, no data loaded, Please refresh and try again</p></div>)
    }


    const handleAnswerClick = (clickedAnswer, rightAnswer) => {
        if (clickedAnswer === rightAnswer) {
            //Makes the right answer count go up by 1 in the Right state
            setRightAnswer(prevRightAnswer => prevRightAnswer + 1);
            setQuestionLimit( questionLimit + 1);
            // console.log(rightAnswer)
        } else if (clickedAnswer !== rightAnswer) {
            //Makes the wrong answer count go up by 1 in the Wrong state
            setWrongAnswer(prevWrongAnswer => prevWrongAnswer+ 1);
            setQuestionLimit(questionLimit + 1);
            // console.log(wrongAnswer)
        }
      }

    

return (
    <>
        <h3>Question : {questionElements} </h3>
    </>
)};



// refrences 
// https://www.youtube.com/watch?v=BNN4o4gnSF4