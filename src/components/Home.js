import React, { useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'

const Home = (props) => {

    // console.log('props', props.rovers)

    const rovers = props.rovers

    // let rovers = [1,2,3,4]

    const roverCards = rovers.map((rover) => (
        <Card key={rover.id}>
          <Link to={`/rovers/${rover.name}`}><h2>{rover.name}</h2></Link>
          <p><b>Landing Date:</b> {rover.landing_date}</p>
          <p><b>Launch Date:</b> {rover.launch_date}</p>
          <p><b>Total Photos:</b> {rover.total_photos}</p>
          <b>Cameras:</b>
            <ul>
                { rover.cameras.map((camera, id) => <li key={id}> { camera.full_name} </li>) }
            </ul>

        </Card>
    ))




    return (
        <div className="App">
            <header className="App-header">
                <h1>Nasa Rovers</h1>
            </header>
            <div>{ roverCards }</div>
        </div>
    )
}
export default Home