import { Github, Instagram, Linkedin } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
<nav className='bg-transparent fixed grid grid-cols-3'>
    <div>

    </div>

    <div className='flex justify-center '>
       <img className='w-4/6 ' src="logo.png" alt="" />
    </div>
   
    <div className='flex gap-3 justify-end items-center p-3'>
        {/* <Github/>
        <Instagram/>
        <Linkedin/> */}
    </div>
</nav>  
)
}

export default Header