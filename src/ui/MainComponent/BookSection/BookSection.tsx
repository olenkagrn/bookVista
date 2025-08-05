import Icon from "../../../kit/Icon";
import React from "react";
import Book from "../../Books/Book/Book";
import type BooksProps from "../../../models/BookSectionProps ";
import { useEffect } from "react";
const BookSection: React.FC<BooksProps> = ({
  title,
  books,
  limit,
  className = "",
}) => {
  const [visibleCount, setVisibleCount] = React.useState(1);

  const updateVisibleCount = () => {
    const width = window.innerWidth;
    if (width < 480) setVisibleCount(1);
    else if (width < 768) setVisibleCount(2);
    else if (width < 1024) setVisibleCount(3);
    else setVisibleCount(4);
  };

  useEffect(() => {
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const booksToDisplay = limit ? books.slice(0, visibleCount) : books;

  return (
    <section className={`md:inline-block  ${className}`}>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl md:text-2xl  font-semibold text-wrap text-dark-default">
          {title}
        </h2>
        <Icon
          name="arrow-right"
          className="text-dark-default cursor-pointer "
          width={32}
          height={48}
        />
      </div>

      <div className="flex overflow-hidden gap-6 items-center justify-center md:justify-start">
        {booksToDisplay.map((book) => (
          <Book
            id={book.id}
            key={book.id}
            coverurl={book.coverurl}
            title={book.title}
            author={book.author}
            averagerating={book.averagerating}
          />
        ))}
      </div>
    </section>
  );
};

export default BookSection;
