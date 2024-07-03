import React from "react";
import Marquee from "react-fast-marquee";

import SectionBreaker from "../components/SectionBreaker";
import Ellipse from "../components/Ellipse";
import NavigationButton from "../components/NavigationButton";

import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import logo6 from "../assets/logo6.png";
import logo7 from "../assets/logo7.png";
import whiteArrow from "../assets/white-arrow.png";

export default function Companies() {
  return (
    <section className="px-[105px] relative">
      <SectionBreaker />
      <h1 className="text-[35px]">
        Meet the People
        <br />
        <span className="font-bold"> We are Working With</span>
      </h1>
      <Ellipse
        diameter="72px"
        from_color="#F76680"
        to_color="#57007B"
        xposition="700px"
        yposition="36px"
      />
      <div className="relative bg-[#F7F7FA] py-[60px] mt-[72px] -mx-[105px] border-y-[1px] border-primary-lite">
        <Marquee>
          <img className="mx-[27px]" src={logo1} alt="logo" />
          <img className="mx-[27px]" src={logo2} alt="logo" />
          <img className="mx-[27px]" src={logo3} alt="logo" />
          <img className="mx-[27px]" src={logo4} alt="logo" />
          <img className="mx-[27px]" src={logo5} alt="logo" />
          <img className="mx-[27px]" src={logo6} alt="logo" />
          <img className="mx-[27px]" src={logo7} alt="logo" />
        </Marquee>
      </div>
      <NavigationButton
        positionx="right-[81px]"
        positiony="top-[130px]"
        fillColor="primary-default"
        arrowImg={whiteArrow}
      />
      <NavigationButton
        fillColor="bg-primary-default"
        positionx="right-[148px]"
        positiony="top-[130px]"
        rotation="180"
      />
    </section>
  );
}
