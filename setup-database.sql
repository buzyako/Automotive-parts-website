-- Check if UUID extension is available and enable it if not
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create vehicle_makes table if it doesn't exist
CREATE TABLE IF NOT EXISTS vehicle_makes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(100) NOT NULL,
  local_name VARCHAR(100),
  country_of_origin VARCHAR(50),
  logo_url TEXT,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create vehicle_models table if it doesn't exist
CREATE TABLE IF NOT EXISTS vehicle_models (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  make_id UUID REFERENCES vehicle_makes(id),
  name VARCHAR(100) NOT NULL,
  local_name VARCHAR(100),
  body_type VARCHAR(50),
  year_introduced INTEGER,
  year_discontinued INTEGER,
  is_ph_specific BOOLEAN DEFAULT FALSE,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create vehicle_variants table if it doesn't exist
CREATE TABLE IF NOT EXISTS vehicle_variants (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  model_id UUID REFERENCES vehicle_models(id),
  variant_name VARCHAR(100) NOT NULL,
  year INTEGER NOT NULL,
  engine_type VARCHAR(100),
  transmission_type VARCHAR(50),
  drive_type VARCHAR(20),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create vehicle_compatibility table if it doesn't exist
CREATE TABLE IF NOT EXISTS vehicle_compatibility (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  part_id UUID REFERENCES parts(id),
  vehicle_variant_id UUID REFERENCES vehicle_variants(id),
  compatibility_type VARCHAR(30) DEFAULT 'Direct Fit',
  notes TEXT,
  requires_modification BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(part_id, vehicle_variant_id)
);

-- Insert sample data for vehicle makes
INSERT INTO vehicle_makes (name, local_name, country_of_origin, logo_url)
VALUES
  ('Toyota', NULL, 'Japan', '/toyota-logo.png'),
  ('Mitsubishi', NULL, 'Japan', '/mitsubishi-logo.png'),
  ('Honda', NULL, 'Japan', '/honda-logo.png'),
  ('Nissan', NULL, 'Japan', '/nissan-logo.png'),
  ('Hyundai', NULL, 'South Korea', '/hyundai-logo.png')
ON CONFLICT (id) DO NOTHING;
