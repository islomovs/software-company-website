import React from "react";
import arrow from "../assets/arrow.png";
import VideoPlayer from "./VideoPlayer";
import SectionBreaker from "./SectionBreaker";

const handleLeftClick = () => {
  alert("Left button clicked!");
};
export default function Section2() {
  return (
    <>
      <section className="flex flex-row px-[105px] py-[180px]">
        <div className="w-[535px]">
          <SectionBreaker />
          <h1 className="text-[35px]">
            Leading companies trust us
            <span className="font-bold"> to develop software</span>
          </h1>
          <p className="mt-[30px] text-[18px] font-normal text-[#718096]">
            We{" "}
            <span className="bg-gradient-to-bl from-[#F76680] to-[#57007B] text-transparent bg-clip-text">
              add development capacity
            </span>{" "}
            to tech teams. Our value isn’t limited to building teams but is
            equally distributed across the project lifecycle. We are a custom
            software development company that guarantees the successful delivery
            of your project.
          </p>
          <div className="flex flex-row items-center mt-[50px] text-[#57007B] font-medium cursor-pointer">
            See more Informations{" "}
            <img
              className="ml-[15px] w-[24px] h-[24px]"
              src={arrow}
              alt="arrow"
            />
          </div>
        </div>
        <VideoPlayer />
      </section>
      <div className="px-[105px]">
        <SectionBreaker />
        <h1 className="text-[35px]">
          Meet the People
          <br />
          <span className="font-bold"> We are Working With</span>
        </h1>
      </div>
    </>
  );
}
