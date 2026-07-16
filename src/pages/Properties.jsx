import React, { useState, useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Grid, List, X } from 'lucide-react';
import PropertyCard from '../components/ui/PropertyCard';
import { useFavorites } from '../context/FavoritesContext';

// Property data — numeric prices for filtering
const allProperties = [
  { id: 1, title: 'Modern Glass Villa in the Hills', location: 'Beverly Hills, CA', price: '$8,500,000', numericPrice: 8500000, image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=2000', beds: 5, baths: 6, sqft: '6,200', garage: 3, featured: true, status: 'For Sale', type: 'Villa' },
  { id: 2, title: 'Luxury Penthouse with Ocean View', location: 'Miami Beach, FL', price: '$5,200,000', numericPrice: 5200000, image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2000', beds: 3, baths: 4, sqft: '3,800', garage: 2, featured: false, status: 'For Sale', type: 'Apartment' },
  { id: 3, title: 'Historic Manor Estate', location: 'Greenwich, CT', price: '$12,750,000', numericPrice: 12750000, image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=2000', beds: 7, baths: 8, sqft: '12,400', garage: 5, featured: true, status: 'For Sale', type: 'House' },
  { id: 4, title: 'Contemporary Mountain Retreat', location: 'Aspen, CO', price: '$9,100,000', numericPrice: 9100000, image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80', beds: 4, baths: 5, sqft: '4,500', garage: 2, featured: false, status: 'For Rent', type: 'House' },
  { id: 5, title: 'Downtown Skyline Loft', location: 'New York, NY', price: '$3,800,000', numericPrice: 3800000, image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1000&q=80', beds: 2, baths: 2, sqft: '2,100', garage: 1, featured: false, status: 'For Sale', type: 'Apartment' },
  { id: 6, title: 'Seaside Modern Home', location: 'Malibu, CA', price: '$15,000,000', numericPrice: 15000000, image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=800&q=80', beds: 5, baths: 6, sqft: '5,800', garage: 4, featured: true, status: 'For Sale', type: 'House' },
  { id: 7, title: 'Prime Downtown Commercial Tower', location: 'Los Angeles, CA', price: '$22,500,000', numericPrice: 22500000, image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80', beds: 0, baths: 12, sqft: '35,000', garage: 80, featured: true, status: 'For Sale', type: 'Commercial' },
  { id: 8, title: 'Stylish City-View Rental Apartment', location: 'Chicago, IL', price: '$4,500/mo', numericPrice: 4500, image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80', beds: 2, baths: 2, sqft: '1,400', garage: 1, featured: true, status: 'For Rent', type: 'Apartment' },
  { id: 9, title: 'Charming Suburban Family Home', location: 'Austin, TX', price: '$3,200/mo', numericPrice: 3200, image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80', beds: 3, baths: 2, sqft: '2,200', garage: 2, featured: false, status: 'For Rent', type: 'House' },
  { id: 10, title: 'Tropical Pool Villa Retreat', location: 'Palm Beach, FL', price: '$9,800/mo', numericPrice: 9800, image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80', beds: 4, baths: 4, sqft: '3,600', garage: 2, featured: true, status: 'For Rent', type: 'Villa' },
  { id: 11, title: 'Modern Commercial Office Suite', location: 'San Francisco, CA', price: '$7,500/mo', numericPrice: 7500, image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80', beds: 0, baths: 3, sqft: '5,000', garage: 10, featured: false, status: 'For Rent', type: 'Commercial' },
  { id: 12, title: 'Cozy Studio in the Arts District', location: 'Los Angeles, CA', price: '$1,800/mo', numericPrice: 1800, image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80', beds: 1, baths: 1, sqft: '650', garage: 0, featured: false, status: 'For Rent', type: 'Apartment' },
  // Affordable For Sale listings ($1,000 – $10,000 range)
  { id: 13, title: 'Affordable Starter Home', location: 'Phoenix, AZ', price: '$5,500', numericPrice: 5500, image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80', beds: 2, baths: 1, sqft: '980', garage: 1, featured: false, status: 'For Sale', type: 'House' },
  { id: 14, title: 'City Centre Studio Apartment', location: 'Detroit, MI', price: '$3,200', numericPrice: 3200, image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80', beds: 1, baths: 1, sqft: '540', garage: 0, featured: false, status: 'For Sale', type: 'Apartment' },
  { id: 15, title: 'Rustic Countryside Villa', location: 'Nashville, TN', price: '$9,000', numericPrice: 9000, image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80', beds: 3, baths: 2, sqft: '1,800', garage: 1, featured: true, status: 'For Sale', type: 'Villa' },
  { id: 16, title: 'Small Business Commercial Unit', location: 'Atlanta, GA', price: '$8,000', numericPrice: 8000, image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=800&q=80', beds: 4, baths: 1, sqft: '1,200', garage: 2, featured: false, status: 'For Sale', type: 'Commercial' },
  { id: 17, title: 'Compact Modern Townhouse', location: 'Memphis, TN', price: '$6,800', numericPrice: 6800, image: 'https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=800&q=80', beds: 2, baths: 2, sqft: '1,100', garage: 1, featured: false, status: 'For Sale', type: 'House' },
  { id: 18, title: 'Downtown Retail Space with Office', location: 'Dallas, TX', price: '$9,500', numericPrice: 9500, image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80', beds: 4, baths: 2, sqft: '2,000', garage: 4, featured: true, status: 'For Sale', type: 'Commercial' },
  { id: 19, title: 'Suburban Office Park Suite', location: 'Orlando, FL', price: '$7,200', numericPrice: 7200, image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80', beds: 5, baths: 2, sqft: '1,800', garage: 5, featured: false, status: 'For Sale', type: 'Commercial' },
  { id: 20, title: 'Boutique Storefront Property', location: 'Portland, OR', price: '$5,900', numericPrice: 5900, image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80', beds: 4, baths: 1, sqft: '900', garage: 1, featured: false, status: 'For Sale', type: 'Commercial' },

];

const defaultFilters = {
  status: 'Any',
  minPrice: '',
  maxPrice: '',
  beds: 'Any',
  types: [],
  search: '',
};

const Properties = () => {
  const location = useLocation();
  const [viewMode, setViewMode] = useState('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('newest');
  const [showSaved, setShowSaved] = useState(false);
  const { favorites } = useFavorites();

  // Pending filters (what user is selecting in the sidebar)
  const [pendingFilters, setPendingFilters] = useState(defaultFilters);
  // Applied filters (what actually filters the list — only changes on Apply)
  const [appliedFilters, setAppliedFilters] = useState(defaultFilters);

  const itemsPerPage = 4;

  useEffect(() => {
    if (location.state?.search) {
      const newFilters = { ...defaultFilters, search: location.state.search };
      setPendingFilters(newFilters);
      setAppliedFilters(newFilters);
      setShowSaved(false);
    }
    if (location.state?.showSaved) {
      setShowSaved(true);
      setPendingFilters(defaultFilters);
      setAppliedFilters(defaultFilters);
      setCurrentPage(1);
    }
  }, [location.state]);

  const updatePending = (key, value) =>
    setPendingFilters((prev) => ({ ...prev, [key]: value }));

  const toggleType = (type) => {
    setPendingFilters((prev) => {
      const updatedTypes = prev.types.includes(type)
        ? prev.types.filter((t) => t !== type)
        : [...prev.types, type];
      const updated = { ...prev, types: updatedTypes };
      setAppliedFilters(updated);
      setCurrentPage(1);
      return updated;
    });
  };

  // Immediately apply a single filter key without requiring "Apply Filters"
  const applyInstant = (key, value) => {
    const updated = { ...pendingFilters, [key]: value };
    setPendingFilters(updated);
    setAppliedFilters(updated);
    setCurrentPage(1);
  };

  const applyFilters = () => {
    setAppliedFilters(pendingFilters);
    setCurrentPage(1);
    setIsMobileFilterOpen(false);
  };

  const clearFilters = () => {
    setPendingFilters(defaultFilters);
    setAppliedFilters(defaultFilters);
    setCurrentPage(1);
  };

  const removeAppliedFilter = (key) => {
    const reset = { ...appliedFilters, [key]: defaultFilters[key] };
    setAppliedFilters(reset);
    setPendingFilters(reset);
    setCurrentPage(1);
  };

  const filteredProperties = useMemo(() => {
    let list = showSaved 
      ? allProperties.filter((p) => favorites.some((f) => f.id === p.id))
      : [...allProperties];
    const f = appliedFilters;

    if (f.search.trim()) {
      const q = f.search.toLowerCase();
      list = list.filter(
        (p) => p.title.toLowerCase().includes(q) || p.location.toLowerCase().includes(q)
      );
    }
    if (f.status !== 'Any') {
      const statusMap = { Sale: 'For Sale', Rent: 'For Rent' };
      list = list.filter((p) => p.status === statusMap[f.status]);
    }
    if (f.minPrice !== '') {
      const minStr = f.minPrice.replace(/[^0-9.]/g, '');
      if (minStr) {
        const min = Number(minStr);
        if (!isNaN(min)) list = list.filter((p) => p.numericPrice >= min);
      }
    }
    if (f.maxPrice !== '') {
      const maxStr = f.maxPrice.replace(/[^0-9.]/g, '');
      if (maxStr) {
        const max = Number(maxStr);
        if (!isNaN(max)) list = list.filter((p) => p.numericPrice <= max);
      }
    }
    if (f.beds !== 'Any') {
      const minBeds = parseInt(f.beds);
      list = list.filter((p) => p.beds >= minBeds);
    }
    if (f.types.length > 0) {
      list = list.filter((p) => f.types.includes(p.type));
    }

    if (sortBy === 'price-asc') list.sort((a, b) => a.numericPrice - b.numericPrice);
    else if (sortBy === 'price-desc') list.sort((a, b) => b.numericPrice - a.numericPrice);

    return list;
  }, [appliedFilters, sortBy, showSaved, favorites]);

  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);
  const paginatedProperties = filteredProperties.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const activeFilterTags = [
    appliedFilters.status !== 'Any' && { key: 'status', label: appliedFilters.status },
    (appliedFilters.minPrice || appliedFilters.maxPrice) && {
      key: 'minPrice',
      label: `$${appliedFilters.minPrice || '0'} – $${appliedFilters.maxPrice || '∞'}`,
    },
    appliedFilters.beds !== 'Any' && { key: 'beds', label: `${appliedFilters.beds} Beds` },
    ...appliedFilters.types.map((t) => ({ key: `type-${t}`, label: t })),
  ].filter(Boolean);

  const FilterPanel = () => (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-heading text-xl font-bold">Filters</h2>
        <button onClick={clearFilters} className="text-sm text-purple-royal font-medium hover:underline">
          Clear All
        </button>
      </div>

      {/* Status */}
      <div className="mb-6">
        <h3 className="font-semibold mb-3 text-sm uppercase tracking-wider text-gray-500">Property Status</h3>
        <div className="flex gap-2 bg-gray-50 p-1 rounded-lg">
          {['Any', 'Sale', 'Rent'].map((s) => (
            <button
              key={s}
              onClick={() => applyInstant('status', s)}
              className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${
                pendingFilters.status === s
                  ? 'bg-white shadow-sm text-purple-royal'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <h3 className="font-semibold mb-3 text-sm uppercase tracking-wider text-gray-500">Price Range</h3>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Min"
            value={pendingFilters.minPrice}
            onChange={(e) => applyInstant('minPrice', e.target.value)}
            className="w-full border border-gray-200 rounded-lg p-2 text-sm focus:outline-none focus:border-purple-royal"
          />
          <span className="text-gray-400">-</span>
          <input
            type="text"
            placeholder="Max"
            value={pendingFilters.maxPrice}
            onChange={(e) => applyInstant('maxPrice', e.target.value)}
            className="w-full border border-gray-200 rounded-lg p-2 text-sm focus:outline-none focus:border-purple-royal"
          />
        </div>
      </div>

      {/* Bedrooms */}
      <div className="mb-6">
        <h3 className="font-semibold mb-3 text-sm uppercase tracking-wider text-gray-500">Bedrooms</h3>
        <div className="flex gap-2">
          {['Any', '1+', '2+', '3+', '4+'].map((num) => (
            <motion.button
              key={num}
              onClick={() => applyInstant('beds', num)}
              whileTap={{ scale: 0.9 }}
              className={`w-10 h-10 flex items-center justify-center border rounded-lg text-sm font-medium transition-all ${
                pendingFilters.beds === num
                  ? 'border-purple-royal bg-purple-royal text-white shadow-md'
                  : 'border-gray-200 hover:border-purple-royal hover:text-purple-royal'
              }`}
            >
              {num}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Property Type */}
      <div className="mb-8">
        <h3 className="font-semibold mb-3 text-sm uppercase tracking-wider text-gray-500">Property Type</h3>
        <div className="space-y-2">
          {['House', 'Apartment', 'Villa', 'Commercial'].map((type) => (
            <label key={type} className="flex items-center gap-2 cursor-pointer group">
              <input
                type="checkbox"
                checked={pendingFilters.types.includes(type)}
                onChange={() => toggleType(type)}
                className="w-4 h-4 rounded border-gray-300 text-purple-royal focus:ring-purple-royal accent-purple-royal"
              />
              <span className="text-gray-600 group-hover:text-purple-dark transition-colors">{type}</span>
            </label>
          ))}
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={applyFilters}
        className="btn-primary w-full shadow-md"
      >
        Apply Filters
      </motion.button>
    </div>
  );

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
          <div className="hidden lg:block w-72 shrink-0">
            <div className="sticky top-28">
              <FilterPanel />
            </div>
          </div>

          {/* Mobile Filter Drawer */}
          <AnimatePresence>
            {isMobileFilterOpen && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                />
                <motion.div
                  initial={{ x: '-100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '-100%' }}
                  transition={{ type: 'tween', duration: 0.3 }}
                  className="fixed left-0 top-0 bottom-0 w-80 bg-white z-50 lg:hidden overflow-y-auto p-6"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="font-heading text-xl font-bold">Filters</h2>
                    <button onClick={() => setIsMobileFilterOpen(false)}>
                      <X className="w-6 h-6 text-gray-500" />
                    </button>
                  </div>
                  <FilterPanel />
                </motion.div>
              </>
            )}
          </AnimatePresence>

          {/* Main Content */}
          <div className="flex-1 min-w-0">

            {/* Top Bar */}
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
              <div className="flex-1 w-full relative">
                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by address, neighborhood..."
                  value={pendingFilters.search}
                  onChange={(e) => {
                    updatePending('search', e.target.value);
                    setAppliedFilters((prev) => ({ ...prev, search: e.target.value }));
                    setCurrentPage(1);
                  }}
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
                  <select
                    value={sortBy}
                    onChange={(e) => { setSortBy(e.target.value); setCurrentPage(1); }}
                    className="text-sm font-medium border-none bg-transparent focus:outline-none cursor-pointer"
                  >
                    <option value="newest">Newest First</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                  </select>
                </div>

                <div className="flex gap-2">
                  <button onClick={() => setViewMode('grid')} className={`p-2 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-purple-tint text-purple-royal' : 'text-gray-400 hover:text-gray-600'}`}>
                    <Grid className="w-5 h-5" />
                  </button>
                  <button onClick={() => setViewMode('list')} className={`p-2 rounded-md transition-colors ${viewMode === 'list' ? 'bg-purple-tint text-purple-royal' : 'text-gray-400 hover:text-gray-600'}`}>
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Active Filter Tags */}
            <div className="flex items-center gap-2 mb-6 flex-wrap">
              <span className="text-sm text-gray-500">
                Showing {filteredProperties.length === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1}–{Math.min(currentPage * itemsPerPage, filteredProperties.length)} of {filteredProperties.length} {filteredProperties.length === 1 ? 'property' : 'properties'}
              </span>
              <div className="flex-1" />
              {activeFilterTags.map((tag) => (
                <span
                  key={tag.key}
                  className="bg-purple-royal/10 text-purple-royal text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1"
                >
                  {tag.label}
                  <X
                    className="w-3 h-3 cursor-pointer hover:text-purple-dark"
                    onClick={() => {
                      if (tag.key.startsWith('type-')) {
                        const t = tag.key.replace('type-', '');
                        const newTypes = appliedFilters.types.filter((x) => x !== t);
                        const reset = { ...appliedFilters, types: newTypes };
                        setAppliedFilters(reset);
                        setPendingFilters(reset);
                      } else {
                        removeAppliedFilter(tag.key);
                      }
                      setCurrentPage(1);
                    }}
                  />
                </span>
              ))}
            </div>

            {/* Grid Layout */}
            {viewMode === 'grid' && (
              filteredProperties.length === 0 ? (
                <div className="text-center py-24 text-gray-400">
                  <p className="text-xl font-heading font-bold text-purple-dark mb-2">No properties found</p>
                  <p className="text-sm">Try adjusting your filters.</p>
                  <button onClick={clearFilters} className="mt-4 text-purple-royal font-medium hover:underline text-sm">Clear all filters</button>
                </div>
              ) : (
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <AnimatePresence mode="popLayout">
                    {paginatedProperties.map((property, index) => (
                      <PropertyCard key={property.id} property={property} index={index} />
                    ))}
                  </AnimatePresence>
                </motion.div>
              )
            )}

            {/* List Layout */}
            {viewMode === 'list' && (
              filteredProperties.length === 0 ? (
                <div className="text-center py-24 text-gray-400">
                  <p className="text-xl font-heading font-bold text-purple-dark mb-2">No properties found</p>
                  <p className="text-sm">Try adjusting your filters.</p>
                  <button onClick={clearFilters} className="mt-4 text-purple-royal font-medium hover:underline text-sm">Clear all filters</button>
                </div>
              ) : (
                <div className="flex flex-col gap-6">
                  {paginatedProperties.map((property) => (
                    <motion.div
                      key={property.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="bg-white p-4 rounded-2xl shadow-sm flex flex-col sm:flex-row items-center gap-6 hover:shadow-md transition-shadow"
                    >
                      <img src={property.image} alt={property.title} className="w-full sm:w-48 h-36 object-cover rounded-xl" />
                      <div className="flex-1">
                        <span className="text-xs font-bold text-purple-royal bg-purple-royal/10 px-2 py-0.5 rounded-full mb-2 inline-block">{property.status}</span>
                        <h3 className="font-heading font-bold text-lg text-purple-dark">{property.title}</h3>
                        <p className="text-gray-500 text-sm mb-2">{property.location}</p>
                        <div className="text-purple-royal font-bold text-lg">{property.price}</div>
                        <div className="text-gray-400 text-xs mt-1">{property.beds} bd · {property.baths} ba · {property.sqft} sqft</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12 flex justify-center">
                <div className="flex gap-2">
                  <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
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
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
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
