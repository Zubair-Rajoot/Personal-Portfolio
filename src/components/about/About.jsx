import React from 'react';
import Me from '/assets/zubair.png';
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
              <small>3+ year working</small>

            </article>


            <article className='about__card'>
              <PiCertificateLight className='about__icon' />
              <h5>Platform</h5>
              <small>ThinkBinary</small>

            </article>



            <article className='about__card'>
              <TiFolderOpen className='about__icon' />
              <h5>Projects</h5>
              <small>50+ Projects</small>

            </article>


          </div>


          <p>I build powerful web and mobile apps with a strong focus on real-world solutions and client satisfaction. Experienced with Optima Geeks, Tecmatic, and SeeBiz, I follow the complete software development lifecycle with a professional team to deliver high-quality results. Let's turn your ideas into reality!.</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>




      </div>

    </section>
  )
}

export default About
