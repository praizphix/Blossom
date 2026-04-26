import React from 'react';
import { Link } from 'react-router-dom';
import { newsArticles } from '../data/newsData';

const News = () => {
  return (
    <main className="pt-12 pb-24">
      {/* Hero Section */}
      <section className="max-w-container-max mx-auto px-8 mb-xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <span className="inline-block bg-tertiary-container text-on-tertiary-container text-label-md px-4 py-1 rounded-full mb-4">
              LATEST UPDATES
            </span>
            <h1 className="font-display-xl text-display-xl text-primary mb-6">
              Campus News & Major Events
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Stay connected with the vibrant life at Blossom High. From academic milestones to spirited athletic triumphs, witness the journey of excellence.
            </p>
          </div>
          <div className="flex gap-4">
            <button className="w-12 h-12 rounded-full border border-outline flex items-center justify-center text-primary hover:bg-surface-container-high transition-colors">
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <button className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-container transition-colors shadow-lg">
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Featured News Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Main Feature */}
          <article className="md:col-span-8 group relative overflow-hidden rounded-[24px] bg-white shadow-[0_10px_40px_rgba(11,93,42,0.05)] hover:-translate-y-1 transition-all duration-300">
            <div className="aspect-[16/9] w-full overflow-hidden">
              <img 
                alt="Student performance celebration" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnGrFyvw28l5IMgP-1iLSpTVw54KRCG8r3HUIwVZ3NnPmfaIAhbS6zFTKMe36tpVuDDu--aSsu2k1IoKBTSO1Lh91PhwmQ7mfZmwK6m2vcZ_dz8zR8b-14eIeuN5vQzPBEZ80FICT0Qeovja6l4SdRtw-s7rBdQw7Dg7mzXR56cYV19qVm4L6NWwt0FGsb7uH4LyonaBIirzevSgy6yFYfdHWpDpoNmikM06kaJZ_0ZW1cPnnS7Zp-qDnPquipLf-Yx4SfEPwc"
              />
            </div>
            <div className="p-8 border-l-4 border-secondary">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-label-md text-secondary-fixed-dim font-bold uppercase tracking-widest">
                  Academic Achievement
                </span>
                <span className="text-on-surface-variant text-sm flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">calendar_today</span>
                  May 15, 2026
                </span>
              </div>
              <h2 className="font-headline-md text-headline-md text-primary mb-4">
                Outstanding WAEC Performance: Blossom High Sets New Record
              </h2>
              <p className="text-on-surface-variant mb-6 line-clamp-2">
                We are proud to announce that our Class of 2026 has achieved a 100% distinction rate in the recent examinations, maintaining our status as a center of academic rigor.
              </p>
              <Link to="/news/waec-performance-2026" className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all duration-300">
                Read Full Story
                <span className="material-symbols-outlined">trending_flat</span>
              </Link>
            </div>
          </article>

          {/* Sidebar News 1 */}
          <article className="md:col-span-4 group flex flex-col rounded-[24px] bg-white shadow-[0_10px_40px_rgba(11,93,42,0.05)] hover:-translate-y-1 transition-all duration-300">
            <div className="aspect-square w-full overflow-hidden rounded-t-[24px]">
              <img 
                alt="Sports competition" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJo3F_fjdvozcJx9SAPMXfHzJ3Ozt6ESfwlIWErO7J0VgRK3WiGSkqHzMIFQT-DowXW2LtUDfPeXw9UhvJ2BE30UPIshbcKqE4A6YE2Ciu8CmVgvFGDNUTfP4Oq3DO0BP1tsWt2rwjFP6GR3qXZkp0qU8UZe2eBA_LDOJU13Sxw_3f_FHv_KMFj3LckwggpbpN9I6es-boZ7wppGA8gYPtqepr4DLAZGeyEOZ0s3CwUZTYYtM_47lo2U15PgoCzUzCmArW423A"
              />
            </div>
            <div className="p-6 border-l-4 border-tertiary">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-label-md text-tertiary-container font-bold">ATHLETICS</span>
                <span className="text-on-surface-variant text-xs">April 28, 2026</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-3">
                Inter-House Sports Competition 2026
              </h3>
              <p className="text-on-surface-variant text-sm mb-4">
                A display of grit, sportsmanship, and raw talent as the houses battled for the prestigious Chancellor's Trophy.
              </p>
              <Link to="/news/sports-competition-2026" className="text-primary font-bold text-sm hover:underline">Read More</Link>
            </div>
          </article>
        </div>
      </section>

      {/* Secondary Feed Section */}
      <section className="relative bg-surface-container-low py-xl">
        <div className="max-w-container-max mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* News Card 3 - Debate */}
            <article className="group rounded-[24px] bg-white p-2 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative aspect-[4/3] rounded-[20px] overflow-hidden mb-6">
                <img 
                  alt="Students debating" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuChk7ZBavC-ZDaKogcjqbMLj-eyCv_lxFWgW4kULreOL6aCR6-TJOvStWuRlqWqQhzjk0eWnPQDFkgSfSPn2kWlf4Fmjuyk__Bwb21Gax3rfMcLpNlAvMcZGsqAqdx66RMg-NKYsIr3ARWj_S1WclLwdRW6G08nUS2PD6MgK6qrLQKgQ-eMJBaddjpaI3Phriz-_ATITdzMPNPNZEuwHSxSB4weiNWAbTrFyDNf_u96G-mchgwzN3Y_BEsi1l3ORf4ELFKwzxCC"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary">
                  VICTORY
                </div>
              </div>
              <div className="px-4 pb-6">
                <div className="flex gap-2 mb-3">
                  <span className="bg-surface px-3 py-1 rounded text-xs font-semibold text-outline">DEBATE</span>
                  <span className="bg-surface px-3 py-1 rounded text-xs font-semibold text-outline">AWARDS</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-4">
                  Debate Championship Victory
                </h3>
                <p className="text-on-surface-variant text-sm mb-6">
                  Our senior debate team clinched the National Intellectual Cup for the third consecutive year.
                </p>
                <Link to="/news/debate-championship-victory" className="text-primary font-semibold text-sm hover:underline decoration-2 underline-offset-4">
                  Full Details
                </Link>
              </div>
            </article>

            {/* News Card 4 - Cultural Day */}
            <article className="group rounded-[24px] bg-white p-2 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative aspect-[4/3] rounded-[20px] overflow-hidden mb-6">
                <img 
                  alt="Cultural day celebration" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAYcnXHQXOpmpEQTmJQP4WXIM8BtKSpqAnJ1g43nLYMgEO644b9cQVRKxFHdqz4Zd95ue0x7M0RDbI3QY9ehRxuMY_klW7grFaEFui0LAJ7Px6ZJAqtGxowdobKKNPmuJCdobqohgElM2Xu5n8onvVfCPHubpTEPyep43yb9-AdxAsm2Ra8orfz4YZaB9Vm9uSs0QGQ0C1zDH5PWLiHXPceT55dS7M5tkJEv_awyoRN7gb6t3xMFLOIOkIY1yhEsr2rx8D2MeO"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-tertiary">
                  FESTIVAL
                </div>
              </div>
              <div className="px-4 pb-6">
                <div className="flex gap-2 mb-3">
                  <span className="bg-surface px-3 py-1 rounded text-xs font-semibold text-outline">CULTURE</span>
                  <span className="bg-surface px-3 py-1 rounded text-xs font-semibold text-outline">COMMUNITY</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-4">
                  Cultural Day Celebration
                </h3>
                <p className="text-on-surface-variant text-sm mb-6">
                  A colorful tapestry of heritage and unity as students represented over 40 distinct cultures from around the globe.
                </p>
                <Link to="/news/cultural-day-celebration" className="text-primary font-semibold text-sm hover:underline decoration-2 underline-offset-4">
                  Full Details
                </Link>
              </div>
            </article>

            {/* News Card 5 - Enrollment CTA */}
            <article className="group rounded-[24px] bg-primary p-8 flex flex-col justify-between text-white shadow-lg overflow-hidden relative">
              <div className="relative z-10">
                <h3 className="font-headline-md text-headline-md mb-4 text-secondary-fixed">
                  2027 Enrollment Now Open
                </h3>
                <p className="text-white/80 font-body-md mb-8">
                  Secure a seat for the upcoming academic session. Join a legacy of leaders and innovators.
                </p>
              </div>
              <Link 
                to="/admissions"
                className="relative z-10 bg-secondary-fixed text-primary px-8 py-3 rounded-full font-bold text-center hover:bg-white transition-colors"
              >
                Apply for Admission
              </Link>
              {/* Decorative elements */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-secondary-container/20 rounded-full blur-2xl"></div>
            </article>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="max-w-container-max mx-auto px-8 py-xl">
        <div className="bg-white rounded-[40px] p-12 md:p-20 shadow-[0_30px_60px_rgba(0,0,0,0.05)] border border-outline-variant flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:max-w-xl text-center md:text-left">
            <h2 className="font-display-lg text-display-lg text-primary mb-6">
              Never Miss a Moment
            </h2>
            <p className="text-body-lg text-on-surface-variant">
              Subscribe to our monthly newsletter and get the latest campus stories, event invitations, and academic insights delivered to your inbox.
            </p>
          </div>
          <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4">
            <input 
              className="px-6 py-4 rounded-full border border-outline-variant w-full sm:w-80 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-body-md transition-all" 
              placeholder="Your email address" 
              type="email"
            />
            <button className="bg-primary-container text-white px-10 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all">
              Subscribe Now
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default News;
