import { useState } from "react";
import Star from "./Star";

interface StarRatingProps {
  maxRating?: number;
  size?: number;
  color?: string;
  defaultRating?: number;
  onSetRating?: (rating: number) => void;
  readOnly?: boolean;
}

const StarRating = ({
  maxRating = 5,
  size = 32,
  color = "#ff4f5b",
  onSetRating,
  defaultRating = 0,
  readOnly = false,
}: StarRatingProps) => {
  const [rating, setRating] = useState(defaultRating);
  const [hoverRating, setHoverRating] = useState<number | null>(null);

  const handleRating = (newRating: number) => {
    if (readOnly) return;
    setRating(newRating);
    if (onSetRating) onSetRating(newRating);
  };

  return (
    <div className="flex gap-2 items-center">
      <div className="flex">
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            onRate={() => handleRating(i + 1)}
            onHover={() => !readOnly && setHoverRating(i + 1)}
            onLeave={() => !readOnly && setHoverRating(null)}
            size={size}
            color={color}
            full={i < (hoverRating ?? rating)}
          />
        ))}
      </div>
      <p className="">{hoverRating ?? rating}</p>
    </div>
  );
};

export default StarRating;
