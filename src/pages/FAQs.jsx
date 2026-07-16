import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    category: 'Buying a Property',
    questions: [
      {
        q: 'How do I start the process of buying a luxury property?',
        a: 'Start by scheduling a consultation with one of our senior advisors. We will assess your requirements, budget, and preferred locations, then curate a selection of exclusive listings tailored to you — including off-market opportunities not available to the general public.'
      },
      {
        q: 'What additional costs should I expect when buying?',
        a: 'Beyond the purchase price, buyers typically encounter closing costs (1–3%), property taxes, homeowner\'s insurance, HOA fees (if applicable), inspection fees, and potential renovation or staging costs. Our advisors will walk you through a full cost breakdown upfront.'
      },
      {
        q: 'Can Luxur help me find off-market properties?',
        a: 'Absolutely. Our exclusive network gives clients privileged access to off-market and pre-market listings that are never publicly advertised — a significant advantage in competitive luxury markets.'
      },
    ]
  },
  {
    category: 'Selling a Property',
    questions: [
      {
        q: 'How does Luxur market my property?',
        a: 'We use a bespoke multi-channel strategy including professional photography, cinematic video tours, 3D virtual walkthroughs, premium print materials, and targeted digital campaigns across major real estate platforms and our private client network.'
      },
      {
        q: 'How is the listing price determined?',
        a: 'Our team conducts a comprehensive Comparative Market Analysis (CMA) combined with current market trend data, neighborhood analysis, and a detailed evaluation of your property\'s unique features to determine the optimal listing price.'
      },
    ]
  },
  {
    category: 'Our Services',
    questions: [
      {
        q: 'Does Luxur offer property management services?',
        a: 'Yes. We offer full-service property management including tenant sourcing, rent collection, maintenance coordination, and financial reporting — allowing you to enjoy passive income without the day-to-day responsibilities.'
      },
      {
        q: 'Do you assist with international property purchases?',
        a: 'Yes. Our global network of partner agencies allows us to assist clients purchasing properties in Europe, the Middle East, Asia, and beyond. We handle cross-border due diligence and connect you with trusted local legal counsel.'
      },
      {
        q: 'What is the Luxur concierge service?',
        a: 'Our concierge service extends beyond the transaction. From interior design referrals and moving logistics to neighbourhood orientation and lifestyle services, we ensure your transition into a new property is seamless and stress-free.'
      },
    ]
  },
];

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      layout
      className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left gap-4"
      >
        <span className="font-semibold text-purple-dark text-base">{question}</span>
        <span className="shrink-0 w-8 h-8 rounded-full bg-purple-tint flex items-center justify-center text-purple-royal">
          {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-6 text-gray-500 leading-relaxed border-t border-gray-50 pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQs = () => {
  return (
    <div className="bg-purple-tint min-h-screen overflow-hidden">

      {/* Hero */}
      <div className="bg-gradient-to-r from-purple-dark to-purple-royal py-24 px-4 text-white text-center relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-bright rounded-full blur-[120px] opacity-10" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-royal rounded-full blur-[120px] opacity-10" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-5 py-2 rounded-full text-sm font-semibold tracking-widest uppercase bg-white/10 border border-white/20 text-purple-bright mb-6"
          >
            Help Center
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-5xl md:text-6xl font-heading font-bold mb-6 text-white"
          >
            Frequently Asked <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-bright to-accent-gold">
              Questions
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white/80 text-lg max-w-xl mx-auto"
          >
            Everything you need to know about buying, selling, and our services. Can't find an answer? Contact our team.
          </motion.p>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {faqs.map((section, si) => (
          <motion.div
            key={si}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: si * 0.1 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-heading font-bold text-purple-dark mb-6 flex items-center gap-3">
              <span className="w-8 h-1 bg-gradient-to-r from-purple-royal to-purple-bright rounded-full inline-block" />
              {section.category}
            </h2>
            <div className="space-y-4">
              {section.questions.map((item, qi) => (
                <FAQItem key={qi} question={item.q} answer={item.a} />
              ))}
            </div>
          </motion.div>
        ))}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-white rounded-3xl p-12 shadow-sm border border-gray-100"
        >
          <h3 className="text-2xl font-heading font-bold text-purple-dark mb-3">Still have questions?</h3>
          <p className="text-gray-500 mb-6">Our team is happy to assist you with any query, big or small.</p>
          <a
            href="/contact"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="btn-primary inline-flex"
          >
            Contact Our Team
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQs;
