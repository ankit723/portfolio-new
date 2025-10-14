import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CustomCursor from '../ui/CustomCursor';
import TerminalToggle from '../ui/TerminalToggle';
import './Layout.css';

const Layout = ({ children }) => {
  useEffect(() => {
    // Smooth reveal on page load
    document.body.style.opacity = '0';
    setTimeout(() => {
      document.body.style.transition = 'opacity 0.5s ease-in';
      document.body.style.opacity = '1';
    }, 100);
  }, []);

  return (
    <>
      <CustomCursor />
      <Navbar />
      <TerminalToggle />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;

