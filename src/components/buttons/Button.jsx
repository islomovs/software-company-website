import React from "react";
import { Flex } from "antd";

import arrow from "../../assets/arrow.png";

export default function Button({ text }) {
  return (
    <Flex
      align="center"
      className="text-[16px] font-medium text-primary-default self-end whitespace-nowrap cursor-pointer"
    >
      {text}
      <img className="w-[24px] h-[24px] ml-[5px]" src={arrow} alt="arrow" />
    </Flex>
  );
}
