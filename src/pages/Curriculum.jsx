import React from 'react';
import { Link } from 'react-router-dom';

const Curriculum = () => {
  return (
    <main className="pt-12 pb-24">
      {/* Breadcrumb */}
      <section className="max-w-container-max mx-auto px-8 mb-8">
        <div className="flex items-center gap-2 text-sm text-on-surface-variant">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="material-symbols-outlined text-sm">chevron_right</span>
          <Link to="/academics" className="hover:text-primary transition-colors">Academics</Link>
          <span className="material-symbols-outlined text-sm">chevron_right</span>
          <span className="text-on-surface">Curriculum</span>
        </div>
      </section>

      {/* Hero */}
      <section className="max-w-container-max mx-auto px-8 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block bg-secondary-container text-on-secondary-container text-label-md px-4 py-2 rounded-full mb-6">
            OUR CURRICULUM
          </span>
          <h1 className="font-display-xl text-primary mb-6">
            Complete Curriculum Overview
          </h1>
          <p className="font-body-lg text-on-surface-variant">
            Our comprehensive curriculum is designed to provide students with a strong foundation in core subjects while fostering critical thinking, creativity, and personal growth.
          </p>
        </div>
      </section>

      {/* Junior Secondary Curriculum */}
      <section className="max-w-container-max mx-auto px-8 mb-16">
        <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-secondary-container rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined text-on-secondary-container text-3xl">child_care</span>
            </div>
            <div>
              <h2 className="font-display-lg text-primary">Junior Secondary School (JSS 1-3)</h2>
              <p className="text-on-surface-variant">Ages 11-14 • Basic Education Level</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Core Subjects */}
            <div>
              <h3 className="font-headline-sm text-primary mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined">menu_book</span>
                Core Subjects
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary mt-1">check_circle</span>
                  <div>
                    <p className="font-label-md text-primary">Mathematics</p>
                    <p className="text-sm text-on-surface-variant">Arithmetic, Algebra, Geometry, Statistics</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary mt-1">check_circle</span>
                  <div>
                    <p className="font-label-md text-primary">English Language</p>
                    <p className="text-sm text-on-surface-variant">Grammar, Composition, Literature, Comprehension</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary mt-1">check_circle</span>
                  <div>
                    <p className="font-label-md text-primary">Integrated Science</p>
                    <p className="text-sm text-on-surface-variant">Physics, Chemistry, Biology fundamentals</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary mt-1">check_circle</span>
                  <div>
                    <p className="font-label-md text-primary">Social Studies</p>
                    <p className="text-sm text-on-surface-variant">Civics, Nigerian History, Geography</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Additional Subjects */}
            <div>
              <h3 className="font-headline-sm text-primary mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined">school</span>
                Additional Subjects
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary mt-1">check_circle</span>
                  <div>
                    <p className="font-label-md text-primary">Computer Studies / ICT</p>
                    <p className="text-sm text-on-surface-variant">Basic programming, MS Office, Digital literacy</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary mt-1">check_circle</span>
                  <div>
                    <p className="font-label-md text-primary">Creative & Cultural Arts</p>
                    <p className="text-sm text-on-surface-variant">Music, Drama, Visual Arts</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary mt-1">check_circle</span>
                  <div>
                    <p className="font-label-md text-primary">Physical & Health Education</p>
                    <p className="text-sm text-on-surface-variant">Sports, Wellness, Personal hygiene</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary mt-1">check_circle</span>
                  <div>
                    <p className="font-label-md text-primary">Religious Studies</p>
                    <p className="text-sm text-on-surface-variant">Moral education and values</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary mt-1">check_circle</span>
                  <div>
                    <p className="font-label-md text-primary">French Language</p>
                    <p className="text-sm text-on-surface-variant">Conversational French basics</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-surface-container rounded-2xl">
            <h4 className="font-headline-sm text-primary mb-3">Learning Outcomes</h4>
            <p className="text-on-surface-variant">
              By the end of JSS 3, students will have built strong foundational knowledge across all subjects, developed critical thinking skills, and be prepared for the Basic Education Certificate Examination (BECE).
            </p>
          </div>
        </div>
      </section>

      {/* Senior Secondary Curriculum */}
      <section className="max-w-container-max mx-auto px-8 mb-16">
        <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-primary-container rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-3xl">school</span>
            </div>
            <div>
              <h2 className="font-display-lg text-primary">Senior Secondary School (SSS 1-3)</h2>
              <p className="text-on-surface-variant">Ages 15-17 • Pre-University Level</p>
            </div>
          </div>

          <div className="mb-8">
            <p className="font-body-lg text-on-surface-variant">
              Students choose specialized pathways based on their career aspirations:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Science Track */}
            <div className="p-6 bg-surface-container rounded-2xl">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-white">science</span>
              </div>
              <h3 className="font-headline-sm text-primary mb-4">Science Track</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-xs text-secondary">circle</span>
                  <span>Mathematics</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-xs text-secondary">circle</span>
                  <span>Physics</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-xs text-secondary">circle</span>
                  <span>Chemistry</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-xs text-secondary">circle</span>
                  <span>Biology</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-xs text-secondary">circle</span>
                  <span>Further Mathematics (Optional)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-xs text-secondary">circle</span>
                  <span>Technical Drawing (Optional)</span>
                </li>
              </ul>
            </div>

            {/* Arts Track */}
            <div className="p-6 bg-surface-container rounded-2xl">
              <div className="w-12 h-12 bg-tertiary rounded-lg flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-white">palette</span>
              </div>
              <h3 className="font-headline-sm text-primary mb-4">Arts Track</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-xs text-secondary">circle</span>
                  <span>Literature in English</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-xs text-secondary">circle</span>
                  <span>Government</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-xs text-secondary">circle</span>
                  <span>Economics</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-xs text-secondary">circle</span>
                  <span>Geography</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-xs text-secondary">circle</span>
                  <span>CRS/IRS</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-xs text-secondary">circle</span>
                  <span>French (Optional)</span>
                </li>
              </ul>
            </div>

            {/* Commercial Track */}
            <div className="p-6 bg-surface-container rounded-2xl">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-white">business_center</span>
              </div>
              <h3 className="font-headline-sm text-primary mb-4">Commercial Track</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-xs text-secondary">circle</span>
                  <span>Accounting</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-xs text-secondary">circle</span>
                  <span>Commerce</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-xs text-secondary">circle</span>
                  <span>Economics</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-xs text-secondary">circle</span>
                  <span>Business Studies</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-xs text-secondary">circle</span>
                  <span>Mathematics</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-xs text-secondary">circle</span>
                  <span>Government (Optional)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-surface-container rounded-2xl">
            <h4 className="font-headline-sm text-primary mb-3">All Students Also Study:</h4>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-white rounded-lg text-sm font-medium">English Language</span>
              <span className="px-4 py-2 bg-white rounded-lg text-sm font-medium">Mathematics (General)</span>
              <span className="px-4 py-2 bg-white rounded-lg text-sm font-medium">Civic Education</span>
              <span className="px-4 py-2 bg-white rounded-lg text-sm font-medium">Computer Studies</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-container-max mx-auto px-8">
        <div className="bg-gradient-to-r from-primary to-secondary text-white p-12 rounded-[2rem] text-center">
          <h2 className="font-display-lg mb-4">Have Questions About Our Curriculum?</h2>
          <p className="font-body-lg mb-8 max-w-2xl mx-auto opacity-90">
            Our academic counselors are ready to guide you through the best subject combinations for your career goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact"
              className="px-8 py-4 bg-white text-primary rounded-xl font-label-md hover:scale-[1.02] transition-transform"
            >
              Contact Admissions
            </Link>
            <Link 
              to="/admissions"
              className="px-8 py-4 border-2 border-white text-white rounded-xl font-label-md hover:bg-white/10 transition-all"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Curriculum;
