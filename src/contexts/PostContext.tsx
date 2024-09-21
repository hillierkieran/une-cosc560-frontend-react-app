import { createContext, useState, useContext, ReactNode } from 'react';
import { PostContextType } from '../types/PostContextType';
import { Post } from '../types/Post';

// Create a Context for Posts, with a default value of `undefined`.
const PostContext = createContext<PostContextType | undefined>(undefined);

// Custom hook to easily access the PostContext.
export const usePostContext = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error('usePostContext must be used within a PostProvider');
  }
  return context;
};

// Provider component to wrap around components that need access to the posts state.
export const PostProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<Post[] | null>(null);

  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostContext.Provider>
  );
};
