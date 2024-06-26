import React from "react";
import main_img from "../assets/main.png";

export default function () {
  return (
    <section className="flex flex-row align-middle px-28 py-16">
      <div className="flex flex-col justify-center">
        <h1 className="text-[45px] font-light">
          Great
          <span className="bg-gradient-to-b from-[#DE4396] to-[#0D1C9F] text-transparent bg-clip-text font-bold">
            {" "}
            Product{" "}
          </span>
          is
        </h1>
        <h1 className="text-[53px] font-extrabold">
          {" "}
          built by great{" "}
          <span className="bg-gradient-to-b from-[#F7666F] to-[#406AFF] text-transparent bg-clip-text">
            teams
          </span>{" "}
        </h1>
        <p className="text-[18px] font-normal text-[#4A5568] mt-[20px]">
          We help build and manage a team of world-class developers to bring
          your vision to life
        </p>
        <button className="w-[175px] h-[52px] bg-[#3D63EA] rounded-[5px] font-semibold text-sm text-white mt-16">
          Let’s get started!
        </button>
      </div>
      <img className="w-[614px] h-[546px]" src={main_img} alt="main image" />
    </section>
  );
}
