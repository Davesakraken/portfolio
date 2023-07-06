import { TypeAnimation } from "react-type-animation";

export default function SubHeadingAnimation() {
  return (
    <div className="text-4xl py-2 text-slate-300 fade-in-top animation-delay-800">
      <TypeAnimation
        sequence={["Frontend Developer", 3000, "Tea Enthusiast", 3000, "Stream Producer", 3000, "Flexbox Enjoyer", 3000]}
        wrapper="span"
        speed={45}
        repeat={Infinity}
      />
    </div>
  );
}
