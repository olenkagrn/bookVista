import React from "react";
import type BookProps from "../../../models/BookProps";
import { BACK_URL } from "../../../constants";
import Button from "../../../kit/Button";
import { useNavigate } from "react-router";
import StarRating from "../../StartRating";

const Book: React.FC<BookProps> = ({
  id,
  coverurl,
  title,
  author,
  averagerating,
}) => {
  const fullCoverUrl = `${BACK_URL}${coverurl}`;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/books/${id}`);
  };

  const rating = Math.round(parseFloat(averagerating ?? "0"));

  return (
    <div className=" flex flex-col items-center text-center w-44 ">
      <div className="relative group   w-full h-60 mb-2">
        <img
          src={fullCoverUrl}
          alt={title}
          className="w-full h-full object-fill rounded-md shadow-md group-hover:blur-[1px] group-hover:opacity-[80%] "
        />

        <Button
          buttonText="Show more"
          type="transparent"
          className="
            whitespace-nowrap 
            absolute z-1000 
            text-accent 
            bg-amber-50 
            bottom-1 left-1/2
            -translate-x-1/2 
            transform-gpu 
            shadow-md 
            opacity-0 
            group-hover:opacity-100
            transition-opacity duration-300
            w-[94%]
          "
          onClick={handleClick}
        />
      </div>
      <h3 className="text-sm font-medium text-dark-default ">
        {" "}
        {title.length > 20 ? title.slice(0, 20) + "..." : title}
      </h3>{" "}
      <p className="text-xs text-gray-600 mb-2">{author}</p>
      <StarRating defaultRating={rating} readOnly={true} size={16} />
    </div>
  );
};

export default Book;
