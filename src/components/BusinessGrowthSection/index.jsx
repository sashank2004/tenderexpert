import SvgIcon1 from "./icons/SvgIcon1";
import SvgIcon2 from "./icons/SvgIcon2";
import "./style.css";

function BusinessGrowthSection() {
  return (
    <div className="business-growth-section1">
      <div className="business-growth-section">
        <SvgIcon1 className="svg-container1" />
        <p className="business-growth-message">
          <span>You Acquire Practical, Winning </span>
          <span className="time-wealth-secrets-styler">Strategies </span>
          <span>to Secure Lucrative </span>
          <span className="time-wealth-secrets-styler">Government Contracts</span>
        </p>
      </div>
      <div className="business-growth-section">
        <SvgIcon1 className="svg-container1" />
        <p className="business-growth-message">
          <span>You Learn from Real-World </span>
          <span className="time-wealth-secrets-styler">Success Stories</span>
          <span>, Applying Proven Tactics to Your Own Ventures</span>
        </p>
      </div>
    </div>
  );
}

export default BusinessGrowthSection;
