import type React from "react"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import AdminSidebar from "@/components/admin/admin-sidebar"

export const metadata = {
  title: "Admin Dashboard | PyeSakto.ph",
  description: "Admin dashboard for PyeSakto.ph automotive parts website",
}

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = createServerComponentClient({ cookies })

  // Get the current user session
  const {
    data: { session },
  } = await supabase.auth.getSession()

  // If no session exists, redirect to the login page
  if (!session) {
    redirect("/admin/login")
  }

  // Check if the user has admin role
  const { data: userRole } = await supabase.from("user_roles").select("role").eq("user_id", session.user.id).single()

  // If the user is not an admin, redirect to the home page
  if (!userRole || userRole.role !== "admin") {
    redirect("/")
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />
      <div className="flex-1 p-8 overflow-auto">{children}</div>
    </div>
  )
}
