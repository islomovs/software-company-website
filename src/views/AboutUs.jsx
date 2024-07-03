import React from "react";
import { Flex, Button } from "antd";

import SectionBreaker from "../components/SectionBreaker";

import arrow from "../assets/arrow.png";
import aboutus from "../assets/aboutus.png";
import playcircle from "../assets/play-circle.png";

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
            <span className="bg-gradient-to-bl from-primary-dark to-primary-default text-transparent bg-clip-text">
              add development capacity
            </span>{" "}
            to tech teams. Our value isn’t limited to building teams but is
            equally distributed across the project lifecycle. We are a custom
            software development company that guarantees the successful delivery
            of your project.
          </p>
          <Button
            icon={<img className="w-6 h-6" src={arrow} />}
            type="text"
            iconPosition="end"
            className="text-primary-default font-medium text-[16px]"
          >
            See more Informations
          </Button>
        </div>
        <div className="relative w-[501px]">
          <img className="max-w-[501px]" src={aboutus} alt="about us" />
          <img
            className="absolute inset-0 m-auto h-[78px] w-[78px] cursor-pointer"
            src={playcircle}
            alt="play"
          />
        </div>
      </Flex>
    </>
  );
}
