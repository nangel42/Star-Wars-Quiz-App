import { getQuestions } from "../../../utils/backend";
import { useState, useEffect } from 'react';
import DifficultyRating from '../DifficultyRating';


export default function Questions() {
    const [questions, setQuestions] = useState([]);
    const [rightAnswer, setRightAnswer] = useState(0);
    const [wrongAnswer, setWrongAnswer] = useState(0);
    const [questionLimit, setQuestionLimit] = useState(0);

    useEffect(() => {
        getQuestions().then(data => setQuestions(data))
    }, [])

    // console.log(questions)
    // console.log(DifficultyRating)


    let questionElements = null;

    // && DifficultyRating === "easy"

    if (questions.length > 0 && questionLimit < 10) {
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
        )} else if (questionLimit === 10) {
            questionElements = (
                <div>
                    <p>Right Answers: {rightAnswer}</p>
                    <p>Wrong Answers: {wrongAnswer}</p>
                </div>
            )
        }
    // }else{
    //     questionElements = (<div><p>No Data</p></div>)
    // }

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