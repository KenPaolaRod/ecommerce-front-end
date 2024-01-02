import React from 'react'

function Button({text, btnClass, onClick, style, type}) {
  const buttonClasses = `btn ${btnClass || ''}`
  return (
    <button className={buttonClasses} onClick={onClick} style={style} type={type}>{text} </button>
  )
}

export default Button