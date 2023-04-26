import { useState } from "react";
import { Link } from "react-router-dom";
// import { DifficultyRating } from "../../../utils/DifficultyRating";
import { useNavigate } from "react-router-dom";



export default function HomePage() {

    const [difficulty, setDifficulty] = useState('Easy');

    const difficultyChange = (event) => {
        setDifficulty(event.target.value);
      }

    const navigate = useNavigate();

    //   console.log(difficulty)


    return (
        <>
            <h1>Star Trivia!</h1>
            <br />
            <br />
            <h3>A Star Wars Trivia App!</h3>
            <br />
            <p>How well do you know the Star Wars Universe?</p>
            <br />

            <div>
                {/* <p>Difficulty</p> */}
                    {/* <Link to ="/quiz">
                        <button onClick={() => DifficultyRating("easy")}>Easy</button>
                        <br />
                        <button onClick={() => DifficultyRating("medium")}>Medium</button>
                        <br />
                        <button onClick={() => DifficultyRating("hard")}>Hard</button>

                    </Link> */}
                <label>
                    <input type="radio" value="Easy" checked={difficulty === 'Easy'} onChange={difficultyChange} />
                        Easy
                </label>
                <br />
                <label>
                    <input type="radio" value="Medium" checked={difficulty === 'Medium'} onChange={difficultyChange} />
                        Medium
                </label>
                <br />
                <label>
                    <input type="radio" value="Hard" checked={difficulty === 'Hard'} onChange={difficultyChange} />
                        Hard
                </label>
                <p>Selected Difficulty: {difficulty}</p>
                <br />

                {/* <Link to ="/quiz"> */}
                    <button onClick={() => navigate(`/quiz/${difficulty}`)}>Start Game</button>
                {/* </Link> */}
            </div>

            <br />
            <br />

            <div>
                <p>Want to add your own questions?</p>
                <br />
                    <Link to ="/question">
                        <button>Add Questions</button>
                    </Link>
            </div>
            
            <br />
            <br />

            <div>
                <p>Want to sharpen your skills?</p>
                <br />
                    <Link to ="/info">
                        <button>More Info</button>
                    </Link>
            </div>
        </>
    )
}
