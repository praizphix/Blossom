import { motion } from 'framer-motion';

const Hero = ({ title, subtitle, primaryButton, secondaryButton, backgroundImage }) => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-primary to-secondary overflow-hidden">
      {/* Background Image Overlay */}
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-heading">
            {title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {primaryButton && (
              <button className="bg-accent hover:bg-accent/90 text-primary font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105">
                {primaryButton}
              </button>
            )}
            {secondaryButton && (
              <button className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg border-2 border-white transition-all">
                {secondaryButton}
              </button>
            )}
          </div>
        </motion.div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default Hero;
