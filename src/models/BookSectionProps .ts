import type BookItem from "./BookItem";

export default interface BookSectionProps {
  title: string;
  books: BookItem[];
  limit?: number;
}
