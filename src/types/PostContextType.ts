import { Post } from './Post';

export interface PostContextType {
  posts: Post[] | null;
  setPosts: React.Dispatch<React.SetStateAction<Post[] | null>>;
}
