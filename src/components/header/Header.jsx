import { useState } from "react";
import { FaShoppingBag } from "react-icons/fa";

const Header = () => {
  const [lang, setLang] = useState("EN");

  return (
    <header className="w-full border-b border-gray-200 px-6 py-4 flex justify-between items-center bg-white">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="Logo" className="h-10" />
        <span className="tracking-widest text-sm font-light">AORON</span>
      </div>

      {/* Navigation */}
      <nav className="space-x-6 hidden md:flex">
        <a href="#" className="text-gray-800 hover:text-black">
          Home
        </a>
        <a href="#" className="text-gray-800 hover:text-black">
          Catalog
        </a>
        <a href="/about" className="text-gray-800 hover:text-black">
          About
        </a>
        <a href="#" className="text-gray-800 hover:text-black">
          News
        </a>
        <a href="#" className="text-gray-800 hover:text-black">
          Contact
        </a>
      </nav>

      {/* Language & Cart */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          {["EN", "RU", "DE"].map((lng) => (
            <button
              key={lng}
              onClick={() => setLang(lng)}
              className={`px-2 py-1 text-sm rounded ${
                lang === lng
                  ? "bg-black text-white"
                  : "text-gray-800 hover:text-black"
              }`}
            >
              {lng}
            </button>
          ))}
        </div>

        {/* Cart */}
        <div className="relative">
          <FaShoppingBag className="text-2xl text-gray-800" />
          <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            1
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
