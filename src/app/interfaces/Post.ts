import { User } from './User';

export interface Post {
  id: number;
  content: string;
  images: Array<string>;
  user: User;
}
