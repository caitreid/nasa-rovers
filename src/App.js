import React, { useState, useEffect, Fragment} from 'react'
import './App.css';
import { getRovers } from './api/nasa';
import { Route, Routes } from 'react-router-dom'
import Card from 'react-bootstrap/Card'

// // components
import Home from './components/Home'
import Detail from './components/Detail'

function App() {

  const [rovers, setRovers] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/?api_key=WFoLeQ8yDhDg0UtHCA19L8B2Z6xNPdpmwAppl5al')
    .then(response => response.json())
    .then(data => setRovers(data.rovers))
  }, [])

  console.log(rovers)

  // useEffect(()=> {
  //   getRovers();
  // }, [])

  // useEffect(() => {
  //   getRovers()
  //     .then((res) => setRovers(res.rovers))
  //     .catch((error) => {
  //       setError(true)
  //       console.log('error', error)
  //     })
  // }, []);

  // if (error) {
  //   return <p>Error!</p>
  // }
  if (!rovers) {
    return <p>No rovers!</p>
  }

 
  return (
    
    <Fragment>
      <Routes>
        <Route path='/' element={<Home rovers={rovers} />} />
        <Route path='/rovers/:name' element={<Detail rovers={rovers} /> } />
      </Routes>
    </Fragment>
  );
}

export default App;
