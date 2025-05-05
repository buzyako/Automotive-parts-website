import Image from "next/image"
import Link from "next/link"
import { Filter, SlidersHorizontal, Sparkles, Shield, Droplets, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CarCarePage() {
  // Sample products data
  const products = [
    {
      id: 1,
      name: "Premium Car Wash Kit",
      price: 1450,
      rating: 4.8,
      reviews: 142,
      image: "/placeholder.svg?height=200&width=200&query=car+wash+kit",
      brand: "PyeSakto",
      fitment: "All Vehicles",
    },
    {
      id: 2,
      name: "Interior Detailing Kit",
      price: 1850,
      rating: 4.7,
      reviews: 98,
      image: "/placeholder.svg?height=200&width=200&query=interior+detailing+kit",
      brand: "PyeSakto",
      fitment: "All Vehicles",
    },
    {
      id: 3,
      name: "Ceramic Coating Spray",
      price: 950,
      rating: 4.9,
      reviews: 124,
      image: "/placeholder.svg?height=200&width=200&query=ceramic+coating+spray",
      brand: "PyeSakto",
      fitment: "All Vehicles",
    },
    {
      id: 4,
      name: "Microfiber Towel Set (12 Pack)",
      price: 650,
      rating: 4.6,
      reviews: 86,
      image: "/placeholder.svg?height=200&width=200&query=microfiber+towels",
      brand: "PyeSakto",
      fitment: "All Vehicles",
    },
    {
      id: 5,
      name: "Tire Shine Gel",
      price: 450,
      rating: 4.5,
      reviews: 76,
      image: "/placeholder.svg?height=200&width=200&query=tire+shine+gel",
      brand: "PyeSakto",
      fitment: "All Vehicles",
    },
    {
      id: 6,
      name: "Dashboard Protectant",
      price: 550,
      rating: 4.7,
      reviews: 92,
      image: "/placeholder.svg?height=200&width=200&query=dashboard+protectant",
      brand: "PyeSakto",
      fitment: "All Vehicles",
    },
    {
      id: 7,
      name: "Glass Cleaner & Water Repellent",
      price: 750,
      rating: 4.8,
      reviews: 108,
      image: "/placeholder.svg?height=200&width=200&query=glass+cleaner",
      brand: "PyeSakto",
      fitment: "All Vehicles",
    },
    {
      id: 8,
      name: "Car Air Freshener Set",
      price: 350,
      rating: 4.4,
      reviews: 64,
      image: "/placeholder.svg?height=200&width=200&query=car+air+freshener",
      brand: "PyeSakto",
      fitment: "All Vehicles",
    },
  ]

  // Sample car care categories
  const carCareCategories = [
    { name: "Exterior Cleaning", count: 124, icon: <Droplets className="h-8 w-8 mb-2 text-[#C8102E]" /> },
    { name: "Interior Cleaning", count: 98, icon: <Sparkles className="h-8 w-8 mb-2 text-[#C8102E]" /> },
    { name: "Polishing & Waxing", count: 76, icon: <Sparkles className="h-8 w-8 mb-2 text-[#C8102E]" /> },
    { name: "Paint Protection", count: 68, icon: <Shield className="h-8 w-8 mb-2 text-[#C8102E]" /> },
    { name: "Glass Care", count: 54, icon: <Droplets className="h-8 w-8 mb-2 text-[#C8102E]" /> },
    { name: "Tire & Wheel Care", count: 82, icon: <Sparkles className="h-8 w-8 mb-2 text-[#C8102E]" /> },
  ]

  // Sample brands
  const brands = [
    { name: "PyeSakto", count: 142 },
    { name: "Meguiar's", count: 98 },
    { name: "Turtle Wax", count: 86 },
    { name: "Chemical Guys", count: 72 },
    { name: "3M", count: 68 },
    { name: "Sonax", count: 54 },
    { name: "Mothers", count: 48 },
  ]

  // Sample car care tips
  const carCareTips = [
    {
      title: "Wash in the Shade",
      description: "Always wash your car in the shade to prevent soap from drying too quickly and leaving spots.",
      icon: <Droplets className="h-8 w-8 text-[#C8102E]" />,
    },
    {
      title: "Two Bucket Method",
      description: "Use two buckets: one with soap and one with clean water to rinse your wash mitt.",
      icon: <Droplets className="h-8 w-8 text-[#C8102E]" />,
    },
    {
      title: "Top to Bottom",
      description: "Always clean from the top down, as the lower parts of the car are typically the dirtiest.",
      icon: <Droplets className="h-8 w-8 text-[#C8102E]" />,
    },
    {
      title: "Separate Towels",
      description: "Use different microfiber towels for different areas to avoid cross-contamination.",
      icon: <Sparkles className="h-8 w-8 text-[#C8102E]" />,
    },
  ]

  return (
    <div>
      {/* Category Header */}
      <div className="bg-[#2E2E2E] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="md:w-2/3">
              <h1 className="text-3xl font-bold mb-2">Car Care & Detailing</h1>
              <p className="text-gray-300 max-w-3xl">
                Keep your vehicle looking its best inside and out with our premium car care and detailing products. From
                washing and waxing to interior cleaning and protection, we have everything you need to maintain your
                vehicle's appearance.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Button className="bg-[#C8102E] hover:bg-[#A50D26]">Shop All Car Care</Button>
                <Button variant="outline" className="text-white border-white hover:bg-gray-800">
                  Detailing Guide
                </Button>
              </div>
            </div>
            <div className="md:w-1/3 mt-6 md:mt-0 flex justify-center">
              <div className="relative w-64 h-64">
                <Image
                  src="/placeholder.svg?height=300&width=300&query=car+detailing"
                  alt="Car Detailing"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Car Care Categories */}
      <div className="bg-white py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Car Care Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {carCareCategories.map((category, index) => (
              <Link
                key={index}
                href={`/categories/tools/car-care/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="bg-gray-50 border rounded-lg p-4 text-center hover:border-[#007BFF] hover:shadow-md transition-all"
              >
                <div className="flex flex-col items-center">
                  {category.icon}
                  <h3 className="font-medium">{category.name}</h3>
                  <p className="text-sm text-gray-500">({category.count} products)</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg border p-4 sticky top-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-bold text-lg">Filters</h2>
                <SlidersHorizontal className="h-5 w-5 text-gray-500" />
              </div>

              {/* Car Care Type */}
              <div className="mb-6">
                <h3 className="font-semibold mb-2 text-sm uppercase text-gray-500">Product Type</h3>
                <ul className="space-y-2">
                  {carCareCategories.map((category, index) => (
                    <li key={index}>
                      <Link
                        href={`/categories/tools/car-care/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
                        className="flex items-center justify-between text-sm hover:text-[#007BFF]"
                      >
                        <span>{category.name}</span>
                        <span className="text-gray-500 text-xs">({category.count})</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Brands */}
              <div className="mb-6">
                <h3 className="font-semibold mb-2 text-sm uppercase text-gray-500">Brands</h3>
                <ul className="space-y-2">
                  {brands.map((brand, index) => (
                    <li key={index} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`brand-${index}`}
                        className="mr-2 rounded border-gray-300 text-[#C8102E] focus:ring-[#C8102E]"
                      />
                      <label htmlFor={`brand-${index}`} className="text-sm flex-1 flex justify-between">
                        <span>{brand.name}</span>
                        <span className="text-gray-500 text-xs">({brand.count})</span>
                      </label>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" size="sm" className="w-full mt-2 text-xs">
                  Show More Brands
                </Button>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h3 className="font-semibold mb-2 text-sm uppercase text-gray-500">Price Range</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <input type="number" placeholder="Min" className="w-full border rounded-md px-3 py-1 text-sm" />
                  </div>
                  <div>
                    <input type="number" placeholder="Max" className="w-full border rounded-md px-3 py-1 text-sm" />
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full mt-2 text-xs">
                  Apply
                </Button>
              </div>

              {/* Product Format */}
              <div>
                <h3 className="font-semibold mb-2 text-sm uppercase text-gray-500">Product Format</h3>
                <select className="w-full border rounded-md px-3 py-2 text-sm">
                  <option value="">All Formats</option>
                  <option value="spray">Spray</option>
                  <option value="liquid">Liquid</option>
                  <option value="paste">Paste/Wax</option>
                  <option value="foam">Foam</option>
                  <option value="kit">Complete Kit</option>
                </select>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Sort and Filter Controls */}
            <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
              <div className="flex items-center">
                <span className="text-sm text-gray-500 mr-2">Sort by:</span>
                <select className="border rounded-md px-3 py-1 text-sm">
                  <option value="relevance">Relevance</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Customer Rating</option>
                  <option value="newest">Newest Arrivals</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Filter className="h-4 w-4" />
                  <span className="hidden sm:inline">Filter</span>
                </Button>
                <span className="text-sm text-gray-500">Showing 1-8 of 502 products</span>
              </div>
            </div>

            {/* Products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {products.map((product) => (
                <Link
                  href={`/products/${product.id}`}
                  key={product.id}
                  className="bg-white border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="p-4">
                    <div className="aspect-square relative mb-3">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="mb-2">
                      <span className="text-xs text-gray-500">{product.brand}</span>
                      <h3 className="font-medium text-sm line-clamp-2 h-10">{product.name}</h3>
                    </div>
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                            stroke="currentColor"
                            className="h-3 w-3"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                            />
                          </svg>
                        ))}
                      </div>
                      <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-lg">₱{product.price.toLocaleString()}</span>
                      <Button variant="default" size="sm">
                        Add to Cart
                      </Button>
                    </div>
                    <div className="mt-2 text-xs text-gray-500">{product.fitment}</div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center">
              <nav className="flex items-center gap-1">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm" className="bg-[#C8102E] text-white hover:bg-[#A50D26]">
                  1
                </Button>
                <Button variant="outline" size="sm">
                  2
                </Button>
                <Button variant="outline" size="sm">
                  3
                </Button>
                <span className="mx-1">...</span>
                <Button variant="outline" size="sm">
                  7
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Car Care Tips */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Pro Detailing Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {carCareTips.map((tip, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center mb-4">
                  {tip.icon}
                  <h3 className="text-xl font-semibold ml-2">{tip.title}</h3>
                </div>
                <p className="text-gray-600">{tip.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button className="bg-[#C8102E] hover:bg-[#A50D26]">View Complete Detailing Guide</Button>
          </div>
        </div>
      </div>

      {/* DIY Detailing Guides */}
      <div className="container mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold mb-8">DIY Detailing Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border rounded-lg overflow-hidden">
            <div className="aspect-video relative">
              <Image
                src="/placeholder.svg?height=300&width=500&query=car+wash+guide"
                alt="Car Wash Guide"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">Complete Car Wash Guide</h3>
              <p className="text-gray-600 mb-4">
                Learn the proper techniques for washing your car like a professional detailer.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="h-4 w-4 mr-1" />
                <span>12 minutes read</span>
              </div>
              <Button variant="link" className="mt-2 p-0 h-auto text-[#C8102E]">
                Read Guide
              </Button>
            </div>
          </div>

          <div className="bg-white border rounded-lg overflow-hidden">
            <div className="aspect-video relative">
              <Image
                src="/placeholder.svg?height=300&width=500&query=car+polishing"
                alt="Polishing and Waxing"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">Polishing and Waxing 101</h3>
              <p className="text-gray-600 mb-4">
                Step-by-step instructions for achieving a showroom shine on your vehicle's paint.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="h-4 w-4 mr-1" />
                <span>15 minutes read</span>
              </div>
              <Button variant="link" className="mt-2 p-0 h-auto text-[#C8102E]">
                Read Guide
              </Button>
            </div>
          </div>

          <div className="bg-white border rounded-lg overflow-hidden">
            <div className="aspect-video relative">
              <Image
                src="/placeholder.svg?height=300&width=500&query=interior+detailing"
                alt="Interior Detailing"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">Interior Detailing Guide</h3>
              <p className="text-gray-600 mb-4">
                Learn how to properly clean and protect your vehicle's interior surfaces.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="h-4 w-4 mr-1" />
                <span>18 minutes read</span>
              </div>
              <Button variant="link" className="mt-2 p-0 h-auto text-[#C8102E]">
                Read Guide
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Related Categories */}
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold mb-6">Related Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              href="/categories/tools/maintenance"
              className="bg-white border rounded-lg p-4 hover:border-[#007BFF] transition-colors"
            >
              <h3 className="font-medium mb-1">Maintenance</h3>
              <p className="text-sm text-gray-500">Regular service kits and supplies</p>
            </Link>
            <Link
              href="/categories/tools"
              className="bg-white border rounded-lg p-4 hover:border-[#007BFF] transition-colors"
            >
              <h3 className="font-medium mb-1">Tools & Equipment</h3>
              <p className="text-sm text-gray-500">Specialty tools and diagnostic equipment</p>
            </Link>
            <Link
              href="/categories/exterior"
              className="bg-white border rounded-lg p-4 hover:border-[#007BFF] transition-colors"
            >
              <h3 className="font-medium mb-1">Exterior Parts</h3>
              <p className="text-sm text-gray-500">Bumpers, grilles, mirrors, and more</p>
            </Link>
            <Link
              href="/categories/interior"
              className="bg-white border rounded-lg p-4 hover:border-[#007BFF] transition-colors"
            >
              <h3 className="font-medium mb-1">Interior Parts</h3>
              <p className="text-sm text-gray-500">Seat covers, floor mats, and more</p>
            </Link>
          </div>
        </div>
      </div>

      {/* SEO Content */}
      <div className="container mx-auto py-8 px-4">
        <div className="bg-white border rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Car Care & Detailing Products</h2>
          <div className="prose max-w-none text-gray-700">
            <p>
              Keep your vehicle looking its best with our comprehensive selection of car care and detailing products. At
              PyeSakto.ph, we offer high-quality cleaning, polishing, and protection products designed specifically for
              vehicles in the Philippines' unique climate and driving conditions.
            </p>
            <p className="mt-4">
              Our car care products include everything from basic wash supplies to professional-grade detailing
              products. Whether you're a weekend enthusiast or a professional detailer, we have the right products to
              help you achieve and maintain a showroom-quality finish on your vehicle.
            </p>
            <h3 className="text-lg font-semibold mt-4">Why Proper Car Care Matters</h3>
            <p>
              Regular cleaning and detailing not only keeps your vehicle looking great but also helps protect its
              surfaces from environmental damage. In the Philippines' tropical climate, proper car care is essential for
              preventing premature aging of paint, interior materials, and other surfaces.
            </p>
            <h3 className="text-lg font-semibold mt-4">Popular Car Care Products</h3>
            <ul className="list-disc pl-5 mt-2">
              <li>pH-neutral car wash shampoos that clean without stripping wax</li>
              <li>Microfiber towels and wash mitts for scratch-free cleaning</li>
              <li>Clay bars for removing embedded contaminants from paint</li>
              <li>Polishes and compounds for removing swirls and scratches</li>
              <li>Waxes, sealants, and ceramic coatings for long-lasting protection</li>
              <li>Interior cleaners and protectants for various surfaces</li>
            </ul>
            <p className="mt-4">
              Browse our selection to find the perfect car care products for your Toyota, Honda, Mitsubishi, Nissan,
              Hyundai, or other vehicle models popular in the Philippines.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
