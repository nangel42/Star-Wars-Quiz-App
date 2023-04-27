import { Link } from "react-router-dom";
import Questions from "../Questions";


export default function QuizPage() {


    return (
        <>
            <h1>Quiz Page!</h1>
            <p>Difficulty:  </p>
            
            <Questions />

            <footer>
                <Link to ="/">
                    <button>Back</button>
                </Link>
            </footer>
        </>
    )
}