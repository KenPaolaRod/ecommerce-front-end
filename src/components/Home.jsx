import React, { Component } from 'react'
import Header from './header'
export class Home extends Component {
  static propTypes = {}

  render() {
    return (
      <>
        <Header />
        <div className='home-hero'>
          <h1>SALE 50% OFF</h1>
        </div>
      </>
    )
  }
}

export default Home