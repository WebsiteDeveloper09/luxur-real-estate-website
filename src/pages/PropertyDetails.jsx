import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Heart, Share2, Bed, Bath, Square, Calendar, Car, Home, Phone, Mail, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const PropertyDetails = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const [activeImage, setActiveImage] = useState(0);

  const images = [
    'https://images.unsplash.com/photo-1613490908578-15494f1c1f5d?auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1470&q=80',
  ];

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'features', label: 'Features & Amenities' },
    { id: 'location', label: 'Location' },
    { id: 'mortgage', label: 'Mortgage Calculator' },
  ];

  return (
    <div className="bg-purple-tint min-h-screen pt-24 pb-20">
      
      {/* Image Gallery Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 h-[60vh] min-h-[500px]">
          {/* Main Image */}
          <div className="lg:col-span-3 relative rounded-2xl overflow-hidden group cursor-pointer">
            <img 
              src={images[activeImage]} 
              alt="Property main view" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute top-6 right-6 flex gap-3 z-10">
              <button className="w-12 h-12 bg-white/70 backdrop-blur-md rounded-full flex items-center justify-center text-gray-800 hover:bg-white hover:text-purple-royal transition-colors shadow-lg">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="w-12 h-12 bg-white/70 backdrop-blur-md rounded-full flex items-center justify-center text-gray-800 hover:bg-white hover:text-purple-royal transition-colors shadow-lg">
                <Heart className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          {/* Thumbnails */}
          <div className="hidden lg:grid grid-rows-3 gap-4 h-full">
            {images.slice(1, 4).map((img, idx) => (
              <div 
                key={idx} 
                className="relative rounded-2xl overflow-hidden cursor-pointer group"
                onClick={() => setActiveImage(idx + 1)}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                {idx === 2 && (
                  <div className="absolute inset-0 bg-black/50 z-20 flex items-center justify-center">
                    <span className="text-white font-medium text-lg border-2 border-white px-4 py-2 rounded-lg">View All Photos</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content & Sidebar Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 relative">
          
          {/* Left Column - Details */}
          <div className="lg:w-2/3">
            
            {/* Header Info */}
            <div className="bg-white p-8 rounded-3xl shadow-sm mb-8 relative">
              <div className="absolute top-0 right-0 bg-purple-royal text-white px-6 py-2 rounded-tr-3xl rounded-bl-3xl font-bold tracking-wider">
                FOR SALE
              </div>
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-purple-dark mb-2 pr-24">Modern Glass Villa in the Hills</h1>
              <p className="flex items-center text-gray-500 mb-6 text-lg">
                <MapPin className="w-5 h-5 mr-2 text-purple-bright shrink-0" />
                Beverly Hills, California 90210
              </p>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-t border-gray-100 pt-6">
                <div>
                  <div className="text-4xl font-bold text-purple-royal mb-1">$8,500,000</div>
                  <div className="text-gray-500 font-medium">Est. $35,420/mo • $1,370/sqft</div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex flex-col items-center p-3 bg-purple-tint rounded-xl min-w-[80px]">
                    <Bed className="w-6 h-6 text-purple-royal mb-1" />
                    <span className="font-bold text-lg">5</span>
                    <span className="text-xs text-gray-500 uppercase">Beds</span>
                  </div>
                  <div className="flex flex-col items-center p-3 bg-purple-tint rounded-xl min-w-[80px]">
                    <Bath className="w-6 h-6 text-purple-royal mb-1" />
                    <span className="font-bold text-lg">6</span>
                    <span className="text-xs text-gray-500 uppercase">Baths</span>
                  </div>
                  <div className="flex flex-col items-center p-3 bg-purple-tint rounded-xl min-w-[80px]">
                    <Square className="w-6 h-6 text-purple-royal mb-1" />
                    <span className="font-bold text-lg">6.2k</span>
                    <span className="text-xs text-gray-500 uppercase">Sq Ft</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sticky Tabs Navigation */}
            <div className="bg-white rounded-2xl shadow-sm mb-8 overflow-hidden sticky top-24 z-30">
              <div className="flex overflow-x-auto hide-scrollbar">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 py-4 px-6 text-sm font-medium whitespace-nowrap transition-colors relative ${
                      activeTab === tab.id ? 'text-purple-royal bg-purple-tint/50' : 'text-gray-500 hover:text-gray-800 hover:bg-gray-50'
                    }`}
                  >
                    {tab.label}
                    {activeTab === tab.id && (
                      <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-1 bg-purple-royal" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="bg-white p-8 rounded-3xl shadow-sm mb-8 min-h-[400px]">
              <AnimatePresence mode="wait">
                
                {activeTab === 'overview' && (
                  <motion.div key="overview" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                    <h3 className="text-2xl font-heading font-bold mb-4">Property Description</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      An architectural masterpiece situated in the prestigious hills of Beverly Hills. This modern glass villa offers unparalleled luxury and breathtaking panoramic views of the city skyline and ocean. Designed by award-winning architects, the home seamlessly blends indoor and outdoor living.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-8">
                      The open-concept main floor features soaring 14-foot ceilings, automated Fleetwood sliding glass doors, and a state-of-the-art chef's kitchen outfitted with dual Sub-Zero refrigerators and a massive Calcutta marble island. The primary suite is a true sanctuary, occupying an entire wing with a spa-like bathroom, expansive dual closets, and a private terrace.
                    </p>
                    
                    <h3 className="text-2xl font-heading font-bold mb-6 pt-6 border-t border-gray-100">Key Details</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                      {[
                        { icon: Home, label: 'Property Type', val: 'Single Family' },
                        { icon: Calendar, label: 'Year Built', val: '2022' },
                        { icon: Car, label: 'Garage', val: '3 Spaces' },
                        { icon: Square, label: 'Lot Size', val: '0.45 Acres' },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 shrink-0">
                            <item.icon className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-xs text-gray-400 uppercase tracking-wider">{item.label}</div>
                            <div className="font-medium text-gray-800">{item.val}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === 'features' && (
                  <motion.div key="features" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                    <h3 className="text-2xl font-heading font-bold mb-6">Features & Amenities</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                      {['Infinity Pool & Spa', 'Smart Home Automation', 'Home Theater', 'Wine Cellar (500 bottles)', 'Gourmet Chef\'s Kitchen', 'Outdoor Kitchen & BBQ', 'Fitness Center', 'Radiant Floor Heating', 'Motor Court', 'Security System'].map((feature, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                            <Check className="w-4 h-4" />
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Additional tabs (Location, Mortgage) would follow similar structural patterns */}
                {(activeTab === 'location' || activeTab === 'mortgage') && (
                  <motion.div key="placeholder" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="flex flex-col items-center justify-center h-64 text-gray-400">
                    <span className="text-lg">Content for {tabs.find(t => t.id === activeTab).label} will be displayed here.</span>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>
          </div>

          {/* Right Column - Sidebar / Agent Contact */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-3xl shadow-lg border border-purple-royal/10 p-6 sticky top-28">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=256&q=80" 
                  alt="Agent" 
                  className="w-16 h-16 rounded-full object-cover border-2 border-purple-tint"
                />
                <div>
                  <h3 className="font-heading font-bold text-xl">Michael Sterling</h3>
                  <p className="text-gray-500 text-sm">Senior Luxury Real Estate Advisor</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <a href="tel:+1234567890" className="flex items-center justify-between p-3 rounded-xl border border-gray-200 hover:border-purple-royal transition-colors group">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-purple-tint flex items-center justify-center text-purple-royal group-hover:bg-purple-royal group-hover:text-white transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Call Agent</div>
                      <div className="font-medium group-hover:text-purple-royal transition-colors">(310) 555-0192</div>
                    </div>
                  </div>
                </a>

                <a href="mailto:michael@luxur.com" className="flex items-center justify-between p-3 rounded-xl border border-gray-200 hover:border-purple-royal transition-colors group">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-purple-tint flex items-center justify-center text-purple-royal group-hover:bg-purple-royal group-hover:text-white transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Email Agent</div>
                      <div className="font-medium group-hover:text-purple-royal transition-colors">michael@luxur.com</div>
                    </div>
                  </div>
                </a>
              </div>

              <h4 className="font-bold mb-4">Request a Viewing</h4>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Your Name" className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:border-purple-royal" />
                <input type="email" placeholder="Your Email" className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:border-purple-royal" />
                <input type="tel" placeholder="Your Phone" className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:border-purple-royal" />
                <textarea placeholder="Message (I'm interested in...)" rows="3" className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:border-purple-royal"></textarea>
                <button type="submit" className="btn-primary w-full shadow-lg">Schedule Viewing</button>
              </form>
            </div>
          </div>
          
        </div>
      </div>

    </div>
  );
};

export default PropertyDetails;
