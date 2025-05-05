import Image from "next/image"
import Link from "next/link"
import { Filter, SlidersHorizontal, Calendar, PenToolIcon as Tool, Clock, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MaintenancePage() {
  // Sample products data
  const products = [
    {
      id: 1,
      name: "Oil Change Kit - Toyota Vios",
      price: 1250,
      rating: 4.8,
      reviews: 156,
      image: "/placeholder.svg?height=200&width=200&query=oil+change+kit",
      brand: "PyeSakto",
      fitment: "Toyota Vios 2015-2024",
    },
    {
      id: 2,
      name: "Brake Service Kit",
      price: 1850,
      rating: 4.7,
      reviews: 92,
      image: "/placeholder.svg?height=200&width=200&query=brake+service+kit",
      brand: "PyeSakto",
      fitment: "Universal",
    },
    {
      id: 3,
      name: "Air Filter Replacement Kit",
      price: 750,
      rating: 4.6,
      reviews: 78,
      image: "/placeholder.svg?height=200&width=200&query=air+filter+kit",
      brand: "PyeSakto",
      fitment: "Multiple Vehicles",
    },
    {
      id: 4,
      name: "Spark Plug Replacement Kit",
      price: 950,
      rating: 4.5,
      reviews: 64,
      image: "/placeholder.svg?height=200&width=200&query=spark+plug+kit",
      brand: "PyeSakto",
      fitment: "Multiple Vehicles",
    },
    {
      id: 5,
      name: "Fluid Top-Up Kit",
      price: 1450,
      rating: 4.9,
      reviews: 112,
      image: "/placeholder.svg?height=200&width=200&query=fluid+top+up+kit",
      brand: "PyeSakto",
      fitment: "Universal",
    },
    {
      id: 6,
      name: "Timing Belt Replacement Kit",
      price: 2450,
      rating: 4.4,
      reviews: 58,
      image: "/placeholder.svg?height=200&width=200&query=timing+belt+kit",
      brand: "PyeSakto",
      fitment: "Toyota/Honda Models",
    },
    {
      id: 7,
      name: "Cooling System Flush Kit",
      price: 1250,
      rating: 4.7,
      reviews: 86,
      image: "/placeholder.svg?height=200&width=200&query=cooling+system+flush",
      brand: "PyeSakto",
      fitment: "Universal",
    },
    {
      id: 8,
      name: "Battery Maintenance Kit",
      price: 950,
      rating: 4.3,
      reviews: 52,
      image: "/placeholder.svg?height=200&width=200&query=battery+maintenance",
      brand: "PyeSakto",
      fitment: "Universal",
    },
  ]

  // Sample maintenance categories
  const maintenanceCategories = [
    { name: "Oil Change", count: 145, icon: <Tool className="h-8 w-8 mb-2 text-[#C8102E]" /> },
    { name: "Brake Service", count: 87, icon: <Tool className="h-8 w-8 mb-2 text-[#C8102E]" /> },
    { name: "Filter Replacement", count: 112, icon: <Tool className="h-8 w-8 mb-2 text-[#C8102E]" /> },
    { name: "Fluid Service", count: 94, icon: <Tool className="h-8 w-8 mb-2 text-[#C8102E]" /> },
    { name: "Battery Service", count: 76, icon: <Tool className="h-8 w-8 mb-2 text-[#C8102E]" /> },
    { name: "Tune-Up Kits", count: 68, icon: <Tool className="h-8 w-8 mb-2 text-[#C8102E]" /> },
  ]

  // Sample brands
  const brands = [
    { name: "PyeSakto", count: 124 },
    { name: "Castrol", count: 98 },
    { name: "Bosch", count: 76 },
    { name: "Mobil", count: 65 },
    { name: "Shell", count: 54 },
    { name: "NGK", count: 48 },
    { name: "Mann-Filter", count: 42 },
  ]

  // Sample maintenance schedules
  const maintenanceSchedules = [
    {
      interval: "Every 5,000 km",
      tasks: ["Oil change", "Oil filter replacement", "Tire rotation", "Fluid level check"],
      icon: <Calendar className="h-8 w-8 text-[#C8102E]" />,
    },
    {
      interval: "Every 10,000 km",
      tasks: ["Air filter replacement", "Cabin filter replacement", "Brake inspection", "Battery check"],
      icon: <Calendar className="h-8 w-8 text-[#C8102E]" />,
    },
    {
      interval: "Every 20,000 km",
      tasks: ["Spark plug inspection", "Fuel filter replacement", "Transmission fluid check", "Cooling system check"],
      icon: <Calendar className="h-8 w-8 text-[#C8102E]" />,
    },
    {
      interval: "Every 40,000 km",
      tasks: ["Timing belt inspection", "Brake fluid replacement", "Power steering fluid replacement"],
      icon: <Calendar className="h-8 w-8 text-[#C8102E]" />,
    },
  ]

  return (
    <div>
      {/* Category Header */}
      <div className="bg-[#2E2E2E] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="md:w-2/3">
              <h1 className="text-3xl font-bold mb-2">Vehicle Maintenance</h1>
              <p className="text-gray-300 max-w-3xl">
                Keep your vehicle running at its best with our comprehensive selection of maintenance kits and supplies.
                From regular oil changes to major service intervals, we have everything you need to maintain your
                vehicle properly.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Button className="bg-[#C8102E] hover:bg-[#A50D26]">Shop All Maintenance</Button>
                <Button variant="outline" className="text-white border-white hover:bg-gray-800">
                  Maintenance Guide
                </Button>
              </div>
            </div>
            <div className="md:w-1/3 mt-6 md:mt-0 flex justify-center">
              <div className="relative w-64 h-64">
                <Image
                  src="/placeholder.svg?height=300&width=300&query=car+maintenance"
                  alt="Vehicle Maintenance"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Maintenance Categories */}
      <div className="bg-white py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Maintenance Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {maintenanceCategories.map((category, index) => (
              <Link
                key={index}
                href={`/categories/tools/maintenance/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
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

              {/* Maintenance Type */}
              <div className="mb-6">
                <h3 className="font-semibold mb-2 text-sm uppercase text-gray-500">Maintenance Type</h3>
                <ul className="space-y-2">
                  {maintenanceCategories.map((category, index) => (
                    <li key={index}>
                      <Link
                        href={`/categories/tools/maintenance/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
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

              {/* Vehicle Compatibility */}
              <div>
                <h3 className="font-semibold mb-2 text-sm uppercase text-gray-500">Vehicle Compatibility</h3>
                <select className="w-full border rounded-md px-3 py-2 text-sm">
                  <option value="">All Vehicles</option>
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
                <span className="text-sm text-gray-500">Showing 1-8 of 642 products</span>
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
                  8
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Maintenance Schedule Guide */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Maintenance Schedule Guide</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {maintenanceSchedules.map((schedule, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center mb-4">
                  {schedule.icon}
                  <h3 className="text-xl font-semibold ml-2">{schedule.interval}</h3>
                </div>
                <ul className="space-y-2">
                  {schedule.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full mt-4">
                  Shop {schedule.interval} Kit
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* DIY Maintenance Tips */}
      <div className="container mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold mb-8">DIY Maintenance Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border rounded-lg overflow-hidden">
            <div className="aspect-video relative">
              <Image
                src="/placeholder.svg?height=300&width=500&query=oil+change"
                alt="Oil Change Guide"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">How to Change Your Oil</h3>
              <p className="text-gray-600 mb-4">
                Learn the proper way to change your vehicle's oil and filter for optimal engine performance.
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
                src="/placeholder.svg?height=300&width=500&query=brake+pad+replacement"
                alt="Brake Pad Replacement"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">Brake Pad Replacement Guide</h3>
              <p className="text-gray-600 mb-4">
                Step-by-step instructions for replacing your vehicle's brake pads safely and effectively.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="h-4 w-4 mr-1" />
                <span>20 minutes read</span>
              </div>
              <Button variant="link" className="mt-2 p-0 h-auto text-[#C8102E]">
                Read Guide
              </Button>
            </div>
          </div>

          <div className="bg-white border rounded-lg overflow-hidden">
            <div className="aspect-video relative">
              <Image
                src="/placeholder.svg?height=300&width=500&query=air+filter+replacement"
                alt="Air Filter Replacement"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">Air Filter Replacement</h3>
              <p className="text-gray-600 mb-4">
                Quick and easy instructions for replacing your engine and cabin air filters.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="h-4 w-4 mr-1" />
                <span>10 minutes read</span>
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
              href="/categories/tools/car-care"
              className="bg-white border rounded-lg p-4 hover:border-[#007BFF] transition-colors"
            >
              <h3 className="font-medium mb-1">Car Care</h3>
              <p className="text-sm text-gray-500">Cleaning, detailing, and protection products</p>
            </Link>
            <Link
              href="/categories/tools"
              className="bg-white border rounded-lg p-4 hover:border-[#007BFF] transition-colors"
            >
              <h3 className="font-medium mb-1">Tools & Equipment</h3>
              <p className="text-sm text-gray-500">Specialty tools and diagnostic equipment</p>
            </Link>
            <Link
              href="/categories/engine"
              className="bg-white border rounded-lg p-4 hover:border-[#007BFF] transition-colors"
            >
              <h3 className="font-medium mb-1">Engine Parts</h3>
              <p className="text-sm text-gray-500">Filters, belts, hoses, and more</p>
            </Link>
            <Link
              href="/categories/brakes"
              className="bg-white border rounded-lg p-4 hover:border-[#007BFF] transition-colors"
            >
              <h3 className="font-medium mb-1">Brakes & Suspension</h3>
              <p className="text-sm text-gray-500">Brake pads, rotors, shocks, and more</p>
            </Link>
          </div>
        </div>
      </div>

      {/* SEO Content */}
      <div className="container mx-auto py-8 px-4">
        <div className="bg-white border rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Vehicle Maintenance Supplies & Kits</h2>
          <div className="prose max-w-none text-gray-700">
            <p>
              Regular maintenance is essential for keeping your vehicle running smoothly and extending its lifespan. At
              PyeSakto.ph, we offer a comprehensive selection of maintenance supplies and kits designed specifically for
              vehicles in the Philippines.
            </p>
            <p className="mt-4">
              Our maintenance kits include everything you need for specific service intervals, from basic oil changes to
              comprehensive tune-ups. Each kit contains high-quality parts and supplies that meet or exceed manufacturer
              specifications, ensuring your vehicle receives the care it deserves.
            </p>
            <h3 className="text-lg font-semibold mt-4">Why Regular Maintenance Matters</h3>
            <p>
              Regular maintenance helps prevent costly repairs, improves fuel efficiency, ensures safety, and maintains
              your vehicle's value. Following your vehicle's recommended maintenance schedule is the best way to protect
              your investment and enjoy trouble-free driving for years to come.
            </p>
            <h3 className="text-lg font-semibold mt-4">Popular Maintenance Services</h3>
            <ul className="list-disc pl-5 mt-2">
              <li>Oil and filter changes every 5,000-10,000 km</li>
              <li>Air filter replacement every 15,000-30,000 km</li>
              <li>Brake fluid replacement every 2 years or 40,000 km</li>
              <li>Coolant replacement every 2-5 years or 40,000-100,000 km</li>
              <li>Spark plug replacement every 30,000-100,000 km (depending on type)</li>
              <li>Timing belt replacement every 60,000-100,000 km</li>
            </ul>
            <p className="mt-4">
              Browse our selection to find the perfect maintenance supplies and kits for your Toyota, Honda, Mitsubishi,
              Nissan, Hyundai, or other vehicle models popular in the Philippines.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
