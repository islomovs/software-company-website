import React from "react";

import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="flex flex-row justify-between px-6 py-3 h-20 shadow-lg">
      <div className="center-items justify-center">
        <img className="w-[30px] h-[22px]" src={logo} alt="logo" />
        <h3 className="text-2xl font-inspiration">Ik developers</h3>
      </div>
      <ul className="center-items space-x-12">
        <li className="text-base font-medium text-[#4A5568] cursor-pointer">
          About Us
        </li>
        <li className="text-base font-medium text-[#4A5568] cursor-pointer">
          Services
        </li>
        <li className="text-base font-medium text-[#4A5568]">Case Studies</li>
        <li className="text-base font-medium text-[#4A5568]">Blog</li>
        <li className="text-base font-medium text-[#4A5568]">How it Works</li>
        <li className="text-base font-medium text-[#4A5568]">Hire</li>
      </ul>
      <button className="center-items bg-gradient-to-bl from-[#6675F7] to-[#57007B] py-[14px] px-[25px] text-[14px] text-white font-semibold rounded-[5px]">
        Contact us
      </button>
    </nav>
  );
}
