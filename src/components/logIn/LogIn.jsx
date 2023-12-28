import React from 'react'
import Header from '../Header'
import Input from '../Input'
import Button from '../Button'
import { Link } from 'react-router-dom'

function LogIn() {
  return (
    <>
    <Header />
    <form className='log-in'>
    <div>LogIn</div>
    <Input inpType='email'/>
    <Input inpType='password' />
    <Button text={'Sign In'} />
    <div>
    <p style={{textAlign: "center"}}>No Account?</p>
    <Link to={"/sigIn"}>Create Account</Link>
    </div>
    </form>
    </>
  )
}

export default LogIn