import { createClient } from "@supabase/supabase-js"
import type { Database } from "@/types/supabase"

// Create a singleton instance of the Supabase client
let supabaseInstance: ReturnType<typeof createClient<Database>> | null = null

export function createClientComponentClient() {
  if (supabaseInstance) return supabaseInstance

  supabaseInstance = createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  )

  return supabaseInstance
}

// Types based on our database schema
export type Product = {
  id: string
  name: string
  description: string | null
  price: number
  original_price: number | null
  discount: number | null
  sku: string
  brand_id: string | null
  category_id: string | null
  stock: number
  rating: number | null
  review_count: number | null
  compatibility: string[] | null
  features: string[] | null
  specifications: Record<string, string> | null
  images: string[] | null
  installation_guide: string | null
  warranty: string | null
  shipping: string | null
  return_policy: string | null
  created_at: string
  updated_at: string
  brand?: Brand
  category?: Category
}

export type Category = {
  id: string
  name: string
  slug: string
  description: string | null
  parent_id: string | null
  image_url: string | null
  created_at: string
  updated_at: string
  parent?: Category
  children?: Category[]
}

export type Brand = {
  id: string
  name: string
  slug: string
  logo_url: string | null
  description: string | null
  created_at: string
  updated_at: string
}

export type Order = {
  id: string
  user_id: string | null
  status: string
  total_amount: number
  shipping_address: any
  payment_details: any
  created_at: string
  updated_at: string
  items?: OrderItem[]
  user?: any
}

export type OrderItem = {
  id: string
  order_id: string
  product_id: string
  quantity: number
  price: number
  created_at: string
  product?: Product
}
