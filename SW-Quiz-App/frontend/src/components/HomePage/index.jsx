import { Link } from "react-router-dom";
import DifficultyRating from '../DifficultyRating';

export default function HomePage() {

    


    return (
        <>
            <h1>Star Trivia!</h1>
            <h3>A Star Wars Trivia App!</h3>
            <p>How well do you know the Star Wars Universe?</p>

            <div>
                <p>Difficulty</p>
                    <Link to ="/quiz">
                        <button onClick={() => DifficultyRating("easy")}>Easy</button>
                        <br />
                        <button onClick={() => DifficultyRating("medium")}>Medium</button>
                        <br />
                        <button onClick={() => DifficultyRating("hard")}>Hard</button>

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
