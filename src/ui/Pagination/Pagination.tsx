import Icon from "../../kit/Icon";
import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onNextPage: () => void;
  onPrevPage: () => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  onNextPage,
  onPrevPage,
}) => {
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
      onPageChange(page);
    }
  };
  return (
    <section className="flex gap-12 items-center justify-center mt-24">
      <Icon
        name="arrow-right"
        className={`rotate-180 ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
        width={32}
        height={32}
        onClick={onPrevPage}
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
        onClick={onNextPage}
      />
    </section>
  );
};

export default Pagination;
