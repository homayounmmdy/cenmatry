"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  return (
    <button
      onClick={toggleDarkMode}
      className={`p-2 rounded-full transition-all cursor-pointer duration-300 ${darkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-200 hover:bg-gray-300"}`}
    >
      {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
};

export default ThemeToggle;
