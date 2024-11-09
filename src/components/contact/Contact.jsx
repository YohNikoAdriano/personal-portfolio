import React from 'react'
import "./contact.css"
import HomeSocial from '../home/HomeSocial'

const Contact = () => {
  return (
    <section className="contact container section" id='contact'>
      <h2 className='section-title'>Get In Touch!</h2>
      <div className="contact-container grid">
        <div className="contact-info">
          <h3 className="contact-title">Lets talk about everything!</h3>
          <p className="contact-details">Dont like forms? Send me an email</p>
          <HomeSocial />
        </div>
        <form action="https://formspree.io/f/xdkogynb" method="POST" className='contact-form'>
          <div className="contact-form-group">
            <div className="contact-form-item">
              <input type="text" name="name" className='form-input' placeholder='Insert your name ...'/>
            </div>
            <div className="contact-form-item">
              <input type="email" name="email" className='form-input' placeholder='Insert your email ...'/>
            </div>
          </div>
          <div className="contact-form-item">
              <input type="text" name="subject" className='form-input' placeholder='Insert your subject ...'/>
            </div>
            <div className="contact-form-item form-area">
              <textarea rows="30" cols="10" name="message" className='form-input' placeholder='Write your message ...'></textarea>
            </div>
          <button type='submit' className='btn'>Send Message!</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
