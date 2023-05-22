import selfie from "../../assets/selfie.png";
import Image from "next/image";
import Navbar from "../navigation/Navbar";
import NavigationArrow from "./NavigationArrow";

export default function Heading() {
  return (
    <section>
      <Navbar />
      <div className="text-center sm:p-5 select-none">
        <h1 className="md:text-7xl bg-gradient-to-b from-cyan-500 to-teal-600 bg-clip-text text-transparent fade-in-top-5">David Bell</h1>
        <h2 className="text-3xl py-2 text-slate-600 fade-in-top-6">Frontend Developer.</h2>
      </div>
      <div className="fade-in-top-img mt-20 m-auto select-none w-60 md:w-96">
        <Image src={selfie} alt="selfie image" />
      </div>
      <NavigationArrow />
    </section>
  );
}
