import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

function ThemeChanger() {
  const { theme, systemTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="hover:transform-scale-hover">
      {currentTheme === "dark" ? (
        <BsMoonStarsFill
          className="text-white cursor-pointer"
          onClick={() => {
            setTheme("light");
          }}
        ></BsMoonStarsFill>
      ) : (
        <BsSunFill
          className="text-slate-700 bg-white cursor-pointer"
          onClick={() => {
            setTheme("dark");
          }}
        ></BsSunFill>
      )}
    </div>
  );
}

export default ThemeChanger;
