import RegistrationPromoBlock from "../RegistrationPromoBlock";
import "./style.css";
import breakthrough from '/assets/targetaudience.png'

function Breakthrough() {
  return (
    <div className="break-business-change-section">
      <div className="break-business-change-section1">
        <p className="break-business-impact-heading">Who Will Benefit Most from This B2G Course?</p>
        <div className="break-business-change-divider" />
        <div className="vertical-spacer">
      <img src={breakthrough} alt="" className="aimage-container" />
      </div>
       <div className="stylish-registration-section">     
       <RegistrationPromoBlock/>
      </div>
      </div>
      
    </div>
  );
}

export default Breakthrough;