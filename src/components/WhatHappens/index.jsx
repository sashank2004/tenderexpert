import "./style.css";
import image6 from '/assets/image_a371aaf5.png';
import image5 from '/assets/image_53056a81.png';
import image7 from '/assets/image_1f988f2a.png';
import image4 from '/assets/image_70dbe8e6.png';

const WhatHappens = () => {
  return (
    <div className="business-growth-promo-container">
      <div className="business-growth-promo-section">
        <p className="hero-heading">Key Features</p>
        <div className="workshop-divider" />
        <div className="business-growth-features-container">
        
        <div className="profit-scale-box">
      <img src={image4} alt="" className="time-wealth-image" />
      <div className="profit-scale-guarantee">
        <span className="profit-scale-style bold">
        Interactive Learning
        </span><br/>
      <span className="profit-scale-guarantee-style not-bold">
      Engaging exercises, case studies, and quizzes
      </span>
    </div>
    </div>
          
          
          <div className="profit-scale-box">
      <img src={image7} alt="" className="time-wealth-image" />
      <div className="profit-scale-guarantee">
        <span className="profit-scale-style bold">
        Expert-Led Sessions
        </span>
      <span className="profit-scale-guarantee-style not-bold"><br/>
      Live Sessions from Industry experts
      </span>
    </div>
    </div>
          
          <div className="profit-scale-box">
      <img src={image5} alt="" className="time-wealth-image" />
      <div className="profit-scale-guarantee">
        <span className="profit-scale-style bold">
        Personalized Support
        </span><br/>
      <span className="profit-scale-guarantee-style not-bold">
      Access to dedicated support staff for questions and guidance
      </span>
    </div>
    </div>


          <div className="profit-scale-box">
      <img src={image6} alt="" className="time-wealth-image" />
      <div className="profit-scale-guarantee">
        <span className="profit-scale-style bold">
        Certificate of Completion
        </span><br/>
      <span className="profit-scale-guarantee-style not-bold">
      Receive a recognized certificate upon completion of the course
      </span>
    </div>
    </div>
        </div>
      </div>
    </div>
  )
}

export default WhatHappens