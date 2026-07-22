import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Sparkles } from 'lucide-react';

const Chatbot = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: 'Hello! Welcome to Luxur Real Estate. 🏰 How can I help you find your dream property today?',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const quickPrompts = [
    '🔥 View Available Properties',
    '💰 How do I buy or rent?',
    '📞 Talk to an Advisor',
    '📍 Office Locations',
  ];

  const handleSend = (textToSend) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');

    // Generate Bot Response
    setTimeout(() => {
      let botReply = "Thank you for reaching out! One of our senior real estate advisors will be with you shortly. You can also send us a direct message via the contact form on this page.";
      const lower = query.toLowerCase();

      if (lower.includes('properties') || lower.includes('buy') || lower.includes('rent') || lower.includes('available')) {
        botReply = "We have premium Luxury Villas, Penthouses, and Modern Estates available! Click on the 'Properties' tab in the top navigation bar to explore our entire catalog.";
      } else if (lower.includes('advisor') || lower.includes('agent') || lower.includes('phone') || lower.includes('call')) {
        botReply = "You can call our concierge directly at +1 (800) 123-4567 (Mon–Fri, 9AM–6PM PST) or submit an inquiry using the contact form.";
      } else if (lower.includes('location') || lower.includes('office') || lower.includes('address')) {
        botReply = "Our flagship offices are located in Beverly Hills (CA), New York (NY), and Miami (FL). Check the map below for exact directions!";
      }

      const botMsg = {
        id: Date.now() + 1,
        sender: 'bot',
        text: botReply,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 800);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-2rem)] h-[520px] bg-white rounded-3xl shadow-2xl border border-purple-royal/20 flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-dark via-purple-royal to-purple-bright p-4 text-white flex items-center justify-between shadow-md">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                <Bot className="w-6 h-6 text-accent-gold" />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="font-heading font-bold text-base leading-tight">Luxur Assistant</h3>
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                </div>
                <p className="text-xs text-purple-200 font-light">Online 24/7 Concierge</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-purple-tint/30">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex items-end space-x-2 ${
                  msg.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-7 h-7 rounded-full bg-purple-royal flex items-center justify-center text-white shrink-0 mb-1">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-[80%] p-3.5 rounded-2xl text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-purple-royal text-white rounded-br-none shadow-md'
                      : 'bg-white text-gray-800 rounded-bl-none border border-gray-100 shadow-sm'
                  }`}
                >
                  <p>{msg.text}</p>
                  <span
                    className={`block text-[10px] mt-1 ${
                      msg.sender === 'user' ? 'text-purple-200 text-right' : 'text-gray-400'
                    }`}
                  >
                    {msg.time}
                  </span>
                </div>

                {msg.sender === 'user' && (
                  <div className="w-7 h-7 rounded-full bg-purple-bright flex items-center justify-center text-white shrink-0 mb-1">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestions */}
          <div className="p-2 bg-white border-t border-gray-100 overflow-x-auto whitespace-nowrap scrollbar-none flex gap-1.5">
            {quickPrompts.map((prompt, index) => (
              <button
                key={index}
                onClick={() => handleSend(prompt)}
                className="text-xs bg-purple-tint text-purple-royal font-medium px-3 py-1.5 rounded-full hover:bg-purple-royal hover:text-white transition-colors shrink-0"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Area */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-white border-t border-gray-100 flex items-center space-x-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about properties, pricing..."
              className="flex-1 px-4 py-2.5 rounded-full bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-purple-royal/30 transition-all"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="w-10 h-10 rounded-full bg-purple-royal text-white flex items-center justify-center hover:bg-purple-dark disabled:opacity-40 transition-colors shadow-md shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Chatbot;
