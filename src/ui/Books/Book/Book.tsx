import React from "react";

interface BookProps {
  coverUrl: string;
  title: string;
  author: string;
}

const Book: React.FC<BookProps> = ({ coverUrl, title, author }) => {
  return (
    <div className="flex flex-col items-center text-center w-44 truncate">
      <img
        src={coverUrl}
        alt={title}
        className="w-full object-fit  rounded-md shadow-md mb-2  max-h-60"
      />
      <h3 className="text-sm font-medium text-[#2A2A2A] line-clamp-2 ">
        {title}
      </h3>{" "}
      <p className="text-xs text-gray-600">{author}</p>
    </div>
  );
};

export default Book;
