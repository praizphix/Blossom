import { motion } from 'framer-motion';

const FeatureCard = ({ icon, title, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10 }}
      className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all"
    >
      <div className="text-5xl mb-4 text-primary">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-dark mb-3 font-heading">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

export default FeatureCard;
