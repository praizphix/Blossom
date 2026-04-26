// Framer Motion Animation Variants

// Fade In Animation
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

// Fade In Up Animation
export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

// Fade In Down Animation
export const fadeInDown = {
  hidden: { opacity: 0, y: -30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

// Fade In Left Animation
export const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

// Fade In Right Animation
export const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

// Scale In Animation
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

// Slide In From Bottom
export const slideInFromBottom = {
  hidden: { y: '100%' },
  visible: { 
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

// Stagger Container
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

// Stagger Item
export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

// Hover Scale Animation
export const hoverScale = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: { duration: 0.3, ease: 'easeInOut' }
  }
};

// Zoom In Animation
export const zoomIn = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }
  }
};

// Rotate In Animation
export const rotateIn = {
  hidden: { opacity: 0, rotate: -10 },
  visible: { 
    opacity: 1, 
    rotate: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

// Slide In Up with Bounce
export const slideInUpBounce = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }
  }
};

// Scale and Fade
export const scaleAndFade = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' }
  }
};

// Stagger Fast Container
export const staggerFastContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  }
};

// Image Zoom Hover
export const imageZoomHover = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.1,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

// Float Animation (continuous)
export const float = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

// Pulse Animation (continuous)
export const pulse = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

// Viewport animation settings for scroll-triggered animations
export const viewportSettings = {
  once: true,
  margin: '0px 0px -100px 0px',
  amount: 0.3
};

// Page transition animations
export const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: { duration: 0.3 }
  }
};

// Navbar Animation
export const navbarAnimation = {
  hidden: { y: -100, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

// Mobile Menu Animation
export const mobileMenuAnimation = {
  closed: { x: '100%' },
  open: { 
    x: 0,
    transition: { duration: 0.3, ease: 'easeInOut' }
  }
};

// Card Hover Effect
export const cardHover = {
  rest: { y: 0, boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' },
  hover: { 
    y: -8,
    boxShadow: '0 20px 25px rgba(0, 0, 0, 0.15)',
    transition: { duration: 0.3 }
  }
};

// Button Tap Animation
export const buttonTap = {
  scale: 0.95,
  transition: { duration: 0.1 }
};

// Page Transition
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: { duration: 0.3 }
  }
};

// Modal Animation
export const modalAnimation = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.3 }
  },
  exit: { 
    opacity: 0, 
    scale: 0.8,
    transition: { duration: 0.2 }
  }
};

// Loading Spinner Animation
export const spinnerAnimation = {
  rotate: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: 'linear'
    }
  }
};

// Counter Animation (for stats)
export const counterAnimation = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10
    }
  }
};

// Image Reveal Animation
export const imageReveal = {
  hidden: { scale: 1.2, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};

// Scroll Reveal Settings
export const scrollRevealSettings = {
  threshold: 0.1,
  triggerOnce: true
};
