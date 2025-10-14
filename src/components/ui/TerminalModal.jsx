import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { X, Minus, Maximize2 } from 'lucide-react';
import './TerminalModal.css';

const TerminalModal = ({ onClose }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  const commands = {
    help: `Available Commands:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  about       - Learn about Ankit Biswas
  projects    - List featured projects
  skills      - Show tech stack
  experience  - View work experience
  contact     - Get contact information
  social      - Show social media links
  clear       - Clear the terminal
  close       - Close this terminal
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
    about: `Ankit Biswas - Full Stack Developer
18 years old | Varanasi → Bhubaneshwar, India
B.Tech in Computer Science | CGU
Founder of Tech Morphers | 4+ Years Experience`,
    projects: `Featured Projects: CollabWriter, Hireasy, Body Gesture Recognition, Small Language Model, CGU Induction System
Total: 20+ projects delivered`,
    skills: `Tech Stack: React, Next.js, Node.js, Python, MongoDB, PostgreSQL, Docker, AWS, TensorFlow, and more...`,
    experience: `5+ Companies | 4+ Years Coding | 2+ Years Professional
Recent: Iotron, Arbre, Finanalyz, Mudslide, Arthalab`,
    contact: `Email: contact@ankitbiswas.dev
Location: Bhubaneshwar, India
Company: Tech Morphers`,
    social: `GitHub | LinkedIn | Twitter
Connect with me on any platform!`,
  };

  useEffect(() => {
    const welcomeMsg = {
      type: 'output',
      content: `Terminal v1.0 - Type 'help' for commands`
    };
    setHistory([welcomeMsg]);
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  const handleCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    setHistory(prev => [...prev, { type: 'input', content: cmd }]);
    setCommandHistory(prev => [...prev, cmd]);
    setHistoryIndex(-1);

    if (trimmedCmd === '') return;

    if (trimmedCmd === 'clear') {
      setHistory([]);
      return;
    }

    if (trimmedCmd === 'close' || trimmedCmd === 'exit') {
      onClose();
      return;
    }

    if (commands[trimmedCmd]) {
      setHistory(prev => [...prev, { type: 'output', content: commands[trimmedCmd] }]);
    } else {
      setHistory(prev => [...prev, {
        type: 'error',
        content: `Command not found: ${trimmedCmd}`
      }]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input);
      setInput('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  return (
    <motion.div
      className="terminal-modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="terminal-modal-window"
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 50 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="terminal-modal-header">
          <div className="terminal-modal-buttons">
            <button className="terminal-modal-btn close" onClick={onClose}>
              <X size={12} />
            </button>
            <button className="terminal-modal-btn minimize">
              <Minus size={12} />
            </button>
            <button className="terminal-modal-btn maximize">
              <Maximize2 size={12} />
            </button>
          </div>
          <div className="terminal-modal-title">Terminal</div>
        </div>

        <div className="terminal-modal-body" ref={terminalRef} onClick={() => inputRef.current?.focus()}>
          {history.map((item, index) => (
            <div key={index} className={`terminal-modal-line ${item.type}`}>
              {item.type === 'input' && (
                <div className="terminal-modal-prompt">
                  <span className="prompt-symbol">$</span>
                  <span className="prompt-command">{item.content}</span>
                </div>
              )}
              {item.type === 'output' && (
                <pre className="terminal-modal-output">{item.content}</pre>
              )}
              {item.type === 'error' && (
                <pre className="terminal-modal-error">{item.content}</pre>
              )}
            </div>
          ))}

          <form onSubmit={handleSubmit} className="terminal-modal-input-line">
            <div className="terminal-modal-prompt">
              <span className="prompt-symbol">$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="terminal-modal-input"
                autoComplete="off"
                spellCheck="false"
              />
            </div>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TerminalModal;

