import React from "react";
import VideoPlayer from "./VideoPlayer";

import SectionBreaker from "./SectionBreaker";
import Button from "./buttons/Button";

import arrow from "../assets/arrow.png";

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
        <VideoPlayer />
      </section>
    </>
  );
}
