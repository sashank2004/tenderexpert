import "./style.css";
import image6 from '/assets/image_a371aaf5.png';
import image5 from '/assets/image_53056a81.png';
import image7 from '/assets/image_1f988f2a.png';
import image4 from '/assets/image_70dbe8e6.png';

const WhatHappens = () => {
  return (
    <div className="business-growth-promo-container">
      <div className="business-growth-promo-section">
        <p className="hero-heading">What Happens When You Join?</p>
        <div className="workshop-divider" />
        <div className="business-growth-features-container">
        
        <div className="profit-scale-box">
      <img src={image4} alt="" className="time-wealth-image" />
      <div className="profit-scale-guarantee">
        <span className="profit-scale-style not-bold">
        You Unlock
        </span>
      <span className="profit-scale-guarantee-style bold">
      Secrets To Create Time & Wealth<span  style={{marginLeft:"3px"}}className="not-bold">in Business</span>
      </span>
    </div>
    </div>
          
          
          <div className="profit-scale-box">
      <img src={image7} alt="" className="time-wealth-image" />
      <div className="profit-scale-guarantee">
        <span className="profit-scale-style not-bold">
        You Learn Strong Foundational Activites To 
        </span>
      <span className="profit-scale-guarantee-style bold">
      Win in Your Business
      </span>
    </div>
    </div>
          
          <div className="profit-scale-box">
      <img src={image5} alt="" className="time-wealth-image" />
      <div className="profit-scale-guarantee">
        <span className="profit-scale-style not-bold">
        Your Business Growth with
        </span>
      <span className="profit-scale-guarantee-style bold">
      Increased Revenue & Cashflow
      </span>
    </div>
    </div>


          <div className="profit-scale-box">
      <img src={image6} alt="" className="time-wealth-image" />
      <div className="profit-scale-guarantee">
        <span className="profit-scale-style bold">
          More Profit, More
          Freedom, More Scale 
        </span>
      <span className="profit-scale-guarantee-style not-bold">
        Is Guaranteed if you follow
        Workshop
      </span>
    </div>
    </div>
        </div>
      </div>
    </div>
  )
}

export default WhatHappens