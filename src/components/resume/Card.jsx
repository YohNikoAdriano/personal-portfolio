import React from 'react'

const Card = ({ icon, year, title, desc}) => {
  return (
    <div className='timeline-item'>
      <i className={icon}></i>
      <span className='timeline-year'>{year}</span>
      <h3 className='timeline-title'>{title}</h3>
      <p className='timeline-desc'>{desc}</p>
    </div>
  )
}

export default Card
