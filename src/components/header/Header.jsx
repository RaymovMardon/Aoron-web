import { useState } from "react";
import {Link} from "react-router-dom"
import { FaShoppingBag } from "react-icons/fa";
import logo from "../../../public/logoAoron.png"
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
const Header = () => {
  const [lang, setLang] = useState("EN");
  const [bars, setBars] = useState(false);

  return (
    <>
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
        
        <NavLink to="/" className="text-gray-800 hover:text-gray-400">
          Home
    
        </NavLink>
        <NavLink to="/catalog" className="text-gray-800 hover:text-gray-400">
          Catalog
       
        </NavLink>
        <NavLink to="/about" className="text-gray-800 hover:text-gray-400">
          About
      
       
        </NavLink>
        <NavLink to="/cart" className="text-gray-800 hover:text-gray-400">
          Cart
        </NavLink>
        <NavLink to="/contact" className="text-gray-800 hover:text-gray-400">
          Contact
        </NavLink>
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
        <div className="ml-2 cursor-pointer text-2xl md:hidden" onClick={()=>{setBars(!bars)}}>
       {bars?<IoMdClose/>:<FaBars/>} 
        </div>
      </div>
      </div>
    </header>
    {bars?
    <div className="fixed shadow-lg z-50 w-full mt-4 md:hidden">
<nav className="bg-white mx-2.5 p-2.5 rounded-lg flex-col flex gap-3">
        
        <NavLink onClick={()=>{setBars(!bars)}} to="/" className="text-xl text-gray-800 hover:text-gray-400">
          Home
    
        </NavLink>
        <NavLink onClick={()=>{setBars(!bars)}} to="/catalog" className="text-xl text-gray-800 hover:text-gray-400">
          Catalog
       
        </NavLink>
        <NavLink onClick={()=>{setBars(!bars)}} to="/about" className="text-xl text-gray-800 hover:text-gray-400">
          About
      
       
        </NavLink>
        <NavLink onClick={()=>{setBars(!bars)}} to="/cart" className="text-xl text-gray-800 hover:text-gray-400">
          Cart
        </NavLink>
        <NavLink onClick={()=>{setBars(!bars)}} to="/contact" className="text-xl text-gray-800 hover:text-gray-400">
          Contact
        </NavLink>
      </nav>

    </div>:""}
    </>
  );
};

export default Header;
