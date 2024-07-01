import React from "react";

export default function TimeLine({ left, top }) {
  return (
    <hr
      style={{
        left: left,
        top: top,
      }}
      className={`absolute  border-0 h-[30px] w-[2px] bg-gradient-to-bl from-primary-dark to-primary-default`}
    />
  );
}
