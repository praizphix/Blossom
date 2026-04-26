-- Blossom High School Database Setup for Supabase
-- Run this SQL in your Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ===================================
-- CONTACTS TABLE
-- ===================================
CREATE TABLE IF NOT EXISTS contacts (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  parent_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  intended_class VARCHAR(100),
  message TEXT NOT NULL,
  status VARCHAR(50) DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Add index for faster queries
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON contacts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contacts_status ON contacts(status);

-- ===================================
-- APPLICATIONS TABLE
-- ===================================
CREATE TABLE IF NOT EXISTS applications (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  -- Student Information
  student_name VARCHAR(255) NOT NULL,
  date_of_birth DATE NOT NULL,
  gender VARCHAR(50) NOT NULL,
  intended_class VARCHAR(100) NOT NULL,
  
  -- Parent/Guardian Information
  parent_name VARCHAR(255) NOT NULL,
  relationship VARCHAR(100) NOT NULL,
  parent_email VARCHAR(255) NOT NULL,
  parent_phone VARCHAR(50) NOT NULL,
  address TEXT NOT NULL,
  
  -- Previous School Information
  previous_school VARCHAR(255),
  previous_class VARCHAR(100),
  
  -- Additional Information
  additional_info TEXT,
  terms_accepted BOOLEAN DEFAULT false,
  
  -- Application Status
  status VARCHAR(50) DEFAULT 'pending',
  notes TEXT,
  
  -- Timestamps
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Add indexes
CREATE INDEX IF NOT EXISTS idx_applications_created_at ON applications(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_applications_status ON applications(status);
CREATE INDEX IF NOT EXISTS idx_applications_email ON applications(parent_email);

-- ===================================
-- NEWSLETTER SUBSCRIBERS TABLE
-- ===================================
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  is_active BOOLEAN DEFAULT true,
  unsubscribed_at TIMESTAMP WITH TIME ZONE
);

-- Add index
CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter_subscribers(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_active ON newsletter_subscribers(is_active);

-- ===================================
-- NEWS TABLE
-- ===================================
CREATE TABLE IF NOT EXISTS news (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title VARCHAR(500) NOT NULL,
  slug VARCHAR(500) UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL,
  category VARCHAR(100),
  author VARCHAR(255),
  image_url TEXT,
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Add indexes
CREATE INDEX IF NOT EXISTS idx_news_slug ON news(slug);
CREATE INDEX IF NOT EXISTS idx_news_published ON news(published);
CREATE INDEX IF NOT EXISTS idx_news_created_at ON news(created_at DESC);

-- ===================================
-- GALLERY TABLE
-- ===================================
CREATE TABLE IF NOT EXISTS gallery (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  image_url TEXT NOT NULL,
  caption VARCHAR(500),
  category VARCHAR(100),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Add index
CREATE INDEX IF NOT EXISTS idx_gallery_category ON gallery(category);
CREATE INDEX IF NOT EXISTS idx_gallery_created_at ON gallery(created_at DESC);

-- ===================================
-- ENABLE ROW LEVEL SECURITY (RLS)
-- ===================================
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE news ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery ENABLE ROW LEVEL SECURITY;

-- ===================================
-- RLS POLICIES FOR PUBLIC INSERT
-- ===================================

-- Allow public to insert contacts
CREATE POLICY "Allow public contact submissions"
  ON contacts FOR INSERT
  TO public
  WITH CHECK (true);

-- Allow public to insert applications
CREATE POLICY "Allow public application submissions"
  ON applications FOR INSERT
  TO public
  WITH CHECK (true);

-- Allow public to insert newsletter subscriptions
CREATE POLICY "Allow public newsletter subscriptions"
  ON newsletter_subscribers FOR INSERT
  TO public
  WITH CHECK (true);

-- Allow public to read published news
CREATE POLICY "Allow public to read published news"
  ON news FOR SELECT
  TO public
  USING (published = true);

-- Allow public to read gallery
CREATE POLICY "Allow public to read gallery"
  ON gallery FOR SELECT
  TO public
  USING (true);

-- ===================================
-- RLS POLICIES FOR AUTHENTICATED USERS (ADMIN)
-- ===================================

-- Admin can read all contacts
CREATE POLICY "Allow authenticated users to read contacts"
  ON contacts FOR SELECT
  TO authenticated
  USING (true);

-- Admin can update contacts
CREATE POLICY "Allow authenticated users to update contacts"
  ON contacts FOR UPDATE
  TO authenticated
  USING (true);

-- Admin can read all applications
CREATE POLICY "Allow authenticated users to read applications"
  ON applications FOR SELECT
  TO authenticated
  USING (true);

-- Admin can update applications
CREATE POLICY "Allow authenticated users to update applications"
  ON applications FOR UPDATE
  TO authenticated
  USING (true);

-- Admin can manage news
CREATE POLICY "Allow authenticated users to manage news"
  ON news FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Admin can manage gallery
CREATE POLICY "Allow authenticated users to manage gallery"
  ON gallery FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- ===================================
-- UPDATED_AT TRIGGER FUNCTION
-- ===================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply triggers
CREATE TRIGGER update_contacts_updated_at BEFORE UPDATE ON contacts
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_applications_updated_at BEFORE UPDATE ON applications
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_news_updated_at BEFORE UPDATE ON news
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ===================================
-- SAMPLE DATA (OPTIONAL)
-- ===================================

-- Insert sample news article
INSERT INTO news (title, slug, excerpt, content, category, author, published)
VALUES (
  'Welcome to Blossom High School',
  'welcome-to-blossom-high-school',
  'We are excited to welcome you to our new website!',
  'Welcome to the official website of Blossom High School. Here you will find information about our programs, facilities, and achievements.',
  'Announcement',
  'Admin',
  true
) ON CONFLICT (slug) DO NOTHING;

-- Success message
SELECT 'Database setup completed successfully!' AS message;
