import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon, X, Minus, Maximize2 } from 'lucide-react';
import './Terminal.css';

const Terminal = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  const commands = {
    help: {
      description: 'Show all available commands',
      output: `Available Commands:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  about       - Learn about Ankit Biswas
  whoami      - Display current user info
  projects    - List featured projects
  skills      - Show tech stack
  experience  - View work experience
  achievements- Display key achievements
  philosophy  - View Ankit's ideology
  contact     - Get contact information
  social      - Show social media links
  interests   - Display hobbies and interests
  goals       - View future aspirations
  clear       - Clear the terminal
  exit        - Return to main site
  secret      - Find the easter egg 👀
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`
    },
    about: {
      description: 'Learn about Ankit Biswas',
      output: `╔══════════════════════════════════════════════╗
║         ANKIT BISWAS - DEVELOPER             ║
╚══════════════════════════════════════════════╝

Name: Ankit Biswas
Age: 20
Location: Varanasi → Bhubaneshwar, India
Education: B.Tech in Computer Science
University: C.V. Raman Global University

I'm a passionate developer and technology enthusiast 
with a deep curiosity about how things work. I've been 
programming for 4+ years and have turned that passion 
into professional experience.

Founder of Tech Morphers - a development studio focused 
on building modern web and app solutions.

Beyond tech, I'm deeply interested in scientific, 
fictional, and philosophical concepts like time travel, 
interstellar theory, consciousness, and the future of 
human evolution.`
    },
    whoami: {
      description: 'Display current user info',
      output: `guest@ankitbiswas.dev
Role: Visitor
Access Level: Public
Status: Exploring the matrix...`
    },
    projects: {
      description: 'List featured projects',
      output: `Featured Projects:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. CollabWriter [ONGOING]
   → Collaborative web-based IDE with real-time coding
   → Tech: React, Node.js, WebSocket, AI

2. Hireasy [COMPLETED]
   → Student freelancing platform
   → Tech: MERN Stack

3. Body Gesture Recognition [COMPLETED]
   → Deep learning for gesture detection
   → Tech: Python, TensorFlow, OpenCV

4. Small Language Model [COMPLETED]
   → Minimal AI model with React UI
   → Tech: Flask, TensorFlow, React

5. CGU Induction System [COMPLETED]
   → University management system
   → Tech: Spring Boot, React, MySQL

Total Projects Delivered: 20+`
    },
    skills: {
      description: 'Show tech stack',
      output: `Tech Stack:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Frontend:
  React • Next.js • Vite • Angular • Tailwind
  GSAP • Framer Motion • HTML5 • CSS3

Backend:
  Node.js • Express • Flask • Django
  Spring Boot • Laravel • PHP

Databases:
  MongoDB • MySQL • PostgreSQL • Firebase

Languages:
  C • C++ • Java • Kotlin • Python • Rust
  R • Assembly (x86, ARM)

DevOps & Cloud:
  Docker • Kubernetes • Git • AWS • Render
  Railway • Netlify • Vercel

AI & Data Science:
  TensorFlow • PyTorch • Pandas • NumPy
  OpenCV • Scikit-learn`
    },
    experience: {
      description: 'View work experience',
      output: `Work Experience:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🏢 Iotron Technologies
   Web Developer Intern | Oct 2024 - Jan 2025
   → Built progressive admin panel
   → Improved UX by 40%

🏢 Arbre Creations
   Software Developer Intern | Feb 2024 - Dec 2024
   → Migrated to Laravel framework
   → 50% faster deployments

🏢 Finanalyz
   Full Stack Developer Intern | Jun 2024 - Sep 2024
   → Delivered scalable full-stack app
   → Improved efficiency by 40%

🏢 Mudslide Creations
   Full Stack Developer Intern | Dec 2023 - Mar 2024
   → Enhanced backend security by 55%

🏢 Arthalab
   Full Stack Developer Intern | May 2023 - Dec 2023
   → Migrated Flask → MERN
   → 50% performance improvement
   → Optimized 100K+ record databases

Total Experience: 4+ Years (2+ Professional)`
    },
    achievements: {
      description: 'Display key achievements',
      output: `Key Achievements:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✓ Conducted 2 web dev bootcamps (80-100 attendees each)
✓ Built 20+ real-world applications
✓ Founded Tech Morphers studio
✓ Managed client work & mentored interns
✓ Recognized for technical leadership
✓ Pursuing GATE 2026/2027 for ISRO/BARC/DRDO`
    },
    philosophy: {
      description: "View Ankit's ideology",
      output: `My Philosophy:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

"A curious mind building the future,
 one line of code at a time."

Beyond Code:
  I'm not just a coder — I'm an observer of 
  systems: digital, cosmic, and human.

Driven by Curiosity:
  I believe technology isn't just about efficiency 
  — it's about imagination and progress.

Chase Understanding:
  I don't chase trends, I chase understanding.
  I explore the unproven and build the unseen.

Core Belief:
  I'm driven by a desire to build technology that 
  inspires imagination, not just productivity.`
    },
    contact: {
      description: 'Get contact information',
      output: `Contact Information:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📧 Email: contact@ankitbiswas.dev
📍 Location: Bhubaneshwar, India
💼 Company: Tech Morphers (Founder)

For collaborations, projects, or just to say hi!`
    },
    social: {
      description: 'Show social media links',
      output: `Social Links:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔗 GitHub: github.com/ankitbiswas
🔗 LinkedIn: linkedin.com/in/ankitbiswas
🔗 Twitter: twitter.com/ankitbiswas

Let's connect and build something amazing!`
    },
    interests: {
      description: 'Display hobbies and interests',
      output: `Interests & Hobbies:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💻 Building side projects
🤖 Exploring emerging tech & AI
📊 Learning DSA & algorithms
🌌 Scientific & spiritual theories
🎬 Philosophical & sci-fi movies
💭 Discussions about existence & time
🚀 Space exploration & interstellar theory
🧠 Consciousness & human evolution`
    },
    goals: {
      description: 'View future aspirations',
      output: `Future Goals:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎯 Immediate Goal:
   Secure top GATE rank (2026-2027)
   Target: ISRO, BARC, or DRDO as CS Officer
   OR pursue M.Tech at IISc Bangalore

🚀 Long-term Vision:
   Build technology that inspires imagination,
   not just productivity.
   
   Create systems that matter and push the 
   boundaries of what's possible.

💡 Philosophy:
   "Engineering meets philosophy. Code meets curiosity."`
    },
    clear: {
      description: 'Clear the terminal',
      output: null
    },
    exit: {
      description: 'Return to main site',
      output: 'Exiting terminal mode...'
    },
    secret: {
      description: 'Easter egg',
      output: `╔══════════════════════════════════════════════╗
║          🎉 SECRET UNLOCKED! 🎉              ║
╚══════════════════════════════════════════════╝

You found the easter egg! 🥚

"The best way to predict the future is to 
 invent it." - Alan Kay

Fun fact: Ankit believes we're living in a 
simulation, and he's trying to hack it with code! 🌌

Keep exploring, curious mind! 🚀`
    }
  };

  useEffect(() => {
    const welcomeMessage = {
      type: 'output',
      content: `╔══════════════════════════════════════════════╗
║     Welcome to Ankit's Terminal v1.0         ║
╚══════════════════════════════════════════════╝

Type 'help' to see available commands.
Type 'exit' to return to the main site.

Initializing system...`
    };
    setHistory([welcomeMessage]);
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    setHistory(prev => [...prev, { type: 'input', content: cmd }]);
    setCommandHistory(prev => [...prev, cmd]);
    setHistoryIndex(-1);

    if (trimmedCmd === '') {
      return;
    }

    if (trimmedCmd === 'clear') {
      setHistory([]);
      return;
    }

    if (trimmedCmd === 'exit') {
      setHistory(prev => [...prev, { type: 'output', content: commands.exit.output }]);
      setTimeout(() => {
        window.location.href = '/';
      }, 1000);
      return;
    }

    if (commands[trimmedCmd]) {
      if (commands[trimmedCmd].output) {
        setHistory(prev => [...prev, { type: 'output', content: commands[trimmedCmd].output }]);
      }
    } else {
      setHistory(prev => [...prev, {
        type: 'error',
        content: `Command not found: ${trimmedCmd}\nType 'help' for available commands.`
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
      if (commandHistory.length > 0) {
        const newIndex = historyIndex + 1;
        if (newIndex < commandHistory.length) {
          setHistoryIndex(newIndex);
          setInput(commandHistory[commandHistory.length - 1 - newIndex]);
        }
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
    <div className="terminal-page">
      <motion.div
        className="terminal-window"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="terminal-header">
          <div className="terminal-buttons">
            <button className="terminal-btn close" onClick={() => window.location.href = '/'}>
              <X size={12} />
            </button>
            <button className="terminal-btn minimize">
              <Minus size={12} />
            </button>
            <button className="terminal-btn maximize">
              <Maximize2 size={12} />
            </button>
          </div>
          <div className="terminal-title">
            <TerminalIcon size={16} />
            <span>ankitbiswas@terminal ~ zsh</span>
          </div>
        </div>

        <div className="terminal-body" ref={terminalRef} onClick={() => inputRef.current?.focus()}>
          {history.map((item, index) => (
            <div key={index} className={`terminal-line ${item.type}`}>
              {item.type === 'input' && (
                <div className="terminal-prompt">
                  <span className="prompt-user">guest@ankitbiswas</span>
                  <span className="prompt-separator">:</span>
                  <span className="prompt-path">~</span>
                  <span className="prompt-symbol">$</span>
                  <span className="prompt-command">{item.content}</span>
                </div>
              )}
              {item.type === 'output' && (
                <pre className="terminal-output">{item.content}</pre>
              )}
              {item.type === 'error' && (
                <pre className="terminal-error">{item.content}</pre>
              )}
            </div>
          ))}

          <form onSubmit={handleSubmit} className="terminal-input-line">
            <div className="terminal-prompt">
              <span className="prompt-user">guest@ankitbiswas</span>
              <span className="prompt-separator">:</span>
              <span className="prompt-path">~</span>
              <span className="prompt-symbol">$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="terminal-input"
                autoComplete="off"
                spellCheck="false"
              />
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Terminal;

