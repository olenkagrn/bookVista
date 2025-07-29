import React from "react";
import BookImage from "../../../../assets/heroSectionBook.png";

const HeroImageBlock: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:grid-cols-[3fr_1fr] gap-[42px]">
      <img
        src={BookImage}
        alt="Open book"
        className="md:w-[500px] shadow-2xl"
      />
      <p className="italic text-3xl text-dark-default  text-center md:text-start">
        “Build Your Library, One Book at a Time”
      </p>
    </div>
  );
};

export default HeroImageBlock;
