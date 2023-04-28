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
        function convertHeight(height) {
            const inches = height * 0.3937;
            const feet = Math.floor(inches / 12);
            const remainingInches = Math.round(inches % 12);
            return `${feet} ft ${remainingInches} in`;
          }
          
          function convertToPounds(mass) {
            const pounds = Math.round(mass * 2.20462);
            return `${pounds} lbs`;
          }
        if (category === "films") {
            return (
                <>
                    <h1>Star Wars Films!</h1>
                    <br />
                    <h2>{ apiDetail.title }</h2>
                    <h3>Director: { apiDetail.director }</h3>
                    <h3>Producer: { apiDetail.producer }</h3>
                    <p>Release Date: { apiDetail.release_date }</p>
                    <br />
                    <p>Opening Crawl:</p>
                    <p>{ apiDetail.opening_crawl }</p>

                    {/* <p>Characters:</p> */}
                    {/* <ul>
                        {apiDetail.characters.map((character, i) => {
                            return (
                                <li key={i}>
                                    <Link to={`/detail/people/${character.slice(28, -1)}`}>
                                        {character.slice(28, -1)}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul> */}


                    <Link to="/info"><button>Back</button></Link>
                </>
            )
        } else if (category === "people") {
            return (
                <>
                    <h1>Star Wars People!</h1>
                    <h2>{ apiDetail.name } </h2>
                    <h3>Birth Year: { apiDetail.birth_year }</h3>
                    <p>Height: { apiDetail.height } cm (About {convertHeight(apiDetail.height)})</p>
                    <p>Mass: { apiDetail.mass } kg (About {convertToPounds(apiDetail.mass)})</p>
                    <p>Hair Color: { apiDetail.hair_color }</p>


                    <Link to="/info"><button>Back</button></Link>
                </>
            )
        } else if (category === "planets") {
            return (
                <>
                    <h1>Star Wars Planets!</h1>
                    <h2>{ apiDetail.name } </h2>
                    <br />
                    <h3>Climate: { apiDetail.climate }</h3>
                    <h3>Terrain: { apiDetail.terrain }</h3>
                    <p>Population: { apiDetail.population }</p>
                    <p>Gravity: { apiDetail.gravity }</p>
                    <p>Orbital Period: { apiDetail.orbital_period }</p>
                    <p>Rotation Period: { apiDetail.rotation_period }</p>
                    <p>Diameter: { apiDetail.diameter }</p>
                    <p>Surface Water: { apiDetail.surface_water }</p>



                    <Link to="/info"><button>Back</button></Link>
                </>
            )
        } else if (category === "species") {
            return (
                <>
                    <h1>Star Wars Species!</h1>
                    <h2>{ apiDetail.name } </h2>
                    <h3>Classification: { apiDetail.classification }</h3>
                    <h3>Designation: { apiDetail.designation }</h3>
                    <p>Average Height: { apiDetail.average_height } cm (About {convertHeight(apiDetail.average_height)})</p>
                    <p>Average Lifespan: { apiDetail.average_lifespan } years</p>
                    <p>Language: { apiDetail.language }</p>



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