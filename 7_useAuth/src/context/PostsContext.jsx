import { createContext, useState } from 'react';

export const PostsContext = createContext();

export const PostContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  return <PostsContext.Provider value={{ posts, setPosts }}>{children}</PostsContext.Provider>;
};
