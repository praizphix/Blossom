# Supabase Setup Guide for Blossom High School

## 🚀 Quick Start

This guide will help you connect all the forms to Supabase and start receiving submissions.

## 📋 Prerequisites

- A Supabase account (free tier is sufficient)
- Node.js and npm installed
- Your Blossom High School project

## Step 1: Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Click "Start your project"
3. Sign in with GitHub, Google, or email
4. Click "New Project"
5. Fill in project details:
   - Name: `Blossom High School`
   - Database Password: (create a strong password and save it)
   - Region: Choose closest to Nigeria (e.g., Frankfurt or Singapore)
6. Click "Create new project"
7. Wait 2-3 minutes for project to be ready

## Step 2: Run Database Setup SQL

1. In your Supabase project dashboard, go to the **SQL Editor** (left sidebar)
2. Click **"New Query"**
3. Open the file `supabase-setup.sql` from your project root
4. Copy ALL the SQL content
5. Paste it into the Supabase SQL Editor
6. Click **"Run"** (or press Ctrl+Enter)
7. You should see: "Database setup completed successfully!"

This will create:
- ✅ `contacts` table (for contact form submissions)
- ✅ `applications` table (for admissions applications)
- ✅ `newsletter_subscribers` table (for newsletter signups)
- ✅ `news` table (for news articles)
- ✅ `gallery` table (for photo gallery)
- ✅ Row Level Security (RLS) policies
- ✅ Automatic triggers for timestamps

## Step 3: Get Your API Credentials

1. Go to **Project Settings** (gear icon in left sidebar)
2. Click on **API** in the left menu
3. You'll see:
   - **Project URL**: `https://xxxxx.supabase.co`
   - **anon/public key**: A long string starting with `eyJ...`

## Step 4: Configure Environment Variables

1. In your project root, create a file named `.env`:
   ```bash
   touch .env
   ```

2. Open `.env` and add your credentials:
   ```env
   # Supabase Configuration
   VITE_SUPABASE_URL=https://xxxxx.supabase.co
   VITE_SUPABASE_ANON_KEY=your_anon_key_here

   # Site Configuration
   VITE_SITE_URL=http://localhost:5173
   VITE_WHATSAPP_NUMBER=+2348027585609
   ```

3. Replace:
   - `https://xxxxx.supabase.co` with your actual Project URL
   - `your_anon_key_here` with your actual anon/public key

4. **Important**: Never commit `.env` to git! It's already in `.gitignore`

## Step 5: Install Dependencies & Start Dev Server

```bash
# Install dependencies (if not already done)
npm install

# Start development server
npm run dev
```

Your site should open at http://localhost:5173

## Step 6: Test the Forms

### Test Contact Form
1. Go to http://localhost:5173/contact
2. Fill out the contact inquiry form
3. Click "Submit Inquiry"
4. You should see a green success message
5. In Supabase: Go to **Table Editor** > **contacts** > You should see your submission!

### Test Admissions Form
1. Go to http://localhost:5173/admissions
2. Scroll down to the application form
3. Fill out all required fields (marked with *)
4. Check the terms and conditions checkbox
5. Click "Submit Application"
6. You should see a green success message
7. In Supabase: Go to **Table Editor** > **applications** > You should see your application!

### Test Newsletter Subscription
1. Scroll to the bottom of any page (footer)
2. Enter an email in the newsletter field
3. Click the send button
4. You should see "Subscribed successfully!" message
5. In Supabase: Go to **Table Editor** > **newsletter_subscribers** > You should see your subscription!

## Step 7: View Submissions in Supabase Dashboard

### Method 1: Table Editor (Simple View)
1. Go to **Table Editor** in left sidebar
2. Click on any table (e.g., `contacts`, `applications`)
3. You'll see all submissions in a spreadsheet-like view
4. You can search, filter, and export data

