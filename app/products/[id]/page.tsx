import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Star, Truck, ShieldCheck, ArrowLeft, Heart, Share2 } from "lucide-react"
import ProductImageGallery from "@/components/product-image-gallery"
import RelatedProducts from "@/components/related-products"
import AddToCartButton from "@/components/add-to-cart-button"

// Mock product data - in a real app, this would come from an API or database
const getProductById = (id: string) => {
  // This is mock data for demonstration
  const products = {
    "toyota-headlight-assembly": {
      id: "toyota-headlight-assembly",
      name: "Toyota Vios 2019-2022 Headlight Assembly",
      price: 4850,
      originalPrice: 5500,
      discount: 12,
      rating: 4.8,
      reviewCount: 124,
      stock: 15,
      sku: "TYT-HL-VS19-R",
      brand: "Toyota",
      category: "Headlights",
      tags: ["Headlight", "Toyota", "Vios", "OEM"],
      compatibility: ["Toyota Vios 2019", "Toyota Vios 2020", "Toyota Vios 2021", "Toyota Vios 2022"],
      shortDescription:
        "Original equipment manufacturer (OEM) headlight assembly for Toyota Vios 2019-2022 models. Right side (passenger).",
      description: `
        <p>This is an original equipment manufacturer (OEM) headlight assembly for Toyota Vios 2019-2022 models. This assembly is for the right side (passenger side) of the vehicle.</p>
        
        <p>The headlight assembly includes the housing, lens, bulbs, and wiring harness connector. It's a direct replacement for your factory headlight and installs using the original mounting points and hardware.</p>
        
        <p>Features:</p>
        <ul>
          <li>OEM quality and fitment</li>
          <li>Includes all necessary bulbs</li>
          <li>Plug-and-play installation</li>
          <li>Meets all DOT and SAE standards</li>
          <li>1-year manufacturer warranty</li>
        </ul>
      `,
      specifications: [
        { name: "Manufacturer", value: "Toyota" },
        { name: "Part Number", value: "81110-0D580" },
        { name: "Side", value: "Right (Passenger)" },
        { name: "Type", value: "Halogen" },
        { name: "Condition", value: "New" },
        { name: "Warranty", value: "1 Year" },
      ],
      images: ["/honda-headlight.png", "/projector-headlight.png", "/hyundai-led-headlight.png"],
      shipping: {
        free: true,
        estimatedDelivery: "2-3 business days",
      },
      warranty: "1 Year Manufacturer Warranty",
      returnPolicy: "30-day return policy",
      installation: "Professional installation recommended",
    },
    "brake-pad-set": {
      id: "brake-pad-set",
      name: "Premium Ceramic Brake Pad Set",
      price: 2450,
      originalPrice: 2800,
      discount: 13,
      rating: 4.7,
      reviewCount: 89,
      stock: 23,
      sku: "BRK-PD-CRM-01",
      brand: "Brembo",
      category: "Brakes",
      tags: ["Brake Pads", "Ceramic", "Premium"],
      compatibility: ["Toyota Vios", "Honda City", "Mitsubishi Mirage", "Nissan Almera"],
      shortDescription: "Premium ceramic brake pads for improved stopping power and reduced brake dust.",
      description: `
        <p>These premium ceramic brake pads offer superior stopping power with minimal noise and brake dust. Designed for everyday driving conditions in the Philippines, these pads provide excellent performance in both dry and wet conditions.</p>
        
        <p>The ceramic formulation helps reduce brake dust, keeping your wheels cleaner for longer. The chamfered and slotted design helps minimize noise and vibration for a smoother braking experience.</p>
        
        <p>Features:</p>
        <ul>
          <li>Premium ceramic formulation</li>
          <li>Reduced brake dust</li>
          <li>Excellent stopping power</li>
          <li>Low noise operation</li>
          <li>Chamfered and slotted design</li>
          <li>Includes hardware kit</li>
        </ul>
      `,
      specifications: [
        { name: "Manufacturer", value: "Brembo" },
        { name: "Material", value: "Ceramic" },
        { name: "Position", value: "Front" },
        { name: "Includes Hardware", value: "Yes" },
        { name: "Condition", value: "New" },
        { name: "Warranty", value: "1 Year" },
      ],
      images: ["/brake-pads-close-up.png", "/brake-disc.png", "/brake-hose.png"],
      shipping: {
        free: true,
        estimatedDelivery: "1-2 business days",
      },
      warranty: "1 Year Manufacturer Warranty",
      returnPolicy: "30-day return policy",
      installation: "Professional installation recommended",
    },
  }

  return products[id as keyof typeof products] || null
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id)

  if (!product) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-[#007BFF]">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/categories" className="hover:text-[#007BFF]">
          Categories
        </Link>
        <span className="mx-2">/</span>
        <Link href={`/categories/${product.category.toLowerCase()}`} className="hover:text-[#007BFF]">
          {product.category}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700">{product.name}</span>
      </div>

      {/* Back button */}
      <Link href="/categories" className="inline-flex items-center text-[#007BFF] mb-6 hover:underline">
        <ArrowLeft className="w-4 h-4 mr-1" />
        Back to Products
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Product Images */}
        <div className="sticky top-24">
          <ProductImageGallery images={product.images} productName={product.name} />
        </div>

        {/* Product Info */}
        <div>
          <div className="mb-4">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>

            <div className="flex items-center mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">
                {product.rating} ({product.reviewCount} reviews)
              </span>
              <span className="mx-2 text-gray-300">|</span>
              <span className="text-sm text-gray-600">SKU: {product.sku}</span>
            </div>

            <div className="flex items-center mb-6">
              <span className="text-3xl font-bold text-[#C8102E]">₱{product.price.toLocaleString()}</span>
              {product.discount > 0 && (
                <>
                  <span className="ml-3 text-lg text-gray-500 line-through">
                    ₱{product.originalPrice.toLocaleString()}
                  </span>
                  <Badge variant="outline" className="ml-3 bg-[#C8102E] text-white">
                    {product.discount}% OFF
                  </Badge>
                </>
              )}
            </div>

            <div className="mb-6">
              <p className="text-gray-700">{product.shortDescription}</p>
            </div>

            {/* Stock Status */}
            <div className="mb-6">
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  product.stock > 0 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                }`}
              >
                {product.stock > 0 ? `In Stock (${product.stock} available)` : "Out of Stock"}
              </span>
            </div>

            {/* Compatibility */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-900 mb-2">Compatible with:</h3>
              <div className="flex flex-wrap gap-2">
                {product.compatibility.map((vehicle, index) => (
                  <Badge key={index} variant="outline" className="bg-gray-100 text-gray-800 hover:bg-gray-200">
                    {vehicle}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <AddToCartButton productId={product.id} className="flex-1" />
              <Button variant="outline" className="flex items-center justify-center gap-2">
                <Heart className="w-4 h-4" />
                <span>Save</span>
              </Button>
              <Button variant="outline" className="flex items-center justify-center gap-2">
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </Button>
            </div>

            {/* Shipping & Returns */}
            <div className="border-t border-gray-200 pt-6 space-y-4">
              <div className="flex items-start">
                <Truck className="w-5 h-5 text-[#007BFF] mt-0.5 mr-3" />
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Shipping</h3>
                  <p className="text-sm text-gray-500">
                    {product.shipping.free ? "Free shipping" : "Standard shipping rates apply"} • Estimated delivery:{" "}
                    {product.shipping.estimatedDelivery}
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <ShieldCheck className="w-5 h-5 text-[#007BFF] mt-0.5 mr-3" />
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Returns & Warranty</h3>
                  <p className="text-sm text-gray-500">
                    {product.returnPolicy} • {product.warranty}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="mb-12">
        <Tabs defaultValue="description">
          <TabsList className="w-full border-b border-gray-200 mb-6">
            <TabsTrigger value="description" className="text-lg">
              Description
            </TabsTrigger>
            <TabsTrigger value="specifications" className="text-lg">
              Specifications
            </TabsTrigger>
            <TabsTrigger value="reviews" className="text-lg">
              Reviews
            </TabsTrigger>
            <TabsTrigger value="shipping" className="text-lg">
              Shipping & Returns
            </TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="text-gray-700">
            <div dangerouslySetInnerHTML={{ __html: product.description }} />
          </TabsContent>

          <TabsContent value="specifications">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <tbody className="bg-white divide-y divide-gray-200">
                  {product.specifications.map((spec, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{spec.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>

          <TabsContent value="reviews">
            <div className="text-center py-12">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Customer Reviews</h3>
              <div className="flex justify-center items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">{product.rating} out of 5</span>
              </div>
              <p className="text-gray-500 mb-6">Based on {product.reviewCount} reviews</p>
              <Button>Write a Review</Button>
            </div>
          </TabsContent>

          <TabsContent value="shipping">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Shipping Information</h3>
                <p className="text-gray-700">
                  We offer free shipping on all orders over ₱5,000. For orders under ₱5,000, standard shipping rates
                  apply. Most orders are processed and shipped within 24 hours. Delivery times vary depending on your
                  location:
                </p>
                <ul className="list-disc pl-5 mt-2 text-gray-700">
                  <li>Metro Manila: 1-2 business days</li>
                  <li>Luzon: 2-3 business days</li>
                  <li>Visayas: 3-5 business days</li>
                  <li>Mindanao: 4-7 business days</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Return Policy</h3>
                <p className="text-gray-700">
                  We accept returns within 30 days of delivery for most items. Products must be in original condition
                  with all packaging and accessories. Some items, such as electrical components that have been
                  installed, may not be eligible for return.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Warranty Information</h3>
                <p className="text-gray-700">
                  This product comes with a {product.warranty}. The warranty covers manufacturing defects and premature
                  wear under normal use conditions. The warranty does not cover damage due to improper installation,
                  misuse, or normal wear and tear.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Related Products */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">You May Also Like</h2>
        <RelatedProducts currentProductId={product.id} category={product.category} />
      </div>
    </div>
  )
}
