import React, { useState } from "react";
import DisfuncionAppIcon from "./assets/disfuncionapp_icon.png";
import BarsMenuIcon from "./assets/bars_menu_icon.svg";

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    console.log("Toggle menu clicked"); // Debugging line
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="w-full px-4 py-6 flex justify-between items-center relative">
      <div className="flex items-center">
        <img src={DisfuncionAppIcon} className="w-9 mr-2 inline" alt="DisfuncionApp icon" />
        <h1 className="text-[#39FF14] text-2xl font-bold">DisfuncionApp</h1>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex">
        <ul className="flex gap-8">
          <li>
            <a href="#features" className="hover:text-[#39FF14]">
              Funcionalidades
            </a>
          </li>
          <li>
            <a href="#download" className="hover:text-[#39FF14]">
              Descargar
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button
          className="text-[#39FF14] p-2"  // Add padding and color
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <img src={BarsMenuIcon} alt="Menu" className="w-5" />
        </button>
      </div>

      {/* Mobile Menu - only shows when open */}
      {isMobileMenuOpen && (
        <nav className="absolute top-full left-0 w-full bg-zinc-900 p-4 md:hidden z-50"> {/* Added z-index */}
          <ul className="flex flex-col gap-4">
            <li>
              <a href="#features" className="hover:text-[#39FF14]" onClick={() => setMobileMenuOpen(false)}>
                Funcionalidades
              </a>
            </li>
            <li>
              <a href="#download" className="hover:text-[#39FF14]" onClick={() => setMobileMenuOpen(false)}>
                Descargar
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}