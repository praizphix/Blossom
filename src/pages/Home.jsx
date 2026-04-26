import React from 'react';
import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <HeroSlider />
        </div>
        
        <div className="relative z-10 max-w-container-max mx-auto px-8 py-xl">
          <div className="max-w-3xl space-y-md">
            <span className="inline-block px-4 py-1.5 bg-secondary-container text-on-secondary-container font-label-md rounded-full">
              Excellence in Education
            </span>
            <h1 className="text-white font-display-xl leading-tight">
              Nurturing Excellence, Raising Future Leaders
            </h1>
            <p className="text-white/90 text-body-lg max-w-2xl">
              Blossom High School is committed to academic excellence, character development, discipline, and innovation—preparing every child for a successful future.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link 
                to="/admissions"
                className="px-8 py-4 bg-tertiary-container text-white font-headline-sm rounded-xl hover:scale-[1.02] transition-transform shadow-lg"
              >
                Apply for Admission
              </Link>
              <Link 
                to="/contact"
                className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-headline-sm rounded-xl hover:bg-white/20 transition-all"
              >
                Book a School Tour
              </Link>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-xl">
              <div className="flex items-center gap-3 text-white/90">
                <span className="material-symbols-outlined text-secondary-fixed text-3xl">school</span>
                <span className="font-label-md">Experienced Teachers</span>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <span className="material-symbols-outlined text-secondary-fixed text-3xl">shield_person</span>
                <span className="font-label-md">Safe Environment</span>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <span className="material-symbols-outlined text-secondary-fixed text-3xl">computer</span>
                <span className="font-label-md">Modern Learning</span>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <span className="material-symbols-outlined text-secondary-fixed text-3xl">workspace_premium</span>
                <span className="font-label-md">Strong Moral Values</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-xl bg-surface relative">
        <div className="max-w-container-max mx-auto px-8">
          <div className="text-center mb-xl">
            <h2 className="text-primary font-display-lg mb-4">Why Parents Choose Blossom High School</h2>
            <div className="h-1.5 w-24 bg-tertiary-container mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-xl shadow-[0_10px_40px_rgba(11,93,42,0.05)] border-l-4 border-emerald-600 hover:-translate-y-2 transition-all group">
              <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center mb-6 text-emerald-700 group-hover:bg-emerald-700 group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-3xl">trending_up</span>
              </div>
              <h3 className="text-primary font-headline-sm mb-3">Academic Excellence</h3>
              <p className="text-on-surface-variant text-body-md">
                A rigorous curriculum designed to challenge students and produce top-tier academic results across all levels.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-xl shadow-[0_10px_40px_rgba(11,93,42,0.05)] border-l-4 border-tertiary-container hover:-translate-y-2 transition-all group">
              <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-tertiary-container group-hover:bg-tertiary-container group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-3xl">verified_user</span>
              </div>
              <h3 className="text-primary font-headline-sm mb-3">Character & Integrity</h3>
              <p className="text-on-surface-variant text-body-md">
                We believe education is incomplete without character. We instill strong ethical values in every student.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-xl shadow-[0_10px_40px_rgba(11,93,42,0.05)] border-l-4 border-emerald-600 hover:-translate-y-2 transition-all group">
              <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center mb-6 text-emerald-700 group-hover:bg-emerald-700 group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-3xl">security</span>
              </div>
              <h3 className="text-primary font-headline-sm mb-3">Safe Learning</h3>
              <p className="text-on-surface-variant text-body-md">
                A nurturing environment where children feel secure, respected, and empowered to express themselves.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-8 rounded-xl shadow-[0_10px_40px_rgba(11,93,42,0.05)] border-l-4 border-tertiary-container hover:-translate-y-2 transition-all group">
              <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-tertiary-container group-hover:bg-tertiary-container group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-3xl">lightbulb</span>
              </div>
              <h3 className="text-primary font-headline-sm mb-3">Innovation & Tech</h3>
              <p className="text-on-surface-variant text-body-md">
                Equipping students with future-ready skills through modern technology and creative problem-solving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Built for Growth Split Layout */}
      <section className="py-xl overflow-hidden">
        <div className="max-w-container-max mx-auto px-8">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary-container/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-tertiary-container/10 rounded-full blur-3xl"></div>
              <img 
                className="relative z-10 rounded-xl shadow-2xl object-cover w-full h-[500px]" 
                alt="Beautiful aerial architecture of a modern Nigerian private secondary school campus in Ibadan with lush greenery and clean academic blocks"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzpukZ04wwf14ke-qSHUvcQN7yIJEnG1ZFunNDaTUrvq4X3PeDNlF9uISxpBJeQLQSAIBN75cjsvxqTTjqLxN_t2aKnZgWMg7NL2v0gop8BsH0XOSSZICIzWPx28Oe-Wma4Cv9DGuQC0OehKHB24DK71H8_kunXThjIqsK1fdZ4SHIsUXNvo5IPvh-d1zolO6r6DR8jE-_GqpY_4B7Nvyk7Qc_eXqtdhIwUQ2WpE0Ic6EsN87d53b4I0dlX8X8aNEkP1VTqCn_"
              />
            </div>
            <div className="lg:w-1/2 space-y-md">
              <span className="text-secondary font-label-md tracking-widest uppercase">Our Heritage</span>
              <h2 className="text-primary font-display-lg">A School Built for Growth in Ibadan</h2>
              <p className="text-on-surface-variant text-body-lg">
                Located in the heart of Ibadan, Blossom High School stands as a beacon of academic excellence and cultural heritage. Our campus is designed to inspire creativity and focus, providing a serene backdrop for intellectual exploration.
              </p>
              <p className="text-on-surface-variant text-body-lg">
                Since our inception, we have dedicated ourselves to bridging the gap between traditional moral values and modern educational requirements, ensuring our graduates are competitive on a global stage while remaining rooted in their identity.
              </p>
              <div className="pt-6">
                <Link to="/about" className="group flex items-center gap-2 text-primary font-headline-sm">
                  Learn more about our history
                  <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Foundation Cards */}
      <section className="py-xl bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-8">
          <div className="flex justify-between items-end mb-xl">
            <div className="max-w-xl">
              <h2 className="text-primary font-display-lg">Strong Academic Foundation</h2>
              <p className="text-on-surface-variant text-body-lg mt-4">
                We offer a holistic educational journey that caters to the unique strengths of every student.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Junior School */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all">
              <div className="h-48 overflow-hidden">
                <img 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  alt="Enthusiastic junior secondary students collaborating on a group project in a colorful classroom environment"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVXQoDovFSt5wXPv1tlnMjYZCg7Olt1XM_4NbkpiWXcpQ2x9wGSfAB_OJ09-HMjLLxHG0GIJd4f4sOUnp4KzBN_iTTD4SmmlF75Rp1-NZm3pxv1Gc5nTtjjo_MqZ9CQbMOZCaq8gNbcfuRWaSjeoZ3rIsi3UMXsy3vevUJjpNIJeRdZQYi_VoueCXUDtXb_jF1kUsHrNrpQ0Qo0-yuJ6xrYqpdyFtA_e2rS5MA7FASEDBCwyiCiVcZ5XLYO_IBEscDB6nEuHY3"
                />
              </div>
              <div className="p-6">
                <h3 className="text-primary font-headline-sm mb-2">Junior School</h3>
                <p className="text-on-surface-variant text-body-md mb-4">
                  Building foundational literacy, numeracy, and social skills in a supportive environment.
                </p>
                <Link to="/academics" className="text-secondary font-label-md inline-flex items-center gap-1">
                  Explore Curriculum <span className="material-symbols-outlined text-sm">open_in_new</span>
                </Link>
              </div>
            </div>

            {/* Senior School */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all">
              <div className="h-48 overflow-hidden">
                <img 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  alt="Focused senior secondary students during a seminar in a modern lecture hall with laptop and notebooks"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvRibwQp18T6fFK0mhlwUMHN56N78X_U8EP7gr65TEkYBJ-l4uqyQI7e-3iGPoe3YB54FHfTxoCRvktXElVGGLrWgGXaVs3yhYbKbfo7PR6tcpdJgS9MqHov47EjhrWt1QYw8f17eStPq-_mBUuEiwEcjTvQliC5meY3kXLqr5aTX5RpbM-2Nc0CmgBo_aVSW1RW4OgA23qLLYTRvCW3Lxx6Da_nH87Jwizl6bRI_E6hv5b9-nCcHHNG_RzuiUfSDBIzT_rcxu"
                />
              </div>
              <div className="p-6">
                <h3 className="text-primary font-headline-sm mb-2">Senior School</h3>
                <p className="text-on-surface-variant text-body-md mb-4">
                  Advanced preparation for university entrance exams with personalized career guidance.
                </p>
                <Link to="/academics" className="text-secondary font-label-md inline-flex items-center gap-1">
                  Explore Curriculum <span className="material-symbols-outlined text-sm">open_in_new</span>
                </Link>
              </div>
            </div>

            {/* STEM */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all">
              <div className="h-48 overflow-hidden">
                <img 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  alt="High school student looking through a microscope in a high-tech science laboratory with various glass beakers"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC46fEmgOPgYZPOCTxOb7_S5DJIj8zMr9yPHwUfbOtvjby9YxbJmavB7PKyF4AGKq0Vd7--gup4AUJtpSRPeU7I2VQ1f2yv_gzG6Q-o3KdXFS5lfRLPTSenb0y_DeYVAisTqNjL7z_n8Q1TjnUyV8Hb5qZbms0T-alZO_6ELXK4txaNkAGSwjXYjez8-xyMQarNEazBEvKNlQQrkw3i2hd0SiV8En0Oq2S3qMpoKR6B8i5PXYiAyGwSrG3XC_T4SrEyfPM9cHaX"
                />
              </div>
              <div className="p-6">
                <h3 className="text-primary font-headline-sm mb-2">STEM Program</h3>
                <p className="text-on-surface-variant text-body-md mb-4">
                  Focusing on Robotics, Coding, and advanced Sciences for future innovators.
                </p>
                <Link to="/academics" className="text-secondary font-label-md inline-flex items-center gap-1">
                  Explore Curriculum <span className="material-symbols-outlined text-sm">open_in_new</span>
                </Link>
              </div>
            </div>

            {/* Arts */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all">
              <div className="h-48 overflow-hidden">
                <img 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  alt="Creative students practicing musical instruments in a sun-drenched music studio with acoustic wall panels"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcSc833b1Lgfcz_1SujYryavA0XM9Bxi7uzmjXk9iYj2iakQIlIgKKnqXo6AvUX0zHn_W_NCS4ViiGZaOv85kyHrVr00UOa-RjHCYPcsozap_wyjp3vG8ND18wc_VPqQ8XZImLmF6JM9TXVQ-NR_Eikh4mPlFDupZcg1vjVWCnAoG0vPhRBCmjCWSfb7RmNMetUSJCTVK8mY8RqtBmKRMAgsk_6iOOOp2fsD88kTfsgr2OkU8QQvR1hyMf_EezIMpUxYhpr1_x"
                />
              </div>
              <div className="p-6">
                <h3 className="text-primary font-headline-sm mb-2">Creative Arts</h3>
                <p className="text-on-surface-variant text-body-md mb-4">
                  Nurturing artistic talents in music, fine arts, and performance theater.
                </p>
                <Link to="/academics" className="text-secondary font-label-md inline-flex items-center gap-1">
                  Explore Curriculum <span className="material-symbols-outlined text-sm">open_in_new</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Facilities Grid - Part 1 */}
      <section className="py-xl">
        <div className="max-w-container-max mx-auto px-8">
          <h2 className="text-primary font-display-lg text-center mb-xl">Modern Facilities</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 h-[600px]">
            <div className="col-span-2 row-span-2 relative overflow-hidden rounded-xl group">
              <img 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                alt="Wide shot of an expansive, modern school library with floor-to-ceiling bookshelves and comfortable reading pods"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLvKygr4VkzebMdvOmkb7gOE6LyGNi7LDsBczapr09vsixrJwjrMT-QALnGjJM-VqVb-b47VXPFBwBOFfTcAbRKhZBvQ7G2t-2yEAgTCPiacitZVu0BPm8z2UjvJY83MhpI5_oXGYwyjCr0UmdOKAQj4mWoADWTT-tSuF-TZx4LTSu8cGzkFFLl04YTyHunUrFaUVPN4uFwaE_9Jlt4PtXtVQd1mXfrrkLltWEZ94-PuxZeCo4K0W7QgeJfO6rGbiQeHMcwt-p"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
                <h4 className="text-white font-headline-sm">Digital Learning Resource Centre</h4>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl group">
              <img 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                alt="Modern high school cafeteria with clean white tables and healthy food options for students"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhyJLkFBJ2Q9CHrmqld-iqLd-oWv9-frpb7qM0EBPzxqqLdzTZi6Smz5vhpM6D1fJwyZlnvqJLecsbpISJebCjMy8X3FX_ReMeZWElFS65oxEJ_0fg1oCpPYHo2fZN7l8aO1gS5cpBX_LP5gxQf9R5YYjyPKpSVKIHTejFdmLdqEoYUqmM4fJofRPviNsL850EBWvsHEPI_V-Fbq1CQyslC_3UH2uDUYl_csEgA6myWhTiRO70rH61VPKVxKnm5u8_ykI9pD9M"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
                <p className="text-white font-label-md">Modern Cafeteria</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl group">
              <img 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                alt="State-of-the-art computer lab with rows of latest iMacs and ergonomic chairs"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAS9H4gooaeFRS-dmv2tSgZmGfjIuRgldnN7NlV9gTvq22-EshjT6f20AVVTk4AkMil-qVsjYlltVi-z1jr7K66JeQUFeTDoBxdAbq4Ml9Jnggztu0REBoxw7VItVO_K4TXHTUH04s3EhPIDRp1swaj0L7VltWtKgudD2LpojXZ-swzwC8kE_yMatlAq5bUGe6cCGVR-KQs83mTfEK6dkRI7S60iAW2BCw9KdOl1fx3-2p1u0aGiIf0nwfKypAIwT4NJVHEflCS"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
                <p className="text-white font-label-md">IT Hub</p>
              </div>
            </div>
            <div className="col-span-2 relative overflow-hidden rounded-xl group">
              <img 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                alt="Well-maintained green sports field with running track and basketball courts at dusk"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhWZl5iJkuP_yZyQOapZRoPp1Rm5ovfXnuLnQJ67PD8DAoKrLIO0UKOo6OsfeRkPe7qXgtvbbdRmjcGWKIy9fNbH8BeL3acRGMagU8otL2i0su73F4ZmAglGQK8BD4Q6rBciyFSy-KtzAEH4okLp70o-quv7zdjgAlycfP1gh6RcRDrDi49PRub_OHt8hdErfbc7NgCHBMT5MGJNGSlA2evDwFTXWkfaJ9jCB0AdOTEwc-PAuRq6PkkNTfiTQMAeRnR8hb4qWd"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                <h4 className="text-white font-headline-sm">Sports & Athletics Complex</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admissions Banner */}
      <section className="max-w-container-max mx-auto px-8 mb-xl">
        <div className="bg-primary-container rounded-xl p-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
          <div className="relative z-10 max-w-xl text-center md:text-left">
            <h2 className="text-white font-display-lg mb-4">Admissions Now Open</h2>
            <p className="text-white/80 text-body-lg">
              Secure a place for your child for the 2024/2025 academic session. Application forms are available online and at the school office.
            </p>
          </div>
          <div className="relative z-10">
            <Link 
              to="/admissions"
              className="px-10 py-5 bg-tertiary-fixed text-on-tertiary-fixed font-headline-sm rounded-xl hover:scale-105 transition-all shadow-xl inline-block"
            >
              Start Application
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-xl bg-surface-container">
        <div className="max-w-container-max mx-auto px-8">
          <h2 className="text-primary font-display-lg text-center mb-xl">What Parents Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div className="bg-white p-8 rounded-xl shadow-[0_10px_40px_rgba(11,93,42,0.05)] italic text-on-surface-variant relative">
              <span className="material-symbols-outlined text-tertiary-container text-5xl absolute -top-4 left-4 opacity-20">
                format_quote
              </span>
              <p className="mb-6">
                "Blossom High School has transformed my daughter's confidence. The blend of academic rigor and moral grounding is exactly what we were looking for in Ibadan."
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src="https://ui-avatars.com/api/?name=Mrs+Adebayo&background=0b5d2a&color=fff&size=128&bold=true" 
                  alt="Mrs. Adebayo"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-bold text-primary not-italic">Mrs. Adebayo</p>
                  <p className="text-xs not-italic">Parent of Grade 10 Student</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-[0_10px_40px_rgba(11,93,42,0.05)] italic text-on-surface-variant relative">
              <span className="material-symbols-outlined text-tertiary-container text-5xl absolute -top-4 left-4 opacity-20">
                format_quote
              </span>
              <p className="mb-6">
                "The STEM facilities here are world-class. My son is already learning robotics and coding at a level I never expected for high school."
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src="https://ui-avatars.com/api/?name=Dr+Okon&background=006d3d&color=fff&size=128&bold=true" 
                  alt="Dr. Okon"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-bold text-primary not-italic">Dr. Okon</p>
                  <p className="text-xs not-italic">Parent of Grade 8 Student</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-[0_10px_40px_rgba(11,93,42,0.05)] italic text-on-surface-variant relative">
              <span className="material-symbols-outlined text-tertiary-container text-5xl absolute -top-4 left-4 opacity-20">
                format_quote
              </span>
              <p className="mb-6">
                "The discipline and integrity taught at Blossom go beyond the classroom. It's a complete nurturing environment for the future leaders."
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src="https://ui-avatars.com/api/?name=Mrs+Hassan&background=863546&color=fff&size=128&bold=true" 
                  alt="Mrs. Hassan"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-bold text-primary not-italic">Mrs. Hassan</p>
                  <p className="text-xs not-italic">Parent of Alumna</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News & Events */}
      <section className="py-xl">
        <div className="max-w-container-max mx-auto px-8">
          <div className="flex justify-between items-center mb-xl">
            <h2 className="text-primary font-display-lg">Latest News & Events</h2>
            <Link to="/news" className="text-secondary font-headline-sm flex items-center gap-2">
              View Newsroom <span className="material-symbols-outlined">chevron_right</span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div className="space-y-4 group">
              <div className="rounded-xl overflow-hidden h-64">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  alt="Group of high school students celebrating their graduation by throwing caps into the air outdoors"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2tzeAZQANrZTkCJeA0e6jyjFDNm4IO0KEQ8jIiDUnHvjLp56_FjaTXSLB9KELL-wiMJAKq-Vw6ZZn3MgrvNYSdp_PCVevtbNUO3nAwi-ZpauDrznv4EaZcD05kt0-8bXTbL9MLksq3gFQ0_NyuFDVuQ1lwJGT5cWSTCAeuaxXn_b9mnVR-by9AE5hvtEgIT0IIq9UGL5nBI61DJvKQtI8kHZdp0_ultNwzkznEexooepURadPfWxWjGniky6aqQ58clui0M70"
                />
              </div>
              <p className="text-tertiary-container font-label-md">May 15, 2024</p>
              <h4 className="text-primary font-headline-sm">Class of 2024 Achieves Record-Breaking Results</h4>
              <p className="text-on-surface-variant text-body-md">
                We celebrate our graduating seniors who secured 100% pass rates in recent international examinations.
              </p>
            </div>

            <div className="space-y-4 group">
              <div className="rounded-xl overflow-hidden h-64">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  alt="Auditorium stage set up for an inter-school debate competition with microphones and podium"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0hHoPN8QZZFiVZ9bdsM8Juqi7tSiC7YGEnTDlEEznOYbxymITmPa2gOLlkuk93HdGAWucMODKboFQBc5owCP6Ry8sC_MmV1kGdh7tuyNRXeXWGxnP7UcYUUjWb_-1A2vd1-j0Vpf7KpnXgcv-sYNg2d4YbvpCsEmGx9rFVkLd-cO7RIYpX84leq3vBKjw8wLjx7Sk7W0089qM92hz48_J7wBg6FEJoUpyWY8iHePawjauOxTAcjLQTptP5HIOXfgxx1Waa0-d"
                />
              </div>
              <p className="text-tertiary-container font-label-md">June 02, 2024</p>
              <h4 className="text-primary font-headline-sm">Annual Inter-School STEM Competition</h4>
              <p className="text-on-surface-variant text-body-md">
                Blossom High to host the regional robotics challenge next month. Register to attend the showcase.
              </p>
            </div>

            <div className="space-y-4 group">
              <div className="rounded-xl overflow-hidden h-64">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  alt="Teachers and parents engaged in a discussion during a school PTA meeting in a modern conference room"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpMohvSQ7eN8tqvLbRBfM8Cyz60BI6ImqbUFr8p-W17KzVIJGwRS-77FN8LXdg7INuMlMUtGHFshrvLBYKYOFobEB6SZ8AYQLi_68hQKSqXl8Iy1ptZAKPDDFFZ3ivcePeph86mlwcpNdR8Fh6DBvF46YnixGF7XTTSXB848h-D9YSFd08Z8JyBleS0yfesbQ7il6el4-DS8qCCbPjNmsKZ7H44HQFs4Hs6skqQBtYSkQLs1BNA6qSeL3ASYR3eFzhfvkY5ZMe"
                />
              </div>
              <p className="text-tertiary-container font-label-md">June 10, 2024</p>
              <h4 className="text-primary font-headline-sm">Parent-Teacher Interactive Symposium</h4>
              <p className="text-on-surface-variant text-body-md">
                Join us for a session on navigating career paths in the 21st century for your children.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-xl bg-primary text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
            <path d="M0 100 C 20 0 50 0 100 100" fill="white"></path>
          </svg>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-8 space-y-md">
          <h2 className="font-display-lg">Give Your Child the Best Start</h2>
          <p className="text-lg opacity-90">
            Join our community of excellence and watch your child blossom into a leader of tomorrow. Admissions for the new session are going fast.
          </p>
          <div className="flex flex-wrap justify-center gap-6 pt-6">
            <Link 
              to="/admissions"
              className="px-10 py-5 bg-white text-primary font-headline-sm rounded-xl hover:bg-secondary-container transition-all"
            >
              Apply Now
            </Link>
            <Link 
              to="/contact"
              className="px-10 py-5 border-2 border-white text-white font-headline-sm rounded-xl hover:bg-white/10 transition-all"
            >
              Contact Admissions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
