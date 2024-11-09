import React from 'react'
import "./resume.css"
import Card from './Card'

const data = [
  {
    id: 1,
    category: "education",
    icon: "icon-graduation",
    year: "2020-2024",
    title: "Bachelor's Degree",
    desc: "I hold a Bachelor's degree in Computer Science from Universitas Multimedia Nusantara. My studies provided a strong foundation in software development, algorithms, and web technologies, fueling my passion for front-end development and interactive web solutions."
  },
  {
    id: 2,
    category: "job",
    icon: "icon-briefcase",
    year: "2023-2024",
    title: "Web Development Intership",
    desc: "I completed a one-year internship at PT Global Loyalty Indonesia from February 2023 to February 2024, where I gained hands-on experience in web development. I focused on building responsive user interfaces, enhanced my skills in Vue.js, Nuxt.js, and Tailwind CSS, while working on high-performing web solutions and collaborating closely with a team."
  },
  {
    id: 3,
    category: "education",
    icon: "icon-graduation",
    year: "2024",
    title: "Bachelor's Degree Graduation",
    desc: "Yeayyy! I finally graduated with a Bachelor's Degree in Computer Science from Universitas Multimedia Nusantara in 2024 with a GPA of 3.78 (Very Satisfactory)."
  },
  {
    id: 4,
    category: "",
    icon: "icon-briefcase",
    year: "Present",
    title: "To Be Continued ...",
    desc: "Searching for new oportunity"  
  },
]

const Resume = () => {
  return (
    <section className="section container section resume" id='resume'>
      <h2 className='section-title'>My Experiences</h2>

      <div className="resume-container">
        <div className="dots">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
        <div className="timeline">
          {data.map(({id, category, icon, year, title, desc}) => (
            <Card 
              key={id} 
              icon={icon} 
              category={category} 
              year={year} 
              title={title} 
              desc={desc}  
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Resume
