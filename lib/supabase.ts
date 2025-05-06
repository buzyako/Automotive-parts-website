import { createClient } from "@supabase/supabase-js"

// These environment variables need to be set in your .env.local file
// You'll get these values when you create a Supabase project
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""

// Create a single supabase client for the entire app
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for our database tables
export type Product = {
  id: string
  created_at?: string
  name: string
  description: string
  price: number
  original_price?: number
  discount?: number
  sku: string
  brand: string
  category: string
  stock: number
  rating?: number
  review_count?: number
  compatibility?: string[]
  features?: string[]
  specifications?: Record<string, string>
  images?: string[]
  installation_guide?: string
  warranty?: string
  shipping?: string
  return_policy?: string
}

export type Category = {
  id: string
  name: string
  slug: string
  description?: string
  parent_id?: string
  image_url?: string
}

export type Brand = {
  id: string
  name: string
  slug: string
  logo_url?: string
  description?: string
}

// Helper functions for working with products
export async function getAllProducts(): Promise<Product[]> {
  const { data, error } = await supabase.from("products").select("*").order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching products:", error)
    return []
  }

  return data || []
}

export async function getProductById(id: string): Promise<Product | null> {
  const { data, error } = await supabase.from("products").select("*").eq("id", id).single()

  if (error) {
    console.error(`Error fetching product with id ${id}:`, error)
    return null
  }

  return data
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  const { data, error } = await supabase.from("products").select("*").eq("category", category)

  if (error) {
    console.error(`Error fetching products in category ${category}:`, error)
    return []
  }

  return data || []
}

export async function createProduct(product: Omit<Product, "id" | "created_at">): Promise<Product | null> {
  const { data, error } = await supabase.from("products").insert([product]).select().single()

  if (error) {
    console.error("Error creating product:", error)
    return null
  }

  return data
}

export async function updateProduct(id: string, updates: Partial<Product>): Promise<Product | null> {
  const { data, error } = await supabase.from("products").update(updates).eq("id", id).select().single()

  if (error) {
    console.error(`Error updating product with id ${id}:`, error)
    return null
  }

  return data
}

export async function deleteProduct(id: string): Promise<boolean> {
  const { error } = await supabase.from("products").delete().eq("id", id)

  if (error) {
    console.error(`Error deleting product with id ${id}:`, error)
    return false
  }

  return true
}

// Helper functions for working with categories
export async function getAllCategories(): Promise<Category[]> {
  const { data, error } = await supabase.from("categories").select("*").order("name", { ascending: true })

  if (error) {
    console.error("Error fetching categories:", error)
    return []
  }

  return data || []
}

// Helper functions for working with brands
export async function getAllBrands(): Promise<Brand[]> {
  const { data, error } = await supabase.from("brands").select("*").order("name", { ascending: true })

  if (error) {
    console.error("Error fetching brands:", error)
    return []
  }

  return data || []
}

// Upload an image to Supabase Storage
export async function uploadProductImage(file: File, productId: string): Promise<string | null> {
  const fileExt = file.name.split(".").pop()
  const fileName = `${productId}-${Date.now()}.${fileExt}`
  const filePath = `product-images/${fileName}`

  const { error } = await supabase.storage.from("products").upload(filePath, file)

  if (error) {
    console.error("Error uploading image:", error)
    return null
  }

  const { data } = supabase.storage.from("products").getPublicUrl(filePath)

  return data.publicUrl
}
