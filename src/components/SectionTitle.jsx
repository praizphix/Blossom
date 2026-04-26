import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle, centered = true }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${centered ? 'text-center' : ''}`}
    >
      {subtitle && (
        <p className="text-secondary font-label-md uppercase tracking-widest mb-4">
          {subtitle}
        </p>
      )}
      <h2 className="font-headline-md text-primary">
        {title}
      </h2>
      <div className={`w-20 h-1 bg-secondary mt-4 ${centered ? 'mx-auto' : ''}`} />
    </motion.div>
  );
};

export default SectionTitle;
