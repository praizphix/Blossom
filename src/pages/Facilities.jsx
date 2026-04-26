import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import seoConfig from '../utils/seoConfig';

const Facilities = () => {
  return (
    <>
      <SEO {...seoConfig.facilities} />
    <div>
      {/* Hero Section */}
      <header className="relative pt-12 pb-20 overflow-hidden bg-white">
        <div className="max-w-container-max mx-auto px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-4 bg-secondary-container text-on-secondary-container rounded-full font-label-md mb-6">
              Built for Excellence
            </span>
            <h1 className="font-display-xl text-primary leading-tight mb-8">
              World-Class Learning Environment
            </h1>
            <p className="font-body-lg text-on-surface-variant mb-10">
              At Blossom High School, we believe that the right atmosphere fosters the brightest minds. Our state-of-the-art infrastructure is designed to inspire creativity, rigor, and a lifelong love for learning.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-surface-container rounded-lg border border-outline-variant">
                <span className="material-symbols-outlined text-primary">verified_user</span>
                <span className="font-label-md text-on-surface">Certified Safety Protocols</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-surface-container rounded-lg border border-outline-variant">
                <span className="material-symbols-outlined text-primary">tv</span>
                <span className="font-label-md text-on-surface">Modern Tech Integration</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block opacity-10 pointer-events-none">
          <div className="w-full h-full bg-primary-container rounded-bl-[200px]"></div>
        </div>
      </header>

      {/* Bento Grid Gallery */}
      <section className="py-xl bg-surface">
        <div className="max-w-container-max mx-auto px-8">
          <div className="mb-16 flex justify-between items-end">
            <div>
              <h2 className="font-headline-md text-primary mb-2">Our Campus Infrastructure</h2>
              <p className="font-body-md text-on-surface-variant">Explore the spaces where curiosity meets opportunity.</p>
            </div>
            <div className="hidden md:block">
              <span className="material-symbols-outlined text-primary-container text-4xl">architecture</span>
            </div>
          </div>
          
          {/* Custom Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Science Laboratory - spans 2 columns */}
            <div className="md:col-span-2 relative group overflow-hidden rounded-[24px] shadow-lg h-[300px]">
              <img 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="Science Laboratory"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbv3Shngs7qinebFxPvUSMLTah9iuvNn34Q5jBTML6l5UfAHoZ-EZkkIaLz6Hz5zjENbPUw3L2w7GyZ4nBwp1pMS7WnKcfMRjK3QGdOt9gMi50RZbGnKPbP6swYmrfYhUW-weQwGav6HFd2a7j2hEfBqRKYCMGuSNEUbgjaOQvKKSs700Qy1BzuC1ZYPhDLc7ssb_hXvvPJtRPm3Vw47pYvAq08V7SHTQxHUQhiO5WggZzHvo1WuP39rIisufuRAXMvGdAAjtj"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
                <h3 className="text-white font-headline-sm mb-2">Science Laboratory</h3>
                <p className="text-white/80 font-body-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Advanced biology, chemistry, and physics equipment for practical discovery.
                </p>
              </div>
            </div>

            {/* ICT/Computer Lab */}
            <div className="md:col-span-1 relative group overflow-hidden rounded-[24px] shadow-lg h-[300px]">
              <img 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="ICT Center"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWOF_ZBeoMFUH-WNkCI6TD-4DrDpYsJGNTsaYtlr2r1Gqs6D9VVgpqGGnNNGO6y-nRHJIzgBhAIA2sgnfBmnvMJDY7NvMWs-WNCH61IQdxRrbivIogiasDSaqvHf5-fJUJleGItq_SMeH8lEm4x59zUe-CahNI8j_q0Y7bJGAaWT3kj3XR9OuWjIVnqOQtOaf8OoUD5t5tq0zVKZLRSE9YX4BrWanxoEX-yyG_ql7dr9ysLW7DvPjLXhuBTyr3LrD-lKtx_CBQ"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-white font-headline-sm">ICT Center</h3>
              </div>
            </div>

            {/* Library - spans 2 rows */}
            <div className="md:col-span-1 md:row-span-2 relative group overflow-hidden rounded-[24px] shadow-lg h-[300px] md:h-[624px]">
              <img 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="Heritage Library"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHuAKwN4r3sTcVSFDdP0OWA5zoARfG9rSX7i8SMYWJYF7PiSgZfZw2D2xd8WZ2c5DnELTjCOXlgAJOwVG0Wfjvsmw_7LazI8872zE95NoffiZMOPSnrqSOyEqHiRgg6qEfdf1y4K6l2S66Qpz2SsATjL4KRr5aWc3ukfL-MVKRUXPtXzjW7EpqjOuoOt1bjLEpGLqQp-BHeKHpyuv7ZKFSulpwECX35q8bzHg5RCvrD0UKMegww62JdK-r7rBPKAN96gjhYOqI"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
                <h3 className="text-white font-headline-sm mb-2">Heritage Library</h3>
                <p className="text-white/80 font-body-md">A collection of 20,000+ titles including digital archives.</p>
              </div>
            </div>

            {/* Smart Classrooms */}
            <div className="md:col-span-1 relative group overflow-hidden rounded-[24px] shadow-lg border-l-4 border-pink-400 h-[300px]">
              <img 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="Smart Classrooms"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNGkI8mRFBzeD5YaIDXZoD3-YhgvMyFV6ulVyW_1ZWumxkpUbOxF53QHlGfenxRL4okiI00eJapg0-6m5RVNAT_ZsHWkyTYJ5jogdTKiynBneFA0mmmR1l5tMeEhEw8Ja288mwewz2LQv3nRYP9puvXeMNbRCZwhCmdANJVkgv3Tp1lqaOUU0BVQNu8H6im_ZKpUUxjSB6Dmo0gWNbkdtWeVLzGHdfF4AFbejmRMcceKPapCsQi2ynzqSEx-t1BfeDnTwyiRD-"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-white font-headline-sm">Smart Classrooms</h3>
              </div>
            </div>

            {/* Sports Ground - spans 2 columns */}
            <div className="md:col-span-2 relative group overflow-hidden rounded-[24px] shadow-lg border-l-4 border-emerald-600 h-[300px]">
              <img 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="Sports & Athletics"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuADQiyU1y-rycEgwkAZvWkNLEcewXoJPPXLfdCHf6Z5MSBLVrS2xkIXP9JM9RGsDw4_y4ZJx60VlaZalFHs2qc_5JBqu4jYEdTm1co1fUS3CpxgjuyxIKtMiKK8ZoYd0-IxrJiP6pRaSpzThGsB8ApxX3X2QMBa01yZXczBGZFwIIXItibQk0Vk3DZKfRDTjli7fDmPPk5flm7S41KXnj1FQ2Qi4-YfwfkYMo4N34_y6aebxQxMhhcIsh_uhwhzRJWFNpjTNFQd"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
                <h3 className="text-white font-headline-sm mb-2">Sports & Athletics</h3>
                <p className="text-white/80 font-body-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Olympic-standard facilities for football, basketball, and track events.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Facility Sections */}
      <section className="py-xl bg-white">
        <div className="max-w-container-max mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Transport */}
            <div className="bg-surface-container-low p-8 rounded-[24px] border-l-4 border-primary transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="w-16 h-16 bg-primary-container text-white rounded-2xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-3xl">directions_bus</span>
              </div>
              <h4 className="font-headline-sm text-primary mb-4">Secure Transport</h4>
              <p className="font-body-md text-on-surface-variant mb-6">
                A fleet of air-conditioned buses equipped with GPS tracking and trained security personnel to ensure safe transit for every student.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 font-label-md text-primary">
                  <span className="material-symbols-outlined text-sm">check_circle</span>
                  Real-time GPS Tracking
                </li>
                <li className="flex items-center gap-2 font-label-md text-primary">
                  <span className="material-symbols-outlined text-sm">check_circle</span>
                  Route Optimization
                </li>
              </ul>
            </div>

            {/* Multipurpose Hall */}
            <div className="bg-surface-container-low p-8 rounded-[24px] border-l-4 border-primary transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="w-16 h-16 bg-primary-container text-white rounded-2xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-3xl">theater_comedy</span>
              </div>
              <h4 className="font-headline-sm text-primary mb-4">Grand Auditorium</h4>
              <p className="font-body-md text-on-surface-variant mb-6">
                Our 1,000-seat multipurpose hall hosts international seminars, theater productions, and formal graduation ceremonies.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 font-label-md text-primary">
                  <span className="material-symbols-outlined text-sm">check_circle</span>
                  Acoustic Engineering
                </li>
                <li className="flex items-center gap-2 font-label-md text-primary">
                  <span className="material-symbols-outlined text-sm">check_circle</span>
                  Digital AV Systems
                </li>
              </ul>
            </div>

            {/* Counseling Unit */}
            <div className="bg-surface-container-low p-8 rounded-[24px] border-l-4 border-primary transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="w-16 h-16 bg-primary-container text-white rounded-2xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-3xl">psychology</span>
              </div>
              <h4 className="font-headline-sm text-primary mb-4">Wellness & Counseling</h4>
              <p className="font-body-md text-on-surface-variant mb-6">
                Dedicated emotional and career support provided by resident psychologists in a private, serene environment.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 font-label-md text-primary">
                  <span className="material-symbols-outlined text-sm">check_circle</span>
                  Career Guidance
                </li>
                <li className="flex items-center gap-2 font-label-md text-primary">
                  <span className="material-symbols-outlined text-sm">check_circle</span>
                  Mental Well-being
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Banner */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-primary opacity-95"></div>
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCYCwAYeR27bO-nwAsnBPp7PO9leSs8dY663cgXeAlkF7RX5nfSDBDUmnzq2vQnh_Ghi5DjmeTeICHZvyGV9MdW04fqdiPe7rOcqKaRkW4w05Us89eMMObyzGE3zBy9rF6-JzWXw7u_u8FvcyNULat0wAQ8AHDH1l_ZLYt5n31yqjUfe9VSBpf5kDzYZA33GMffcUi4D3FnNiBOJw6YepI_mQdye74uhb_mtoJM2UcsjKDiq8Vb2CPu75v5Tf2d6-wQ2cqD2SJm')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="max-w-container-max mx-auto px-8 relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-md mb-8">
            <span 
              className="material-symbols-outlined text-white text-4xl" 
              style={{fontVariationSettings: "'FILL' 1"}}
            >
              shield_with_heart
            </span>
          </div>
          <h2 className="font-display-lg text-white mb-6">Safety is Our Blueprint</h2>
          <p className="font-body-lg text-on-primary-container max-w-2xl mx-auto mb-10">
            From 24/7 CCTV surveillance to advanced fire safety systems and biometric access, we ensure a secure sanctuary where students can focus entirely on their growth.
          </p>
          <Link 
            to="/contact"
            className="px-10 py-4 bg-white text-primary font-label-md rounded-full hover:bg-surface-container-low transition-all duration-300"
          >
            Book a Facility Tour
          </Link>
        </div>
      </section>
    </div>
    </>
  );
};

export default Facilities;
