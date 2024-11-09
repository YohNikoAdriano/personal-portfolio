import React from 'react'
import "./home.css"

import HomeSocial from './HomeSocial'
import ScrollDown from './ScrollDown'
import Foto from "../../assets/foto.jpg"

const Home = () => {
  return (
    <div>
      <section className='home container' id='home'>
        <div className="intro">
          <img src={Foto} alt="Foto Formal" className='home-img'/>
          <h1 className='home-name'>Niko Adriano</h1>
          <p className='home-role'>"I am a Front-End Dev Enthusiast"</p>
          <span className='home-desc'>Excited for a new opportunities where I can learn, contribute, and grow alongside a dynamic team.</span>
          <HomeSocial />
          <a href="#contact" className='btn'>Hire Me! <i className='icon-pencil'></i></a>
          <ScrollDown />
        </div>
      </section>
    </div>
  )
}

export default Home
