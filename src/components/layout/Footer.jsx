import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter, Heart } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, href: 'mailto:contact@ankitbiswas.dev', label: 'Email' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-glow"></div>
      <div className="footer-container">
        <div className="footer-content">
          <motion.div
            className="footer-brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="gradient-text">Ankit Biswas</h3>
            <p>Building logic into imagination.</p>
          </motion.div>

          <motion.div
            className="footer-social"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <Icon size={20} />
                </motion.a>
              );
            })}
          </motion.div>

          <motion.div
            className="footer-bottom"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <p>
              © {currentYear} Ankit Biswas. Crafted with{' '}
              <Heart size={14} className="heart-icon" fill="currentColor" />{' '}
              and curiosity.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

