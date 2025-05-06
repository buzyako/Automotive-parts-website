"use client"

import Image from "next/image"
import Link from "next/link"
import { getRelatedProducts } from "@/lib/product-data"
import { Badge } from "@/components/ui/badge"

interface RelatedProductsProps {
  currentProductId: string
  category: string
}

export default function RelatedProducts({ currentProductId, category }: RelatedProductsProps) {
  const relatedProducts = getRelatedProducts(currentProductId, category)

  if (relatedProducts.length === 0) {
    return (
      <div className="text-center py-4">
        <p className="text-gray-500 text-sm">No related products found.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
      {relatedProducts.map((product) => (
        <Link href={`/products/${product.id}`} key={product.id} className="group">
          <div className="border border-gray-200 rounded-md overflow-hidden transition-shadow hover:shadow-md">
            <div className="relative h-36 bg-gray-100">
              <Image
                src={product.images[0] || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
              {product.discount > 0 && (
                <Badge className="absolute top-1 right-1 bg-red-600 text-xs py-0 px-1">{product.discount}% OFF</Badge>
              )}
            </div>
            <div className="p-2">
              <h3 className="text-xs font-medium text-gray-900 truncate">{product.name}</h3>
              <div className="mt-1 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-gray-900">₱{product.price.toLocaleString()}</p>
                  {product.originalPrice > product.price && (
                    <p className="text-xs text-gray-500 line-through">₱{product.originalPrice.toLocaleString()}</p>
                  )}
                </div>
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="ml-1 text-xs text-gray-600">{product.rating}</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
