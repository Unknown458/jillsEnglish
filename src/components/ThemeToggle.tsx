import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark" ||
        (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
    return false;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="flex h-10 w-10 items-center justify-center rounded-full glass-card !p-0 shadow-sm transition-all duration-300 hover:scale-110 hover:shadow-md"
      aria-label="Toggle theme"
    >
      {dark ? (
        <Sun className="h-4 w-4 text-amber-400 transition-transform duration-300" />
      ) : (
        <Moon className="h-4 w-4 text-muted-foreground transition-transform duration-300" />
      )}
    </button>
  );
};

export default ThemeToggle;
