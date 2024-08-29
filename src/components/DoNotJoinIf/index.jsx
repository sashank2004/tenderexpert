import RegistrationPromoBlock from "../RegistrationPromoBlock";
import "./style.css";
import DoNotJoin from '/assets/target.jpeg'

function DoNotJoinIf() {
  return (
    <div className="join-workshop-info-container">
      <div className="join-workshop-info-container1">
      <div className="join-workshop-info-container2">
      <p className="join-workshop-title-style">Who Will Benefit Most from This B2G Course?</p>
      <div className="join-workshop-description" />
      <div className="join-image-container1">
      <img src={DoNotJoin} alt="" className="join-image-container" />
    </div>
    </div>        
          <div className="join-registration-box">
            <RegistrationPromoBlock/>
          </div>
        </div>
    </div>
  );
}

export default DoNotJoinIf;