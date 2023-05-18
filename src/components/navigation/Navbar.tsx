import { BsGithub, BsLinkedin, BsTwitch } from "react-icons/bs";
import ThemeChanger from "./ThemeChanger";

export default function Navbar() {
  return (
    <nav className="py-5">
      <ul className="flex justify-center lg:justify-end text-4xl gap-12 pt-5 xl:pr-10 text-gray-600">
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
