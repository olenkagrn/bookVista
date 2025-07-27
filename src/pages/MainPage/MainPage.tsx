import React from "react";
import BookSection from "../../ui/MainComponent/BookSection/BookSection";
import { announcementsBooks, popularBooks } from "../../constanrs";
import HeroSection from "../../ui/MainComponent/HeroSection/HeroSection";
import ScheduleReading from "../../ui/ScheduleReading/ScheduleReading";
import ReadersFriends from "../../ui/ReadersFriends/ReadersFriends";

const MainPage: React.FC = () => {
  return (
    <>
      <section className=" flex flex-col min-h-screen  pt-12 md:grid md:p-0 md:grid-cols-[auto_1fr] md:grid-rows-[7_1fr] gap-6 relative max-w-[1440px] m-auto  md:pr-16">
        <section className="md:col-start-2 md:col-end-5 md:row-start-2 md:row-end-3 ">
          <HeroSection />
        </section>
        <section className="md:col-start-2 md:col-end-3 md:row-start-3 md:row-end-5 ">
          <BookSection title="Popular Now" limit={3} books={popularBooks} />
        </section>{" "}
        <section className="md:col-start-2 md:col-end-3 md:row-start-5 md:row-end-6 ">
          <BookSection
            title="This month's announcements"
            limit={3}
            books={announcementsBooks}
          />
        </section>{" "}
        <ScheduleReading />
        <ReadersFriends />
      </section>
    </>
  );
};

export default MainPage;
