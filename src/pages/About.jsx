import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Award, Users, Home, TrendingUp, Star, ArrowRight, CheckCircle, Quote } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Home, value: '2,500+', label: 'Properties Sold' },
    { icon: Users, value: '1,800+', label: 'Happy Clients' },
    { icon: Award, value: '25+', label: 'Industry Awards' },
    { icon: TrendingUp, value: '$4.2B+', label: 'Total Sales Volume' },
  ];

  const team = [
    {
      name: 'Victoria Harlow',
      role: 'Founder & CEO',
      bio: 'With 20 years in luxury real estate, Victoria has built Luxur into the premier name in high-end property.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'James Whitfield',
      role: 'Chief Sales Officer',
      bio: 'James leads our elite sales team with a record of closing the most prestigious deals in Beverly Hills.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Sophia Chen',
      role: 'Head of Acquisitions',
      bio: 'Sophia brings unparalleled market insight and has sourced over $1B in off-market luxury opportunities.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Marcus Adeyemi',
      role: 'Director of Client Relations',
      bio: 'Marcus ensures every client receives the concierge-level experience that defines the Luxur standard.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    },
  ];

  const values = [
    { title: 'Integrity', desc: 'We operate with full transparency and honesty in every transaction.' },
    { title: 'Excellence', desc: 'We pursue the highest standard in everything we do — no exceptions.' },
    { title: 'Discretion', desc: 'Your privacy is sacred. We handle all dealings in strict confidence.' },
    { title: 'Innovation', desc: 'We leverage cutting-edge technology to deliver superior market insights.' },
  ];

  const testimonials = [
    {
      quote: "Luxur didn't just find us a home — they found us our dream. The process was seamless, professional, and truly extraordinary.",
      name: 'Alexandra & William P.',
      location: 'Beverly Hills, CA',
    },
    {
      quote: "The level of service and market knowledge at Luxur is unmatched. They sold our estate for 18% above asking price within two weeks.",
      name: 'Robert D.',
      location: 'Miami, FL',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-purple-tint min-h-screen overflow-hidden">

      {/* Hero Section */}
      <div className="relative h-[85vh] min-h-[600px] flex items-center justify-center text-white overflow-hidden">
        <img
          src="/images/about-hero.png"
          alt="Luxur Headquarters"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-dark/80 via-purple-dark/60 to-purple-dark/90" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-5 py-2 rounded-full text-sm font-semibold tracking-widest uppercase bg-purple-royal/40 border border-purple-bright/30 text-purple-bright mb-6"
          >
            Our Story
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-5xl md:text-7xl font-heading font-bold leading-tight mb-6"
          >
            Redefining Luxury<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-bright to-accent-gold">
              Real Estate
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            For over two decades, Luxur has been the trusted name for discerning clients seeking the world's most exceptional properties.
          </motion.p>
        </div>
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" className="w-full" preserveAspectRatio="none">
            <path fill="#f5f0ff" d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
          </svg>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-purple-tint py-4">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-shadow group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-royal to-purple-bright flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-3xl font-heading font-bold text-purple-dark mb-1">{stat.value}</div>
                <div className="text-gray-500 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Our Story Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-purple-royal font-semibold tracking-widest uppercase text-sm mb-4 block">Who We Are</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-purple-dark mb-6 leading-tight">
                Built on a Legacy of Trust & Excellence
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Founded in 2001 by Victoria Harlow, Luxur was born from a simple belief: that buying or selling a luxury property should be as extraordinary as the property itself. What began as a boutique Beverly Hills firm has grown into the nation's most recognized name in ultra-premium real estate.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                Today, our network spans Beverly Hills, New York, Miami, and beyond. We represent some of the world's most prestigious properties and serve an elite clientele with the highest standards of discretion, expertise, and personalized service.
              </p>
              <ul className="space-y-3">
                {['Serving clients in 12 major cities nationwide', 'Certified by the National Association of Realtors', 'Ranked #1 in luxury real estate 5 years running', 'Exclusive access to off-market listings worldwide'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-purple-royal shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/about-story.png"
                  alt="Luxury Interior"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-royal to-purple-bright flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-heading font-bold text-purple-dark text-lg">25+ Awards</div>
                  <div className="text-gray-400 text-sm">Industry Recognition</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="py-24 bg-purple-dark text-white relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-royal rounded-full blur-[120px] opacity-20" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-bright rounded-full blur-[120px] opacity-15" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-purple-bright font-semibold tracking-widest uppercase text-sm mb-4 block">What Drives Us</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our Core Values</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-royal to-purple-bright mx-auto" />
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((val, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-purple-bright/40 transition-all group"
              >
                <div className="text-4xl font-heading font-bold text-purple-bright/30 mb-2 group-hover:text-purple-bright/60 transition-colors">0{i + 1}</div>
                <h3 className="text-xl font-heading font-bold text-white mb-3">{val.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{val.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Meet the Team */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-purple-royal font-semibold tracking-widest uppercase text-sm mb-4 block">The People Behind Luxur</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-purple-dark mb-4">Meet Our Leadership</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-royal to-purple-bright mx-auto mb-6" />
            <p className="text-gray-500 max-w-2xl mx-auto">Our world-class team brings together decades of combined expertise to deliver unparalleled service.</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {team.map((member, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className="group text-center"
              >
                <div className="relative mx-auto mb-5 w-40 h-40 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-heading font-bold text-xl text-purple-dark mb-1">{member.name}</h3>
                <p className="text-purple-royal font-medium text-sm mb-3">{member.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Team Group Photo */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-16 rounded-3xl overflow-hidden shadow-2xl relative"
          >
            <img
              src="/images/about-team.png"
              alt="The Luxur Team"
              className="w-full h-80 object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-dark/70 to-transparent flex items-end p-10">
              <div>
                <p className="text-white text-2xl font-heading font-bold">The Luxur Family</p>
                <p className="text-gray-300 text-sm mt-1">150+ dedicated professionals across all our offices</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-24 bg-purple-tint">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-purple-royal font-semibold tracking-widest uppercase text-sm mb-4 block">Client Stories</span>
            <h2 className="text-4xl font-heading font-bold text-purple-dark">What Our Clients Say</h2>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-shadow"
              >
                <Quote className="w-10 h-10 text-purple-royal/20 mb-4" />
                <p className="text-gray-700 text-lg leading-relaxed italic mb-6">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="flex">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} className="w-4 h-4 fill-accent-gold text-accent-gold" />
                    ))}
                  </div>
                  <div>
                    <div className="font-bold text-purple-dark text-sm">{t.name}</div>
                    <div className="text-gray-400 text-xs">{t.location}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-gradient-to-r from-purple-dark via-purple-royal to-purple-dark text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto px-4"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Ready to Experience the Luxur Difference?</h2>
          <p className="text-gray-300 text-lg mb-10">Let our world-class team guide you to your next extraordinary property.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/properties"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-purple-royal font-bold text-lg hover:bg-purple-tint transition-colors shadow-lg"
            >
              Explore Properties <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="flex items-center justify-center px-8 py-4 rounded-xl border-2 border-white/30 text-white font-medium hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>

    </div>
  );
};

export default About;
