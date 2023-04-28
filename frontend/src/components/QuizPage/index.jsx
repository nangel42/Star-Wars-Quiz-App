import { Link } from "react-router-dom";
import Questions from "../Questions";
import { useParams } from "react-router-dom";
import { Button } from 'antd';


export default function QuizPage() {

    const { difficulty } = useParams();

    return (
        <>
            <h1>Quiz Page!</h1>

                <br />

            <p>Difficulty:  { difficulty }</p>

                <br />
            
            <Questions />

                <br />

            <footer>
                <Link to ="/">
                    <Button>Back</Button>
                </Link>
            </footer>
        </>
    )
}