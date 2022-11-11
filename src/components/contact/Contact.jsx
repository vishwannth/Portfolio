import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineLinkedin} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form =useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_v0g23kw', 'template_49ev7yh', form.current, 'Bd2ZUMBo6cnofxHxw')

     e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2 className='con'>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>vishwannthudt@gmail.com</h5>
            <a href="mailto:vishwannthudt@gmail.com" target="__blank">Send a message</a>
          </article>

          <article className='contact__option'>
            <AiOutlineInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>_vishwannth_</h5>
            <a href="https://www.instagram.com/_vishwannth_/" target="__blank">Send a message</a>
          </article>

          <article className='contact__option'>
            <AiOutlineLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Vishwannth J</h5>
            <a href="https://www.linkedin.com/in/vishwannth-j-0a9b68232/" target="__blank">Send a message</a>
          </article>
        </div>


        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact