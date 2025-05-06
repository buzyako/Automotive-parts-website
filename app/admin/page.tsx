import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import AdminDashboard from "@/components/admin/admin-dashboard"

export default async function AdminPage() {
  const supabase = createServerComponentClient({ cookies })

  // Get counts for dashboard stats
  const [
    { count: productCount = 0 },
    { count: categoryCount = 0 },
    { count: brandCount = 0 },
    { count: orderCount = 0 },
  ] = await Promise.all([
    supabase.from("products").select("*", { count: "exact", head: true }),
    supabase.from("categories").select("*", { count: "exact", head: true }),
    supabase.from("brands").select("*", { count: "exact", head: true }),
    supabase.from("orders").select("*", { count: "exact", head: true }),
  ])

  // Get recent products
  const { data: recentProducts = [] } = await supabase
    .from("products")
    .select(`
      id,
      name,
      price,
      sku,
      stock,
      images,
      created_at,
      brands(name),
      categories(name)
    `)
    .order("created_at", { ascending: false })
    .limit(5)

  // Get recent orders
  const { data: recentOrders = [] } = await supabase
    .from("orders")
    .select(`
      id,
      status,
      total_amount,
      created_at
    `)
    .order("created_at", { ascending: false })
    .limit(5)

  return (
    <AdminDashboard
      stats={{
        productCount,
        categoryCount,
        brandCount,
        orderCount,
      }}
      recentProducts={recentProducts}
      recentOrders={recentOrders}
    />
  )
}
