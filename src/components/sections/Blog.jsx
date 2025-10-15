import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { BookOpen, Calendar, ArrowRight, Clock } from 'lucide-react';
import { blogPosts } from '../../pages/blog/blogData';
import './Blog.css';

const Blog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="blog" className="blog" ref={ref}>
      <div className="blog-container">
        <motion.div
          className="blog-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Insights & Learning</span>
          <h2 className="section-title">Blog & Articles</h2>
          <p className="section-description">
            Sharing my experiences, learnings, and insights on web development, AI, and technology
          </p>
        </motion.div>

        <div className="blog-posts-grid">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className={`blog-post-card glass ${post.featured ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {post.featured && (
                <div className="featured-badge">
                  <span>Featured</span>
                </div>
              )}
              
              <div className="blog-post-header">
                <span className="blog-category">{post.category}</span>
                <div className="blog-meta">
                  <span className="blog-date">
                    <Calendar size={14} />
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </span>
                  <span className="blog-read-time">
                    <Clock size={14} />
                    {post.readTime}
                  </span>
                </div>
              </div>

              <h3 className="blog-post-title">{post.title}</h3>
              <p className="blog-post-excerpt">{post.excerpt}</p>

              <Link to={`/blog/${post.slug}`} className="blog-read-more">
                Read Article
                <ArrowRight size={16} />
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="blog-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <BookOpen size={40} className="blog-cta-icon" />
          <p>More articles coming soon! Stay tuned for insights on web development, AI, and my journey.</p>
          <button className="btn-primary">
            Subscribe to Newsletter
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;

