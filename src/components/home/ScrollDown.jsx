import React from 'react'

const ScrollDown = () => {
  return (
    <div className='scroll-down'>
      <a href="#about" className='mouse-wrapper'>
        <span className='scroll-down-name'>Scroll Down</span>
        <span className='mouse'>
          <span className='wheel'></span>
        </span>
      </a>
    </div>
  )
}

export default ScrollDown
