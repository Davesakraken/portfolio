import { BsGithub, BsLinkedin, BsTwitch } from "react-icons/bs";
import ThemeChanger from "@/components/navBar/ThemeChanger";

export default function NavBar() {
  return (
    <nav className="hidden mt-12 md:block">
      <ul className="flex justify-center text-4xl gap-16 text-slate-600">
        <li>
          <a href="https://www.linkedin.com/in/david-bell-39bb03265/" target="_blank" rel="noreferrer">
            <BsLinkedin className="cursor-pointer" />
          </a>
        </li>
        <li>
          <a href="https://github.com/Davesakraken" target="_blank" rel="noreferrer">
            <BsGithub className="cursor-pointer" />
          </a>
        </li>
        <li>
          <a href="https://twitch.tv/davesakraken" target="_blank" rel="noreferrer">
            <BsTwitch className="cursor-pointer" />
          </a>
        </li>
        <li>
          <ThemeChanger />
        </li>
      </ul>
    </nav>
  );
}
