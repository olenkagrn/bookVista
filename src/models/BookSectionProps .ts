import type BookProps from "./BookProps";

export default interface BookSectionProps {
  title: string;
  books: BookProps[];
  limit?: number;
  className?: string;
}
