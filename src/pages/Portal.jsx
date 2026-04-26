import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserGraduate, FaUserTie, FaChalkboardTeacher } from 'react-icons/fa';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import seoConfig from '../utils/seoConfig';

const Portal = () => {
  const portals = [
    {
      id: 1,
      title: 'Student Portal',
      description: 'Access your academic records, assignments, and more',
      icon: <FaUserGraduate className="text-5xl" />,
      link: '#', // Replace with actual portal link
      color: 'bg-green-600'
    },
    {
      id: 2,
      title: 'Parent Portal',
      description: 'Monitor your child\'s progress and communicate with teachers',
      icon: <FaUserTie className="text-5xl" />,
      link: '#', // Replace with actual portal link
      color: 'bg-[#2E8B57]'
    },
    {
      id: 3,
      title: 'Staff Portal',
      description: 'Manage classes, grades, and administrative tasks',
      icon: <FaChalkboardTeacher className="text-5xl" />,
      link: '/admin',
      color: 'bg-[#0B5D2A]'
    }
  ];

  return (
    <>
      <SEO {...seoConfig.portal} />
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Access Your Portal
          </h1>
          <p className="text-xl text-gray-600">
            Choose your portal to login and access your dashboard
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {portals.map((portal, index) => (
            <motion.div
              key={portal.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link to={portal.link}>
                <div className={`${portal.color} text-white rounded-2xl p-8 h-full hover:scale-105 transition-transform duration-300 cursor-pointer shadow-lg hover:shadow-xl`}>
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-6">
                      {portal.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">
                      {portal.title}
                    </h3>
                    <p className="text-white/90 mb-6">
                      {portal.description}
                    </p>
                    <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                      Login Now
                    </button>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Having trouble accessing your portal?
          </p>
          <Link to="/contact" className="text-green-600 font-semibold hover:text-green-700">
            Contact Support
          </Link>
        </motion.div>
      </div>
    </div>
    </>
  );
};

export default Portal;
