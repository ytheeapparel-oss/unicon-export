-- ==============================================================================
-- UNICON LEATHER - Supabase Database Schema
-- Run this in your Supabase SQL Editor: Dashboard > SQL Editor > New query
-- ==============================================================================

-- 1. Create Inquiries Table
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

-- 2. Create Catalogue Requests Table
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

-- ==============================================================================
-- Row Level Security (RLS) Policies
-- Allow public submissions (INSERT) via the website
-- Only authenticated users (admins) can view/select submissions
-- ==============================================================================

-- Enable RLS on both tables
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.catalogue_requests ENABLE ROW LEVEL SECURITY;

-- Allow anonymous visitors to submit an inquiry
CREATE POLICY "Allow public insert for inquiries" 
ON public.inquiries 
FOR INSERT 
WITH CHECK (true);

-- Allow authenticated users to view inquiries
CREATE POLICY "Allow authenticated read for inquiries" 
ON public.inquiries 
FOR SELECT 
TO authenticated 
USING (true);

-- Allow anonymous visitors to request catalogue
CREATE POLICY "Allow public insert for catalogue_requests" 
ON public.catalogue_requests 
FOR INSERT 
WITH CHECK (true);

-- Allow authenticated users to view catalogue requests
CREATE POLICY "Allow authenticated read for catalogue_requests" 
ON public.catalogue_requests 
FOR SELECT 
TO authenticated 
USING (true);
