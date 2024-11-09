import React from 'react'

const AboutBox = () => {
  return (
    <div className='about-container grid'>
      <div className='about-box'>
        <i className='about-icon icon-screen-desktop'></i>
        <div>
          <h3 className='box-title'>10+</h3>
          <span className='box-subtitle'>Project Completed</span>
        </div>
      </div>
      <div className='about-box'>
        <i className='about-icon icon-briefcase'></i>
        <div>
          <h3 className='box-title'>1 yr</h3>
          <span className='box-subtitle'>Experience Work</span>
        </div>
      </div>
      <div className='about-box'>
        <i className='about-icon icon-hourglass'></i>
        <div>
          <h3 className='box-title'>1000+</h3>
          <span className='box-subtitle'>Hours of Learn</span>
        </div>
      </div>
      <div className='about-box'>
        <i className='about-icon icon-cup'></i>
        <div>
          <h3 className='box-title'>500+</h3>
          <span className='box-subtitle'>Cups of Coffee</span>
        </div>
      </div>
    </div>
  )
}

export default AboutBox
