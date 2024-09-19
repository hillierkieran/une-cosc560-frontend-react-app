import { Link } from 'react-router-dom';
import { PostCardProps } from '../types/PostCardProps';

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <li className="post-card">
      <Link to={`/post/${post.id}`} state={{ post }}>
        <h2>{post.title}</h2>
      </Link>
      <p>{post.author}</p>
      <p>{post.content.substring(0, 100)}...</p>
    </li>
  );
};

export default PostCard;
