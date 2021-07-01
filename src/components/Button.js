import React from 'react'

const Button = ({color,text,onAdd}) => {
    return (
      <button onClick={onAdd} className='btn' style={{background:color}}>{text}</button>
    )
}

Button.defaultProps={
    color: 'black',
    text: 'Add',
}

export default Button
