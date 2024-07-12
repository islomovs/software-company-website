import React from "react";

import CaseStudyCard from "../components/CaseStudyCard";
import LinearButton from "../components/LinearButton";
import TopHeader from "../components/TopHeader";

import case_study_1 from "../assets/case_study_1.png";
import case_study_2 from "../assets/case_study_2.png";
import case_study_3 from "../assets/case_study_3.png";
import { Element } from "react-scroll";

export default function CaseStudies() {
  return (
    <Element
      name="case-studies"
      className="flex flex-col px-[105px] py-[88px] bg-[#F7F7FA] border-y-[1px] border-y-[#E7DAED]"
    >
      <TopHeader title="Our recent" subtitle="Case studies" />

      <CaseStudyCard img={case_study_1} bgColor="bg-[#F1F2FF]" />
      <CaseStudyCard img={case_study_2} bgColor="bg-[#F0FFF7]" />
      <CaseStudyCard img={case_study_3} bgColor="bg-[#FFF4F4]" />

      <LinearButton
        text="Read more case studies"
        textSize="text-[20px]"
        iconWidth="w-[27px]"
        iconHeight="h-[27px]"
      />
    </Element>
  );
}
