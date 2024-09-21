import { useEffect } from 'react';
import { usePostContext } from '../contexts/PostContext';
import { useFetchData } from '../hooks/useFetchData';
import { fetchPosts } from '../services/api';
import PostCard from '../components/PostCard';
import Header from '../components/Header';
import Error from '../components/Error';
import Loading from '../components/Loading';
import { Post } from '../types/Post';
import styles from '../styles/PostList.module.css';

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
  if (loading && !posts) return <Loading />;

  // Display error message if an error occurred
  if (error) return <Error message={error} />;

  // Render the list of posts
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.heading}>Post List</h1>
        <div className={styles.container}>
          {posts?.map((post: Post) => (
            <PostCard key={post.id} post={post} />
          )) || <p>No posts available.</p>}
        </div>
      </main>
    </>
  );
};

export default PostList;
