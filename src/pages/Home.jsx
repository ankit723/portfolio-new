import SEO from '../components/seo/SEO';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import TechStack from '../components/sections/TechStack-Enhanced';
import TechMorphers from '../components/sections/TechMorphers';
import Projects from '../components/sections/Projects';
import Experience from '../components/sections/Experience';
import Blog from '../components/sections/Blog';
import Contact from '../components/sections/Contact-Enhanced';

const Home = () => {
  return (
    <>
      <SEO />
      <div className="home">
        <Hero />
        <About />
        <TechStack />
        <TechMorphers />
        <Projects />
        <Experience />
        <Blog />
        <Contact />
      </div>
    </>
  );
};

export default Home;

