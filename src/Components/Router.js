import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Musica from './Musica'
import Cine from './Cine'

export default class Router extends Component {
  render() {
    return (
     <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cine' element={<Cine/>}/>
            <Route path='/musica' element={<Musica/>}/>

        </Routes>
     </BrowserRouter>
    )
  }
}
