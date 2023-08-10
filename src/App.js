import './App.css';
import Navbar from './components/Navbar.js'
import News from './components/News.js'
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <News/>
      </div>
    )
  }
}



