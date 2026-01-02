-- Migration: Add image_urls column and remove image_url from pets table
-- This consolidates to using only image_urls array for all pet images

-- Add image_urls column if it doesn't exist
ALTER TABLE pets 
ADD COLUMN IF NOT EXISTS image_urls TEXT[];

-- Copy existing image_url data to image_urls array (if image_url exists and image_urls is empty)
UPDATE pets 
SET image_urls = ARRAY[image_url]
WHERE image_url IS NOT NULL 
  AND image_url != ''
  AND (image_urls IS NULL OR array_length(image_urls, 1) IS NULL);

-- Drop the old image_url column
ALTER TABLE pets 
DROP COLUMN IF EXISTS image_url;

-- Add comment for documentation
COMMENT ON COLUMN pets.image_urls IS 'Array of image URLs for the pet (first image is primary)';
