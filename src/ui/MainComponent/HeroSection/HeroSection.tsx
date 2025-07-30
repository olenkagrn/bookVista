import React from "react";
import HeroTextBlock from "./HeroTextBlock/HeroTextBlock";
import HeroImageBlock from "./HeroImageBlock/HeroImageBlock";

const HeroSection: React.FC = () => {
  return (
    <section className=" grid place-items-center  gap-10 py-10 md:pl-0 md:grid-cols-[auto_1fr] md:place-items-start ">
      <HeroTextBlock />
      <HeroImageBlock />
    </section>
  );
};

export default HeroSection;
