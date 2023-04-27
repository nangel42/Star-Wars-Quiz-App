import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function MoreInfoDisplay({ data, category }) {

    console.log(category)
    console.log(data)


    if (category === "films") {
        if (data.results && data.results.length > 0) {
            let filmData = data.results.map((film, i) => { 
                return <div key={i}>{film.title}</div>
            })
            return (
                <>
                    <h1>Star Wars Films!</h1>
                    <h2>{ filmData }</h2>
                </>
            )
          } else {
                return (<h1>Loading...</h1>)
          }
    } else if (category === "people") {
        if (data.results && data.results.length > 0) {
            let peopleData = data.results.map((people, i) => { 
                return <div key={i}>{people.name}</div>
            })
            return (
                <>
                    <h1>Star Wars People!</h1>
                    <h2>{ peopleData } </h2>
                </>
            )
          } else {
            return (<h1>Loading...</h1>)
          }
    } else if (category === "planets") {
        if (data.results && data.results.length > 0) {
            let planetData = data.results.map((planet, i) => { 
                return <div key={i}>{planet.name}</div>
            })
            return (
                <>
                    <h1>Star Wars Planets!</h1>
                    <h2>{ planetData } </h2>
                </>
            )
          } else {
            return (<h1>Loading...</h1>)
          }
    } else if (category === "species") {
        if (data.results && data.results.length > 0) {
            let speciesData = data.results.map((species, i) => { 
                return <div key={i}>{species.name}</div>
            })
            return (
                <>
                    <h1>Star Wars Species!</h1>
                    <h2>{ speciesData } </h2>
                </>
            )
          } else {
            return (<h1>Loading...</h1>)
          }
    } else if (category === "starships") {
        if (data.results && data.results.length > 0) {
            let starshipData = data.results.map((starships, i) => { 
                return <div key={i}>{starships.name}</div>
            })
            return (
                <>
                    <h1>Star Wars Starships!</h1>
                    <h2>{ starshipData } </h2>
                </>
            )
          } else {
            return (<h1>Loading...</h1>)
          }
    } else if (category === "vehicles") {
        if (data.results && data.results.length > 0) {
            let vehicleData = data.results.map((vehicles, i) => { 
                return <div key={i}>{vehicles.name}</div>
            })
            return (
                <>
                    <h1>Star Wars Vehicles!</h1>
                    <h2>{ vehicleData } </h2>
                </>
            )
          } else {
            return (<h1>Loading...</h1>)
          }
    } else {
        return (
            <>
                <h1>Click a button to learn more about Star Wars!</h1>
            </>
        )
    }
}

