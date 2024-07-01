import React from "react";
import { Row, Col } from "antd";

import TopHeader from "./TopHeader";
import CardInfo from "./CardInfo";
import Ellipse from "./Ellipse";

import profile_pic from "../assets/profile_pic.png";
import profile_pic_2 from "../assets/profile_pic_2.png";
import profile_pic_3 from "../assets/profile_pic_3.png";
import great_soft_1 from "../assets/great_soft_1.png";
import great_soft_2 from "../assets/great_soft_2.png";
import great_soft_3 from "../assets/great_soft_3.png";

export default function GreatSoftware() {
  return (
    <section className="px-[105px] py-20">
      <TopHeader title="Way of building" subtitle="Great Software" />
      <Row gutter={[98, 95]}>
        <Col span={12}>
          <CardInfo profile_pic={profile_pic} />
        </Col>
        <Col span={12}>
          <Ellipse
            diameter="64px"
            from_color="#FFEF5E"
            to_color="#F7936F"
            xposition="4px"
            yposition="-20px"
          />
          <Ellipse
            diameter="32px"
            from_color="#F76680"
            to_color="#57007B"
            xposition="248px"
            yposition="412px"
          />
          <img className="relative z-10" src={great_soft_1} alt="great soft" />
        </Col>

        <Col span={12}>
          <Ellipse
            diameter="28px"
            from_color="#F76680"
            to_color="#57007B"
            xposition="500px"
            yposition="-12px"
          />
          <Ellipse
            diameter="71px"
            from_color="#FFEF5E"
            to_color="#F7936F"
            xposition="80px"
            yposition="398px"
          />
          <img className="relative z-10" src={great_soft_2} alt="great soft" />
        </Col>
        <Col span={12}>
          <CardInfo profile_pic={profile_pic_2} />
        </Col>

        <Col span={12}>
          <CardInfo profile_pic={profile_pic_3} />
        </Col>
        <Col span={12}>
          <Ellipse
            diameter="38px"
            from_color="#F76680"
            to_color="#57007B"
            xposition="268px"
            yposition="-18px"
          />
          <Ellipse
            diameter="43px"
            from_color="#FFEF5E"
            to_color="#F7936F"
            xposition="-16px"
            yposition="398px"
          />
          <img className="relative z-10" src={great_soft_3} alt="great soft" />
        </Col>
      </Row>
    </section>
  );
}
