import { BsGithub, BsLinkedin, BsTwitch } from "react-icons/bs";
import ThemeChanger from "./ThemeChanger";

export default function IconMenu() {
  return (
    <nav className="hidden mt-8 mr-5 md:block">
      <ul className="mt-5 mr-3 flex justify-end text-4xl gap-12 text-slate-600">
        <li>
          <a href="https://www.linkedin.com/in/david-bell-39bb03265/" target="_blank">
            <BsLinkedin className="cursor-pointer" />
          </a>
        </li>
        <li>
          <a href="https://github.com/Davesakraken" target="_blank">
            <BsGithub className="cursor-pointer" />
          </a>
        </li>
        <li>
          <a href="https://twitch.tv/davesakraken" target="_blank">
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
