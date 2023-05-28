import { BsArrowDownShort } from "react-icons/bs";
import { useState, useEffect } from "react";

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
  return (
    <div id="scroll-arrow" className={`nav-icon ${isScrolled ? "fade-out" : "fade-in"}`}>
      <div className="flex justify-center text-4xl mt-20">
        <BsArrowDownShort className="relative pulse-fwd fade-in" />
      </div>
    </div>
  );
}
