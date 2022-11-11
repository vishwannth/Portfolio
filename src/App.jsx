import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experiance/Experiance'
import Portfolio from './components/portfolio/Portfolio'
import Team from './components/team/team'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

export const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Portfolio />
        <Team />
        <Contact />
        <Footer />
    </>
  )
}
export default App