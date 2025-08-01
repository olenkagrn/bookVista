import React, { useEffect, useState } from "react";
import BookList from "../ui/Books";
import Icon from "../kit/Icon";
import type BookProps from "../models/BookProps";
import { BACK_URL } from "../constants";
import axios from "axios";
import Loader from "../ui/Loader/Loader";

const SearchBookPage = () => {
  const [books, setBooks] = useState<BookProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalBooks, setTotalBooks] = useState(0);

  const booksPerPage = 18;

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${BACK_URL}/books?page=${currentPage}&limit=${booksPerPage}`,
        );
        console.log(response);
        setBooks(response.data.books);
        setTotalBooks(response.data.total);
      } catch {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, [currentPage, booksPerPage]);

  const totalPages = Math.ceil(totalBooks / booksPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const getVisiblePages = (totalPages: number, currentPage: number) => {
    const pages: (number | string)[] = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", currentPage, "...", totalPages);
      }
    }

    return pages;
  };

  const visiblePages = getVisiblePages(totalPages, currentPage);

  const handlePageClick = (page: number | string) => {
    if (typeof page === "number" && page !== currentPage) {
      setCurrentPage(page);
    }
  };

  return (
    <section className="h-full lg:px-12 mt-24">
      {loading ? (
        <Loader />
      ) : (
        <>
          <h2 className="text-4xl font-semibold ">
            Find Your Next Read,{" "}
            <span className="block mt-2">
              Add It to Your Growing Collection.
            </span>
          </h2>

          <BookList books={books} />
          <section className="flex gap-12 items-center justify-center mt-24">
            <Icon
              name="arrow-right"
              className={`rotate-180 ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
              width={32}
              height={32}
              onClick={handlePrevPage}
            />
            <div className="flex gap-2.5 font-semibold ">
              {visiblePages.map((page, idx) => (
                <button
                  key={idx}
                  onClick={() => handlePageClick(page)}
                  disabled={page === "..."}
                  className={`w-10 h-10 flex items-center justify-center rounded-full 
        ${
          page === currentPage ? "bg-accent text-background" : ""
        } ${page === "..." ? "cursor-default" : "cursor-pointer"}`}
                >
                  {page}
                </button>
              ))}
            </div>

            <Icon
              name="arrow-right"
              width={32}
              height={32}
              className={`${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
              onClick={handleNextPage}
            />
          </section>
        </>
      )}
    </section>
  );
};

export default SearchBookPage;
