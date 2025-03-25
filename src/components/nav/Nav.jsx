import React, { useState } from 'react';
import { TiHomeOutline } from "react-icons/ti";
import { FiUser } from "react-icons/fi";
import { MdLibraryBooks } from "react-icons/md";
import { FaServicestack } from "react-icons/fa";
import { RiContactsBook3Line } from "react-icons/ri";
import { IoMdDownload } from "react-icons/io";
import './Nav.css'


const Nav = () => {
  const[activeNav, setActiveNav] = useState('#');


  return (
    <nav>
      <a href="#" onClick={()=>setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><TiHomeOutline /> </a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} ><FiUser /></a>

      <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><MdLibraryBooks /></a>
      <a href="#services" onClick={()=>setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}  ><FaServicestack /></a>
      <a href="#contact"  onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><RiContactsBook3Line /> </a>
      <a href="#Portfolio"  onClick={()=>setActiveNav('#Portfolio')} className={activeNav === '#Portfolio' ? 'active' : ''}><IoMdDownload /> </a>
    </nav>
  )
}

export default Nav
