import { Button, Input } from "@mui/base";
import "./style.css";
import bigImage from '/assets/mukesh.jpeg';

function ComponentYouSelected() {
  return (
    <div className="module-content-container">
      <div className="module-business-growth-strategies-container">
        <p className="module-hero-title">What You Will Learn ?</p>
        <div className="module-border-highlight-stripe" />
        <div className="module-entrepreneur-success-strategies-container">
          <img src={bigImage} className="module-hero-image-display-style" />
          <div className="module-entrepreneur-insights-container">
            <div className="module-foundational-activities-container">
              <Button className="module-foundational-button">01.</Button>
              <p className="module-leadership-guide-styles1">
                <span>Module 1: Understanding the B2G Landscape</span>
                <br/>
                <span className="module-leadership-guide-styles">
                  <ul>
                    <li>Introduction to government contracting</li>
                    <li> Types of government contracts</li>
                    <li>Eligibility criteria and requirements</li>
                  </ul>
                </span>
              </p>
            </div>

            <div className="module-foundational-activities-container">
              <Button className="module-foundational-button">02.</Button>
              <p className="module-leadership-guide-styles1">
                <span>Module 2: Tendering Processes and Strategies</span>
                <br/>
                <span className="module-leadership-guide-styles">
                  <ul>
                    <li> Identifying suitable tenders</li>
                    <li>Preparing winning proposals</li>
                    <li>Negotiating contracts</li>
                  </ul>
                </span>
              </p>
            </div>

            <div className="module-foundational-activities-container">
              <Button className="module-foundational-button">03.</Button>
              <p className="module-leadership-guide-styles1">
                <span>Module 3: Building Relationships with Government Agencies</span>
                <br/>
                <span className="module-leadership-guide-styles">
                  <ul>
                    <li>Networking and relationship building</li>
                    <li> Understanding government procurement policies</li>
                    <li>Communicating effectively with government officials</li>
                  </ul>
                </span>
              </p>
            </div>

            <div className="module-foundational-activities-container">
              <Button className="module-foundational-button">04.</Button>
              <p className="module-leadership-guide-styles1">
                <span>Module 4: Overcoming Challenges in B2G Contracting</span>
                <br/>
                <span className="module-leadership-guide-styles">
                  <ul>
                    <li>Addressing common challenges and obstacles</li>
                    <li> Risk management strategies</li>
                    <li>Legal and compliance issues</li>
                  </ul>
                </span>
              </p>
            </div>

            </div>
        </div>
      </div>
    </div>
  );
}

export default ComponentYouSelected;