import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {FiBook} from 'react-icons/fi'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {TiMessages} from 'react-icons/ti'
import { useState } from 'react'



const Nav = () => {
  const [activeNav , setActiveNav ] = useState('#')
  
  return (
    <nav>
      <a href="#header" onClick={() => setActiveNav('#header')} className={activeNav === '#header' ? 'active' : ''}> <AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} > <AiOutlineUser /></a>
      <a href="#experiance" onClick={() => setActiveNav('#experiance')} className={activeNav === '#experiance' ? 'active' : ''}> <FiBook /></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}> <AiOutlineFundProjectionScreen /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}> <TiMessages /></a>
    </nav>
  )
}

export default Nav