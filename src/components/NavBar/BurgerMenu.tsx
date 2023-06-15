import { useState } from "react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import styles from "./BurgerMenu.module.css";
import ThemeChanger from "./ThemeChanger";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const Icon = isOpen ? RxCross2 : RxHamburgerMenu;

  return (
    <nav className="m-auto p-6 lg:pr-5 md:hidden text-3xl flex flex-col items-end">
      <Icon className="cursor-pointer text-slate-400" onClick={handleMenuToggle} />
      <ul className={`${styles.slide} ${isOpen ? styles.slideOpen : ""} flex flex-col justify-center items-center gap-12 w-full`}>
        <ThemeChanger />
        <li>
          <a href="https://www.linkedin.com/in/david-bell-39bb03265/">Linkedin</a>
        </li>
        <li>
          <a href="https://github.com/Davesakraken">GitHub</a>
        </li>
        <li className="mb-24">
          <a href="https://github.com/Davesakraken">My Blog</a>
        </li>
      </ul>
    </nav>
  );
}
