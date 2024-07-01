import React from "react";
import SectionBreaker from "./SectionBreaker";

export default function TopHeader({ title, subtitle }) {
  return (
    <div className="flex flex-col items-center text-center mb-20">
      <SectionBreaker />
      <h1 className="text-[35px]">
        {title}
        <br />
        <span className="font-bold">{subtitle}</span>
      </h1>
    </div>
  );
}
