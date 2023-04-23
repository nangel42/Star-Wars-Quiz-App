import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <>
            <h1>Star Trivia!</h1>
            <h3>A Star Wars Trivia App!</h3>
            <p>How well do you know the Star Wars Universe?</p>

            <div>
                <p>Difficulty</p>
                    <Link to ="/quiz">
                        <button>Easy</button>
                        <br />
                        <button>Medium</button>
                        <br />
                        <button>Hard</button>
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
