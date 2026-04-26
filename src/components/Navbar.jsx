import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'News', path: '/news' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-black/5 shadow-[0_10px_40px_rgba(11,93,42,0.05)]">
      <nav className="max-w-container-max mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2 md:gap-3 flex-shrink-0">
          <img src={logo} alt="Blossom High School" className="h-10 w-10 md:h-12 md:w-12 object-contain" />
          <span className="text-lg md:text-2xl font-bold text-emerald-900 tracking-tight font-headline-md">
            <span className="block md:hidden">Blossom</span>
            <span className="hidden md:block">Blossom High School</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-label-md transition-colors duration-300 ${
                isActive(link.path)
                  ? 'text-emerald-700 font-semibold border-b-2 border-emerald-700 pb-1'
                  : 'text-slate-600 font-medium hover:text-emerald-600'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center gap-2 md:gap-4">
          <Link
            to="/admissions"
            className="px-3 py-2 md:px-6 md:py-2.5 bg-tertiary-container text-white text-sm md:text-base font-label-md rounded-lg hover:scale-[1.02] active:scale-95 transition-transform duration-200"
          >
            <span className="hidden sm:inline">Apply Now</span>
            <span className="sm:hidden">Apply</span>
          </Link>
          <Link
            to="/contact"
            className="hidden lg:block px-6 py-2.5 border-2 border-primary text-primary font-label-md rounded-lg hover:bg-primary/5 transition-all"
          >
            Contact
          </Link>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-primary"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-8 py-4">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-label-md ${
                  isActive(link.path)
                    ? 'text-emerald-700 font-semibold'
                    : 'text-slate-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
