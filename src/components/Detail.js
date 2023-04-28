import React, { useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import { Container } from 'react-bootstrap'

const Detail = (props) => {

    const [photos, setPhotos] = useState(null)
    const [error, setError] = useState(false)

    const { name } = useParams() 

    console.log(name)


    let date = new Date().toLocaleDateString();

    let earth_date = new Date().toJSON().slice(0, 10);

    useEffect(() => {
        fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${name}/photos?earth_date=${earth_date}&api_key=WFoLeQ8yDhDg0UtHCA19L8B2Z6xNPdpmwAppl5al`)
        .then(response => response.json())
        .then(response => console.log(response))
        .then(data => setPhotos(data.photos))
        .catch((error) => {
            setError(true)
        })
    }, [])
    
    console.log(photos)

    if (!photos) {
        return (
            <>
                <header className="App-header">
                    <h1>Rover Detail</h1>
                    <Link to="/">Home</Link>
                </header>
                <Container className='container'>
                    <p><b>Date:</b> { date }</p>
                    <p> Earth date: { earth_date }</p>
                    <p>No photos!</p>
                    {/* <p>{ error.message }</p> */}
                </Container>
                
            </>
        )
    }

    if (photos) {
        const photoCards = photos.map((photo, id) => (
            <div key={id}>
                <image src={photo.img_src}/>
            </div>
        ))

        return (
            <>
                <header className="App-header">
                    <h1>Rover Detail</h1>
                    <Link to="/">Home</Link>
                </header>
                <Container className='container'>
                    <p><b>Date:</b> { date }</p>
                    <p> Earth date: { earth_date }</p>
                    { photoCards }
                </Container>
            </>
        )
    }
    
    
}

export default Detail