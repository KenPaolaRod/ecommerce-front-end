import React from 'react'
import Header from '../header'
import Input from '../Input'
import Button from '../Button'

function LogIn() {
  return (
    <>
    <Header />
    <form className='log-in'>
    <div>LogIn</div>
    <Input inpType='email'/>
    <Input inpType='password' />
    <Button text={'Sign In'} />
    </form>
    </>
  )
}

export default LogIn