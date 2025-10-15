import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  SiReact, SiNextdotjs, SiNodedotjs, SiPython, SiMongodb, SiPostgresql,
  SiDocker, SiAmazon, SiTypescript, SiExpress, SiDjango, SiFlask,
  SiTensorflow, SiThreedotjs, SiTailwindcss, SiGit, SiKubernetes,
  SiJavascript, SiHtml5, SiCss3, SiAngular, SiVite, SiMysql,
  SiFirebase, SiCplusplus, SiKotlin, SiRust, SiR,
  SiPhp, SiLaravel, SiSpringboot, SiPytorch, SiPandas, SiNumpy,
  SiOpencv, SiScikitlearn, SiRender, SiNetlify, SiVercel, SiGithub
} from 'react-icons/si';
import { Coffee } from 'lucide-react';
import { Code2, Cpu, Database, Cloud, Brain, Layers } from 'lucide-react';
import './TechStack.css';

const TechStackEnhanced = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const techCategories = [
    {
      name: 'Frontend',
      color: '#00d4ff',
      icon: Code2,
      techs: [
        { name: 'React', icon: SiReact, color: '#61DAFB' },
        { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
        { name: 'Vite', icon: SiVite, color: '#646CFF' },
        { name: 'Angular', icon: SiAngular, color: '#DD0031' },
        { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
        { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
        { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
        { name: 'Three.js', icon: SiThreedotjs, color: '#000000' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' }
      ]
    },
    {
      name: 'Backend',
      color: '#8b5cf6',
      icon: Cpu,
      techs: [
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
        { name: 'Express', icon: SiExpress, color: '#000000' },
        { name: 'Flask', icon: SiFlask, color: '#000000' },
        { name: 'Django', icon: SiDjango, color: '#092E20' },
        { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
        { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
        { name: 'PHP', icon: SiPhp, color: '#777BB4' }
      ]
    },
    {
      name: 'Databases',
      color: '#06b6d4',
      icon: Database,
      techs: [
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
        { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' }
      ]
    },
    {
      name: 'Languages',
      color: '#f59e0b',
      icon: Code2,
      techs: [
        { name: 'Python', icon: SiPython, color: '#3776AB' },
        { name: 'C++', icon: SiCplusplus, color: '#00599C' },
        { name: 'Java', icon: Coffee, color: '#007396' },
        { name: 'Kotlin', icon: SiKotlin, color: '#7F52FF' },
        { name: 'Rust', icon: SiRust, color: '#000000' },
        { name: 'R', icon: SiR, color: '#276DC3' }
      ]
    },
    {
      name: 'DevOps & Cloud',
      color: '#10b981',
      icon: Cloud,
      techs: [
        { name: 'Docker', icon: SiDocker, color: '#2496ED' },
        { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
        { name: 'Git', icon: SiGit, color: '#F05032' },
        { name: 'GitHub', icon: SiGithub, color: '#181717' },
        { name: 'AWS', icon: SiAmazon, color: '#FF9900' },
        { name: 'Render', icon: SiRender, color: '#46E3B7' },
        { name: 'Netlify', icon: SiNetlify, color: '#00C7B7' },
        { name: 'Vercel', icon: SiVercel, color: '#000000' }
      ]
    },
    {
      name: 'AI & Data Science',
      color: '#ec4899',
      icon: Brain,
      techs: [
        { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
        { name: 'PyTorch', icon: SiPytorch, color: '#EE4C2C' },
        { name: 'Pandas', icon: SiPandas, color: '#150458' },
        { name: 'NumPy', icon: SiNumpy, color: '#013243' },
        { name: 'OpenCV', icon: SiOpencv, color: '#5C3EE8' },
        { name: 'Scikit-learn', icon: SiScikitlearn, color: '#F7931E' }
      ]
    }
  ];

  // Create floating tech items for the cloud visualization
  const allTechs = techCategories.flatMap(cat => 
    cat.techs.map(tech => ({
      ...tech,
      category: cat.name,
      categoryColor: cat.color
    }))
  );

  return (
    <section id="tech-stack" className="tech-stack" ref={ref}>
      <div className="tech-container">
        <motion.div
          className="tech-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">My Arsenal</span>
          <h2 className="section-title">Tech Stack</h2>
          <p className="section-description">
            An interactive constellation of technologies I've mastered over 4+ years of building exceptional digital experiences
          </p>
        </motion.div>

        <div className="tech-content-enhanced">
          {/* Interactive Floating Tech Cloud */}
          <motion.div
            className="tech-cloud-container glass"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="tech-cloud-header">
              <Layers className="cloud-icon" />
              <h3>Tech Cloud Constellation</h3>
              <p>40+ technologies floating in harmony</p>
            </div>
            
            <div className="tech-cloud">
              {allTechs.map((tech, index) => {
                const Icon = tech.icon;
                // Create more varied sizes for visual interest
                const sizeVariant = index % 4;
                const size = sizeVariant === 0 ? 65 : sizeVariant === 1 ? 55 : sizeVariant === 2 ? 50 : 45;
                const delay = index * 0.02;
                
                // Random floating animation values
                const floatY = 8 + (index % 10) * 2; // 8-26px range
                const floatDuration = 4 + (index % 5); // 4-8 seconds
                const floatDelay = (index % 10) * 0.3; // Staggered start
                
                return (
                  <motion.div
                    key={tech.name}
                    className="tech-bubble"
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      rotate: 0,
                      y: [0, -floatY, 0]
                    }}
                    transition={{ 
                      opacity: { duration: 0.5, delay },
                      scale: { 
                        duration: 0.5, 
                        delay,
                        type: 'spring',
                        stiffness: 260,
                        damping: 20
                      },
                      rotate: {
                        duration: 0.5,
                        delay,
                        type: 'spring',
                        stiffness: 260,
                        damping: 20
                      },
                      y: {
                        duration: floatDuration,
                        delay: delay + floatDelay,
                        repeat: Infinity,
                        ease: [0.4, 0.0, 0.2, 1], // Cubic bezier
                        repeatType: 'reverse'
                      }
                    }}
                    style={{
                      width: `${size}px`,
                      height: `${size}px`,
                      borderColor: tech.categoryColor,
                    }}
                    title={`${tech.name} - ${tech.category}`}
                  >
                    <Icon 
                      style={{ 
                        color: tech.color,
                        fontSize: `${size * 0.5}px`
                      }} 
                    />
                  </motion.div>
                );
              })}
            </div>

            <div className="tech-cloud-info">
              <div className="cloud-stat">
                <span className="stat-number">{allTechs.length}+</span>
                <span className="stat-label">Technologies</span>
              </div>
              <div className="cloud-stat">
                <span className="stat-number">{techCategories.length}</span>
                <span className="stat-label">Categories</span>
              </div>
              <div className="cloud-stat">
                <span className="stat-number">4+</span>
                <span className="stat-label">Years Experience</span>
              </div>
            </div>
          </motion.div>

          {/* Categorized List */}
          <div className="tech-categories-enhanced">
            {techCategories.map((category, categoryIndex) => {
              const CategoryIcon = category.icon;
              return (
                <motion.div
                  key={category.name}
                  className="tech-category-enhanced glass"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + categoryIndex * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="category-header-enhanced">
                    <div className="category-icon-wrapper" style={{ background: category.color + '20' }}>
                      <CategoryIcon size={24} style={{ color: category.color }} />
                    </div>
                    <h3 style={{ color: category.color }}>{category.name}</h3>
                  </div>
                  
                  <div className="tech-icons-grid">
                    {category.techs.map((tech, techIndex) => {
                      const TechIcon = tech.icon;
                      return (
                        <motion.div
                          key={tech.name}
                          className="tech-icon-item"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{
                            duration: 0.3,
                            delay: 0.6 + categoryIndex * 0.1 + techIndex * 0.05
                          }}
                          whileHover={{
                            scale: 1.15,
                            y: -5
                          }}
                          title={tech.name}
                        >
                          <TechIcon 
                            size={32} 
                            style={{ color: tech.color }}
                          />
                          <span className="tech-icon-name">{tech.name}</span>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackEnhanced;

