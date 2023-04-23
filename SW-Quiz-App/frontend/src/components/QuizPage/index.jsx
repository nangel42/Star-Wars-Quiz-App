import { Link } from "react-router-dom";


export default function QuizPage() {
    return (
        <>
            <h1>Quiz Page!</h1>

            <div>
                <Link to ="/">
                    <button>Back</button>
                </Link>
            </div>
        </>
    )
}