import "./testimonials.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import user1 from "/assets/user1.webp";
import user2 from "/assets/user2.jpg";
import user3 from "/assets/user3.png";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      userImageURL: user1,
      userTestimonial:
        "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
      userName: "John Doe",
    },
    {
      id: 2,
      userImageURL: user2,
      userTestimonial:
        "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
      userName: "John Does",
    },
    {
      id: 3,
      userImageURL: user3,
      userTestimonial:
        "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
      userName: "John Does",
    },
  ];

  const [currTestimonial, setCurrTestimonial] = useState(1);

  const handlePrev = () => {
    currTestimonial <= 1
      ? setCurrTestimonial(3)
      : setCurrTestimonial(currTestimonial - 1);
  };
  const handleNext = () => {
    currTestimonial >= 3
      ? setCurrTestimonial(1)
      : setCurrTestimonial(currTestimonial + 1);
  };

  return (
    <section id="Testimonials" className="testimonials">
      <h1 className="testimonials-heading">What people say about us?</h1>
      <div className="testimonial-container">
        {testimonials.map((testimonial, key) => (
          <div
            key={key}
            className={`userTestimonial ${currTestimonial === testimonial.id ? "active" : ""}`}
          >
            <div className="testimonial-container-userImg">
              <img src={testimonial.userImageURL} alt="profile-image" />
            </div>
            <div className="userTestimonial-subContainer">
              <div className="testimonial-container-userTestimonial">
                {testimonial.userTestimonial}
              </div>
              <div className="testimonial-container-userDesc">
                <p>Says</p>
                {testimonial.userName}
              </div>
            </div>
          </div>
        ))}
        <div className="dots-container">
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="prev"
            title="Previous"
            onClick={handlePrev}
          />
          {testimonials.map((testimonial, key) => (
            <div
              key={key}
              className={`dot ${currTestimonial === testimonial.id ? "active" : ""}`}
            ></div>
          ))}
          <FontAwesomeIcon
            icon={faChevronRight}
            className="next"
            title="Next"
            onClick={handleNext}
          />
        </div>
      </div>
    </section>
  );
}