### Method 2: SQL Editor (Advanced Queries)
```sql
-- Get all contacts from the last 7 days
SELECT * FROM contacts 
WHERE created_at > NOW() - INTERVAL '7 days'
ORDER BY created_at DESC;

-- Get all pending applications
SELECT * FROM applications 
WHERE status = 'pending'
ORDER BY created_at DESC;

-- Get newsletter subscriber count
SELECT COUNT(*) as total_subscribers 
FROM newsletter_subscribers 
WHERE is_active = true;
```

## 🔒 Security Features

All tables have Row Level Security (RLS) enabled:

- **Public can**: Submit forms (INSERT only)
- **Authenticated users can**: View and manage all submissions (SELECT, UPDATE)
- **Data is protected**: No one can read submissions without authentication

## 📧 Email Notifications (Optional)

To receive email notifications when forms are submitted, you can:

### Option 1: Use Supabase Database Webhooks
1. Go to **Database** > **Webhooks**
2. Create webhook for each table (contacts, applications, newsletter_subscribers)
3. Set trigger to "INSERT"
4. Point to a service like Zapier, Make, or n8n
5. Configure email notifications

### Option 2: Use Supabase Edge Functions
1. Create a function that sends emails when data is inserted
2. Use services like SendGrid, Mailgun, or Resend
3. Trigger the function on INSERT events

### Option 3: Use External Service
- Set up Zapier with Supabase trigger
- Configure Gmail/Outlook action to send emails
- Free tier includes 100 tasks/month

## 🎯 Production Deployment

When deploying to production (Vercel, Netlify, etc.):

1. Add environment variables to your hosting platform:
   ```
   VITE_SUPABASE_URL=https://xxxxx.supabase.co
   VITE_SUPABASE_ANON_KEY=your_anon_key
   VITE_SITE_URL=https://www.bhsibadan.ng
   ```

2. Update CORS settings in Supabase:
   - Go to **Authentication** > **URL Configuration**
   - Add your production URL to allowed list

3. Update RLS policies if needed for your production domain

## 📊 Database Backups

Supabase automatically backs up your database:
- **Free tier**: Daily backups, 7-day retention
- **Pro tier**: Point-in-time recovery

To manually backup:
1. Go to **Database** > **Backups**
2. Click "Trigger backup now"

## 🐛 Troubleshooting

### Forms not submitting?
```bash
# Check browser console for errors (F12 or Cmd+Option+I)
# Common issues:
- Missing .env file
- Incorrect API credentials
- Tables not created (run SQL setup again)
```

### "Supabase is not configured" error?
```bash
# Check that .env file exists and has correct format
# Restart dev server after creating/editing .env:
npm run dev
```

### Can't see submissions in Supabase?
```bash
# Verify you ran the SQL setup:
# 1. Go to SQL Editor
# 2. Run: SELECT * FROM contacts LIMIT 5;
# 3. If error: "relation 'contacts' does not exist"
#    → Run the supabase-setup.sql file again
```

### Newsletter subscription fails with "already subscribed"?
```bash
# This is expected! The email column has a UNIQUE constraint
# Each email can only subscribe once
# Users will see: "This email is already subscribed to our newsletter."
```

## 📚 Additional Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Supabase JavaScript Client](https://supabase.com/docs/reference/javascript)
- [Row Level Security Guide](https://supabase.com/docs/guides/auth/row-level-security)

## 🎉 Success!

Your forms are now connected to Supabase and ready to receive submissions!

**What's working:**
- ✅ Contact Form → Saves to `contacts` table
- ✅ Admissions Application → Saves to `applications` table
- ✅ Newsletter Subscription → Saves to `newsletter_subscribers` table
- ✅ Loading states and success/error messages
- ✅ Form validation
- ✅ Secure data storage with RLS

**Next steps:**
1. Test all forms thoroughly
2. Set up email notifications (optional)
3. Create admin panel to view submissions (optional)
4. Deploy to production

---

**Need help?** Contact info@bhsibadan.ng or review the Supabase documentation.
