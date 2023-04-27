import { Link } from "react-router-dom";
import { useEffect, useState } from 'react'
import { getInfo } from "../../../utils/api"
import { useParams } from 'react-router-dom'
import MoreInfoDisplay from "../MoreInfoDisplay";

export default function MoreInfoPage() {

    const [info, setInfo] = useState({})

    useEffect(() => {
      getInfo('https://swapi.dev/api/')
        .then(res => {
          setInfo(res)
        // console.log(res)
        })
    }, [])

    console.log(info)


    const Films = () => {
        getInfo('https://swapi.dev/api/films/')
        .then(res => {
            setInfo(prevState => ({
                ...prevState,
                films: res.results
                }))
        })
    }


    return (
        <>
            <h1>More Info Page!</h1>

            <button onClick = {Films}>Films</button>
            <button>People</button>
            <button>Planets</button>
            <button>Species</button>
            <button>Starships</button>
            <button>Vehicles</button>

            <br />
            <br />

            <MoreInfoDisplay />

            <br />
            <br />

            <footer>
                <Link to ="/">
                    <button>Back</button>
                </Link>
            </footer>
        </>
    )
}