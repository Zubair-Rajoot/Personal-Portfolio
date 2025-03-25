import React from 'react'
import './Portfolio.css'

import ecom from '/src/assets/ecom1.png';
// import budget from '/src/assets/budget.png';
import BudgetImage from "/src/assets/Budget.png";


import pos from '/src/assets/pos.png';

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
          <a href="https://github.com/Zubair-Rajoot/Ecommerce-Mern" className='btn' target="_blank">Github</a>
          {/* <a href="https://dribbble.com" className='btn btn-primary' target="_blank">Live Demo</a> */}
          </div>
        </article>   



        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={BudgetImage} alt="portfolio item" />

          </div>
          <h3>Budget management system</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Zubair-Rajoot/Budget_Managment_system" className='btn' target="_blank">Github</a>
          {/* <a href="https://dribbble.com" className='btn btn-primary' target="_blank">Live Demo</a> */}
          </div>
          </article>   


          <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={pos} alt="portfolio item" />

          </div>
          <h3>Point of sale(MEAN STACK)</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/orgs/SeeBiz-Pakistan/teams/students-aug24-pos-frontend" className='btn' target="_blank">Github</a>
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
