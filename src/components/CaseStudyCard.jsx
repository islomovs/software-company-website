import React from "react";
import LinearButton from "./buttons/LinearButton";

export default function CaseStudyCard({ img, bgColor }) {
  return (
    <div className="flex flex-row items-stretch rounded-[10px] mb-[35px]">
      <img
        className="w-1/2 object-cover rounded-[10px] z-10"
        src={img}
        alt="case study 1"
      />
      <div
        className={`flex flex-col flex-1 px-[51px] py-[40px] ${bgColor} -ml-4 rounded-r-[30px] border-[1px] border-[#E7DAED]`}
      >
        <h1 className="text-[28px] font-semibold text-[#2D3748]">
          Website Design for SCFC Canada
        </h1>
        <p className="text-[14px] font-normal text-[#4A5568] mt-[30px] mb-[60px]">
          Born out of a vision, a single-minded objective that puts service
          before anything else, Swift Clearance and Forwarding Corp. surging
          forth to deliver the best services in the shipping and logistics
          scenario. Its meteoric rise stems out of a solid foundation. The
          management boasts of over 20 years of rich and varied experience in
          the shipping and freight forwarding industry.
        </p>
        <LinearButton
          text="Read more"
          textSize="text-[14px]"
          iconWidth="w-[16px]"
          iconHeight="h-[16px]"
        />
      </div>
    </div>
  );
}
