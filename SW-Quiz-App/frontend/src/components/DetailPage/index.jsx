import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiInfo } from "../../../utils/api"
import axios from "axios";

export default function DetailPage() {

    const { id } = useParams()
    const { category } = useParams()
    const url = `https://swapi.dev/api/${category}/${id}/`
    const [apiDetail, setApiDetail] = useState({})
    

    useEffect(() => {
        if (category) {
            apiInfo(url)
                .then(res => {
                    setApiDetail(res)
                    // console.log(res)
                })
        }
    }, [category])

    // console.log(url)
    // console.log(category)
    // console.log(id)
    console.log(apiDetail)
    // console.log(res.data)

    
    if (Object.keys(apiDetail).length > 0) {

        if (category === "films") {
            return (
                <>
                    <h1>Star Wars Films!</h1>
                    <h2>{ apiDetail.title }</h2>
                    {/* <Link to="/info"><button>Back</button></Link> */}
                </>
            )
        } else if (category === "people") {
            return (
                <>
                    <h1>Star Wars People!</h1>
                    <h2>{ apiDetail.name } </h2>
                    <Link to="/info"><button>Back</button></Link>
                </>
            )
        } else if (category === "planets") {
            return (
                <>
                    <h1>Star Wars Planets!</h1>
                    <h2>{ apiDetail.name } </h2>
                    <Link to="/info"><button>Back</button></Link>
                </>
            )
        } else if (category === "species") {
            return (
                <>
                    <h1>Star Wars Species!</h1>
                    <h2>{ apiDetail.name } </h2>
                    <Link to="/info"><button>Back</button></Link>
                </>
            )
        } else if (category === "starships") {
            return (
                <>
                    <h1>Star Wars Starships!</h1>
                    <h2>{ apiDetail.name } </h2>
                    <Link to="/info"><button>Back</button></Link>
                </>
            )
        } else if (category === "vehicles") {
            return (
                <>
                    <h1>Star Wars Vehicles!</h1>
                    <h2>{ apiDetail.name } </h2>
                    <Link to="/info"><button>Back</button></Link>
                </>
            )
        }
    } else {
        return (<h1>Loading...</h1>)
    }


}

// refrences
// https://www.scaler.com/topics/object-length-in-javascript/