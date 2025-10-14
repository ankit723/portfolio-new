import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BookOpen, Calendar, ArrowRight, Clock } from 'lucide-react';
import './Blog.css';

const Blog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Placeholder blog posts
  const blogPosts = [
    {
      id: 1,
      title: 'Building Scalable Web Applications with MERN Stack',
      excerpt: 'Learn how to architect and build production-ready applications using MongoDB, Express, React, and Node.js...',
      date: '2025-01-15',
      readTime: '8 min read',
      category: 'Web Development',
      slug: 'building-scalable-mern-apps',
      featured: true
    },
    {
      id: 2,
      title: 'Getting Started with Machine Learning in Web Apps',
      excerpt: 'Integrate AI and ML capabilities into your web applications with TensorFlow.js and practical examples...',
      date: '2025-01-10',
      readTime: '12 min read',
      category: 'AI/ML',
      slug: 'ml-in-web-apps',
      featured: true
    },
    {
      id: 3,
      title: 'The Journey from Student to Founder: Tech Morphers Story',
      excerpt: 'How I went from learning to code in school to founding my own development studio and managing client projects...',
      date: '2025-01-05',
      readTime: '6 min read',
      category: 'Career',
      slug: 'student-to-founder-journey',
      featured: false
    },
    {
      id: 4,
      title: 'Optimizing React Performance: Tips from Real Projects',
      excerpt: 'Practical performance optimization techniques I learned while building 20+ production applications...',
      date: '2024-12-28',
      readTime: '10 min read',
      category: 'React',
      slug: 'react-performance-tips',
      featured: false
    }
  ];

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

              <a href={`/blog/${post.slug}`} className="blog-read-more">
                Read Article
                <ArrowRight size={16} />
              </a>
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

