import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2 className='port'>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="kuizz" />
          </div>
            <h3>KUIZZ</h3>
            <div className="portfolio__item-cta">
            <a href="http://github.com" className='btn'>Github</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary'target='__blank'>Live Demo</a>
            </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="Tindog" />
          </div>
            <h3>Tindog Clone</h3>
            <div className="portfolio__item-cta">
            <a href="http://github.com" className='btn'>Github</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary'target='__blank'>Live Demo</a>
            </div>
        </article>

      </div>
    </section> 
  )
}

export default Portfolio