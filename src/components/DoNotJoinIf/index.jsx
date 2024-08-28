import RegistrationPromoBlock from "../RegistrationPromoBlock";
import "./style.css";
import DoNotJoin from '/assets/donotjoinif.png'

function DoNotJoinIf() {
  return (
    <div className="workshop-info-container">
      <div className="workshop-info-container1">
      <div className="workshop-info-container2">
      <p className="workshop-title-style">Who This Workshop Will Help The Best?</p>
      <div className="workshop-description" />
      <div className="image-container1">
      <img src={DoNotJoin} alt="" className="image-container" />
    </div>
    </div>        
          <div className="registration-box">
            <RegistrationPromoBlock/>
          </div>
        </div>
    </div>
  );
}

export default DoNotJoinIf;