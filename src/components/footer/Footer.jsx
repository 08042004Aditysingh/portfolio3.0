import React from 'react'
import './footer.css'
import {FaLinkedinIn} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Aditya Singh</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>

      </ul>
      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/aditya08apr/"><FaLinkedinIn/></a>
        <a href="https://www.instagram.com/aditya08042004/"><FiInstagram/></a>
        
      </div>
      <div className="footer_copyright">
      </div>
    </footer>
  )
}

export default Footer
