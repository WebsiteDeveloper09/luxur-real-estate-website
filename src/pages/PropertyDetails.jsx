import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Heart, Share2, Bed, Bath, Square, Calendar, Car, Home, Phone, Mail, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../lib/supabaseClient';

const staticProperties = [
  { 
    id: 1, 
    title: 'Modern Glass Villa in the Hills', 
    location: 'Beverly Hills, California 90210', 
    price: '$8,500,000', 
    numericPrice: 8500000, 
    beds: 5, 
    baths: 6, 
    sqft: '6,200', 
    garage: '3 Spaces', 
    type: 'Single Family', 
    status: 'FOR SALE', 
    yearBuilt: '2022', 
    lotSize: '0.45 Acres', 
    description: "An architectural masterpiece situated in the prestigious hills of Beverly Hills. This modern glass villa offers unparalleled luxury and breathtaking panoramic views of the city skyline and ocean. Designed by award-winning architects, the home seamlessly blends indoor and outdoor living.", 
    images: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80'] 
  },
  { 
    id: 2, 
    title: 'Luxury Penthouse with Ocean View', 
    location: 'Miami Beach, Florida 33139', 
    price: '$5,200,000', 
    numericPrice: 5200000, 
    beds: 3, 
    baths: 4, 
    sqft: '3,800', 
    garage: '2 Spaces', 
    type: 'Apartment', 
    status: 'FOR SALE', 
    yearBuilt: '2021', 
    lotSize: 'N/A', 
    description: "Experience ultimate beachfront luxury in this stunning high-floor penthouse. Breathtaking floor-to-ceiling windows look out over the turquoise Atlantic Ocean. Outstanding building amenities including private beach access, custom valet service, and an infinity rooftop lounge.", 
    images: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'] 
  },
  {
    id: 3,
    title: 'Historic Manor Estate',
    location: 'Greenwich, Connecticut',
    price: '$12,750,000',
    numericPrice: 12750000,
    beds: 7,
    baths: 8,
    sqft: '12,400',
    garage: '5 Spaces',
    type: 'Single Family',
    status: 'FOR SALE',
    yearBuilt: '2018',
    lotSize: '2.5 Acres',
    description: 'A sprawling historic estate offering absolute privacy, elegant architecture, master craftsmanship, and lush landscaped grounds.',
    images: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80']
  },
  {
    id: 4,
    title: 'Contemporary Mountain Retreat',
    location: 'Aspen, Colorado',
    price: '$9,100,000',
    numericPrice: 9100000,
    beds: 4,
    baths: 5,
    sqft: '4,500',
    garage: '2 Spaces',
    type: 'House',
    status: 'FOR RENT',
    yearBuilt: '2023',
    lotSize: '1.2 Acres',
    description: 'Nestled in Aspen, this contemporary mountain chalet combines high-end modern luxury with cozy alpine aesthetics and pine tree views.',
    images: ['/luxur-real-estate-website/images/mountain_retreat.png']
  },
  {
    id: 5,
    title: 'Downtown Skyline Loft',
    location: 'New York, NY',
    price: '$3,800,000',
    numericPrice: 3800000,
    beds: 2,
    baths: 2,
    sqft: '2,100',
    garage: '1 Space',
    type: 'Apartment',
    status: 'FOR SALE',
    yearBuilt: '2020',
    lotSize: 'N/A',
    description: 'Sleek luxury loft featuring double-height ceilings, floor-to-ceiling glass windows, and stunning downtown skyline views.',
    images: ['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1000&q=80']
  },
  {
    id: 6,
    title: 'Seaside Modern Home',
    location: 'Malibu, CA',
    price: '$15,000,000',
    numericPrice: 15000000,
    beds: 5,
    baths: 6,
    sqft: '5,800',
    garage: '4 Spaces',
    type: 'House',
    status: 'FOR SALE',
    yearBuilt: '2022',
    lotSize: '0.8 Acres',
    description: 'Premier Malibu oceanfront residence offering direct private beach access and panoramic Pacific coastline vistas.',
    images: ['https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=800&q=80']
  },
  {
    id: 7,
    title: 'Prime Downtown Commercial Tower',
    location: 'Los Angeles, CA',
    price: '$22,500,000',
    numericPrice: 22500000,
    beds: 0,
    baths: 12,
    sqft: '35,000',
    garage: '80 Spaces',
    type: 'Commercial',
    status: 'FOR SALE',
    yearBuilt: '2019',
    lotSize: '1.5 Acres',
    description: 'State-of-the-art commercial high-rise tower located in the heart of downtown Los Angeles with premier tenant infrastructure.',
    images: ['https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80']
  },
  {
    id: 8,
    title: 'Stylish City-View Rental Apartment',
    location: 'Chicago, IL',
    price: '$4,500/mo',
    numericPrice: 4500,
    beds: 2,
    baths: 2,
    sqft: '1,400',
    garage: '1 Space',
    type: 'Apartment',
    status: 'FOR RENT',
    yearBuilt: '2021',
    lotSize: 'N/A',
    description: 'Fully furnished urban sanctuary with designer interiors and breathtaking Lake Michigan & city skyline views.',
    images: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80']
  },
  {
    id: 9,
    title: 'Charming Suburban Family Home',
    location: 'Austin, TX',
    price: '$3,200/mo',
    numericPrice: 3200,
    beds: 3,
    baths: 2,
    sqft: '2,200',
    garage: '2 Spaces',
    type: 'House',
    status: 'FOR RENT',
    yearBuilt: '2019',
    lotSize: '0.3 Acres',
    description: 'Spacious open-concept single-family residence with a lush private backyard located in top-rated school district.',
    images: ['https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80']
  },
  {
    id: 10,
    title: 'Tropical Pool Villa Retreat',
    location: 'Palm Beach, FL',
    price: '$9,800/mo',
    numericPrice: 9800,
    beds: 4,
    baths: 4,
    sqft: '3,600',
    garage: '2 Spaces',
    type: 'Villa',
    status: 'FOR RENT',
    yearBuilt: '2023',
    lotSize: '0.5 Acres',
    description: 'Luxurious resort-style tropical villa boasting a sparkling resort pool, palm garden, and outdoor kitchen.',
    images: ['https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80']
  },
  {
    id: 11,
    title: 'Modern Commercial Office Suite',
    location: 'San Francisco, CA',
    price: '$7,500/mo',
    numericPrice: 7500,
    beds: 0,
    baths: 3,
    sqft: '5,000',
    garage: '10 Spaces',
    type: 'Commercial',
    status: 'FOR RENT',
    yearBuilt: '2020',
    lotSize: 'N/A',
    description: 'Turnkey creative office space featuring open workstation areas, private glass conference rooms, and high-speed tech setup.',
    images: ['https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80']
  },
  {
    id: 12,
    title: 'Cozy Studio in the Arts District',
    location: 'Los Angeles, CA',
    price: '$1,800/mo',
    numericPrice: 1800,
    beds: 1,
    baths: 1,
    sqft: '650',
    garage: 'N/A',
    type: 'Apartment',
    status: 'FOR RENT',
    yearBuilt: '2022',
    lotSize: 'N/A',
    description: 'Modern minimalist studio with exposed brick accents, designer fixtures, and walking distance to trendy dining and art galleries.',
    images: ['https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80']
  },
  {
    id: 13,
    title: 'Affordable Starter Home',
    location: 'Phoenix, AZ',
    price: '$5,500',
    numericPrice: 5500,
    beds: 2,
    baths: 1,
    sqft: '980',
    garage: '1 Space',
    type: 'House',
    status: 'FOR SALE',
    yearBuilt: '2015',
    lotSize: '0.2 Acres',
    description: 'Well-maintained efficient residence, ideal for first-time buyers or rental investment.',
    images: ['https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80']
  },
  {
    id: 14,
    title: 'City Centre Studio Apartment',
    location: 'Detroit, MI',
    price: '$3,200',
    numericPrice: 3200,
    beds: 1,
    baths: 1,
    sqft: '540',
    garage: 'N/A',
    type: 'Apartment',
    status: 'FOR SALE',
    yearBuilt: '2017',
    lotSize: 'N/A',
    description: 'Convenient urban studio positioned in downtown close to public transit, shopping, and entertainment.',
    images: ['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80']
  },
  {
    id: 15,
    title: 'Rustic Countryside Villa',
    location: 'Nashville, TN',
    price: '$9,000',
    numericPrice: 9000,
    beds: 3,
    baths: 2,
    sqft: '1,800',
    garage: '1 Space',
    type: 'Villa',
    status: 'FOR SALE',
    yearBuilt: '2016',
    lotSize: '1.0 Acre',
    description: 'Charming countryside retreat featuring natural wood detailing, peaceful garden views, and outdoor stone patio.',
    images: ['https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80']
  },
  {
    id: 16,
    title: 'Small Business Commercial Unit',
    location: 'Atlanta, GA',
    price: '$8,000',
    numericPrice: 8000,
    beds: 4,
    baths: 1,
    sqft: '1,200',
    garage: '2 Spaces',
    type: 'Commercial',
    status: 'FOR SALE',
    yearBuilt: '2018',
    lotSize: 'N/A',
    description: 'Versatile retail storefront or boutique commercial space with heavy foot traffic location.',
    images: ['https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=800&q=80']
  },
  {
    id: 17,
    title: 'Compact Modern Townhouse',
    location: 'Memphis, TN',
    price: '$6,800',
    numericPrice: 6800,
    beds: 2,
    baths: 2,
    sqft: '1,100',
    garage: '1 Space',
    type: 'House',
    status: 'FOR SALE',
    yearBuilt: '2020',
    lotSize: 'N/A',
    description: 'Smart multi-level townhouse offering low maintenance living, private balcony, and contemporary finishes.',
    images: ['https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=800&q=80']
  },
  {
    id: 18,
    title: 'Downtown Retail Space with Office',
    location: 'Dallas, TX',
    price: '$9,500',
    numericPrice: 9500,
    beds: 4,
    baths: 2,
    sqft: '2,000',
    garage: '4 Spaces',
    type: 'Commercial',
    status: 'FOR SALE',
    yearBuilt: '2019',
    lotSize: 'N/A',
    description: 'Prime dual-purpose commercial asset featuring ground floor retail with upper-level office suite.',
    images: ['https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80']
  },
  {
    id: 19,
    title: 'Suburban Office Park Suite',
    location: 'Orlando, FL',
    price: '$7,200',
    numericPrice: 7200,
    beds: 5,
    baths: 2,
    sqft: '1,800',
    garage: '5 Spaces',
    type: 'Commercial',
    status: 'FOR SALE',
    yearBuilt: '2021',
    lotSize: 'N/A',
    description: 'Professional office unit situated inside a premier business park with ample guest parking.',
    images: ['https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80']
  },
  {
    id: 20,
    title: 'Boutique Storefront Property',
    location: 'Portland, OR',
    price: '$5,900',
    numericPrice: 5900,
    beds: 4,
    baths: 1,
    sqft: '900',
    garage: '1 Space',
    type: 'Commercial',
    status: 'FOR SALE',
    yearBuilt: '2015',
    lotSize: 'N/A',
    description: 'Charming retail storefront with glass display windows and modern aesthetic in high-demand area.',
    images: ['https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80']
  }
];

