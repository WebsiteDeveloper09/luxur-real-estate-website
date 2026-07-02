import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Key, Shield, TrendingUp, Handshake, ArrowRight, Phone } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Property Sales & Marketing',
      desc: 'Expert representation for sellers, utilizing advanced marketing strategies, professional photography, and our global network to maximize your property value.',
    },
    {
      icon: Key,
      title: 'Buyer Representation',
      desc: 'Exclusive access to off-market listings and personalized property tours. We negotiate on your behalf to secure your dream home at the best possible price.',
    },
    {
      icon: Shield,
      title: 'Property Management',
      desc: 'Comprehensive management services for luxury rentals, including tenant screening, maintenance coordination, and financial reporting.',
    },
    {
      icon: TrendingUp,
      title: 'Investment Advisory',
      desc: 'Data-driven insights and portfolio strategies for real estate investors looking to maximize ROI in high-growth luxury markets.',
    },
    {
      icon: Handshake,
      title: 'Relocation Services',
      desc: 'Seamless end-to-end relocation assistance for executives and families, including area orientation, school selection, and move management.',
    },
  ];

  return (
    <div className="bg-purple-tint min-h-screen pt-24 pb-20 overflow-hidden">
      
      {/* Header Section */}
      <div className="bg-purple-dark text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pattern-grid-lg"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-royal rounded-full blur-[100px] opacity-30"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-heading font-bold mb-6"
          >
            Our Premium Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto font-light"
          >
            Delivering excellence in every transaction. We provide comprehensive, bespoke real estate solutions tailored to the world's most discerning clients.
          </motion.p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-purple-royal/10 hover:shadow-xl hover:border-purple-royal/30 transition-all duration-300 group cursor-pointer"
            >
              <div className="w-16 h-16 rounded-2xl bg-purple-tint flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-purple-royal transition-all duration-300">
                <service.icon className="w-8 h-8 text-purple-royal group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-purple-dark mb-4 group-hover:text-purple-royal transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.desc}
              </p>
              <Link to="/contact" className="mt-8 flex items-center text-purple-royal font-medium group-hover:underline">
                Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* The Luxur Process (Timeline) */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4">The Luxur Process</h2>
            <div className="w-24 h-1 bg-purple-royal mx-auto mb-6"></div>
            <p className="text-gray-500 max-w-2xl mx-auto">A streamlined, transparent approach to buying and selling luxury real estate.</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-tint"></div>

            {[
              { step: '01', title: 'Initial Consultation', desc: 'We meet to understand your unique goals, timeline, and preferences.' },
              { step: '02', title: 'Market Strategy', desc: 'Developing a customized plan using real-time data and market analysis.' },
              { step: '03', title: 'Execution & Tours', desc: 'Launching marketing campaigns or conducting curated property tours.' },
              { step: '04', title: 'Negotiation & Closing', desc: 'Expert negotiation to secure the best terms, ensuring a smooth closing process.' }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`relative flex items-center justify-between mb-16 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
              >
                {/* Empty space for alternate side */}
                <div className="w-5/12"></div>
                
                {/* Center Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white border-4 border-purple-royal rounded-full flex items-center justify-center z-10 shadow-lg">
                  <span className="font-bold text-purple-royal">{item.step}</span>
                </div>
                
                {/* Content Card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <div className="bg-purple-tint/30 p-6 rounded-2xl hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold text-purple-dark mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="bg-gradient-to-r from-purple-dark to-purple-royal rounded-3xl p-12 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-black/10 mix-blend-multiply"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Ready to Experience Luxury?</h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Contact our advisory team today to discuss your real estate needs in complete confidentiality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary bg-white text-purple-royal hover:bg-purple-tint px-8 py-4 text-lg border-none flex items-center justify-center">
                Schedule a Consultation
              </Link>
              <button className="flex items-center justify-center px-8 py-4 rounded-xl border-2 border-white/30 text-white font-medium hover:bg-white/10 transition-colors">
                <Phone className="w-5 h-5 mr-2" /> (800) 123-4567
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Services;
