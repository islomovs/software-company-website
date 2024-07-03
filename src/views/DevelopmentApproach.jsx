import React from "react";
import { Row, Col, Flex } from "antd";

import TopHeader from "../components/TopHeader";
import DevApproachCard from "../components/DevApproachCard";

import rocket from "../assets/rocket.png";
import code from "../assets/code.png";
import heart_rate from "../assets/heart_rate.png";
import shield from "../assets/shield.png";
import success from "../assets/success.png";
import padlock from "../assets/padlock.png";

export default function DevelopmentApproach() {
  return (
    <section className="px-[105px] py-20 bg-[#F7F7FA] border-y-[1px] border-y-primary-lite">
      <TopHeader title="Our design and" subtitle="development approach" />
      <Row gutter={[16, 40]}>
        <Col span={12}>
          <DevApproachCard
            icon={rocket}
            from_col="[#29272E]"
            to_col="[#27272E]"
            title="UX Driven Engineering"
            description={
              <p className="text-[14px] font-normal text-gray-700 mt-[10px]">
                Unlike other companies, we are a{" "}
                <span className="bg-gradient-to-bl bg-clip-text text-transparent from-[#29272E] to-[#27272E]">
                  UX first
                </span>{" "}
                development company. Projects are driven by designers and they
                make sure design and experiences translate to code.
              </p>
            }
          />
        </Col>
        <Col span={12}>
          <DevApproachCard
            icon={code}
            from_col="[#68DBF2]"
            to_col="[#509CF5]"
            title="Developing Shared Understanding"
            description={
              <p className="text-[14px] font-normal text-gray-700 mt-[10px]">
                Unlike other companies, we are a{" "}
                <span className="bg-gradient-to-bl bg-clip-text text-transparent from-[#68DBF2] to-[#509CF5]">
                  UX first
                </span>{" "}
                development company. Projects are driven by designers and they
                make sure design and experiences translate to code.
              </p>
            }
          />
        </Col>
        <Col span={12}>
          <DevApproachCard
            icon={heart_rate}
            from_col="[#FF92AE]"
            to_col="[#FF92AE]"
            title="Proven Experience and Expertise"
            description={
              <p className="text-[14px] font-normal text-gray-700 mt-[10px]">
                Unlike other companies, we are a{" "}
                <span className="bg-gradient-to-bl bg-clip-text text-transparent from-[#FF92AE] to-[#FF3D9A]">
                  UX first
                </span>{" "}
                development company. Projects are driven by designers and they
                make sure design and experiences translate to code.
              </p>
            }
          />
        </Col>
        <Col span={12}>
          <DevApproachCard
            icon={shield}
            from_col="[#67E9F1]"
            to_col="[#24E795]"
            title="Security & Intellectual Property (IP)"
            description={
              <p className="text-[14px] font-normal text-gray-700 mt-[10px]">
                Unlike other companies, we are a{" "}
                <span className="bg-gradient-to-bl bg-clip-text text-transparent from-[#67E9F1] to-[#24E795]">
                  UX first
                </span>{" "}
                development company. Projects are driven by designers and they
                make sure design and experiences translate to code.
              </p>
            }
          />
        </Col>
        <Col span={12}>
          <DevApproachCard
            icon={success}
            from_col="[#FFEF5E]"
            to_col="[#F7936F]"
            title="Code Reviews"
            description={
              <p className="text-[14px] font-normal text-gray-700 mt-[10px]">
                Unlike other companies, we are a{" "}
                <span className="bg-gradient-to-bl bg-clip-text text-transparent from-[#FFEF5E] to-[#F7936F]">
                  UX first
                </span>{" "}
                development company. Projects are driven by designers and they
                make sure design and experiences translate to code.
              </p>
            }
          />
        </Col>
        <Col span={12}>
          <DevApproachCard
            icon={padlock}
            from_col="primary-dark"
            to_col="primary-default"
            title="Quality Assurance & Testing"
            description={
              <p className="text-[14px] font-normal text-gray-700 mt-[10px]">
                Unlike other companies, we are a{" "}
                <span className="bg-gradient-to-bl bg-clip-text text-transparent from-[#FFEF5E] to-[#F7936F]">
                  UX first
                </span>{" "}
                development company. Projects are driven by designers and they
                make sure design and experiences translate to code.
              </p>
            }
          />
        </Col>
      </Row>
    </section>
  );
}
