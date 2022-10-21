import React, { Component } from 'react'
import logoHome from './../assets/images/home.jpg'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1 style={{color:"blue"}}>Home</h1>
        <img src={logoHome} alt="" widht="300px" height="300px"/>
      </div>
    )
  }
}
