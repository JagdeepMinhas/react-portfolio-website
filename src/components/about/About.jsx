import React from 'react'
import './about.css'
import ME from '../../assets/me.jpeg'
import {BiAward} from "react-icons/bi"
import {FaUniversity} from "react-icons/fa"
import {MdWork} from "react-icons/md"

const About = () => {
  return (
    <section id = "about">
      <h5>Get to know</h5>
      <h2> About me </h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src ={ME} alt ="About image"/>
            </div>
            </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <BiAward className="about-icon"/>
              <h5>Experience</h5>
              <small>2+ years of coding Experiecnce</small>
            </article>
            <article className='about__card'>
              <MdWork className="about-icon"/>
              <h5>Projects</h5>
              <small>10+ completed</small>
            </article>
            <article className='about__card'>
              <FaUniversity className="about-icon"/>
              <h5>Education</h5>
              <small> Bachelor of Computing Science - Simon Fraser University</small>
             
         
            </article>
          </div>
          <p> Experienced third-year university student with a background in full-stack development seeking an internship opportunity to further develop skills and contribute to a dynamic team </p>
          <a href='#contact' className='btn btn-primary'> let's talk</a>
        </div>
      </div>
      </section>
  )
}

export default About