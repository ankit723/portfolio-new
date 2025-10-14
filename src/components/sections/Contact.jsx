import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Mail, MapPin, Phone, Linkedin, Github, Twitter } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'general',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', type: 'general', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'contact@ankitbiswas.dev',
      href: 'mailto:contact@ankitbiswas.dev'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bhubaneshwar, India',
      href: null
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 XXXX XXXXXX',
      href: 'tel:+91XXXXXXXXXX'
    }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="contact-container">
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-description">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info-section"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="contact-info-card glass">
              <h3>Contact Information</h3>
              <p className="contact-subtitle">
                Let's discuss your next big idea or just say hi!
              </p>

              <div className="contact-details">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.div
                      key={info.label}
                      className="contact-detail-item"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    >
                      <div className="contact-icon">
                        <Icon size={20} />
                      </div>
                      <div className="contact-detail-content">
                        <span className="contact-label">{info.label}</span>
                        {info.href ? (
                          <a href={info.href} className="contact-value">
                            {info.value}
                          </a>
                        ) : (
                          <p className="contact-value">{info.value}</p>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="contact-social">
                <h4>Connect on Social</h4>
                <div className="contact-social-links">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon-link"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label={social.label}
                      >
                        <Icon size={22} />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-section"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="contact-form glass">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="type">Inquiry Type</label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                >
                  <option value="project">Project Collaboration</option>
                  <option value="mentorship">Mentorship</option>
                  <option value="interview">Interview</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell me about your project or inquiry..."
                />
              </div>

              <motion.button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={18} />
                  </>
                )}
              </motion.button>

              {submitStatus === 'success' && (
                <motion.div
                  className="form-message success"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  ✓ Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  className="form-message error"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  ✗ Something went wrong. Please try again.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

