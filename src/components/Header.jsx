import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import SafeIcon from '../common/SafeIcon';

const { FaServer, FaBars, FaTimes } = FaIcons;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white shadow-md py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center">
          <motion.div
            className="flex items-center gap-3 text-2xl font-bold text-primary cursor-pointer"
            onClick={() => handleNavigation('/')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <SafeIcon icon={FaServer} className="text-secondary" />
            <span>KirronTECH</span>
          </motion.div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-8 list-none">
            <li>
              <button
                onClick={() => handleNavigation('/')}
                className={`font-medium transition-colors duration-300 relative group ${
                  location.pathname === '/' ? 'text-primary' : 'text-dark hover:text-primary'
                }`}
              >
                Home
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    location.pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation('/about')}
                className={`font-medium transition-colors duration-300 relative group ${
                  location.pathname === '/about' ? 'text-primary' : 'text-dark hover:text-primary'
                }`}
              >
                About
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    location.pathname === '/about' ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </button>
            </li>
            {[
              { label: 'Services', id: 'services' },
              { label: 'Industries', id: 'industries' },
              { label: 'Testimonials', id: 'testimonials' },
              { label: 'Contact', id: 'contact' }
            ].map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="text-dark hover:text-primary font-medium transition-colors duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </button>
              </li>
            ))}
          </ul>

          <motion.button
            onClick={() => scrollToSection('contact')}
            className="hidden md:block bg-primary text-white px-6 py-3 rounded font-medium hover:bg-primary-dark transition-all duration-300 btn-hover"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Assessment
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <SafeIcon icon={isMobileMenuOpen ? FaTimes : FaBars} />
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white shadow-lg rounded-lg mt-4 p-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col gap-4">
              <li>
                <button
                  onClick={() => handleNavigation('/')}
                  className={`font-medium transition-colors duration-300 w-full text-left ${
                    location.pathname === '/' ? 'text-primary' : 'text-dark hover:text-primary'
                  }`}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('/about')}
                  className={`font-medium transition-colors duration-300 w-full text-left ${
                    location.pathname === '/about' ? 'text-primary' : 'text-dark hover:text-primary'
                  }`}
                >
                  About
                </button>
              </li>
              {[
                { label: 'Services', id: 'services' },
                { label: 'Industries', id: 'industries' },
                { label: 'Testimonials', id: 'testimonials' },
                { label: 'Contact', id: 'contact' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-dark hover:text-primary font-medium transition-colors duration-300 w-full text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-primary text-white px-6 py-3 rounded font-medium hover:bg-primary-dark transition-all duration-300 w-full"
                >
                  Get Assessment
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;