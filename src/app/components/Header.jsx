'use client'

import { useEffect, useState } from 'react'

const Header = () => {
  const [showNav, setShowNav] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down
        setShowNav(false)
      } else {
        // Scrolling up
        setShowNav(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <nav
      className={`bg-transparent fixed grid grid-cols-3 w-full py-10 transition-transform duration-300 ${
        showNav ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div></div>

      <div className='flex justify-center'>
        <img src='secondlogo.png' alt='Logo' />
      </div>

      <div className='flex gap-3 justify-end items-center p-3'>
        <button className='uppercase font-bold bg-[#fff] text-[#994219] px-5 py-3'>
          Let's Connect
        </button>
      </div>
    </nav>
  )
}

export default Header
