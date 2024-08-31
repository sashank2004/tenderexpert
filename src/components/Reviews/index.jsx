
import React from 'react'
import './style.css';
import photo from '/assets/womanavatar.png'

const Reviews = () => {
  return (
    <div className="success-stories-container1">
      <div className="success-stories-container">
        <p className="success-story-heading">Here are some Real Screenshots &amp; Feedbacks</p>
        <div className="testimonial-container3">
          <div className="testimonial-container1">

            <div className="testimonial-container2">
      <img style={{zIndex:"1"}} src={photo} className="testimonial-avatar" />


      <div className="testimonial-container">
      <p className="testimonial-text1">
      ""The B2G course provided me with invaluable insights into navigating government contracts. The step-by-step guidance made the complex process straightforward and manageable. I highly recommend it to any business owner looking to expand into government tenders!"
      </p>
      <p className="testimonial-author-text-style2">Shanmuganathan C</p>
      <p className="testimonial-signature1">Spider India</p>
    </div>
    </div>

             <div className="testimonial-container2">
      <img style={{zIndex:"1"}} src={photo} className="testimonial-avatar" />

      <div className="testimonial-container">
      <p className="testimonial-text1">
      "This course has been a game-changer for my business. The practical tips and real-world examples helped me secure my first government contract within weeks. The support from the team was outstanding throughout the entire process."
      </p>
      <p className="testimonial-author-text-style2">Arjun Patil</p>
      <p className="testimonial-signature1">NexaDynamics</p>
    </div>
    </div>
          </div>
          <div className="vertical-card-container">
          <div className="testimonial-container2">
      <img style={{zIndex:"1"}} src={photo} className="testimonial-avatar" />

      <div className="testimonial-container">
      <p className="testimonial-text1">
      "Enrolling in the B2G course was one of the best decisions I made for my company. The detailed modules and expert advice gave me the confidence to bid on government projects, and now, we’re seeing the results! Worth every penny."
      </p>
      <p className="testimonial-author-text-style2">Dev Menon</p>
      <p className="testimonial-signature1">TechWave Solutions</p>
    </div>
    </div>

             <div className="testimonial-container2">
      <img style={{zIndex:"1"}} src={photo} className="testimonial-avatar" />

      <div className="testimonial-container">
      <p className="testimonial-text1">
      "The B2G course is expertly designed and highly effective. The knowledge I gained from this course has opened up new avenues for my business in the government sector. The instructors were knowledgeable, and the content was easy to follow."
      </p>
      <p className="testimonial-author-text-style2">Arvind Gupta</p>
      <p className="testimonial-signature1">Technova</p>
    </div>
    </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reviews;