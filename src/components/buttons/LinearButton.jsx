import React from "react";
import arrow from "../../assets/arrow_2.png";

export default function LinearButton({
  text,
  textSize,
  iconWidth,
  iconHeight,
}) {
  return (
    <div
      className={`${textSize} font-semibold bg-gradient-to-bl from-[#F76680] to-[#57007B] text-transparent bg-clip-text flex flex-row items-center self-end whitespace-nowrap cursor-pointer`}
    >
      {text}
      <img
        className={`${iconWidth} ${iconHeight} ml-[5px]`}
        src={arrow}
        alt="arrow"
      />
    </div>
  );
}
