import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Terminal, Home, User, Briefcase, Mail } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Tech Morphers', href: '#tech-morphers', icon: Briefcase },
    { name: 'Contact', href: '#contact', icon: Mail },
    { name: 'Terminal', href: '/terminal', icon: Terminal },
  ];

  const scrollToSection = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-container">
        <Link to="/" className="logo">
          <motion.span
            className="logo-text"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            AB
          </motion.span>
          <span className="logo-dot">.</span>
        </Link>

        <ul className="nav-links">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = item.href === '/' 
              ? location.pathname === '/' 
              : location.pathname === item.href || location.hash === item.href;

            return (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.href.startsWith('#') ? (
                  <a
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                  >
                    <Icon size={18} />
                    <span>{item.name}</span>
                  </a>
                ) : (
                  <Link
                    to={item.href}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                  >
                    <Icon size={18} />
                    <span>{item.name}</span>
                  </Link>
                )}
              </motion.li>
            );
          })}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;

