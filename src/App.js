import React, { useState, Fragment} from 'react'
import './App.css';

import { Route, Routes } from 'react-router-dom'


// // components
import Home from './components/Home'
import Detail from './components/Detail'

function App() {

  const [rover, setRover] = useState()

  return (
    
    <Fragment>
      {/* <h1>Hello world</h1> */}
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/rovers/:id' element={<Detail rover={rover} /> } /> */}
      </Routes>
    </Fragment>
  );
}

export default App;
