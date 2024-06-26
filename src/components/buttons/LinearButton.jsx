import React from "react";

export default function LinearButton({
  text,
  textSize,
  iconWidth,
  iconHeight,
}) {
  return (
    <div className="text-[14px] font-semibold bg-gradient-to-bl from-[#F76680] to-[#57007B] text-transparent bg-clip-text flex flex-row items-center self-end whitespace-nowrap cursor-pointer">
      {text}
      <img className="w-[16px] h-[16px] ml-[5px]" src={arrow} alt="arrow" />
    </div>
  );
}
