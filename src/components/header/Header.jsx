import { useState } from "react";
import {Link} from "react-router-dom"
import { FaShoppingBag } from "react-icons/fa";
import logo from "../../../public/logoAoron.png"
const Header = () => {
  const [lang, setLang] = useState("EN");

  return (
    <header className="fixed border-b border-gray-200 top-0 left-0 right-0 z-50 transition-all duration-300 bg-white">
      <div className="container py-4 mx-auto flex justify-between items-center">
      {/* Logo */}
      <Link to="/">
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="h-10" />
      </div>
      </Link>
      {/* Navigation */}
      <nav className="space-x-6 hidden md:flex">
        <a href="/" className="text-gray-800 text-lg hover:text-gray-500">
          Home
        </a>
        <a href="/catalog" className="text-gray-800 text-lg hover:text-gray-500">
          Catalog
        </a>
        <a href="/about" className="text-gray-800 text-lg hover:text-gray-500">
          About
        </a>
        <a href="/news" className="text-gray-800 text-lg hover:text-gray-500">
          News
        </a>
        <a href="/contact" className="text-gray-800 text-lg hover:text-gray-500">
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
                  ? "bg-black cursor-pointer text-white"
                  : "text-gray-800 cursor-pointer hover:bg-gray-200"
              }`}
            >
              {lng}
            </button>
          ))}
        </div>

        {/* Cart */}
        <div className="relative">
          <FaShoppingBag className="text-2xl text-gray-800 cursor-pointer" />
          <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            1
          </span>
        </div>
      </div>
      </div>
    </header>
  );
};

export default Header;
