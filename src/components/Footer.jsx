import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import SafeIcon from '../common/SafeIcon';

const { FaMapMarkerAlt, FaPhone, FaEnvelope, FaAward } = FaIcons;

const Footer = () => {
  const navigate = useNavigate();

  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Managed IT Services", action: "scrollToServices" },
        { name: "Cybersecurity Solutions", action: "scrollToServices" },
        { name: "Cloud Services", action: "scrollToServices" },
        { name: "Network Management", action: "scrollToServices" },
        { name: "Audio System Solutions", action: "scrollToServices" }
      ]
    },
    {
      title: "Industries",
      links: [
        { name: "Restaurants & Hospitality", action: "scrollToIndustries" },
        { name: "Healthcare", action: "scrollToIndustries" },
        { name: "Retail", action: "scrollToIndustries" },
        { name: "Small Business", action: "scrollToIndustries" },
        { name: "Professional Services", action: "scrollToIndustries" },
        { name: "Non-Profit Organizations", action: "scrollToIndustries" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", path: "/about" },
        { name: "Our Team", path: "/about" },
        { name: "Case Studies", action: "scrollToTestimonials" },
        { name: "Client Testimonials", action: "scrollToTestimonials" },
        { name: "Contact Us", action: "scrollToContact" }
      ]
    }
  ];

  const contactInfo = [
    { icon: FaMapMarkerAlt, text: "123 Business Ave, Tech City, TC 10001" },
    { icon: FaPhone, text: "(555) 123-4567" },
    { icon: FaEnvelope, text: "info@kirrontech.com" }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToServices = () => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById('services');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const element = document.getElementById('services');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const scrollToIndustries = () => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById('industries');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const element = document.getElementById('industries');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const scrollToTestimonials = () => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById('testimonials');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const element = document.getElementById('testimonials');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleLinkClick = (link) => {
    if (typeof link === 'object') {
      if (link.path) {
        navigate(link.path);
      } else if (link.action === 'scrollToContact') {
        scrollToContact();
      } else if (link.action === 'scrollToServices') {
        scrollToServices();
      } else if (link.action === 'scrollToIndustries') {
        scrollToIndustries();
      } else if (link.action === 'scrollToTestimonials') {
        scrollToTestimonials();
      }
    }
  };

  return (
    <footer className="bg-dark text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 relative">
              KirronTECH
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-secondary rounded"></span>
            </h3>
            <p className="text-gray mb-6 leading-relaxed">
              Providing professional IT services for small and medium businesses since 2010. 
              Industry-specific solutions for your technology challenges.
            </p>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <SafeIcon icon={item.icon} className="text-secondary text-xl mt-1 flex-shrink-0" />
                  <span className="text-gray">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (sectionIndex + 1) * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-6 relative">
                {section.title}
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-secondary rounded"></span>
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <button
                      onClick={() => handleLinkClick(link)}
                      className="text-gray hover:text-white transition-colors duration-300 text-left"
                    >
                      {typeof link === 'object' ? link.name : link}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* BBB and Copyright */}
        <motion.div
          className="border-t border-gray-700 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* BBB Logo and Rating */}
            <div className="flex items-center gap-4">
              <img
                src="https://www.bbb.org/TerminusContent/dist/img/bbb-logos/BBB-Accredited-Business-Horizontal-Blue.png"
                alt="BBB Accredited Business Logo"
                className="h-16 w-auto"
              />
              <div className="flex items-center gap-2 bg-blue-50 text-primary px-4 py-2 rounded-lg">
                <SafeIcon icon={FaAward} className="text-xl" />
                <span className="font-semibold">A+ Rating</span>
              </div>
            </div>

            {/* Copyright */}
            <p className="text-gray">
              &copy; 2023 KirronTECH. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;