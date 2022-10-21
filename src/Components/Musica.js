import React, { Component } from 'react'
import logoMusica from './../assets/images/music.jpg'

export default class Musica extends Component {
  render() {
    return (
      <div>
        <h1 style={{color:"blue"}}>Musica</h1>
        <img src={logoMusica} alt="" widht="300px" height="300px"/>
      </div>
    )
  }
}
