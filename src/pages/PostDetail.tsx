import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { usePostContext } from '../contexts/PostContext';
import { useFetchData } from '../hooks/useFetchData';
import { fetchPostById } from '../services/api';
import { Post } from '../types/Post';

const PostDetail = () => {
  // Access the posts from cache using the PostContext
  const { posts } = usePostContext();

  // Get the post ID from the URL parameters
  const { id } = useParams<{ id: string }>();

  // If posts cached, search for post by ID
  const cachedPost = posts?.find((p) => p.id === id);

  // Store the post in state, initialise with cachedPost if available
  const [post, setPost] = useState<Post | undefined>(cachedPost);

  // Fetch posts if not available in cache
  const {
    data: fetchedPost,
    loading,
    error,
  } = useFetchData<Post>(
    () => fetchPostById(id!), // Fetch post by ID
    [id], // Re-run if `id` changes
    !post // Don't fetch if post is already available
  );

  // If post is fetched, set post in state
  useEffect(() => {
    if (fetchedPost && !post) {
      setPost(fetchedPost);
    }
  }, [fetchedPost, post]);

  // Get the navigate function from the router
  const navigate = useNavigate();

  // Function to navigate back to the previous page
  const handleBackClick = () => {
    navigate(-1); // Goto previous page in browser history
  };

  // Display loading message while data is being fetched
  if (loading && !posts) return <p>Loading...</p>;

  // Display error message if an error occurred
  if (error) return <p>{error}</p>;

  // Render the post details
  return post ? (
    <div>
      <button onClick={handleBackClick}>Back</button>
      <h1>{post.title}</h1>
      <p>{post.author}</p>
      <p>{post.content}</p>
    </div>
  ) : (
    <p>Post details are not available.</p>
  );
};

export default PostDetail;
