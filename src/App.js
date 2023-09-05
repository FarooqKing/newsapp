import React, { Component } from 'react'
import Navbar from './Component/Navbar'
import News from './Component/News'

export default class App extends Component {
  render() {
    return (
      <>

      <Navbar/>
      <News title="1st" desription="1st Desc"/>
      
      
      
      </>
    )
  }
}