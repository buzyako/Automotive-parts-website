"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart } from "lucide-react"

interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  discount?: number
  rating: number
  reviewCount: number
  image: string
  category: string
}

interface RelatedProductsProps {
  currentProductId: string
  category: string
}

// Mock data - in a real app, this would come from an API
const mockProducts: Product[] = [
  {
    id: "toyota-headlight-assembly",
    name: "Toyota Vios 2019-2022 Headlight Assembly",
    price: 4850,
    originalPrice: 5500,
    discount: 12,
    rating: 4.8,
    reviewCount: 124,
    image: "/honda-headlight.png",
    category: "Headlights",
  },
  {
    id: "honda-city-headlight",
    name: "Honda City 2020-2023 LED Headlight",
    price: 5200,
    originalPrice: 5800,
    discount: 10,
    rating: 4.7,
    reviewCount: 98,
    image: "/projector-headlight.png",
    category: "Headlights",
  },
  {
    id: "mitsubishi-mirage-headlight",
    name: "Mitsubishi Mirage G4 Headlight Assembly",
    price: 4200,
    rating: 4.5,
    reviewCount: 76,
    image: "/hyundai-led-headlight.png",
    category: "Headlights",
  },
  {
    id: "brake-pad-set",
    name: "Premium Ceramic Brake Pad Set",
    price: 2450,
    originalPrice: 2800,
    discount: 13,
    rating: 4.7,
    reviewCount: 89,
    image: "/brake-pads-close-up.png",
    category: "Brakes",
  },
  {
    id: "brake-disc-rotor",
    name: "Performance Brake Disc Rotor",
    price: 3200,
    rating: 4.6,
    reviewCount: 65,
    image: "/brake-disc.png",
    category: "Brakes",
  },
]

export default function RelatedProducts({ currentProductId, category }: RelatedProductsProps) {
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([])

  useEffect(() => {
    // Filter products by category and exclude current product
    const filtered = mockProducts.filter((product) => product.category === category && product.id !== currentProductId)

    // Limit to 4 products
    setRelatedProducts(filtered.slice(0, 4))
  }, [currentProductId, category])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {relatedProducts.map((product) => (
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
  )
}
