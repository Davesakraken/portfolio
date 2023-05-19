import React, { useEffect } from "react";
import { useTheme } from "next-themes";

const Container = ({ children }) => {
  const { theme, resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    // Persist the theme preference on mount
    if (theme === "system" && resolvedTheme === "light") {
      setTheme("light");
    }
  }, [theme, resolvedTheme, setTheme]);

  const containerStyles = {
    backgroundColor: resolvedTheme === "dark" ? "#252b32" : "#f5f5f5",
    color: resolvedTheme === "dark" ? "#fff" : "#333",
    padding: "0.5rem",
    borderRadius: "8px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  };

  return <div style={containerStyles}>{children}</div>;
};

export default Container;
