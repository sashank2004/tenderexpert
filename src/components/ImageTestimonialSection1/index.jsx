import TestimonialSection1 from "../TestimonialSection1";
import "./style.css";
import photo from '/assets/womanavatar.png'

function ImageTestimonialSection1() {
  return (
    <div className="testimonial-container2">
      <img style={{zIndex:"1"}} src={photo} className="testimonial-avatar" />
      <TestimonialSection1 />
    </div>
  );
}

export default ImageTestimonialSection1;