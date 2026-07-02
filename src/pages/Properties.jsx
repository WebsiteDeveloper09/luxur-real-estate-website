import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Grid, List, Map as MapIcon, ChevronDown, X } from 'lucide-react';
import PropertyCard from '../components/ui/PropertyCard';

// Dummy data
const properties = [
  { id: 1, title: 'Modern Glass Villa in the Hills', location: 'Beverly Hills, CA', price: '$8,500,000', image: '/images/properties/villa-beverly-hills.png', beds: 5, baths: 6, sqft: '6,200', garage: 3, featured: true, status: 'For Sale' },
  { id: 2, title: 'Luxury Penthouse with Ocean View', location: 'Miami Beach, FL', price: '$5,200,000', image: '/images/properties/penthouse-miami.png', beds: 3, baths: 4, sqft: '3,800', garage: 2, featured: false, status: 'For Sale' },
  { id: 3, title: 'Historic Manor Estate', location: 'Greenwich, CT', price: '$12,750,000', image: '/images/properties/manor-estate.png', beds: 7, baths: 8, sqft: '12,400', garage: 5, featured: true, status: 'For Sale' },
  { id: 4, title: 'Contemporary Mountain Retreat', location: 'Aspen, CO', price: '$9,100,000', image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80', beds: 4, baths: 5, sqft: '4,500', garage: 2, featured: false, status: 'For Rent' },
  { id: 5, title: 'Downtown Skyline Loft', location: 'New York, NY', price: '$3,800,000', image: '/images/properties/downtown-loft.png', beds: 2, baths: 2, sqft: '2,100', garage: 1, featured: false, status: 'For Sale' },
  { id: 6, title: 'Seaside Modern Home', location: 'Malibu, CA', price: '$15,000,000', image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=800&q=80', beds: 5, baths: 6, sqft: '5,800', garage: 4, featured: true, status: 'For Sale' },
];

const Properties = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  
  const itemsPerPage = 4;
  const totalPages = Math.ceil(properties.length / itemsPerPage);
  const paginatedProperties = properties.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="bg-purple-tint min-h-screen pt-24 pb-20">
      
      {/* Page Header */}
      <div className="bg-gradient-to-r from-purple-dark to-purple-royal py-16 px-4 mb-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-heading font-bold text-white mb-4"
          >
            Find Your Perfect Property
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 text-lg"
          >
            Home &gt; Properties
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar Filters (Desktop) */}
          <div className="hidden lg:block w-1/4">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-28">
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-heading text-xl font-bold">Filters</h2>
                <button className="text-sm text-purple-royal font-medium hover:underline">Clear All</button>
              </div>

              {/* Status */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3 text-sm uppercase tracking-wider text-gray-500">Property Status</h3>
                <div className="flex gap-2 bg-gray-50 p-1 rounded-lg">
                  <button className="flex-1 py-2 text-sm font-medium rounded-md bg-white shadow-sm text-purple-royal">Any</button>
                  <button className="flex-1 py-2 text-sm font-medium rounded-md text-gray-500 hover:text-gray-700">Sale</button>
                  <button className="flex-1 py-2 text-sm font-medium rounded-md text-gray-500 hover:text-gray-700">Rent</button>
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3 text-sm uppercase tracking-wider text-gray-500">Price Range</h3>
                <div className="flex items-center gap-2">
                  <input type="text" placeholder="Min" className="w-full border border-gray-200 rounded-lg p-2 text-sm focus:outline-none focus:border-purple-royal" />
                  <span className="text-gray-400">-</span>
                  <input type="text" placeholder="Max" className="w-full border border-gray-200 rounded-lg p-2 text-sm focus:outline-none focus:border-purple-royal" />
                </div>
              </div>

              {/* Beds/Baths */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3 text-sm uppercase tracking-wider text-gray-500">Bedrooms</h3>
                <div className="flex gap-2">
                  {['Any', '1+', '2+', '3+', '4+'].map(num => (
                    <button key={num} className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-lg text-sm font-medium hover:border-purple-royal hover:text-purple-royal transition-colors">
                      {num}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="font-semibold mb-3 text-sm uppercase tracking-wider text-gray-500">Property Type</h3>
                <div className="space-y-2">
                  {['House', 'Apartment', 'Villa', 'Commercial'].map(type => (
                    <label key={type} className="flex items-center gap-2 cursor-pointer group">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-purple-royal focus:ring-purple-royal" />
                      <span className="text-gray-600 group-hover:text-purple-dark transition-colors">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button className="btn-primary w-full shadow-md">Apply Filters</button>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1">
            {/* Top Bar */}
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
              
              <div className="flex-1 w-full relative">
                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search by address, neighborhood..." 
                  className="w-full pl-10 pr-4 py-2 border-none bg-gray-50 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-royal text-sm"
                />
              </div>

              <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
                <button 
                  className="md:hidden flex items-center gap-2 text-gray-600 text-sm font-medium"
                  onClick={() => setIsMobileFilterOpen(true)}
                >
                  <Filter className="w-4 h-4" /> Filters
                </button>
                
                <div className="flex items-center gap-2 border-r border-gray-200 pr-4">
                  <span className="text-sm text-gray-500">Sort by:</span>
                  <select className="text-sm font-medium border-none bg-transparent focus:outline-none cursor-pointer">
                    <option>Newest First</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                  </select>
                </div>

                <div className="flex gap-2">
                  <button onClick={() => setViewMode('grid')} className={`p-2 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-purple-tint text-purple-royal' : 'text-gray-400 hover:text-gray-600'}`}>
                    <Grid className="w-5 h-5" />
                  </button>
                  <button onClick={() => setViewMode('list')} className={`p-2 rounded-md transition-colors ${viewMode === 'list' ? 'bg-purple-tint text-purple-royal' : 'text-gray-400 hover:text-gray-600'}`}>
                    <List className="w-5 h-5" />
                  </button>
                  <button onClick={() => setViewMode('map')} className={`p-2 rounded-md transition-colors ${viewMode === 'map' ? 'bg-purple-tint text-purple-royal' : 'text-gray-400 hover:text-gray-600'}`}>
                    <MapIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Active Filters */}
            <div className="flex items-center gap-2 mb-6 flex-wrap">
              <span className="text-sm text-gray-500">
                Showing {(currentPage - 1) * itemsPerPage + 1}-{Math.min(currentPage * itemsPerPage, properties.length)} of {properties.length} properties
              </span>
              <div className="flex-1"></div>
              <span className="bg-purple-royal/10 text-purple-royal text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1">
                For Sale <X className="w-3 h-3 cursor-pointer" />
              </span>
              <span className="bg-purple-royal/10 text-purple-royal text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1">
                $1M - $5M <X className="w-3 h-3 cursor-pointer" />
              </span>
            </div>

            {/* Grid Layout */}
            {viewMode === 'grid' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {paginatedProperties.map((property, index) => (
                  <PropertyCard key={property.id} property={property} index={index} />
                ))}
              </div>
            )}
            
            {/* List Layout Placeholder */}
            {viewMode === 'list' && (
              <div className="flex flex-col gap-6">
                {paginatedProperties.map((property, index) => (
                  <div key={property.id} className="bg-white p-4 rounded-2xl shadow-sm flex items-center gap-6">
                    <img src={property.image} alt={property.title} className="w-48 h-32 object-cover rounded-xl" />
                    <div className="flex-1">
                      <h3 className="font-heading font-bold text-lg">{property.title}</h3>
                      <p className="text-gray-500 text-sm mb-2">{property.location}</p>
                      <div className="text-purple-royal font-bold">{property.price}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Pagination Placeholder */}
            {totalPages > 1 && (
              <div className="mt-12 flex justify-center">
                <div className="flex gap-2">
                  <button 
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:border-purple-royal hover:text-purple-royal disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    &lt;
                  </button>
                  {[...Array(totalPages)].map((_, i) => (
                    <button 
                      key={i}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`w-10 h-10 rounded-lg flex items-center justify-center font-medium ${currentPage === i + 1 ? 'bg-purple-royal text-white shadow-md' : 'border border-gray-200 text-gray-600 hover:border-purple-royal hover:text-purple-royal'}`}
                    >
                      {i + 1}
                    </button>
                  ))}
                  <button 
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:border-purple-royal hover:text-purple-royal disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    &gt;
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;
