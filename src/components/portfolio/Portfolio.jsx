import React from 'react'
import './Portfolio.css'

import ecom from '/assets/ecom1.png';
import budget from '/assets/budget.png';

import pos from '/assets/pos.png';
import opti from '/assets/optima.png';

const Portfolio = () => {
  return (
    <section id='Portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>



      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={ecom} alt="portfolio item" />

          </div>
          <h3>Ecommerce site</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Zubair-Rajoot/Ecommerce-Mern" className='btn' target="_blank">Github link</a>
          {/* <a href="https://dribbble.com" className='btn btn-primary' target="_blank">Live Demo</a> */}
          </div>
        </article>   



       <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={budget} alt="portfolio item" />

          </div>
          <h3>  Mind Therapy </h3>
          <div className="portfolio__item-cta">
          <a href="https://therapysession.ai/" className='btn' target="_blank">Website link</a>
          {/* <a href="https://dribbble.com" className='btn btn-primary' target="_blank">Live Demo</a> */}
          </div>
          </article>  

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={budget} alt="portfolio item" />

          </div>
          <h3>Budget management system</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Zubair-Rajoot/Budget_Managment_system" className='btn' target="_blank">Github link</a>
          {/* <a href="https://dribbble.com" className='btn btn-primary' target="_blank">Live Demo</a> */}
          </div>
          </article>   

          


          


          <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={opti} alt="portfolio item" />

          </div>
          <h3>CRM Real State application</h3>
          <div className="portfolio__item-cta">
          <a href="https://dev3.optima-crm.com" className='btn' target="_blank">Website link</a>
          {/* <a href="https://dribbble.com" className='btn btn-primary' target="_blank">Live Demo</a> */}
          </div>
          </article>   

          <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={pos} alt="portfolio item" />

          </div>
          <h3>Point of sale(MEAN STACK)</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/orgs/SeeBiz-Pakistan/teams/students-aug24-pos-frontend" className='btn' target="_blank">Github link</a>
          {/* <a href="https://dribbble.com" className='btn btn-primary' target="_blank">Live Demo</a> */}
          </div>
          </article> 

          {/* <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Img1} alt="portfolio item" />

          </div>
          <h3>This is portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="http://github.com" className='btn' target="_blank">Github</a>
          <a href="https://dribbble.com" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
          </article>    */}

          {/* <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Img1} alt="portfolio item" />

          </div>
          <h3>This is portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="http://github.com" className='btn' target="_blank">Github</a>
          <a href="https://dribbble.com" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
          </article>    */}

          {/* <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Img1} alt="portfolio item" />

          </div>
          <h3>This is portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="http://github.com" className='btn' target="_blank">Github</a>
          <a href="https://dribbble.com" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
          </article>    */}

      </div>
    </section>
  )
}

export default Portfolio
