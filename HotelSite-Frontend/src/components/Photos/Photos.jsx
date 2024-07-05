import "./photos.css";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import photo1 from "../../../public/assets/photo1.jpeg";
import photo2 from "../../../public/assets/photo2.jpg";
import photo3 from "../../../public/assets/photo3.jpg";
import photo4 from "../../../public/assets/photo4.jpg";

const ImageSlider = () => {
  const images = [photo1, photo2, photo3, photo4];
  const [currentSlide, setCurrentSlide] = useState(1);

  const handleNext = () => {
    currentSlide < 3 ? setCurrentSlide(currentSlide + 1) : setCurrentSlide(0);
  };

  const handlePrev = () => {
    currentSlide > 0 ? setCurrentSlide(currentSlide - 1) : setCurrentSlide(3);
  };

  return (
    <div className="slide-container">
      {images.map((image, key) => {
        const SlideClasses =
          key === currentSlide ? "slide active" : "slide fade";
        const SlideStyle = key === currentSlide ? "block" : "none";
        return (
          <div
            className={SlideClasses}
            style={{ display: SlideStyle }}
            key={key}
          >
            {" "}
            <img src={image} alt="image" loading="lazy" />
          </div>
        );
      })}
      <FontAwesomeIcon
        icon={faChevronLeft}
        className="prev"
        title="Previous"
        onClick={handlePrev}
      />
      <FontAwesomeIcon
        icon={faChevronRight}
        className="next"
        title="Next"
        onClick={handleNext}
      />
    </div>
  );
};

export default function Photo() {
  return (
    <section className="photo">
      <div className="photo-title">Lorem Hotel Photos</div>
      <div className="photo-desc">
        Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
        enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
        exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit
      </div>
      <ImageSlider />
    </section>
  );
}
