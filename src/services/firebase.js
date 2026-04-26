import { initializeApp } from 'firebase/app';
import { 
  getFirestore, 
  collection, 
  addDoc, 
  getDocs, 
  getDoc, 
  doc, 
  updateDoc, 
  deleteDoc, 
  query, 
  orderBy,
  where 
} from 'firebase/firestore';
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  signOut as firebaseSignOut,
  onAuthStateChanged 
} from 'firebase/auth';
import { 
  getStorage, 
  ref, 
  uploadBytes, 
  getDownloadURL 
} from 'firebase/storage';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

let app = null;
let db = null;
let auth = null;
let storage = null;

// Initialize Firebase only if config is provided
const isConfigured = Object.values(firebaseConfig).every(val => val);

if (isConfigured) {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
  auth = getAuth(app);
  storage = getStorage(app);
}

export { auth, db, storage };

// Firebase-specific database operations
export const firebaseService = {
  // Check if Firebase is configured
  isConfigured: () => {
    return isConfigured;
  },

  // Contacts
  async submitContact(contactData) {
    if (!db) throw new Error('Firebase is not configured');
    
    const docRef = await addDoc(collection(db, 'contacts'), {
      ...contactData,
      created_at: new Date().toISOString(),
    });
    
    return { id: docRef.id, ...contactData };
  },

  async getContacts() {
    if (!db) throw new Error('Firebase is not configured');
    
    const q = query(collection(db, 'contacts'), orderBy('created_at', 'desc'));
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
  },

  // Applications
  async submitApplication(applicationData) {
    if (!db) throw new Error('Firebase is not configured');
    
    const docRef = await addDoc(collection(db, 'applications'), {
      ...applicationData,
      status: 'pending',
      created_at: new Date().toISOString(),
    });
    
    return { id: docRef.id, ...applicationData };
  },

  async getApplications() {
    if (!db) throw new Error('Firebase is not configured');
    
    const q = query(collection(db, 'applications'), orderBy('created_at', 'desc'));
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
  },

  async updateApplicationStatus(id, status) {
    if (!db) throw new Error('Firebase is not configured');
    
    const docRef = doc(db, 'applications', id);
    await updateDoc(docRef, { status });
    
    const docSnap = await getDoc(docRef);
    return { id: docSnap.id, ...docSnap.data() };
  },

  // News
  async getNews() {
    if (!db) throw new Error('Firebase is not configured');
    
    const q = query(collection(db, 'news'), orderBy('created_at', 'desc'));
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
  },

  async getNewsById(id) {
    if (!db) throw new Error('Firebase is not configured');
    
    const docRef = doc(db, 'news', id);
    const docSnap = await getDoc(docRef);
    
    if (!docSnap.exists()) {
      throw new Error('News not found');
    }
    
    return { id: docSnap.id, ...docSnap.data() };
  },

  async createNews(newsData) {
    if (!db) throw new Error('Firebase is not configured');
    
    const docRef = await addDoc(collection(db, 'news'), {
      ...newsData,
      created_at: new Date().toISOString(),
    });
    
    return { id: docRef.id, ...newsData };
  },

  async updateNews(id, newsData) {
    if (!db) throw new Error('Firebase is not configured');
    
    const docRef = doc(db, 'news', id);
    await updateDoc(docRef, newsData);
    
    const docSnap = await getDoc(docRef);
    return { id: docSnap.id, ...docSnap.data() };
  },

  async deleteNews(id) {
    if (!db) throw new Error('Firebase is not configured');
    
    await deleteDoc(doc(db, 'news', id));
  },

  // Gallery
  async getGalleryImages() {
    if (!db) throw new Error('Firebase is not configured');
    
    const q = query(collection(db, 'gallery'), orderBy('created_at', 'desc'));
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
  },

  async uploadGalleryImage(imageData) {
    if (!db) throw new Error('Firebase is not configured');
    
    const docRef = await addDoc(collection(db, 'gallery'), {
      ...imageData,
      created_at: new Date().toISOString(),
    });
    
    return { id: docRef.id, ...imageData };
  },

  async deleteGalleryImage(id) {
    if (!db) throw new Error('Firebase is not configured');
    
    await deleteDoc(doc(db, 'gallery', id));
  },

  // Auth (for admin)
  async signIn(email, password) {
    if (!auth) throw new Error('Firebase is not configured');
    
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  },

  async signOut() {
    if (!auth) throw new Error('Firebase is not configured');
    
    await firebaseSignOut(auth);
  },

  async getCurrentUser() {
    if (!auth) throw new Error('Firebase is not configured');
    
    return new Promise((resolve) => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        unsubscribe();
        resolve(user);
      });
    });
  },

  // Storage (for file uploads)
  async uploadFile(path, file) {
    if (!storage) throw new Error('Firebase is not configured');
    
    const storageRef = ref(storage, path);
    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);
    
    return downloadURL;
  },

  onAuthStateChanged: (callback) => {
    if (!auth) throw new Error('Firebase is not configured');
    return onAuthStateChanged(auth, callback);
  },
};
