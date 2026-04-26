import React from 'react';
import { motion } from 'framer-motion';
import studentsTeamwork from '../assets/images/students-teamwork.png';
import { Link } from 'react-router-dom';
import OptimizedImage from '../components/OptimizedImage';
import SEO from '../components/SEO';
import seoConfig from '../utils/seoConfig';
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  staggerItem,
  scaleIn,
  viewportSettings
} from '../utils/animations';

const About = () => {
  return (
    <>
      <SEO {...seoConfig.about} />
      <div>
      {/* Hero Section */}
      <section className="relative h-[614px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover" 
            alt="Blossom High School students"
            src={studentsTeamwork}
            loading="eager"
            fetchpriority="high"
          />
          <div className="absolute inset-0 bg-primary/40 backdrop-brightness-75"></div>
        </div>
        <motion.div 
          className="relative z-10 text-center px-4 max-w-4xl"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.span 
            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-label-md uppercase tracking-widest"
            variants={fadeInUp}
          >
            Est. 1994
          </motion.span>
          <motion.h1 
            className="text-white font-display-xl mb-6 leading-tight"
            variants={fadeInUp}
          >
            About Blossom High School
          </motion.h1>
          <motion.p 
            className="text-white/90 font-body-lg max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Cultivating excellence, nurturing integrity, and preparing world-class leaders since our founding.
          </motion.p>
        </motion.div>
      </section>

      {/* Why We Exist Section */}
      <section className="py-xl px-8 bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={fadeInLeft}
          >
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-secondary-container rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
            <OptimizedImage
              className="rounded-[2rem] shadow-2xl relative z-10 aspect-[4/3] object-cover" 
              alt="Diverse group of students engaged in collaborative study in a modern glass-walled library with warm ambient lighting"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSr34CKo1uH6U9iC8j4VchdSbP9DSUKl5qi6pwYDpHdcljGaVL44N2-qlqFZU-zpFEHhtkATzilJ5RDXskUDv4O5IlOsJKbuKfFpFPKr4AO1FnZCou_sq5T7VXNq_LTSfr6kTbLEpcyyom0IyzfewyE-4tKkxmt81gunaPEVvyzCpYlDykhKlh8o4fRQh9Biu5yuHPlWqa3d1Ru2Xk163dm_B_WE6a1EjR70Jajx89hvn7a1TEEKxadZTgfo366-bHciYbyh_b"
            />
            <motion.div 
              className="absolute -bottom-8 -right-8 p-8 bg-white rounded-2xl shadow-xl z-20 border-l-4 border-tertiary-container"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={viewportSettings}
              transition={{ delay: 0.3 }}
            >
              <p className="font-headline-sm text-primary italic">"Education is the blooming of a soul."</p>
            </motion.div>
          </motion.div>
          <motion.div 
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={fadeInRight}
          >
            <div className="inline-block px-4 py-1 rounded-full bg-surface-container text-primary font-label-md">
              Our Purpose
            </div>
            <h2 className="font-display-lg text-primary">Why We Exist</h2>
            <p className="text-on-surface-variant font-body-lg">
              At Blossom High School, we believe that every child possesses a unique brilliance waiting to be discovered. We provide more than just a curriculum; we provide a sanctuary for intellectual curiosity and character development.
            </p>
            <p className="text-on-surface-variant font-body-lg">
              Our mission is rooted in the understanding that a supportive, inclusive environment is the catalyst for true growth. We have built an ecosystem where students feel safe to take risks, encouraged to lead, and inspired to serve.
            </p>
            <div className="flex gap-4">
              <Link 
                to="/contact"
                className="px-8 py-3 bg-primary text-white rounded-xl font-label-md hover:translate-y-[-2px] transition-all shadow-lg"
              >
                Schedule a Tour
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Bento Grid */}
      <section className="py-xl px-8 bg-surface relative overflow-hidden">
        <div className="max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Mission Card */}
            <div className="md:col-span-7 bg-white p-12 rounded-[2rem] shadow-[0_20px_50px_rgba(11,93,42,0.05)] border-l-4 border-secondary border-t border-r border-b border-black/5 group hover:translate-y-[-4px] transition-all duration-300">
              <div className="w-16 h-16 bg-secondary-container rounded-2xl flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-primary text-3xl">flag</span>
              </div>
              <h3 className="font-headline-md text-primary mb-6">Our Mission</h3>
              <p className="font-body-lg text-on-surface-variant mb-8 leading-relaxed">
                To provide top-tier, quality education that blends academic excellence with rigorous discipline, empowering students to reach their full potential in an ever-evolving world.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-on-surface">
                  <span className="material-symbols-outlined text-secondary" style={{fontVariationSettings: "'FILL' 1"}}>
                    check_circle
                  </span>
                  <span className="font-label-md">Uncompromising Academic Standards</span>
                </li>
                <li className="flex items-center gap-3 text-on-surface">
                  <span className="material-symbols-outlined text-secondary" style={{fontVariationSettings: "'FILL' 1"}}>
                    check_circle
                  </span>
                  <span className="font-label-md">Character-First Pedagogy</span>
                </li>
              </ul>
            </div>

            {/* Vision Card */}
            <div className="md:col-span-5 bg-primary p-12 rounded-[2rem] shadow-2xl flex flex-col justify-between text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
              <div>
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8">
                  <span className="material-symbols-outlined text-white text-3xl">visibility</span>
                </div>
                <h3 className="font-headline-md mb-6">Our Vision</h3>
                <p className="font-body-lg text-white/90 leading-relaxed">
                  To be a global benchmark for excellence, nurturing confident, compassionate, and globally competitive students who lead with integrity.
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="font-label-md text-secondary-fixed">Global Citizenship & Innovation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-xl px-8 bg-white">
        <div className="max-w-container-max mx-auto text-center mb-16">
          <span className="text-secondary font-label-md uppercase tracking-[0.2em] mb-4 block">
            The Blossom DNA
          </span>
          <h2 className="font-display-lg text-primary">Our Core Values</h2>
          <div className="w-24 h-1 bg-tertiary-container mx-auto mt-6 rounded-full"></div>
        </div>
        
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Value 1 - Excellence */}
          <div className="group p-8 rounded-3xl bg-surface-container-lowest border border-outline-variant/30 hover:border-secondary transition-all duration-300 hover:shadow-xl text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-secondary/5 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-secondary text-3xl">workspace_premium</span>
            </div>
            <h4 className="font-headline-sm text-primary mb-3">Excellence</h4>
            <p className="text-sm text-on-surface-variant">
              Striving for the highest quality in every academic and extracurricular pursuit.
            </p>
          </div>

          {/* Value 2 - Integrity */}
          <div className="group p-8 rounded-3xl bg-surface-container-lowest border border-outline-variant/30 hover:border-secondary transition-all duration-300 hover:shadow-xl text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-secondary/5 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-secondary text-3xl">verified_user</span>
            </div>
            <h4 className="font-headline-sm text-primary mb-3">Integrity</h4>
            <p className="text-sm text-on-surface-variant">
              Upholding honest moral principles and ethical behavior at all times.
            </p>
          </div>

          {/* Value 3 - Discipline */}
          <div className="group p-8 rounded-3xl bg-surface-container-lowest border border-outline-variant/30 hover:border-secondary transition-all duration-300 hover:shadow-xl text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-secondary/5 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-secondary text-3xl">self_improvement</span>
            </div>
            <h4 className="font-headline-sm text-primary mb-3">Discipline</h4>
            <p className="text-sm text-on-surface-variant">
              Fostering self-control and a structured approach to learning and life.
            </p>
          </div>

          {/* Value 4 - Innovation */}
          <div className="group p-8 rounded-3xl bg-surface-container-lowest border border-outline-variant/30 hover:border-secondary transition-all duration-300 hover:shadow-xl text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-secondary/5 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-secondary text-3xl">lightbulb</span>
            </div>
            <h4 className="font-headline-sm text-primary mb-3">Innovation</h4>
            <p className="text-sm text-on-surface-variant">
              Encouraging creative problem solving and forward-thinking ideas.
            </p>
          </div>

          {/* Value 5 - Respect */}
          <div className="group p-8 rounded-3xl bg-surface-container-lowest border border-outline-variant/30 hover:border-secondary transition-all duration-300 hover:shadow-xl text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-secondary/5 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-secondary text-3xl">diversity_3</span>
            </div>
            <h4 className="font-headline-sm text-primary mb-3">Respect</h4>
            <p className="text-sm text-on-surface-variant">
              Valuing diverse perspectives and treating others with dignity and kindness.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-xl px-8">
        <div className="max-w-container-max mx-auto rounded-[3rem] overflow-hidden relative">
          <img 
            className="absolute inset-0 w-full h-full object-cover" 
            alt="Happy high school students in navy uniforms walking together on a sun-drenched campus pathway lined with blooming flowers"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD01DHn7kUygk61F5qqPtgZgoRT8zKNIDXYt2UDq_P9TcoyHnnYnS9i_JWrG4QwZwOTdVJmaldag4-8G3PV4_tylGeDhOQ6b5WprIDeQB9RqCV6_-ticPkfMnFFnJ3nmuAAHEuTPcMhQnB-h5RecAslO5ukz7rXAwx28c9SdHR1MD88tZe0Fqg0Komwl-bPMmER17sPVrOr6_eNSBAx9-2Vvlbx0Jr9TpZ9oob9G26a06-XUSWIafWrW3V6pFpEJyzLncc3yKSE"
          />
          <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm"></div>
          <div className="relative z-10 px-12 py-20 text-center text-white">
            <h2 className="font-display-lg mb-6">Join the Blossom Family</h2>
            <p className="font-body-lg text-white/80 max-w-2xl mx-auto mb-10">
              Start your journey toward academic excellence and global leadership today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/admissions"
                className="px-10 py-4 bg-tertiary-container text-white rounded-full font-label-md hover:scale-105 transition-all shadow-2xl"
              >
                Apply Now
              </Link>
              <Link 
                to="/contact"
                className="px-10 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-label-md hover:bg-white/20 transition-all"
              >
                Visit Our Campus
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default About;
