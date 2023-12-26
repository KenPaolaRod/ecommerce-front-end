import React from 'react'

function Button({text, btnClass, onClick, style}) {
  const buttonClasses = `btn ${btnClass || ''}`
  return (
    <button className={buttonClasses} onClick={onClick} style={style}>{text}</button>
  )
}

export default Button