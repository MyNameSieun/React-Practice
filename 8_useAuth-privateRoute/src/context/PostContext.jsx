import React, { createContext, useState, useEffect } from 'react';
import { fetchPosts, createPost } from '../api/posts';

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await fetchPosts();
      setPosts(data);
    };
    getPosts();
  }, []);

  const handleCreatePost = async (data) => {
    const newPost = await createPost(data);
    setPosts([...posts, newPost]);
  };

  return <PostContext.Provider value={{ posts, handleCreatePost }}>{children}</PostContext.Provider>;
};
