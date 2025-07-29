import React from 'react';
import './Services.css';
import { IoIosCheckmark } from "react-icons/io";

const services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>MERN Stack Developer</h3>
          </div>

          <ul className='service__list'>

          <li> <IoIosCheckmark className='service__list-icon' />
          <p>Interactive UI with React.js & Tailwind CSS</p>
          </li>


          <li> <IoIosCheckmark className='service__list-icon' />
          <p>RESTful API Development (Express.js)</p>
          </li>


          <li> <IoIosCheckmark className='service__list-icon' />
          <p>MongoDB Database Management</p>
          </li>


          <li> <IoIosCheckmark className='service__list-icon' />
          <p> Performance & Security Optimization</p>
          </li>


          <li> <IoIosCheckmark className='service__list-icon' />
          <p>Real-Time Features (Socket.io)</p>
          </li>

          <li> <IoIosCheckmark className='service__list-icon' />
          <p>Secure Authentication (JWT, OAuth)</p>
          </li>



          
          <li> <IoIosCheckmark className='service__list-icon' />
          <p> Role-Based Access Control (RBAC)</p>
          </li>


          </ul>


      



        </article>


        <article className='service'>
          <div className="service__head">
            <h3>MEAN Stack Developer</h3>
          </div>

          <ul className='service__list'>

          <li> <IoIosCheckmark className='service__list-icon' />
          <p>Angular-Based Frontend Development</p>
          </li>


          <li> <IoIosCheckmark className='service__list-icon' />
          <p>Scalable & Modular Code Architecture</p>
          </li>


          <li> <IoIosCheckmark className='service__list-icon' />
          <p>State Management with NgRx</p>
          </li>


          <li> <IoIosCheckmark className='service__list-icon' />
          <p>Role-Based Access Control (RBAC)</p>
          </li>


        
          </ul>



        </article>



   <article className='service'>
          <div className="service__head">
            <h3>React Native Developer</h3>
          </div>

          <ul className='service__list'>

          <li> <IoIosCheckmark className='service__list-icon' />
          <p>State manegment with redux tool kit </p>
          </li>


          <li> <IoIosCheckmark className='service__list-icon' />
          <p>Attractive Ui mobile design</p>
          </li>


          {/* <li> <IoIosCheckmark className='service__list-icon' />
          <p>MongoDB Database Management</p>
          </li> */}


          <li> <IoIosCheckmark className='service__list-icon' />
          <p> Performance & Security Optimization</p>
          </li>


          <li> <IoIosCheckmark className='service__list-icon' />
          <p>Real-Time Features (Socket.io)</p>
          </li>

           <li> <IoIosCheckmark className='service__list-icon' />
          <p>Debugging</p>
          </li>

          <li> <IoIosCheckmark className='service__list-icon' />
          <p>Secure Authentication (JWT, OAuth)</p>
          </li>



          
          {/* <li> <IoIosCheckmark className='service__list-icon' />
          <p> Role-Based Access Control (RBAC)</p>
          </li> */}


          </ul>


      



        </article>



        <article className='service'>
          <div className="service__head">
            <h3>UI Design</h3>
          </div>

          <ul className='service__list'>

         


          <li> <IoIosCheckmark className='service__list-icon' />
          <p>Fully Responsive – Adapts seamlessly to all devices.</p>
          </li>


          <li> <IoIosCheckmark className='service__list-icon' />
          <p>Smooth Animations & Transitions – Enhance user experience.</p>
          </li>


          <li> <IoIosCheckmark className='service__list-icon' />
          <p>Dark & Light Mode Support – User-friendly theme options.</p>
          </li>

          <li> <IoIosCheckmark className='service__list-icon' />
          <p>Grid & Flexbox Layouts – Well-structured responsive designs.</p>
          </li>

          <li> <IoIosCheckmark className='service__list-icon' />
          <p>Consistent Color & Typography – Enhancing readability & branding.</p>
          </li>

          </ul>



        </article>



      </div>
    </section>
  )
}

export default services
