import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div className="font-sans bg-[#0a0f1a] text-white min-h-screen flex flex-col items-center">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-8 bg-[#001A33] w-full max-w-full">
      <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate("/")}> 
          <img src={logo} alt="NexPlay Logo" className="h-8" />
          <span className="text-white text-xl font-semibold">NexPlay</span>
        </div>
        <div className="flex justify-center">
          <button className="border border-white text-white px-6 py-2 rounded-full bg-transparent text-sm font-medium">
            Tournament | Team Registration
          </button>
        </div>
        <div>
          <button className="bg-[#d90429] text-white px-6 py-2 rounded-lg text-sm font-medium">Login</button>
        </div>
      </nav>

      {/* Registration Section */}
      <section className="text-left py-24 px-12 w-full max-w-4xl">
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
              <h3 className="text-lg font-semibold mb-4">Team Details</h3>
              <div className="grid grid-cols-2 gap-6">
                <input type="text" placeholder="🏆 Team Name" className="p-4 bg-[#0a0f1a] rounded w-full text-gray-300" />
                <input type="text" placeholder="👤 Manager" className="p-4 bg-[#0a0f1a] rounded w-full text-gray-300" />
                <input type="email" placeholder="✉️ Email" className="p-4 bg-[#0a0f1a] rounded w-full text-gray-300" />
                <input type="text" placeholder="📞 Phone No" className="p-4 bg-[#0a0f1a] rounded w-full text-gray-300" />
              </div>
              <input type="text" placeholder="🏅 Sports Item" className="p-4 bg-[#0a0f1a] rounded w-full mt-6 text-gray-300" />
              <button className="bg-[#d90429] text-white px-6 py-3 rounded mt-20 float-right">Register</button>
            </div>
            <div className="bg-[#1b263b] p-8 rounded-lg w-full mt-32">
              <h3 className="text-lg font-semibold mb-4">Players Details</h3>
              {players.map((player) => (
                <div key={player.id} className="flex items-center gap-4 mb-4 relative">
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
            <h3 className="text-lg font-semibold mb-4">Tournament Details</h3>
            <div className="grid grid-cols-2 gap-6">
              <input type="text" placeholder="🏆 Tournament Name" className="p-4 bg-[#0a0f1a] rounded w-full text-gray-300" />
              <input type="text" placeholder="👤 Organiser" className="p-4 bg-[#0a0f1a] rounded w-full text-gray-300" />
              <input type="email" placeholder="✉️ Email" className="p-4 bg-[#0a0f1a] rounded w-full text-gray-300" />
              <input type="text" placeholder="📞 Phone No" className="p-4 bg-[#0a0f1a] rounded w-full text-gray-300" />
            </div>
            <select className="p-4 bg-[#0a0f1a] rounded w-full mt-6 text-gray-300" value={sport} onChange={(e) => setSport(e.target.value)}>
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
      <footer className="bg-[#001A33] py-10 px-12 w-full flex flex-col text-white">
        <div className="flex justify-between w-full items-center px-8">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="NexPlay Logo" className="h-10" />
            <span className="text-xl font-semibold">NexPlay</span>
          </div>
          <ul className="flex gap-8 text-gray-300 text-sm justify-end w-auto">
            <li><a href="#">About</a></li>
            <li><a href="#">Matches</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Customer Care</a></li>
            <li><a href="#">Services</a></li>
          </ul>
        </div>
        <hr className="w-full border-gray-600 my-4" />
        <div className="flex justify-between w-full px-8 text-gray-400 text-xs">
          <p>Terms & Conditions | Privacy Policy | Accessibility | Legal</p>
          <p>&copy; 2025 NexPlay. All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default TourReg;
