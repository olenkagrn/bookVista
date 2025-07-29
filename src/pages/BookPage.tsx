import React from "react";
import BookImg from "../assets/booktitle.png";
import Icon from "../kit/Icon";
import Button from "../kit/Button";
import BookSection from "../ui/MainComponent/BookSection/BookSection";
import { announcementsBooks } from "../constanrs";

const BookPage = () => {
  return (
    <section className="px-8 lg:px-16 mt-20 grid place-items-center gap-y-12 gap-x-20  lg:grid-rows-[min-content_min-content_1fr]  lg:grid-cols-[1fr_1fr]">
      <div className="relative w-full lg:mx-16 lg:h-[28rem] lg:row-end-2 lg:col-span-full rounded-t-3xl ">
        <div
          className="absolute inset-0 bg-cover bg-center h-full rounded-t-3xl"
          style={{
            backgroundImage: `url(${BookImg})`,
          }}
        />

        <div className="relative z-10  grid  lg:grid-cols-[1fr_2fr] lg:gap-48 place-items-center text-center lg:text-start h-full backdrop-blur-lg bg-white/30 rounded-t-3xl">
          <Icon
            name="arrow-long-right"
            width={42}
            height={42}
            className="text-background rotate-180 absolute top-8 left-8 z-20"
          />

          <img
            src={BookImg}
            alt="Book Title"
            className="w-[300px] lg:absolute pt-24 lg:pt-0 lg:mt-0  lg:w-[350px] lg:h-[500px] lg:left-20 lg:top-30 lg:z-20"
          />

          <div className="flex flex-col gap-4 text-background z-20 mr-20 ">
            <h2 className="text-5xl font-semibold">
              A Court of Thorns and Roses
            </h2>
            <p className="text-[32px]">Sarah J. Maas</p>
            <p className="text-2xl font-light">12 Publications</p>
            <span>rating</span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mt-12 lg:mt-0 lg:row-start-2 lg:col-2">
        <Button
          buttonText="ADD TO BOOKMARK"
          className="border border-accent flex items-center justify-center gap-2"
        >
          <Icon
            name="saved-icon"
            width={24}
            height={32}
            className="text-accent"
          />
        </Button>
        <Button
          buttonText="I READ IT NOW!"
          className="border border-accent flex items-center justify-center gap-2"
        />
        <Button
          buttonText="ADD TO SECRET BOX"
          className="border border-accent flex items-center justify-center gap-2"
        >
          <Icon
            name="secret-box"
            width={32}
            height={32}
            className="text-accent"
          />
        </Button>
      </div>
      <div className="lg:row-end-4 lg:col-span-1 space-y-8">
        <h3 className="font-medium text-[32px]">About book</h3>
        <p className="text-2xl">
          It follows Feyre Archeron, a young huntress pulled into the magical,
          dangerous land of the Fae after killing a wolf. Held captive by the
          enigmatic High Lord Tamlin of the Spring Court, Feyre discovers a
          deadly curse gripping their world. As an unexpected bond forms between
          them, Feyre must unearth ancient secrets and risk everything to save
          the Fae, and perhaps, all realms. Perfect for fans of passionate
          romance, rich world-building, and high fantasy.
        </p>
        <div className="flex gap-4">
          <Button
            buttonText="Fantasy"
            className="border-accent text-[20px] rounded-full text-center"
          />
          <Button
            buttonText="Fantasy"
            className="border-accent text-[20px] rounded-full text-center"
          />
          <Button
            buttonText="Fantasy"
            className="border-accent] text-[20px] rounded-full text-center"
          />
        </div>
      </div>
      <BookSection
        title="This Authors Books"
        books={announcementsBooks}
        limit={3}
        className="lg:row-end-4 lg:col-span-1 lg:place-self-start"
      />
    </section>
  );
};

export default BookPage;
