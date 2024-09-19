import { useEffect } from 'react';
import { usePostContext } from '../contexts/PostContext';
import { useFetchData } from '../hooks/useFetchData';
import { fetchPosts } from '../services/api';
import PostCard from '../components/PostCard';
import { Post } from '../types/Post';

const PostList = () => {
  // Access the posts from cache using the PostContext
  const { posts, setPosts } = usePostContext();

  // Fetch posts if not available in cache
  const {
    data: fetchedPosts,
    loading,
    error,
  } = useFetchData(
    fetchPosts, // Fetch all posts
    [],
    !posts // Don't fetch if posts are already available
  );

  // If posts are fetched, cache them in the PostContext
  useEffect(() => {
    if (fetchedPosts && !posts) {
      setPosts(fetchedPosts);
    }
  }, [fetchedPosts, posts, setPosts]);

  // Display loading message while data is being fetched
  if (loading && !posts) return <p>Loading...</p>;

  // Display error message if an error occurred
  if (error) return <p>{error}</p>;

  // Render the list of posts
  return (
    <div>
      <h1>Post List</h1>
      <ul>
        {(posts || fetchedPosts)?.map((post: Post) => (
          <PostCard key={post.id} post={post} />
        )) || <p>No posts available.</p>}
      </ul>
    </div>
  );
};

export default PostList;
