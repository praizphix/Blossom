// School Information Data
export const schoolInfo = {
  name: "Blossom High School",
  tagline: "Nurturing Excellence, Raising Future Leaders",
  description: "Blossom High School provides quality education, discipline, leadership, and innovation for tomorrow's leaders.",
  location: "Apete Ibadan, Oyo State, Nigeria",
  email: "info@bhsibadan.ng",
  phone: "+234 (0) 802 7585609",
  whatsapp: "+2348027585609",
  address: "Sode Arola, Ilupeju Quarters, Apete Ibadan, Oyo State, Nigeria",
  website: "www.bhsibadan.ng",
  socialMedia: {
    facebook: "https://facebook.com/blossomhighschool",
    twitter: "https://twitter.com/blossomhighsch",
    instagram: "https://instagram.com/blossomhighschool",
    linkedin: "https://linkedin.com/company/blossomhighschool",
  },
};

// Why Choose Us Features
export const features = [
  {
    id: 1,
    icon: "FaGraduationCap",
    title: "Academic Excellence",
    description: "Proven track record of outstanding academic performance with qualified and experienced teachers.",
  },
  {
    id: 2,
    icon: "FaUsers",
    title: "Small Class Sizes",
    description: "We maintain optimal student-teacher ratios to ensure personalized attention for every student.",
  },
  {
    id: 3,
    icon: "FaLaptopCode",
    title: "Modern Facilities",
    description: "State-of-the-art classrooms, science labs, computer labs, and sports facilities.",
  },
  {
    id: 4,
    icon: "FaTrophy",
    title: "Holistic Development",
    description: "We focus on academic, social, emotional, and physical development of our students.",
  },
  {
    id: 5,
    icon: "FaShieldAlt",
    title: "Safe Environment",
    description: "Secure campus with 24/7 surveillance and dedicated security personnel.",
  },
  {
    id: 6,
    icon: "FaHandsHelping",
    title: "Character Building",
    description: "Strong emphasis on discipline, moral values, and leadership development.",
  },
];

// Academics Data
export const academicPrograms = [
  {
    id: 1,
    level: "Junior Secondary (JSS 1-3)",
    description: "Foundation years focusing on core subjects and skill development.",
    subjects: [
      "Mathematics",
      "English Language",
      "Basic Science",
      "Basic Technology",
      "Social Studies",
      "Computer Studies",
      "French",
      "Business Studies",
      "Creative Arts",
      "Home Economics",
      "Physical Education",
    ],
  },
  {
    id: 2,
    level: "Senior Secondary (SSS 1-3)",
    description: "Specialized programs in Science, Commercial, and Arts tracks.",
    tracks: [
      {
        name: "Science",
        subjects: ["Physics", "Chemistry", "Biology", "Mathematics", "English", "Computer Science"],
      },
      {
        name: "Commercial",
        subjects: ["Economics", "Commerce", "Accounting", "Business Studies", "Mathematics", "English"],
      },
      {
        name: "Arts",
        subjects: ["Literature", "Government", "CRS/IRS", "History", "Economics", "English"],
      },
    ],
  },
];

// Facilities
export const facilities = [
  {
    id: 1,
    name: "Science Laboratories",
    description: "Fully equipped physics, chemistry, and biology labs with modern equipment.",
    icon: "FaFlask",
  },
  {
    id: 2,
    name: "Computer Lab",
    description: "Modern computer lab with high-speed internet and latest software.",
    icon: "FaDesktop",
  },
  {
    id: 3,
    name: "Library",
    description: "Well-stocked library with thousands of books and digital resources.",
    icon: "FaBook",
  },
  {
    id: 4,
    name: "Sports Complex",
    description: "Basketball court, football field, and indoor sports facilities.",
    icon: "FaFutbol",
  },
  {
    id: 5,
    name: "Auditorium",
    description: "500-seat auditorium for events, presentations, and assemblies.",
    icon: "FaBuilding",
  },
  {
    id: 6,
    name: "Cafeteria",
    description: "Clean, modern cafeteria serving nutritious meals.",
    icon: "FaUtensils",
  },
];

