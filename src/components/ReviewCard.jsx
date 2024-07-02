import React from "react";
import { Flex } from "antd";

import commal from "../assets/comma-left.png";
import commar from "../assets/comma-right.png";

export default function ReviewCard({ text }) {
  return (
    <div className="text-center text-[18px] font-normal leading-[36px] text-gray-600 max-w-[680px] mx-auto mt-[51px]">
      <Flex gap={56}>
        <img className="h-[24px]" src={commal} alt="comma" />
        {text}
        <img className="self-end h-[24px]" src={commar} alt="comma" />
      </Flex>
    </div>
  );
}
