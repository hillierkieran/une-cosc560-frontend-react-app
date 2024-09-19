import { useEffect, useState } from 'react';
import { fetchPosts } from '../services/api';
import { Post } from '../types/Post';
import PostCard from '../components/PostCard';

const PostList = () => {
  // State to hold the list of posts
  const [posts, setPosts] = useState<Post[]>([]);

  // State to manage the loading status
  const [loading, setLoading] = useState(true);

  // State to store error messages
  const [error, setError] = useState<string | null>(null);

  // Effect to load posts when the component mounts
  useEffect(() => {
    const loadPosts = async () => {
      try {
        // Call the API to fetch posts
        const posts = await fetchPosts();

        // If successful, update the posts state
        if (posts) {
          setPosts(posts);
        } else {
          setError('Failed to load posts.');
        }
      } catch (err) {
        // If there's an error, update the error state
        setError('Error loading posts.');
      } finally {
        // Mark loading as complete once the fetch is done
        setLoading(false);
      }
    };

    loadPosts();
  }, []); // Empty dependency array to run only once when the component mounts

  // Display loading message while data is being fetched
  if (loading) return <p>Loading...</p>;

  // Display error message if an error occurred
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Post List</h1>

      {/* Display the list of posts */}
      <ul>
        {posts.length > 0 ? (
          posts.map((post: Post) => <PostCard key={post.id} post={post} />)
        ) : (
          <p>No posts available.</p> // Display if no posts are found
        )}
      </ul>
    </div>
  );
};

export default PostList;
