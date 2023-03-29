import React from 'react'
import './contact.css'
import { AiOutlineMail } from "react-icons/ai"
import {FiInstagram} from "react-icons/fi"
import {BsWhatsapp} from "react-icons/bs"
import  {useRef} from 'react'

const Contact = () => {

  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2> Contact me </h2>
      <div className='container contact__container'>
        <div className='contact__options'> 
          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5> jagdeepsgh9@gmail.com</h5>
            <a href='mailto:jagdeepsgh9@gmail.com' target="_blank"> Send a message</a>
          </article>
          <article className='contact__option'>
            <FiInstagram className='contact__option-icon'  />
            <h4>Instagram</h4>
            <h5>jagdeepminhas_3161 </h5>
            <a href='https://www.instagram.com/jagdeepminhas3161/'target="_blank"> Send a message</a>
          </article>
          <article className='contact__option'>
          <BsWhatsapp  className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>+123456789</h5>
            <a href='https://api.whatsapp.com/send?phone+16049618874'target="_blank"> Send a message</a>
          </article>
        </div>
     
      { /* END OF CONTACT OPTIONS */}
      <form action=''>
        <input type="text" name="name"  placeholder="Your full name" required />
        <input type="email" name="email"  placeholder="Your Email" required />
        <textarea  name ="message" rows="7" placeholder='Your message' required/>
        <button type="submit" className='btn btn-primary'> Send message</button>
      </form>
      </div>
    </section>
  )
}

export default Contact