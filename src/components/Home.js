import React, { useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'

const Home = (props) => {

    console.log('props', props.rovers)

    const rovers = props.rovers

    // let rovers = [1,2,3,4]

    const roverCards = rovers.map((rover) => (



        // <Card key={rover.id}>
        //   {/* <h1>{rover.name}</h1> */}
        //   <p>--</p>
        // </Card>
        <h1>{rover.name}</h1>
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