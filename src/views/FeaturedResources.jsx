import React from "react";
import Marquee from "react-fast-marquee";

import TopHeader from "../components/TopHeader";
import ResourcesCard from "../components/ResourcesCard";

import fresource from "../assets/f-resource.png";
import fresource2 from "../assets/f-resource2.png";
import fresource3 from "../assets/f-resource3.png";
import fresource4 from "../assets/f-resource4.png";
import fresource5 from "../assets/f-resource5.png";

export default function FeaturedResources() {
  return (
    <section>
      <TopHeader title="Featured" subtitle="Resources" />
      <Marquee pauseOnHover="true">
        <ResourcesCard image={fresource} />
        <ResourcesCard image={fresource2} />
        <ResourcesCard image={fresource3} />
        <ResourcesCard image={fresource4} />
        <ResourcesCard image={fresource5} />
      </Marquee>
    </section>
  );
}
