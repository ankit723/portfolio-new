import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Brain, Rocket, Heart, Infinity, Sparkles } from 'lucide-react';
import './About.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { icon: Code, value: '4+', label: 'Years Coding' },
    { icon: Rocket, value: '20+', label: 'Projects Delivered' },
    { icon: Brain, value: '5+', label: 'Companies Worked' },
    { icon: Heart, value: '100+', label: 'Students Mentored' },
  ];

  const beliefs = [
    {
      icon: Infinity,
      title: 'Beyond Code',
      description: "I'm not just a coder — I'm an observer of systems: digital, cosmic, and human.",
    },
    {
      icon: Brain,
      title: 'Driven by Curiosity',
      description: "I believe technology isn't just about efficiency — it's about imagination and progress.",
    },
    {
      icon: Sparkles,
      title: 'Chase Understanding',
      description: "I don't chase trends, I chase understanding. I explore the unproven and build the unseen.",
    },
  ];

  return (
    <section id="about" className="about" ref={ref}>
      <div className="about-container">
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Get to know me</span>
          <h2 className="section-title">About Me</h2>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-story glass"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="about-photo-container">
              <img 
                src="/assets/ankit-biswas.jpg" 
                alt="Ankit Biswas - Full Stack Web Developer and Founder of Tech Morphers" 
                className="about-photo"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
            <h3>My Journey</h3>
            <p>
              I'm <strong>Ankit Biswas</strong> — a passionate developer and technology enthusiast 
              with a deep curiosity about how things work. Born and raised in <strong>Varanasi</strong>, 
              I'm currently pursuing my B.Tech in Computer Science at <strong>C.V. Raman Global University</strong>.
            </p>
            <p>
              I've been programming since school, and over the past <strong>4 years</strong>, I've turned 
              that passion into professional experience. I specialize in <strong>Full Stack Web Development</strong> and 
              software design, having delivered over <strong>20+ real-world projects</strong> and collaborated with 
              multiple companies as an intern and freelancer.
            </p>
            <p>
              I'm the founder of <strong className="gradient-text">Tech Morphers</strong>, a development 
              studio focused on building modern web and app solutions. I also lead and mentor other developers 
              through boot camps and internships.
            </p>
            <p>
              Beyond tech, I'm deeply interested in scientific, fictional, and philosophical concepts like 
              <em> time travel, interstellar theory, consciousness, and the future of human evolution</em>. 
              I'm not driven by materialistic goals — I build because I love creating things that matter.
            </p>
          </motion.div>

          <motion.div
            className="about-stats-container"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="about-stats">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    className="stat-card glass"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="stat-icon">
                      <Icon size={24} />
                    </div>
                    <div className="stat-value gradient-text">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>

            <div className="about-quick-facts glass">
              <h4>Quick Facts</h4>
              <ul>
                <li><strong>Age:</strong> 20</li>
                <li><strong>From:</strong> Varanasi, UP, India</li>
                <li><strong>Currently:</strong> Bhubaneshwar</li>
                <li><strong>Role:</strong> Full Stack Developer</li>
                <li><strong>Company:</strong> Tech Morphers (Founder)</li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Personality & Ideology Section */}
        <motion.div
          className="ideology-section"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="ideology-title gradient-text">My Philosophy</h3>
          <div className="beliefs-grid">
            {beliefs.map((belief, index) => {
              const Icon = belief.icon;
              return (
                <motion.div
                  key={belief.title}
                  className="belief-card glass"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1 + index * 0.15 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="belief-icon">
                    <Icon size={28} />
                  </div>
                  <h4>{belief.title}</h4>
                  <p>{belief.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

