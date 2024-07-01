import React from "react";

import { Flex } from "antd";

export default function ServiceSliderCard({ icon, title, isActive }) {
  return (
    <Flex
      justify="center"
      align="center"
      className={`shadow-lg w-[333px] transition duration-300 ease-in-out transform ${isActive && "translate-y-[39px]"} rounded-[7px]`}
    >
      <Flex
        className={`p-px ${isActive && "bg-gradient-to-bl from-primary-dark to-primary-default"} rounded-[7px]`}
      >
        <Flex
          vertical
          className="px-4 py-[38.5px] w-[333px] bg-white rounded-[7px]"
        >
          <Flex justify="start">
            <div className="p-px bg-gradient-to-bl from-primary-dark to-primary-default bg-clip-border border-transparent rounded-full">
              <Flex
                justify="center"
                align="center"
                className="p-3 rounded-full bg-white"
              >
                <img src={icon} alt="icon" />
              </Flex>
            </div>
          </Flex>
          <h1
            className={`text-[20px] font-semibold ${isActive && "bg-gradient-to-bl from-primary-dark to-primary-default text-transparent bg-clip-text"} mt-[15px]`}
          >
            {title}
          </h1>
          <p className="text-[14px] font-normal text-gray-700 mt-5">
            A Website is an extension of yourself and we can help you to express
            it properly. Your website is your number one marketing asset because
            we live in a digital age.
          </p>
        </Flex>
      </Flex>
    </Flex>
  );
}
