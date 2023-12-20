import React, { Component } from 'react'

export class Header extends Component {
  static propTypes = {}

  render() {
    return (
      <header>
        <nav>
          <ul>
            <li><a href="#"><img src="./../../public/images/Kencool-logo.png" alt="logo img" /></a></li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header