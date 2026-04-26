import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

let supabase = null;

// Initialize Supabase client only if credentials are provided
if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
}

export default supabase;

// Supabase-specific database operations
export const supabaseService = {
  // Check if Supabase is configured
  isConfigured: () => {
    return supabase !== null;
  },

  // Contacts
  async submitContact(contactData) {
    if (!supabase) throw new Error('Supabase is not configured');
    
    const { data, error } = await supabase
      .from('contacts')
      .insert([contactData])
      .select();
    
    if (error) throw error;
    return data[0];
  },

  async getContacts() {
    if (!supabase) throw new Error('Supabase is not configured');
    
    const { data, error } = await supabase
      .from('contacts')
      .select('*')
      .order('created_at', { ascending: false});
    
    if (error) throw error;
    return data;
  },

  // Newsletter Subscriptions
  async subscribeNewsletter(subscriptionData) {
    if (!supabase) throw new Error('Supabase is not configured');
    
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .insert([subscriptionData])
      .select();
    
    if (error) {
      // Check if error is due to unique constraint (already subscribed)
      if (error.code === '23505') {
        throw new Error('This email is already subscribed to our newsletter.');
      }
      throw error;
    }
    return data[0];
  },

  async getNewsletterSubscribers() {
    if (!supabase) throw new Error('Supabase is not configured');
    
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .select('*')
      .eq('is_active', true)
      .order('subscribed_at', { ascending: false });
    
    if (error) throw error;
    return data;
  },

  // Applications
  async submitApplication(applicationData) {
    if (!supabase) throw new Error('Supabase is not configured');
    
    const { data, error } = await supabase
      .from('applications')
      .insert([applicationData])
      .select();
    
    if (error) throw error;
    return data[0];
  },

  async getApplications() {
    if (!supabase) throw new Error('Supabase is not configured');
    
    const { data, error } = await supabase
      .from('applications')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data;
  },

  async updateApplicationStatus(id, status) {
    if (!supabase) throw new Error('Supabase is not configured');
    
    const { data, error } = await supabase
      .from('applications')
      .update({ status })
      .eq('id', id)
      .select();
    
    if (error) throw error;
    return data[0];
  },

  // News
  async getNews() {
    if (!supabase) throw new Error('Supabase is not configured');
    
    const { data, error } = await supabase
      .from('news')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data;
  },

  async getNewsById(id) {
    if (!supabase) throw new Error('Supabase is not configured');
    
    const { data, error } = await supabase
      .from('news')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    return data;
  },

  async createNews(newsData) {
    if (!supabase) throw new Error('Supabase is not configured');
    
    const { data, error } = await supabase
      .from('news')
      .insert([newsData])
      .select();
    
    if (error) throw error;
    return data[0];
  },

  async updateNews(id, newsData) {
    if (!supabase) throw new Error('Supabase is not configured');
    
    const { data, error } = await supabase
      .from('news')
      .update(newsData)
      .eq('id', id)
      .select();
    
    if (error) throw error;
    return data[0];
  },

  async deleteNews(id) {
    if (!supabase) throw new Error('Supabase is not configured');
    
    const { error } = await supabase
      .from('news')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  },

  // Gallery
  async getGalleryImages() {
    if (!supabase) throw new Error('Supabase is not configured');
    
    const { data, error } = await supabase
      .from('gallery')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data;
  },

  async uploadGalleryImage(imageData) {
    if (!supabase) throw new Error('Supabase is not configured');
    
    const { data, error } = await supabase
      .from('gallery')
      .insert([imageData])
      .select();
    
    if (error) throw error;
    return data[0];
  },

  async deleteGalleryImage(id) {
    if (!supabase) throw new Error('Supabase is not configured');
    
    const { error } = await supabase
      .from('gallery')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  },

  // Auth (for admin)
  async signIn(email, password) {
    if (!supabase) throw new Error('Supabase is not configured');
    
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    
    if (error) throw error;
    return data;
  },

  async signOut() {
    if (!supabase) throw new Error('Supabase is not configured');
    
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  },

  async getCurrentUser() {
    if (!supabase) throw new Error('Supabase is not configured');
    
    const { data: { user }, error } = await supabase.auth.getUser();
    if (error) throw error;
    return user;
  },

  // Storage (for file uploads)
  async uploadFile(bucket, path, file) {
    if (!supabase) throw new Error('Supabase is not configured');
    
    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(path, file);
    
    if (error) throw error;
    return data;
  },

  async getPublicUrl(bucket, path) {
    if (!supabase) throw new Error('Supabase is not configured');
    
    const { data } = supabase.storage
      .from(bucket)
      .getPublicUrl(path);
    
    return data.publicUrl;
  },
};
