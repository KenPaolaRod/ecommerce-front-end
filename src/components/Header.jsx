import { Outlet, Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { FaUserAlt } from "react-icons/fa";

function Header() {
  const [isSubNavVisible, setIsSubNavVisible] = useState(false);

    const handleMouseEnter = () => {
      setIsSubNavVisible(true);
    };

    const handleMouseLeave = () => {
      setIsSubNavVisible(true);

      setTimeout(() => {
        setIsSubNavVisible(false);
      }, 2000);
    };

    useEffect(() => {
      return () => clearTimeout();
    }, [isSubNavVisible]);
    
  return (
    <header>
        <nav className='mainNav'>
          <div className='nav-logo'>
            <Link to="/"><img src="/images/Kencool-logo.png" alt="logo img" /></Link> 
          </div>
          <ul className='nav-links'>
            <li> <Link to="/shoppingCard"> <FaShoppingCart/> </Link> </li>
            <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
               <Link to={`/UserAdmin`}> <FaUserAlt /> </Link>
               {isSubNavVisible && (
              <div className="subNav">
                <ul>
                  <li> <Link to="/logIn">Log In </Link> </li>
                  <li> <Link to="/sigIn">Sign In </Link> </li>
                </ul>
              </div>
            )}
            </li>
            <li>USD</li>
          </ul>
        </nav>

      </header>
  )
}

export default Header