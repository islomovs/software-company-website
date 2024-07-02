import React, { useState, useRef } from "react";
import { Flex } from "antd";

import TopHeader from "./TopHeader";
import ReviewCard from "./ReviewCard";
import NavigationButton from "./NavigationButton";
import PaginationCard from "./PaginationCard";

import profile1 from "../assets/Profile1.png";
import profile2 from "../assets/Profile2.png";
import profile3 from "../assets/Profile3.png";
import profile4 from "../assets/Profile4.png";
import profile5 from "../assets/Profile5.png";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

export default function Reviews() {
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      id: 1,
      text: "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.",
      imgUrl: profile1,
    },
    {
      id: 2,
      text: "Vestibulum cursus massa eget feugiat imperdiet. Curabitur consequat bibendum tempus. Maecenas imperdiet neque sed gravida auctor. Vestibulum ultrices diam faucibus erat egestas fermentum. Suspendisse eu nisl vitae erat mattis varius.",
      imgUrl: profile2,
    },
    {
      id: 3,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non viverra nunc. Duis malesuada suscipit augue, ut pulvinar nisl scelerisque et. Aenean tempus fermentum tellus nec accumsan. Curabitur sagittis congue luctus. Donec hendrerit aliquam justo, at semper magna efficitur et. Praesent sed arcu ex.",
      imgUrl: profile3,
    },
    {
      id: 4,
      text: "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.",
      imgUrl: profile4,
    },
    {
      id: 5,
      text: "Vestibulum cursus massa eget feugiat imperdiet. Curabitur consequat bibendum tempus. Maecenas imperdiet neque sed gravida auctor. Vestibulum ultrices diam faucibus erat egestas fermentum. Suspendisse eu nisl vitae erat mattis varius.",
      imgUrl: profile5,
    },
  ];

  function goToSlide(index) {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index);
    }
  }

  function nextSlide() {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  }

  function prevSlide() {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  }

  return (
    <section className="mx-20 my-32 relative">
      <TopHeader title="Why customers love" subtitle="working with us" />
      <Swiper
        slidesPerView={1}
        loop
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          setCurrentIndex(swiper.realIndex);
        }}
      >
        {slides.map((card) => (
          <SwiperSlide key={card.id}>
            <ReviewCard text={card.text} />
          </SwiperSlide>
        ))}
      </Swiper>
      <NavigationButton
        fillColor="bg-white"
        onClick={nextSlide}
        rotation="0"
        positionx="right-0"
        positiony="top-[360px]"
      />
      <NavigationButton
        fillColor="bg-white"
        onClick={prevSlide}
        rotation="180"
        positionx="left-0"
        positiony="top-[360px]"
      />
      <Flex justify="center" gap={10}>
        {slides.map((card, i) => (
          <PaginationCard
            key={i}
            index={i}
            img={card.imgUrl}
            currIndex={currentIndex}
            onClick={goToSlide}
          />
        ))}
      </Flex>
    </section>
  );
}
