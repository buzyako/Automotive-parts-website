"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getProductsByMainCategory, getProductsByCategory } from "@/lib/product-data"

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [categoryName, setCategoryName] = useState("")

  useEffect(() => {
    // First try to get products by main category
    let categoryProducts = getProductsByMainCategory(
      params.slug
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" "),
    )

    // If no products found, try by category
    if (categoryProducts.length === 0) {
      categoryProducts = getProductsByCategory(
        params.slug
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" "),
      )
    }

    setProducts(categoryProducts)

    // Set category name
    if (categoryProducts.length > 0) {
      setCategoryName(categoryProducts[0].mainCategory || categoryProducts[0].category)
    } else {
      setCategoryName(
        params.slug
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" "),
      )
    }

    setLoading(false)
  }, [params.slug])

  // Group products by subcategory
  const productsBySubCategory: Record<string, any[]> = {}
  products.forEach((product) => {
    if (!productsBySubCategory[product.subCategory]) {
      productsBySubCategory[product.subCategory] = []
    }
    productsBySubCategory[product.subCategory].push(product)
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <h1 className="text-2xl font-bold mb-2">{categoryName}</h1>
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-[#007BFF]">
            Home
          </Link>
          <ChevronRight className="h-3 w-3 mx-1" />
          <Link href="/categories" className="hover:text-[#007BFF]">
            Categories
          </Link>
          <ChevronRight className="h-3 w-3 mx-1" />
          <span className="text-gray-700">{categoryName}</span>
        </div>
        <p className="text-gray-600">
          Browse our selection of {categoryName.toLowerCase()} for your vehicle. We offer a wide range of high-quality
          parts from top brands to keep your vehicle running at its best.
        </p>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-gray-100 animate-pulse h-64 rounded-lg"></div>
          ))}
        </div>
      ) : products.length === 0 ? (
        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <h2 className="text-xl font-bold mb-2">No Products Found</h2>
          <p className="text-gray-600 mb-6">
            We couldn't find any products in this category. Please try a different category or browse all products.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link href="/categories">Browse Categories</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/products">All Products</Link>
            </Button>
          </div>
        </div>
      ) : (
        <>
          {/* Subcategories with products */}
          {Object.entries(productsBySubCategory).map(([subCategory, subCategoryProducts]) => (
            <div key={subCategory} className="mb-12">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">{subCategory}</h2>
                <Link
                  href={`/categories/${params.slug}/${subCategory.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-[#007BFF] text-sm hover:underline flex items-center"
                >
                  View all <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {subCategoryProducts.slice(0, 4).map((product) => (
                  <Link href={`/products/${product.id}`} key={product.id}>
                    <Card className="h-full hover:shadow-md transition-shadow duration-200">
                      <div className="relative aspect-square">
                        <Image
                          src={product.images[0] || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover rounded-t-lg"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        />
                        {product.discount && (
                          <Badge className="absolute top-2 right-2 bg-[#C8102E] text-white">
                            {product.discount}% OFF
                          </Badge>
                        )}
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-medium text-gray-900 mb-1 line-clamp-2">{product.name}</h3>
                        <div className="flex items-center mb-2">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <span
                                key={i}
                                className={`${i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}`}
                              >
                                ★
                              </span>
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
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
              {subCategoryProducts.length > 4 && (
                <div className="mt-4 text-center">
                  <Button variant="outline" asChild>
                    <Link href={`/categories/${params.slug}/${subCategory.toLowerCase().replace(/\s+/g, "-")}`}>
                      View All {subCategory} ({subCategoryProducts.length})
                    </Link>
                  </Button>
                </div>
              )}
            </div>
          ))}

          {/* Popular Brands */}
          <div className="bg-white rounded-lg shadow-sm p-6 mt-8">
            <h2 className="text-xl font-bold mb-4">Popular Brands in {categoryName}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {Array.from(new Set(products.map((product) => product.brand)))
                .slice(0, 6)
                .map((brand, index) => (
                  <Link href={`/products?brand=${brand}`} key={index} className="block">
                    <div className="border rounded-lg p-4 hover:border-[#007BFF] hover:shadow-sm transition-all text-center">
                      <h3 className="font-medium text-gray-900">{brand}</h3>
                      <p className="text-xs text-gray-500 mt-1">
                        {products.filter((p) => p.brand === brand).length} products
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
