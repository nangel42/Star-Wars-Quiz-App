import { Link, useParams } from 'react-router-dom';
import DetailPage from "../DetailPage"



export default function MoreInfoDisplay({ data, category }) {

    // console.log(category)
    // console.log(data)

    if (data.results && data.results.length > 0) {
        let apiNameData = data.results.map((name, i) => { 
            // console.log(category)
            return (
                <div key={i}>
                    <Link to={`/detail/${category}/${i + 1}`}>
                        {name.name}
                    </Link>
                </div>
                )
        })
        let filmData = data.results.map((film, i) => { 
            return (
                <div key={i}>
                    <Link to={`/detail/${category}/${i + 1}`}>
                        {film.title}
                    </Link>
                </div>
                )
        })
        if (category === "films") {
            return (
                <>
                    <h1>Star Wars Films!</h1>
                    <h2>{ filmData }</h2>
                </>
            )
        } else if (category === "people") {
            return (
                <>
                    <h1>Star Wars People!</h1>
                    <h2>{ apiNameData } </h2>
                </>
            )
        } else if (category === "planets") {
            return (
                <>
                    <h1>Star Wars Planets!</h1>
                    <h2>{ apiNameData } </h2>
                </>
            )
        } else if (category === "species") {
            return (
                <>
                    <h1>Star Wars Species!</h1>
                    <h2>{ apiNameData } </h2>
                </>
            )
        } else if (category === "starships") {
            return (
                <>
                    <h1>Star Wars Starships!</h1>
                    <h2>{ apiNameData } </h2>
                </>
            )
        } else if (category === "vehicles") {
            return (
                <>
                    <h1>Star Wars Vehicles!</h1>
                    <h2>{ apiNameData } </h2>
                </>
            )
        }
    } else if (!category) {
        return (<h1>Click a button to learn more about Star Wars!</h1>)
    } else {
        return (<h1>Loading...</h1>)
    }
}

