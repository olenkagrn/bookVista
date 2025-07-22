import React from "react";
import HeroTextBlock from "./HeroTextBlock/HeroTextBlock";
import HeroImageBlock from "./HeroImageBlock/HeroImageBlock";

const HeroSection: React.FC = () => {
  return (
    <section className=" grid place-items-center  gap-10 p-10 md:pl-0 md:grid-cols-2 md:place-items-start ">
      <HeroTextBlock />
      <HeroImageBlock />
    </section>
  );
};

export default HeroSection;
