import { motion } from 'framer-motion';
import { FaCalendar } from 'react-icons/fa';

const NewsCard = ({ image, title, excerpt, date, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group cursor-pointer"
    >
      <div className="overflow-hidden h-48">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
          <FaCalendar />
          <span>{date}</span>
        </div>
        <h3 className="text-xl font-bold text-dark mb-3 font-heading group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 line-clamp-3">
          {excerpt}
        </p>
        <button className="mt-4 text-primary font-semibold hover:underline">
          Read More →
        </button>
      </div>
    </motion.div>
  );
};

export default NewsCard;
