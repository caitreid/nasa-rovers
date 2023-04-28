import React, { useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import { Container } from 'react-bootstrap'

const Detail = (props) => {

    const [photos, setPhotos] = useState(null)

    const { name } = useParams() 

    console.log(name)


    let date = new Date().toLocaleDateString();

    let earth_date = new Date().toJSON().slice(0, 10);

    useEffect(() => {
        fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${name}/photos?earth_date=${earth_date}&api_key=WFoLeQ8yDhDg0UtHCA19L8B2Z6xNPdpmwAppl5al`)
        .then(response => response.json())
        .then(data => setPhotos(data.rovers))
     }, [])
    
      console.log(photos)

    return (
        <>
            <header className="App-header">
                <h1>Rover Detail</h1>
            </header>
            <Container className='container'>
                <p><b>Date:</b> { date }</p>
                <p> Earth date: { earth_date }</p>
            </Container>
        </>
    )
}

export default Detail