const fallbackImages = [
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
  '/luxur-real-estate-website/images/mountain_retreat.png'
];


const PropertyDetails = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const [activeImage, setActiveImage] = useState(0);
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [viewingSubmitted, setViewingSubmitted] = useState(false);


  useEffect(() => {
    const fetchProperty = async () => {
      setLoading(true);
      try {
        const numericId = Number(id);
        
        // Try getting from Supabase first
        const { data, error } = await supabase
          .from('properties')
          .select('*')
          .eq('id', numericId)
          .single();

        if (error) throw error;

        if (data) {
          const priceStr = String(data.price || '');
          const displayPrice = priceStr.startsWith('$') ? priceStr : `$${Number(priceStr).toLocaleString()}`;
          
          let parsedImages = [];
          if (Array.isArray(data.images) && data.images.filter(Boolean).length > 0) {
            parsedImages = data.images.filter(Boolean);
          } else if (typeof data.image === 'string' && data.image) {
            parsedImages = [data.image];
          } else if (typeof data.images === 'string' && data.images) {
            parsedImages = [data.images];
          } else {
            parsedImages = fallbackImages;
          }

          setProperty({
            id: data.id,
            title: data.title || 'Untitled Property',
            location: data.location || 'Location Unspecified',
            price: data.status === 'For Rent' && !displayPrice.includes('/mo') ? `${displayPrice}/mo` : displayPrice,
            beds: data.beds ?? 0,
            baths: data.baths ?? 0,
            sqft: data.sqft ?? 'N/A',
            garage: data.garage ? `${data.garage} Spaces` : 'N/A',
            type: data.type || 'House',
            status: (data.status || 'FOR SALE').toUpperCase(),
            yearBuilt: data.year_built || data.yearBuilt || '2023',
            lotSize: data.lot_size || data.lotSize || 'N/A',
            description: data.description || 'No description provided.',
            images: parsedImages
          });
        }
      } catch (err) {
        console.warn('Property not found in Supabase or query failed, searching static properties:', err);
        const localProp = staticProperties.find(p => p.id === Number(id)) || staticProperties[0];
        setProperty(localProp);
      } finally {
        setLoading(false);
      }
    };
    fetchProperty();
  }, [id]);

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'features', label: 'Features & Amenities' },
    { id: 'location', label: 'Location' },
    { id: 'mortgage', label: 'Mortgage Calculator' },
  ];

  if (loading) {
    return <div className="min-h-screen pt-32 text-center text-purple-royal font-medium text-lg">Loading luxury listing...</div>;
  }

  if (!property) {
    return <div className="min-h-screen pt-32 text-center text-red-500 font-medium text-lg">Property not found.</div>;
  }

  const rawImages = property.images && Array.isArray(property.images) ? property.images.filter(Boolean) : [];
  // Ensure property image comes first
  const propMainImage = property.image || (rawImages.length > 0 ? rawImages[0] : fallbackImages[0]);
  let images = Array.from(new Set([propMainImage, ...rawImages, ...fallbackImages]));
  if (images.length < 4) {
    images = [...images, ...fallbackImages].slice(0, 4);
  }
  const currentMainImage = images[activeImage] || images[0];


  const handleScheduleViewing = (e) => {
    e.preventDefault();
    setViewingSubmitted(true);
    setTimeout(() => {
      setViewingSubmitted(false);
    }, 4000);
  };


  return (
    <div className="bg-purple-tint min-h-screen pt-24 pb-20">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Property Card Header */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-purple-royal/10">
          
          {/* Main Hero Property Image */}
          <div className="relative h-[65vh] min-h-[450px] w-full bg-gray-200 overflow-hidden">
            <img 
              src={currentMainImage} 
              alt={property.title || "Property image"} 
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80';
              }}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-6 right-6 flex gap-3 z-10">

              <button className="w-12 h-12 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-gray-800 hover:bg-white hover:text-purple-royal transition-colors shadow-lg">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="w-12 h-12 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-gray-800 hover:bg-white hover:text-purple-royal transition-colors shadow-lg">
                <Heart className="w-5 h-5" />
              </button>
            </div>
            <div className="absolute top-6 left-6 z-10">
              <span className="bg-purple-royal text-white text-xs font-bold px-4 py-2 rounded-full shadow-md uppercase tracking-wider">
                {property.status}
              </span>
            </div>
          </div>

          {/* Location & Order CTA Section */}
          <div className="p-8 md:p-10 bg-white">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              
              {/* Property Details & Location */}
              <div className="lg:w-2/3">
                <h1 className="text-3xl md:text-5xl font-heading font-bold text-purple-dark mb-4">
                  {property.title}
                </h1>
                
                {/* Location */}
                <div className="flex items-center text-gray-600 text-lg md:text-xl font-medium mb-6">
                  <MapPin className="w-6 h-6 mr-2 text-purple-bright shrink-0" />
                  <span>{property.location}</span>
                </div>

                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  {property.description}
                </p>
              </div>

              {/* Order / Purchase Box */}
              <div className="lg:w-1/3 bg-purple-tint/60 border border-purple-royal/20 p-6 rounded-3xl text-center shadow-md">
                <div className="text-sm font-semibold uppercase text-gray-500 mb-1">Listed Price</div>
                <div className="text-3xl md:text-4xl font-bold text-purple-royal mb-6">{property.price}</div>
                
                <button 
                  onClick={() => setShowPaymentModal(true)}
                  className="btn-primary w-full py-4 text-lg font-bold shadow-xl flex items-center justify-center gap-2"
                >
                  <span>Place Order / Buy Now</span>
                </button>
                <p className="text-xs text-gray-500 mt-3">⚡ Reserve today with a refundable deposit</p>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Payment / Reservation Modal */}
      <AnimatePresence>
        {showPaymentModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl relative overflow-hidden"
            >
              {paymentSuccess ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Order Placed Successfully!</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for placing your order for <strong>{property.title}</strong> located at <em>{property.location}</em>. Our real estate team will contact you shortly.
                  </p>
                  <button 
                    onClick={() => { setShowPaymentModal(false); setPaymentSuccess(false); }}
                    className="btn-primary w-full"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h3 className="text-xl font-heading font-bold text-purple-dark">Place Order / Buy Property</h3>
                      <p className="text-sm text-gray-500">{property.location}</p>
                    </div>
                    <button 
                      onClick={() => setShowPaymentModal(false)}
                      className="text-gray-400 hover:text-gray-600 text-xl font-bold p-2"
                    >
                      ✕
                    </button>
                  </div>

                  <form 
                    onSubmit={async (e) => { 
                      e.preventDefault(); 
                      const formData = new FormData(e.target);
                      const full_name = formData.get('full_name');
                      const email = formData.get('email');
                      
                      try {
                        await supabase.from('orders').insert([
                          {
                            property_id: property.id,
                            property_title: property.title,
                            property_location: property.location,
                            property_price: property.price,
                            full_name: full_name,
                            email: email,
                            payment_method: paymentMethod,
                            status: 'pending'
                          }
                        ]);
                      } catch (err) {
                        console.warn('Could not store order in Supabase orders table:', err);
                      }
                      
                      setPaymentSuccess(true); 
                    }} 
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-xs font-semibold uppercase text-gray-500 mb-1">Full Legal Name</label>
                      <input required name="full_name" type="text" placeholder="John Doe" className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:border-purple-royal" />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase text-gray-500 mb-1">Email Address</label>
                      <input required name="email" type="email" placeholder="john@example.com" className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:border-purple-royal" />
                    </div>

                    <div className="border-t border-gray-100 pt-4">
                      <label className="block text-xs font-semibold uppercase text-gray-500 mb-2">Select Payment Method</label>
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <button
                          type="button"
                          onClick={() => setPaymentMethod('card')}
                          className={`p-3 rounded-xl border text-sm font-semibold transition-all ${
                            paymentMethod === 'card'
                              ? 'border-purple-royal bg-purple-royal text-white shadow-md'
                              : 'border-gray-200 bg-gray-50 text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          💳 Card Payment
                        </button>
                        <button
                          type="button"
                          onClick={() => setPaymentMethod('bank')}
                          className={`p-3 rounded-xl border text-sm font-semibold transition-all ${
                            paymentMethod === 'bank'
                              ? 'border-purple-royal bg-purple-royal text-white shadow-md'
                              : 'border-gray-200 bg-gray-50 text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          🏦 Bank Transfer
                        </button>
                      </div>

                      {paymentMethod === 'card' ? (
                        <div>
                          <input required type="text" placeholder="Card Number (4242 •••• •••• 4242)" className="w-full p-3 rounded-xl border border-gray-200 mb-3 focus:outline-none focus:border-purple-royal" />
                          <div className="grid grid-cols-2 gap-3">
                            <input required type="text" placeholder="MM / YY" className="p-3 rounded-xl border border-gray-200 focus:outline-none focus:border-purple-royal" />
                            <input required type="text" placeholder="CVC" className="p-3 rounded-xl border border-gray-200 focus:outline-none focus:border-purple-royal" />
                          </div>
                        </div>
                      ) : (
                        <div className="bg-purple-tint/80 border border-purple-royal/30 p-4 rounded-2xl space-y-2 text-left">
                          <div className="text-xs font-bold uppercase text-purple-royal tracking-wider">Bank Transfer Details</div>
                          <div className="flex justify-between items-center text-sm py-1 border-b border-purple-royal/10">
                            <span className="text-gray-500 font-medium">Bank Name:</span>
                            <span className="font-bold text-gray-900">OPAY</span>
                          </div>
                          <div className="flex justify-between items-center text-sm py-1 border-b border-purple-royal/10">
                            <span className="text-gray-500 font-medium">Account Number:</span>
                            <span className="font-bold text-purple-royal text-base select-all">09036063469</span>
                          </div>
                          <div className="flex justify-between items-center text-sm py-1">
                            <span className="text-gray-500 font-medium">Account Name:</span>
                            <span className="font-bold text-gray-900">Oseni Aminat Dolapo</span>
                          </div>
                          <p className="text-xs text-gray-500 pt-2 italic">
                            📌 Make your transfer to the account above and click the button below after sending.
                          </p>
                        </div>
                      )}
                    </div>


                    <button type="submit" className="btn-primary w-full py-3 mt-4 text-base font-bold shadow-lg">
                      {paymentMethod === 'card' ? 'Pay $5,000 Deposit & Complete Order' : 'I Have Made the Bank Transfer'}
                    </button>

                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default PropertyDetails;
