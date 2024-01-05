import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { FaUserAlt } from "react-icons/fa";
import { useContext } from 'react';
import { ProductsContext } from '../contex/productsContext';
import { AuthContext } from '../contex/AuthContext';

function Header() {
  const [isSubNavVisible, setIsSubNavVisible] = useState(false);

  const productsCtx = useContext(ProductsContext);
  const { cart } = productsCtx;
  const authCtx = useContext(AuthContext);
  const { currentUser } = authCtx;

  const navigate = useNavigate()

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

  const handleUserIconClick = () => {
    currentUser().loggedIn ? navigate('/UserAdmin') : navigate('/login');
  };
    
  return (
    <header>
        <nav className='mainNav'>
          <div className='nav-logo'>
            <Link to="/"><img src="/images/Kencool-logo.png" alt="logo img" /></Link> 
          </div>
            <ul className='nav-links'>
              <li> <Link to="/shoppingCard" className='navCart'> <FaShoppingCart/> <span>{cart.length > 0 && <span>{cart.length}</span>}</span> </Link> </li>
              <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  <FaUserAlt onClick={handleUserIconClick} /> 
               {isSubNavVisible && (
                  <div className='subNav'>
                    <ul>
                      {currentUser().loggedIn ? <li> <Link to="/UserAdmin">User Admin </Link> </li>  : 
                        <>
                          <li> <Link to="/logIn">Log In </Link> </li>
                          <li> <Link to="/sigUp">Sign Up </Link> </li>
                        </>}
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