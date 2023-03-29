import React from 'react'
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import './footer.css'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'></a>
      <ul className='permaLinks '>
        <li><a href='#'> Home</a> </li>
        <li><a href='#about'> About</a> </li>
        <li><a href='#experience'>Experience</a> </li>
        <li><a href='#projects'> Projects</a> </li>
        <li><a href='#contact'>Contact</a> </li>
      </ul>
      <div className="footer__socials">
        <a href='https://www.facebook.com/jagdeep.minhas.5/'><BsFacebook /></a>
        <a href='https://www.instagram.com/jagdeepminhas3161/'><BsInstagram /></a>
        <a href='https://twitter.com/jagdeep78786167?s=11&t=h60kEhL71ZI4BPQzxkkKWw'><BsTwitter /></a>

      </div>
      <div className="footer__copyright">
        <small>&copy;jagdeep's portfolio. All rights reserved </small>
      </div>

    </footer>

  )
}

export default Footer