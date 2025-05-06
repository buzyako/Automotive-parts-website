"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, Package, Tag, ShoppingCart, Users, Settings, LogOut, Layers } from "lucide-react"

export default function AdminSidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const supabase = createClientComponentClient()

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push("/admin/login")
  }

  const navItems = [
    {
      name: "Dashboard",
      href: "/admin",
      icon: <LayoutDashboard className="mr-2 h-4 w-4" />,
    },
    {
      name: "Products",
      href: "/admin/products",
      icon: <Package className="mr-2 h-4 w-4" />,
    },
    {
      name: "Categories",
      href: "/admin/categories",
      icon: <Tag className="mr-2 h-4 w-4" />,
    },
    {
      name: "Brands",
      href: "/admin/brands",
      icon: <Layers className="mr-2 h-4 w-4" />,
    },
    {
      name: "Orders",
      href: "/admin/orders",
      icon: <ShoppingCart className="mr-2 h-4 w-4" />,
    },
    {
      name: "Customers",
      href: "/admin/customers",
      icon: <Users className="mr-2 h-4 w-4" />,
    },
    {
      name: "Settings",
      href: "/admin/settings",
      icon: <Settings className="mr-2 h-4 w-4" />,
    },
  ]

  return (
    <div className="w-64 bg-white border-r min-h-screen p-4">
      <div className="flex items-center justify-center mb-8 pt-4">
        <Link href="/admin" className="text-xl font-bold text-[#C8102E]">
          PyeSakto Admin
        </Link>
      </div>

      <nav className="space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center px-4 py-2 text-sm rounded-md transition-colors",
              pathname === item.href || pathname.startsWith(`${item.href}/`)
                ? "bg-[#C8102E] text-white"
                : "text-gray-700 hover:bg-gray-100",
            )}
          >
            {item.icon}
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="absolute bottom-4 left-4 right-4">
        <Button variant="outline" className="w-full flex items-center justify-center" onClick={handleSignOut}>
          <LogOut className="mr-2 h-4 w-4" />
          Sign Out
        </Button>
      </div>
    </div>
  )
}
