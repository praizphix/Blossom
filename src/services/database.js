import { supabaseService } from './supabase';
import { firebaseService } from './firebase';

// Determine which backend to use
// Priority: Supabase > Firebase > Mock
const getActiveService = () => {
  if (supabaseService.isConfigured()) {
    return { service: supabaseService, name: 'Supabase' };
  } else if (firebaseService.isConfigured()) {
    return { service: firebaseService, name: 'Firebase' };
  } else {
    return { service: mockService, name: 'Mock' };
  }
};

// Mock service for development when no backend is configured
const mockService = {
  isConfigured: () => true,
  
  // Mock implementations
  async submitContact(contactData) {
    console.log('Mock: Contact submitted', contactData);
    return { id: Date.now(), ...contactData, created_at: new Date().toISOString() };
  },
  
  async getContacts() {
    console.log('Mock: Getting contacts');
    return [];
  },
  
  async subscribeNewsletter(subscriptionData) {
    console.log('Mock: Newsletter subscription', subscriptionData);
    return { id: Date.now(), ...subscriptionData, subscribed_at: new Date().toISOString(), is_active: true };
  },
  
  async getNewsletterSubscribers() {
    console.log('Mock: Getting newsletter subscribers');
    return [];
  },
  
  async submitApplication(applicationData) {
    console.log('Mock: Application submitted', applicationData);
    return { id: Date.now(), ...applicationData, status: 'pending', created_at: new Date().toISOString() };
  },
  
  async getApplications() {
    console.log('Mock: Getting applications');
    return [];
  },
  
  async updateApplicationStatus(id, status) {
    console.log('Mock: Updating application status', id, status);
    return { id, status };
  },
  
  async getNews() {
    console.log('Mock: Getting news');
    return [];
  },
  
  async getNewsById(id) {
    console.log('Mock: Getting news by id', id);
    return { id, title: 'Sample News', content: 'Sample content' };
  },
  
  async createNews(newsData) {
    console.log('Mock: Creating news', newsData);
    return { id: Date.now(), ...newsData, created_at: new Date().toISOString() };
  },
  
  async updateNews(id, newsData) {
    console.log('Mock: Updating news', id, newsData);
    return { id, ...newsData };
  },
  
  async deleteNews(id) {
    console.log('Mock: Deleting news', id);
  },
  
  async getGalleryImages() {
    console.log('Mock: Getting gallery images');
    return [];
  },
  
  async uploadGalleryImage(imageData) {
    console.log('Mock: Uploading gallery image', imageData);
    return { id: Date.now(), ...imageData, created_at: new Date().toISOString() };
  },
  
  async deleteGalleryImage(id) {
    console.log('Mock: Deleting gallery image', id);
  },
  
  async signIn(email, password) {
    console.log('Mock: Sign in', email);
    return { id: 'mock-user', email };
  },
  
  async signOut() {
    console.log('Mock: Sign out');
  },
  
  async getCurrentUser() {
    console.log('Mock: Getting current user');
    return null;
  },
  
  async uploadFile(bucket, path, file) {
    console.log('Mock: Uploading file', path);
    return { path };
  },
};

// Unified database service
const { service: activeService, name: activeBackend } = getActiveService();

console.log(`Using ${activeBackend} as backend`);

// Export unified API
const db = {
  // Backend info
  getBackendName: () => activeBackend,
  isBackendConfigured: () => activeBackend !== 'Mock',
  
  // Contacts
  submitContact: (contactData) => activeService.submitContact(contactData),
  getContacts: () => activeService.getContacts(),
  
  // Newsletter
  subscribeNewsletter: (subscriptionData) => activeService.subscribeNewsletter(subscriptionData),
  getNewsletterSubscribers: () => activeService.getNewsletterSubscribers(),
  
  // Applications
  submitApplication: (applicationData) => activeService.submitApplication(applicationData),
  getApplications: () => activeService.getApplications(),
  updateApplicationStatus: (id, status) => activeService.updateApplicationStatus(id, status),
  
  // News
  getNews: () => activeService.getNews(),
  getNewsById: (id) => activeService.getNewsById(id),
  createNews: (newsData) => activeService.createNews(newsData),
  updateNews: (id, newsData) => activeService.updateNews(id, newsData),
  deleteNews: (id) => activeService.deleteNews(id),
  
  // Gallery
  getGalleryImages: () => activeService.getGalleryImages(),
  uploadGalleryImage: (imageData) => activeService.uploadGalleryImage(imageData),
  deleteGalleryImage: (id) => activeService.deleteGalleryImage(id),
  
  // Auth
  signIn: (email, password) => activeService.signIn(email, password),
  signOut: () => activeService.signOut(),
  getCurrentUser: () => activeService.getCurrentUser(),
  
  // File uploads
  uploadFile: (...args) => {
    if (activeBackend === 'Supabase') {
      return activeService.uploadFile(...args);
    } else if (activeBackend === 'Firebase') {
      // Firebase uses different signature: uploadFile(path, file)
      const [, path, file] = args;
      return activeService.uploadFile(path, file);
    } else {
      return activeService.uploadFile(...args);
    }
  },
};

export default db;

// Named exports for convenience
export const {
  getBackendName,
  isBackendConfigured,
  submitContact,
  getContacts,
  subscribeNewsletter,
  getNewsletterSubscribers,
  submitApplication,
  getApplications,
  updateApplicationStatus,
  getNews,
  getNewsById,
  createNews,
  updateNews,
  deleteNews,
  getGalleryImages,
  uploadGalleryImage,
  deleteGalleryImage,
  signIn,
  signOut,
  getCurrentUser,
  uploadFile,
} = db;
