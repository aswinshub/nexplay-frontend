import React from "react";
import Navbar from "../components/Navbar";
import logo from "../assets/images/logo.png";

const TournamentRegistration = () => {
  return (
    <div className="font-sans bg-[#0a0f1a] text-white min-h-screen">
      <Navbar />

      {/* Tournament Registration content */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Tournament Registration</h1>
        {/* Add your registration form or content here */}
      </div>

      {/* Footer */}
      <footer className="bg-[#0a0f1a] py-8 md:py-12 px-4 md:px-10 mt-10 text-white">
        <div className="max-w-7xl mx-auto">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row justify-between items-start border-b border-gray-600 pb-6">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <img src={logo} alt="Logo" className="h-8 w-auto" />
              <span className="text-white text-2xl font-light">NexPlay</span>
            </div>
            <ul className="flex flex-wrap gap-4 md:gap-8 text-sm">
              <li><a href="/about">About</a></li>
              <li><a href="/matches">Matches</a></li>
              <li><a href="/press">Press</a></li>
              <li><a href="/customer-care">Customer Care</a></li>
              <li><a href="/services">Services</a></li>
            </ul>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-xs mt-4 md:mt-6">
            <p className="mb-2 md:mb-0">
              <a href="/terms">Terms & Conditions</a> |{" "}
              <a href="/privacy">Privacy Policy</a> |
              <a href="/accessibility"> Accessibility</a> |{" "}
              <a href="/legal">Legal</a>
            </p>
            <p>NexPlay &copy; 2025. All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TournamentRegistration; 