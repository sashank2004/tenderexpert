import BusinessSuccessPresentation from "../BusinessSuccessPresentation";
import ProgramRatingSection from "../ProgramRatingSection";
import JoiningProcessSection from "../JoiningProcessSection";
import "./style.css";
import image1 from '/assets/manavatarback.png';
import RegistrationPromoBlock from "../RegistrationPromoBlock";

function ComponentYouSelected() {
  return (
    <div className="main-content-container">
      <div className="main-heading">
      <span className="top-heading">Want to know a <span className="orange">Large Fortune Secret</span> to Landing <span className="orange">Government Contracts</span> As A Small Business Owner In the Next <span className="orange">6-12 Months...</span></span> 
      <span className="bottom-heading">
      So That You Can Have Consistent, Sustainable Income?
      </span>
      </div>
      <div className="success-workshop-details-container">
        <BusinessSuccessPresentation />
        <div className="business-coach-info-section">
          <div className="business-coach-card">
            <div className="coach-card-container">
              <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
              <img src={image1} className="business-coach-image" />
              <ProgramRatingSection />
              </div>
              
              <div className="business-coach-info-container">
              <div>
      <p className="coaching-info">
      We will be your coach for a 1-month comprehensive course.
      </p>
      <p className="bold-uppercase-title">Team of Experts</p>
    </div>
                <p className="business-success-coach-text-style">
                Mentorship By Tender Experts and Retired Govt Officials
                </p>
                <div className="full-width-divider" />
                <p className="business-success-details">
                  <span>Partnered with over </span>
                  <span className="business-owner-count-text-style">150+ </span>
                  <span>
                    Companies and Backed By 
                  </span>
                  <span className="business-owner-count-text-style"> 20 Years </span>
                  <span>of Experience</span>
                </p>
              </div>
            </div>            
          </div>
          <JoiningProcessSection />
        </div>
      </div>
      <RegistrationPromoBlock/>
    </div>
  );
}

export default ComponentYouSelected;
