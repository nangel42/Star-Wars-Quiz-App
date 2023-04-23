import { Link } from "react-router-dom";

export default function MoreInfoPage() {
    return (
        <>
            <h1>More Info Page!</h1>

            <div>
                <Link to ="/">
                    <button>Back</button>
                </Link>
            </div>
        </>
    )
}