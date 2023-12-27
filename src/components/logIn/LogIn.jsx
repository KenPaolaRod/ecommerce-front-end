import React from 'react'
import Header from '../header'
import Input from './Input'
import Button from '../Button'

function LogIn() {
  return (
    <>
    <Header />
    <div className='log-in'>
    <div>LogIn</div>
    <Input name='name' type='email' />
    <Input name='password' type='password'/>
    <Button text={'Sign In'} />
    </div>
    </>
  )
}

export default LogIn