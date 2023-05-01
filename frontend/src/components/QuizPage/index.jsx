import { Link } from "react-router-dom";
import Questions from "../Questions";
import { useParams } from "react-router-dom";
import { LeftOutlined } from '@ant-design/icons';

export default function QuizPage() {

    const { difficulty } = useParams();

    return (
        <>
        <nav>
            <Link to ="/">
                <LeftOutlined />
            </Link>
        </nav>
            <h1>Quiz Page!</h1>

            <p>Difficulty:  { difficulty }</p>

                <br />
                <br />
            
            <Questions />

                <br />

            {/* <footer>
                <Link to ="/">
                    <Button>Back</Button>
                </Link>
            </footer> */}
        </>
    )
}