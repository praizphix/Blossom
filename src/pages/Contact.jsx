import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import db from '../services/database';
import SEO from '../components/SEO';
import seoConfig from '../utils/seoConfig';

const Contact = () => {
  const [formData, setFormData] = useState({
    parent_name: '',
    email: '',
    phone: '',
    intended_class: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      await db.submitContact(formData);
      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your inquiry! We will get back to you within 24 hours.'
      });
      // Reset form
      setFormData({
        parent_name: '',
        email: '',
        phone: '',
        intended_class: '',
        message: ''
      });
    } catch (error) {
      console.error('Contact submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Failed to submit your inquiry. Please try again or contact us directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO {...seoConfig.contact} />
    <main className="pt-12 pb-xl">
      {/* Hero Section / Title */}
      <div className="max-w-container-max mx-auto px-8 mb-xl text-center">
        <span className="text-secondary font-label-md uppercase tracking-widest mb-4 block">
          Get In Touch
        </span>
        <h1 className="font-display-xl text-primary mb-6">We'd Love to Hear From You</h1>
        <p className="max-w-2xl mx-auto text-on-surface-variant font-body-lg">
          Whether you have questions about admissions, our curriculum, or want to schedule a campus tour, our dedicated team is here to help.
        </p>
      </div>

      <section className="max-w-container-max mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Side: Contact Information */}
        <div className="lg:col-span-5 flex flex-col space-y-8">
          <div className="bg-white p-8 rounded-[24px] shadow-sm border-l-4 border-primary">
            <h3 className="font-headline-sm text-primary mb-8">Contact Information</h3>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-surface-container flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary">location_on</span>
                </div>
                <div>
                  <p className="font-label-md text-primary uppercase mb-1">Our Campus</p>
                  <p className="text-on-surface-variant font-body-md">
                    Sode Arola, Ilupeju Quarters,<br/>
                    Apete Ibadan, Oyo State, Nigeria
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-surface-container flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary">call</span>
                </div>
                <div>
                  <p className="font-label-md text-primary uppercase mb-1">Phone Enquiries</p>
                  <p className="text-on-surface-variant font-body-md">
                    +234 (0) 802 7585609
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-surface-container flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary">mail</span>
                </div>
                <div>
                  <p className="font-label-md text-primary uppercase mb-1">Email Support</p>
                  <p className="text-on-surface-variant font-body-md">
                    info@bhsibadan.ng
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-primary text-white p-8 rounded-[24px] shadow-lg">
            <h4 className="font-headline-sm mb-6">Join Our Community</h4>
            <p className="font-body-md mb-8 opacity-90">
              Stay updated with the latest news, events, and student achievements at Blossom High School.
            </p>
            <div className="flex gap-4">
              <a 
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300" 
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined">social_leaderboard</span>
              </a>
              <a 
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300" 
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined">photo_camera</span>
              </a>
              <a 
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300" 
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined">play_circle</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Premium Inquiry Form */}
        <div className="lg:col-span-7">
          <div className="bg-white p-10 rounded-[24px] shadow-xl hover:-translate-y-1 transition-all duration-300 border-l-4 border-tertiary-container">
            <div className="mb-8">
              <h3 className="font-headline-md text-primary mb-2">Send an Inquiry</h3>
              <p className="text-on-surface-variant font-body-md">
                Fill out the form below and an admissions officer will reach out to you within 24 hours.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {submitStatus.message && (
                <div className={`md:col-span-2 p-4 rounded-xl ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-50 border border-green-200 text-green-800' 
                    : 'bg-red-50 border border-red-200 text-red-800'
                }`}>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined">
                      {submitStatus.type === 'success' ? 'check_circle' : 'error'}
                    </span>
                    <p className="font-label-md">{submitStatus.message}</p>
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <label className="font-label-md text-on-surface-variant ml-1">
                  Parent/Guardian Name *
                </label>
                <input 
                  name="parent_name"
                  value={formData.parent_name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" 
                  placeholder="John Doe" 
                  type="text"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="font-label-md text-on-surface-variant ml-1">
                  Email Address *
                </label>
                <input 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" 
                  placeholder="john@example.com" 
                  type="email"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="font-label-md text-on-surface-variant ml-1">
                  Phone Number *
                </label>
                <input 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" 
                  placeholder="+234..." 
                  type="tel"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="font-label-md text-on-surface-variant ml-1">
                  Student's Intended Class
                </label>
                <select 
                  name="intended_class"
                  value={formData.intended_class}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-white"
                >
                  <option value="">Select Grade</option>
                  <option>JSS 1</option>
                  <option>JSS 2</option>
                  <option>JSS 3</option>
                  <option>SSS 1</option>
                  <option>SSS 2</option>
                  <option>SSS 3</option>
                </select>
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="font-label-md text-on-surface-variant ml-1">
                  Your Message *
                </label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" 
                  placeholder="Tell us how we can help you..." 
                  rows="4"
                  required
                ></textarea>
              </div>

              <div className="md:col-span-2 pt-4">
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white py-4 rounded-xl font-label-md hover:bg-secondary hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-primary/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2" 
                >
                  {isSubmitting ? (
                    <>
                      <span className="material-symbols-outlined animate-spin">progress_activity</span>
                      Submitting...
                    </>
                  ) : (
                    'Submit Inquiry'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="mt-xl max-w-container-max mx-auto px-8">
        <div className="relative w-full h-[500px] rounded-[32px] overflow-hidden shadow-2xl border border-white/20">
          <div className="absolute inset-0 bg-surface-container-high animate-pulse flex items-center justify-center">
            <img 
              alt="Satellite view of school campus" 
              className="w-full h-full object-cover grayscale-[0.2] opacity-90" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAADgfJE3QxF6p2VEXjUzXofhX2oHosGm4M4aqpX9uE_KM9N3h-Tfy4D9c0CquJuk9Q4-Ok-ye4DZyNplY-HMSH126crBE0FQCVdoUSxXwMdsO6Jo1MNbCBY0o9Mm79wOOCrZsl4zhlNR3ZvY5OAMOVky6pRJ8z_70O1bfAUYWun8YCJT0B_A_XwxmDRgac_P04O6XCsZ9L9McXIxUc1njTKMaOuZhuajarT3yFlZRVlmt8xyy7qzA-e-JXPb1ow4eODOihAwox"
            />
          </div>

          {/* Interactive Marker Overlay */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 animate-ping rounded-full"></div>
              <div className="relative bg-primary text-white p-4 rounded-2xl shadow-xl flex items-center gap-3">
                <span className="material-symbols-outlined">school</span>
                <div className="text-left">
                  <p className="font-label-md leading-none">Blossom High School</p>
                  <p className="text-[10px] opacity-80 mt-1">Apete Ibadan</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Legend/Details */}
          <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/50 max-w-sm">
            <h5 className="font-headline-sm text-primary mb-2">Visit Our Campus</h5>
            <p className="text-on-surface-variant font-body-md text-sm">
              Our campus is conveniently located at Sode Arola, Ilupeju Quarters, Apete Ibadan. Tours are available every Tuesday and Thursday by appointment.
            </p>
            <button className="mt-4 flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
              Get Directions 
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>
    </main>
    </>
  );
};

export default Contact;
