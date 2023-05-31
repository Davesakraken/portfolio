import { BsArrowDownShort } from "react-icons/bs";
import { useState, useEffect, useRef } from "react";

export default function NavigationArrow() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // THIS NEEDS LOOKING AT vv
  const arrow = useRef(null);
  // THIS NEEDS LOOKING AT vv
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div
      // THIS NEEDS LOOKING AT vv
      onClick={(arrow) => {
        scrollToSection;
      }}
      id="scroll-arrow"
      className={`nav-icon ${isScrolled ? "fade-out" : "fade-in"}`}
    >
      <div className="flex justify-center text-4xl mt-20">
        <BsArrowDownShort className="relative pulse-fwd fade-in" />
      </div>
    </div>
  );
}
