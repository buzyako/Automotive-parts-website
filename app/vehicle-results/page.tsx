"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Filter, SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"

export default function VehicleResultsPage() {
  const searchParams = useSearchParams()
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [categories, setCategories] = useState([])

  // Get vehicle parameters from URL
  const year = searchParams.get("year")
  const make = searchParams.get("make")
  const model = searchParams.get("model")
  const engine = searchParams.get("engine")

  // Format vehicle name for display
  const vehicleName = `${year} ${make ? make.charAt(0).toUpperCase() + make.slice(1) : ""} ${
    model ? model.charAt(0).toUpperCase() + model.slice(1) : ""
  } ${engine ? engine.toUpperCase() : ""}`.trim()

  useEffect(() => {
    // In a real app, this would be an API call with the vehicle parameters
    // For this demo, we'll simulate loading products that match the vehicle
    const fetchProducts = async () => {
      setLoading(true)

      // This is sample data - in a real app, you would fetch from an API with the vehicle parameters
      const allProducts = [
        {
          id: 1,
          name: "Front Brake Pads",
          price: 1850,
          rating: 4.8,
          reviews: 124,
          image: "/brake-pads-close-up.png",
          brand: "Bendix",
          category: "Brakes",
          fitment: ["toyota vios", "honda city", "mitsubishi mirage"],
          years: ["2018", "2019", "2020", "2021", "2022"],
        },
        {
          id: 2,
          name: "Oil Filter",
          price: 350,
          rating: 4.7,
          reviews: 86,
          image: "/oil-filter.png",
          brand: "Sakura",
          category: "Engine",
          fitment: ["toyota vios", "toyota fortuner", "honda city"],
          years: ["2015", "2016", "2017", "2018", "2019", "2020"],
        },
        {
          id: 3,
          name: "Headlight Assembly",
          price: 4850,
          rating: 4.6,
          reviews: 72,
          image: "/car-headlights.png",
          brand: "TYC",
          category: "Lighting",
          fitment: ["toyota vios", "honda civic", "mitsubishi mirage"],
          years: ["2018", "2019", "2020", "2021", "2022"],
        },
        {
          id: 4,
          name: "Air Filter",
          price: 450,
          rating: 4.5,
          reviews: 68,
          image: "/air-filter.png",
          brand: "K&N",
          category: "Engine",
          fitment: ["toyota vios", "toyota fortuner", "honda city"],
          years: ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"],
        },
        {
          id: 5,
          name: "Spark Plugs (Set of 4)",
          price: 1250,
          rating: 4.9,
          reviews: 112,
          image: "/spark-plugs.png",
          brand: "NGK",
          category: "Engine",
          fitment: ["toyota vios", "honda city", "mitsubishi mirage"],
          years: ["2018", "2019", "2020", "2021", "2022"],
        },
        {
          id: 6,
          name: "Side Mirror",
          price: 2750,
          rating: 4.4,
          reviews: 56,
          image: "/car-mirrors.png",
          brand: "Depo",
          category: "Body",
          fitment: ["toyota vios", "honda city"],
          years: ["2016", "2017", "2018", "2019", "2020", "2021"],
        },
        {
          id: 7,
          name: "Floor Mats (Set of 4)",
          price: 1650,
          rating: 4.7,
          reviews: 64,
          image: "/placeholder.svg?key=89kmc",
          brand: "WeatherTech",
          category: "Interior",
          fitment: ["toyota vios", "honda city", "mitsubishi mirage"],
          years: ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"],
        },
        {
          id: 8,
          name: "Wiper Blades (Pair)",
          price: 850,
          rating: 4.3,
          reviews: 48,
          image: "/wiper-blades.png",
          brand: "Bosch",
          category: "Exterior",
          fitment: ["toyota vios", "honda city", "mitsubishi mirage", "toyota fortuner"],
          years: ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"],
        },
      ]

      setProducts(allProducts)

      // Filter products based on vehicle parameters
      let filtered = allProducts

      if (make && model) {
        const vehicleString = `${make} ${model}`.toLowerCase()
        filtered = filtered.filter((product) => product.fitment.some((fit) => fit.includes(vehicleString)))
      }

      if (year) {
        filtered = filtered.filter((product) => product.years.includes(year))
      }

      // Extract unique categories from filtered products
      const uniqueCategories = [...new Set(filtered.map((product) => product.category))]
      setCategories(uniqueCategories)

      setFilteredProducts(filtered)
      setLoading(false)
    }

    fetchProducts()
  }, [year, make, model, engine])

  return (
    <div>
      {/* Header */}
      <Header />

      {/* Results Header */}
      <div className="bg-[#2E2E2E] text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Parts for {vehicleName}</h1>
          <p className="text-gray-300 max-w-3xl">
            Showing all compatible parts and accessories for your {vehicleName}. All products are guaranteed to fit your
            vehicle.
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

              {/* Categories */}
              <div className="mb-6">
                <h3 className="font-semibold mb-2 text-sm uppercase text-gray-500">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`category-${index}`}
                        className="mr-2 rounded border-gray-300 text-[#C8102E] focus:ring-[#C8102E]"
                        defaultChecked
                      />
                      <label htmlFor={`category-${index}`} className="text-sm">
                        {category}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Brands */}
              <div className="mb-6">
                <h3 className="font-semibold mb-2 text-sm uppercase text-gray-500">Brands</h3>
                <ul className="space-y-2">
                  {[...new Set(filteredProducts.map((product) => product.brand))].map((brand, index) => (
                    <li key={index} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`brand-${index}`}
                        className="mr-2 rounded border-gray-300 text-[#C8102E] focus:ring-[#C8102E]"
                        defaultChecked
                      />
                      <label htmlFor={`brand-${index}`} className="text-sm">
                        {brand}
                      </label>
                    </li>
                  ))}
                </ul>
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
                <span className="text-sm text-gray-500">Showing {filteredProducts.length} compatible products</span>
              </div>
            </div>

            {/* Loading State */}
            {loading ? (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#C8102E]"></div>
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="bg-white border rounded-lg p-8 text-center">
                <h2 className="text-xl font-bold mb-2">No Compatible Parts Found</h2>
                <p className="text-gray-600 mb-4">
                  We couldn't find any parts that match your {vehicleName}. Please try a different vehicle or contact
                  our support team for assistance.
                </p>
                <Button className="bg-[#C8102E] hover:bg-[#A50D26] text-white">Browse All Products</Button>
              </div>
            ) : (
              <>
                {/* Products */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {filteredProducts.map((product) => (
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
                        <div className="mt-2 text-xs text-gray-500">
                          <span className="bg-green-100 text-green-800 px-1.5 py-0.5 rounded-sm">
                            Fits Your {make?.charAt(0).toUpperCase() + make?.slice(1) || ""}{" "}
                            {model?.charAt(0).toUpperCase() + model?.slice(1) || ""}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
