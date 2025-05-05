"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, ShoppingCart } from "lucide-react"
import { useSearchParams } from "next/navigation"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

// Import mock product data
import { products } from "@/lib/product-data"

export default function ProductGrid() {
  const searchParams = useSearchParams()
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 24

  // Apply filters based on URL search params
  useEffect(() => {
    let filtered = [...products]

    // Category filter
    const category = searchParams.get("category")
    if (category) {
      filtered = filtered.filter((product) => product.category.toLowerCase() === category.toLowerCase())
    }

    // Brand filter
    const brand = searchParams.get("brand")
    if (brand) {
      filtered = filtered.filter((product) => product.brand.toLowerCase() === brand.toLowerCase())
    }

    // Price range filter
    const minPrice = searchParams.get("minPrice")
    const maxPrice = searchParams.get("maxPrice")
    if (minPrice) {
      filtered = filtered.filter((product) => product.price >= Number(minPrice))
    }
    if (maxPrice) {
      filtered = filtered.filter((product) => product.price <= Number(maxPrice))
    }

    // Sort products
    const sort = searchParams.get("sort")
    if (sort) {
      switch (sort) {
        case "price-asc":
          filtered.sort((a, b) => a.price - b.price)
          break
        case "price-desc":
          filtered.sort((a, b) => b.price - a.price)
          break
        case "name-asc":
          filtered.sort((a, b) => a.name.localeCompare(b.name))
          break
        case "name-desc":
          filtered.sort((a, b) => b.name.localeCompare(a.name))
          break
        case "rating-desc":
          filtered.sort((a, b) => b.rating - a.rating)
          break
        default:
          break
      }
    }

    setFilteredProducts(filtered)
    setCurrentPage(1)
  }, [searchParams])

  // Calculate pagination
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div>
      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium mb-2">No products found</h3>
          <p className="text-gray-500 mb-6">Try adjusting your filters or search criteria</p>
          <Button asChild>
            <Link href="/products">Clear All Filters</Link>
          </Button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentProducts.map((product) => (
              <Link href={`/products/${product.id}`} key={product.id}>
                <Card className="h-full hover:shadow-md transition-shadow duration-200">
                  <div className="relative aspect-square">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover rounded-t-lg"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    {product.discount && (
                      <Badge className="absolute top-2 right-2 bg-[#C8102E] text-white">{product.discount}% OFF</Badge>
                    )}
                    {product.stock <= 0 && (
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center rounded-t-lg">
                        <span className="text-white font-medium px-3 py-1">Out of Stock</span>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-medium text-gray-900 mb-1 line-clamp-2">{product.name}</h3>
                    <div className="flex items-center mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                      <span className="ml-1 text-xs text-gray-500">({product.reviewCount})</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-bold text-[#C8102E]">₱{product.price.toLocaleString()}</span>
                        {product.originalPrice && (
                          <span className="ml-2 text-xs text-gray-500 line-through">
                            ₱{product.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>
                      <Button size="sm" variant="outline" className="p-1 h-8 w-8">
                        <ShoppingCart className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <Pagination className="mt-8">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                    className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                  />
                </PaginationItem>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <PaginationItem key={page}>
                    <PaginationLink onClick={() => handlePageChange(page)} isActive={page === currentPage}>
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                ))}

                <PaginationItem>
                  <PaginationNext
                    onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                    className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </>
      )}
    </div>
  )
}
