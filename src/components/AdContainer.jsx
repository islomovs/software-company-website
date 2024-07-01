import React from "react";
import { Flex } from "antd";

export default function AdContainer() {
  return (
    <section className="px-[105px] py-[50px]">
      <Flex
        align="center"
        justify="space-between"
        className="px-[84px] py-[47px] bg-gradient-to-bl from-[#F1F1F5] to-[#E4ECF7] rounded-[20px]"
      >
        <h1 className="bg-gradient-to-bl bg-clip-text text-transparent from-[#29272E] to-[#27272E] text-[35px] font-bold leading-[55px] w-[531px]">
          Hire the best developers and designers around!
        </h1>
        <Flex
          align="center"
          className="bg-shine h-[200px] bg-no-repeat bg-center"
        >
          <Flex
            align="center"
            className="m-0 bg-gradient-to-bl from-[#FFC656] to-[#F16063] text-white font-bold text-[18px] rounded-[5px] max-h-[57px] px-[43px] py-[17.5px]"
          >
            <p>Hire Top Developers</p>
          </Flex>
        </Flex>
      </Flex>
    </section>
  );
}
