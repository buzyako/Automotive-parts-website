import Image from "next/image"
import Link from "next/link"
import { Filter, SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeadlightsCategory() {
  // Sample products data
  const products = [
    {
      id: 1,
      name: "LED Headlight Assembly - Toyota Vios 2018-2022",
      price: 4850,
      rating: 4.8,
      reviews: 124,
      image: "/placeholder.svg?key=epvrl",
      brand: "TYC",
      fitment: "Toyota Vios 2018-2022",
    },
    {
      id: 2,
      name: "Halogen Headlamp - Honda City 2015-2020",
      price: 3250,
      rating: 4.5,
      reviews: 86,
      image: "/honda-headlight.png",
      brand: "Depo",
      fitment: "Honda City 2015-2020",
    },
    {
      id: 3,
      name: "Projector Headlight Kit - Mitsubishi Mirage G4",
      price: 5750,
      rating: 4.7,
      reviews: 92,
      image: "/projector-headlight.png",
      brand: "Eagle Eyes",
      fitment: "Mitsubishi Mirage G4 2016-2021",
    },
    {
      id: 4,
      name: "OEM Replacement Headlight - Nissan Navara",
      price: 4250,
      rating: 4.6,
      reviews: 78,
      image: "/placeholder.svg?key=z1i0f",
      brand: "Genuine Nissan",
      fitment: "Nissan Navara 2015-2021",
    },
    {
      id: 5,
      name: "LED DRL Strip Headlights - Hyundai Accent",
      price: 5950,
      rating: 4.9,
      reviews: 112,
      image: "/hyundai-led-headlight.png",
      brand: "Spec-D",
      fitment: "Hyundai Accent 2018-2022",
    },
    {
      id: 6,
      name: "Fog Light Assembly - Toyota Fortuner",
      price: 2450,
      rating: 4.4,
      reviews: 65,
      image: "/placeholder.svg?height=200&width=200&query=fog+light+toyota",
      brand: "TYC",
      fitment: "Toyota Fortuner 2016-2021",
    },
    {
      id: 7,
      name: "Tail Light Assembly - Honda Civic",
      price: 3850,
      rating: 4.7,
      reviews: 94,
      image: "/placeholder.svg?height=200&width=200&query=honda+civic+tail+light",
      brand: "Depo",
      fitment: "Honda Civic 2016-2021",
    },
    {
      id: 8,
      name: "LED Light Bar - Universal Fit",
      price: 1950,
      rating: 4.3,
      reviews: 156,
      image: "/placeholder.svg?height=200&width=200&query=led+light+bar",
      brand: "Auxbeam",
      fitment: "Universal Fit",
    },
  ]

  // Sample subcategories
  const subcategories = [
    { name: "Headlight Assemblies", count: 245 },
    { name: "Tail Lights", count: 187 },
    { name: "Fog Lights", count: 124 },
    { name: "LED Light Bars", count: 98 },
    { name: "Signal Lights", count: 112 },
    { name: "Headlight Bulbs", count: 156 },
    { name: "Light Accessories", count: 87 },
  ]

  // Sample brands
  const brands = [
    { name: "TYC", count: 124 },
    { name: "Depo", count: 98 },
    { name: "Eagle Eyes", count: 76 },
    { name: "Spec-D", count: 65 },
    { name: "Auxbeam", count: 54 },
    { name: "Anzo", count: 48 },
    { name: "Genuine OEM", count: 112 },
  ]

  return (
    <div>
      {/* Category Header */}
      <div className="bg-[#2E2E2E] text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Headlights & Lighting</h1>
          <p className="text-gray-300 max-w-3xl">
            Find high-quality headlights, tail lights, fog lights, and more for your vehicle. We offer OEM and
            aftermarket lighting solutions for all popular Philippine vehicles.
          </p>
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
                        href={`/categories/headlights/${subcategory.name.toLowerCase().replace(/\s+/g, "-")}`}
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

              {/* Vehicle Compatibility */}
              <div>
                <h3 className="font-semibold mb-2 text-sm uppercase text-gray-500">Vehicle Compatibility</h3>
                <select className="w-full border rounded-md px-3 py-2 text-sm">
                  <option value="">Select Make</option>
                  <option value="toyota">Toyota</option>
                  <option value="honda">Honda</option>
                  <option value="mitsubishi">Mitsubishi</option>
                  <option value="nissan">Nissan</option>
                  <option value="hyundai">Hyundai</option>
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
                <span className="text-sm text-gray-500">Showing 1-8 of 1,245 products</span>
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
                  12
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
              href="/categories/exterior"
              className="bg-white border rounded-lg p-4 hover:border-[#007BFF] transition-colors"
            >
              <h3 className="font-medium mb-1">Exterior Parts</h3>
              <p className="text-sm text-gray-500">Bumpers, grilles, mirrors, and more</p>
            </Link>
            <Link
              href="/categories/body"
              className="bg-white border rounded-lg p-4 hover:border-[#007BFF] transition-colors"
            >
              <h3 className="font-medium mb-1">Body Parts</h3>
              <p className="text-sm text-gray-500">Fenders, hoods, doors, and panels</p>
            </Link>
            <Link
              href="/categories/electrical"
              className="bg-white border rounded-lg p-4 hover:border-[#007BFF] transition-colors"
            >
              <h3 className="font-medium mb-1">Electrical</h3>
              <p className="text-sm text-gray-500">Switches, sensors, and wiring</p>
            </Link>
            <Link
              href="/categories/tools"
              className="bg-white border rounded-lg p-4 hover:border-[#007BFF] transition-colors"
            >
              <h3 className="font-medium mb-1">Tools & Garage</h3>
              <p className="text-sm text-gray-500">Specialty tools and equipment</p>
            </Link>
          </div>
        </div>
      </div>

      {/* SEO Content */}
      <div className="container mx-auto py-8 px-4">
        <div className="bg-white border rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Headlights & Lighting for Philippine Vehicles</h2>
          <div className="prose max-w-none text-gray-700">
            <p>
              Finding the right headlights and lighting components for your vehicle is crucial for both safety and
              style. At PyeSakto.ph, we offer a comprehensive selection of lighting products specifically designed for
              vehicles in the Philippines.
            </p>
            <p className="mt-4">
              Our catalog includes OEM replacement headlights, performance LED and HID upgrades, stylish tail lights,
              fog lights, and auxiliary lighting options. Whether you're looking to replace a damaged headlight assembly
              or upgrade your vehicle's appearance with modern lighting technology, we have options for all popular
              makes and models in the Philippines.
            </p>
            <h3 className="text-lg font-semibold mt-4">Why Quality Lighting Matters</h3>
            <p>
              Proper vehicle lighting is essential for safe driving, especially during the Philippines' heavy rain
              seasons and on poorly lit provincial roads. Our lighting products meet or exceed OEM specifications,
              ensuring optimal visibility and durability in local conditions.
            </p>
            <h3 className="text-lg font-semibold mt-4">Popular Lighting Upgrades</h3>
            <ul className="list-disc pl-5 mt-2">
              <li>LED headlight conversion kits for improved visibility</li>
              <li>Projector headlights for better light focus and modern styling</li>
              <li>LED light bars for off-road and provincial driving</li>
              <li>Sequential turn signals for enhanced safety and style</li>
              <li>Smoked or clear tail lights for customized appearance</li>
            </ul>
            <p className="mt-4">
              Browse our selection to find the perfect lighting solutions for your Toyota, Honda, Mitsubishi, Nissan,
              Hyundai, or other vehicle models popular in the Philippines.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
