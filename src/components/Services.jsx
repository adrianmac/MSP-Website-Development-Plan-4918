import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FaIcons from 'react-icons/fa';
import SafeIcon from '../common/SafeIcon';

const { FaShieldAlt, FaCloud, FaNetworkWired, FaHeadset, FaArrowRight, FaTimes, FaCheck } = FaIcons;

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      icon: FaShieldAlt,
      title: "Cybersecurity Solutions",
      shortDescription: "Comprehensive security solutions to protect your business from cyber threats and ensure compliance.",
      features: [
        "Endpoint protection (EDR/XDR)",
        "Firewall management & configuration",
        "Email security & phishing protection",
        "Security awareness training",
        "Compliance assistance"
      ],
      detailedContent: {
        overview: "In today's digital landscape, cybersecurity isn't optional—it's essential. Our comprehensive cybersecurity solutions protect your business from evolving threats while ensuring regulatory compliance and maintaining operational efficiency.",
        keyBenefits: [
          "99.9% threat detection and prevention rate",
          "24/7 security monitoring and incident response",
          "Reduced risk of costly data breaches",
          "Enhanced employee security awareness",
          "Streamlined compliance management"
        ],
        serviceDetails: [
          {
            name: "Advanced Threat Protection",
            description: "Multi-layered security including next-generation firewalls, intrusion detection, and behavioral analysis to identify and stop sophisticated attacks before they impact your business."
          },
          {
            name: "Security Awareness Training",
            description: "Comprehensive training programs that transform your employees from security risks into your first line of defense against phishing, social engineering, and other cyber threats."
          },
          {
            name: "Compliance Management",
            description: "Expert guidance and automated tools to help you meet industry regulations like HIPAA, PCI-DSS, SOX, and GDPR with continuous monitoring and reporting."
          },
          {
            name: "Incident Response",
            description: "Rapid response team available 24/7 to contain, investigate, and remediate security incidents, minimizing downtime and protecting your reputation."
          }
        ],
        pricing: "Starting at $299/month for comprehensive protection"
      }
    },
    {
      icon: FaCloud,
      title: "Cloud Services",
      shortDescription: "Strategic cloud migration and management services to modernize your IT infrastructure and reduce costs.",
      features: [
        "Cloud strategy & migration",
        "Microsoft 365 & Google Workspace",
        "Cloud backup & disaster recovery",
        "Infrastructure as a Service (IaaS)",
        "Ongoing cloud management"
      ],
      detailedContent: {
        overview: "Transform your business with cloud technology that scales with your growth, reduces IT costs, and enables remote work capabilities. Our cloud experts guide you through every step of your digital transformation journey.",
        keyBenefits: [
          "Up to 40% reduction in IT infrastructure costs",
          "Enhanced collaboration and mobility",
          "Automatic scalability and flexibility",
          "Improved disaster recovery capabilities",
          "Access to enterprise-grade applications"
        ],
        serviceDetails: [
          {
            name: "Cloud Strategy & Assessment",
            description: "Comprehensive evaluation of your current infrastructure and development of a customized cloud roadmap that aligns with your business objectives and budget."
          },
          {
            name: "Microsoft 365 Implementation",
            description: "Full deployment and optimization of Microsoft 365 suite including Exchange Online, SharePoint, Teams, and advanced security features with user training and adoption support."
          },
          {
            name: "Cloud Migration Services",
            description: "Seamless migration of your applications, data, and workloads to cloud platforms with minimal downtime and comprehensive testing to ensure business continuity."
          },
          {
            name: "Hybrid Cloud Solutions",
            description: "Design and implement hybrid environments that combine on-premises and cloud resources for optimal performance, security, and cost-effectiveness."
          }
        ],
        pricing: "Migration projects start at $5,000, managed services from $199/month"
      }
    },
    {
      icon: FaNetworkWired,
      title: "Managed Network Services",
      shortDescription: "Professional network design, implementation, and monitoring to ensure reliable connectivity and optimal performance.",
      features: [
        "Network design & implementation",
        "WiFi optimization & security",
        "Firewall configuration",
        "VPN & remote access solutions",
        "24/7 network monitoring"
      ],
      detailedContent: {
        overview: "Your network is the backbone of your business operations. Our managed network services ensure maximum uptime, optimal performance, and secure connectivity for all your business-critical applications and services.",
        keyBenefits: [
          "99.9% network uptime guarantee",
          "Proactive monitoring and issue resolution",
          "Scalable infrastructure that grows with your business",
          "Enhanced security and access control",
          "Improved employee productivity and collaboration"
        ],
        serviceDetails: [
          {
            name: "Network Design & Architecture",
            description: "Custom network design tailored to your business needs, including redundancy planning, capacity optimization, and future growth considerations with detailed documentation."
          },
          {
            name: "Wireless Infrastructure",
            description: "Enterprise-grade WiFi solutions with optimal coverage, security protocols, guest access management, and seamless roaming capabilities throughout your facility."
          },
          {
            name: "Network Security Implementation",
            description: "Multi-layered security approach including firewalls, intrusion prevention, network segmentation, and access controls to protect against internal and external threats."
          },
          {
            name: "Remote Access Solutions",
            description: "Secure VPN and remote desktop solutions enabling your team to work productively from anywhere while maintaining security and compliance standards."
          }
        ],
        pricing: "Network assessments from $500, managed services starting at $399/month"
      }
    },
    {
      icon: FaHeadset,
      title: "Managed IT Services",
      shortDescription: "Proactive IT management and support to keep your technology running smoothly and your team productive.",
      features: [
        "Proactive monitoring & maintenance",
        "24/7 help desk support",
        "Patch management",
        "Vendor management",
        "Strategic IT planning"
      ],
      detailedContent: {
        overview: "Focus on growing your business while we handle your technology. Our managed IT services provide comprehensive support, proactive maintenance, and strategic guidance to optimize your IT investment and minimize disruptions.",
        keyBenefits: [
          "Predictable monthly IT costs",
          "Reduced downtime and increased productivity",
          "Access to enterprise-level IT expertise",
          "Proactive issue prevention and resolution",
          "Strategic technology planning and guidance"
        ],
        serviceDetails: [
          {
            name: "24/7 Monitoring & Support",
            description: "Round-the-clock monitoring of your IT infrastructure with immediate alerts and response to issues, often resolving problems before you're even aware of them."
          },
          {
            name: "Help Desk Services",
            description: "Unlimited technical support for your team via phone, email, or chat with average response times under 15 minutes and first-call resolution rates above 85%."
          },
          {
            name: "Patch & Update Management",
            description: "Automated deployment of security patches and software updates during maintenance windows, ensuring your systems stay secure and current without business disruption."
          },
          {
            name: "Strategic IT Consulting",
            description: "Quarterly technology reviews and strategic planning sessions to align your IT investments with business goals and identify opportunities for improvement and growth."
          }
        ],
        pricing: "Managed services packages start at $149/user/month"
      }
    }
  ];

  const openModal = (service) => {
    setSelectedService(service);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedService(null);
    document.body.style.overflow = 'unset';
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    closeModal();
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 relative inline-block">
            Our IT Services
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-secondary rounded"></span>
          </h2>
          <p className="text-gray text-lg max-w-2xl mx-auto mt-6">
            Comprehensive technology solutions designed for small and medium businesses
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-primary card-hover cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => openModal(service)}
            >
              <div className="bg-gradient-to-br from-primary to-primary-dark h-32 flex items-center justify-center">
                <SafeIcon icon={service.icon} className="text-5xl text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-dark">{service.title}</h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">{service.shortDescription}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm">
                      <span className="text-secondary font-bold mr-3 mt-1">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                  {service.features.length > 3 && (
                    <li className="text-sm text-primary font-medium">
                      +{service.features.length - 3} more features...
                    </li>
                  )}
                </ul>
                <motion.button
                  className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  Learn more <SafeIcon icon={FaArrowRight} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Service Detail Modal */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div
                className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="bg-gradient-to-br from-primary to-primary-dark text-white p-8 relative">
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                  >
                    <SafeIcon icon={FaTimes} className="text-2xl" />
                  </button>
                  <div className="flex items-center gap-4 mb-4">
                    <SafeIcon icon={selectedService.icon} className="text-5xl" />
                    <div>
                      <h3 className="text-3xl font-bold">{selectedService.title}</h3>
                      <p className="text-blue-100 text-lg">{selectedService.detailedContent.pricing}</p>
                    </div>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-8">
                  {/* Overview */}
                  <div className="mb-8">
                    <h4 className="text-2xl font-semibold mb-4 text-dark">Service Overview</h4>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {selectedService.detailedContent.overview}
                    </p>
                  </div>

                  {/* Key Benefits */}
                  <div className="mb-8">
                    <h4 className="text-2xl font-semibold mb-4 text-dark">Key Benefits</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedService.detailedContent.keyBenefits.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-3 p-4 bg-light rounded-lg">
                          <SafeIcon icon={FaCheck} className="text-secondary text-lg mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Detailed Services */}
                  <div className="mb-8">
                    <h4 className="text-2xl font-semibold mb-6 text-dark">What's Included</h4>
                    <div className="space-y-6">
                      {selectedService.detailedContent.serviceDetails.map((detail, index) => (
                        <div key={index} className="border-l-4 border-primary pl-6">
                          <h5 className="text-xl font-semibold mb-2 text-dark">{detail.name}</h5>
                          <p className="text-gray-700 leading-relaxed">{detail.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
                    <motion.button
                      onClick={scrollToContact}
                      className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark transition-all duration-300 btn-hover flex-1"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Get Free Consultation
                    </motion.button>
                    <motion.button
                      onClick={scrollToContact}
                      className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300 btn-hover flex-1"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Request Quote
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Services;