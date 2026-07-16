import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, TrendingUp, Heart, Users, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const openings = [
  {
    title: 'Senior Luxury Real Estate Advisor',
    department: 'Sales',
    location: 'Beverly Hills, CA',
    type: 'Full-Time',
    description: 'Lead high-net-worth client relationships and manage the full lifecycle of luxury property transactions in our flagship Beverly Hills office.'
  },
  {
    title: 'Digital Marketing Strategist',
    department: 'Marketing',
    location: 'Remote (US)',
    type: 'Full-Time',
    description: 'Drive growth through data-driven digital campaigns across social media, SEO, and paid channels targeting affluent real estate buyers.'
  },
  {
    title: 'Property Manager',
    department: 'Operations',
    location: 'Miami, FL',
    type: 'Full-Time',
    description: 'Oversee day-to-day operations of luxury rental properties, coordinate maintenance, and deliver a 5-star experience to high-profile tenants.'
  },
  {
    title: 'UX / Product Designer',
    department: 'Technology',
    location: 'Remote (Global)',
    type: 'Contract',
    description: 'Shape the digital experience of our award-winning platform by designing elegant, intuitive interfaces that match our brand\'s luxury ethos.'
  },
  {
    title: 'Financial Analyst — Real Estate',
    department: 'Finance',
    location: 'New York, NY',
    type: 'Full-Time',
    description: 'Provide financial modeling, market analysis, and investment appraisals to support our executive team and key client transactions.'
  },
];

const perks = [
  { icon: TrendingUp, title: 'Competitive Compensation', desc: 'Industry-leading salaries plus performance bonuses and equity options for senior roles.' },
  { icon: Heart, title: 'Premium Health Benefits', desc: 'Comprehensive medical, dental, and vision coverage for you and your dependents.' },
  { icon: Users, title: 'Collaborative Culture', desc: 'Work alongside passionate experts in a diverse, inclusive, and supportive environment.' },
  { icon: Star, title: 'Career Growth', desc: 'Structured mentorship programs, continuing education allowances, and fast-track promotion paths.' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Careers = () => {
  return (
    <div className="bg-purple-tint min-h-screen overflow-hidden">

      {/* Hero */}
      <div className="relative bg-gradient-to-br from-purple-dark via-purple-royal to-purple-dark py-32 px-4 text-white text-center overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-bright rounded-full blur-[150px] opacity-15" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-gold rounded-full blur-[120px] opacity-10" />
        <img
          src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80&w=2000"
          alt="Luxur Office"
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-5 py-2 rounded-full text-sm font-semibold tracking-widest uppercase bg-white/10 border border-white/20 text-purple-bright mb-6"
          >
            Join Our Team
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-5xl md:text-6xl font-heading font-bold mb-6 text-white drop-shadow-lg"
          >
            Build Your Career <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-bright to-accent-gold">
              With Luxur
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white/80 text-lg max-w-xl mx-auto"
          >
            Join a team of world-class professionals redefining the luxury real estate experience. We are always looking for exceptional talent.
          </motion.p>
        </div>
      </div>

      {/* Perks */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-purple-dark mb-4">Why Work at Luxur?</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-royal to-purple-bright mx-auto" />
          </div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {perks.map((perk, i) => (
              <motion.div key={i} variants={itemVariants} className="text-center p-8 bg-purple-tint rounded-2xl hover:shadow-lg transition-shadow group">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-royal to-purple-bright flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                  <perk.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-heading font-bold text-purple-dark text-lg mb-2">{perk.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{perk.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Open Positions */}
      <div className="py-24 bg-purple-tint">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-purple-royal font-semibold tracking-widest uppercase text-sm mb-4 block">We're Hiring</span>
            <h2 className="text-4xl font-heading font-bold text-purple-dark mb-4">Open Positions</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-royal to-purple-bright mx-auto" />
          </div>
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {openings.map((job, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-purple-royal/20 transition-all group cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="text-xs font-bold text-purple-royal bg-purple-royal/10 px-3 py-1 rounded-full">{job.department}</span>
                      <span className="text-xs font-bold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{job.type}</span>
                      <span className="text-xs font-bold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{job.location}</span>
                    </div>
                    <h3 className="font-heading font-bold text-xl text-purple-dark group-hover:text-purple-royal transition-colors mb-2">{job.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{job.description}</p>
                  </div>
                  <div className="shrink-0">
                    <Link
                      to="/contact"
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                      className="btn-primary inline-flex items-center gap-2 whitespace-nowrap"
                    >
                      Apply Now <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-purple-dark py-20 text-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <Briefcase className="w-12 h-12 text-purple-bright mx-auto mb-6" />
          <h2 className="text-3xl font-heading font-bold mb-4">Don't see a role that fits?</h2>
          <p className="text-gray-400 mb-8">We are always on the lookout for exceptional talent. Send us your CV and we'll be in touch when the right opportunity arises.</p>
          <Link
            to="/contact"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="btn-primary inline-flex items-center gap-2"
          >
            Send Your CV <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>

    </div>
  );
};

export default Careers;
