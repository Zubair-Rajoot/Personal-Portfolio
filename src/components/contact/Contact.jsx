import React from 'react';
import './Contact.css';
import { TfiEmail } from "react-icons/tfi";
import { SiWhatsapp } from "react-icons/si";
import { useRef } from 'react';
import emailjs from 'emailjs-com';



const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_glknuit', 'template_aqu4gkd', form.current, 'KuXNO8SA0kcBbcVCh')
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
    e.target.reset();

  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">


        <div className="contact__options">
          <article className="contact__option">
            <TfiEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>zubairraj30@gmail.com</h5>
            <a href="mailto:zubairraj30@gmail.com">Send a Message</a>
          </article>


          <article className="contact__option">
            <SiWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>03200657336</h5>
            <a href="https://wa.me/923200657336" target="_blank" rel="noopener noreferrer">
              Send a Message
            </a>



          </article>


        </div>



        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name='name' placeholder='Your full Name' className='contact__form-input' required />
          <input type="email" name='email' placeholder='Your Email' className='contact__form-input' required />
          <textarea name="message" id="" cols="30" rows="10" placeholder='Your Message' className='contact__form-input' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>



      </div>
    </section>
  )
}

export default Contact
