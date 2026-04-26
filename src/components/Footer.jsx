import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import db from '../services/database';

const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setNewsletterStatus({ type: '', message: '' });

    try {
      await db.subscribeNewsletter({ email: newsletterEmail });
      setNewsletterStatus({
        type: 'success',
        message: 'Subscribed successfully!'
      });
      setNewsletterEmail('');
      // Clear message after 3 seconds
      setTimeout(() => setNewsletterStatus({ type: '', message: '' }), 3000);
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setNewsletterStatus({
        type: 'error',
        message: 'Subscription failed. Please try again.'
      });
      setTimeout(() => setNewsletterStatus({ type: '', message: '' }), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-container-max mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pt-16 pb-8">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Blossom High School" className="h-10 w-10 object-contain" />
              <span className="text-xl font-black text-emerald-900 font-headline-md">
                Blossom High School
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Excellence & Integrity in every step of the journey. Ibadan's premier destination for holistic education.
            </p>
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-emerald-700 cursor-pointer hover:text-emerald-600">
                social_leaderboard
              </span>
              <span className="material-symbols-outlined text-emerald-700 cursor-pointer hover:text-emerald-600">
                photo_camera
              </span>
              <span className="material-symbols-outlined text-emerald-700 cursor-pointer hover:text-emerald-600">
                play_circle
              </span>
            </div>
          </div>

          <div>
            <h5 className="text-emerald-900 font-bold mb-6 font-headline-sm">Quick Links</h5>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/about" 
                  className="text-slate-500 hover:text-emerald-600 hover:underline underline-offset-4 transition-all"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/admissions" 
                  className="text-slate-500 hover:text-emerald-600 hover:underline underline-offset-4 transition-all"
                >
                  Admissions
                </Link>
              </li>
              <li>
                <Link 
                  to="/academics" 
                  className="text-slate-500 hover:text-emerald-600 hover:underline underline-offset-4 transition-all"
                >
                  Academics
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-slate-500 hover:text-emerald-600 hover:underline underline-offset-4 transition-all"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-emerald-900 font-bold mb-6 font-headline-sm">Contact Us</h5>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-emerald-700">location_on</span>
                <span>Sode Arola, Ilupeju Quarters, Apete Ibadan, Oyo State</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-emerald-700">call</span>
                <span>+234 (0) 802 7585609</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-emerald-700">mail</span>
                <span>info@bhsibadan.ng</span>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-emerald-900 font-bold mb-6 font-headline-sm">Newsletter</h5>
            <p className="text-slate-500 text-sm mb-4">
              Stay updated with our latest news and event schedules.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2 mb-2">
              <input 
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="bg-white border border-slate-200 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-emerald-700 focus:border-transparent outline-none" 
                placeholder="Email Address" 
                type="email"
                required
                disabled={isSubmitting}
              />
              <button 
                type="submit"
                disabled={isSubmitting}
                className="bg-emerald-900 text-white p-2 rounded-lg hover:bg-emerald-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="material-symbols-outlined">
                  {isSubmitting ? 'progress_activity' : 'send'}
                </span>
              </button>
            </form>
            {newsletterStatus.message && (
              <p className={`text-xs mt-2 ${
                newsletterStatus.type === 'success' ? 'text-green-600' : 'text-red-600'
              }`}>
                {newsletterStatus.message}
              </p>
            )}
          </div>
        </div>

        <div className="border-t border-slate-200 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © 2024 Blossom High School. Excellence & Integrity.
          </p>
          <div className="flex gap-8 text-slate-500 text-sm">
            <a href="#" className="hover:text-emerald-700 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-emerald-700 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
