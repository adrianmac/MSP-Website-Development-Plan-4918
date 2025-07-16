import React from 'react';
import { motion } from 'framer-motion';
import * as FaIcons from 'react-icons/fa';
import SafeIcon from '../common/SafeIcon';
import ContactForm from './ContactForm';

const { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaShieldAlt, FaHeadset } = FaIcons;

const ContactSection = () => {
  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: "Our Location",
      details: [
        "123 Business Ave",
        "Tech City, TC 10001",
        "United States"
      ],
      link: "https://maps.google.com"
    },
    {
      icon: FaPhone,
      title: "Phone Numbers",
      details: [
        "Main: (555) 123-4567",
        "Emergency: (555) 123-4568",
        "Toll-Free: (800) 123-4567"
      ],
      link: "tel:+15551234567"
    },
    {
      icon: FaEnvelope,
      title: "Email Addresses",
      details: [
        "General: info@kirrontech.com",
        "Support: support@kirrontech.com",
        "Sales: sales@kirrontech.com"
      ],
      link: "mailto:info@kirrontech.com"
    },
    {
      icon: FaClock,
      title: "Business Hours",
      details: [
        "Mon-Fri: 8:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 2:00 PM",
        "24/7 Emergency Support Available"
      ]
    }
  ];

  const features = [
    {
      icon: FaHeadset,
      title: "24/7 Support",
      description: "Round-the-clock technical support for critical issues"
    },
    {
      icon: FaShieldAlt,
      title: "Secure Communication",
      description: "All communications are encrypted and confidential"
    },
    {
      icon: FaPhone,
      title: "Rapid Response",
      description: "Emergency response within 2 hours guaranteed"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 relative inline-block">
            Get Your Free IT Assessment
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-secondary rounded"></span>
          </h2>
          <p className="text-gray text-lg max-w-3xl mx-auto mt-6">
            Ready to enhance your business technology? Contact us today for a comprehensive IT assessment and discover how we can improve your security, efficiency, and productivity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-dark mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-light transition-colors duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-primary p-3 rounded-lg flex-shrink-0">
                      <SafeIcon icon={info.icon} className="text-xl text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark mb-2">{info.title}</h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600 text-sm">
                          {info.link && detailIndex === 0 ? (
                            <a
                              href={info.link}
                              className="hover:text-primary transition-colors duration-300"
                            >
                              {detail}
                            </a>
                          ) : (
                            detail
                          )}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Features */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-semibold text-dark mb-4">Why Choose Us?</h4>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <SafeIcon icon={feature.icon} className="text-primary text-lg mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-medium text-dark text-sm">{feature.title}</h5>
                        <p className="text-gray-600 text-xs">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-dark mb-6">Send Us a Message</h3>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;