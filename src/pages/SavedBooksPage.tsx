import { useSelector } from "react-redux";
import type { RootState } from "../store";
import Book from "../ui/Books/Book";
import Button from "../kit/Button";
import { Link } from "react-router";

const SavedBooksPage = () => {
  const savedBooks = useSelector(
    (state: RootState) => state.bookmarks.bookmarks,
  );

  return (
    <section className="grid grid-rows-4 ">
      <h2 className="font-semibold text-4xl uppercase mt-28 place-self-start">
        OLENA, Welcome to your personal library!
      </h2>
      {savedBooks.length > 0 ? (
        <>
          <section className="flex gap-10 flex-wrap">
            <h3 className="text-4xl mb-10 font-semibold">Your collections:</h3>
            <div></div>
          </section>
          <section>
            <h3 className="text-4xl mb-10 font-semibold">All Books</h3>{" "}
            <div className="flex gap-10 flex-wrap">
              {savedBooks.map((book) => (
                <Book key={book.id} {...book} />
              ))}
            </div>
          </section>
        </>
      ) : (
        <div className="flex flex-col gap-6 items-center justify-center h-[30vh]">
          <p className="mt-auto text-2xl text-center">
            You haven&lsquo;t saved any books yet. Please add some books here
          </p>
          <Link to="/search">
            <Button
              buttonText="Add Books"
              type="primary"
              className="text-background x-4 py-2"
            />
          </Link>
        </div>
      )}
    </section>
  );
};

export default SavedBooksPage;
