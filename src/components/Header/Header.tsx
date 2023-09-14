import BurgerMenu from "@/components/NavBar/BurgerMenu";
import Navbar from "@/components/NavBar/Navbar";
import HeadingChanger from "@/components/Header/HeadingChanger";
import NavArrow from "@/components/Header/NavArrow";
import Boxes from "@/components/FloatingBoxes/Boxes";

export default function Header() {
  return (
    <header>
      <div className="min-h-screen flex flex-col justify-start md:justify-center">
        <BurgerMenu />
        <div className="mt-52 md:mt-24 text-center select-none">
          <h1 data-testid="title" className="text-7xl md:text-9xl fade-in-top header-gradient bg-clip-text text-transparent">
            David Bell
          </h1>
          <HeadingChanger />
          <Navbar />
          <NavArrow />
        </div>
      </div>
      <Boxes />
    </header>
  );
}
