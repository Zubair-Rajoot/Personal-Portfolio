import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h2 className="footer__logo">Zubair's Portfolio</h2>
        <div className="footer__links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#services">Services</a>
          <a href="#Portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer__socials">
          {/* <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a> */}
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedinIn /></a>
        </div>
        <p className="footer__copyright">© 2025 Muhammad Zubair. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
