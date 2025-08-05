import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import BookList from "../ui/Books";
import Loader from "../ui/Loader/Loader";
import Pagination from "../ui/Pagination";
import type { AppDispatch, RootState } from "../store";
import { fetchBooks, setCurrentPage } from "../store/slices/BooksSlice";

const SearchBookPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { books, total, loading, error, currentPage, booksPerPage } =
    useSelector((state: RootState) => state.books);

  useEffect(() => {
    dispatch(fetchBooks({ page: currentPage, limit: booksPerPage }));
  }, [dispatch, currentPage, booksPerPage]);

  const totalPages = Math.ceil(total / booksPerPage);

  const handlePageChange = (pageNumber: number) => {
    dispatch(setCurrentPage(pageNumber));
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      dispatch(setCurrentPage(currentPage + 1));
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      dispatch(setCurrentPage(currentPage - 1));
    }
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p className="text-red-500 text-center mt-24">Error: {error}</p>;
  }

  return (
    <section className="h-full lg:px-12 mt-24">
      <>
        <div className="flex items-start justify-between">
          <h2 className="text-4xl font-semibold ">
            Find Your Next Read,{" "}
            <span className="block mt-2">
              Add It to Your Growing Collection.
            </span>
          </h2>
          <span className="text-2xl">
            For now available: <strong>{total} books</strong>
          </span>
        </div>

        <BookList books={books} />
        <Pagination
          onPageChange={handlePageChange}
          currentPage={currentPage}
          totalPages={totalPages}
          onNextPage={handleNextPage}
          onPrevPage={handlePrevPage}
        />
      </>
    </section>
  );
};

export default SearchBookPage;
