-- Supabase SQL Schema for Schronisko Orzechowce

-- Create pets table
CREATE TABLE IF NOT EXISTS pets (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  species VARCHAR(50) NOT NULL CHECK (species IN ('dog', 'cat', 'other')),
  age INTEGER,
  sex VARCHAR(10) CHECK (sex IN ('male', 'female')),
  description TEXT,
  image_urls TEXT[],
  status VARCHAR(20) DEFAULT 'available' CHECK (status IN ('available', 'adopted', 'reserved')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_pets_species ON pets(species);
CREATE INDEX IF NOT EXISTS idx_pets_status ON pets(status);
CREATE INDEX IF NOT EXISTS idx_pets_created_at ON pets(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE pets ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access (anyone can view available pets)
CREATE POLICY "Public can view available pets" ON pets
  FOR SELECT
  USING (status = 'available' OR auth.role() = 'authenticated');

-- Create policy for admin insert (authenticated users can add pets)
CREATE POLICY "Authenticated users can insert pets" ON pets
  FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');

-- Create policy for admin update (authenticated users can update pets)
CREATE POLICY "Authenticated users can update pets" ON pets
  FOR UPDATE
  USING (auth.role() = 'authenticated');

-- Create policy for admin delete (authenticated users can delete pets)
CREATE POLICY "Authenticated users can delete pets" ON pets
  FOR DELETE
  USING (auth.role() = 'authenticated');

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_pets_updated_at
  BEFORE UPDATE ON pets
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Insert sample data (optional)
INSERT INTO pets (name, species, age, sex, description, status) VALUES
  ('Luna', 'dog', 3, 'female', 'Przyjazna suczka, świetnie dogaduje się z dziećmi. Kocha spacery i zabawy na świeżym powietrzu.', 'available'),
  ('Max', 'dog', 5, 'male', 'Spokojny i łagodny pies, idealny dla starszych osób. Lubi długie spacery.', 'available'),
  ('Mruczek', 'cat', 2, 'male', 'Przemiły kotek, uwielbia głaskanie. Szuka spokojnego domu.', 'available'),
  ('Bella', 'cat', 1, 'female', 'Młoda, energiczna kotka. Bardzo towarzyska i zabawowa.', 'available'),
  ('Rex', 'dog', 4, 'male', 'Duży i silny, ale bardzo łagodny. Wymaga aktywnego właściciela.', 'available');
