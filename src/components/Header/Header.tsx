import Navbar from "../NavBar/Navbar";
import NavArrow from "./NavArrow";
import HeadingChanger from "./HeadingChanger";
import BurgerMenu from "../NavBar/BurgerMenu";
import Boxes from "../FloatingBoxes/Boxes";

export default function Heading() {
  return (
    <header>
      <div className="min-h-screen flex flex-col justify-start md:justify-center">
        <BurgerMenu />
        <div className="mt-60 md:mt-24 text-center select-none ">
          <h1 className="text-7xl md:text-9xl fade-in-top header-gradient bg-clip-text text-transparent">David Bell</h1>
          <HeadingChanger />
          <Navbar />
          <NavArrow />
        </div>
      </div>
      <Boxes />
    </header>
  );
}
