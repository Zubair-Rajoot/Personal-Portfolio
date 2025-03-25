import React from 'react';
import Me from '../../assets/Zubair.PNG';
import { FaAward } from "react-icons/fa6";
import { TiFolderOpen } from "react-icons/ti";
import { PiCertificateLight } from "react-icons/pi";
import './About.css';



const About = () => {
  return (
    <section id='about'>

      <h5>Get To know</h5>
      <h2>About Me</h2>

      <div className="container about__container">


        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About Me" />
          </div>


        </div>



        <div className="about__content">
          
          <div className="about__cards">

            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1+ year working</small>

            </article>


            <article className='about__card'>
              <PiCertificateLight className='about__icon' />
              <h5>Certification</h5>
              <small>Seebiz pvt ltd</small>

            </article>



            <article className='about__card'>
              <TiFolderOpen className='about__icon' />
              <h5>Projects</h5>
              <small>50+ Projects</small>

            </article>


          </div>


          <p>Hi, I'm Muhammad Zubair, a web developer skilled in JavaScript React,Angular, RESTful
APIs, Node.js and express. I build dynamic full stack applications and create beautiful UIs
with HTML and CSS, tailwind, Ant Design and material UI. Experienced in integrating real time updates with Socket.io and efficient media management using Cloudinary and multer.</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>




      </div>

    </section>
  )
}

export default About
