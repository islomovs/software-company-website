import React from "react";
import { Flex } from "antd";

import SectionBreaker from "./SectionBreaker";
import Button from "./Button";

import aboutus from "../assets/aboutus.png";

export default function AboutUs() {
  return (
    <>
      <Flex className="px-[105px] py-[180px]" gap={90}>
        <div className="w-[535px]">
          <SectionBreaker />
          <h1 className="text-[35px]">
            Leading companies trust us
            <span className="font-bold"> to develop software</span>
          </h1>
          <p className="mt-[30px] text-[18px] font-normal text-[#718096] mb-[50px]">
            We{" "}
            <span className="bg-gradient-to-bl from-[#F76680] to-[#57007B] text-transparent bg-clip-text">
              add development capacity
            </span>{" "}
            to tech teams. Our value isn’t limited to building teams but is
            equally distributed across the project lifecycle. We are a custom
            software development company that guarantees the successful delivery
            of your project.
          </p>
          <Button text="See more Informations" />
        </div>
        <img className="max-w-[501px]" src={aboutus} alt="about us" />
      </Flex>
    </>
  );
}
