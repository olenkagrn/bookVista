import BookSection from "../ui/MainComponent/BookSection/BookSection";
import HeroSection from "../ui/MainComponent/HeroSection/HeroSection";
import ScheduleReading from "../ui/ScheduleReading/ScheduleReading";
import ReadersFriends from "../ui/ReadersFriends/ReadersFriends";
import { useSelector } from "react-redux";
import type { RootState } from "../store";
import { useAppDispatch } from "../store/hooks";
import { useEffect } from "react";
import { fetchAllBooks } from "../store/slices/BooksSlice";

const MainPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { allBooks } = useSelector((state: RootState) => state.books);

  useEffect(() => {
    dispatch(fetchAllBooks());
  }, [dispatch]);

  return (
    <>
      <section className=" flex flex-col justify-center items-center min-h-screen  pt-12 lg:grid lg:p-0 lg:grid-cols-[auto_1fr] lg:grid-rows-[7_1fr] gap-6 relative max-w-[1440px] m-auto lg:px-16  ">
        <section className="lg:col-start-2 lg:col-end-5 lg:row-start-2 lg:row-end-3 ">
          <HeroSection />
        </section>
        <section className="lg:col-start-2 lg:col-end-3 lg:row-start-3 lg:row-end-5 ">
          {allBooks && (
            <BookSection
              title="Popular Now"
              limit={3}
              books={allBooks
                .filter((b) => Number(b.averagerating) >= 4.5)
                .slice(0, 3)}
            />
          )}
        </section>{" "}
        <section className="lg:col-start-2 lg:col-end-3 lg:row-start-5 lg:row-end-6 ">
          <BookSection
            title="This month's announcements"
            limit={3}
            books={allBooks.slice(0, 3)}
          />
        </section>{" "}
        <ScheduleReading />
        <ReadersFriends />
      </section>
    </>
  );
};

export default MainPage;
