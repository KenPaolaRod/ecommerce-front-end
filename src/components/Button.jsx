import React from 'react'

function Button({text, btnClass, onClick}) {
  const buttonClasses = `btn ${btnClass || ''}`
  return (
    <button className={buttonClasses} onClick={onClick}>{text}</button>
  )
}

export default Button