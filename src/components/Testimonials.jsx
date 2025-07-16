import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      text: "KirronTECH implemented a complete PCI compliance solution for our restaurant chain. We passed our audit with flying colors and avoided $15k in potential fines.",
      author: "Michael Rodriguez",
      position: "Owner, Bella Italia Restaurants",
      initials: "MR"
    },
    {
      text: "Their team redesigned our entire kitchen networking system. We've had zero downtime during peak hours since implementation. Worth every penny!",
      author: "Sarah Johnson",
      position: "Operations Manager, Urban Grill",
      initials: "SJ"
    },
    {
      text: "The audio system installation transformed our dining experience. Our customers love the ambiance, and staff can easily control different zones for each section.",
      author: "Lisa Parker",
      position: "General Manager, The Coastal Kitchen",
      initials: "LP"
    },
    {
      text: "The cybersecurity training they provided saved us from a major phishing attack. Our staff now recognizes threats before they become problems.",
      author: "Thomas Parker",
      position: "CEO, TechStart Solutions",
      initials: "TP"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 relative inline-block">
            Client Testimonials
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-secondary rounded"></span>
          </h2>
          <p className="text-gray text-lg max-w-2xl mx-auto mt-6">
            What our clients say about our IT services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-light p-8 rounded-xl shadow-lg relative card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Quote Mark */}
              <div className="absolute top-4 left-6 text-6xl text-primary opacity-10 font-serif">"</div>
              <div className="relative z-10">
                <p className="text-gray-700 italic mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark">{testimonial.author}</h4>
                    <p className="text-gray text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;