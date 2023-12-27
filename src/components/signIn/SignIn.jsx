import React from 'react'
import Header from '../header'
import Input from '../Input'
import Button from '../Button'

function SignIn() {
  return (
    <div>
      <Header />
      <h1>Sign In</h1>

      <form className='signIn' action="post">
        <Input inpType='username'/>
        <Input inpType='email'/>
        <Input inpType='password'/>
        <Input inpType='password'/>
        <Input inpType='ConfirmPassword'/>

        <Button text={'sign In'}/>
      </form>
    </div>
  )
}

export default SignIn