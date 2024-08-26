import SvgIcon1 from "./icons/SvgIcon1";
import SvgIcon2 from "./icons/SvgIcon2";
import "./style.css";

function BusinessGrowthSection() {
  return (
    <div className="business-growth-section1">
      <div className="business-growth-section">
        <SvgIcon1 className="svg-container1" />
        <p className="business-growth-message">
          <span>Your Business Growth With </span>
          <span className="time-wealth-secrets-styler">Increased Revenue &amp; Cashflow</span>
        </p>
      </div>
      <div className="bworkshop-details-container">
        <div className="bprofit-scale-container">
          <SvgIcon2 className="svg-container2" />
        </div>
        <p className="bprofit-scale-message">
          <span>More Profit, More Freedom, More Scale</span>
          <span className="bworkshop-details-text-style">
            {" "}
            Is Guaranteed If
            You Follow The Exact Steps Covered In The Workshop
          </span>
        </p>
      </div>
    </div>
  );
}

export default BusinessGrowthSection;
