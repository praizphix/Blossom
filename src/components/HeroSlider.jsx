import React, { useState, useEffect } from 'react';
import hero1 from '../assets/images/hero-1.jpg';
import hero2 from '../assets/images/hero-2.jpg';
import hero3 from '../assets/images/hero-3.jpg';
import hero4 from '../assets/images/hero-4.jpg';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Hero slides data
  const slides = [
    {
      id: 1,
      image: hero1,
      alt: 'Confident African high school students in green and white uniforms walking through school corridor',
    },
    {
      id: 2,
      image: hero2,
      alt: 'Blossom High School students engaged in learning activities',
    },
    {
      id: 3,
      image: hero3,
      alt: 'Students demonstrating academic excellence at Blossom High School',
    },
    {
      id: 4,
      image: hero4,
      alt: 'Happy students enjoying their educational journey at Blossom High School',
    },
  ];

  // Auto-play with 10 second interval
  useEffect(() => {
    if (isPaused || slides.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div 
      className="relative w-full h-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img 
            className="w-full h-full object-cover" 
            alt={slide.alt}
            src={slide.image}
          />
        </div>
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent z-20"></div>

      {/* Previous Button */}
      {slides.length > 1 && (
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 group"
          aria-label="Previous slide"
        >
          <span className="material-symbols-outlined text-3xl group-hover:scale-110 transition-transform">
            chevron_left
          </span>
        </button>
      )}

      {/* Next Button */}
      {slides.length > 1 && (
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 group"
          aria-label="Next slide"
        >
          <span className="material-symbols-outlined text-3xl group-hover:scale-110 transition-transform">
            chevron_right
          </span>
        </button>
      )}

      {/* Navigation Dots */}
      {slides.length > 1 && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-30">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white w-8' 
                  : 'bg-white/40 hover:bg-white/60 w-2'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HeroSlider;
