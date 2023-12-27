import React from 'react'

function Input({inpType, title, type}) {
 const inputType = inpType || 'text'

  return (
    <div>
    <label htmlFor={inpType}>{title}</label>
    <input
      id={inpType}
      name={inpType}
      type={inputType}
      placeholder={type}
    />
  </div>
  )
}

export default Input