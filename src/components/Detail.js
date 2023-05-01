import React, { useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import { Container } from 'react-bootstrap'

const Detail = (props) => {

    const [photos, setPhotos] = useState([])
    const [error, setError] = useState(null)

    const { name } = useParams() 

    // console.log(name)

    let date = new Date().toLocaleDateString();

    let earth_date = new Date().toJSON().slice(0, 10);

    let url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2022-04-28&api_key=WFoLeQ8yDhDg0UtHCA19L8B2Z6xNPdpmwAppl5al'

    // useEffect(() => {
    //     // fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${name}/photos?earth_date=${earth_date}&api_key=WFoLeQ8yDhDg0UtHCA19L8B2Z6xNPdpmwAppl5al`)
    //     fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2022-04-28&api_key=WFoLeQ8yDhDg0UtHCA19L8B2Z6xNPdpmwAppl5al')
    //     .then(response => response.json())
    //     .then(response => console.log('fetched response', response))
    //     .then(data => setPhotos(data.photos))
    //     .catch((error) => { setError(error) })
    // }, [])
    
    // if (error) {
    //     console.log('error:', error)
    // }

    useEffect(() => {
        fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2022-04-28&api_key=WFoLeQ8yDhDg0UtHCA19L8B2Z6xNPdpmwAppl5al')
          .then(response => response.json())
          .then(data => {
            if (data && data.photos) {
              setPhotos(data.photos);
            } else {
              setError('Error: unexpected response from API');
            }
          })
          .catch((error) => {
            setError(error);
          });
    }, []);
      
    console.log('photos: ', photos)


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
                </Container>                
            </>
        )
    }

    

    if (photos) {

        const photoCards = photos.map((photo, id) => (
            // console.log(photo) 
            <div key={id}>
                <img src={photo.img_src}/>
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