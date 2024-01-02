import { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";

export const AuthContext = createContext()
export const AuthProvider = ({children}) => {
  const [isLogIn, setIsLogIn] = useState(false);

  const handleAuthentication = async (url, data, successMessg) => {
    try {

     const response = await axios.post(url, data, successMessg);

      const { token } = response.data
  
      if (token) {
        Cookies.set('jwt', token);
        setIsLogIn(true);
        console.log(successMessg);
      } 

    } catch (err) {
      console.log('No se recibió un token en la respuesta del backend', err.message);
    }
 

  }


  const logIn = (email, password) => {
    const url = 'https://apiecommerce-dxby.onrender.com/api/users/login'
    const data = {email, password};
    const successMessg = 'you are in'

    handleAuthentication(url, data, successMessg)
  } 

  const signUp = (name, email, password, confirmPassword) => {
    const url = 'https://apiecommerce-dxby.onrender.com/api/users/signup';
    const data = {name, email, password, confirmPassword};
    const successMessg = 'you are in';

    handleAuthentication(url, data, successMessg)
  }

  const data = {
    logIn,
    signUp,
  }

  return <AuthContext.Provider value={data} >{children}</AuthContext.Provider>

}