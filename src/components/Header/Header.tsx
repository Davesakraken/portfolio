import selfie from "../../assets/selfie.png";
import Image from "next/image";
import Navbar from "../NavBar/Navbar";
import NavigationArrow from "./NavArrow";
import SubTitleChanger from "./HeadingChanger";

export default function Heading() {
  return (
    <header className="grid grid-cols-1 grid-rows-1">
      <div className="h-[100svh]">
        <Navbar />
        <div className="text-center select-none xl:mt-5">
          <h1 className="fade-in-top header-gradient md:text-7xl bg-clip-text text-transparent">David Bell</h1>
          <SubTitleChanger />
        </div>
        <div
          className="lg:w-96 
                    md:w-80 
                    w-64 l
                    g:mt-20 
                    md:mt-16 
                    mt-14 
                    fade-in-top 
                    m-auto 
                    select-none"
        >
          <Image src={selfie} alt="selfie image" />
        </div>
        <a>
          <NavigationArrow />
        </a>
      </div>
    </header>
  );
}
