import { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import seoConfig from '../utils/seoConfig';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Campus', 'Events', 'Sports', 'Academics', 'Students'];

  const images = [
    { category: 'Campus', src: '/images/gallery/campus1.jpg', caption: 'School Building Exterior' },
    { category: 'Campus', src: '/images/gallery/campus2.jpg', caption: 'School Compound' },
    { category: 'Events', src: '/images/gallery/event1.jpg', caption: 'Annual Prize Giving Day' },
    { category: 'Events', src: '/images/gallery/event2.jpg', caption: 'Cultural Day Celebration' },
    { category: 'Sports', src: '/images/gallery/sports1.jpg', caption: 'Inter-House Sports Competition' },
    { category: 'Sports', src: '/images/gallery/sports2.jpg', caption: 'Football Match' },
    { category: 'Academics', src: '/images/gallery/academics1.jpg', caption: 'Science Laboratory Class' },
    { category: 'Academics', src: '/images/gallery/academics2.jpg', caption: 'Computer Lab Session' },
    { category: 'Students', src: '/images/gallery/students1.jpg', caption: 'Students in Class' },
    { category: 'Students', src: '/images/gallery/students2.jpg', caption: 'Group Study Session' },
    { category: 'Events', src: '/images/gallery/event3.jpg', caption: 'Graduation Ceremony' },
    { category: 'Campus', src: '/images/gallery/campus3.jpg', caption: 'School Library' }
  ];

  const filteredImages = activeCategory === 'All' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <>
      <SEO {...seoConfig.gallery} />
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-heading">
              Photo Gallery
            </h1>
            <p className="text-xl text-gray-100">
              Capturing moments and memories at Blossom High School.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-dark hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.caption}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="font-semibold">{image.caption}</p>
                  <p className="text-sm text-gray-300">{image.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Video Tour"
            title="Experience Blossom High School"
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto aspect-video bg-gray-200 rounded-xl overflow-hidden shadow-2xl"
          >
            {/* Placeholder for video - Replace with actual video embed */}
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary to-secondary text-white">
              <div className="text-center">
                <div className="text-6xl mb-4">▶</div>
                <p className="text-xl font-semibold">School Tour Video</p>
                <p className="text-gray-200">Coming Soon</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Gallery;
