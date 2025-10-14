import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import './Projects.css';

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      className={`project-card glass ${index % 2 === 0 ? 'project-left' : 'project-right'}`}
      style={{ opacity }}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <motion.div className="project-content" style={{ y }}>
        <div className="project-header">
          <span className="project-status" style={{ 
            background: project.status === 'Ongoing' 
              ? 'rgba(251, 191, 36, 0.2)' 
              : 'rgba(16, 185, 129, 0.2)',
            color: project.status === 'Ongoing' ? '#fbbf24' : '#10b981'
          }}>
            {project.status}
          </span>
          <h3>{project.title}</h3>
        </div>
        
        <p className="project-description">{project.description}</p>
        
        <div className="project-tech">
          {project.tech.map((tech) => (
            <span key={tech} className="tech-badge">{tech}</span>
          ))}
        </div>

        <div className="project-links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
              <Github size={18} />
              <span>Code</span>
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
              <ExternalLink size={18} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </motion.div>

      <motion.div className="project-visual" style={{ y: useTransform(y, [100, -100], [-50, 50]) }}>
        <div className="project-glow"></div>
        <div className="project-icon">{project.icon}</div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'CollabWriter',
      description: 'A collaborative web-based IDE offering real-time coding, terminal management, AI-powered features, and full cloud integration for seamless development.',
      tech: ['React', 'Node.js', 'WebSocket', 'Google Vertex AI', 'Docker'],
      status: 'Ongoing',
      icon: '💻',
      github: '#',
      live: '#'
    },
    {
      title: 'Hireasy',
      description: 'A student freelancing platform helping peers earn side income through small gigs, connecting talent with opportunities.',
      tech: ['MongoDB', 'Express', 'React', 'Node.js'],
      status: 'Completed',
      icon: '💼',
      github: '#',
      live: '#'
    },
    {
      title: 'Body Gesture Recognition',
      description: 'Deep learning project using OpenCV & Mediapipe to detect gestures and facial patterns for human-computer interaction.',
      tech: ['Python', 'TensorFlow', 'OpenCV', 'Mediapipe'],
      status: 'Completed',
      icon: '🤖',
      github: '#'
    },
    {
      title: 'Small Language Model',
      description: 'A minimal AI model built with Flask + TensorFlow, featuring a React UI interface for natural language processing.',
      tech: ['Flask', 'TensorFlow', 'React', 'Python'],
      status: 'Completed',
      icon: '🧠',
      github: '#'
    },
    {
      title: 'CGU Induction System',
      description: 'Management system built for C.V. Raman Global University\'s student induction program with comprehensive admin controls.',
      tech: ['Spring Boot', 'React', 'MySQL', 'Java'],
      status: 'Completed',
      icon: '🎓',
      github: '#'
    }
  ];

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="projects-container">
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">What I've Built</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-description">
            A curated selection of my best work — from AI-powered applications to full-stack platforms
          </p>
        </motion.div>

        <div className="projects-list">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <motion.div
          className="projects-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p>Want to see more of my work?</p>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn-primary">
            View All Projects
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

