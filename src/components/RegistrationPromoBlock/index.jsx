import "./style.css";

function RegistrationPromoBlock() {
  return (
    <div onClick={()=>{
      window.location="/contactus"
    }} className="gradient-price-box">
      <p className="promo-banner-text-style">Enquire Now</p>
    </div>
  );
}

export default RegistrationPromoBlock;
