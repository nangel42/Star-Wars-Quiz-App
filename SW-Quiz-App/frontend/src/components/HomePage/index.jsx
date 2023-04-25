import { useState } from "react";
import { Link } from "react-router-dom";
import DifficultyRating from '../DifficultyRating';


export default function HomePage() {

    const [difficulty, setDifficulty] = useState(DifficultyRating('easy'));

    const difficultyChange = (event) => {
        setDifficulty(event.target.value);
      }

    return (
        <>
            <h1>Star Trivia!</h1>
            <h3>A Star Wars Trivia App!</h3>
            <p>How well do you know the Star Wars Universe?</p>

            <div>
                <p>Difficulty</p>
                    {/* <Link to ="/quiz">
                        <button onClick={() => DifficultyRating("easy")}>Easy</button>
                        <br />
                        <button onClick={() => DifficultyRating("medium")}>Medium</button>
                        <br />
                        <button onClick={() => DifficultyRating("hard")}>Hard</button>

                    </Link> */}
                <label>
                    <input type="radio" value="easy" checked={difficulty === 'easy'} onChange={difficultyChange} />
                        Easy
                </label>
                <label>
                    <input type="radio" value="medium" checked={difficulty === 'medium'} onChange={difficultyChange} />
                        Medium
                </label>
                <label>
                    <input type="radio" value="hard" checked={difficulty === 'hard'} onChange={difficultyChange} />
                        Hard
                </label>
                <p>Selected Difficulty: {difficulty}</p>
                <Link to ="/quiz">
                    <button onClick={() => DifficultyRating({difficulty})}>Start Game</button>
                </Link>
            </div>

            <div>
                <p>Want to sharpen your skills?</p>
                    <Link to ="/info">
                        <button>More Info</button>
                    </Link>
            </div>
        </>
    )
}
