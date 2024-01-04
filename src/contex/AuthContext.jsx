import { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";

export const AuthContext = createContext()
export const AuthProvider = ({children}) => {
  const [isLogIn, setIsLogIn] = useState(false);
  const [userName, setUserName] = useState('')

  const handleAuthentication = async (url, data) => {
    try {
     const response = await axios.post(url, data);
     const { token } = response.data;
     const { userName } = response.data;

     setUserName(userName)
  
      if (token) {
        Cookies.set('jwt', token);
        setIsLogIn(true);
          // console.log(isLogIn);
          // window.location.href = 'http://localhost:5173/UserAdmin';
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

  const data = {
    logIn,
    signUp,
    isLogIn,
    userName
  }

  return <AuthContext.Provider value={data} >{children}</AuthContext.Provider>

}