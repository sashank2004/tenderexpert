
import React from 'react'
import './style.css';
import ImageTestimonialSection1 from "../ImageTestimonialSection1";

const Reviews = () => {
  return (
    <div className="success-stories-container1">
      <div className="success-stories-container">
        <p className="success-story-heading">Here are some Real Screenshots &amp; Feedbacks</p>
        <div className="testimonial-container3">
          <div className="testimonial-container1">
            <ImageTestimonialSection1 />
            <ImageTestimonialSection1/>
          </div>
          <div className="vertical-card-container">
            <ImageTestimonialSection1 />
            <ImageTestimonialSection1/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reviews;