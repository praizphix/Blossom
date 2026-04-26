# 🌸 Blossom High School Website

A modern, production-ready website for Blossom High School, Ibadan, Oyo State, Nigeria. Built with React, Vite, Tailwind CSS, and ready for deployment.

## ✨ Features

- **Fully Responsive Design** - Mobile, tablet, and desktop optimized
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Fast Performance** - Built with Vite for lightning-fast loading
- **SEO Optimized** - Semantic HTML and proper meta tags
- **Backend Ready** - Abstraction layer for Supabase or Firebase integration
- **Admin Dashboard** - Protected admin panel with sidebar navigation
- **Multiple Portals** - Student, Parent, and Staff portal access points
- **Contact Forms** - Ready for backend integration
- **Gallery System** - Image showcase with categories
- **News Management** - Blog/news section for school updates

## 🎨 Brand Colors

- **Primary Green**: `#0B5D2A`
- **Secondary Green**: `#2E8B57`
- **Soft Pink Accent**: `#F6B6C9`
- **White**: `#FFFFFF`
- **Dark Text**: `#1A1A1A`

## 🚀 Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Backend Options**: Supabase / Firebase
- **Deployment**: Vercel Ready

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Blossom
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Update `.env` with your backend credentials:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_key
# OR
VITE_FIREBASE_API_KEY=your_firebase_key
VITE_FIREBASE_PROJECT_ID=your_project_id
```

5. Start development server:
```bash
npm run dev
```

## 🏗️ Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   └── ...
├── pages/            # Page components
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Academics.jsx
│   ├── Admissions.jsx
│   ├── Facilities.jsx
│   ├── Gallery.jsx
│   ├── News.jsx
│   ├── Contact.jsx
│   ├── Portal.jsx
│   └── Admin.jsx
├── layouts/          # Layout wrappers
│   └── MainLayout.jsx
├── services/         # Backend integrations
│   ├── database.js
│   ├── supabase.js
│   └── firebase.js
├── data/             # Static data
│   └── schoolData.js
├── utils/            # Utility functions
│   ├── animations.js
│   └── helpers.js
└── assets/           # Images and static files
```

## 📄 Pages

1. **Home** - Hero, features, testimonials, news preview
2. **About** - School history, mission, vision, leadership
3. **Academics** - Curriculum, programs, academic excellence
4. **Admissions** - Application process, requirements, fees
5. **Facilities** - School facilities showcase
6. **Gallery** - Photo gallery with categories
7. **News** - School news and updates
8. **Contact** - Contact form and school information
9. **Portal** - Access to Student/Parent/Staff portals
10. **Admin** - Protected dashboard for content management

## 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Manual Build

```bash
npm run build
```

The `dist` folder will contain your production-ready files.

## 🔐 Backend Setup

### Using Supabase

1. Create account at [supabase.com](https://supabase.com)
2. Create new project
3. Get API credentials from Project Settings
4. Update `.env` with credentials
5. Run database migrations (see `services/database.js`)

### Using Firebase

1. Create project at [firebase.google.com](https://firebase.google.com)
2. Enable Authentication and Firestore
3. Get config from Project Settings
4. Update `.env` with credentials
5. Initialize services (see `services/firebase.js`)

## 📊 Database Models

### Contacts
- id, name, email, phone, message, created_at

### Applications
- id, student_name, parent_name, class_level, phone, email, documents, status, created_at

### News
- id, title, content, image, created_at

### Gallery
- id, image, caption, category

### Admins
- id, email, role

## 🎯 Features To Add

- [ ] Connect backend database
- [ ] Implement authentication
- [ ] Add WhatsApp floating button
- [ ] Scroll to top button
- [ ] Page loader
- [ ] Newsletter signup
- [ ] Dark mode toggle
- [ ] Animated counters
- [ ] Form validation
- [ ] Image optimization

## 📝 License

This project is proprietary and confidential.

## 👥 Contact

**Blossom High School**  
Sode Arola, Ilupeju Quarters, Apete Ibadan  
Oyo State, Nigeria

📞 Phone: +234 (0) 802 7585609  
📧 Email: info@bhsibadan.ng  
🌐 Website: www.bhsibadan.ng

---

Built with ❤️ for Blossom High School
