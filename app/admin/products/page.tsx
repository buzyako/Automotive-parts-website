import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import ProductList from "@/components/admin/product-list"

export const metadata = {
  title: "Manage Products | Admin Dashboard",
  description: "Manage products for PyeSakto.ph automotive parts website",
}

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: { page?: string; query?: string; category?: string; brand?: string }
}) {
  const supabase = createServerComponentClient({ cookies })

  const page = Number.parseInt(searchParams.page || "1")
  const pageSize = 10
  const offset = (page - 1) * pageSize

  // Build the query
  let query = supabase.from("products").select(
    `
      *,
      brands(id, name),
      categories(id, name)
    `,
    { count: "exact" },
  )

  // Apply filters if they exist
  if (searchParams.query) {
    query = query.or(`name.ilike.%${searchParams.query}%,sku.ilike.%${searchParams.query}%`)
  }

  if (searchParams.category) {
    query = query.eq("category_id", searchParams.category)
  }

  if (searchParams.brand) {
    query = query.eq("brand_id", searchParams.brand)
  }

  // Get paginated results
  const {
    data: products,
    count,
    error,
  } = await query.order("created_at", { ascending: false }).range(offset, offset + pageSize - 1)

  if (error) {
    console.error("Error fetching products:", error)
  }

  // Get all categories for the filter dropdown
  const { data: categories } = await supabase.from("categories").select("id, name").order("name")

  // Get all brands for the filter dropdown
  const { data: brands } = await supabase.from("brands").select("id, name").order("name")

  return (
    <ProductList
      products={products || []}
      categories={categories || []}
      brands={brands || []}
      totalCount={count || 0}
      currentPage={page}
      pageSize={pageSize}
      searchQuery={searchParams.query || ""}
      selectedCategory={searchParams.category || ""}
      selectedBrand={searchParams.brand || ""}
    />
  )
}
