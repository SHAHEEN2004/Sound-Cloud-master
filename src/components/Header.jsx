import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div  className='w-[100vw] h-15 p-5 text-white bg-black shadow-lg sticky top-0 left-0 z-50'>
    <Link to="/" >Relevel Sound Cloud</Link>
    </div>
  )
}

export default Header