import "./footer.css";
import { useState,useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faHashtag,
  faUser,
} from "@fortawesome/free-solid-svg-icons";


export default function Footer() {
  const footerRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            footerRef.current.style.backgroundImage = `url("/assets/footer-background.webp")`;
          }
        });
      },
      { threshold: 0.5 },
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);

  const [clientEmail, setClientEmail] = useState("");
  const handleScrollToForm = () => {
    const welForm = document.getElementById("welcome-form");
    welForm.scrollIntoView({ behaviour: "smooth" });
    welForm.style.transition = "all 0.3s";
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted is : ", clientEmail);
    setClientEmail("");
  };
  return (
    <section className="footer" ref={footerRef}>
      <div className="footer-cta">
        <h1 className="footer-cta-msg">
          A dream experience awaits you. Give us the Change, NOW!
        </h1>
        <button className="footer-cta-button" onClick={handleScrollToForm}>
          Reserve Rooms
        </button>
      </div>
      <div className="footer-body">
        <div className="footer-details">
          <div className="footer-details-col">
            <div className="footer-details-item">About Us</div>
            <div className="footer-details-item">Terms & conditions</div>
            <div className="footer-details-item">Privacy Policy</div>
            <div className="footer-details-item">Rooms</div>
          </div>
          <div className="footer-details-col">
            <div className="footer-details-item">The Rooms & Suits</div>
            <div className="footer-details-item">About Us</div>
            <div className="footer-details-item">Contact Us</div>
            <div className="footer-details-item">Restraunt</div>
          </div>
          <div className="footer-details-col">
            <div id="address">
              <p>
                <b>Address:</b>
              </p>
              <p>123 Some street lane 1, city, state, india 10293</p>
            </div>
            <div id="contact">
              <p>
                <b>Contact:</b>
              </p>
              <p>1234567890</p>
            </div>
            <div id="email">
              <p>
                <b>E-mail:</b>
              </p>
              <p>someemail@email.com</p>
            </div>
          </div>
          <div className="footer-details-col">
            <p>Sign up for newsletter</p>
            <form className="footer-details-col-inp" onSubmit={handleSubmit}>
              <input
                type="text"
                value={clientEmail}
                onChange={(e) => setClientEmail(e.target.value)}
              />
              <button>
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  className="submit-btn-icon"
                />
              </button>
            </form>
          </div>
        </div>
        <div className="footer-copyAndSM">
          <div id="footer-copyrightInfo">
            Copyright C Anant Tripathi | Made with love using React
          </div>
          <div id="footer-SM">
            <FontAwesomeIcon icon={faHashtag} />
            <FontAwesomeIcon icon={faPaperPlane} />
            <FontAwesomeIcon icon={faUser} />
          </div>
        </div>
      </div>
    </section>
  );
}
