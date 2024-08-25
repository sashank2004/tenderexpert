import "./style.css";
import image2 from '/assets/image_5bf19134.png'

function ProgramRatingSection() {
  return (
    <div className="program-rating-stats-container">
      <div className="program-rating-container">
        <img src={image2} alt="" className="program-rating-info-block" />
        <p className="testimonial-text">
          <span>70,000+</span>
          <span className="program-rating-text-style">
            {" "}
            People Rated My Programs with<br className="brtag"></br>
          </span>
          <span>4.96</span>
          <span className="program-rating-text-style"> Star</span>
        </p>
      </div>
    </div>
  );
}

export default ProgramRatingSection;
