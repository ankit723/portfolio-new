# 🚀 Ankit Biswas - Personal Website

A next-generation, futuristic personal website built with React, showcasing skills, projects, and professional journey with cutting-edge animations and modern design.

## ✨ Features

### 🎨 Design & UX
- **Futuristic UI**: Matrix-meets-modern aesthetic with glassmorphism and depth effects
- **Custom Cursor**: Interactive glowing cursor with hover effects
- **Smooth Animations**: Powered by Framer Motion and GSAP
- **3D Visualizations**: Three.js powered tech stack sphere
- **Parallax Scrolling**: Engaging scroll-based animations throughout

### 🖥️ Interactive Features
- **Floating Terminal Toggle**: Access terminal from anywhere (Press `` ` `` or `Ctrl+K`)
- **Terminal Mode**: Full interactive CLI experience with custom commands
- **Advanced Contact Form**: Multi-step form with conditional fields based on inquiry type
- **Responsive Design**: Fully optimized for all devices

### 🏢 Content Sections
1. **Hero Section**: Eye-catching introduction with particle background
2. **About**: Personal story, stats, and philosophy
3. **Tech Stack**: Interactive 3D sphere with comprehensive technology list
4. **Tech Morphers**: Dedicated section for the development studio
5. **Projects**: Parallax showcase of featured work
6. **Experience**: Animated timeline of professional journey
7. **Blog**: Insights and articles section (placeholder ready)
8. **Contact**: Multi-step intelligent contact form

### 🔍 SEO & Performance
- **Complete SEO Optimization**: Meta tags, Open Graph, Twitter Cards
- **Structured Data**: JSON-LD schema for Person, Organization, WebSite
- **Sitemap & Robots.txt**: Search engine ready
- **Semantic HTML**: Proper heading hierarchy and ARIA labels
- **Fast Loading**: Optimized assets and lazy loading

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI library
- **React Router** - Navigation
- **Framer Motion** - Animations
- **GSAP** - Advanced animations
- **Three.js** - 3D graphics
- **Lucide React** - Icons

### SEO & Metadata
- **React Helmet Async** - Dynamic meta tags
- **Structured Data** - Schema.org JSON-LD

### Styling
- **CSS3** - Custom styling with CSS variables
- **Glassmorphism** - Modern UI effects
- **CSS Grid & Flexbox** - Responsive layouts

## 📦 Installation

\`\`\`bash
# Clone the repository
git clone https://github.com/ankitbiswas/portfolio.git

# Navigate to directory
cd portfolio

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
\`\`\`

## 📸 Adding Your Photo

1. Add your professional headshot to `/public/assets/ankit-biswas.jpg`
2. Recommended specs:
   - Format: JPG or WebP
   - Size: 500x500px minimum
   - Quality: High resolution for retina displays
   - File size: Optimized (< 200KB)

The photo will appear in:
- About section (circular profile image)
- SEO meta tags (Open Graph & Twitter Cards)
- JSON-LD structured data

## 🎨 Customization

### Colors
Edit CSS variables in `src/index.css`:
\`\`\`css
:root {
  --bg-dark: #0a0a0f;
  --accent-blue: #00d4ff;
  --accent-violet: #8b5cf6;
  --accent-turquoise: #06b6d4;
}
\`\`\`

### Content
Update personal information in:
- `/src/components/sections/About.jsx` - Personal story
- `/src/components/sections/Projects.jsx` - Project showcase
- `/src/components/sections/Experience.jsx` - Work history
- `/src/components/sections/TechStack.jsx` - Technologies
- `/src/components/sections/Contact-Enhanced.jsx` - Contact details

### SEO
Update SEO defaults in `/src/components/seo/SEO.jsx`

## 🚀 Terminal Commands

Access the terminal by:
- Clicking the floating terminal button (bottom right)
- Pressing backtick key (\` \`)
- Pressing `Ctrl+K` or `Cmd+K`

Available commands:
- `help` - Show all commands
- `about` - Learn about Ankit
- `projects` - List projects
- `skills` - Show tech stack
- `experience` - View experience
- `contact` - Get contact info
- `social` - Social links
- `clear` - Clear terminal
- `close` - Close terminal

## 📱 Contact Form Features

The intelligent contact form includes:
1. **Step 1**: Select inquiry type
   - Project/Collaboration
   - Mentorship/Learning
   - Interview/Feature
   - General Inquiry

2. **Step 2**: Conditional fields based on selection
   - Project: Timeline & Budget fields
   - Mentorship: Domain & Experience level
   - Others: Standard fields

3. **Step 3**: Success confirmation

## 🌐 Deployment

### Build
\`\`\`bash
npm run build
\`\`\`

### Deploy to Vercel
\`\`\`bash
vercel
\`\`\`

### Deploy to Netlify
\`\`\`bash
netlify deploy --prod
\`\`\`

## 📊 SEO Checklist

✅ Meta title and description  
✅ Open Graph tags  
✅ Twitter Card tags  
✅ JSON-LD structured data (Person, Organization, WebSite)  
✅ Canonical URL  
✅ Robots.txt  
✅ Sitemap.xml  
✅ Semantic HTML  
✅ Alt tags on images  
✅ Mobile responsive  
✅ Fast loading  

## 🔗 Important Links

- **Portfolio**: https://ankitbiswas.dev
- **Tech Morphers**: https://techmorphers.com
- **GitHub**: https://github.com/ankitbiswas
- **LinkedIn**: https://linkedin.com/in/ankitbiswas

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Credits

Created with ❤️ by **Ankit Biswas**

Built with cutting-edge technologies and a passion for clean, performant code.

---

**"Building logic into imagination."**
