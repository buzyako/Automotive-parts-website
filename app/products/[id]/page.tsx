"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter, notFound } from "next/navigation"
import { Suspense } from "react"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProductImageGallery from "@/components/product-image-gallery"
import RelatedProducts from "@/components/related-products"
import AddToCartButton from "@/components/add-to-cart-button"
import { useVehicle } from "@/lib/vehicle-context"
import { getProductById } from "@/lib/product-data"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle } from "lucide-react"

export default function ProductPage({ params }: { params: { id: string } }) {
  const { vehicle, isVehicleSelected } = useVehicle()
  const router = useRouter()
  const [product, setProduct] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [isCompatible, setIsCompatible] = useState(false)

  useEffect(() => {
    const fetchedProduct = getProductById(params.id)

    if (!fetchedProduct) {
      notFound()
    }

    setProduct(fetchedProduct)

    // Check if the product is compatible with the selected vehicle
    if (isVehicleSelected) {
      const compatible = fetchedProduct.compatibility.some(
        (compat: any) =>
          compat.year === vehicle.year &&
          compat.make === vehicle.make &&
          compat.model === vehicle.model &&
          compat.engine === vehicle.engine,
      )
      setIsCompatible(compatible)
    }

    setLoading(false)
  }, [params.id, vehicle, isVehicleSelected])

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="h-96 bg-gray-100 animate-pulse rounded-lg"></div>
      </div>
    )
  }

  if (!product) {
    notFound()
  }

  const discountedPrice = product.price
  const originalPrice = product.originalPrice
  const discount = product.discount

  return (
    <div className="container mx-auto px-4 py-4">
      {/* Breadcrumb - more compact */}
      <nav className="text-sm mb-3">
        <ol className="flex flex-wrap">
          <li className="flex items-center">
            <Link href="/" className="text-gray-500 hover:text-red-600">
              Home
            </Link>
            <span className="mx-1 text-gray-400">/</span>
          </li>
          <li className="flex items-center">
            <Link href="/categories" className="text-gray-500 hover:text-red-600">
              Categories
            </Link>
            <span className="mx-1 text-gray-400">/</span>
          </li>
          <li className="flex items-center">
            <Link href={`/categories/${product.category.toLowerCase()}`} className="text-gray-500 hover:text-red-600">
              {product.category}
            </Link>
            <span className="mx-1 text-gray-400">/</span>
          </li>
          <li className="text-gray-800 font-medium truncate">{product.name}</li>
        </ol>
      </nav>

      {/* Vehicle Compatibility Banner */}
      {isVehicleSelected && (
        <div
          className={`mb-4 p-3 rounded-lg flex items-center ${isCompatible ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`}
        >
          {isCompatible ? (
            <>
              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
              <div>
                <p className="font-medium">Compatible with your vehicle</p>
                <p className="text-xs text-gray-600">
                  {vehicle.year} {vehicle.make} {vehicle.model} {vehicle.engine}
                </p>
              </div>
            </>
          ) : (
            <>
              <XCircle className="h-5 w-5 text-red-500 mr-2" />
              <div>
                <p className="font-medium">Not compatible with your vehicle</p>
                <p className="text-xs text-gray-600">
                  {vehicle.year} {vehicle.make} {vehicle.model} {vehicle.engine}
                </p>
              </div>
            </>
          )}
        </div>
      )}

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Product Images - more compact */}
        <div className="lg:w-2/5">
          <Suspense fallback={<div className="h-80 bg-gray-100 animate-pulse rounded-lg"></div>}>
            <ProductImageGallery images={product.images} productName={product.name} />
          </Suspense>
        </div>

        {/* Product Info - more compact */}
        <div className="lg:w-3/5">
          <h1 className="text-2xl font-bold text-gray-900">{product.name}</h1>

          <div className="flex items-center mt-1">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={`${i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}`}>
                  ★
                </span>
              ))}
              <span className="ml-2 text-sm text-gray-600">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>
          </div>

          <div className="mt-2 flex flex-wrap gap-2">
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100">In Stock: {product.stock}</Badge>
            <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">SKU: {product.sku}</Badge>
          </div>

          <div className="mt-3">
            <div className="flex items-center">
              <p className="text-2xl font-bold text-gray-900">₱{discountedPrice.toLocaleString()}</p>
              {originalPrice > discountedPrice && (
                <>
                  <p className="ml-2 text-base text-gray-500 line-through">₱{originalPrice.toLocaleString()}</p>
                  <Badge className="ml-2 bg-red-100 text-red-800 hover:bg-red-100">{discount}% OFF</Badge>
                </>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
            <div>
              <h3 className="text-sm font-medium text-gray-900">Brand</h3>
              <p className="text-sm">{product.brand}</p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-900">Compatibility</h3>
              <ul className="text-sm list-disc list-inside">
                {product.compatibilityText.map((vehicle: string, index: number) => (
                  <li key={index} className="text-gray-700">
                    {vehicle}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-4">
            <AddToCartButton product={product} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 pt-3 border-t border-gray-200">
            <div>
              <h3 className="text-sm font-medium text-gray-900">Shipping</h3>
              <p className="text-xs text-gray-700 mt-1">
                Available in Metro Manila and Select Urban Areas only. ₱250 for Standard Shipping (3-5 business days).
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-900">Return Policy</h3>
              <p className="text-xs text-gray-700 mt-1">{product.returnPolicy}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs - more compact */}
      <div className="mt-8">
        <Tabs defaultValue="description">
          <TabsList className="w-full border-b border-gray-200 mb-3">
            <TabsTrigger value="description" className="text-base">
              Description
            </TabsTrigger>
            <TabsTrigger value="features" className="text-base">
              Features
            </TabsTrigger>
            <TabsTrigger value="specifications" className="text-base">
              Specifications
            </TabsTrigger>
            <TabsTrigger value="installation" className="text-base">
              Installation
            </TabsTrigger>
            <TabsTrigger value="compatibility" className="text-base">
              Compatibility
            </TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="mt-3 text-sm">
            <p className="text-gray-700">{product.description}</p>
          </TabsContent>
          <TabsContent value="features" className="mt-3">
            <ul className="list-disc list-inside space-y-1 text-sm">
              {product.features.map((feature: string, index: number) => (
                <li key={index} className="text-gray-700">
                  {feature}
                </li>
              ))}
            </ul>
          </TabsContent>
          <TabsContent value="specifications" className="mt-3">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 text-sm">
                <tbody className="divide-y divide-gray-200">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <tr key={key}>
                      <td className="py-2 px-3 text-sm font-medium text-gray-900 bg-gray-50 w-1/3">{key}</td>
                      <td className="py-2 px-3 text-sm text-gray-700">{value as string}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>
          <TabsContent value="installation" className="mt-3 text-sm">
            <p className="text-gray-700">{product.installationGuide}</p>
            <div className="mt-3">
              <h4 className="font-medium text-gray-900 text-sm">Warranty Information</h4>
              <p className="mt-1 text-gray-700 text-sm">{product.warranty}</p>
            </div>
          </TabsContent>
          <TabsContent value="compatibility" className="mt-3 text-sm">
            <p className="text-gray-700 mb-3">This product is compatible with the following vehicles:</p>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="py-2 px-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Year
                    </th>
                    <th className="py-2 px-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Make
                    </th>
                    <th className="py-2 px-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Model
                    </th>
                    <th className="py-2 px-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Engine
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {product.compatibility.map((compat: any, index: number) => (
                    <tr
                      key={index}
                      className={
                        isVehicleSelected &&
                        compat.year === vehicle.year &&
                        compat.make === vehicle.make &&
                        compat.model === vehicle.model &&
                        compat.engine === vehicle.engine
                          ? "bg-green-50"
                          : ""
                      }
                    >
                      <td className="py-2 px-3">{compat.year}</td>
                      <td className="py-2 px-3">{compat.make}</td>
                      <td className="py-2 px-3">{compat.model}</td>
                      <td className="py-2 px-3">{compat.engine}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {!isVehicleSelected && (
              <div className="mt-4">
                <Button asChild>
                  <Link href="/">Select Your Vehicle</Link>
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>

      {/* Related Products - more compact */}
      <div className="mt-10">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Related Products</h2>
        <Suspense fallback={<div className="h-48 bg-gray-100 animate-pulse rounded-lg"></div>}>
          <RelatedProducts currentProductId={product.id} category={product.category} />
        </Suspense>
      </div>
    </div>
  )
}
