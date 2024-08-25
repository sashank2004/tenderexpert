import SvgIcon1 from "./icons/SvgIcon1";
import SvgIcon2 from "./icons/SvgIcon2";
import "./style.css";

function TimeWealthUnlocker() {
  return (
    <div className="vertical-flex-container">
      <div className="content-wrapper">
        <SvgIcon1 className="svg-container" />
        <p className="time-wealth-secrets-display-style">
          <span>You Unlock </span>
          <span className="time-wealth-secrets-styler">Secrets To Create Time &amp; Wealth</span>
          <span> In Business</span>
        </p>
      </div>
      <div className="content-wrapper">
        <SvgIcon1 className="svg-container" />
        <p className="time-wealth-secrets-display-style">
          <span>You Learn Strong Foundational Activities To </span>
          <span className="time-wealth-secrets-styler">Win In Your Business</span>
        </p>
      </div>
    </div>
  );
}

export default TimeWealthUnlocker;
