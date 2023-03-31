import { AuthorCardModel } from 'src/app/author/models/author-card.model';
import { Category } from 'src/app/category/models/category';
import { Rating } from './rating';

export interface BookCardModel {
  _id: string;
  author_name: string;
  title: string;
  coverImage: string;
  summary: string;
  genre: Category[];
  avgRating: number;
  ratings: Rating[];
}
