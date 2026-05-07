"use client"
import { Skull } from "lucide-react";
import Link from "next/link";
import { useTheme } from "../context/ThemeContext";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const { darkMode } = useTheme();

  return (
    <header
      className={`sticky top-0 z-20 backdrop-blur-md border-b ${darkMode ? "bg-gray-950/80 border-gray-800" : "bg-gray-100/80 border-gray-300"}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <Skull
            className={`w-8 h-8 ${darkMode ? "text-gray-400" : "text-gray-600"}`}
          />
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Cenmatry</h1>
            <p
              className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-600"}`}
            >
              Digital graveyard of abandoned projects
            </p>
          </div>
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
