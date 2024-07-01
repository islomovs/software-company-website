import React from "react";
import { Flex } from "antd";

export default function AlcalineCard({ title, description, number }) {
  return (
    <Flex>
      <Flex
        vertical
        gap={15}
        className="max-w-[319px] min-h-[170px] border-[1px] border-primary-lite pl-[21px] pt-[22px] pb-[26px] pr-[33px] rounded-[9px]"
      >
        <h1 className="text-gray-900 text-[18px] font-bold">
          <span className="bg-gradient-to-bl bg-clip-text text-transparent from-primary-dark to-primary-default">
            {number}
          </span>{" "}
          {title}
        </h1>
        <p className="text-[14px] font-normal leading-[20px] text-gray-600">
          {description}
        </p>
      </Flex>
    </Flex>
  );
}
