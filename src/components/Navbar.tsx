import { BsGithub, BsLinkedin, BsTwitch, BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { theme, systemTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

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
        <div>
          {currentTheme === "dark" ? (
            <BsMoonStarsFill
              className="text-white cursor-pointer"
              onClick={() => {
                setTheme("light");
              }}
            ></BsMoonStarsFill>
          ) : (
            <BsSunFill
              className="text-gray-800 bg-white cursor-pointer"
              onClick={() => {
                setTheme("dark");
              }}
            ></BsSunFill>
          )}
        </div>
      </ul>
    </nav>
  );
}
