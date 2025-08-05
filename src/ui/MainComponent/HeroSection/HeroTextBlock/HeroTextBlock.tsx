import React from "react";
import Button from "../../../../kit/Button";
const HeroTextBlock: React.FC = () => {
  return (
    <div className=" max-w-md text-center lg:text-start">
      <h1 className="text-4xl text-dark-default font-bold mb-4">
        From Shelf
        <br />
        to Story:
        <br />
        Your Next Read
        <br />
        Awaits.
      </h1>
      <p className="text-dark-default mb-6">
        Discover your next favorite book among a multitude of genres and
        authors. BookVista is your personal space for exploring new literary
        horizons and tracking treasures you&apos;ve already read.
      </p>
      <Button
        type="transparent"
        buttonText="Let`s Search A Book"
        className=" border-border"
      />
    </div>
  );
};

export default HeroTextBlock;
