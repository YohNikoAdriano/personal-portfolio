import React, { useState } from 'react'
import "./portfolio.css"
import PortfolioData from './PortfolioData'

// Logo Portfolio: https://www.flaticon.com/authors/special-ungravity/gradient/2?author_id=1

const Portfolio = () => {
  const [items, setItems] = useState(PortfolioData)
  const filterItem = (categoryItem) => {
    const updatedItems = PortfolioData.filter((currEl) => {
      return currEl.category === categoryItem;
    })
    setItems(updatedItems);
  }

  return (
    <section className="section container portfolio" id='portfolio'>
      <h2 className='section-title'>My Portfolio</h2>
      <div className='work-filters'>
        <div className="work-item" onClick={() => setItems(PortfolioData)}>Everything</div>
        <div className="work-item" onClick={() => filterItem("Website Development")}>Website Dev</div>
        <div className="work-item" onClick={() => filterItem("Mobile Development")}>Mobile Dev</div>
      </div>
      <div className="work-container grid">
        {items.map((item) => {
          const {id, image, title, category, link} = item;
          return (
            <div className="work-card" key={id}>
              <div className="work-thumbnail">
                <img src={image} alt="Work Thumbnail" className='work-image' />
                <div className="work-mask"></div>
              </div>
              <span className='work-category'>{category}</span>
              <h3 className="work-title">{title}</h3>
              <a href={link} className='work-link'>
                <i className='icon-link work-link-icon'></i>
              </a>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio
