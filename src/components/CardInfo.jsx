import React from "react";
import { Flex, Avatar } from "antd";

export default function CardInfo({ profile_pic }) {
  return (
    <Flex gap="25px" vertical>
      <h1 className="text-gray-900 text-[28px] font-semibold">
        Build the right team to scale
      </h1>
      <p className="text-gray-800 text-[18px] font-normal leading-[30px] mt-[5px]">
        Finding the right talent is not easy. We help you find the talent that
        suits your needs, follows your processes, and sticks with you long term
        (not the case with freelancers).
      </p>
      <p className="text-gray-800 text-[18px] font-normal leading-[30px]">
        Our{" "}
        <span className="bg-gradient-to-bl from-primary-dark to-primary-default text-transparent bg-clip-text">
          delivery model
        </span>{" "}
        helps you cut costs and deliver within budget.
      </p>
      <Flex gap={15}>
        <hr className="w-[3px] h-[87px] bg-gradient-to-bl from-primary-dark to-primary-default border-0 mb-[20px]" />
        <p className="bg-gradient-to-bl from-primary-dark to-primary-default text-transparent bg-clip-text text-[16px] font-light italic leading-[30px] w-[370px]">
          "Simform is quick to identify larger problem with the Software so we
          decided to expand our scope to build new modules"
        </p>
      </Flex>
      <Flex gap="10px" align="center">
        <Avatar src={<img src={profile_pic} alt="profile pic" />} />
        <Flex vertical>
          <h1 className="text-gray-900 text-[16px] font-normal">
            Jeewa markram
          </h1>
          <h2 className="text-gray-600 text-[13px] font-normal">CEO</h2>
        </Flex>
      </Flex>
    </Flex>
  );
}
