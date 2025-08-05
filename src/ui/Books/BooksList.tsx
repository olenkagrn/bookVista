import React from "react";
import Book from "./Book/Book";

import type BookProps from "../../models/BookProps";

interface BookListProps {
  books: BookProps[];
}

const BookList: React.FC<BookListProps> = ({ books }) => {
  return (
    <section className="flex gap-12 flex-wrap items-center justify-center mt-16  ">
      {books.map((book) => (
        <Book
          id={book.id}
          key={book.id}
          coverurl={book.coverurl}
          title={book.title}
          author={book.author}
          averagerating={book.averagerating}
        />
      ))}
    </section>
  );
};

export default BookList;
