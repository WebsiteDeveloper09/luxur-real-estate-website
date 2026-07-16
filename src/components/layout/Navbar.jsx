import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, Heart, User, Menu, X, Home } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AuthModal from '../ui/AuthModal';
import { useFavorites } from '../../context/FavoritesContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authView, setAuthView] = useState('signin');
  const location = useLocation();
  const navigate = useNavigate();
  const navRef = useRef(null);
  const { favorites } = useFavorites();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside the navbar
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const openAuthModal = (view) => {
    setAuthView(view);
    setIsAuthModalOpen(true);
    setActiveDropdown(null);
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate('/properties', { state: { search: searchQuery.trim() } });
      setActiveDropdown(null);
      setSearchQuery('');
    } else {
      navigate('/properties');
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Properties', path: '/properties' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-4'
            : 'bg-white/80 backdrop-blur-sm shadow-sm py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center gap-2 group">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-royal to-purple-bright flex items-center justify-center text-white font-heading text-xl font-bold group-hover:scale-105 transition-transform">
                  LU
                </div>
                <span
                  className={`font-heading text-2xl font-bold tracking-wide transition-colors text-purple-dark`}
                >
                  Luxur
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors relative group text-gray-700 hover:text-purple-royal ${
                    location.pathname === link.path ? 'text-purple-royal font-bold' : ''
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-1/2 w-0 h-0.5 bg-purple-royal transition-all duration-300 group-hover:w-full group-hover:left-0 ${
                      location.pathname === link.path ? 'w-full left-0' : ''
                    }`}
                  ></span>
                </Link>
              ))}
            </div>

            {/* Right Icons & CTA */}
            <div className="hidden md:flex items-center space-x-6">
              
              {/* Search Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setActiveDropdown(activeDropdown === 'search' ? null : 'search')}
                  className={`transition-colors text-gray-700 hover:text-purple-royal`}
                >
                  <Search className="w-5 h-5" />
                </button>
                <AnimatePresence>
                  {activeDropdown === 'search' && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute right-0 mt-4 w-72 bg-white rounded-2xl shadow-xl border border-gray-100 p-4">
                      <div className="flex gap-2">
                        <input 
                          type="text" 
                          placeholder="Search properties..." 
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                          className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-purple-royal" 
                        />
                        <button onClick={handleSearch} className="bg-purple-royal text-white px-4 rounded-lg text-sm font-medium hover:bg-purple-bright transition-colors">Go</button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Favorites Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setActiveDropdown(activeDropdown === 'heart' ? null : 'heart')}
                  className={`relative transition-colors text-gray-700 hover:text-purple-royal`}
                >
                  <Heart className="w-5 h-5" />
                  {favorites.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-accent-gold text-white text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">
                      {favorites.length}
                    </span>
                  )}
                </button>
                <AnimatePresence>
                  {activeDropdown === 'heart' && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute right-0 mt-4 w-80 bg-white rounded-2xl shadow-xl border border-gray-100 p-4">
                      <h4 className="font-heading font-bold text-purple-dark mb-3">Saved Properties</h4>
                      {favorites.length === 0 ? (
                        <p className="text-sm text-gray-400 py-4 text-center">No saved properties yet.<br/>Click the heart on a property to save it.</p>
                      ) : (
                        <>
                          <div className="space-y-3 mb-4 max-h-60 overflow-y-auto">
                            {favorites.map((fav) => (
                              <div key={fav.id} className="flex gap-3 items-center cursor-pointer group" onClick={() => { navigate('/properties'); setActiveDropdown(null); }}>
                                <div className="w-12 h-12 rounded-lg bg-gray-200 overflow-hidden shrink-0"><img src={fav.image} alt={fav.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform"/></div>
                                <div className="flex-1 min-w-0"><p className="text-sm font-bold text-purple-dark group-hover:text-purple-royal transition-colors truncate">{fav.title}</p><p className="text-xs text-gray-500">{fav.location}</p></div>
                              </div>
                            ))}
                          </div>
                          <button onClick={() => { navigate('/properties', { state: { showSaved: true } }); setActiveDropdown(null); }} className="w-full btn-outline text-xs py-2">View All Saved</button>
                        </>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* User Menu Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setActiveDropdown(activeDropdown === 'user' ? null : 'user')}
                  className={`transition-colors text-gray-700 hover:text-purple-royal`}
                >
                  <User className="w-5 h-5" />
                </button>
                <AnimatePresence>
                  {activeDropdown === 'user' && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute right-0 mt-4 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 overflow-hidden">
                      <button onClick={() => openAuthModal('signin')} className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-purple-tint hover:text-purple-royal transition-colors font-medium">Sign In</button>
                      <button onClick={() => openAuthModal('signup')} className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-purple-tint hover:text-purple-royal transition-colors font-medium">Create Account</button>
                      <div className="h-px bg-gray-100 my-2"></div>
                      <button onClick={() => { navigate('/settings'); setActiveDropdown(null); }} className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-purple-tint hover:text-purple-royal transition-colors font-medium">My Settings</button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <Link
                to="/list-property"
                className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-300 transform hover:-translate-y-0.5 ${
                  scrolled
                    ? 'bg-gradient-to-r from-purple-royal to-purple-bright text-white shadow-lg hover:shadow-purple-royal/30'
                    : 'bg-white text-purple-dark hover:bg-purple-tint'
                }`}
              >
                List Property
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className={`p-2 rounded-md text-gray-700`}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-purple-dark text-white flex flex-col"
          >
            <div className="flex justify-between items-center p-6 border-b border-white/10">
              <span className="font-heading text-2xl font-bold text-white">Luxur</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-white/70 hover:text-white transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
            </div>
            <div className="flex flex-col flex-1 p-8 space-y-6 overflow-y-auto">
              {navLinks.map((link, index) => (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  key={link.name}
                >
                  <Link
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-3xl font-heading text-white hover:text-purple-bright transition-colors block"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-auto pt-8 flex gap-4"
              >
                <Link
                  to="/list-property"
                  className="w-full text-center py-4 bg-gradient-to-r from-purple-royal to-purple-bright rounded-xl font-bold"
                >
                  List Property
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
        initialView={authView} 
      />
    </>
  );
};

export default Navbar;
