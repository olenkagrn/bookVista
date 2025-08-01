export default interface BookProps {
  id: number;
  title: string;
  coverurl: string;
  author: string;
  authorBooksAmount?: number;
  averageRating?: number;
  genres?: string[];
  description?: string;
}
