import React from "react";
import { Link } from "react-scroll";

import logo from "../assets/logo.png";

export default function Navbar() {
  const navItemStyle =
    "text-base font-medium text-[#4A5568] cursor-pointer hover:text-primary-default";

  return (
    <nav className="flex flex-row justify-between px-6 py-3 h-20 shadow-lg bg-white w-full">
      <div className="flex flex-row items-center justify-center">
        <img className="w-[30px] h-[22px]" src={logo} alt="logo" />
        <h3 className="text-2xl font-inspiration">Ik developers</h3>
      </div>
      <ul className="flex flex-row items-center space-x-12">
        <li className={navItemStyle}>
          <Link to="about-us" smooth={true} duration={1000}>
            About Us
          </Link>
        </li>
        <li className={navItemStyle}>
          <Link to="services" smooth={true} duration={1000}>
            Services
          </Link>
        </li>
        <li className={navItemStyle}>
          <Link to="case-studies" smooth={true} duration={1000}>
            Case Studies
          </Link>
        </li>
        <li className={navItemStyle}>
          <Link to="blog" smooth={true} duration={1000}>
            Blog
          </Link>
        </li>
        <li className={navItemStyle}>
          <Link to="dev-approach" smooth={true} duration={1000}>
            How it Works
          </Link>
        </li>
        <li className={navItemStyle}>
          <Link to="hire" smooth={true} duration={1000}>
            Hire
          </Link>
        </li>
      </ul>
      <button className="flex flex-row items-center bg-gradient-to-bl from-[#6675F7] to-[#57007B] py-[14px] px-[25px] text-[14px] text-white font-semibold rounded-[5px]">
        Contact us
      </button>
    </nav>
  );
}
