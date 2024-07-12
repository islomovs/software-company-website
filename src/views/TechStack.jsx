import React, { useRef, useState, useEffect } from "react";
import { Flex, Col, Row } from "antd";

import TopHeader from "../components/TopHeader";
import TechTitles from "../components/TechTitles";

import nodejs from "../assets/NodeJS.png";
import php from "../assets/PHP.png";
import mysql from "../assets/mysql.png";
import java from "../assets/Java.png";
import netcore from "../assets/NETCore.png";
import python from "../assets/Python.png";
import rails from "../assets/RubyOnRails.png";
import go from "../assets/Go.png";
import mongo from "../assets/mongo.png";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Element } from "react-scroll";

export default function TechStack() {
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [underlinePosition, setUnderlinePosition] = useState(0);
  const titleRefs = useRef([]);

  const titles = [
    {
      id: 1,
      title: "Backend",
    },
    {
      id: 2,
      title: "Frontend",
    },
    {
      id: 3,
      title: "Databases",
    },
    {
      id: 4,
      title: "CMS",
    },
    {
      id: 5,
      title: "CloudTesting",
    },
    {
      id: 6,
      title: "DevOps",
    },
  ];

  const techImages = [
    { id: 1, imgUrl: nodejs },
    { id: 2, imgUrl: php },
    { id: 3, imgUrl: mysql },
    { id: 4, imgUrl: java },
    { id: 5, imgUrl: netcore },
    { id: 6, imgUrl: python },
    { id: 7, imgUrl: rails },
    { id: 8, imgUrl: go },
    { id: 9, imgUrl: mongo },
  ];

  function goToSlide(index) {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index);
    }
  }

  useEffect(() => {
    const activeTitle = titleRefs.current[currentIndex];
    if (activeTitle) {
      const leftOffset =
        activeTitle.offsetLeft + activeTitle.offsetWidth / 2 - 12.5; // Center the underline, assuming underline width is 25px
      setUnderlinePosition(leftOffset);
    }
  }, [currentIndex, titleRefs.current]);

  return (
    <Element
      name="tech-stack"
      className="py-20 px-[188px] border-b-[1px] border-primary-lite"
    >
      <TopHeader title="Our" subtitle="Tech Stack" />
      <Flex justify="center" gap={10}>
        {titles.map((title, i) => (
          <TechTitles
            key={i}
            onClick={goToSlide}
            titleRefs={titleRefs}
            currentIndex={currentIndex}
            title={title.title}
            index={i}
          />
        ))}
      </Flex>
      <div className="relative w-full flex justify-center">
        <hr
          className="absolute left-[-188px] w-[25px] h-[3px] rounded-[3px] bg-gradient-to-bl from-[#F76680] to-[#57007B] border-0 transition-transform duration-300"
          style={{ transform: `translateX(${underlinePosition}px)` }}
        />
      </div>
      <Swiper
        slidesPerView={1}
        loop
        allowTouchMove={false}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          setCurrentIndex(swiper.realIndex);
        }}
      >
        {titles.map((card, i) => (
          <SwiperSlide key={card.id} className="mt-[72px]">
            <Row
              justify="center"
              gutter={[60, 30]}
              className="transition-all duration-300"
            >
              {techImages.map((techObj, i) => (
                <Col span={4} key={i}>
                  <img
                    key={i}
                    src={techObj.imgUrl}
                    alt="tech"
                    className="w-full"
                  />
                </Col>
              ))}
            </Row>
          </SwiperSlide>
        ))}
      </Swiper>
    </Element>
  );
}
