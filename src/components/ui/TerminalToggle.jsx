import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, X } from 'lucide-react';
import TerminalModal from './TerminalModal';
import './TerminalToggle.css';

const TerminalToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyPress = (e) => {
      // Toggle terminal with backtick key (`)
      if (e.key === '`' && !e.ctrlKey && !e.metaKey && !e.altKey) {
        // Don't trigger if user is typing in an input
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
          return;
        }
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
      // Also support Ctrl/Cmd + K
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <>
      <motion.button
        className="terminal-toggle-btn"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="Open Terminal (Press ` or Ctrl+K)"
        aria-label="Toggle Terminal"
      >
        <TerminalIcon size={20} />
        <span className="terminal-toggle-text">Terminal</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && <TerminalModal onClose={() => setIsOpen(false)} />}
      </AnimatePresence>
    </>
  );
};

export default TerminalToggle;

