import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, Globe, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const offices = [
    {
      city: 'Beverly Hills',
      address: '123 Luxury Avenue, Suite 500',
      state: 'Beverly Hills, CA 90210',
      phone: '(310) 555-0192',
      email: 'beverlyhills@luxur.com',
      image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=800&q=80',
    },
    {
      city: 'New York',
      address: '1 Park Avenue, 42nd Floor',
      state: 'New York, NY 10016',
      phone: '(212) 555-0347',
      email: 'newyork@luxur.com',
      image: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&w=800&q=80',
    },
    {
      city: 'Miami',
      address: '200 Biscayne Boulevard, Penthouse',
      state: 'Miami, FL 33131',
      phone: '(305) 555-0284',
      email: 'miami@luxur.com',
      image: 'https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
  };

  return (
    <div className="bg-purple-tint min-h-screen pt-24 pb-20 overflow-hidden">

      {/* Header Section */}
      <div className="bg-purple-dark text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-bright rounded-full blur-[120px] opacity-20"></div>
        <div className="absolute -top-20 right-0 w-80 h-80 bg-purple-royal rounded-full blur-[100px] opacity-20"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-heading font-bold mb-6"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto font-light"
          >
            We'd love to hear from you. Whether you're looking to buy, sell, or simply have a question — our team is here to help.
          </motion.p>
        </div>
      </div>

      {/* Quick Contact Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Phone, label: 'Call Us', value: '+1 (800) 123-4567', sub: 'Mon–Fri, 9AM–6PM PST', color: 'from-purple-royal to-purple-bright' },
            { icon: Mail, label: 'Email Us', value: 'contact@luxur.com', sub: 'We reply within 24 hours', color: 'from-purple-bright to-pink-500' },
            { icon: MessageSquare, label: 'Live Chat', value: 'Start a conversation', sub: 'Available 24/7', color: 'from-purple-dark to-purple-royal' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 + 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center group cursor-pointer border border-transparent hover:border-purple-royal/20"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform shadow-md`}>
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-heading font-bold text-lg text-purple-dark mb-1">{item.label}</h3>
              <p className="text-purple-royal font-semibold mb-1">{item.value}</p>
              <p className="text-gray-400 text-sm">{item.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Form & Map Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100"
          >
            <h2 className="text-3xl font-heading font-bold text-purple-dark mb-2">Send Us a Message</h2>
            <p className="text-gray-500 mb-8">Fill out the form below and one of our advisors will be in touch shortly.</p>

            {formSubmitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex flex-col items-center justify-center py-16 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-purple-dark mb-2">Message Sent!</h3>
                <p className="text-gray-500 max-w-sm">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input type="text" placeholder="John" required className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-purple-royal focus:ring-2 focus:ring-purple-royal/20 transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input type="text" placeholder="Doe" required className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-purple-royal focus:ring-2 focus:ring-purple-royal/20 transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input type="email" placeholder="john@example.com" required className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-purple-royal focus:ring-2 focus:ring-purple-royal/20 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input type="tel" placeholder="+1 (555) 000-0000" className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-purple-royal focus:ring-2 focus:ring-purple-royal/20 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <select required className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-purple-royal focus:ring-2 focus:ring-purple-royal/20 transition-all appearance-none cursor-pointer bg-white">
                    <option value="">Select a topic...</option>
                    <option value="buy">I want to buy a property</option>
                    <option value="sell">I want to sell a property</option>
                    <option value="invest">Investment opportunities</option>
                    <option value="manage">Property management</option>
                    <option value="other">Other inquiry</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea rows="5" placeholder="Tell us about your real estate needs..." required className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-purple-royal focus:ring-2 focus:ring-purple-royal/20 transition-all resize-none"></textarea>
                </div>
                <button type="submit" className="btn-primary w-full py-4 text-lg shadow-lg group">
                  <span className="flex items-center justify-center gap-2">
                    Send Message <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </form>
            )}
          </motion.div>

          {/* Map Placeholder & Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Map */}
            <div className="w-full h-80 rounded-3xl overflow-hidden shadow-lg border border-gray-100 relative bg-gray-200">
              <iframe
                title="Luxur Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7152203633486!2d-118.40067882434882!3d34.06868241826891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147ab%3A0xd6c7c379fd081ed1!2sBeverly%20Hills%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>

            {/* Office Hours */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
              <h3 className="font-heading font-bold text-xl text-purple-dark mb-6 flex items-center gap-3">
                <Clock className="w-6 h-6 text-purple-royal" /> Office Hours
              </h3>
              <div className="space-y-4">
                {[
                  { day: 'Monday – Friday', time: '9:00 AM – 6:00 PM' },
                  { day: 'Saturday', time: '10:00 AM – 4:00 PM' },
                  { day: 'Sunday', time: 'By Appointment Only' },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-3 border-b border-gray-50 last:border-0">
                    <span className="text-gray-700 font-medium">{item.day}</span>
                    <span className="text-purple-royal font-semibold">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Our Offices Section */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4">Our Offices</h2>
            <div className="w-24 h-1 bg-purple-royal mx-auto mb-6"></div>
            <p className="text-gray-500 max-w-2xl mx-auto">Visit us at any of our luxury offices across the country.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="rounded-3xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="h-48 overflow-hidden relative">
                  <img src={office.image} alt={office.city} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-dark/80 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-6 text-white text-2xl font-heading font-bold">{office.city}</h3>
                </div>
                <div className="p-6 bg-white space-y-3">
                  <div className="flex items-start gap-3 text-gray-600">
                    <MapPin className="w-5 h-5 text-purple-bright shrink-0 mt-0.5" />
                    <div>
                      <p>{office.address}</p>
                      <p className="text-gray-400">{office.state}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Phone className="w-5 h-5 text-purple-bright shrink-0" />
                    <span>{office.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Mail className="w-5 h-5 text-purple-bright shrink-0" />
                    <span>{office.email}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Contact;
