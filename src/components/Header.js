import React, {useState, useEffect} from 'react'

import Logo from "../assets/img/logo.svg"
import Nav from "../components/Nav"
import NavMobile from "../components/NavMobile"
import Social from "../components/Social"

const Header = () => {

  const [bg, setBg] = React.useState(false)

  useEffect(() => {
      window.addEventListener('scroll', () => {
          return window.scrollY > 50 ? setBg(true) : setBg(false)
      })
  })


  return (
    <header className={`${bg ? 'bg-tertiary h-20' : 'h-24'} flex item-center fixed top-0 w-full text-white z-10 transition-all duration-300`}>
        <div className='container mx-auto h-full flex items-center justify-between'>
            {/* logo */}
            <a href="#">
                <img src={Logo} alt="Logo Paul Vigneron"/>
            </a>

            {/* Nav */}
        </div>
    </header>
  )
}

export default Header