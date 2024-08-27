import RegistrationPromoBlock from "../RegistrationPromoBlock";
import "./style.css";
import breakthrough from '/assets/breakthrough.png'

function Breakthrough() {
  return (
    <div className="break-business-change-section">
      <div className="break-business-change-section1">
        <p className="break-business-impact-heading">What Will Change In Your Business?</p>
        <div className="break-business-change-divider" />
        <div className="vertical-spacer">
      <img src={breakthrough} alt="" className="image-container" />
      </div>
       <div className="stylish-registration-section">     
       <RegistrationPromoBlock/>
      </div>
      </div>
      
    </div>
  );
}

export default Breakthrough;