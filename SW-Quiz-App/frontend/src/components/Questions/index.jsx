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

    //uses the useEffect hook to get the questions from the backend
    useEffect(() => {
        getQuestions().then(data => setQuestions(data))
    }, []);

    // DRY code of the question elements
    const renderQuestionElements = (difficulty) => {
        // Filter questions by difficulty checking if the difficulty is equal to the difficulty in the params
        const filteredQuestions = questions.filter(ques => ques.difficulty === difficulty);

        // Checks if there are no more questions or if the question limit is 10
        if (filteredQuestions.length === 0 || questionLimit >= 10) {
            return (
                <div>
                    <p>Right Answers: {rightAnswer}</p>
                    <p>Wrong Answers: {wrongAnswer}</p>
                </div>
            );
        }

        // Pick a random question from the filtered questions
        const randomQuestion = filteredQuestions[Math.floor(Math.random() * filteredQuestions.length)];

        // Map answer choices to buttons
        const answerElements = randomQuestion.answers.map((answer, i) => (
            <button key={i} onClick= {() => handleAnswerClick(answer, randomQuestion.correctAnswer)}>{answer}</button> 
        ));

        return (
            <div>
                <p>{randomQuestion.question}</p>
                {answerElements}
            </div>
        );
    };

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
        {/* <h3>Question : {questionElements} </h3> */}
        <h3>Question : {renderQuestionElements(difficulty)}</h3>
    </>
)};



// refrences 
// https://www.youtube.com/watch?v=BNN4o4gnSF4