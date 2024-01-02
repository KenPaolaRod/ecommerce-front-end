import { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";

export const AuthContext = createContext()
export const AuthProvider = ({children}) => {
  const [isLogIn, setIsLogIn] = useState(false);


  const logIn = async (email, password) => {
    try {
      axios.post('https://apiecommerce-dxby.onrender.com/api/users/login', { email, password })
      .then(response => {
        const token = response.data.token

        if (token) {
          Cookies.set('jwt', token);
          setIsLogIn(true);
          console.log('You are In');
        }
      }).catch(error => {
        console.error('No se recibió un token en la respuesta del backend', error.message);
      });

    } catch (err) {
      console.log('Error while login');
    }
  }

  const signUp = async (name, email, password, confirmPassword) => {
    try {
       axios.post('https://apiecommerce-dxby.onrender.com/api/users/signup', {
        name,
        email,
        password, 
        confirmPassword
      })
      .then(response => {
        const token = response.data.token

        if (token) {
          Cookies.set('jwt', token);
          setIsLogIn(true);
          console.log('You are In');
        }
        
      }).catch(err => {
        console.log('No se recibió un token en la respuesta del backend', err.message);
      });

    } catch (err) {

    }
  }

  const data = {
    logIn,
    signUp,
    isLogIn
  }

  return <AuthContext.Provider value={data} >{children}</AuthContext.Provider>

}