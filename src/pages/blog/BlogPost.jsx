import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import { blogPosts } from './blogData';
import './BlogPost.css';

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="blog-post-not-found">
        <h1>Post Not Found</h1>
        <Link to="/#blog" className="btn-primary">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="blog-post-page">
      <motion.article
        className="blog-post-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="blog-post-header">
          <Link to="/#blog" className="back-link">
            <ArrowLeft size={20} />
            <span>Back to Blog</span>
          </Link>

          <div className="post-category-badge">{post.category}</div>
          
          <h1 className="post-title">{post.title}</h1>
          
          <div className="post-meta">
            <span className="meta-item">
              <Calendar size={16} />
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              })}
            </span>
            <span className="meta-item">
              <Clock size={16} />
              {post.readTime}
            </span>
            <span className="meta-item">
              <Tag size={16} />
              Ankit Biswas
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="blog-post-content">
          {post.content}
        </div>

        {/* Footer */}
        <div className="blog-post-footer">
          <Link to="/#blog" className="btn-secondary">
            <ArrowLeft size={18} />
            Back to All Posts
          </Link>
          <Link to="/#contact" className="btn-primary">
            Get in Touch
          </Link>
        </div>
      </motion.article>
    </div>
  );
};

export default BlogPost;

