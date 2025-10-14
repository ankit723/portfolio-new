import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Send, Mail, MapPin, Phone, Linkedin, Github, Twitter, CheckCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [step, setStep] = useState(1); // 1: Select type, 2: Fill form, 3: Success
  const [selectedType, setSelectedType] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    // Conditional fields
    timeline: '',
    budget: '',
    domain: '',
    experience: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const inquiryTypes = [
    {
      id: 'project',
      title: 'Project / Collaboration',
      description: 'Have a project idea or want to collaborate?',
      icon: '💼',
      color: '#00d4ff'
    },
    {
      id: 'mentorship',
      title: 'Mentorship / Learning',
      description: 'Looking for guidance or mentorship?',
      icon: '🎓',
      color: '#8b5cf6'
    },
    {
      id: 'interview',
      title: 'Interview / Feature',
      description: 'Media inquiry or interview request?',
      icon: '🎤',
      color: '#06b6d4'
    },
    {
      id: 'other',
      title: 'General Inquiry',
      description: 'Just want to say hi or ask something?',
      icon: '💬',
      color: '#10b981'
    }
  ];

  const handleTypeSelect = (type) => {
    setSelectedType(type);
    setStep(2);
  };

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
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setStep(3);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setStep(1);
    setSelectedType(null);
    setFormData({
      name: '',
      email: '',
      message: '',
      timeline: '',
      budget: '',
      domain: '',
      experience: ''
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'admin@techmorphers.com',
      href: 'mailto:admin@techmorphers.com'
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
      value: '+91 9795786303',
      href: 'tel:+919795786303'
    }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/ankit723', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/ankitbiswas27', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/ankitbiswas', label: 'Twitter' },
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
          {/* Contact Info Side */}
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

          {/* Enhanced Form Section */}
          <motion.div
            className="contact-form-section"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="contact-form glass">
              <AnimatePresence mode="wait">
                {/* Step 1: Select Inquiry Type */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="inquiry-type-selection"
                  >
                    <h3>Why are you contacting me?</h3>
                    <p className="step-description">Select the type of inquiry that best fits your needs</p>
                    
                    <div className="inquiry-types-grid">
                      {inquiryTypes.map((type, index) => (
                        <motion.button
                          key={type.id}
                          type="button"
                          className="inquiry-type-card"
                          onClick={() => handleTypeSelect(type.id)}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.03, y: -5 }}
                          whileTap={{ scale: 0.98 }}
                          style={{ borderColor: type.color }}
                        >
                          <div className="inquiry-icon" style={{ color: type.color }}>
                            {type.icon}
                          </div>
                          <h4>{type.title}</h4>
                          <p>{type.description}</p>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Fill Form */}
                {step === 2 && (
                  <motion.form
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    onSubmit={handleSubmit}
                    className="contact-form-fields"
                  >
                    <div className="form-header">
                      <h3>
                        {inquiryTypes.find(t => t.id === selectedType)?.icon}{' '}
                        {inquiryTypes.find(t => t.id === selectedType)?.title}
                      </h3>
                      <button type="button" onClick={() => setStep(1)} className="btn-back">
                        ← Change
                      </button>
                    </div>

                    <div className="form-group">
                      <label htmlFor="name">Your Name *</label>
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
                      <label htmlFor="email">Your Email *</label>
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

                    {/* Conditional Fields for Project */}
                    {selectedType === 'project' && (
                      <>
                        <div className="form-group">
                          <label htmlFor="timeline">Project Timeline</label>
                          <select
                            id="timeline"
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleChange}
                          >
                            <option value="">Select timeline</option>
                            <option value="asap">ASAP</option>
                            <option value="1-2weeks">1-2 weeks</option>
                            <option value="1month">1 month</option>
                            <option value="flexible">Flexible</option>
                          </select>
                        </div>

                        <div className="form-group">
                          <label htmlFor="budget">Estimated Budget</label>
                          <select
                            id="budget"
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                          >
                            <option value="">Select budget range</option>
                            <option value="<10k">Under ₹10,000</option>
                            <option value="10k-50k">₹10,000 - ₹50,000</option>
                            <option value="50k-1L">₹50,000 - ₹1,00,000</option>
                            <option value=">1L">Above ₹1,00,000</option>
                          </select>
                        </div>
                      </>
                    )}

                    {/* Conditional Fields for Mentorship */}
                    {selectedType === 'mentorship' && (
                      <>
                        <div className="form-group">
                          <label htmlFor="domain">Area of Interest</label>
                          <input
                            type="text"
                            id="domain"
                            name="domain"
                            value={formData.domain}
                            onChange={handleChange}
                            placeholder="e.g., Web Development, AI/ML, etc."
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="experience">Your Experience Level</label>
                          <select
                            id="experience"
                            name="experience"
                            value={formData.experience}
                            onChange={handleChange}
                          >
                            <option value="">Select level</option>
                            <option value="beginner">Beginner</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="advanced">Advanced</option>
                          </select>
                        </div>
                      </>
                    )}

                    <div className="form-group">
                      <label htmlFor="message">Your Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="6"
                        placeholder="Tell me more about your inquiry..."
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
                  </motion.form>
                )}

                {/* Step 3: Success Message */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="success-message"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: 'spring' }}
                    >
                      <CheckCircle size={80} className="success-icon" />
                    </motion.div>
                    <h3>Message Sent Successfully! 🎉</h3>
                    <p>
                      Thank you for reaching out! I'll get back to you as soon as possible.
                      Usually within 24-48 hours.
                    </p>
                    <motion.button
                      type="button"
                      onClick={resetForm}
                      className="btn-secondary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Send Another Message
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

