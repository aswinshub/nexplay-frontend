import React from "react";

import logo from "../assets/images/logo.png"
import heroimg from "../assets/images/heroimage.png"
import cricketimg from "../assets/images/cricket.png"
import footballimg from "../assets/images/football.png"
import badmintonimg from "../assets/images/badminton.png"

const Home = () => {
  return (
    <div className="font-sans bg-[#0a0f1a] text-white min-h-screen">
      <nav className="flex justify-between items-center px-6 py-10 bg-[#0a0f1a] relative">
      {/* Logo and Brand Name */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="h-8 w-auto" />
        <span className="text-white text-2xl font-light align-middle">NexPlay</span>
      </div>
      
      {/* Centered Button */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <button className="border border-white text-white px-6 py-2 rounded-full bg-transparent text-sm font-light">
          Tournament | Team Registration
        </button>
      </div>
      
      {/* Login Button */}
      <div>
        <button className="bg-[#d90429] text-white px-6 py-2 rounded-md text-sm font-light">
          Login
        </button>
      </div>
    </nav>

    <header
      className="text-center py-40 px-6 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${heroimg})` }}
    >
      <div className="absolute inset-0 bg-[#0a0f1a] opacity-60"></div> {/* Dark Overlay */}
      <div className="relative z-10">
        <h1 className="text-5xl font-semibold text-white leading-snug">
          Change through <span className="text-[#fca311]">Sports</span> Live{" "}
          <span className="text-[#fca311]">India’s</span> Spirit!
        </h1>
        <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
          Emphasize how sports empower individuals to break barriers, push limits, and unlock hidden talents.
          Invite visitors to join the journey of self-discovery and growth.
        </p>
        <button className="mt-8 border border-[#fca311] text-[#fca311] px-6 py-3 rounded-md font-medium hover:bg-[#fca311] hover:text-black transition-all duration-300">
          Book Tournaments
        </button>
      </div>
    </header>


    <section className="text-center py-20 px-8 bg-[#0a0f1a]">
      {/* Heading */}
      <h2 className="text-3xl font-semibold text-white mb-20">
        Book Your Tournaments Now
      </h2>

      {/* Card Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center max-w-6xl mx-auto">
        <TournamentCard
          title="KERALA FOOTBALL FEDERATION , Series Kannur vs Kozhikod , Kochi"
          imgSrc={footballimg}
          category="Football"
          date="January 23 | 7 PM Onwards"
          location="JNL Stadium, Kochi"
          price="₹ 200 Onwards"
        />
        <TournamentCard
          title="KERALA FOOTBALL FEDERATION , Series Kannur vs Kozhikod , Kochi"
          imgSrc={cricketimg}
          category="Cricket"
          date="January 23 | 7 PM Onwards"
          location="JNL Stadium, Kochi"
          price="₹ 200 Onwards"
        />
        <TournamentCard
          title="KERALA FOOTBALL FEDERATION , Series Kannur vs Kozhikod , Kochi"
          imgSrc={badmintonimg}
          category="Badminton"
          date="January 23 | 7 PM Onwards"
          location="JNL Stadium, Kochi"
          price="₹ 200 Onwards"
        />
      </div>
    </section>


    <footer className="bg-[#0a0f1a] py-12 px-10 mt-10 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex justify-between items-start border-b border-gray-600 pb-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="h-8 w-auto" />
            <span className="text-white text-2xl font-light">NexPlay</span>
          </div>
          <ul className="flex gap-8 text-sm">
            <li><a href="/about">About</a></li>
            <li><a href="/matches">Matches</a></li>
            <li><a href="/press">Press</a></li>
            <li><a href="/customer-care">Customer Care</a></li>
            <li><a href="/services">Services</a></li>
          </ul>
        </div>

        {/* Bottom Section */}
        <div className="flex justify-between items-center text-gray-400 text-xs mt-6">
          <p>
            <a href="/terms">Terms & Conditions</a> | <a href="/privacy">Privacy Policy</a> |
            <a href="/accessibility"> Accessibility</a> | <a href="/legal">Legal</a>
          </p>
          <p>NexPlay &copy; 2025. All rights reserved</p>
        </div>
      </div>
    </footer>


    </div>
  );
};

const TournamentCard = ({ title, imgSrc, category, date, location, price }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden w-80">
      {/* Image */}
      <img src={imgSrc} alt={category} className="w-full h-48 object-cover" />

      {/* Card Content */}
      <div className="p-5 text-left">
        <h3 className="text-md font-bold text-black">{title}</h3>

        {/* Category */}
        <div className="flex items-center text-gray-600 text-sm mt-2">
          <span>⚽ {category}</span>
        </div>

        {/* Date & Location */}
        <div className="flex items-center text-gray-600 text-sm mt-2">
          <span>📅 {date}</span>
        </div>
        <div className="flex items-center text-gray-600 text-sm mt-1">
          <span>📍 {location}</span>
        </div>

        {/* Price & Book Button */}
        <div className="flex justify-between items-center mt-4">
          <p className="text-black font-bold">{price}</p>
          <button className="bg-[#d90429] text-white px-4 py-2 rounded-md text-sm font-medium">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};



export default Home;
