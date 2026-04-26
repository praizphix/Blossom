import { motion } from 'framer-motion';

const CTASection = ({ title, subtitle, buttonText, buttonLink }) => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-white max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
            {title}
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            {subtitle}
          </p>
          <button className="bg-accent hover:bg-accent/90 text-primary font-semibold px-10 py-4 rounded-lg text-lg transition-all transform hover:scale-105">
            {buttonText}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
