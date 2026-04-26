import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import db from '../services/database';
import SEO from '../components/SEO';
import seoConfig from '../utils/seoConfig';

const Admissions = () => {
  const [formData, setFormData] = useState({
    student_name: '',
    date_of_birth: '',
    gender: '',
    intended_class: '',
    parent_name: '',
    relationship: '',
    parent_email: '',
    parent_phone: '',
    address: '',
    previous_school: '',
    previous_class: '',
    additional_info: '',
    terms_accepted: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      await db.submitApplication(formData);
      setSubmitStatus({
        type: 'success',
        message: 'Application submitted successfully! Our admissions team will contact you within 48 hours to schedule an entrance examination. For urgent inquiries, email info@bhsibadan.ng'
      });
      // Reset form
      setFormData({
        student_name: '',
        date_of_birth: '',
        gender: '',
        intended_class: '',
        parent_name: '',
        relationship: '',
        parent_email: '',
        parent_phone: '',
        address: '',
        previous_school: '',
        previous_class: '',
        additional_info: '',
        terms_accepted: false
      });
      // Scroll to success message
      window.scrollTo({ top: document.getElementById('application-form').offsetTop - 100, behavior: 'smooth' });
    } catch (error) {
      console.error('Application submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Failed to submit application. Please try again or contact us at info@bhsibadan.ng'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <header className="relative pt-12 pb-24 overflow-hidden bg-gradient-to-br from-primary to-secondary">
        <div className="max-w-container-max mx-auto px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-2 px-6 rounded-full bg-white/20 backdrop-blur-md text-white font-label-md mb-6">
              Join Our Family
            </span>
            <h1 className="font-display-xl mb-6">
              Admissions
            </h1>
            <p className="font-body-lg max-w-2xl mx-auto mb-8 text-white/90">
              Join the Blossom family and begin your journey to excellence. We're accepting applications for the 2026/2027 academic session.
            </p>
            <a 
              href="#application-form"
              className="inline-block px-10 py-4 bg-white text-primary rounded-xl font-label-md hover:scale-[1.02] transition-transform shadow-xl"
            >
              Start Your Application
            </a>
          </motion.div>
        </div>
      </header>

      {/* Admission Process */}
      <section className="py-xl bg-white">
        <div className="max-w-container-max mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-secondary font-label-md uppercase tracking-widest block mb-4">
              How to Apply
            </span>
            <h2 className="font-headline-md text-primary mb-4">Admission Process</h2>
            <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">
              Our streamlined application process ensures every student gets fair consideration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="relative"
            >
              <div className="bg-surface-container p-8 rounded-[24px] text-center h-full hover:-translate-y-2 transition-transform">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                  1
                </div>
                <div className="mt-4 mb-6">
                  <span className="material-symbols-outlined text-primary text-5xl">description</span>
                </div>
                <h3 className="font-headline-sm text-primary mb-3">
                  Submit Application
                </h3>
                <p className="text-on-surface-variant font-body-md text-sm">
                  Complete and submit the online application form with required documents.
                </p>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="relative"
            >
              <div className="bg-surface-container p-8 rounded-[24px] text-center h-full hover:-translate-y-2 transition-transform">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                  2
                </div>
                <div className="mt-4 mb-6">
                  <span className="material-symbols-outlined text-primary text-5xl">edit_square</span>
                </div>
                <h3 className="font-headline-sm text-primary mb-3">
                  Entrance Examination
                </h3>
                <p className="text-on-surface-variant font-body-md text-sm">
                  Attend the scheduled entrance examination at our campus.
                </p>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.30 }}
              className="relative"
            >
              <div className="bg-surface-container p-8 rounded-[24px] text-center h-full hover:-translate-y-2 transition-transform">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                  3
                </div>
                <div className="mt-4 mb-6">
                  <span className="material-symbols-outlined text-primary text-5xl">groups</span>
                </div>
                <h3 className="font-headline-sm text-primary mb-3">
                  Interview & Assessment
                </h3>
                <p className="text-on-surface-variant font-body-md text-sm">
                  Selected candidates will be invited for an interview and assessment.
                </p>
              </div>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45 }}
              className="relative"
            >
              <div className="bg-surface-container p-8 rounded-[24px] text-center h-full hover:-translate-y-2 transition-transform">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                  4
                </div>
                <div className="mt-4 mb-6">
                  <span className="material-symbols-outlined text-primary text-5xl">check_circle</span>
                </div>
                <h3 className="font-headline-sm text-primary mb-3">
                  Admission & Payment
                </h3>
                <p className="text-on-surface-variant font-body-md text-sm">
                  Successful candidates receive admission letters and complete registration.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Requirements & Important Dates */}
      <section className="py-xl bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Requirements */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[24px] shadow-sm border-l-4 border-primary"
            >
              <span className="text-secondary font-label-md uppercase tracking-widest block mb-4">
                What You Need
              </span>
              <h3 className="font-headline-md text-primary mb-8">
                Admission Requirements
              </h3>
              <div className="space-y-4">
                {[
                  'Birth Certificate or Age Declaration',
                  'Previous School Report/Transcript',
                  'Two Recent Passport Photographs',
                  'Medical Fitness Certificate',
                  'Parent/Guardian Identification',
                  'Completed Application Form'
                ].map((requirement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-xl mt-1 flex-shrink-0">check_circle</span>
                    <p className="text-on-surface font-body-md">{requirement}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            
            {/* Important Dates */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[24px] shadow-sm border-l-4 border-tertiary-container"
            >
              <span className="text-secondary font-label-md uppercase tracking-widest block mb-4">
                Mark Your Calendar
              </span>
              <h3 className="font-headline-md text-primary mb-8">
                Important Dates
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary">event_available</span>
                  </div>
                  <div>
                    <p className="font-label-md text-primary mb-1">Application Opens</p>
                    <p className="text-on-surface-variant font-body-md">January 15, 2026</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary">event_busy</span>
                  </div>
                  <div>
                    <p className="font-label-md text-primary mb-1">Application Deadline</p>
                    <p className="text-on-surface-variant font-body-md">March 31, 2026</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary">quiz</span>
                  </div>
                  <div>
                    <p className="font-label-md text-primary mb-1">Entrance Examination</p>
                    <p className="text-on-surface-variant font-body-md">April 15, 2026</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary">announcement</span>
                  </div>
                  <div>
                    <p className="font-label-md text-primary mb-1">Results Announcement</p>
                    <p className="text-on-surface-variant font-body-md">May 10, 2026</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary">school</span>
                  </div>
                  <div>
                    <p className="font-label-md text-primary mb-1">Resumption Date</p>
                    <p className="text-on-surface-variant font-body-md">September 8, 2026</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* School Fees */}
      <section className="py-xl bg-white">
        <div className="max-w-container-max mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-secondary font-label-md uppercase tracking-widest block mb-4">
              Tuition
            </span>
            <h2 className="font-headline-md text-primary mb-4">School Fees Structure</h2>
            <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">
              Transparent, competitive pricing for world-class education.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* JSS Fees */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary to-secondary text-white p-10 rounded-[24px] shadow-xl hover:-translate-y-2 transition-transform"
            >
              <div className="mb-6">
                <span className="material-symbols-outlined text-5xl opacity-80">school</span>
              </div>
              <h3 className="font-headline-md mb-8">Junior Secondary<br />(JSS 1-3)</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-white/20 pb-3">
                  <span className="font-body-md">Tuition Fee</span>
                  <span className="font-headline-sm">₦250,000</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/20 pb-3">
                  <span className="font-body-md">Development Levy</span>
                  <span className="font-headline-sm">₦50,000</span>
                </div>
                <div className="flex justify-between items-center pt-3">
                  <span className="font-label-md">Total Per Term</span>
                  <span className="font-headline-md">₦300,000</span>
                </div>
              </div>
            </motion.div>

            {/* SSS Fees */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-secondary to-primary text-white p-10 rounded-[24px] shadow-xl hover:-translate-y-2 transition-transform"
            >
              <div className="mb-6">
                <span className="material-symbols-outlined text-5xl opacity-80">workspace_premium</span>
              </div>
              <h3 className="font-headline-md mb-8">Senior Secondary<br />(SSS 1-3)</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-white/20 pb-3">
                  <span className="font-body-md">Tuition Fee</span>
                  <span className="font-headline-sm">₦300,000</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/20 pb-3">
                  <span className="font-body-md">Development Levy</span>
                  <span className="font-headline-sm">₦50,000</span>
                </div>
                <div className="flex justify-between items-center pt-3">
                  <span className="font-label-md">Total Per Term</span>
                  <span className="font-headline-md">₦350,000</span>
                </div>
              </div>
            </motion.div>
          </div>

          <p className="text-center text-on-surface-variant font-body-md mt-8 max-w-2xl mx-auto">
            *Fees are subject to review. Additional costs may include uniforms, textbooks, and extracurricular activities.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section id="application-form" className="py-xl bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-8">
          {/* Application Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 lg:p-16 rounded-[2rem] shadow-2xl max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <span className="material-symbols-outlined text-6xl text-primary mb-6">edit_document</span>
              <h2 className="font-display-lg text-primary mb-4">
                Online Application Form
              </h2>
              <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">
                Fill out the form below to start your admission process. Our team will review your application and contact you within 48 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {submitStatus.message && (
                <div className={`p-6 rounded-xl ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-50 border-2 border-green-200' 
                    : 'bg-red-50 border-2 border-red-200'
                }`}>
                  <div className="flex items-start gap-3">
                    <span className={`material-symbols-outlined text-2xl ${
                      submitStatus.type === 'success' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {submitStatus.type === 'success' ? 'check_circle' : 'error'}
                    </span>
                    <div>
                      <p className={`font-headline-sm mb-2 ${
                        submitStatus.type === 'success' ? 'text-green-800' : 'text-red-800'
                      }`}>
                        {submitStatus.type === 'success' ? 'Success!' : 'Error'}
                      </p>
                      <p className={`font-body-md ${
                        submitStatus.type === 'success' ? 'text-green-700' : 'text-red-700'
                      }`}>
                        {submitStatus.message}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Student Information */}
              <div>
                <h3 className="font-headline-sm text-primary mb-6 pb-3 border-b-2 border-surface-container">
                  Student Information
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-label-md text-on-surface-variant ml-1">
                      Student's Full Name *
                    </label>
                    <input 
                      name="student_name"
                      value={formData.student_name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" 
                      placeholder="John Doe" 
                      type="text"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-label-md text-on-surface-variant ml-1">
                      Date of Birth *
                    </label>
                    <input 
                      name="date_of_birth"
                      value={formData.date_of_birth}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" 
                      type="date"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-label-md text-on-surface-variant ml-1">
                      Gender *
                    </label>
                    <select 
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white" 
                      required
                    >
                      <option value="">Select Gender</option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="font-label-md text-on-surface-variant ml-1">
                      Applying for Class *
                    </label>
                    <select 
                      name="intended_class"
                      value={formData.intended_class}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white" 
                      required
                    >
                      <option value="">Select Class</option>
                      <option>JSS 1</option>
                      <option>JSS 2</option>
                      <option>JSS 3</option>
                      <option>SSS 1</option>
                      <option>SSS 2</option>
                      <option>SSS 3</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Parent/Guardian Information */}
              <div>
                <h3 className="font-headline-sm text-primary mb-6 pb-3 border-b-2 border-surface-container">
                  Parent/Guardian Information
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-label-md text-on-surface-variant ml-1">
                      Parent/Guardian Name *
                    </label>
                    <input 
                      name="parent_name"
                      value={formData.parent_name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" 
                      placeholder="Jane Doe" 
                      type="text"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-label-md text-on-surface-variant ml-1">
                      Relationship to Student *
                    </label>
                    <select 
                      name="relationship"
                      value={formData.relationship}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white" 
                      required
                    >
                      <option value="">Select Relationship</option>
                      <option>Father</option>
                      <option>Mother</option>
                      <option>Guardian</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="font-label-md text-on-surface-variant ml-1">
                      Email Address *
                    </label>
                    <input 
                      name="parent_email"
                      value={formData.parent_email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" 
                      placeholder="parent@example.com" 
                      type="email"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-label-md text-on-surface-variant ml-1">
                      Phone Number *
                    </label>
                    <input 
                      name="parent_phone"
                      value={formData.parent_phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" 
                      placeholder="+234..." 
                      type="tel"
                      required
                    />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="font-label-md text-on-surface-variant ml-1">
                      Home Address *
                    </label>
                    <textarea 
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" 
                      placeholder="Enter full address" 
                      rows="2"
                      required
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Previous School Information */}
              <div>
                <h3 className="font-headline-sm text-primary mb-6 pb-3 border-b-2 border-surface-container">
                  Previous School Information
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-label-md text-on-surface-variant ml-1">
                      Previous School Name *
                    </label>
                    <input 
                      name="previous_school"
                      value={formData.previous_school}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" 
                      placeholder="Enter school name" 
                      type="text"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-label-md text-on-surface-variant ml-1">
                      Last Class Completed
                    </label>
                    <input 
                      name="previous_class"
                      value={formData.previous_class}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" 
                      placeholder="e.g., Primary 6" 
                      type="text"
                    />
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="space-y-2">
                <label className="font-label-md text-on-surface-variant ml-1">
                  Additional Information / Special Needs
                </label>
                <textarea 
                  name="additional_info"
                  value={formData.additional_info}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" 
                  placeholder="Please share any additional information that would help us serve your child better..." 
                  rows="4"
                ></textarea>
              </div>

              {/* Terms and Submit */}
              <div className="pt-6">
                <label className="flex items-start gap-3 mb-6 cursor-pointer">
                  <input 
                    name="terms_accepted"
                    checked={formData.terms_accepted}
                    onChange={handleChange}
                    type="checkbox" 
                    className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary focus:ring-2 mt-1"
                    required
                  />
                  <span className="text-on-surface-variant font-body-md text-sm">
                    I confirm that all information provided is accurate and I agree to Blossom High School's admission terms and conditions.
                  </span>
                </label>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white py-5 rounded-xl font-headline-sm hover:scale-[1.01] active:scale-[0.99] shadow-2xl shadow-primary/30 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed" 
                >
                  {isSubmitting ? (
                    <>
                      <span className="material-symbols-outlined animate-spin">progress_activity</span>
                      <span>Submitting Application...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Application</span>
                      <span className="material-symbols-outlined">send</span>
                    </>
                  )}
                </button>
                <p className="text-center text-on-surface-variant font-body-md text-sm mt-4">
                  After submission, our admissions team will contact you to schedule an entrance examination.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Admissions;
