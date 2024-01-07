import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";




function Footer() {
  return (
    <footer>
      <img src="/images/Kencool-logo.png" alt="logo" />
      <FaSquareInstagram className='f-icon' />
      <FaFacebookSquare className='f-icon' />
      <FaLinkedin className='f-icon' />
    </footer>
  )
}

export default Footer