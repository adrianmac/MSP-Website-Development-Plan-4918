import React from 'react';
import { motion } from 'framer-motion';
import * as FaIcons from 'react-icons/fa';
import SafeIcon from '../common/SafeIcon';

const { FaAward, FaUsers, FaHandshake, FaRocket, FaShieldAlt, FaChartLine, FaLinkedin, FaEnvelope } = FaIcons;

const About = () => {
  const stats = [
    {
      number: "13+",
      label: "Years Experience",
      icon: FaAward
    },
    {
      number: "500+",
      label: "Happy Clients",
      icon: FaUsers
    },
    {
      number: "99.9%",
      label: "Uptime Guarantee",
      icon: FaShieldAlt
    },
    {
      number: "24/7",
      label: "Support Available",
      icon: FaHandshake
    }
  ];

  const values = [
    {
      icon: FaShieldAlt,
      title: "Security First",
      description: "We prioritize cybersecurity in everything we do, ensuring your business data remains protected against evolving threats."
    },
    {
      icon: FaHandshake,
      title: "Partnership Approach",
      description: "We believe in building long-term partnerships, not just vendor relationships. Your success is our success."
    },
    {
      icon: FaRocket,
      title: "Innovation Focus",
      description: "We stay ahead of technology trends to bring you cutting-edge solutions that drive your business forward."
    },
    {
      icon: FaChartLine,
      title: "Measurable Results",
      description: "Every solution we implement is designed to deliver measurable improvements to your business operations."
    }
  ];

  const team = [
    {
      name: "Michael Chen",
      position: "CEO & Founder",
      initials: "MC",
      bio: "15+ years experience in enterprise IT solutions. Former Microsoft Solutions Architect with expertise in cloud migration and cybersecurity.",
      linkedin: "#",
      email: "michael@kirrontech.com"
    },
    {
      name: "Sarah Williams",
      position: "CTO",
      initials: "SW",
      bio: "Technology visionary with 12+ years in network infrastructure and security. Certified in Cisco, VMware, and multiple cloud platforms.",
      linkedin: "#",
      email: "sarah@kirrontech.com"
    },
    {
      name: "David Rodriguez",
      position: "Restaurant IT Specialist",
      initials: "DR",
      bio: "PCI compliance expert with 10+ years in hospitality IT. Specialized in restaurant wiring, POS systems, and kitchen technology.",
      linkedin: "#",
      email: "david@kirrontech.com"
    },
    {
      name: "Jennifer Park",
      position: "Cybersecurity Director",
      initials: "JP",
      bio: "Cybersecurity expert with CISSP certification. Former government security consultant with expertise in threat detection and response.",
      linkedin: "#",
      email: "jennifer@kirrontech.com"
    }
  ];

  const timeline = [
    {
      year: "2010",
      title: "Company Founded",
      description: "Started as a small IT consulting firm serving local businesses in the tech corridor."
    },
    {
      year: "2013",
      title: "Restaurant Specialization",
      description: "Expanded into restaurant IT services, becoming PCI compliance specialists."
    },
    {
      year: "2016",
      title: "Cloud Transformation",
      description: "Became Microsoft Gold Partner, helping businesses migrate to cloud solutions."
    },
    {
      year: "2019",
      title: "Cybersecurity Focus",
      description: "Launched comprehensive cybersecurity division with 24/7 SOC services."
    },
    {
      year: "2021",
      title: "Regional Expansion",
      description: "Expanded operations to serve clients across three states."
    },
    {
      year: "2023",
      title: "Industry Leadership",
      description: "Recognized as top MSP in the region, serving 500+ businesses."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About KirronTECH
            </h1>
            <p className="text-xl opacity-90 leading-relaxed">
              Your trusted technology partner since 2010, specializing in comprehensive IT solutions for small businesses and the restaurant industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-primary p-6 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                  <SafeIcon icon={stat.icon} className="text-3xl text-white" />
                </div>
                <h3 className="text-3xl font-bold text-primary mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 relative inline-block">
                Our Story
                <span className="absolute -bottom-3 left-0 w-20 h-1 bg-secondary rounded"></span>
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Founded in 2010, KirronTECH began as a vision to bridge the technology gap for small and medium businesses. We recognized that many businesses were struggling with complex IT challenges without having the resources for a full-time IT department.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Over the years, we've evolved from a small consulting firm to a comprehensive managed service provider, specializing in restaurant IT solutions, cybersecurity, and cloud services. Our expertise in PCI compliance and restaurant-specific networking has made us the go-to partner for the hospitality industry.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, we serve over 500 businesses across multiple states, maintaining our commitment to personalized service and cutting-edge solutions that drive business success.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
                alt="Modern office environment"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 relative inline-block">
              Our Core Values
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-secondary rounded"></span>
            </h2>
            <p className="text-gray text-lg max-w-2xl mx-auto mt-6">
              The principles that guide everything we do
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-light p-8 rounded-xl card-hover"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary p-3 rounded-lg">
                    <SafeIcon icon={value.icon} className="text-2xl text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-dark">{value.title}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 relative inline-block">
              Our Journey
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-secondary rounded"></span>
            </h2>
            <p className="text-gray text-lg max-w-2xl mx-auto mt-6">
              Milestones that shaped our company
            </p>
          </motion.div>
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center mb-12 last:mb-0"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8 order-2'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>
                <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center relative">
                  <span className="text-white font-bold text-lg">{item.year}</span>
                  {index !== timeline.length - 1 && (
                    <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-primary opacity-30"></div>
                  )}
                </div>
                <div className={`flex-1 ${index % 2 === 0 ? 'order-2' : ''}`}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 relative inline-block">
              Meet Our Team
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-secondary rounded"></span>
            </h2>
            <p className="text-gray text-lg max-w-2xl mx-auto mt-6">
              The experts behind your technology success
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="bg-light p-6 rounded-xl text-center card-hover"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {member.initials}
                </div>
                <h3 className="text-xl font-semibold text-dark mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-4">{member.position}</p>
                <p className="text-gray-700 text-sm mb-6 leading-relaxed">{member.bio}</p>
                <div className="flex justify-center gap-4">
                  <a
                    href={member.linkedin}
                    className="text-primary hover:text-primary-dark transition-colors duration-300"
                  >
                    <SafeIcon icon={FaLinkedin} className="text-xl" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-primary hover:text-primary-dark transition-colors duration-300"
                  >
                    <SafeIcon icon={FaEnvelope} className="text-xl" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white text-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let's discuss how our expertise can help your business thrive in today's digital landscape.
            </p>
            <motion.button
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 btn-hover"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;