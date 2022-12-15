import React from 'react'

const Button = (props) => {
  return (
    <button className='md:flex flex gap-[.30rem] items-center bg-[#005587] hover:bg-[#11699c] text-white sm:py-[0.5rem] sm:px-[1rem] px-[1rem] py-[0.6rem] text-md rounded-md duration-500'>
        {props.children}
    </button>
  )
}

export default Button
