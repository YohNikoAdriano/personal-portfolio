import React from 'react'
import "./services.css"
import Frontend from "../../assets/frontend.png"
import Backend from "../../assets/backend.png"

const data = [
    {
        id: 1,
        image: Frontend,
        title: "Front End Dev",
        desc: "I craft interactive and responsive user interfaces that deliver visually engaging experiences. Using modern frameworks like React and Vue.js, I focus on creating intuitive designs and ensuring smooth API integration and optimizing performance are key priorities in my front-end development process.",
    },
    {
        id: 2,
        image: Backend,
        title: "Back End Dev",
        desc: "I handle essential back-end tasks, leveraging technologies like Node.js and Express for database integration and RESTful API development. From connecting your application to a reliable database to setting up APIs for efficient front-end and back-end communication."
    },
]

const Services = () => {
  return (
    <section className='services container section' id='services'>
        <h2 className='section-title'>My Services</h2>
        <div className="services-container grid">
            {data.map(({id, image, title, desc}) => {
                return (
                    <div className="services-card" key={id}>
                        <img src={image} alt="" className='services-img' />
                        <h3 className='services-title'>{title}</h3>
                        <p className='services-desc'>{desc}</p>
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default Services
