import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import Me from '../../assets/Me.jpg'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Hasanabbas Momin</h1>
        <h5 className="text_light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img src={Me} alt='me' />
        </div>

        <a href='#contact' className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header