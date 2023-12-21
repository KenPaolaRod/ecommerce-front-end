import React, { Component } from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import { FaUserAlt } from "react-icons/fa";



export class Header extends Component {
  static propTypes = {}

  render() {
    return (
      <header>
        <nav>
          <div className='nav-logo'>
            <a href="#"><img src="./../../public/images/Kencool-logo.png" alt="logo img" /></a>
          </div>
          <ul className='nav-links'>
            <li><FaShoppingCart/></li>
            <li><FaUserAlt /></li>
            <li>USD</li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header