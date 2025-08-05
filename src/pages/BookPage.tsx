import Icon from "../kit/Icon";
import Button from "../kit/Button";
import BookSection from "../ui/MainComponent/BookSection/BookSection";
import StarRating from "../ui/StartRating";
import Loader from "../ui/Loader/Loader";

import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";

import { BACK_URL } from "../constants";

import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store";
import { fetchBookById } from "../store/slices/BooksSlice";
import { addBookmark } from "../store/slices/bookmarksSlice";

const BookPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const books = useSelector((state: RootState) => state.books.books);

  const {
    selectedBook: book,

    loading,
    error,
  } = useSelector((state: RootState) => state.books);

  const bookmarks = useSelector(
    (state: RootState) => state.bookmarks.bookmarks,
  );
  const isBookmarked = bookmarks.some((b) => b.id === book?.id);

  const genres = Array.from(
    new Set(books.flatMap((book) => book.genres ?? [])),
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchBookById(id));
    }
  }, [id, dispatch]);

  const handleAddBookmark = () => {
    if (book) {
      dispatch(addBookmark(book));
      console.log(`Книгу '${book.title}' додано до закладок.`);
    }
  };

  if (loading || !book) {
    return <Loader />;
  }

  if (error) {
    return <p className="text-red-500 text-center mt-24">Error: {error}</p>;
  }

  const fullCoverUrl = `${BACK_URL}${book?.coverurl ?? ""}`;

  return (
    <section className=" lg:px-16 mt-20 grid place-items-center gap-y-12 gap-x-20  lg:grid-rows-[min-content_min-content_1fr]  lg:grid-cols-[1fr_1fr]">
      <div className="relative w-full lg:mx-16 lg:h-[28rem] lg:row-end-2 lg:col-span-full rounded-t-3xl ">
        <div
          className="absolute inset-0 bg-cover bg-center h-full rounded-t-3xl"
          style={{
            backgroundImage: `url(${fullCoverUrl})`,
          }}
        />
        <div
          className="absolute inset-0 rounded-t-3xl"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        />

        <div className="relative z-10  grid  lg:grid-cols-[1fr_2fr] lg:gap-48 place-items-center text-center lg:text-start h-full backdrop-blur-lg bg-white/30 rounded-t-3xl">
          <Icon
            name="arrow-long-right"
            width={42}
            height={42}
            className="text-background  rotate-180 absolute top-8 left-8 z-20"
            onClick={() => navigate(-1)}
          />

          <img
            src={fullCoverUrl}
            alt={book?.title || "Book cover"}
            className="w-[300px] lg:absolute pt-24 lg:pt-0 lg:mt-0  lg:w-[350px] lg:h-[500px] lg:left-20 lg:top-30 lg:z-20"
          />

          <div className="flex flex-col items-center  lg:items-start justify-center py-8  gap-4 text-background z-20 lg:mr-20 ">
            <h2 className=" text-2xl md:text-4xl font-semibold">
              {book.title}
            </h2>
            <p className=" text-2xl md:text-[32px]">{book.author}</p>
            <p className="text-2xl font-light">
              {book.authorbooksamount} Publications
            </p>
            <StarRating
              color="background"
              defaultRating={Math.round(parseFloat(book?.averagerating ?? "0"))}
              readOnly={true}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mt-12 lg:mt-0 lg:row-start-2 lg:col-2">
        <Button
          type="transparent"
          buttonText={isBookmarked ? "BOOKMARKED" : "ADD TO BOOKMARK"}
          className="border border-accent flex items-center justify-center gap-2"
          onClick={handleAddBookmark}
        >
          <Icon
            name="saved-icon"
            width={24}
            height={32}
            className="text-accent"
          />
        </Button>
        <Button
          type="transparent"
          buttonText="I READ IT NOW!"
          className="border border-accent flex items-center justify-center gap-2"
        />
        <Button
          type="transparent"
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
        <div className="flex gap-4 flex-wrap mt-18">
          {genres.length > 0 &&
            genres.map((genre: string) => (
              <Button
                key={genre}
                type="transparent"
                buttonText={genre}
                className="border-accent text-[20px] rounded-full text-center"
              />
            ))}
        </div>
      </div>
      {books.filter((b) => b.author === book.author && b.id !== book.id)
        .length > 0 && (
        <BookSection
          title="This Author's Books"
          books={books.filter(
            (b) => b.author === book.author && b.id !== book.id,
          )}
          limit={3}
          className="lg:row-end-4 lg:col-span-1 lg:place-self-start"
        />
      )}
    </section>
  );
};

export default BookPage;
