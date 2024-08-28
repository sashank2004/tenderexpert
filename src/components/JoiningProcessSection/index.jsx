import BusinessGrowthSection from "../BusinessGrowthSection";
import TimeWealthUnlocker from "../TimeWealthUnlocker";
import "./style.css";

function JoiningProcessSection() {
  return (
    <div className="time-wealth-business-growth">
      <p className="main-heading-style">What Happens When You Join?</p>
      <div className="time-wealth-secrets-divider" />
      <div className="business-growth-workshop-details">
      <TimeWealthUnlocker />
      <BusinessGrowthSection />
    </div>
    </div>
  );
}

export default JoiningProcessSection;
