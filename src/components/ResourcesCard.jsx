import React from "react";
import { Flex } from "antd";

import Button from "./Button";

export default function ResourcesCard({ image }) {
  return (
    <Flex vertical className="w-[254px] mx-[30px]">
      <img src={image} alt="f-resource" />
      <p className="my-[20px] font-medium text-[16px] leading-[25px] text-gray-800">
        How to Build a Scalable Application up to 1 Million Users on AWS
      </p>
      <Button text="Read More" />
    </Flex>
  );
}
