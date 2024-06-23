import React from 'react'

const Input = ({value, type, placeholder,text,id,name, onChange}) => {
  return (
    <input value={value} className='h-10 w-full border rounded-md p-2 outline-none mt-3' type={type} placeholder={placeholder} name={name}
    id={id}
    onChange={onChange} />
  )
}

export default Input