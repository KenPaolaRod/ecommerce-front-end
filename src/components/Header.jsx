import { Outlet, Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { FaUserAlt } from "react-icons/fa";
import { useContext } from 'react';
import { ProductsContext } from '../contex/productsContext';

function Header() {
  const [isSubNavVisible, setIsSubNavVisible] = useState(false);

  const productsCtx = useContext(ProductsContext);
  const { cart } = productsCtx;

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
            <li> <Link to="/shoppingCard" className='navCart'> <FaShoppingCart/> <span>{cart.length > 0 && <span>{cart.length}</span>}</span> </Link> </li>
            <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
               <Link to={`/UserAdmin`}> <FaUserAlt /> </Link>
               {isSubNavVisible && (
              <div className="subNav">
                <ul>
                  <li> <Link to="/logIn">Log In </Link> </li>
                  <li> <Link to="/sigUp">Sign Up </Link> </li>
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