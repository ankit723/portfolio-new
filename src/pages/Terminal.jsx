import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon, X, Minus, Maximize2, Maximize } from 'lucide-react';
import './Terminal.css';

const Terminal = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  const [currentDir, setCurrentDir] = useState('~');

  const fileSystem = {
    '~': ['about.txt', 'projects/', 'experience/', 'skills/', 'contact.txt', 'README.md'],
    '~/projects': ['collabwriter/', 'hireasy/', 'gesture-recognition/', 'language-model/', 'cgu-induction/'],
    '~/experience': ['arthalab.txt', 'mudslide.txt', 'finanalyz.txt', 'arbre.txt', 'iotron.txt'],
    '~/skills': ['frontend/', 'backend/', 'databases/', 'languages/', 'devops/', 'ai-ml/'],
  };

  const commands = {
    help: {
      description: 'Show all available commands',
      output: `Available Commands:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PORTFOLIO COMMANDS:
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

LINUX COMMANDS:
  ls          - List directory contents
  pwd         - Print working directory
  cd <dir>    - Change directory
  cat <file>  - Display file contents
  tree        - Show directory tree
  grep <text> - Search portfolio content
  man <cmd>   - Show command manual
  history     - Show command history
  date        - Display current date/time
  echo <text> - Display a line of text
  uname       - Print system information
  ps          - Show running processes
  ping <host> - Test connectivity
  wget <url>  - Download files
  
ADMIN COMMANDS (Fun!):
  sudo <cmd>  - Execute with admin rights
  mkdir <dir> - Create directory
  rm <file>   - Remove file
  touch <file>- Create empty file
  chmod <perm>- Change file permissions
  vi <file>   - Open vim editor
  nano        - Open nano editor
  
SYSTEM COMMANDS:
  clear       - Clear the terminal
  exit        - Return to main site
  secret      - Find the easter egg 👀
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Tip: Try 'ls', 'cd projects', 'cat about.txt'`
    },
    ls: {
      description: 'List directory contents',
      output: null // Dynamic output
    },
    pwd: {
      description: 'Print working directory',
      output: null // Dynamic output
    },
    cd: {
      description: 'Change directory',
      output: null // Dynamic output
    },
    cat: {
      description: 'Display file contents',
      output: null // Dynamic output
    },
    tree: {
      description: 'Show directory tree',
      output: `📁 ~ (Portfolio Root)
├── 📄 about.txt
├── 📄 contact.txt
├── 📄 README.md
├── 📁 projects/
│   ├── 📁 collabwriter/
│   ├── 📁 hireasy/
│   ├── 📁 gesture-recognition/
│   ├── 📁 language-model/
│   └── 📁 cgu-induction/
├── 📁 experience/
│   ├── 📄 arthalab.txt
│   ├── 📄 mudslide.txt
│   ├── 📄 finanalyz.txt
│   ├── 📄 arbre.txt
│   └── 📄 iotron.txt
└── 📁 skills/
    ├── 📁 frontend/
    ├── 📁 backend/
    ├── 📁 databases/
    ├── 📁 languages/
    ├── 📁 devops/
    └── 📁 ai-ml/

Total: 5 directories, 18+ files`
    },
    grep: {
      description: 'Search portfolio content',
      output: null // Dynamic output
    },
    man: {
      description: 'Display manual pages',
      output: null // Dynamic output
    },
    history: {
      description: 'Show command history',
      output: null // Dynamic output
    },
    sudo: {
      description: 'Execute with admin rights',
      output: null // Dynamic output
    },
    mkdir: {
      description: 'Create directory',
      output: null // Dynamic output
    },
    rm: {
      description: 'Remove files',
      output: null // Dynamic output
    },
    vi: {
      description: 'Open vim editor',
      output: null // Dynamic output
    },
    nano: {
      description: 'Open nano editor',
      output: `GNU nano 6.2          New Buffer

Welcome to Ankit's Portfolio Editor!

This is a read-only simulation. In reality, this portfolio
is built with React and deployed on the web.

Want to make changes? Here's how:
1. Fork the GitHub repo
2. Clone it locally
3. Make your edits
4. Submit a pull request!

^X Exit     ^O Save     ^R Read File     ^W Where Is

[ Press Ctrl+X to exit ]`
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
      output: `uid=1000(guest) gid=1000(guest) groups=1000(guest),27(visitor)

guest@ankitbiswas.dev
Role: Visitor
Access Level: Public
Status: Exploring the matrix...

Fun fact: The real Ankit is probably coding right now.`
    },
    uname: {
      description: 'Print system information',
      output: `Portfolio OS 1.0.0-ankit #1 SMP PREEMPT Wed Oct 2024
Architecture: x86_64
Kernel: React 18.2.0
Powered by: Vite + Node.js
Uptime: Since 2020 (when Ankit started coding seriously)

This isn't a real Linux system, but it acts like one! 🎭`
    },
    date: {
      description: 'Display current date and time',
      output: null // Dynamic output
    },
    echo: {
      description: 'Display a line of text',
      output: null // Dynamic output
    },
    touch: {
      description: 'Create empty files',
      output: null // Dynamic output
    },
    chmod: {
      description: 'Change file permissions',
      output: null // Dynamic output
    },
    ps: {
      description: 'Report process status',
      output: `  PID TTY          TIME CMD
    1 pts/0    00:00:00 systemd
   42 pts/0    00:00:01 react-app
   43 pts/0    00:00:00 vite-dev-server
  101 pts/0    00:00:03 framer-motion
  102 pts/0    00:00:00 gsap-animations
  201 pts/0    00:00:00 portfolio-engine
  404 pts/0    00:00:00 creativity-daemon
  500 pts/0    00:00:02 terminal-simulator
  777 pts/0    00:00:99 ankit-genius-process

All systems running smoothly! ✨`
    },
    wget: {
      description: 'Download files',
      output: null // Dynamic output
    },
    ping: {
      description: 'Send ICMP packets',
      output: null // Dynamic output
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
    const trimmedCmd = cmd.trim();
    const [command, ...args] = trimmedCmd.split(' ');
    const lowerCmd = command.toLowerCase();
    
    setHistory(prev => [...prev, { type: 'input', content: cmd, dir: currentDir }]);
    setCommandHistory(prev => [...prev, cmd]);
    setHistoryIndex(-1);

    if (trimmedCmd === '') {
      return;
    }

    if (lowerCmd === 'clear') {
      setHistory([]);
      return;
    }

    if (lowerCmd === 'exit') {
      setHistory(prev => [...prev, { type: 'output', content: commands.exit.output }]);
      setTimeout(() => {
        window.location.href = '/';
      }, 1000);
      return;
    }

    // Handle dynamic commands
    if (lowerCmd === 'ls') {
      const files = fileSystem[currentDir] || [];
      const output = files.length > 0 
        ? files.join('  ')
        : 'Directory is empty';
      setHistory(prev => [...prev, { type: 'output', content: output }]);
      return;
    }

    if (lowerCmd === 'pwd') {
      setHistory(prev => [...prev, { type: 'output', content: `/home/guest${currentDir.replace('~', '')}` }]);
      return;
    }

    if (lowerCmd === 'cd') {
      const targetDir = args[0];
      if (!targetDir || targetDir === '~') {
        setCurrentDir('~');
        setHistory(prev => [...prev, { type: 'output', content: 'Changed to home directory' }]);
      } else if (targetDir === '..') {
        if (currentDir !== '~') {
          const parentDir = currentDir.split('/').slice(0, -1).join('/') || '~';
          setCurrentDir(parentDir);
          setHistory(prev => [...prev, { type: 'output', content: `Changed to ${parentDir}` }]);
        }
      } else if (targetDir === 'projects' || targetDir === 'experience' || targetDir === 'skills') {
        setCurrentDir(`~/${targetDir}`);
        setHistory(prev => [...prev, { type: 'output', content: `Changed to ~/${targetDir}` }]);
      } else {
        setHistory(prev => [...prev, { type: 'error', content: `cd: ${targetDir}: No such directory` }]);
      }
      return;
    }

    if (lowerCmd === 'cat') {
      const filename = args[0];
      const catOutputs = {
        'about.txt': commands.about.output,
        'contact.txt': commands.contact.output,
        'README.md': `# Ankit Biswas Portfolio

## Welcome! 👋

This is an interactive terminal interface for my portfolio.
Think of it as my digital business card with a nerdy twist.

## Quick Start
- Type 'help' to see all commands
- Use 'ls' to list files
- Use 'cd' to navigate directories
- Use 'cat' to read files

## About Me
20-year-old Full Stack Developer from India
Founder of Tech Morphers | 4+ years experience
20+ projects delivered | 100+ students mentored

## Connect
Visit the main site: exit
Or type 'social' for links

Built with ❤️ and React`
      };
      
      if (catOutputs[filename]) {
        setHistory(prev => [...prev, { type: 'output', content: catOutputs[filename] }]);
      } else {
        setHistory(prev => [...prev, { type: 'error', content: `cat: ${filename}: No such file` }]);
      }
      return;
    }

    if (lowerCmd === 'grep') {
      const searchTerm = args.join(' ').toLowerCase();
      if (!searchTerm) {
        setHistory(prev => [...prev, { type: 'error', content: 'grep: missing search term\nUsage: grep <search term>' }]);
        return;
      }
      const results = [];
      if (searchTerm.includes('react')) results.push('✓ Found in: skills → Frontend');
      if (searchTerm.includes('python')) results.push('✓ Found in: skills → Languages');
      if (searchTerm.includes('mern')) results.push('✓ Found in: experience → Arthalab');
      if (searchTerm.includes('tech morphers')) results.push('✓ Found in: about → Founder');
      
      const output = results.length > 0 
        ? `Searching for "${searchTerm}"...\n\n${results.join('\n')}\n\n${results.length} match(es) found`
        : `No matches found for "${searchTerm}"`;
      setHistory(prev => [...prev, { type: 'output', content: output }]);
      return;
    }

    if (lowerCmd === 'man') {
      const manCmd = args[0];
      const manPages = {
        ls: 'NAME\n  ls - list directory contents\n\nSYNOPSIS\n  ls\n\nDESCRIPTION\n  Lists files and directories in the current portfolio section.\n  Files end with .txt or .md, directories end with /',
        cd: 'NAME\n  cd - change directory\n\nSYNOPSIS\n  cd [directory]\n\nDESCRIPTION\n  Changes the current portfolio section.\n  Use "cd .." to go back, "cd ~" for home.\n\nEXAMPLES\n  cd projects    Navigate to projects\n  cd ..          Go back one level',
        cat: 'NAME\n  cat - display file contents\n\nSYNOPSIS\n  cat <filename>\n\nDESCRIPTION\n  Displays the contents of portfolio files.\n\nEXAMPLES\n  cat about.txt\n  cat README.md',
      };
      
      if (manPages[manCmd]) {
        setHistory(prev => [...prev, { type: 'output', content: manPages[manCmd] }]);
      } else {
        setHistory(prev => [...prev, { type: 'error', content: `man: No manual entry for ${manCmd}` }]);
      }
      return;
    }

    if (lowerCmd === 'history') {
      const historyOutput = commandHistory.map((cmd, i) => `  ${i + 1}  ${cmd}`).join('\n');
      setHistory(prev => [...prev, { type: 'output', content: historyOutput || 'No command history yet' }]);
      return;
    }

    if (lowerCmd === 'sudo') {
      const sudoCmd = args.join(' ');
      if (!sudoCmd) {
        setHistory(prev => [...prev, { type: 'error', content: 'sudo: missing command' }]);
        return;
      }
      
      const funnyResponses = [
        `[sudo] password for guest: 
Access Denied! 🚫
Nice try, but you need Ankit's permission for that.
Try 'contact' to request access.`,
        `⚠️  Warning: Unauthorized sudo attempt detected!
This incident will be reported to... wait, I am the system.
Carry on. But no, you can't have root access. 😄`,
        `sudo: You are not in the sudoers file.
This incident will be reported to Ankit.

Fun fact: Even Ankit doesn't use sudo in production.
That's what Docker containers are for! 🐳`
      ];
      
      const response = funnyResponses[Math.floor(Math.random() * funnyResponses.length)];
      setHistory(prev => [...prev, { type: 'error', content: response }]);
      return;
    }

    if (lowerCmd === 'mkdir') {
      const dirName = args[0];
      if (!dirName) {
        setHistory(prev => [...prev, { type: 'error', content: 'mkdir: missing operand' }]);
        return;
      }
      setHistory(prev => [...prev, { 
        type: 'output', 
        content: `mkdir: cannot create directory '${dirName}'\nPermission denied (read-only filesystem)\n\nThis portfolio is immutable by design.\nWant to add something? Contact me! 😊` 
      }]);
      return;
    }

    if (lowerCmd === 'rm') {
      const filename = args[0];
      const hasForce = args.includes('-rf') || args.includes('-f');
      
      if (filename === '/' || filename === '~' || filename === '*') {
        setHistory(prev => [...prev, { 
          type: 'error', 
          content: `🚨 WHOA THERE! 🚨\n\nYou almost deleted ${filename}!\nGood thing this is a simulation.\n\nIn real life:\n- Always double-check rm commands\n- Never run 'rm -rf /' as root\n- Backups are your friends\n\nYour future self says thank you. 🙏` 
        }]);
        return;
      }
      
      if (!filename) {
        setHistory(prev => [...prev, { type: 'error', content: 'rm: missing operand' }]);
        return;
      }
      
      setHistory(prev => [...prev, { 
        type: 'error', 
        content: `rm: cannot remove '${filename}': Permission denied\n\n"You can't delete what makes me... me!" - Portfolio\n\nThis filesystem is read-only. Nothing can be deleted here.` 
      }]);
      return;
    }

    if (lowerCmd === 'vi' || lowerCmd === 'vim') {
      setHistory(prev => [...prev, { 
        type: 'output', 
        content: `Starting Vim...\n\n~\n~\n~\n  VIM - Vi IMproved\n  version 8.2\n~\n~\n  Portfolio by Ankit Biswas\n  Read-only mode\n~\n~\n~\nType  :q  to exit\nType  :help  for help\n\n[Just kidding! This isn't real Vim]\n[Try 'nano' for a friendlier editor simulation]` 
      }]);
      return;
    }

    if (lowerCmd === 'date') {
      const now = new Date();
      const timeStr = now.toLocaleString('en-US', { 
        weekday: 'short', 
        year: 'numeric', 
        month: 'short', 
        day: '2-digit', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        timeZoneName: 'short'
      });
      setHistory(prev => [...prev, { 
        type: 'output', 
        content: `${timeStr}\n\nTime flies when you're exploring great portfolios! ⏰\nAnkit has been coding for ${new Date().getFullYear() - 2020} years now.` 
      }]);
      return;
    }

    if (lowerCmd === 'echo') {
      const message = args.join(' ');
      if (!message) {
        setHistory(prev => [...prev, { type: 'output', content: '' }]);
        return;
      }
      
      // Easter eggs for specific echo messages
      const easterEggs = {
        'hello': 'Hello there! Welcome to Ankit\'s portfolio! 👋',
        'hello world': 'Hello World! The classic first program. Ankit wrote his first "Hello World" in C back in 2019.',
        '$PATH': '/usr/local/bin:/usr/bin:/bin:/home/ankit/.genius/bin',
        '$HOME': '/home/guest',
        '$USER': 'guest',
        'test': 'test... test... is this thing on? 🎤',
      };
      
      const lowerMsg = message.toLowerCase();
      if (easterEggs[lowerMsg]) {
        setHistory(prev => [...prev, { type: 'output', content: easterEggs[lowerMsg] }]);
      } else {
        setHistory(prev => [...prev, { type: 'output', content: message }]);
      }
      return;
    }

    if (lowerCmd === 'touch') {
      const filename = args[0];
      if (!filename) {
        setHistory(prev => [...prev, { type: 'error', content: 'touch: missing file operand' }]);
        return;
      }
      setHistory(prev => [...prev, { 
        type: 'error', 
        content: `touch: cannot touch '${filename}': Read-only file system\n\nThis portfolio is immutable. Like a blockchain, but cooler. 😎` 
      }]);
      return;
    }

    if (lowerCmd === 'chmod') {
      const perms = args[0];
      const file = args[1];
      if (!perms || !file) {
        setHistory(prev => [...prev, { type: 'error', content: 'chmod: missing operand' }]);
        return;
      }
      
      const funnyChmod = [
        `chmod: changing permissions of '${file}': Operation not permitted\n\n"With great power comes great responsibility."\n- Uncle Ben (and also this portfolio)`,
        `chmod: cannot access '${file}': Permission denied\n\nNice try! But even chmod 777 won't give you access here. 🔒`,
        `Setting ${file} permissions to ${perms}...\nJust kidding! This filesystem is read-only.\n\nBut I appreciate your hacker spirit! 🎩`
      ];
      
      const response = funnyChmod[Math.floor(Math.random() * funnyChmod.length)];
      setHistory(prev => [...prev, { type: 'error', content: response }]);
      return;
    }

    if (lowerCmd === 'wget') {
      const url = args[0];
      if (!url) {
        setHistory(prev => [...prev, { type: 'error', content: 'wget: missing URL' }]);
        return;
      }
      
      setHistory(prev => [...prev, { 
        type: 'output', 
        content: `--${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, '0')}-${String(new Date().getDate()).padStart(2, '0')} ${String(new Date().getHours()).padStart(2, '0')}:${String(new Date().getMinutes()).padStart(2, '0')}:${String(new Date().getSeconds()).padStart(2, '0')}--  ${url}
Resolving ankitbiswas.dev... 127.0.0.1
Connecting to ankitbiswas.dev|127.0.0.1|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: unspecified [text/html]
Saving to: 'index.html'

index.html          [  <=>           ]  42.00K  --.-KB/s    in 0.001s

Download complete! ✨
Just kidding - this is a simulation. But the real site is already loaded!` 
      }]);
      return;
    }

    if (lowerCmd === 'ping') {
      const target = args[0] || 'ankitbiswas.dev';
      setHistory(prev => [...prev, { 
        type: 'output', 
        content: `PING ${target} (127.0.0.1) 56(84) bytes of data.
64 bytes from ${target} (127.0.0.1): icmp_seq=1 ttl=64 time=0.042 ms
64 bytes from ${target} (127.0.0.1): icmp_seq=2 ttl=64 time=0.039 ms
64 bytes from ${target} (127.0.0.1): icmp_seq=3 ttl=64 time=0.041 ms
^C
--- ${target} ping statistics ---
3 packets transmitted, 3 received, 0% packet loss, time 2043ms
rtt min/avg/max/mdev = 0.039/0.040/0.042/0.001 ms

Connection Status: Excellent! This portfolio is always online. 🟢` 
      }]);
      return;
    }

    // Check if command exists in predefined commands
    if (commands[lowerCmd]) {
      if (commands[lowerCmd].output) {
        setHistory(prev => [...prev, { type: 'output', content: commands[lowerCmd].output }]);
      }
    } else {
      setHistory(prev => [...prev, {
        type: 'error',
        content: `bash: ${command}: command not found\n\nDid you mean one of these?\n  ${['help', 'ls', 'cd', 'cat', 'about', 'projects'].join(', ')}\n\nType 'help' for all available commands.`
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
        className={`terminal-window ${isMinimized ? 'minimized' : ''} ${isFullscreen ? 'fullscreen' : ''}`}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="terminal-header">
          <div className="terminal-buttons">
            <button className="terminal-btn close" onClick={() => window.location.href = '/'} title="Close">
              <X size={12} />
            </button>
            <button 
              className="terminal-btn minimize" 
              onClick={() => setIsMinimized(!isMinimized)}
              title={isMinimized ? "Restore" : "Minimize"}
            >
              <Minus size={12} />
            </button>
            <button 
              className="terminal-btn maximize" 
              onClick={() => setIsFullscreen(!isFullscreen)}
              title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
            >
              {isFullscreen ? <Maximize size={12} /> : <Maximize2 size={12} />}
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
                  <span className="prompt-path">{item.dir || '~'}</span>
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
              <span className="prompt-path">{currentDir}</span>
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

