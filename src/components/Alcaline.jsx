import React from "react";
import { Flex } from "antd";

import TopHeader from "./TopHeader";
import AlcalineCard from "./AlcalineCard";
import TimeLine from "./TimeLine";

import trophy from "../assets/trophy.png";

export default function Alcaline() {
  return (
    <section className="px-[105px] py-[94px]">
      <TopHeader title="How development" subtitle="through Alcaline works" />
      <Flex gap={80}>
        <AlcalineCard
          style={{ marginLeft: "16px" }}
          className="justify-end"
          number="#1"
          title="Assemble the right team"
          description="We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do."
        />
        <AlcalineCard
          number="#3"
          title="Tech architecture"
          description="We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently."
        />
        <AlcalineCard
          number="#5"
          title="Code reviews"
          description="Code reviews before release help detect issues like memory leaks, file leaks, performance signs, and general bad smells."
        />
      </Flex>
      <div className="relative">
        <TimeLine left="160px" top="-30px" />
        <TimeLine left="530px" top="-30px" />
        <TimeLine left="920px" top="-30px" />
        <TimeLine left="222px" top="0px" />
        <TimeLine left="622px" top="0px" />
        <TimeLine left="1012px" top="0px" />
        <hr className="realtive my-[45px] border-0 h-[2px] w-full bg-gradient-to-bl from-primary-dark to-primary-default" />
        <img
          className="absolute top-[-21px] right-[-40px]"
          src={trophy}
          alt="trophy"
        />
      </div>
      <Flex className="ml-[55px]" gap={80}>
        <AlcalineCard
          className="ml-[55px]"
          number="#2"
          title="Sprint planning"
          description="Sprint roadmap is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding."
        />
        <AlcalineCard
          className="ml-[60px]"
          number="#4"
          title="Standups & weekly demos"
          description="Standups, weekly demos, and weekly reviews make sure everyone is on the same page and can raise their concerns."
        />
        <AlcalineCard
          number="#6"
          title="Iterative delivery"
          description="We divide the implementation process into several checkpoints rather than a single deadline."
        />
      </Flex>
    </section>
  );
}
