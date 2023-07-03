import { TypeAnimation } from "react-type-animation";

export default function ExampleComponent() {
  return (
    <div className="text-4xl py-2 text-slate-300 fade-in-top animation-delay-800">
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "Frontend Developer",
          3000, // wait 1s before replacing "Mice" with "Hamsters"
          "Tea Enthusiast",
          3000,
          "Stream Producer",
          3000,
          "Flexbox Enjoyer",
          3000,
        ]}
        wrapper="span"
        speed={45}
        repeat={Infinity}
      />
    </div>
  );
}
