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
        <li className="nav-item">About Us</li>
        <li className="nav-item">Services </li>
        <li className="nav-item">Case Studies</li>
        <li className="nav-item">Blog</li>
        <li>How it Works</li>
        <li>Hire</li>
      </ul>
      <button className="center-items bg-gradient-to-bl from-[#6675F7] to-[#57007B] px-[14px] py-[25px] text-[14px] text-white font-semibold rounded-[5px]">
        Contact us
      </button>
    </nav>
  );
}
