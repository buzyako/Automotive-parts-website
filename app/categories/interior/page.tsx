import Image from "next/image"
import Link from "next/link"
import { Filter, SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function InteriorCategory() {
  // Sample products data
  const products = [
    {
      id: 1,
      name: "Floor Mats (Set of 4) - Toyota Vios 2018-2022",
      price: 1850,
      rating: 4.8,
      reviews: 124,
      image: "/placeholder.svg?height=200&width=200&query=car+floor+mats",
      brand: "WeatherTech",
      fitment: "Toyota Vios 2018-2022",
    },
    {
      id: 2,
      name: "Seat Covers - Honda City",
      price: 2250,
      rating: 4.6,
      reviews: 86,
      image: "/placeholder.svg?height=200&width=200&query=car+seat+covers",
      brand: "Coverking",
      fitment: "Honda City 2015-2020",
    },
    {
      id: 3,
      name: "Steering Wheel Cover - Universal Fit",
      price: 750,
      rating: 4.7,
      reviews: 92,
      image: "/placeholder.svg?height=200&width=200&query=steering+wheel+cover",
      brand: "AutoCraft",
      fitment: "Universal Fit",
    },
    {
      id: 4,
      name: "Dashboard Cover - Nissan Navara",
      price: 1250,
      rating: 4.5,
      reviews: 78,
      image: "/placeholder.svg?height=200&width=200&query=dashboard+cover",
      brand: "DashMat",
      fitment: "Nissan Navara 2015-2021",
    },
    {
      id: 5,
      name: "Center Console Organizer - Hyundai Accent",
      price: 950,
      rating: 4.9,
      reviews: 112,
      image: "/placeholder.svg?height=200&width=200&query=car+console+organizer",
      brand: "AutoExec",
      fitment: "Hyundai Accent 2018-2022",
    },
    {
      id: 6,
      name: "Sun Shade (Set of 2) - Toyota Fortuner",
      price: 650,
      rating: 4.4,
      reviews: 65,
      image: "/placeholder.svg?height=200&width=200&query=car+window+sun+shade",
      brand: "Enovoe",
      fitment: "Toyota Fortuner 2016-2021",
    },
    {
      id: 7,
      name: "Air Freshener Vent Clips (Pack of 4) - All Vehicles",
      price: 350,
      rating: 4.7,
      reviews: 94,
      image: "/placeholder.svg?height=200&width=200&query=car+air+freshener",
      brand: "Febreze",
      fitment: "Universal Fit",
    },
    {
      id: 8,
      name: "Cargo Liner - Mitsubishi Montero Sport",
      price: 1950,
      rating: 4.3,
      reviews: 56,
      image: "/placeholder.svg?height=200&width=200&query=car+cargo+liner",
      brand: "Husky Liners",
      fitment: "Mitsubishi Montero Sport 2016-2022",
    },
  ]

  // Sample subcategories
  const subcategories = [
    { name: "Floor Mats", count: 145 },
    { name: "Seat Covers", count: 187 },
    { name: "Steering Wheel Covers", count: 98 },
    { name: "Dashboard Accessories", count: 124 },
    { name: "Console Organizers", count: 76 },
    { name: "Sun Shades", count: 112 },
    { name: "Cargo Management", count: 87 },
  ]

  // Sample brands
  const brands = [
    { name: "WeatherTech", count: 124 },
    { name: "Coverking", count: 98 },
    { name: "DashMat", count: 76 },
    { name: "AutoCraft", count: 65 },
    { name: "Husky Liners", count: 54 },
    { name: "Enovoe", count: 48 },
    { name: "AutoExec", count: 42 },
  ]

  return (
    <div>
      {/* Category Header */}
      <div className="bg-[#2E2E2E] text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Interior Parts</h1>
          <p className="text-gray-300 max-w-3xl">
            Enhance your vehicle's interior with our selection of high-quality interior accessories and parts. We offer
            OEM and aftermarket solutions for all popular Philippine vehicles to improve comfort and style.
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
                        href={`/categories/interior/${subcategory.name.toLowerCase().replace(/\s+/g, "-")}`}
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
                <span className="text-sm text-gray-500">Showing 1-8 of 829 products</span>
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
              href="/categories/exterior"
              className="bg-white border rounded-lg p-4 hover:border-[#007BFF] transition-colors"
            >
              <h3 className="font-medium mb-1">Exterior Parts</h3>
              <p className="text-sm text-gray-500">Bumpers, grilles, mirrors, and more</p>
            </Link>
            <Link
              href="/categories/tools"
              className="bg-white border rounded-lg p-4 hover:border-[#007BFF] transition-colors"
            >
              <h3 className="font-medium mb-1">Tools & Garage</h3>
              <p className="text-sm text-gray-500">Specialty tools and equipment</p>
            </Link>
            <Link
              href="/categories/headlights"
              className="bg-white border rounded-lg p-4 hover:border-[#007BFF] transition-colors"
            >
              <h3 className="font-medium mb-1">Headlights & Lighting</h3>
              <p className="text-sm text-gray-500">Headlights, tail lights, and fog lights</p>
            </Link>
            <Link
              href="/categories/body"
              className="bg-white border rounded-lg p-4 hover:border-[#007BFF] transition-colors"
            >
              <h3 className="font-medium mb-1">Body Parts</h3>
              <p className="text-sm text-gray-500">Fenders, hoods, doors, and panels</p>
            </Link>
          </div>
        </div>
      </div>

      {/* SEO Content */}
      <div className="container mx-auto py-8 px-4">
        <div className="bg-white border rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Interior Parts & Accessories for Philippine Vehicles</h2>
          <div className="prose max-w-none text-gray-700">
            <p>
              Enhance your vehicle's interior comfort, style, and functionality with our comprehensive selection of
              interior parts and accessories. At PyeSakto.ph, we offer a wide range of interior products specifically
              designed for vehicles in the Philippines.
            </p>
            <p className="mt-4">
              Our catalog includes floor mats, seat covers, steering wheel covers, dashboard accessories, console
              organizers, sun shades, and cargo management solutions. Whether you're looking to protect your vehicle's
              interior, add comfort features, or enhance its appearance, we have options for all popular makes and
              models in the Philippines.
            </p>
            <h3 className="text-lg font-semibold mt-4">Quality Interior Products Matter</h3>
            <p>
              Using quality interior accessories is essential for both comfort and protecting your vehicle's value. Our
              interior products are designed to withstand the Philippine climate, including high temperatures and
              humidity. We offer both OEM-style replacements and premium aftermarket upgrades to suit your budget and
              preferences.
            </p>
            <h3 className="text-lg font-semibold mt-4">Popular Interior Accessories</h3>
            <ul className="list-disc pl-5 mt-2">
              <li>All-weather floor mats to protect against mud and water</li>
              <li>Seat covers for comfort and protection from wear</li>
              <li>Steering wheel covers for improved grip and comfort</li>
              <li>Dashboard covers to reduce glare and protect from sun damage</li>
              <li>Console organizers to keep your vehicle tidy</li>
              <li>Window sun shades to reduce heat and protect upholstery</li>
            </ul>
            <p className="mt-4">
              Browse our selection to find the perfect interior accessories for your Toyota, Honda, Mitsubishi, Nissan,
              Hyundai, or other vehicle models popular in the Philippines.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
