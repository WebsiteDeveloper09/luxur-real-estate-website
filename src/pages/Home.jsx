import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, MapPin, ChevronDown, ArrowRight, Shield, TrendingUp, Users, ArrowUpRight } from 'lucide-react';
import PropertyCard from '../components/ui/PropertyCard';

// Dummy data for featured properties
const featuredProperties = [
  {
    id: 1,
    title: 'Modern Glass Villa in the Hills',
    location: 'Beverly Hills, California',
    price: '$8,500,000',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=2000',
    beds: 5,
    baths: 6,
    sqft: '6,200',
    garage: 3,
    featured: true,
    status: 'For Sale'
  },
  {
    id: 2,
    title: 'Luxury Penthouse with Ocean View',
    location: 'Miami Beach, Florida',
    price: '$5,200,000',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2000',
    beds: 3,
    baths: 4,
    sqft: '3,800',
    garage: 2,
    featured: true,
    status: 'For Sale'
  },
  {
    id: 3,
    title: 'Historic Manor Estate',
    location: 'Greenwich, Connecticut',
    price: '$12,750,000',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=2000',
    beds: 7,
    baths: 8,
    sqft: '12,400',
    garage: 5,
    featured: true,
    status: 'For Sale'
  }
];

const categories = [
  { name: 'Luxury Villas', icon: '🏰', count: '120+ Properties', bg: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1000' },
  { name: 'Modern Apartments', icon: '🏢', count: '350+ Properties', bg: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1000' },
  { name: 'Family Homes', icon: '🏡', count: '500+ Properties', bg: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000' },
  { name: 'Commercial Spaces', icon: '🏛️', count: '80+ Properties', bg: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000' }
];

const Home = () => {
  // Hero section animation variants
  const heroTextVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    }),
  };

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-dark/60 via-purple-dark/40 to-purple-dark/80 z-10" />
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80"
            alt="Luxury Property"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center lg:text-left mt-16">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.h1 custom={1} variants={heroTextVariants} className="text-5xl md:text-7xl font-heading text-white font-bold leading-tight mb-6 drop-shadow-lg">
              Where Luxury Meets <span className="text-purple-bright">Lifestyle</span>
            </motion.h1>
            <motion.p custom={2} variants={heroTextVariants} className="text-xl md:text-2xl text-white/90 mb-10 drop-shadow-md font-light">
              Discover exceptional properties in premium locations worldwide.
            </motion.p>

            {/* Search Bar (Glassmorphism) */}
            <motion.div custom={3} variants={heroTextVariants} className="glass p-4 rounded-2xl md:rounded-full flex flex-col md:flex-row items-center gap-4 max-w-4xl">
              <div className="flex-1 w-full flex items-center px-4 py-2 border-b md:border-b-0 md:border-r border-gray-300/30">
                <MapPin className="w-5 h-5 text-purple-dark mr-3" />
                <input type="text" placeholder="Enter city, neighborhood..." className="w-full bg-transparent border-none focus:outline-none text-gray-800 placeholder-gray-500 font-medium" />
              </div>
              <div className="flex-1 w-full flex items-center px-4 py-2 border-b md:border-b-0 md:border-r border-gray-300/30">
                <ChevronDown className="w-5 h-5 text-purple-dark mr-3" />
                <select className="w-full bg-transparent border-none focus:outline-none text-gray-800 font-medium appearance-none cursor-pointer">
                  <option value="">Property Type</option>
                  <option value="house">House</option>
                  <option value="villa">Villa</option>
                  <option value="apartment">Apartment</option>
                </select>
              </div>
              <button className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-purple-royal to-purple-bright text-white rounded-xl md:rounded-full font-bold hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all flex items-center justify-center gap-2 group">
                <span>Search</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center"
        >
          <span className="text-white/70 text-sm font-medium mb-2 uppercase tracking-wider">Scroll to Explore</span>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ChevronDown className="w-6 h-6 text-white" />
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-24 bg-purple-tint relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-heading font-bold mb-4"
            >
              Featured Properties
            </motion.h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              className="w-24 h-1 bg-purple-royal mx-auto mb-6"
            />
            <p className="text-gray-500 max-w-2xl mx-auto">
              Explore our curated selection of premium real estate, designed for those who appreciate the finer things in life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property, index) => (
              <PropertyCard key={property.id} property={property} index={index} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/properties" className="btn-outline group inline-flex items-center">
              View All Properties
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Property Categories Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-heading font-bold mb-4">Explore by Property Type</h2>
              <div className="w-24 h-1 bg-purple-royal mb-4"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative h-72 rounded-2xl overflow-hidden group cursor-pointer"
              >
                <img src={category.bg} alt={category.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-dark/90 group-hover:to-purple-dark/80 transition-colors" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="text-4xl mb-4 transform group-hover:-translate-y-2 transition-transform">{category.icon}</div>
                  <h3 className="text-white text-xl font-bold font-heading mb-1 group-hover:text-purple-bright transition-colors">{category.name}</h3>
                  <p className="text-white/70 text-sm">{category.count}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us & Statistics */}
      <section className="py-24 bg-purple-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pattern-grid-lg"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-purple-bright font-bold tracking-wider text-sm uppercase mb-4 block">Why Choose Us</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white">Your Trusted Real Estate Partner</h2>
              <p className="text-gray-400 mb-10 text-lg leading-relaxed">
                With over a decade of excellence in the luxury real estate market, we provide unparalleled service, deep market insights, and exclusive access to the world's most desirable properties.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Shield, title: 'Expert Guidance', desc: 'Navigate complex transactions with our seasoned professionals.' },
                  { icon: TrendingUp, title: 'Market Insights', desc: 'Data-driven analysis to maximize your investment returns.' },
                  { icon: Users, title: 'Personalized Service', desc: 'Bespoke solutions tailored to your unique lifestyle needs.' }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 + 0.4 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-purple-royal/30 border border-purple-bright/20 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-purple-bright" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1 text-white">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Content / Image + Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden h-[600px]">
                <img 
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1373&q=80" 
                  alt="Modern Office" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-purple-dark/20 mix-blend-multiply"></div>
              </div>
              
              {/* Floating Stat Card */}
              <div className="absolute -bottom-8 -left-8 bg-white text-purple-dark p-8 rounded-2xl shadow-2xl glass-dark">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-4xl font-bold text-purple-royal mb-1">2.5k+</div>
                    <div className="text-sm font-medium text-gray-500">Properties Sold</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-purple-royal mb-1">98%</div>
                    <div className="text-sm font-medium text-gray-500">Client Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-purple-royal mb-1">15+</div>
                    <div className="text-sm font-medium text-gray-500">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-purple-royal mb-1">50+</div>
                    <div className="text-sm font-medium text-gray-500">Expert Agents</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
