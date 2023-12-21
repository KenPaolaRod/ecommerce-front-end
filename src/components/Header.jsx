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
      // Limpiar el temporizador si el componente se desmonta o el estado cambia
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
               <Link to={`/User`}> <FaUserAlt /> </Link>
               {isSubNavVisible && (
              <div className="subNav">
                <ul>
                  <li> <Link to="/logIn">Log In </Link> </li>
                  <li> <Link to="/signIn">Sign In </Link> </li>
                </ul>
              </div>
            )}
            </li>
            <li>USD</li>
          </ul>
        </nav>

        <Outlet/>
      </header>
  )
}

export default Header