import React from "react";
import SectionBreaker from "./SectionBreaker";
import CaseStudyCard from "./CaseStudyCard";
import case_study_1 from "../assets/case_study_1.png";
import case_study_2 from "../assets/case_study_2.png";
import case_study_3 from "../assets/case_study_3.png";

export default function CaseStudies() {
  return (
    <div className="px-[105px]">
      <div className="flex flex-col items-center text-center mb-20">
        <SectionBreaker />
        <h1 className="text-[35px]">
          Our recent
          <br />
          <span className="font-bold">Case studies</span>
        </h1>
      </div>
      <CaseStudyCard img={case_study_1} bgColor="bg-red" />
      <CaseStudyCard img={case_study_2} bgColor="bg-red" />
      <CaseStudyCard img={case_study_3} bgColor="bg-red" />
    </div>
  );
}
