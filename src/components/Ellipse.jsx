import React from "react";

export default function Ellipse({
  diameter,
  xposition,
  yposition,
  from_color,
  to_color,
}) {
  const styles = {
    width: diameter,
    height: diameter,
    transform: `translate(${xposition}, ${yposition})`,
    backgroundImage: `linear-gradient(to bottom left, var(--tw-gradient-from), var(--tw-gradient-to))`,
    "--tw-gradient-from": from_color,
    "--tw-gradient-to": to_color,
  };

  return <div className="absolute rounded-full -z-10" style={styles}></div>;
}
