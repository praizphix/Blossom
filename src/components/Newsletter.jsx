import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(''); // 'success', 'error', or ''

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // TODO: Implement newsletter subscription logic
    // This should connect to your backend service
    
    try {
      // Placeholder for API call
      // await subscribeToNewsletter(email);
      
      setStatus('success');
      setEmail('');
      
      // Reset status after 3 seconds
      setTimeout(() => setStatus(''), 3000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus(''), 3000);
    }
  };

  return (
    <div className="bg-primary text-white py-12">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
          <p className="mb-6 text-white/90">
            Subscribe to our newsletter for the latest news and updates from Blossom High School
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Subscribe
            </button>
          </form>

          {status === 'success' && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-green-200"
            >
              ✓ Successfully subscribed!
            </motion.p>
          )}

          {status === 'error' && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-red-200"
            >
              ✗ Something went wrong. Please try again.
            </motion.p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Newsletter;
