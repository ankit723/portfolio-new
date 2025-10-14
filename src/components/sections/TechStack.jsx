import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import './TechStack.css';

const TechSphere = () => {
  const sphereRef = useRef();

  const technologies = [
    'React', 'Next.js', 'Node.js', 'Python', 'MongoDB', 'PostgreSQL',
    'Docker', 'AWS', 'TypeScript', 'Express', 'Django', 'Flask',
    'TensorFlow', 'Three.js', 'GSAP', 'Tailwind', 'Git', 'Kubernetes'
  ];

  return (
    <group>
      <Sphere ref={sphereRef} args={[2, 32, 32]}>
        <meshStandardMaterial
          color="#00d4ff"
          wireframe
          transparent
          opacity={0.3}
        />
      </Sphere>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
    </group>
  );
};

const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const techCategories = [
    {
      name: 'Frontend',
      color: '#00d4ff',
      techs: ['React', 'Next.js', 'Vite', 'Angular', 'HTML5', 'CSS3', 'Tailwind', 'GSAP', 'Framer Motion']
    },
    {
      name: 'Backend',
      color: '#8b5cf6',
      techs: ['Node.js', 'Express.js', 'Flask', 'Django', 'Spring Boot', 'Laravel', 'PHP']
    },
    {
      name: 'Databases',
      color: '#06b6d4',
      techs: ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase']
    },
    {
      name: 'Languages',
      color: '#f59e0b',
      techs: ['C', 'C++', 'Java', 'Kotlin', 'Python', 'Rust', 'R', 'Assembly (x86, ARM)']
    },
    {
      name: 'Tools & DevOps',
      color: '#10b981',
      techs: ['Docker', 'Kubernetes', 'Git', 'GitHub', 'AWS', 'Render', 'Railway', 'Netlify', 'Vercel']
    },
    {
      name: 'AI & Data Science',
      color: '#ec4899',
      techs: ['TensorFlow', 'PyTorch', 'Pandas', 'NumPy', 'OpenCV', 'Scikit-learn']
    },
    {
      name: 'Other',
      color: '#f97316',
      techs: ['WebSockets', 'Socket.io', 'API Architecture', 'Compiler Design', 'ML Integration']
    }
  ];

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
            A diverse collection of tools and technologies I use to build exceptional digital experiences
          </p>
        </motion.div>

        <div className="tech-content">
          <motion.div
            className="tech-3d-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
              <TechSphere />
              <OrbitControls
                enableZoom={false}
                autoRotate
                autoRotateSpeed={1}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
              />
            </Canvas>
            <div className="tech-3d-label">
              <p>Interactive 3D Tech Cloud</p>
              <span>Drag to rotate</span>
            </div>
          </motion.div>

          <div className="tech-categories">
            {techCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                className="tech-category glass"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + categoryIndex * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="category-header">
                  <div
                    className="category-icon"
                    style={{ background: category.color }}
                  />
                  <h3>{category.name}</h3>
                </div>
                <div className="tech-tags">
                  {category.techs.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className="tech-tag"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        delay: 0.6 + categoryIndex * 0.1 + techIndex * 0.05
                      }}
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: category.color + '20',
                        borderColor: category.color,
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;

