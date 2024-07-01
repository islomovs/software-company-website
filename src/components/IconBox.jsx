import React from "react";
import { Flex } from "antd";

export default function IconBox({ icon }) {
  return (
    <Flex className="cursor-pointer p-[11px] rounded-full shadow-lg">
      {icon}
    </Flex>
  );
}
