import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex flex-col md:flex-row items-center px-4 md:px-6 py-6 md:py-10 bg-[#0a0f1a] relative">
      {/* Left Side - Logo */}
      <div className="flex items-center gap-2 md:w-1/4">
        <img src={logo} alt="Logo" className="h-8 w-auto" />
        <span className="text-white text-2xl font-light align-middle">
          NexPlay
        </span>
      </div>

      {/* Center - Tournament Registration Button */}
      <div className="hidden md:flex justify-center flex-1">
        <button
          onClick={() => navigate("/tournament-registration")}
          className="border border-gray-600 text-white px-6 py-1.5 rounded-full bg-transparent text-sm hover:border-white"
        >
          Tournament | Team Registration
        </button>
      </div>

      {/* Right Side - Login Button */}
      <div className="hidden md:flex justify-end md:w-1/4">
        <button className="bg-[#d90429] text-white px-6 py-1.5 rounded-md text-sm">
          Login
        </button>
      </div>

      {/* Mobile Hamburger Button */}
      <button 
        className="md:hidden text-white text-2xl absolute right-4 top-6"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <IoMdClose /> : <HiMenu />}
      </button>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } md:hidden flex-col absolute top-full left-0 right-0 bg-[#0a0f1a] border-t border-gray-800 py-4 px-4 shadow-lg z-50 w-full`}
      >
        <button
          onClick={() => navigate("/tournament-registration")}
          className="border border-gray-600 text-white px-4 py-2 rounded-full bg-transparent text-sm hover:border-white mb-3"
        >
          Tournament | Team Registration
        </button>
        
        <button className="bg-[#d90429] text-white px-4 py-2 rounded-md text-sm">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 