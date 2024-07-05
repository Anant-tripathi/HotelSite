import "./header.css";
import { useState, useEffect } from "react";

export default function Header() {
  const [headerClass, setHeaderClass] = useState("");
  const [hamMenu, setHamMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      setHeaderClass(scrollPosition >= 200 ? "scrolled-header" : "");
    };

    window.addEventListener("scroll", handleScroll);

    const handleResize = () => {
      const isSmall = window.innerWidth <= 768;
      setHamMenu(isSmall);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMenuToggle = () => {
    setHamMenu(!hamMenu);
  };
  return (
    <header
      id="header"
      className={`header ${hamMenu ? "active" : ""} ${headerClass}`}
    >
      <h1 className="header__title">Hotel Lorem</h1>
      <nav className={`header__nav ${hamMenu ? "active" : ""}`}>
        <ul className={`header__list ${hamMenu ? "active" : ""}`}>
          <li className="header__item">
            <a href="#hero" className="header__link">
              Home
            </a>
          </li>
          <li className="header__item">
            <a href="#RoomOpts" className="header__link">
              Room Options
            </a>
          </li>
          <li className="header__item">
            <a href="#RestrauntMenu" className="header__link">
              Restraunt Menu
            </a>
          </li>
          <li className="header__item">
            <a href="#Testimonials" className="header__link">
              Testimonials
            </a>
          </li>
          <li className="header__item">
            <a href="#Events" className="header__link">
              Events
            </a>
          </li>
        </ul>
        <div
          className={`header__ham-menu ${hamMenu ? "active" : ""}`}
          onClick={handleMenuToggle}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
}
