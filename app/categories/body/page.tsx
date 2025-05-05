import Image from "next/image"
import Link from "next/link"
import { Filter, SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BodyPartsCategory() {
  // Sample products data
  const products = [
    {
      id: 1,
      name: "Front Bumper Cover - Toyota Vios 2018-2022",
      price: 5850,
      rating: 4.7,
      reviews: 98,
      image: "/car-bumper.png",
      brand: "TYC",
      fitment: "Toyota Vios 2018-2022",
    },
    {
      id: 2,
      name: "Side Mirror Assembly - Honda City 2015-2020",
      price: 2750,
      rating: 4.6,
      reviews: 76,
      image: "/car-mirrors.png",
      brand: "Depo",
      fitment: "Honda City 2015-2020",
    },
    {
      id: 3,
      name: "Front Fender - Mitsubishi Mirage G4",
      price: 3950,
      rating: 4.8,
      reviews: 84,
      image: "/car-fenders.png",
      brand: "Eagle Eyes",
      fitment: "Mitsubishi Mirage G4 2016-2021",
    },
    {
      id: 4,
      name: "Hood Panel - Nissan Navara",
      price: 7250,
      rating: 4.5,
      reviews: 62,
      image: "/placeholder.svg?key=8upev",
      brand: "Genuine Nissan",
      fitment: "Nissan Navara 2015-2021",
    },
    {
      id: 5,
      name: "Door Shell - Hyundai Accent",
      price: 8950,
      rating: 4.7,
      reviews: 54,
      image: "/car-door-shell.png",
      brand: "Spec-D",
      fitment: "Hyundai Accent 2018-2022",
    },
    {
      id: 6,
      name: "Trunk Lid - Toyota Fortuner",
      price: 6450,
      rating: 4.4,
      reviews: 48,
      image: "/car-trunk-lid.png",
      brand: "TYC",
      fitment: "Toyota Fortuner 2016-2021",
    },
    {
      id: 7,
      name: "Radiator Support - Honda Civic",
      price: 4850,
      rating: 4.6,
      reviews: 72,
      image: "/car-radiator-support.png",
      brand: "Depo",
      fitment: "Honda Civic 2016-2021",
    },
    {
      id: 8,
      name: "Roof Panel - Universal Fit",
      price: 9950,
      rating: 4.3,
      reviews: 36,
      image: "/placeholder.svg?key=wf08p",
      brand: "Auxbeam",
      fitment: "Universal Fit",
    },
  ]

  // Sample subcategories
  const subcategories = [
    { name: "Bumpers", count: 187 },
    { name: "Fenders", count: 145 },
    { name: "Hoods", count: 98 },
    { name: "Doors", count: 124 },
    { name: "Mirrors", count: 156 },
    { name: "Grilles", count: 112 },
    { name: "Trunk Lids", count: 87 },
  ]

  // Sample brands
  const brands = [
    { name: "TYC", count: 124 },
    { name: "Depo", count: 98 },
    { name: "Eagle Eyes", count: 76 },
    { name: "Spec-D", count: 65 },
    { name: "Genuine OEM", count: 112 },
    { name: "Keystone", count: 54 },
    { name: "Sherman", count: 48 },
  ]

  return (
    <div>
      {/* Category Header */}
      <div className="bg-[#2E2E2E] text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Body Parts & Mirrors</h1>
          <p className="text-gray-300 max-w-3xl">
            Find high-quality body parts, panels, and mirrors for your vehicle. We offer OEM and aftermarket body
            components for all popular Philippine vehicles.
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
                        href={`/categories/body/${subcategory.name.toLowerCase().replace(/\s+/g, "-")}`}
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
                <span className="text-sm text-gray-500">Showing 1-8 of 987 products</span>
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
                  10
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
              href="/categories/headlights"
              className="bg-white border rounded-lg p-4 hover:border-[#007BFF] transition-colors"
            >
              <h3 className="font-medium mb-1">Headlights & Lighting</h3>
              <p className="text-sm text-gray-500">Headlights, tail lights, and fog lights</p>
            </Link>
            <Link
              href="/categories/interior"
              className="bg-white border rounded-lg p-4 hover:border-[#007BFF] transition-colors"
            >
              <h3 className="font-medium mb-1">Interior Parts</h3>
              <p className="text-sm text-gray-500">Seats, dashboards, and trim</p>
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
          <h2 className="text-xl font-bold mb-4">Body Parts & Mirrors for Philippine Vehicles</h2>
          <div className="prose max-w-none text-gray-700">
            <p>
              Finding the right body parts and mirrors for your vehicle is essential for both functionality and
              appearance. At PyeSakto.ph, we offer a comprehensive selection of body components specifically designed
              for vehicles in the Philippines.
            </p>
            <p className="mt-4">
              Our catalog includes OEM replacement body panels, bumpers, fenders, hoods, doors, mirrors, and more.
              Whether you're looking to replace damaged parts after a collision or upgrade your vehicle's appearance, we
              have options for all popular makes and models in the Philippines.
            </p>
            <h3 className="text-lg font-semibold mt-4">Quality Body Parts Matter</h3>
            <p>
              Proper fitting body parts are crucial for both safety and aesthetics. Our body components meet or exceed
              OEM specifications, ensuring optimal fit and durability in local conditions. We offer both genuine OEM
              parts and high-quality aftermarket alternatives to suit your budget and needs.
            </p>
            <h3 className="text-lg font-semibold mt-4">Popular Body Part Replacements</h3>
            <ul className="list-disc pl-5 mt-2">
              <li>Bumper covers and reinforcements for front and rear protection</li>
              <li>Fenders and quarter panels for wheel well coverage</li>
              <li>Hood panels for engine compartment protection</li>
              <li>Door shells and panels for side impact protection</li>
              <li>Side mirrors with manual or power adjustment options</li>
            </ul>
            <p className="mt-4">
              Browse our selection to find the perfect body parts for your Toyota, Honda, Mitsubishi, Nissan, Hyundai,
              or other vehicle models popular in the Philippines.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
