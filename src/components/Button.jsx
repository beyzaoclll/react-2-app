import React from 'react'

const Button = ({onClick, btnText}) => {
  return (
    <button className='w-full h-10 bg-indigo-600 text-white items-center justify-between mt-4 rounded-md border order-indigo-600' onClick={onClick}>{btnText}</button>
  )
}

export default Button