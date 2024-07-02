import React from "react";
import { Flex } from "antd";

export default function TechTitles({
  onClick,
  index,
  titleRefs,
  title,
  currentIndex,
}) {
  return (
    <div
      ref={(el) => (titleRefs.current[index] = el)}
      onClick={() => onClick(index)}
      className={`cursor-pointer ${index === currentIndex ? "bg-gradient-to-bl from-primary-dark to-primary-default bg-clip-text text-transparent" : ""}`}
    >
      {title}
    </div>
  );
}
