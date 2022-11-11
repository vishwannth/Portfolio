import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/vishwannth-j-0a9b68232/" target="#header"><BsLinkedin /></a>
        <a href="https://github.com/vishwannth" target="#header"><FaGithub /></a>
        <a href="https://www.instagram.com/_vishwannth_" target="#header"><FiInstagram /></a>        
    </div>
  )
}

export default HeaderSocials