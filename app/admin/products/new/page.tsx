import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import ProductForm from "@/components/admin/product-form"

export const metadata = {
  title: "Add New Product | Admin Dashboard",
  description: "Add a new product to PyeSakto.ph automotive parts website",
}

export default async function NewProductPage() {
  const supabase = createServerComponentClient({ cookies })

  // Get all categories and brands for the form dropdowns
  const [{ data: categories }, { data: brands }] = await Promise.all([
    supabase.from("categories").select("id, name").order("name"),
    supabase.from("brands").select("id, name").order("name"),
  ])

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Add New Product</h1>
      <ProductForm categories={categories || []} brands={brands || []} />
    </div>
  )
}
