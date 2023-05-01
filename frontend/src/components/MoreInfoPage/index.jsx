import { Link } from "react-router-dom";
import { useEffect, useState } from 'react'
import { getInfo } from "../../../utils/api"
import { useParams } from 'react-router-dom'
import MoreInfoDisplay from "../MoreInfoDisplay";
import { Button } from 'antd';
import { LeftOutlined } from '@ant-design/icons';

export default function MoreInfoPage() {

    const [info, setInfo] = useState({})
    const [category, setCategory] = useState('')

    //category changes when buttons are clicked, causes the function to run again
    useEffect(() => {
        if (category) {
            getInfo('https://swapi.dev/api/' + category + '/')
                .then(res => {
                    setInfo(res)
                    // console.log(res)
                })
            }
    }, [category])

    // console.log(info)

    const categoryChange = (event) => {
        setCategory(event.target.value);
        }


    return (
        <>
            <nav>
                <Link to ="/">
                    <LeftOutlined />
                </Link>
            </nav>

            <h1>More Info Page!</h1>

            <button onClick={() => setCategory('films')}>Films</button>
            <button onClick={() => setCategory('people')}>People</button>
            <button onClick={() => setCategory('planets')}>Planets</button>
            <button onClick={() => setCategory('species')}>Species</button>
            {/* <button onClick={() => setCategory('starships')}>Starships</button>
            <button onClick={() => setCategory('vehicles')}>Vehicles</button> */}

            <br />
            <br />

            <MoreInfoDisplay data={info} category={category}/>

            <br />
            <br />

            {/* <footer>
                <Link to ="/">
                    <Button>Back</Button>
                </Link>
            </footer> */}
        </>
    )
}

// refrences 
// https://www.youtube.com/watch?v=qb6sMTeyLJY&t=879s