import React from 'react'
import './footer.css'
import {AiOutlineInstagram} from 'react-icons/ai'
import {FiTwitter} from 'react-icons/fi'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
  return ( 
    <footer>
      <a href="#header" className='footer__logo'>Vishwannth</a>
      <ul className='permalinks'>
        <li><a href="#header">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Services</a></li>
        <li><a href="#team">Team</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      
      <div className="footer__socials">
        <a href="https://www.instagram.com/_vishwannth_/"><AiOutlineInstagram /></a>
        <a href="https://twitter.com/Vishwannth02"><FiTwitter /></a>
        <a href="https://github.com/vishwannth"><BsGithub /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy;VISHWANNTH . All rights reserved </small>
      </div>
    </footer>
  )
}

export default Footer