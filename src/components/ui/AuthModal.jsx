import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, User as UserIcon, ArrowRight } from 'lucide-react';

const AuthModal = ({ isOpen, onClose, initialView = 'signin' }) => {
  const [view, setView] = useState(initialView); // 'signin' or 'signup'

  // Reset view when opened
  React.useEffect(() => {
    if (isOpen) setView(initialView);
  }, [isOpen, initialView]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl"
        >
          {/* Header Background */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-br from-purple-royal to-purple-dark" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 rounded-full bg-white/20 p-2 text-white backdrop-blur-md hover:bg-white/30 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="relative pt-20 px-8 pb-8">
            {/* Modal Icon */}
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-lg shadow-purple-royal/20 mb-6">
              <UserIcon className="h-8 w-8 text-purple-royal" />
            </div>

            <h2 className="text-center font-heading text-2xl font-bold text-gray-900 mb-2">
              {view === 'signin' ? 'Welcome Back' : 'Create an Account'}
            </h2>
            <p className="text-center text-sm text-gray-500 mb-8">
              {view === 'signin' 
                ? 'Sign in to access your saved properties and preferences.' 
                : 'Join Luxur to save your favorite premium properties.'}
            </p>

            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Authentication demo successful!"); onClose(); }}>
              {view === 'signup' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <UserIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input type="text" required className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-xl focus:ring-purple-royal focus:border-purple-royal sm:text-sm transition-colors" placeholder="John Doe" />
                  </div>
                </div>
              )}
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input type="email" required className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-xl focus:ring-purple-royal focus:border-purple-royal sm:text-sm transition-colors" placeholder="you@example.com" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input type="password" required className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-xl focus:ring-purple-royal focus:border-purple-royal sm:text-sm transition-colors" placeholder="••••••••" />
                </div>
              </div>

              {view === 'signin' && (
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center">
                    <input id="remember-me" type="checkbox" className="h-4 w-4 text-purple-royal focus:ring-purple-royal border-gray-300 rounded" />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">Remember me</label>
                  </div>
                  <div className="text-sm">
                    <a href="#" className="font-medium text-purple-royal hover:text-purple-dark">Forgot password?</a>
                  </div>
                </div>
              )}

              <button
                type="submit"
                className="w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white bg-purple-royal hover:bg-purple-bright focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-royal transition-all duration-300 transform hover:-translate-y-0.5 mt-6"
              >
                {view === 'signin' ? 'Sign In' : 'Create Account'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600">
                {view === 'signin' ? "Don't have an account? " : "Already have an account? "}
                <button
                  onClick={() => setView(view === 'signin' ? 'signup' : 'signin')}
                  className="font-bold text-purple-royal hover:text-purple-dark transition-colors"
                >
                  {view === 'signin' ? 'Sign up' : 'Log in'}
                </button>
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AuthModal;
