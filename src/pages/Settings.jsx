import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, MapPin, Bell, Shield, Eye, Save } from 'lucide-react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [saved, setSaved] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'privacy', label: 'Privacy', icon: Shield },
  ];

  return (
    <div className="bg-purple-tint min-h-screen pt-24 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-dark to-purple-royal py-16 px-4 mb-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-heading font-bold text-white mb-4"
          >
            My Settings
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/70 text-lg"
          >
            Manage your account preferences
          </motion.p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Tabs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:w-56 shrink-0"
          >
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-5 py-4 text-sm font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-purple-royal text-white'
                      : 'text-gray-600 hover:bg-purple-tint hover:text-purple-royal'
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  {tab.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex-1"
          >
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              {activeTab === 'profile' && (
                <form onSubmit={handleSave}>
                  <h2 className="font-heading text-xl font-bold text-purple-dark mb-6">Profile Information</h2>
                  
                  {/* Avatar */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-purple-royal to-purple-bright flex items-center justify-center text-white font-heading text-2xl font-bold">
                      JD
                    </div>
                    <div>
                      <button type="button" className="text-sm font-medium text-purple-royal hover:text-purple-dark transition-colors">Change Photo</button>
                      <p className="text-xs text-gray-400 mt-1">JPG, PNG or GIF. Max 2MB</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input type="text" defaultValue="John" className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-purple-royal transition-colors" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input type="text" defaultValue="Doe" className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-purple-royal transition-colors" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input type="email" defaultValue="john@example.com" className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-purple-royal transition-colors" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input type="tel" defaultValue="+1 (555) 123-4567" className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-purple-royal transition-colors" />
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input type="text" defaultValue="Beverly Hills, CA" className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-purple-royal transition-colors" />
                    </div>
                  </div>

                  <button type="submit" className="btn-primary flex items-center gap-2">
                    <Save className="w-4 h-4" />
                    {saved ? 'Saved!' : 'Save Changes'}
                  </button>
                </form>
              )}

              {activeTab === 'notifications' && (
                <div>
                  <h2 className="font-heading text-xl font-bold text-purple-dark mb-6">Notification Preferences</h2>
                  <div className="space-y-5">
                    {[
                      { label: 'New property listings', desc: 'Get notified when new properties match your search criteria' },
                      { label: 'Price drops', desc: 'Alerts when saved properties reduce their price' },
                      { label: 'Market insights', desc: 'Weekly real estate market reports and trends' },
                      { label: 'Newsletter', desc: 'Monthly newsletter with featured properties and news' },
                    ].map((item, i) => (
                      <label key={i} className="flex items-start gap-4 cursor-pointer group">
                        <input type="checkbox" defaultChecked={i < 2} className="mt-1 w-5 h-5 rounded border-gray-300 text-purple-royal focus:ring-purple-royal accent-purple-royal" />
                        <div>
                          <p className="text-sm font-medium text-gray-800 group-hover:text-purple-royal transition-colors">{item.label}</p>
                          <p className="text-xs text-gray-400 mt-0.5">{item.desc}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                  <button onClick={handleSave} className="btn-primary flex items-center gap-2 mt-8">
                    <Save className="w-4 h-4" />
                    {saved ? 'Saved!' : 'Save Preferences'}
                  </button>
                </div>
              )}

              {activeTab === 'privacy' && (
                <div>
                  <h2 className="font-heading text-xl font-bold text-purple-dark mb-6">Privacy & Security</h2>
                  <div className="space-y-5">
                    {[
                      { label: 'Profile visibility', desc: 'Allow other users to see your profile', icon: Eye },
                      { label: 'Two-factor authentication', desc: 'Add an extra layer of security to your account', icon: Shield },
                    ].map((item, i) => (
                      <label key={i} className="flex items-start gap-4 cursor-pointer group">
                        <input type="checkbox" defaultChecked={i === 0} className="mt-1 w-5 h-5 rounded border-gray-300 text-purple-royal focus:ring-purple-royal accent-purple-royal" />
                        <div>
                          <p className="text-sm font-medium text-gray-800 group-hover:text-purple-royal transition-colors">{item.label}</p>
                          <p className="text-xs text-gray-400 mt-0.5">{item.desc}</p>
                        </div>
                      </label>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <h3 className="font-heading text-md font-bold text-gray-800 mb-4">Change Password</h3>
                    <div className="space-y-4 max-w-sm">
                      <input type="password" placeholder="Current password" className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-purple-royal transition-colors" />
                      <input type="password" placeholder="New password" className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-purple-royal transition-colors" />
                      <input type="password" placeholder="Confirm new password" className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-purple-royal transition-colors" />
                    </div>
                  </div>

                  <button onClick={handleSave} className="btn-primary flex items-center gap-2 mt-8">
                    <Save className="w-4 h-4" />
                    {saved ? 'Saved!' : 'Save Settings'}
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
