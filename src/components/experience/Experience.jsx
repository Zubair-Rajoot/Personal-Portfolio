import React from 'react'
import { BsFillCloudCheckFill } from "react-icons/bs";
import './Experience.css'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>what skill i have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
            <h3>Frontend Developement</h3>
            <div className="experience__content">
              <article className='experience__details'>
              <BsFillCloudCheckFill className='experience__icon' />
             <div>
             <h4>HTML</h4>
             <small className='text-light'>Experienced</small>
             </div>
              </article>


              <article className='experience__details'>
              <BsFillCloudCheckFill className='experience__icon' />
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
              </div>
              </article>



              <article className='experience__details'>
              <BsFillCloudCheckFill className='experience__icon' />
            <div>
            <h4>JAVASCRIPT</h4>
            <small className='text-light'>Experienced</small>
            </div>
              </article>



              <article className='experience__details'>
              <BsFillCloudCheckFill className='experience__icon' />
            <div>
            <h4>TAILWIND CSS</h4>
            <small className='text-light'>Experienced</small>
            </div>
              </article>


              <article className='experience__details'>
              <BsFillCloudCheckFill className='experience__icon' />
             <div>
             <h4>BOOTSTRAP</h4>
             <small className='text-light'>Experienced</small>
             </div>
              </article>

              <article className='experience__details'>
              <BsFillCloudCheckFill className='experience__icon' />
             <div>
             <h4>Ant Design</h4>
             <small className='text-light'>Experienced</small>
             </div>
              </article>

              <article className='experience__details'>
              <BsFillCloudCheckFill className='experience__icon' />
              <div>
              <h4>MATERIAL UI</h4>
              <small className='text-light'>Experienced</small>
              </div>
              </article>

              <article className='experience__details'>
              <BsFillCloudCheckFill className='experience__icon' />
             <div>
             <h4>REACT</h4>
             <small className='text-light'>Experienced</small>
             </div>
              </article>


               <article className='experience__details'>
              <BsFillCloudCheckFill className='experience__icon' />
             <div>
             <h4>REACT Native - App development</h4>
             <small className='text-light'>Experienced</small>
             </div>
              </article>


              <article className='experience__details'>
              <BsFillCloudCheckFill className='experience__icon' />
              <div>
              <h4>Angular</h4>
              <small className='text-light'>Experienced</small>
              </div>
              </article>

            </div>
        </div>

        <div className="experience__backend">
        <h3>backend Developement</h3>
            <div className="experience__content">
              <article className='experience__details'>
              <BsFillCloudCheckFill className='experience__icon' />
             <div>
             <h4>Node</h4>
             <small className='text-light'>Experienced</small>
             </div>
              </article>


              <article className='experience__details'>
              <BsFillCloudCheckFill className='experience__icon' />
              <div>
              <h4>Express</h4>
              <small className='text-light'>Experienced</small>
              </div>
              </article>



              <article className='experience__details'>
              <BsFillCloudCheckFill className='experience__icon' />
              <div>
              <h4>Mongodb</h4>
              <small className='text-light'>Experienced</small>
              </div>
              </article>

              {/* <article className='experience__details'>
              <BsFillCloudCheckFill className='experience__icon' />
             <div>
             <h4>MySql</h4>
             <small className='text-light'>Experienced</small>
             </div>
              </article> */}

              <article className='experience__details'>
              <BsFillCloudCheckFill className='experience__icon' />
              <div>
              <h4>AWS - lightSail</h4>
              <small className='text-light'>Experienced</small>
              </div>
              </article>

              
             
            </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
