import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../store/index';

const Post = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postsReducer.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
    </>
  );
};

export default Post;
