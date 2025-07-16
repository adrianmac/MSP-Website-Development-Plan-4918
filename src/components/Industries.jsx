import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FaIcons from 'react-icons/fa';
import SafeIcon from '../common/SafeIcon';

const { 
  FaCreditCard, 
  FaEthernet, 
  FaWifi, 
  FaCashRegister, 
  FaUtensils, 
  FaUserMd, 
  FaShieldAlt, 
  FaDatabase, 
  FaLock, 
  FaStethoscope, 
  FaShoppingCart, 
  FaBarcode, 
  FaChartLine, 
  FaTags, 
  FaStore, 
  FaBriefcase, 
  FaUsers, 
  FaCog, 
  FaCloud,
  FaMusic,
  FaVolumeUp
} = FaIcons;

const Industries = () => {
  const [activeTab, setActiveTab] = useState('restaurants');

  const tabs = [
    { id: 'healthcare', label: 'Healthcare' },
    { id: 'restaurants', label: 'Restaurants' },
    { id: 'retail', label: 'Retail' },
    { id: 'small-business', label: 'Small Business' }
  ];

  // Restaurant Content
  const restaurantFeatures = [
    {
      icon: FaCreditCard,
      title: "PCI Compliance",
      description: "Secure payment processing solutions to protect customer data and avoid costly fines."
    },
    {
      icon: FaEthernet,
      title: "Restaurant Wiring",
      description: "Commercial-grade cabling solutions designed for high-heat kitchen environments."
    },
    {
      icon: FaWifi,
      title: "Hospitality Networking",
      description: "Reliable networking for POS systems, kitchen displays, and guest WiFi."
    },
    {
      icon: FaVolumeUp,
      title: "Audio System Wiring",
      description: "Professional audio system installation with multi-zone capabilities for dining areas and bars."
    }
  ];

  const restaurantServices = [
    "PCI compliance audits and remediation",
    "Commercial kitchen wiring and networking",
    "POS system installation and support",
    "Secure guest WiFi solutions",
    "Online ordering platform security",
    "Digital menu board management",
    "Kitchen display system integration",
    "Multi-zone audio system installation and configuration"
  ];

  // Healthcare Content
  const healthcareFeatures = [
    {
      icon: FaUserMd,
      title: "HIPAA Compliance",
      description: "Comprehensive HIPAA compliance solutions to protect patient data and avoid penalties."
    },
    {
      icon: FaShieldAlt,
      title: "Medical Data Security",
      description: "Advanced encryption and security measures for electronic health records (EHR)."
    },
    {
      icon: FaDatabase,
      title: "EHR Integration",
      description: "Seamless integration and support for electronic health record systems."
    },
    {
      icon: FaLock,
      title: "Access Control",
      description: "Role-based access controls ensuring only authorized personnel access patient data."
    }
  ];

  const healthcareServices = [
    "HIPAA risk assessments and compliance audits",
    "EHR system implementation and support",
    "Medical device network security",
    "Telehealth platform setup and management",
    "Backup and disaster recovery for patient data",
    "Staff cybersecurity training programs",
    "Business Associate Agreement (BAA) compliance",
    "Medical practice management software support"
  ];

  // Retail Content
  const retailFeatures = [
    {
      icon: FaShoppingCart,
      title: "E-commerce Solutions",
      description: "Secure online shopping platforms with integrated payment processing and inventory management."
    },
    {
      icon: FaBarcode,
      title: "Inventory Management",
      description: "Real-time inventory tracking systems that sync across all sales channels."
    },
    {
      icon: FaChartLine,
      title: "Analytics & Reporting",
      description: "Business intelligence tools to track sales performance and customer behavior."
    },
    {
      icon: FaTags,
      title: "Multi-Channel Integration",
      description: "Unified systems connecting in-store, online, and mobile sales platforms."
    }
  ];

  const retailServices = [
    "PCI DSS compliance for payment processing",
    "Point-of-sale system installation and support",
    "E-commerce platform development and maintenance",
    "Inventory management system integration",
    "Customer relationship management (CRM) setup",
    "Loss prevention and security camera systems",
    "WiFi solutions for customers and staff",
    "Mobile payment and contactless solutions"
  ];

  // Small Business Content
  const smallBusinessFeatures = [
    {
      icon: FaBriefcase,
      title: "Complete IT Management",
      description: "Full-service IT support tailored for small businesses without dedicated IT staff."
    },
    {
      icon: FaUsers,
      title: "Employee Productivity",
      description: "Tools and systems that enhance team collaboration and productivity."
    },
    {
      icon: FaCog,
      title: "Scalable Solutions",
      description: "Technology infrastructure that grows with your business needs and budget."
    },
    {
      icon: FaCloud,
      title: "Cloud Migration",
      description: "Seamless transition to cloud-based systems for improved flexibility and cost savings."
    }
  ];

  const smallBusinessServices = [
    "Managed IT services and helpdesk support",
    "Microsoft 365 and Google Workspace setup",
    "Network setup and wireless configuration",
    "Data backup and disaster recovery planning",
    "Cybersecurity protection and employee training",
    "Business phone systems and VoIP solutions",
    "Remote work enablement and support",
    "IT consulting and strategic planning"
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const renderIndustryContent = () => {
    switch (activeTab) {
      case 'healthcare':
        return (
          <motion.div
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col lg:flex-row">
              <div className="flex-1 p-8 lg:p-12 bg-blue-50">
                <h3 className="text-3xl font-bold mb-6">
                  IT Solutions for <span className="text-blue-600">Healthcare</span>
                </h3>
                <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                  HIPAA-compliant technology solutions designed for medical practices, clinics, and healthcare facilities. Protect patient data while improving operational efficiency and care delivery.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {healthcareFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600 card-hover"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <SafeIcon icon={feature.icon} className="text-2xl text-blue-600" />
                        <h4 className="text-lg font-semibold text-dark">{feature.title}</h4>
                      </div>
                      <p className="text-gray-600">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>

                <h4 className="text-xl font-semibold mb-4 text-dark">Our Healthcare IT Services Include:</h4>
                <ul className="space-y-3 mb-8">
                  {healthcareServices.map((service, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-secondary font-bold mr-3 mt-1">✓</span>
                      <span className="text-gray-700">{service}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.button
                  onClick={scrollToContact}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 btn-hover shadow-lg flex items-center gap-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <SafeIcon icon={FaStethoscope} />
                  Get Healthcare IT Assessment
                </motion.button>
              </div>
              <div className="flex-1 min-h-[400px] lg:min-h-[600px] bg-cover bg-center relative">
                <img
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
                  alt="Modern healthcare facility"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              </div>
            </div>
          </motion.div>
        );
      case 'retail':
        return (
          <motion.div
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col lg:flex-row">
              <div className="flex-1 p-8 lg:p-12 bg-purple-50">
                <h3 className="text-3xl font-bold mb-6">
                  IT Solutions for <span className="text-purple-600">Retail</span>
                </h3>
                <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                  Comprehensive retail technology solutions that connect your online and offline sales channels. From POS systems to e-commerce platforms, we help you deliver seamless customer experiences.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {retailFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600 card-hover"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <SafeIcon icon={feature.icon} className="text-2xl text-purple-600" />
                        <h4 className="text-lg font-semibold text-dark">{feature.title}</h4>
                      </div>
                      <p className="text-gray-600">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>

                <h4 className="text-xl font-semibold mb-4 text-dark">Our Retail IT Services Include:</h4>
                <ul className="space-y-3 mb-8">
                  {retailServices.map((service, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-secondary font-bold mr-3 mt-1">✓</span>
                      <span className="text-gray-700">{service}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.button
                  onClick={scrollToContact}
                  className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-all duration-300 btn-hover shadow-lg flex items-center gap-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <SafeIcon icon={FaStore} />
                  Get Retail IT Assessment
                </motion.button>
              </div>
              <div className="flex-1 min-h-[400px] lg:min-h-[600px] bg-cover bg-center relative">
                <img
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Modern retail store"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              </div>
            </div>
          </motion.div>
        );
      case 'small-business':
        return (
          <motion.div
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col lg:flex-row">
              <div className="flex-1 p-8 lg:p-12 bg-green-50">
                <h3 className="text-3xl font-bold mb-6">
                  IT Solutions for <span className="text-green-600">Small Business</span>
                </h3>
                <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                  Comprehensive IT support designed for small businesses without dedicated IT departments. Get enterprise-level technology solutions that fit your budget and scale with your growth.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {smallBusinessFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600 card-hover"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <SafeIcon icon={feature.icon} className="text-2xl text-green-600" />
                        <h4 className="text-lg font-semibold text-dark">{feature.title}</h4>
                      </div>
                      <p className="text-gray-600">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>

                <h4 className="text-xl font-semibold mb-4 text-dark">Our Small Business IT Services Include:</h4>
                <ul className="space-y-3 mb-8">
                  {smallBusinessServices.map((service, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-secondary font-bold mr-3 mt-1">✓</span>
                      <span className="text-gray-700">{service}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.button
                  onClick={scrollToContact}
                  className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 btn-hover shadow-lg flex items-center gap-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <SafeIcon icon={FaBriefcase} />
                  Get Small Business IT Assessment
                </motion.button>
              </div>
              <div className="flex-1 min-h-[400px] lg:min-h-[600px] bg-cover bg-center relative">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
                  alt="Small business office environment"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              </div>
            </div>
          </motion.div>
        );
      case 'restaurants':
      default:
        return (
          <motion.div
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col lg:flex-row">
              <div className="flex-1 p-8 lg:p-12 bg-restaurant-bg">
                <h3 className="text-3xl font-bold mb-6">
                  IT Solutions for <span className="text-restaurant-accent">Restaurants</span>
                </h3>
                <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                  Specialized technology services designed for the unique challenges of food service businesses. From PCI compliance to kitchen networking, we keep your operations running smoothly.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {restaurantFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="bg-white p-6 rounded-lg shadow-md border-l-4 border-restaurant-accent card-hover"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <SafeIcon icon={feature.icon} className="text-2xl text-restaurant-accent" />
                        <h4 className="text-lg font-semibold text-dark">{feature.title}</h4>
                      </div>
                      <p className="text-gray-600">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>

                <h4 className="text-xl font-semibold mb-4 text-dark">Our Restaurant IT Services Include:</h4>
                <ul className="space-y-3 mb-8">
                  {restaurantServices.map((service, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-secondary font-bold mr-3 mt-1">✓</span>
                      <span className="text-gray-700">{service}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.button
                  onClick={scrollToContact}
                  className="bg-restaurant-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-600 transition-all duration-300 btn-hover shadow-lg flex items-center gap-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <SafeIcon icon={FaUtensils} />
                  Get Restaurant IT Assessment
                </motion.button>
              </div>
              <div className="flex-1 min-h-[400px] lg:min-h-[600px] bg-cover bg-center relative">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Modern restaurant interior"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              </div>
            </div>
          </motion.div>
        );
    }
  };

  return (
    <section id="industries" className="py-20 bg-gradient-to-br from-light to-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 relative inline-block">
              Industry Solutions
              <span className="absolute -bottom-3 left-0 w-20 h-1 bg-secondary rounded"></span>
            </h2>
            <p className="text-gray text-lg max-w-lg">
              Specialized IT services tailored to your industry's unique requirements
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-2 bg-white p-2 rounded-full shadow-lg"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-primary text-white shadow-md'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </motion.div>
        </div>

        {renderIndustryContent()}
      </div>
    </section>
  );
};

export default Industries;