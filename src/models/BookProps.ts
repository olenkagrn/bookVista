export default interface BookProps {
  id: number;
  title: string;
  coverurl: string;
  author: string;
  authorbooksamount?: number;
  averagerating?: string;
  genres?: string[];
  description?: string;
}
