import React, { useState, useEffect } from 'react';
import './Mainfeed.css';
import Post from './Post';
const MainFeed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/api/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return <Post posts={posts} />;
};

export default MainFeed;
