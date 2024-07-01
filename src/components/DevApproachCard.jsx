import React from "react";
import { Flex } from "antd";

export default function DevApproachCard({
  icon,
  from_col,
  to_col,
  title,
  description,
}) {
  return (
    <Flex
      gap={25}
      align="start"
      className="px-[33px] pt-[59px] pb-[39px] border-[1px] border-primary-lite"
    >
      <Flex
        className={`p-[13px] bg-gradient-to-bl from-${from_col} to-${to_col} rounded-[10px]`}
      >
        <img className="min-w-[34px] min-h-[34px]" src={icon} alt="rocket" />
      </Flex>
      <Flex vertical>
        <h1 className="text-[20px] font-semibold text-gray-900">{title}</h1>
        {description}
      </Flex>
    </Flex>
  );
}
