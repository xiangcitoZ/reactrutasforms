import React, { Component } from 'react'
import logoCine from './../assets/images/cine.jpg'

export default class Cine extends Component {
  render() {
    return (
      <div>
        <h1 style={{color:"blue"}}>Cine</h1>
        <img src={logoCine} alt="" widht="300px" height="300px"/>
      </div>
    )
  }
}
