import SvgIcon1 from "./icons/SvgIcon1";
import SvgIcon2 from "./icons/SvgIcon2";
import "./style.css";

function TimeWealthUnlocker() {
  return (
    <div className="vertical-flex-container">
      <div className="content-wrapper">
        <SvgIcon1 className="svg-container" />
        <p className="time-wealth-secrets-display-style">
          <span>You Master the Entire </span>
          <span className="time-wealth-secrets-styler">Tendering Process</span>
          <span>, Elevating Your Business in the B2G Space</span>
        </p>
      </div>
      <div className="content-wrapper">
        <SvgIcon1 className="svg-container" />
        <p className="time-wealth-secrets-display-style">
          <span>You Gain Exclusive </span>
          <span className="time-wealth-secrets-styler">Insights </span>
          <span>from Industry Experts, Setting You </span>
          <span className="time-wealth-secrets-styler">Up for Success</span>
        </p>
      </div>
    </div>
  );
}

export default TimeWealthUnlocker;
