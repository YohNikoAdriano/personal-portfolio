import React from 'react'
import "./about.css"
import AboutBox from './AboutBox'

import FotoAbout from "../../assets/foto-about.jpg"

const About = () => {
  return (
    <section className='about container section' id='about'>

      <h2 className='section-title'>Know More About Me!</h2>

      <div className="about-data grid">
        <div className='about-resume'>
          <img src={FotoAbout} alt="Foto Formal" className='about-img'/>
          <a href="https://drive.google.com/file/d/1RYCtFOEFsAxbKxll0kWcxlapVGlZvoC2/view?usp=sharing" className='btn resume'>My Resume!</a>
        </div>
        <div className="about-info">
          <p className='about-desc'>
          "I'm a Front-End Website Developer with a Computer Science degree, graduating in 2024. I bring a year of experience from a web development internship, where I developed skills in both foundational technologies and modern frameworks. I'm passionate about building interactive and user-friendly web experiences.
          </p>
          <div className="about-skills grid">

          <div className="skills-data">
            <div className="skills-title">
              <h3 className="skills-name">React JS</h3>
              <span className='skills-number'>70%</span>
            </div>
            <div className="skills-bar">
              <span className='skills-percentage react'></span>
            </div>
          </div>

          <div className="skills-data">
            <div className="skills-title">
              <h3 className="skills-name">Vue JS</h3>
              <span className='skills-number'>80%</span>
            </div>
            <div className="skills-bar">
              <span className='skills-percentage vue'></span>
            </div>
          </div>

          <div className="skills-data">
            <div className="skills-title">
              <h3 className="skills-name">Tailwind CSS</h3>
              <span className='skills-number'>70%</span>
            </div>
            <div className="skills-bar">
              <span className='skills-percentage tailwind'></span>
            </div>
          </div>

          <div className="skills-data">
            <div className="skills-title">
              <h3 className="skills-name">Next JS</h3>
              <span className='skills-number'>60%</span>
            </div>
            <div className="skills-bar">
              <span className='skills-percentage next'></span>
            </div>
          </div>

          <div className="skills-data">
            <div className="skills-title">
              <h3 className="skills-name">Node JS</h3>
              <span className='skills-number'>60%</span>
            </div>
            <div className="skills-bar">
              <span className='skills-percentage node'></span>
            </div>
          </div>
        </div>

        </div>
      </div>
      <AboutBox />
    </section>
  )
}

export default About
