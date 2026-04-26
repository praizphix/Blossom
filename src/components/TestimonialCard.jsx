import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const TestimonialCard = ({ quote, author, role, image, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-white p-8 rounded-xl shadow-lg"
    >
      <FaQuoteLeft className="text-4xl text-accent mb-4" />
      <p className="text-gray-700 mb-6 leading-relaxed italic">
        "{quote}"
      </p>
      <div className="flex items-center gap-4">
        {image && (
          <img 
            src={image} 
            alt={author}
            className="w-14 h-14 rounded-full object-cover"
          />
        )}
        <div>
          <h4 className="font-bold text-dark">{author}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
