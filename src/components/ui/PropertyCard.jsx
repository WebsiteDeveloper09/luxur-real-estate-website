import React from 'react';
import { Heart, MapPin, Bed, Bath, Square, Car } from 'lucide-react';
import { motion } from 'framer-motion';
import { useFavorites } from '../../context/FavoritesContext';

const PropertyCard = ({ property, index }) => {
  const { toggleFavorite, isFavorite } = useFavorites();
  const favorited = isFavorite(property.id);

  const handleToggleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(property);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -5 }}
      exit={{ opacity: 0, scale: 0.9 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="glass overflow-hidden rounded-2xl group cursor-pointer text-left flex flex-col h-full shadow-sm hover:shadow-xl transition-shadow"
    >
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
          {property.featured && (
            <span className="bg-accent-gold text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
              Featured
            </span>
          )}
          <span className="bg-purple-royal text-white text-xs font-bold px-3 py-1 rounded-full shadow-md w-fit">
            {property.status}
          </span>
        </div>
        <motion.button 
          onClick={handleToggleFavorite}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
            favorited 
              ? 'bg-purple-royal text-white shadow-lg' 
              : 'bg-white/30 backdrop-blur-sm text-white hover:bg-purple-royal hover:text-white'
          }`}
        >
          <Heart className="w-5 h-5" fill={favorited ? "currentColor" : "none"} />
        </motion.button>
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow bg-white/60">
        <h3 className="font-heading text-xl font-bold text-purple-dark mb-2 group-hover:text-purple-royal transition-colors line-clamp-1">
          {property.title}
        </h3>
        <p className="flex items-center text-gray-500 text-sm mb-4">
          <MapPin className="w-4 h-4 mr-1 text-purple-bright shrink-0" />
          <span className="truncate">{property.location}</span>
        </p>
        
        <div className="text-2xl font-bold text-purple-royal mb-6">
          {property.price}
        </div>

        {/* Features Row */}
        <div className="grid grid-cols-4 gap-2 mb-6 border-t border-b border-gray-200/50 py-4">
          <div className="flex flex-col items-center justify-center text-gray-600">
            <Bed className="w-5 h-5 mb-1 text-purple-dark/60" />
            <span className="text-xs font-medium">{property.beds}</span>
          </div>
          <div className="flex flex-col items-center justify-center text-gray-600">
            <Bath className="w-5 h-5 mb-1 text-purple-dark/60" />
            <span className="text-xs font-medium">{property.baths}</span>
          </div>
          <div className="flex flex-col items-center justify-center text-gray-600">
            <Square className="w-5 h-5 mb-1 text-purple-dark/60" />
            <span className="text-xs font-medium">{property.sqft}</span>
          </div>
          <div className="flex flex-col items-center justify-center text-gray-600">
            <Car className="w-5 h-5 mb-1 text-purple-dark/60" />
            <span className="text-xs font-medium">{property.garage}</span>
          </div>
        </div>

        {/* CTA */}
        <button className="mt-auto btn-outline w-full group-hover:bg-purple-royal group-hover:text-white">
          View Details
        </button>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
