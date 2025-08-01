import React from "react";
import type BookProps from "../../../models/BookProps";
import { BACK_URL } from "../../../constants";

const Book: React.FC<BookProps> = ({ coverurl, title, author }) => {
  const fullCoverUrl = `${BACK_URL}${coverurl}`;

  return (
    <div className="flex flex-col items-center text-center w-44">
      <img
        src={fullCoverUrl}
        alt={title}
        className="w-full object-fit  rounded-md shadow-md mb-2  h-60"
      />
      <h3 className="text-sm font-medium text-dark-default ">
        {" "}
        {title.length > 20 ? title.slice(0, 20) + "..." : title}
      </h3>{" "}
      <p className="text-xs text-gray-600">{author}</p>
    </div>
  );
};

export default Book;
