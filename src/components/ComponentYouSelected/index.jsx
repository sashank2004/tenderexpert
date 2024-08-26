import BusinessSuccessPresentation from "../BusinessSuccessPresentation";
import CoachingInfoBlock from "../CoachingInfoBlock";
import ProgramRatingSection from "../ProgramRatingSection";
import JoiningProcessSection from "../JoiningProcessSection";
import "./style.css";
import RegistrationPromoBlock from "../RegistrationPromoBlock";
import image1 from '/assets/womanavatar.png'

function ComponentYouSelected() {
  return (
    <div className="main-content-container">
      <div className="success-workshop-details-container">
        <BusinessSuccessPresentation />
        <div className="business-coach-info-section">
          <div className="business-coach-card">
            <div className="coach-card-container">
              <img src={image1} className="business-coach-image" />
              <div className="business-coach-info-container">
                <CoachingInfoBlock />
                <p className="business-success-coach-text-style">
                  Asia&apos;s Leading Business Success
                  <br />
                  Coach
                </p>
                <div className="full-width-divider" />
                <p className="business-success-details">
                  <span>Trained over </span>
                  <span className="business-owner-count-text-style">216,627</span>
                  <span>
                    {" "}
                    Business
                    <br />
                    Owners in Last{" "}
                  </span>
                  <span className="business-owner-count-text-style">6 Years</span>
                </p>
              </div>
            </div>
            <ProgramRatingSection />
          </div>
          <JoiningProcessSection />
        </div>
          <div className="content-section">
            <p className="english-class-details">Language - Basic English</p>
            <p className="main-event-details">
              STARTS ON 27th August 2024
              <br />
              (09:00 AM- 01:00 PM)
            </p>
            <RegistrationPromoBlock/>
          </div>
      </div>
    </div>
  );
}

export default ComponentYouSelected;
