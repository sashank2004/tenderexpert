import React from 'react'
import './style.css'

const Contact = () => {
 
  return (
    <section id='contactPage'>
      <div id="contact">
        <h1 className='contactPageTitle'>Contact Us</h1>
        <span className='contactDesc'>Please fill out the form below to discuss how we can support your business development needs and unlock new growth potential.</span>
        <form action="https://formsubmit.co/b0ad1767787beef83c070ce830878648" method="POST" className='contactForm' >
           <input type="text" className='name' placeholder='Your Name' name='name' required/>
           <input type="email" className='email' placeholder='Your Email' name='email' required/>
           <input type="tel" className='number' placeholder='Your Phone Number' name='number' required/>
           <textarea className='msg' name="message" rows="5" placeholder='message' required></textarea>
           <button type="submit" value="send" className='submitBtn'>Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;
