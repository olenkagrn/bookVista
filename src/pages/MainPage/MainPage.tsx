import React from "react";
import BookSection from "../../ui/MainComponent/BookSection/BookSection";
import { announcementsBooks, popularBooks } from "../../constanrs";
import HeroSection from "../../ui/MainComponent/HeroSection/HeroSection";
import BurgerMenu from "../../ui/BurgerMenu/BurgerMenu";
import SideMenu from "../../ui/SideMenu";
import ScheduleReading from "../../ui/ScheduleReading/ScheduleReading";
import Header from "../../ui/Header/Header";
import ReadersFriends from "../../ui/ReadersFriends/ReadersFriends";
import Footer from "../../ui/Footer/Footer";
const MainPage: React.FC = () => {
  return (
    <>
      <section className="flex flex-col min-h-screen  pt-12 md:grid md:p-0 md:grid-cols-[auto_1fr] md:grid-rows-[7_1fr] gap-6 relative max-w-[1440px] m-auto bg-[#F1EFE3] md:pr-16">
        <aside className="hidden md:block md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-7">
          <SideMenu />
        </aside>
        <div className="block md:hidden">
          <BurgerMenu />
        </div>
        <header className="md:col-start-4 md:col-end-5 row-start-1 md:row-span-1 md: self-end ">
          <Header />
        </header>
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
        </section>
        <section className="md:col-start-4 md:col-end-5 md:row-start-3 md:row-end-4 ">
          {" "}
          <ScheduleReading />
        </section>
        <section className="md:col-start-4 md:col-end-5 md:row-start-4 md:row-end-6">
          <ReadersFriends />
        </section>
        <footer className=" md:col-start-2 md:col-end-5 row-start-6 md:row-end-7 ">
          <Footer />
        </footer>
      </section>
    </>
  );
};

export default MainPage;
