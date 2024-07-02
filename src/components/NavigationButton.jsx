import React from "react";
import { Flex } from "antd";

import arrow from "../assets/arrow.png";

export default function NavigationButton({
  onClick,
  rotation,
  fillColor,
  positionx,
  positiony,
  arrowImg,
}) {
  return (
    <Flex
      onClick={onClick}
      justify="center"
      align="center"
      className={`absolute cursor-pointer z-50 h-[45px] w-[45px] border-[2px] rounded-full border-primary-default ${positionx} bg-${fillColor} ${positiony} rotate-${rotation}`}
    >
      <img
        className="h-[22.5px] w-[22.5px]"
        src={arrowImg ? arrowImg : arrow}
        alt="arrow"
      />
    </Flex>
  );
}
