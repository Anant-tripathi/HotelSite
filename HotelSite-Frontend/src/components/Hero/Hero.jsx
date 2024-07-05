import { useRef, useEffect } from "react";
import "./hero.css";
export default function Hero() {
  const heroRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            heroRef.current.style.backgroundImage = `url("/assets/Hero1.webp")`;
          }
        });
      },
      { threshold: 0.5 },
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, []);

  return <section ref={heroRef} className="hero" id="hero"></section>;
}