// Testimonials
export const testimonials = [
  {
    id: 1,
    name: "Mrs. Adeyemi",
    role: "Parent",
    image: "",
    text: "Blossom High School has transformed my daughter's academic journey. The teachers are dedicated and the environment is nurturing.",
    rating: 5,
  },
  {
    id: 2,
    name: "Oluwaseun Johnson",
    role: "Alumni (Class of 2023)",
    image: "",
    text: "The foundation I received at Blossom prepared me excellently for university. Forever grateful!",
    rating: 5,
  },
  {
    id: 3,
    name: "Mr. Okonkwo",
    role: "Parent",
    image: "",
    text: "Excellent school with top-notch facilities. My son's confidence and performance have improved remarkably.",
    rating: 5,
  },
];

// News & Events (Sample Data)
export const news = [
  {
    id: 1,
    title: "Blossom Students Win State Science Competition",
    excerpt: "Our students brought home first place in the Oyo State Science Competition 2026.",
    image: "",
    date: "2026-04-20",
    category: "Achievement",
  },
  {
    id: 2,
    title: "2026/2027 Admission Now Open",
    excerpt: "Applications are now being accepted for the upcoming academic session. Apply today!",
    image: "",
    date: "2026-04-15",
    category: "Admission",
  },
  {
    id: 3,
    title: "New Computer Lab Inaugurated",
    excerpt: "State-of-the-art computer laboratory with 50 workstations now operational.",
    image: "",
    date: "2026-04-10",
    category: "Facility",
  },
];

// Gallery Categories
export const galleryCategories = [
  "All",
  "Campus",
  "Classrooms",
  "Sports",
  "Events",
  "Laboratories",
  "Students",
];

// Sample Gallery Images
export const galleryImages = [
  {
    id: 1,
    src: "",
    category: "Campus",
    caption: "Main School Building",
  },
  {
    id: 2,
    src: "",
    category: "Classrooms",
    caption: "Modern Classroom",
  },
  {
    id: 3,
    src: "",
    category: "Sports",
    caption: "Basketball Court",
  },
  // Add more as needed
];

// Admission Requirements
export const admissionRequirements = [
  {
    class: "JSS 1",
    requirements: [
      "Primary School Leaving Certificate",
      "Birth Certificate",
      "2 Passport Photographs",
      "Previous School Report (if any)",
      "Entrance Examination (Pass)",
    ],
  },
  {
    class: "JSS 2-3",
    requirements: [
      "Last School Report Card",
      "Transfer Certificate",
      "Birth Certificate",
      "2 Passport Photographs",
      "Entrance Examination (Pass)",
    ],
  },
  {
    class: "SSS 1-3",
    requirements: [
      "Junior WAEC Result (for SSS 1)",
      "Last School Report Card",
      "Transfer Certificate",
      "Birth Certificate",
      "2 Passport Photographs",
      "Entrance Examination (Pass)",
    ],
  },
];

// Contact Form Categories
export const contactCategories = [
  "General Inquiry",
  "Admission Information",
  "Fee Structure",
  "School Visit",
  "Complaint/Feedback",
  "Other",
];

// Stats/Counters for Home Page
export const stats = [
  {
    id: 1,
    value: "500+",
    label: "Students",
    icon: "FaUsers",
  },
  {
    id: 2,
    value: "50+",
    label: "Qualified Teachers",
    icon: "FaChalkboardTeacher",
  },
  {
    id: 3,
    value: "15+",
    label: "Years of Excellence",
    icon: "FaAward",
  },
  {
    id: 4,
    value: "98%",
    label: "Success Rate",
    icon: "FaChartLine",
  },
];

// Navigation Links
export const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Academics", path: "/academics" },
  { name: "Admissions", path: "/admissions" },
  { name: "Facilities", path: "/facilities" },
  { name: "Gallery", path: "/gallery" },
  { name: "News", path: "/news" },
  { name: "Contact", path: "/contact" },
];

// Footer Quick Links
export const quickLinks = [
  { name: "About Us", path: "/about" },
  { name: "Academics", path: "/academics" },
  { name: "Admissions", path: "/admissions" },
  { name: "Facilities", path: "/facilities" },
  { name: "Gallery", path: "/gallery" },
  { name: "News & Events", path: "/news" },
  { name: "Contact Us", path: "/contact" },
  { name: "Student Portal", path: "/portal" },
];
