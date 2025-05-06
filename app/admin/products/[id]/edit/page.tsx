import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { notFound } from "next/navigation"
import ProductForm from "@/components/admin/product-form"

export const metadata = {
  title: "Edit Product | Admin Dashboard",
  description: "Edit a product on PyeSakto.ph automotive parts website",
}

export default async function EditProductPage({
  params,
}: {
  params: { id: string }
}) {
  const supabase = createServerComponentClient({ cookies })

  // Get the product data
  const { data: product, error } = await supabase
    .from("products")
    .select(`
      *,
      brands(id, name),
      categories(id, name)
    `)
    .eq("id", params.id)
    .single()

  if (error || !product) {
    notFound()
  }

  // Get all categories and brands for the form dropdowns
  const [{ data: categories }, { data: brands }] = await Promise.all([
    supabase.from("categories").select("id, name").order("name"),
    supabase.from("brands").select("id, name").order("name"),
  ])

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Edit Product: {product.name}</h1>
      <ProductForm product={product} categories={categories || []} brands={brands || []} />
    </div>
  )
}
