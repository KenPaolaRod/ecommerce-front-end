import React from 'react'

// function Input({inpType, title, placeholder}) {
//  const inputType = inpType || 'text'

//   return (
//     <div>
//     <label htmlFor={inpType}>{title}</label>
//     <input
//       id={inpType}
//       name={inpType}
//       type={inputType}
//       placeholder={placeholder}
//       required
//     />
//   </div>
//   )
// }

function Input({inpType}) {
  const inputType = {
    username: {title: 'usernamee', type: 'text'},
    email: {title: 'Email', type: 'mail'},
    password: {title: 'paswordd', type:'password'},
    ConfirmPassword: {title: 'Confirm Password', type:'password'}
  }

 
   return (
     <input
       name={inpType}
       type={inputType[inpType].type}
       placeholder={inputType[inpType].title}
       required
     />
   )
 }
 
export default Input