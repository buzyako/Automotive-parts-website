"use client"

import type React from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { usePathname } from "next/navigation"
import Header from "@/components/header"

export default function CategoriesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const categoryName = pathname.split("/").pop()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto py-3 px-4">
          <div className="flex items-center text-sm">
            <Link href="/" className="text-gray-500 hover:text-[#007BFF]">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 text-gray-400" />
            <Link href="/categories" className="text-gray-500 hover:text-[#007BFF]">
              Categories
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 text-gray-400" />
            <span className="text-gray-900 font-medium">{categoryName}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      {children}
    </div>
  )
}
