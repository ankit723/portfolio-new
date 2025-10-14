import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Calendar, TrendingUp } from 'lucide-react';
import './Experience.css';

const ExperienceCard = ({ experience, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      className="experience-item"
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <motion.div
        className="timeline-dot"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
      >
        <Briefcase size={20} />
      </motion.div>

      <motion.div
        className="experience-card glass"
        whileHover={{ scale: 1.02, y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <div className="experience-header">
          <div className="experience-title-group">
            <h3>{experience.role}</h3>
            <p className="company-name gradient-text">{experience.company}</p>
          </div>
          <div className="experience-period">
            <Calendar size={16} />
            <span>{experience.period}</span>
          </div>
        </div>

        <ul className="experience-highlights">
          {experience.highlights.map((highlight, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.5 + idx * 0.1 }}
            >
              <TrendingUp size={14} className="highlight-icon" />
              <span>{highlight}</span>
            </motion.li>
          ))}
        </ul>

        {experience.tech && (
          <div className="experience-tech">
            {experience.tech.map((tech) => (
              <span key={tech} className="tech-pill">{tech}</span>
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      role: 'Web Developer Intern',
      company: 'Iotron Technologies',
      period: 'Oct 2024 – Jan 2025',
      highlights: [
        'Built a progressive admin panel with advanced features',
        'Improved user experience by 40%',
        'Implemented responsive design patterns'
      ],
      tech: ['React', 'Node.js', 'MongoDB']
    },
    {
      role: 'Software Developer Intern',
      company: 'Arbre Creations',
      period: 'Feb 2024 – Dec 2024',
      highlights: [
        'Migrated legacy projects to Laravel framework',
        'Achieved 50% faster deployment times',
        'Optimized database queries and backend architecture'
      ],
      tech: ['Laravel', 'PHP', 'MySQL']
    },
    {
      role: 'Full Stack Developer Intern',
      company: 'Finanalyz',
      period: 'June 2024 – Sept 2024',
      highlights: [
        'Delivered scalable full-stack application',
        'Improved operational efficiency by 40%',
        'Implemented RESTful API architecture'
      ],
      tech: ['MERN Stack', 'Docker', 'AWS']
    },
    {
      role: 'Full Stack Developer Intern',
      company: 'Mudslide Creations',
      period: 'Dec 2023 – Mar 2024',
      highlights: [
        'Enhanced backend security measures',
        'Improved system functionality by 55%',
        'Implemented authentication and authorization systems'
      ],
      tech: ['Node.js', 'Express', 'PostgreSQL']
    },
    {
      role: 'Full Stack Developer Intern',
      company: 'Arthalab',
      period: 'May 2023 – Dec 2023',
      highlights: [
        'Migrated entire stack from Flask to MERN',
        'Improved performance by 50%',
        'Optimized databases handling 100K+ records'
      ],
      tech: ['React', 'Node.js', 'MongoDB', 'Flask']
    }
  ];

  const achievements = [
    'Conducted & mentored 2 web dev bootcamps (80–100 attendees each)',
    'Built 20+ real-world applications',
    'Founded Tech Morphers, managing client work & interns',
    'Recognized for technical leadership & mentoring',
    'Pursuing GATE 2026/2027 to target ISRO, BARC, or DRDO'
  ];

  return (
    <section id="experience" className="experience" ref={ref}>
      <div className="experience-container">
        <motion.div
          className="experience-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Professional Journey</span>
          <h2 className="section-title">Experience & Achievements</h2>
          <p className="section-description">
            4+ years of building exceptional software across multiple companies and projects
          </p>
        </motion.div>

        <div className="timeline">
          <div className="timeline-line"></div>
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.company} experience={exp} index={index} />
          ))}
        </div>

        <motion.div
          className="achievements-section glass"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="gradient-text">Key Achievements</h3>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="achievement-item"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="achievement-number">{index + 1}</div>
                <p>{achievement}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

