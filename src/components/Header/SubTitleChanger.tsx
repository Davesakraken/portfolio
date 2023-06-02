import { useState } from "react";

export default function SubTitleChanger() {
  const [count, setCount] = useState(0);
  const headingsArr = ["Frontend Developer", "Tea Enthusiast", "Spaniel Lover", "Skinfade Enjoyer", "Streaming Legend", "Flexbox Abuser"];

  const currentHeading = headingsArr[count];

  function handleTitleClick() {
    setCount((prevCount) => (prevCount + 1) % headingsArr.length);
  }

  return (
    <h2
      onClick={handleTitleClick}
      className="text-3xl py-2 text-slate-600 fade-in-top animation-delay-800 cursor-pointer inline-block hover:text-slate-700"
    >
      {currentHeading}
    </h2>
  );
}
