import React from 'react';
import { Link } from 'react-router-dom';
import studentsTeamwork from '../assets/images/students-teamwork.png';

const Academics = () => {
  return (
    <div>
      {/* Hero Section */}
      <header className="relative pt-12 pb-24 overflow-hidden">
        <div className="max-w-container-max mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="z-10">
              <span className="inline-block py-1 px-4 rounded-full bg-secondary-container text-on-secondary-container font-label-md mb-6">
                Excellence & Integrity
              </span>
              <h1 className="font-display-xl text-primary mb-6 leading-tight">
                Academic Excellence Without Limits
              </h1>
              <p className="font-body-lg text-on-surface-variant mb-8 max-w-lg">
                We nurture intellectual curiosity and empower students to become global leaders through a rigorous, inclusive, and future-ready curriculum.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/curriculum"
                  className="px-8 py-4 bg-primary text-white rounded-xl font-label-md hover:scale-[1.02] transition-transform shadow-lg shadow-primary/20"
                >
                  View Full Curriculum
                </Link>
                <Link 
                  to="/contact"
                  className="px-8 py-4 border-2 border-primary text-primary rounded-xl font-label-md hover:bg-primary/5 transition-all"
                >
                  Request Brochure
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-[2rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                  alt="Students in classroom" 
                  className="w-full aspect-[4/5] object-cover" 
                  src={studentsTeamwork}
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-[200px]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-tertiary">star</span>
                  <span className="font-headline-sm text-primary">100%</span>
                </div>
                <p className="text-xs text-on-surface-variant font-medium">
                  WAEC Pass Rate for three consecutive years
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Secondary Levels Bento Grid */}
      <section className="py-xl bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="font-headline-md text-primary mb-4">Core Educational Framework</h2>
            <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">
              Our secondary education is split into two distinct tiers, each designed to meet the developmental needs of our students.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Junior Secondary */}
            <div className="bg-white p-12 rounded-[24px] shadow-sm hover:-translate-y-2 transition-transform border-l-4 border-[#ffacb9]">
              <div className="w-12 h-12 bg-secondary-container rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-on-secondary-container">child_care</span>
              </div>
              <h3 className="font-headline-sm text-primary mb-4">Junior Secondary (JSS 1-3)</h3>
              <p className="font-body-md text-on-surface-variant mb-6">
                Focusing on fundamental knowledge acquisition across 12 core subjects, preparing students for the Basic Education Certificate Examination (BECE).
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                  Mathematical Foundations
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                  Integrated Science & Tech
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                  Creative & Cultural Arts
                </li>
              </ul>
              <Link to="/curriculum" className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                View Full Curriculum 
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>

            {/* Senior Secondary */}
            <div className="bg-white p-12 rounded-[24px] shadow-sm hover:-translate-y-2 transition-transform border-l-4 border-primary">
              <div className="w-12 h-12 bg-primary-container rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-on-primary-container">school</span>
              </div>
              <h3 className="font-headline-sm text-primary mb-4">Senior Secondary (SSS 1-3)</h3>
              <p className="font-body-md text-on-surface-variant mb-6">
                Specialized pathways in Science, Arts, and Commerce. We emphasize critical thinking and deep subject mastery for university readiness.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                  STEM Excellence Tracks
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                  Humanities & Linguistics
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                  Business & Accountancy
                </li>
              </ul>
              <Link to="/curriculum" className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                View Career Tracks 
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Examination Prep */}
      <section className="py-xl bg-white relative">
        <div className="max-w-container-max mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
              <img 
                alt="Student studying" 
                className="rounded-2xl shadow-lg mt-8" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJkrF3-EHIqzsgbJ4Z2DMLeJDDdLuQDjMDIv3TU66Yx6bkLoFWQyoDsQ3SvWipfclJI5cgGrSLMLXr2b2aM2i9di8NxckjgemAALrL4w9nnsPNmd0aENgV2ZxavX1hvHekwSsSXZKPTHZ87VLTmwrkwulwxuwjtrpG0T0d0bpok5UJVPxvtL0tjlRMaUIWt0GifLprpXh8ro_CIgOsBNkR9TESUzSA52tzcB0tt5lOapCPk7D7Bxft-saAEU2ZuDeU8GZOmZPk"
              />
              <img 
                alt="Group discussion" 
                className="rounded-2xl shadow-lg" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfPIEwrHb0f9E3-PG00P6d1VUjXffgjbTmiT_m2xAcVHapCEhlr1I-fYtgcwwq8ZA3sytuW2sa20jvT9zfm_Dcv18iR7WGknByngvjW3Y9dE2by6IxdfR5BD1nmJV_ALtK1T4n3Wlfvoe6a32tmK7u4WRY1GruoafVgzN-0eu3wpBowbjI7swLNpcc1nm1rPVEfuGrPYEsLo87TEulZkOWYgyDHHXwS4a_yLU_D9x0ZHpDMPmpkJ7BPeWW7Yacu4fl1uklPuz8"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-display-lg text-primary mb-6">Strategic Examination Preparation</h2>
              <p className="font-body-lg text-on-surface-variant mb-8">
                Success in national and international examinations is non-negotiable. Our dedicated prep center focuses on test-taking strategies and intensive review sessions.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-surface-container rounded-lg">
                    <span className="material-symbols-outlined text-primary">assignment_turned_in</span>
                  </div>
                  <div>
                    <h4 className="font-label-md text-primary mb-1">WAEC & NECO Intensive</h4>
                    <p className="text-sm text-on-surface-variant">
                      Practical-heavy preparation for senior secondary certificates with mock examinations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-surface-container rounded-lg">
                    <span className="material-symbols-outlined text-primary">rocket_launch</span>
                  </div>
                  <div>
                    <h4 className="font-label-md text-primary mb-1">JAMB CBT Training</h4>
                    <p className="text-sm text-on-surface-variant">
                      Dedicated computer-based testing lab for UTME practice and speed optimization.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ICT & Tech */}
      <section className="py-xl bg-primary text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-secondary/20 via-transparent to-transparent"></div>
        <div className="max-w-container-max mx-auto px-8 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="font-display-lg mb-4">ICT-Driven Education</h2>
              <p className="font-body-lg text-on-primary-container">
                Preparing students for the digital economy through immersive technology integration across all subjects.
              </p>
            </div>
            <Link 
              to="/facilities"
              className="px-8 py-4 bg-white text-primary rounded-xl font-label-md hover:scale-[1.02] transition-transform"
            >
              View Our Facilities
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/10">
              <span className="material-symbols-outlined text-4xl mb-6">code</span>
              <h3 className="font-headline-sm mb-4">Coding & Robotics</h3>
              <p className="text-sm text-white/80">
                From Python basics to building autonomous robots in our state-of-the-art lab.
              </p>
            </div>
            <div className="p-8 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/10">
              <span className="material-symbols-outlined text-4xl mb-6">devices</span>
              <h3 className="font-headline-sm mb-4">1:1 Device Policy</h3>
              <p className="text-sm text-white/80">
                Every student has access to personalized learning tools and digital textbooks.
              </p>
            </div>
            <div className="p-8 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/10">
              <span className="material-symbols-outlined text-4xl mb-6">hub</span>
              <h3 className="font-headline-sm mb-4">Virtual Learning Hub</h3>
              <p className="text-sm text-white/80">
                A seamless integration of Google Classroom and proprietary educational resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Extracurriculars */}
      <section className="py-xl bg-surface">
        <div className="max-w-container-max mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="font-headline-md text-primary mb-4">Beyond the Classroom</h2>
            <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">
              Holistic development through a diverse range of extracurricular activities that foster leadership and teamwork.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-3xl">
              <img 
                alt="Sports" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6p-aGkkJ8TJeC1EG0h4EBUnPK_Z-Mrk3hu6LOb3fmF_jSdHYr0G9vMTf3xgllNUuJK6-27lGJZeKcFa9L8vdCiknW6Qryv4xUdUZPwYsKm2q7tctFSjUaVUJvh3mxXJjCxQm7W19TDuu8spKscP7_ExLMpJhorJqw6nbByCkexiX4WJ1vK0DwVLEENRDwmhwjIBXkgNX7B76UpSqo0i_fwZkDvDBontYzfG4F4kb8GWHL9QPr_lLSbXQkUv_A0tbMZX6A92h4"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                <h4 className="text-white font-headline-sm">Sports & Athletics</h4>
                <p className="text-white/70 text-sm">Building discipline through competitive team sports.</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-3xl h-64">
              <img 
                alt="Music" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuKMVKpXWX_RLFeM48NBegWtuxHopsrp19kqjBdExANQ8UFxKGsHKHjvmYBKd6u9AITSWrFtW1l7l6iZ7V_GCWXXvCmp7Tqr2ZxWWsF2vNCpLDqC2ke7Nh_iuKR6Ag62dZDPbw30P0MAcu1sL3p4daypK-Wn7GLgJTVN3ruC6pPMlKFSpwpirNAE22h7FUiAYuZaWWjoCpnk4kjv7i3hFs7_eOQwk5dJjK1qtBQttzlvRkRKMpz3A8zjsF2PNEyYXvoNIaWPJ4"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <h4 className="text-white font-label-md">Music & Arts</h4>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-3xl h-64">
              <img 
                alt="Debate" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuATu7mLjwGaoFxQgA4qG-vCMe2NRec-kkOawAzlPz7K9ZCSBkRIX-nx_RJEF7dL6btNJUz8AINaR_e6B7QA1YCBWHnTd9BFq1Y9mKPC-NW9zWIRuzWB0BaQXjDNKwd3Z7lfwyCP4kCMdYUz72EZj84GTzDJdYPmmdikCthenL_Q7tDFR5Shf7F-EXd3k14ykaj8Tv_1pNK_p1HCaxdMAdBaXcRTihIJOP2NCKE9pfEur_pdAWQquTcfSGk2Q_N9rj2eW3MY996I"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <h4 className="text-white font-label-md">Debate & Public Speaking</h4>
              </div>
            </div>
            <div className="md:col-span-2 relative group overflow-hidden rounded-3xl h-64">
              <img 
                alt="Leadership" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUYYMQF-2qLjFN2InPt0FKMC1wRu3paAnGnMm-SKcDtY3lYD9ldOC44_MHKgEz8bqwaTu4y9e5Y9jdHcjrVFaGOmRDnVgejsd5k2BEUP8gnjaHhXvyEq5oa_uuS08Jh61zb_46rJTuXeLq58bQfDOjMyDVHa3kthGyRqi7h1DvqpyX9fgPaiILcgEVs2vl3cHBbLFIfMIMtlWYxX4whj-iFY_i7Pvt9S7EcdPsNq86mA0KrrhsZKQz_03tJOHARl2oxTyEPNJ1"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                <h4 className="text-white font-headline-sm">Leadership & Civic Clubs</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Guidance */}
      <section className="py-xl bg-surface-container-high">
        <div className="max-w-container-max mx-auto px-8">
          <div className="bg-white rounded-[2rem] p-12 shadow-xl flex flex-col lg:flex-row items-center gap-12 border-t-8 border-primary">
            <div className="lg:w-1/3">
              <div className="w-20 h-20 bg-primary-container rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-white text-4xl">explore</span>
              </div>
              <h2 className="font-headline-md text-primary mb-4">Career Guidance & Placement</h2>
              <p className="font-body-md text-on-surface-variant">
                We don't just teach; we guide. Our counseling department works with students from SSS1 to map out their future careers and university paths.
              </p>
            </div>
            <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6 w-full">
              <div className="p-6 bg-surface-container rounded-2xl">
                <h4 className="font-label-md text-primary mb-2">Psychometric Testing</h4>
                <p className="text-sm text-on-surface-variant">
                  Identifying innate strengths and personality alignments for career choices.
                </p>
              </div>
              <div className="p-6 bg-surface-container rounded-2xl">
                <h4 className="font-label-md text-primary mb-2">University Visits</h4>
                <p className="text-sm text-on-surface-variant">
                  Annual tours to top Nigerian and international universities for our seniors.
                </p>
              </div>
              <div className="p-6 bg-surface-container rounded-2xl">
                <h4 className="font-label-md text-primary mb-2">Alumni Mentorship</h4>
                <p className="text-sm text-on-surface-variant">
                  Connecting current students with successful graduates in various professional fields.
                </p>
              </div>
              <div className="p-6 bg-surface-container rounded-2xl">
                <h4 className="font-label-md text-primary mb-2">Skill Workshops</h4>
                <p className="text-sm text-on-surface-variant">
                  Regular seminars on resume writing, interviewing, and soft skill development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
