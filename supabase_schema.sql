-- SQL Schema to create tables in your Supabase database.
-- Go to your Supabase Dashboard, open the "SQL Editor", paste this script, and click "Run".

-- 1. PROPERTIES TABLE (For Listing Properties)
CREATE TABLE IF NOT EXISTS public.properties (
    id BIGSERIAL PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    title TEXT NOT NULL,
    location TEXT NOT NULL,
    price TEXT NOT NULL,
    status TEXT NOT NULL CHECK (status IN ('For Sale', 'For Rent')),
    type TEXT NOT NULL CHECK (type IN ('House', 'Apartment', 'Villa', 'Commercial')),
    beds INT NOT NULL,
    baths INT NOT NULL,
    sqft TEXT NOT NULL,
    garage INT,
    description TEXT,
    images TEXT[] -- Array of image URLs
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.properties ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anonymous inserts (for submissions)
CREATE POLICY "Allow anonymous inserts to properties" 
ON public.properties FOR INSERT 
TO anon 
WITH CHECK (true);

-- Create policy to allow public reads
CREATE POLICY "Allow public reads of properties" 
ON public.properties FOR SELECT 
TO anon 
USING (true);


-- 2. CONTACT MESSAGES TABLE (For Contact Form)
CREATE TABLE IF NOT EXISTS public.contact_messages (
    id BIGSERIAL PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    subject TEXT NOT NULL,
    message TEXT NOT NULL
);

-- Enable RLS
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anonymous inserts (for contact messages)
CREATE POLICY "Allow anonymous inserts to contact_messages" 
ON public.contact_messages FOR INSERT 
TO anon 
WITH CHECK (true);


-- 3. NEWSLETTER SUBSCRIPTIONS TABLE (For Footer Newsletter)
CREATE TABLE IF NOT EXISTS public.newsletter_subscriptions (
    id BIGSERIAL PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    email TEXT UNIQUE NOT NULL
);

-- Enable RLS
ALTER TABLE public.newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anonymous inserts (for newsletter subscriptions)
CREATE POLICY "Allow anonymous inserts to newsletter_subscriptions" 
ON public.newsletter_subscriptions FOR INSERT 
TO anon 
WITH CHECK (true);
