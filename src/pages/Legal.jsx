import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, FileText, Map, ArrowLeft } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Legal = ({ pageType }) => {
  const location = useLocation();
  
  // Determine effective page type from prop or current pathname
  let type = pageType;
  if (!type) {
    if (location.pathname.includes('privacy')) type = 'privacy';
    else if (location.pathname.includes('terms')) type = 'terms';
    else if (location.pathname.includes('sitemap')) type = 'sitemap';
    else type = 'privacy';
  }
  return (
    <div className="bg-purple-tint min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 shadow-lg border border-gray-100">
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="inline-flex items-center text-sm font-semibold text-purple-royal hover:text-purple-dark mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Link>

        {type === 'privacy' && (
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <ShieldCheck className="w-8 h-8 text-purple-royal" />
              <h1 className="text-3xl sm:text-4xl font-heading font-bold text-purple-dark">Privacy Policy</h1>
            </div>
            <p className="text-sm text-gray-400 mb-8">Last Updated: July 2026</p>

            <div className="space-y-6 text-gray-600 leading-relaxed text-sm sm:text-base">
              <p>
                At <strong>Luxur Real Estate</strong>, we respect your privacy and are committed to protecting the personal information you share with us across our website and services.
              </p>

              <h2 className="text-xl font-heading font-bold text-purple-dark pt-4">1. Information We Collect</h2>
              <p>
                We collect personal information that you voluntarily provide to us when inquiring about properties, submitting contact messages, or placing property orders. This includes your full legal name, email address, phone number, and preference details.
              </p>

              <h2 className="text-xl font-heading font-bold text-purple-dark pt-4">2. How We Use Your Information</h2>
              <p>
                Your information is used solely to facilitate real estate transactions, schedule viewings, respond to inquiries, send property updates, and fulfill legal requirements related to purchase or rental agreements.
              </p>

              <h2 className="text-xl font-heading font-bold text-purple-dark pt-4">3. Data Security & Storage</h2>
              <p>
                We implement industry-standard encryption and security measures via Supabase and modern web protocols to protect your personal data against unauthorized access, alteration, or disclosure.
              </p>

              <h2 className="text-xl font-heading font-bold text-purple-dark pt-4">4. Contacting Us</h2>
              <p>
                If you have any questions regarding this Privacy Policy or wish to request data removal, please contact our support team at <a href="mailto:privacy@luxur.com" className="text-purple-royal font-semibold hover:underline">privacy@luxur.com</a>.
              </p>
            </div>
          </div>
        )}

        {type === 'terms' && (
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <FileText className="w-8 h-8 text-purple-royal" />
              <h1 className="text-3xl sm:text-4xl font-heading font-bold text-purple-dark">Terms of Service</h1>
            </div>
            <p className="text-sm text-gray-400 mb-8">Last Updated: July 2026</p>

            <div className="space-y-6 text-gray-600 leading-relaxed text-sm sm:text-base">
              <p>
                Welcome to <strong>Luxur Real Estate</strong>. By accessing or using our platform, you agree to comply with and be bound by the following terms and conditions.
              </p>

              <h2 className="text-xl font-heading font-bold text-purple-dark pt-4">1. Property Listings & Accuracy</h2>
              <p>
                All property listings, specifications, prices, and availability are subject to change without prior notice. While we strive for complete accuracy, listing information is provided for informational purposes.
              </p>

              <h2 className="text-xl font-heading font-bold text-purple-dark pt-4">2. Deposits & Reservations</h2>
              <p>
                Initial deposits or bank transfer submissions made on property listings represent formal intent to reserve or purchase. Final binding ownership is subject to executed real estate contracts and verification.
              </p>

              <h2 className="text-xl font-heading font-bold text-purple-dark pt-4">3. Limitation of Liability</h2>
              <p>
                Luxur Real Estate shall not be held liable for indirect, incidental, or consequential damages resulting from website downtime, third-party link interactions, or market fluctuations.
              </p>
            </div>
          </div>
        )}

        {type === 'sitemap' && (
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Map className="w-8 h-8 text-purple-royal" />
              <h1 className="text-3xl sm:text-4xl font-heading font-bold text-purple-dark">Website Sitemap</h1>
            </div>
            <p className="text-sm text-gray-400 mb-8">Overview of all accessible pages on Luxur Real Estate.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 font-medium">
              {[
                { label: '🏠 Home Page', path: '/' },
                { label: '🏰 Properties Directory', path: '/properties' },
                { label: '💼 Our Services', path: '/services' },
                { label: '📞 Contact Us', path: '/contact' },
                { label: '🏢 About Luxur', path: '/about' },
                { label: '🚀 Careers', path: '/careers' },
                { label: '❓ Frequently Asked Questions (FAQs)', path: '/faqs' },
                { label: '➕ List Your Property', path: '/list-property' },
                { label: '⚙️ Settings', path: '/settings' },
              ].map((item, idx) => (
                <Link
                  key={idx}
                  to={item.path}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="p-4 rounded-xl border border-gray-100 hover:border-purple-royal hover:bg-purple-tint/50 text-purple-dark transition-all flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <span className="text-xs text-purple-royal font-semibold">Visit →</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Legal;
