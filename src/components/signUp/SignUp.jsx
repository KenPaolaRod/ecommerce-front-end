import React from 'react'
import { useState, useContext } from 'react'
import { AuthContext } from '../../contex/AuthContext'
import Header from '../Header'
import Input from '../Input'
import Button from '../Button'
import Footer from '../Footer'

function SignUp() {
  const authCtx = useContext(AuthContext);
  const {signUp} = authCtx;
  const [name, setname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault()
    if (password !== confirmPassword ) {
      const error = 'The passwords do not match. Please try again.';
      setErrorMessage(error);
      return;
    } else if (!name || !email || !password || !confirmPassword) {
      const error = 'Must Fill all fields';
      setErrorMessage(error);
      return;

    } else {
      setErrorMessage('')
      signUp(name, email, password, confirmPassword);
    }


  }
  return (
    <div>
      <Header />
      {errorMessage && <p>{errorMessage}</p>}

      <form className='signIn' action='post'>
      <h1>Sign Up</h1>
        <Input inpType='username'  onChange={e => setname(e.target.value)}/>
        <Input inpType='email'  onChange={e => setEmail(e.target.value)}/>
        <Input inpType='password'  onChange={e => setPassword(e.target.value)}/>
        <Input inpType='confirmPassword' onChange={e => setConfirmPassword(e.target.value)}/>

        <Button text={'sign Up'} btnClass={"log-sign-btn"} onClick={handleSignUp} type={'submit'}/>
      </form>

      <Footer />
    </div>
  )
}

export default SignUp