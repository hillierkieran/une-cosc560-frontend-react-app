import { PostCardProps } from '../types/PostCardProps';

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <li className="post-card">
      {/* Each post title links to its detail page */}
      <a href={`/posts/${post.id}`}>
        <h2>{post.title}</h2>
      </a>

      {/* Show a snippet of the content */}
      <p>{post.content.substring(0, 100)}...</p>
    </li>
  );
};

export default PostCard;
