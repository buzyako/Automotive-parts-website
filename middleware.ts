import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  // Refresh session if expired
  const {
    data: { session },
  } = await supabase.auth.getSession()

  // If accessing admin routes, check for authentication
  if (req.nextUrl.pathname.startsWith("/admin")) {
    // Skip the login page check
    if (req.nextUrl.pathname === "/admin/login") {
      // If already logged in and trying to access login page, redirect to admin dashboard
      if (session) {
        return NextResponse.redirect(new URL("/admin", req.url))
      }
      return res
    }

    // For all other admin routes, require authentication
    if (!session) {
      return NextResponse.redirect(new URL("/admin/login", req.url))
    }

    // Check if user has admin role
    const { data: userRole } = await supabase.from("user_roles").select("role").eq("user_id", session.user.id).single()

    if (!userRole || userRole.role !== "admin") {
      // If not admin, redirect to home page
      return NextResponse.redirect(new URL("/", req.url))
    }
  }

  return res
}

export const config = {
  matcher: ["/admin/:path*"],
}
