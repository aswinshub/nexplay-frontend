import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import logo from "../assets/images/logo.png";

const TourReg = () => {
  const navigate = useNavigate();
  const [players, setPlayers] = useState([{ id: 1, name: "", phone: "" }]);
  const [activeTab, setActiveTab] = useState("team");
  const [sport, setSport] = useState("");

  const addPlayer = () => {
    setPlayers([...players, { id: Date.now(), name: "", phone: "" }]);
  };

  const removePlayer = (id) => {
    setPlayers(players.filter(player => player.id !== id));
  };

  return (
    <div className="font-sans bg-[#0a0f1a] text-white min-h-screen">
      <Navbar />

      {/* Registration Section */}
      <section className="container mx-auto text-left py-24 px-4 md:px-12 max-w-4xl">
        <h2 className="text-3xl font-semibold mb-6 text-center">Registration</h2>

        <div className="flex justify-center space-x-2 border-b border-gray-600 mb-6">
          <button
            className={`px-6 py-2 rounded-t-lg font-semibold ${activeTab === "team" ? "bg-[#fca311] text-black" : "bg-[#1b263b] text-gray-400"}`}
            onClick={() => setActiveTab("team")}
          >
            • Team Registration
          </button>
          <button
            className={`px-6 py-2 rounded-t-lg font-semibold ${activeTab === "tournament" ? "bg-[#fca311] text-black" : "bg-[#1b263b] text-gray-400"}`}
            onClick={() => setActiveTab("tournament")}
          >
            • Tournament Registration
          </button>
        </div>

        {activeTab === "team" ? (
          <>
            <div className="bg-[#1b263b] p-8 rounded-lg w-full mb-16">
              {/* Team Details Form */}
              <h3 className="text-lg font-semibold mb-4">Team Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="🏆 Team Name" className="p-4 bg-[#0a0f1a] rounded w-full text-gray-300" />
                <input type="text" placeholder="👤 Manager" className="p-4 bg-[#0a0f1a] rounded w-full text-gray-300" />
                <input type="email" placeholder="✉️ Email" className="p-4 bg-[#0a0f1a] rounded w-full text-gray-300" />
                <input type="text" placeholder="📞 Phone No" className="p-4 bg-[#0a0f1a] rounded w-full text-gray-300" />
              </div>
              <input type="text" placeholder="🏅 Sports Item" className="p-4 bg-[#0a0f1a] rounded w-full mt-6 text-gray-300" />
              <button className="bg-[#d90429] text-white px-6 py-3 rounded mt-20 float-right">Register</button>
            </div>

            <div className="bg-[#1b263b] p-8 rounded-lg w-full mt-32">
              {/* Players Details Form */}
              <h3 className="text-lg font-semibold mb-4">Players Details</h3>
              {players.map((player) => (
                <div key={player.id} className="flex flex-col md:flex-row items-center gap-4 mb-4">
                  <input type="text" placeholder="👤 Name" className="p-4 bg-[#0a0f1a] rounded w-full text-gray-300" />
                  <input type="text" placeholder="📞 Phone No" className="p-4 bg-[#0a0f1a] rounded w-full text-gray-300" />
                  <button
                    className="ml-4 text-white bg-500 rounded-full w-8 h-8 flex items-center justify-center"
                    onClick={() => removePlayer(player.id)}
                  >
                    ✖
                  </button>
                </div>
              ))}
              <button onClick={addPlayer} className="border border-gray-400 text-gray-300 px-6 py-2 rounded mt-4 flex items-center">
                + Add Player
              </button>
            </div>
          </>
        ) : (
          <div className="bg-[#1b263b] p-8 rounded-lg w-full mb-16">
            {/* Tournament Details Form */}
            <h3 className="text-lg font-semibold mb-4">Tournament Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="🏆 Tournament Name" className="p-4 bg-[#0a0f1a] rounded w-full text-gray-300" />
              <input type="text" placeholder="👤 Organiser" className="p-4 bg-[#0a0f1a] rounded w-full text-gray-300" />
              <input type="email" placeholder="✉️ Email" className="p-4 bg-[#0a0f1a] rounded w-full text-gray-300" />
              <input type="text" placeholder="📞 Phone No" className="p-4 bg-[#0a0f1a] rounded w-full text-gray-300" />
            </div>
            <select 
              className="p-4 bg-[#0a0f1a] rounded w-full mt-6 text-gray-300" 
              value={sport} 
              onChange={(e) => setSport(e.target.value)}
            >
              <option value="">🏅 Select Sports Item</option>
              <option value="Football">Football</option>
              <option value="Cricket">Cricket</option>
              <option value="Badminton">Badminton</option>
              <option value="Hockey">Hockey</option>
              <option value="Basketball">Basketball</option>
              <option value="Others">Others</option>
            </select>
            <button className="bg-[#d90429] text-white px-6 py-3 rounded mt-20 float-right">Register</button>
          </div>
        )}
      </section>

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

export default TourReg;
