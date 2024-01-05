// import React, { useContext } from 'react'
import { useContext, useState } from 'react'
import { AuthContext } from '../../contex/AuthContext'
import Header from '../Header'
import Input from '../Input'
import Button from '../Button'
import { Link } from 'react-router-dom'

function LogIn() {
  const authCtx = useContext(AuthContext);
  const {logIn} = authCtx;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault()
    logIn(email, password);
  }

  return (
    <>
    <Header />
    <form className='log-in' action='post'>
      <h1>Log In</h1>
      <Input inpType='email' onChange={(e) => setEmail(e.target.value)} />
      <Input inpType='password' onChange={(e) => setPassword(e.target.value)} />
      <Button text={'Log In'} btnClass={"log-sign-btn"} onClick={handleLogin} />
      <div className='no-account'>
        <p style={{textAlign: "center"}}>No Account?</p>
        <Link to={"/sigUp"}>Create Account</Link>
      </div>
    </form>
    </>
  )
}

export default LogIn