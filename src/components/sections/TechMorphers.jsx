import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Rocket, Users, Code, ExternalLink, Calculator, Calendar, Sparkles } from 'lucide-react';
import './TechMorphers.css';

const TechMorphers = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { icon: Code, value: '20+', label: 'Projects Delivered' },
    { icon: Users, value: '15+', label: 'Happy Clients' },
    { icon: Sparkles, value: '100%', label: 'Success Rate' },
  ];

  const services = [
    {
      icon: '🌐',
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies'
    },
    {
      icon: '📱',
      title: 'Mobile Apps',
      description: 'Cross-platform mobile solutions for iOS and Android'
    },
    {
      icon: '🤖',
      title: 'AI Integration',
      description: 'Intelligent features powered by machine learning and AI'
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Scalable cloud architecture and deployment strategies'
    }
  ];

  const links = [
    {
      icon: ExternalLink,
      title: 'Visit Tech Morphers',
      description: 'Explore our main website',
      href: 'https://techmorphers.com',
      color: '#00d4ff'
    },
    {
      icon: Calculator,
      title: 'Project Estimator',
      description: 'Get instant project cost estimate',
      href: 'https://techmorphers.com/estimator',
      color: '#8b5cf6'
    },
    {
      icon: Calendar,
      title: 'Schedule a Call',
      description: 'Book a free consultation',
      href: 'https://techmorphers.com/schedule',
      color: '#10b981'
    }
  ];

  return (
    <section id="tech-morphers" className="tech-morphers" ref={ref}>
      <div className="tech-morphers-container">
        <motion.div
          className="tech-morphers-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">My Venture</span>
          <h2 className="section-title">
            <span className="gradient-text">Tech Morphers</span>
          </h2>
          <p className="tech-morphers-tagline">
            Transforming Ideas into Digital Reality
          </p>
          <p className="section-description">
            A development studio I founded to deliver cutting-edge web and mobile solutions.
            We help businesses and startups bring their visions to life with modern technology.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="tech-morphers-stats"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                className="tm-stat-card glass"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="tm-stat-icon">
                  <Icon size={28} />
                </div>
                <div className="tm-stat-value gradient-text">{stat.value}</div>
                <div className="tm-stat-label">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="tech-morphers-services"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3>What We Do</h3>
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="service-card glass"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <div className="service-icon">{service.icon}</div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Links */}
        <motion.div
          className="tech-morphers-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3>Get Started with Tech Morphers</h3>
          <div className="tm-links-grid">
            {links.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.title}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tm-link-card glass"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  style={{ borderColor: link.color }}
                >
                  <div className="tm-link-icon" style={{ background: link.color + '20', color: link.color }}>
                    <Icon size={24} />
                  </div>
                  <div className="tm-link-content">
                    <h4>{link.title}</h4>
                    <p>{link.description}</p>
                  </div>
                  <div className="tm-link-arrow" style={{ color: link.color }}>
                    →
                  </div>
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className="tech-morphers-footer"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <Rocket className="footer-icon" />
          <p>Let's build something amazing together!</p>
        </motion.div>
      </div>
    </section>
  );
};

export default TechMorphers;

