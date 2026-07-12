import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Camera, Briefcase, MessageCircle, Phone, Mail, MapPin, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <footer className="bg-gradient-to-b from-purple-dark to-black text-white pt-16 pb-8 border-t border-purple-royal/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          
          {/* Column 1: Brand & Social */}
          <motion.div variants={itemVariants} className="space-y-6">
            <Link to="/" className="inline-block">
              <span className="font-heading text-3xl font-bold tracking-wide text-white">Luxur</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Your Gateway to Dream Homes. Discover exceptional properties in premium locations worldwide.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-purple-royal hover:text-white transition-all duration-300 transform hover:scale-110">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-purple-royal hover:text-white transition-all duration-300 transform hover:scale-110">
                <Camera className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-purple-royal hover:text-white transition-all duration-300 transform hover:scale-110">
                <Briefcase className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-purple-royal hover:text-white transition-all duration-300 transform hover:scale-110">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="font-heading text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { name: 'Properties', path: '/properties' },
                { name: 'Services', path: '/services' },
                { name: 'About Us', path: '/about' },
                { name: 'Contact', path: '/contact' },
                { name: 'Careers', path: '/' },
                { name: 'FAQs', path: '/' },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-white transition-colors flex items-center group">
                    <span className="w-0 h-0.5 bg-purple-bright mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Contact Us */}
          <motion.div variants={itemVariants}>
            <h3 className="font-heading text-xl font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:+18001234567" className="text-gray-400 hover:text-white transition-colors flex items-start group">
                  <Phone className="w-5 h-5 mr-3 text-purple-bright group-hover:text-white transition-colors" />
                  <span>+1 (800) 123-4567</span>
                </a>
              </li>
              <li>
                <a href="mailto:contact@luxur.com" className="text-gray-400 hover:text-white transition-colors flex items-start group">
                  <Mail className="w-5 h-5 mr-3 text-purple-bright group-hover:text-white transition-colors" />
                  <span>contact@luxur.com</span>
                </a>
              </li>
              <li className="flex items-start text-gray-400">
                <MapPin className="w-5 h-5 mr-3 text-purple-bright shrink-0" />
                <span>
                  123 Luxury Avenue, Suite 500<br />
                  Beverly Hills, CA 90210
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Column 4: Newsletter */}
          <motion.div variants={itemVariants}>
            <h3 className="font-heading text-xl font-semibold mb-6">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">
              Stay updated on new listings and market insights.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-royal transition-colors"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-purple-royal hover:bg-purple-bright text-white font-medium py-3 rounded-lg transition-colors flex justify-center items-center gap-2"
              >
                <span>Subscribe</span>
              </button>
            </form>
          </motion.div>

        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Luxur Real Estate. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm text-gray-500">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="#" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
