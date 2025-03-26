import React from 'react';
import CTA from './CTA';
import Me from '../../assets/Muhammad Zubair.png';
import HeaderSocials from './HeaderSocials';
import './Header.css'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h1>Hello I'm</h1>
        <h5>Muhammad Zubair</h5>
        <h5 className="text-light">Mern Stack Developer </h5>

        <CTA />
        <HeaderSocials />
        <a href="#contact" className='scroll__down'>Scroll Down</a>

        <div className="me">
          <img src={Me} />
        </div>



      </div>

    </header>
  )
}

export default Header
