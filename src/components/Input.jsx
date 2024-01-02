import React from 'react'

function Input({inpType, onChange}) {
  const inputType = {
    username: {title: 'usernamee', type: 'text'},
    email: {title: 'Email', type: 'mail'},
    password: {title: 'paswordd', type:'password'},
    confirmPassword: {title: 'Confirm Password', type:'password'}
  }

 
   return (
     <input
       name={inpType}
       type={inputType[inpType].type}
       placeholder={inputType[inpType].title}
       required
       onChange={onChange}
     />
   )
 }
 
export default Input