import React from "react";
import { Flex, Avatar } from "antd";

import stars from "../assets/stars.png";

export default function PaginationCard({ index, currIndex, img, onClick }) {
  return (
    <Flex
      vertical
      key={index}
      align="center"
      className={`${index != currIndex && "opacity-40 scale-75"} transition-all duration-300 mx-[38px] rounded-full`}
    >
      <Flex
        justify="center"
        align="center"
        className="w-[125px] h-[125px] rounded-full cursor-pointer"
        onClick={() => {
          onClick(index);
        }}
      >
        <Avatar
          size={100}
          className={`${index === currIndex && "shadow-lg"} border-none transition-all duration-300 object-cover rounded-full`}
          src={img}
          alt="profile"
        />
      </Flex>
      <img className="my-[10px]" src={stars} alt="stars" />
      <h1
        className={`${index === currIndex && "text-primary-default text-[18px]"} transition-all duration-300 text-gray-500 text-[14px] font-semibold`}
      >
        Romeena De Silva
      </h1>
      <h2
        className={`${index === currIndex && "text-black text-[14px]"} transition-all duration-300 text-gray-300 text-[11px] font-normal`}
      >
        Janet Cosmetics
      </h2>
    </Flex>
  );
}
