import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {MdWorkOutline} from 'react-icons/md'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2 className='about_me'>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experiance</h5>
              <small>Just a beginner</small>
            </article>
            <article className='about__card'>
              <MdWorkOutline className='about__icon'/>
              <h5>Profession</h5>
              <small>Student</small>
              <br />
              <small>B.E CSE</small>
            </article>
            <article className='about__card'>
              <AiOutlineFundProjectionScreen className='about__icon'/>
              <h5>Projects</h5>
              <small>3+ Completed</small>
            </article>
          </div>

          <p>
          I am a student currently perusing my BE Computer
          Science and Engineering degree from College Of
          Engineering Guindy , Anna university ,Chennai,India.
          and also having a great intrest in Stock Market.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About
