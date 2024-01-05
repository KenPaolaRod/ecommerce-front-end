import { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";

export const AuthContext = createContext()
export const AuthProvider = ({children}) => {
  const [isLogIn, setIsLogIn] = useState(false);
  const [userName, setUserName] = useState('');

  const handleAuthentication = async (url, data) => {
    try {
      const response = await axios.post(url, data);
      const { token } = response.data;
      const { userName } = response.data;
  
      if (token) {
        Cookies.set('jwt', token);
        setUserName(userName)
        setIsLogIn(true);
        window.location.href = 'http://localhost:5173/UserAdmin';
      };  

    } catch (err) {
      console.log('No se recibió un token en la respuesta del backend', err.message);
    }
    return false
  }

  const logIn =  (email, password) => {
    const url = 'https://apiecommerce-dxby.onrender.com/api/users/login'
    const data = {email, password};

    handleAuthentication(url, data);
  } 

  const signUp = async (name, email, password, confirmPassword) => {
    const url = 'https://apiecommerce-dxby.onrender.com/api/users/signup';
    const data = {name, email, password, confirmPassword};

    handleAuthentication(url, data);
  }

  const currentUser = () => {
    if(isLogIn) {
      return {
        loggedIn: isLogIn,
        userName: userName
      }
    }

    const token = Cookies.get("jwt")
    
    axios.get('https://apiecommerce-dxby.onrender.com/api/users/profile', { params: { token }})
    .then(function(response) {
      setIsLogIn(true)
      setUserName(response.data.userInfo.name)
    })
    .catch((error) => {
      setIsLogIn(false)
      setUserName("")
    });

    return {
      loggedIn: isLogIn,
      userName: userName
    }
  }

  const deleteCookie = () => {
    Cookies.remove('jwt');
    setIsLogIn(false)
  }

  const data = {
    logIn,
    signUp,
    currentUser,
    deleteCookie
  }

  return <AuthContext.Provider value={data} >{children}</AuthContext.Provider>

}