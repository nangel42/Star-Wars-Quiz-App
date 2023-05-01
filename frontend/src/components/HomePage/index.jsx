import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Radio, Button } from "antd";
import "./styles.css";


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

            <h3>A Star Wars Trivia App!</h3>

            <p>How well do you know the Star Wars Universe?</p>

            <div>
                <Radio.Group onChange={difficultyChange} value={difficulty}>
                    <Radio.Button value="Easy">Easy</Radio.Button>
                    <Radio.Button value="Medium">Medium</Radio.Button>
                    <Radio.Button value="Hard">Hard</Radio.Button>
                </Radio.Group>

                <p>Selected Difficulty: {difficulty}</p>

                <Button onClick={() => navigate(`/quiz/${difficulty}`)}>Start Game</Button>
            </div>

            <div>
                <p>Want to add your own questions?</p>

                <Link to ="/question">
                    <Button>Add Questions</Button>
                </Link>
            </div>

            <div>
                <p>Want to sharpen your skills?</p>

                <Link to ="/info">
                    <Button>More Info</Button>
                </Link>
            </div>

        </>
    )
}
