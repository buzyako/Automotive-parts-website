import Image from "next/image"
import Link from "next/link"
import { Filter, SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ToolsCategory() {
  // Sample products data
  const products = [
    {
      id: 1,
      name: "OBD2 Scanner - All Vehicles",
      price: 2850,
      rating: 4.8,
      reviews: 124,
      image: "/placeholder.svg?height=200&width=200&query=obd2+scanner",
      brand: "Autel",
      fitment: "Universal Fit",
    },
    {
      id: 2,
      name: "Hydraulic Floor Jack (2-Ton)",
      price: 3250,
      rating: 4.7,
      reviews: 86,
      image: "/placeholder.svg?height=200&width=200&query=hydraulic+floor+jack",
      brand: "Torin",
      fitment: "Universal",
    },
    {
      id: 3,
      name: "Socket Set (40-Piece)",
      price: 1750,
      rating: 4.6,
      reviews: 92,
      image: "/placeholder.svg?height=200&width=200&query=socket+set+tools",
      brand: "Stanley",
      fitment: "Universal",
    },
    {
      id: 4,
      name: "Digital Tire Pressure Gauge",
      price: 450,
      rating: 4.5,
      reviews: 78,
      image: "/placeholder.svg?height=200&width=200&query=digital+tire+pressure+gauge",
      brand: "Slime",
      fitment: "Universal",
    },
    {
      id: 5,
      name: "Car Battery Charger",
      price: 1950,
      rating: 4.9,
      reviews: 112,
      image: "/placeholder.svg?height=200&width=200&query=car+battery+charger",
      brand: "NOCO",
      fitment: "Universal",
    },
    {
      id: 6,
      name: "Torque Wrench (1/2-inch Drive)",
      price: 2450,
      rating: 4.4,
      reviews: 65,
      image: "/placeholder.svg?height=200&width=200&query=torque+wrench",
      brand: "Tekton",
      fitment: "Universal",
    },
    {
      id: 7,
      name: "Multimeter - Automotive",
      price: 1250,
      rating: 4.7,
      reviews: 94,
      image: "/placeholder.svg?height=200&width=200&query=automotive+multimeter",
      brand: "Fluke",
      fitment: "Universal",
    },
    {
      id: 8,
      name: "Car Ramps (Pair)",
      price: 1950,
      rating: 4.3,
      reviews: 56,
      image: "/placeholder.svg?height=200&width=200&query=car+ramps",
      brand: "RhinoRamps",
      fitment: "Universal",
    },
  ]

  // Sample subcategories
  const subcategories = [
    { name: "Diagnostic Tools", count: 145 },
    { name: "Hand Tools", count: 187 },
    { name: "Jacks & Lifts", count: 98 },
    { name: "Battery Tools", count: 124 },
    { name: "Tire Tools", count: 112 },
    { name: "Specialty Tools", count: 156 },
    { name: "Garage Equipment", count: 87 },
  ]

  // Sample brands
  const brands = [
    { name: "Autel", count: 124 },
    { name: "Stanley", count: 98 },
    { name: "Torin", count: 76 },
    { name: "NOCO", count: 65 },
    { name: "Tekton", count: 54 },
    { name: "Fluke", count: 48 },
    { name: "Craftsman", count: 112 },
  ]

  // Featured categories
  const featuredCategories = [
    {
      name: "Maintenance",
      description: "Kits and supplies for regular vehicle maintenance",
      image: "/placeholder.svg?height=200&width=200&query=maintenance+kit",
      href: "/categories/tools/maintenance",
    },
    {
      name: "Car Care",
      description: "Cleaning, detailing, and protection products",
      image: "/placeholder.svg?height=200&width=200&query=car+care+products",
      href: "/categories/tools/car-care",
    },
    {
      name: "Diagnostic Tools",
      description: "OBD scanners and diagnostic equipment",
      image: "/placeholder.svg?height=200&width=200&query=diagnostic+tools",
      href: "/categories/tools/diagnostic-tools",
    },
    {
      name: "Hand Tools",
      description: "Wrenches, sockets, and specialty tools",
      image: "/placeholder.svg?height=200&width=200&query=hand+tools",
      href: "/categories/tools/hand-tools",
    },
  ]

  return (
    <div>
      {/* Category Header */}
      <div className="bg-[#2E2E2E] text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Tools & Garage</h1>
          <p className="text-gray-300 max-w-3xl">
            Find high-quality automotive tools and garage equipment for maintaining and repairing your vehicle. We offer
            professional-grade tools designed for both DIY enthusiasts and professional mechanics.
          </p>
        </div>
      </div>

      {/* Featured Categories */}
      <div className="bg-white py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Featured Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCategories.map((category, index) => (
              <Link
                key={index}
                href={category.href}
                className="bg-gray-50 border rounded-lg overflow-hidden hover:shadow-md transition-all hover:border-[#007BFF]"
              >
                <div className="aspect-square relative">
                  <Image src={category.image || "/placeholder.svg"} alt={category.name} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg">{category.name}</h3>
                  <p className="text-gray-600 mt-1">{category.description}</p>
                  <Button variant="link" className="mt-2 p-0 h-auto text-[#C8102E]">
                    Shop Now
                  </Button>
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

              {/* Subcategories */}
              <div className="mb-6">
                <h3 className="font-semibold mb-2 text-sm uppercase text-gray-500">Subcategories</h3>
                <ul className="space-y-2">
                  {subcategories.map((subcategory, index) => (
                    <li key={index}>
                      <Link
                        href={`/categories/tools/${subcategory.name.toLowerCase().replace(/\s+/g, "-")}`}
                        className="flex items-center justify-between text-sm hover:text-[#007BFF]"
                      >
                        <span>{subcategory.name}</span>
                        <span className="text-gray-500 text-xs">({subcategory.count})</span>
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

              {/* Tool Type */}
              <div>
                <h3 className="font-semibold mb-2 text-sm uppercase text-gray-500">Tool Type</h3>
                <select className="w-full border rounded-md px-3 py-2 text-sm">
                  <option value="">All Tool Types</option>
                  <option value="hand-tools">Hand Tools</option>
                  <option value="power-tools">Power Tools</option>
                  <option value="diagnostic">Diagnostic Tools</option>
                  <option value="specialty">Specialty Tools</option>
                  <option value="garage">Garage Equipment</option>
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
                <span className="text-sm text-gray-500">Showing 1-8 of 892 products</span>
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
                  9
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </nav>
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
              href="/categories/engine"
              className="bg-white border rounded-lg p-4 hover:border-[#007BFF] transition-colors"
            >
              <h3 className="font-medium mb-1">Engine & Drivetrain</h3>
              <p className="text-sm text-gray-500">Engine parts, filters, and more</p>
            </Link>
            <Link
              href="/categories/brakes"
              className="bg-white border rounded-lg p-4 hover:border-[#007BFF] transition-colors"
            >
              <h3 className="font-medium mb-1">Brakes & Suspension</h3>
              <p className="text-sm text-gray-500">Brake pads, rotors, shocks, and more</p>
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
          <h2 className="text-xl font-bold mb-4">Automotive Tools & Garage Equipment</h2>
          <div className="prose max-w-none text-gray-700">
            <p>
              Find the right tools for maintaining and repairing your vehicle with our comprehensive selection of
              automotive tools and garage equipment. At PyeSakto.ph, we offer professional-grade tools designed for both
              DIY enthusiasts and professional mechanics in the Philippines.
            </p>
            <p className="mt-4">
              Our catalog includes diagnostic tools, hand tools, jacks and lifts, battery tools, tire tools, specialty
              tools, and garage equipment. Whether you're performing basic maintenance or tackling complex repairs, we
              have the tools you need to get the job done right.
            </p>
            <h3 className="text-lg font-semibold mt-4">Quality Tools Matter</h3>
            <p>
              Using quality tools is essential for effective vehicle maintenance and repairs. Our tools are designed to
              meet the demands of professional mechanics while remaining accessible to DIY enthusiasts. We offer tools
              from trusted brands known for their durability, precision, and value.
            </p>
            <h3 className="text-lg font-semibold mt-4">Popular Automotive Tools</h3>
            <ul className="list-disc pl-5 mt-2">
              <li>OBD2 scanners for diagnosing check engine lights</li>
              <li>Socket sets for various fastening needs</li>
              <li>Floor jacks and jack stands for safe vehicle lifting</li>
              <li>Battery chargers and jump starters for electrical system maintenance</li>
              <li>Torque wrenches for precise fastener tightening</li>
              <li>Specialty tools for specific vehicle makes and models</li>
            </ul>
            <p className="mt-4">
              Browse our selection to find the perfect tools for maintaining and repairing your Toyota, Honda,
              Mitsubishi, Nissan, Hyundai, or other vehicle models popular in the Philippines.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
