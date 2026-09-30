-- ==============================================================================
-- UNICON LEATHER - Supabase Database Schema & RLS Fix
-- Run this in your Supabase Dashboard:
-- 1. Go to https://supabase.com/dashboard/project/ijnkzcxbxlyekpwvzrqo
-- 2. Click "SQL Editor" in the left sidebar
-- 3. Click "New query", paste everything below, and click "Run"
-- ==============================================================================

-- 1. Create Inquiries Table (if not exists)
CREATE TABLE IF NOT EXISTS public.inquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
    buyer_name TEXT NOT NULL,
    company_name TEXT NOT NULL,
    business_email TEXT NOT NULL,
    phone_or_whatsapp TEXT NOT NULL,
    country TEXT NOT NULL,
    company_website TEXT,
    product_category TEXT,
    required_quantity TEXT,
    target_price_range TEXT,
    expected_delivery_date TEXT,
    customization_requirements TEXT,
    message TEXT,
    inquiry_type TEXT DEFAULT 'bulk',
    product_slug TEXT,
    file_attachment_url TEXT,
    status TEXT DEFAULT 'new'
);

-- 2. Create Catalogue Requests Table (if not exists)
CREATE TABLE IF NOT EXISTS public.catalogue_requests (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
    full_name TEXT NOT NULL,
    company_name TEXT NOT NULL,
    business_email TEXT NOT NULL,
    country TEXT NOT NULL,
    interests TEXT[] DEFAULT '{}',
    estimated_annual_volume TEXT,
    status TEXT DEFAULT 'pending'
);

-- 3. Grant schema permissions to anon (public website visitors) and authenticated
GRANT USAGE ON SCHEMA public TO anon, authenticated, service_role;
GRANT ALL ON TABLE public.inquiries TO anon, authenticated, service_role;
GRANT ALL ON TABLE public.catalogue_requests TO anon, authenticated, service_role;

-- 4. Drop any conflicting existing policies
DROP POLICY IF EXISTS "Allow public insert for inquiries" ON public.inquiries;
DROP POLICY IF EXISTS "Allow authenticated read for inquiries" ON public.inquiries;
DROP POLICY IF EXISTS "Allow anon and auth insert for inquiries" ON public.inquiries;
DROP POLICY IF EXISTS "Allow read for inquiries" ON public.inquiries;
DROP POLICY IF EXISTS "Enable insert for all users" ON public.inquiries;
DROP POLICY IF EXISTS "Enable insert for anon" ON public.inquiries;

DROP POLICY IF EXISTS "Allow public insert for catalogue_requests" ON public.catalogue_requests;
DROP POLICY IF EXISTS "Allow authenticated read for catalogue_requests" ON public.catalogue_requests;
DROP POLICY IF EXISTS "Allow anon and auth insert for catalogue_requests" ON public.catalogue_requests;
DROP POLICY IF EXISTS "Allow read for catalogue_requests" ON public.catalogue_requests;
DROP POLICY IF EXISTS "Enable insert for all users" ON public.catalogue_requests;
DROP POLICY IF EXISTS "Enable insert for anon" ON public.catalogue_requests;

-- 5. Enable Row Level Security (RLS)
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.catalogue_requests ENABLE ROW LEVEL SECURITY;

-- 6. Allow anonymous visitors and authenticated users to INSERT inquiries
CREATE POLICY "Allow anon and auth insert for inquiries" 
ON public.inquiries 
FOR INSERT 
TO anon, authenticated, service_role
WITH CHECK (true);

-- 7. Allow authenticated admins and service role to view inquiries
CREATE POLICY "Allow read for inquiries" 
ON public.inquiries 
FOR SELECT 
TO authenticated, service_role 
USING (true);

-- 8. Allow anonymous visitors and authenticated users to INSERT catalogue requests
CREATE POLICY "Allow anon and auth insert for catalogue_requests" 
ON public.catalogue_requests 
FOR INSERT 
TO anon, authenticated, service_role
WITH CHECK (true);

-- 9. Allow authenticated admins and service role to view catalogue requests
CREATE POLICY "Allow read for catalogue_requests" 
ON public.catalogue_requests 
FOR SELECT 
TO authenticated, service_role 
USING (true);

-- ==============================================================================
-- NOTE: If you still ever face an RLS block, you can also run:
-- ALTER TABLE public.inquiries DISABLE ROW LEVEL SECURITY;
-- ALTER TABLE public.catalogue_requests DISABLE ROW LEVEL SECURITY;
-- ==============================================================================
