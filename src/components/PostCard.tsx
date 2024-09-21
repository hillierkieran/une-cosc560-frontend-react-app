import { Link } from 'react-router-dom';
import { PostCardProps } from '../types/PostCardProps';
import styles from '../styles/PostCard.module.css';

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className={styles.card}>
      <Link to={`/post/${post.id}`} className={styles.link}>
        <h2 className={styles.title}>{post.title}</h2>
        <p className={styles.author}><strong>Author:</strong> {post.author}</p>
        <p className={styles.content}>{post.content.substring(0, 100)}...</p>
      </Link>
    </div>
  );
};

export default PostCard;
