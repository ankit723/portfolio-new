import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import './Hero.css';

const Hero = () => {
  const canvasRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    // Animated particle background
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 100;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = `rgba(0, 212, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function connectParticles() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.15 * (1 - distance / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      connectParticles();
      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // GSAP title animation
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current.children,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: 'power3.out',
        }
      );
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <canvas ref={canvasRef} className="hero-canvas" />
      
      <div className="hero-content">
        <motion.div
          className="hero-tag"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Sparkles size={16} />
          <span>Available for exciting opportunities</span>
        </motion.div>

        <div ref={titleRef} className="hero-title-container">
          <h1 className="hero-title">
            <span>Hi, I'm </span>
            <span className="gradient-text">Ankit Biswas</span>
          </h1>
          <h2 className="hero-subtitle">
            <span>A curious mind building the future,</span>
            <span>one line of code at a time.</span>
          </h2>
        </div>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Full Stack Developer • Innovator • Founder of Tech Morphers
          <br />
          Turning imagination into reality through code.
        </motion.p>

        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <a href="#projects" className="btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn-secondary">
            Let's Connect
          </a>
        </motion.div>

        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          onClick={scrollToAbout}
        >
          <ChevronDown size={24} className="scroll-icon" />
          <span>Scroll to explore</span>
        </motion.div>
      </div>

      <div className="hero-gradient-orb hero-gradient-orb-1"></div>
      <div className="hero-gradient-orb hero-gradient-orb-2"></div>
    </section>
  );
};

export default Hero;

