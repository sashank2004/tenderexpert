import TimeWealthUnlocker from "../TimeWealthUnlocker";
import BusinessGrowthSection from "../BusinessGrowthSection";
import "./style.css";

function WealthCreationSection() {
  return (
    <div className="business-growth-workshop-details">
      <TimeWealthUnlocker />
      <BusinessGrowthSection />
    </div>
  );
}

export default WealthCreationSection;
