import selfie from "../../assets/selfie.png";
import Image from "next/image";
import Navbar from "../NavBar/Navbar";
import NavigationArrow from "./NavigationArrow";

export default function Heading() {
  return (
    <header>
      <Navbar />
      <div className="text-center select-none xl:mt-5">
        <h1 className="fade-in-top header-gradient md:text-7xl bg-clip-text text-transparent">David Bell</h1>
        <h2 className="text-3xl py-2 text-slate-600 fade-in-top animation-delay-800">Frontend Developer.</h2>
      </div>
      <div className="lg:w-96 md:w-80 w-64 lg:mt-20 md:mt-16 mt-14 fade-in-top m-auto select-none ">
        <Image src={selfie} alt="selfie image" />
      </div>
      <a href="#scroll-arrow">
        <NavigationArrow />
      </a>
    </header>
  );
}
