import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaTachometerAlt, 
  FaUserGraduate, 
  FaEnvelope, 
  FaNewspaper, 
  FaImages, 
  FaCog,
  FaBars,
  FaTimes,
  FaSignOutAlt
} from 'react-icons/fa';
import SEO from '../components/SEO';
import seoConfig from '../utils/seoConfig';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: <FaTachometerAlt /> },
    { id: 'applications', label: 'Applications', icon: <FaUserGraduate /> },
    { id: 'contacts', label: 'Contact Messages', icon: <FaEnvelope /> },
    { id: 'news', label: 'News Management', icon: <FaNewspaper /> },
    { id: 'gallery', label: 'Gallery', icon: <FaImages /> },
    { id: 'settings', label: 'Settings', icon: <FaCog /> },
  ];

  // Mock data
  const stats = [
    { label: 'Pending Applications', value: '24', color: 'bg-blue-500' },
    { label: 'Unread Messages', value: '12', color: 'bg-green-600' },
    { label: 'Published News', value: '45', color: 'bg-purple-500' },
    { label: 'Gallery Images', value: '189', color: 'bg-pink-500' },
  ];

  const recentApplications = [
    { name: 'John Doe', class: 'JSS 1', date: '2026-04-20', status: 'Pending' },
    { name: 'Jane Smith', class: 'JSS 2', date: '2026-04-19', status: 'Approved' },
    { name: 'Mike Johnson', class: 'SSS 1', date: '2026-04-18', status: 'Pending' },
  ];

  const renderContent = () => {
    switch(activeTab) {
      case 'overview':
        return (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Dashboard Overview</h2>
            
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`${stat.color} text-white rounded-xl p-6 shadow-lg`}
                >
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm opacity-90">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Applications</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Name</th>
                      <th className="text-left py-3 px-4">Class</th>
                      <th className="text-left py-3 px-4">Date</th>
                      <th className="text-left py-3 px-4">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentApplications.map((app, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4">{app.name}</td>
                        <td className="py-3 px-4">{app.class}</td>
                        <td className="py-3 px-4">{app.date}</td>
                        <td className="py-3 px-4">
                          <span className={`px-3 py-1 rounded-full text-sm ${
                            app.status === 'Approved' 
                              ? 'bg-green-100 text-green-700' 
                              : 'bg-yellow-100 text-yellow-700'
                          }`}>
                            {app.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      
      case 'applications':
        return (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Applications Management</h2>
            <div className="bg-white rounded-xl shadow-md p-6">
              <p className="text-gray-600">Application management interface coming soon...</p>
            </div>
          </div>
        );
      
      case 'contacts':
        return (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Messages</h2>
            <div className="bg-white rounded-xl shadow-md p-6">
              <p className="text-gray-600">Contact messages interface coming soon...</p>
            </div>
          </div>
        );
      
      case 'news':
        return (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">News Management</h2>
            <div className="bg-white rounded-xl shadow-md p-6">
              <p className="text-gray-600">News management interface coming soon...</p>
            </div>
          </div>
        );
      
      case 'gallery':
        return (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Gallery Management</h2>
            <div className="bg-white rounded-xl shadow-md p-6">
              <p className="text-gray-600">Gallery management interface coming soon...</p>
            </div>
          </div>
        );
      
      case 'settings':
        return (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Settings</h2>
            <div className="bg-white rounded-xl shadow-md p-6">
              <p className="text-gray-600">Settings interface coming soon...</p>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <>
      <SEO {...seoConfig.admin} />
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-full bg-[#0B5D2A] text-white transition-all duration-300 z-40 ${
        sidebarOpen ? 'w-64' : 'w-20'
      }`}>
        <div className="p-6 flex items-center justify-between">
          {sidebarOpen && <h1 className="text-xl font-bold">Admin Panel</h1>}
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-white hover:bg-white/10 p-2 rounded-lg"
          >
            {sidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <nav className="mt-8">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-4 px-6 py-4 hover:bg-white/10 transition-colors ${
                activeTab === item.id ? 'bg-white/20 border-r-4 border-white' : ''
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              {sidebarOpen && <span>{item.label}</span>}
            </button>
          ))}
        </nav>

        <div className="absolute bottom-0 w-full p-6">
          <button className="w-full flex items-center gap-4 px-6 py-4 hover:bg-white/10 transition-colors rounded-lg">
            <FaSignOutAlt />
            {sidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className={`transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-20'}`}>
        <div className="p-8">
          {renderContent()}
        </div>
      </main>
    </div>
    </>
  );
};

export default Admin;
