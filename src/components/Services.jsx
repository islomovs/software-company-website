import React, { useState, useRef } from "react";
import { Flex } from "antd";

import ServiceSliderCard from "./ServiceSliderCard";

import code from "../assets/code.png";
import dashboard from "../assets/dashboard.png";
import mobile_app from "../assets/mobile_app.png";

import Ellipse from "./Ellipse";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";

import "swiper/css";
import "swiper/css/pagination";

SwiperCore.use([Pagination]);

export default function Services() {
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    <ServiceSliderCard
      icon={mobile_app}
      title="Mobile App Development"
      isActive={currentIndex === 0}
    />,
    <ServiceSliderCard
      icon={code}
      title="Web Design & Development"
      isActive={currentIndex === 1}
    />,
    <ServiceSliderCard
      icon={dashboard}
      title="Software Testing Service"
      isActive={currentIndex === 2}
    />,
    <ServiceSliderCard
      icon={code}
      title="Software Testing Service"
      isActive={currentIndex === 3}
    />,
    <ServiceSliderCard
      icon={code}
      title="Mobile App Development"
      isActive={currentIndex === 4}
    />,
  ];
  function handleActiveSlider(swiper) {
    setCurrentIndex(swiper.realIndex);
  }

  return (
    <div className="relative">
      <Ellipse
        diameter="72px"
        from_color="#F76680"
        to_color="#57007B"
        yposition="-36px"
        xposition="400px"
      />
      <Ellipse
        diameter="72px"
        from_color="#F76680"
        to_color="#57007B"
        yposition="590px"
        xposition="100px"
      />
      <div className="w-full bg-[#F9F9FF] pt-[46px] pb-[160px] border-[1px] border-primary-lite z-20">
        <h1 className="text-center text-[35px] font-bold leading-[55px] mb-16">
          Services we offer
        </h1>
        <Swiper
          onSlideChange={handleActiveSlider}
          className="overflow-visible"
          loop
          autoplay
          ref={swiperRef}
          slidesPerView={3}
          centeredSlides
          centeredSlidesBounds
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
            bulletActiveClass: "custom-bullet-active",
            renderBullet: function (index, className) {
              return `<span class="${className} custom-bullet"> </span>`;
            },
          }}
        >
          {slides.map((content, index) => (
            <SwiperSlide className="flex justify-center" key={index}>
              {content}
            </SwiperSlide>
          ))}
          <Flex
            justify="center"
            className="swiper-pagination absolute translate-y-[90px] left-1/2"
          ></Flex>
        </Swiper>
      </div>
    </div>
  );
}
