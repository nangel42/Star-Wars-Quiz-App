import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiInfo } from "../../../utils/api"
import axios from "axios";

export default function DetailPage() {

    const { id } = useParams()
    const { category } = useParams()
    const url = `https://swapi.dev/api/${category}/${id}/`
    const [apiDetail, setApiDetail] = useState({})
    

    useEffect(() => {
        apiInfo(url)
            .then(res => {
                setApiDetail(res)
                // console.log(res)
            })
            
    }, [])

    // axios.get(url)
    // .then(res => {

    //     apiInfo(res.data)
    //     // console.log(res.data)
    // })

    // console.log(url)
    // console.log(category)
    // console.log(id)
    console.log(apiDetail)
    // console.log(res.data)


    // if (res.data.results && res.data.length > 0) {

    //     if (category === "films") {
    //         return (
    //             <>
    //                 <h1>Star Wars Films!</h1>
    //                 <h2>{ filmData }</h2>
    //             </>
    //         )
    //     } else if (category === "people") {
    //         return (
    //             <>
    //                 <h1>Star Wars People!</h1>
    //                 <h2>{ apiNameData } </h2>
    //             </>
    //         )
    //     } else if (category === "planets") {
    //         return (
    //             <>
    //                 <h1>Star Wars Planets!</h1>
    //                 <h2>{ res.data.name } </h2>
    //             </>
    //         )
    //     } else if (category === "species") {
    //         return (
    //             <>
    //                 <h1>Star Wars Species!</h1>
    //                 <h2>{ apiNameData } </h2>
    //             </>
    //         )
    //     } else if (category === "starships") {
    //         return (
    //             <>
    //                 <h1>Star Wars Starships!</h1>
    //                 <h2>{ apiNameData } </h2>
    //             </>
    //         )
    //     } else if (category === "vehicles") {
    //         return (
    //             <>
    //                 <h1>Star Wars Vehicles!</h1>
    //                 <h2>{ apiNameData } </h2>
    //             </>
    //         )
    //     }
    // } else if (!category) {
    //     return (<h1>Click a button to learn more about Star Wars!</h1>)
    // } else {
    //     return (<h1>Loading...</h1>)
    // }

    
    // if (category === "films") {
    //     return (
    //         <>
    //             <h1>Star Wars Films!</h1>
    //         </>
    //     )
    // }

    

    return (
        <>
            <h1>Detail Page!</h1>
        </>
    )
}