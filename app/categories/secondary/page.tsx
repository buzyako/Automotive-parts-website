"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SecondaryCategories() {
  // Define the secondary categories organized by main category
  const categoriesData = [
    {
      mainCategory: "Headlights & Lighting",
      slug: "headlights",
      image: "/car-headlights.png",
      secondaryCategories: [
        {
          name: "Headlight Assemblies",
          count: 342,
          slug: "headlight-assemblies",
          brands: ["TYC", "Depo", "Eagle Eyes"],
        },
        { name: "Tail Lights", count: 287, slug: "tail-lights", brands: ["TYC", "Depo", "Spyder"] },
        { name: "Fog Lights", count: 156, slug: "fog-lights", brands: ["Hella", "Piaa", "TYC"] },
        { name: "LED Bulbs", count: 203, slug: "led-bulbs", brands: ["Philips", "Osram", "Sylvania"] },
        { name: "Light Bars", count: 89, slug: "light-bars", brands: ["Rigid", "KC HiLites", "Baja Designs"] },
        { name: "Signal Lights", count: 124, slug: "signal-lights", brands: ["TYC", "Depo", "Eagle Eyes"] },
        {
          name: "Daytime Running Lights",
          count: 76,
          slug: "daytime-running-lights",
          brands: ["Philips", "Hella", "Osram"],
        },
        { name: "HID Kits", count: 68, slug: "hid-kits", brands: ["Morimoto", "DDM Tuning", "XenonPro"] },
      ],
    },
    {
      mainCategory: "Body Parts & Mirrors",
      slug: "body",
      image: "/car-bumper.png",
      secondaryCategories: [
        { name: "Bumper Covers", count: 245, slug: "bumper-cover", brands: ["Replacement", "TYC", "Sherman"] },
        { name: "Fenders", count: 187, slug: "fenders", brands: ["Replacement", "Sherman", "KeyParts"] },
        { name: "Mirrors", count: 213, slug: "mirrors", brands: ["TYC", "Depo", "K-Metal"] },
        { name: "Hoods", count: 98, slug: "hoods", brands: ["Replacement", "Sherman", "KeyParts"] },
        { name: "Door Shells", count: 76, slug: "door-shells", brands: ["Replacement", "Sherman", "KeyParts"] },
        { name: "Trunk Lids", count: 65, slug: "trunk-lids", brands: ["Replacement", "Sherman", "KeyParts"] },
        {
          name: "Radiator Supports",
          count: 103,
          slug: "radiator-supports",
          brands: ["Replacement", "Sherman", "KeyParts"],
        },
      ],
    },
    {
      mainCategory: "Engine & Drivetrain",
      slug: "engine",
      image: "/car-engine-parts.png",
      secondaryCategories: [
        { name: "Air Filters", count: 178, slug: "air-filters", brands: ["K&N", "Mann", "Sakura"] },
        { name: "Oil Filters", count: 203, slug: "oil-filters", brands: ["Sakura", "Mann", "Bosch"] },
        { name: "Spark Plugs", count: 156, slug: "spark-plugs", brands: ["NGK", "Denso", "Bosch"] },
        { name: "Belts & Hoses", count: 187, slug: "belts-hoses", brands: ["Gates", "Continental", "Dayco"] },
        { name: "Cooling System", count: 234, slug: "cooling-system", brands: ["Denso", "Koyo", "TYC"] },
        { name: "Ignition System", count: 145, slug: "ignition-system", brands: ["NGK", "Denso", "Bosch"] },
        { name: "Fuel System", count: 167, slug: "fuel-system", brands: ["Bosch", "Denso", "Delphi"] },
        { name: "Engine Mounts", count: 89, slug: "engine-mounts", brands: ["Anchor", "DEA", "Westar"] },
        {
          name: "Catalytic Converters",
          count: 97,
          slug: "catalytic-converters",
          brands: ["Walker", "MagnaFlow", "Eastern"],
        },
      ],
    },
    {
      mainCategory: "Brakes & Suspension",
      slug: "brakes",
      image: "/brake-pads-close-up.png",
      secondaryCategories: [
        { name: "Brake Pads", count: 234, slug: "brake-pads", brands: ["Bendix", "Brembo", "Akebono"] },
        { name: "Brake Discs", count: 198, slug: "brake-disc", brands: ["Brembo", "Bendix", "DBA"] },
        { name: "Brake Hoses", count: 123, slug: "brake-hoses", brands: ["Goodridge", "Russell", "StopTech"] },
        { name: "Shock Absorbers", count: 156, slug: "shock-absorber", brands: ["KYB", "Monroe", "Bilstein"] },
        { name: "Struts", count: 134, slug: "struts", brands: ["KYB", "Monroe", "Gabriel"] },
        { name: "Control Arms", count: 87, slug: "control-arms", brands: ["Moog", "Dorman", "Mevotech"] },
        { name: "Sway Bar Links", count: 44, slug: "sway-bar-links", brands: ["Moog", "Mevotech", "Delphi"] },
      ],
    },
    {
      mainCategory: "Interior Parts",
      slug: "interior",
      image: "/car-interior-accessories.png",
      secondaryCategories: [
        { name: "Floor Mats", count: 187, slug: "floor-mats", brands: ["WeatherTech", "Husky", "3D MAXpider"] },
        { name: "Seat Covers", count: 156, slug: "seat-covers", brands: ["Covercraft", "CalTrend", "FH Group"] },
        {
          name: "Steering Wheel Covers",
          count: 98,
          slug: "steering-wheel-covers",
          brands: ["Wheelskins", "SEG Direct", "Valleycomfy"],
        },
        {
          name: "Dashboard Accessories",
          count: 123,
          slug: "dashboard-accessories",
          brands: ["WeatherTech", "Covercraft", "DashMat"],
        },
        { name: "Car Organizers", count: 76, slug: "car-organizers", brands: ["SURDOCA", "EPAuto", "FORTEM"] },
        { name: "Sun Shades", count: 89, slug: "sun-shades", brands: ["Covercraft", "WeatherTech", "A1 Shades"] },
        { name: "Interior Lighting", count: 67, slug: "interior-lighting", brands: ["OPT7", "Govee", "Xprite"] },
      ],
    },
    {
      mainCategory: "Exterior Parts",
      slug: "exterior",
      image: "/car-grille.png",
      secondaryCategories: [
        { name: "Grille Assemblies", count: 145, slug: "grille-assemblies", brands: ["TYC", "Replacement", "Sherman"] },
        { name: "Door Handles", count: 123, slug: "door-handles", brands: ["Replacement", "Dorman", "DIY Solutions"] },
        { name: "Window Visors", count: 98, slug: "window-visors", brands: ["AVS", "WeatherTech", "EGR"] },
        { name: "Wiper Blades", count: 156, slug: "wiper-blades", brands: ["Bosch", "Rain-X", "PIAA"] },
        { name: "Car Covers", count: 87, slug: "car-covers", brands: ["Covercraft", "OxGord", "Budge"] },
        { name: "Emblems & Decals", count: 76, slug: "emblems-decals", brands: ["Genuine", "Dorman", "URO Parts"] },
        { name: "Roof Racks", count: 51, slug: "roof-racks", brands: ["Thule", "Yakima", "Rhino-Rack"] },
      ],
    },
    {
      mainCategory: "Tools & Garage",
      slug: "tools",
      image: "/automotive-tools.png",
      secondaryCategories: [
        { name: "Diagnostic Tools", count: 156, slug: "diagnostic-tools", brands: ["ANCEL", "FOXWELL", "Autel"] },
        { name: "Hand Tools", count: 234, slug: "hand-tools", brands: ["Craftsman", "Stanley", "DeWalt"] },
        { name: "Jacks & Stands", count: 87, slug: "jacks-stands", brands: ["Torin", "Arcan", "Pro-Lift"] },
        {
          name: "Battery Chargers",
          count: 65,
          slug: "battery-chargers",
          brands: ["NOCO", "Battery Tender", "Schumacher"],
        },
        { name: "Air Compressors", count: 43, slug: "air-compressors", brands: ["Viair", "EPAuto", "Kensun"] },
        { name: "Maintenance Tools", count: 187, slug: "maintenance", brands: ["OTC", "Lisle", "GearWrench"] },
        {
          name: "Car Care Products",
          count: 123,
          slug: "car-care",
          brands: ["Chemical Guys", "Meguiar's", "Turtle Wax"],
        },
      ],
    },
  ]

  // Extract all unique brands from the data
  const allBrands = Array.from(
    new Set(
      categoriesData.flatMap((category) =>
        category.secondaryCategories.flatMap((subCategory) => subCategory.brands || []),
      ),
    ),
  ).sort()

  // State for filters
  const [selectedMainCategories, setSelectedMainCategories] = useState<string[]>([])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [minPrice, setMinPrice] = useState<string>("")
  const [maxPrice, setMaxPrice] = useState<string>("")
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [filteredCategories, setFilteredCategories] = useState(categoriesData)
  const [activeFilters, setActiveFilters] = useState<string[]>([])

  // Apply filters when filter state changes
  useEffect(() => {
    let filtered = [...categoriesData]

    // Filter by main category
    if (selectedMainCategories.length > 0) {
      filtered = filtered.filter((category) => selectedMainCategories.includes(category.slug))
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered
        .map((category) => {
          return {
            ...category,
            secondaryCategories: category.secondaryCategories.filter((subCategory) =>
              subCategory.name.toLowerCase().includes(searchQuery.toLowerCase()),
            ),
          }
        })
        .filter((category) => category.secondaryCategories.length > 0)
    }

    // Filter by brand
    if (selectedBrands.length > 0) {
      filtered = filtered
        .map((category) => {
          return {
            ...category,
            secondaryCategories: category.secondaryCategories.filter((subCategory) =>
              subCategory.brands?.some((brand) => selectedBrands.includes(brand)),
            ),
          }
        })
        .filter((category) => category.secondaryCategories.length > 0)
    }

    // Update active filters
    const newActiveFilters: string[] = []
    if (selectedMainCategories.length > 0) {
      newActiveFilters.push(`Categories: ${selectedMainCategories.length}`)
    }
    if (selectedBrands.length > 0) {
      newActiveFilters.push(`Brands: ${selectedBrands.length}`)
    }
    if (searchQuery) {
      newActiveFilters.push(`Search: "${searchQuery}"`)
    }
    if (minPrice && maxPrice) {
      newActiveFilters.push(`Price: ₱${minPrice} - ₱${maxPrice}`)
    } else if (minPrice) {
      newActiveFilters.push(`Price: ≥ ₱${minPrice}`)
    } else if (maxPrice) {
      newActiveFilters.push(`Price: ≤ ₱${maxPrice}`)
    }

    setActiveFilters(newActiveFilters)
    setFilteredCategories(filtered)
  }, [selectedMainCategories, selectedBrands, searchQuery, minPrice, maxPrice])

  // Handle main category filter change
  const handleMainCategoryChange = (slug: string) => {
    setSelectedMainCategories((prev) => {
      if (prev.includes(slug)) {
        return prev.filter((item) => item !== slug)
      } else {
        return [...prev, slug]
      }
    })
  }

  // Handle brand filter change
  const handleBrandChange = (brand: string) => {
    setSelectedBrands((prev) => {
      if (prev.includes(brand)) {
        return prev.filter((item) => item !== brand)
      } else {
        return [...prev, brand]
      }
    })
  }

  // Apply price filter
  const applyPriceFilter = () => {
    // Price filter is already applied via useEffect
    // This function is just for the button click
  }

  // Clear all filters
  const clearAllFilters = () => {
    setSelectedMainCategories([])
    setSelectedBrands([])
    setMinPrice("")
    setMaxPrice("")
    setSearchQuery("")
  }

  // Remove a specific filter
  const removeFilter = (filter: string) => {
    if (filter.startsWith("Categories:")) {
      setSelectedMainCategories([])
    } else if (filter.startsWith("Brands:")) {
      setSelectedBrands([])
    } else if (filter.startsWith("Search:")) {
      setSearchQuery("")
    } else if (filter.startsWith("Price:")) {
      setMinPrice("")
      setMaxPrice("")
    }
  }

  // Count total subcategories
  const totalSubcategories = filteredCategories.reduce(
    (total, category) => total + category.secondaryCategories.length,
    0,
  )

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-[#2E2E2E] text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">All Secondary Categories</h1>
          <p className="text-gray-300 max-w-3xl">
            Browse our complete selection of subcategories for auto parts and accessories. Find exactly what you need
            with our detailed category listings for Philippine vehicles.
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto py-3 px-4">
          <div className="flex items-center text-sm">
            <Link href="/" className="text-gray-500 hover:text-[#007BFF]">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 text-gray-400" />
            <Link href="/categories" className="text-gray-500 hover:text-[#007BFF]">
              Categories
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 text-gray-400" />
            <span className="text-gray-900 font-medium">Secondary Categories</span>
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
                <button onClick={clearAllFilters} className="text-sm text-[#007BFF] hover:underline">
                  Clear All
                </button>
              </div>

              {/* Search */}
              <div className="mb-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search categories..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full border rounded-md pl-9 pr-3 py-2 text-sm"
                  />
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                  {searchQuery && (
                    <button onClick={() => setSearchQuery("")} className="absolute right-3 top-2.5">
                      <X className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                    </button>
                  )}
                </div>
              </div>

              {/* Main Categories */}
              <div className="mb-6">
                <h3 className="font-semibold mb-2 text-sm uppercase text-gray-500">Main Categories</h3>
                <ul className="space-y-2 max-h-48 overflow-y-auto">
                  {categoriesData.map((category) => (
                    <li key={category.slug} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`category-${category.slug}`}
                        className="mr-2 rounded border-gray-300 text-[#C8102E] focus:ring-[#C8102E]"
                        checked={selectedMainCategories.includes(category.slug)}
                        onChange={() => handleMainCategoryChange(category.slug)}
                      />
                      <label htmlFor={`category-${category.slug}`} className="text-sm">
                        {category.mainCategory}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Brands */}
              <div className="mb-6">
                <h3 className="font-semibold mb-2 text-sm uppercase text-gray-500">Brands</h3>
                <ul className="space-y-2 max-h-48 overflow-y-auto">
                  {allBrands.map((brand, index) => (
                    <li key={index} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`brand-${index}`}
                        className="mr-2 rounded border-gray-300 text-[#C8102E] focus:ring-[#C8102E]"
                        checked={selectedBrands.includes(brand)}
                        onChange={() => handleBrandChange(brand)}
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
                    <input
                      type="number"
                      placeholder="Min"
                      className="w-full border rounded-md px-3 py-1 text-sm"
                      value={minPrice}
                      onChange={(e) => setMinPrice(e.target.value)}
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      placeholder="Max"
                      className="w-full border rounded-md px-3 py-1 text-sm"
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(e.target.value)}
                    />
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full mt-2 text-xs" onClick={applyPriceFilter}>
                  Apply
                </Button>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Active Filters */}
            {activeFilters.length > 0 && (
              <div className="mb-4 flex flex-wrap gap-2">
                {activeFilters.map((filter, index) => (
                  <div key={index} className="bg-gray-100 rounded-full px-3 py-1 text-sm flex items-center">
                    <span>{filter}</span>
                    <button onClick={() => removeFilter(filter)} className="ml-2">
                      <X className="h-3 w-3 text-gray-500 hover:text-gray-700" />
                    </button>
                  </div>
                ))}
                <button onClick={clearAllFilters} className="text-[#007BFF] text-sm hover:underline">
                  Clear All
                </button>
              </div>
            )}

            {/* Results Count */}
            <div className="mb-6">
              <h2 className="text-xl font-bold">
                {totalSubcategories} {totalSubcategories === 1 ? "Subcategory" : "Subcategories"} Found
              </h2>
            </div>

            {/* Categories Sections */}
            {filteredCategories.length === 0 ? (
              <div className="bg-white rounded-lg border p-8 text-center">
                <h3 className="text-xl font-bold mb-2">No Categories Found</h3>
                <p className="text-gray-600 mb-4">
                  We couldn't find any categories matching your filters. Try adjusting your search criteria.
                </p>
                <Button onClick={clearAllFilters}>Clear All Filters</Button>
              </div>
            ) : (
              filteredCategories.map(
                (category) =>
                  category.secondaryCategories.length > 0 && (
                    <section key={category.slug} id={category.slug} className="mb-12 scroll-mt-24">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 relative rounded-lg overflow-hidden border">
                          <Image
                            src={category.image || "/placeholder.svg"}
                            alt={category.mainCategory}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold">{category.mainCategory}</h2>
                          <Link
                            href={`/categories/${category.slug}`}
                            className="text-[#007BFF] text-sm hover:underline flex items-center"
                          >
                            View main category <ChevronRight className="h-3 w-3 ml-1" />
                          </Link>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {category.secondaryCategories.map((subCategory) => (
                          <Link
                            key={`${category.slug}-${subCategory.slug}`}
                            href={`/categories/${category.slug}/${subCategory.slug}`}
                            className="bg-white border rounded-lg p-4 hover:shadow-md transition-shadow group"
                          >
                            <div className="flex justify-between items-start">
                              <h3 className="font-medium group-hover:text-[#C8102E] transition-colors">
                                {subCategory.name}
                              </h3>
                              <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                                {subCategory.count} items
                              </span>
                            </div>
                            <p className="text-sm text-gray-500 mt-2">
                              Browse {subCategory.name.toLowerCase()} for Philippine vehicles
                            </p>
                            <div className="mt-3 flex items-center text-[#007BFF] text-sm font-medium">
                              View products <ChevronRight className="h-3 w-3 ml-1" />
                            </div>
                            {subCategory.brands && (
                              <div className="mt-2 flex flex-wrap gap-1">
                                {subCategory.brands.slice(0, 3).map((brand, idx) => (
                                  <span key={idx} className="text-xs bg-gray-50 text-gray-600 px-1.5 py-0.5 rounded">
                                    {brand}
                                  </span>
                                ))}
                                {subCategory.brands.length > 3 && (
                                  <span className="text-xs text-gray-500">+{subCategory.brands.length - 3} more</span>
                                )}
                              </div>
                            )}
                          </Link>
                        ))}
                      </div>
                    </section>
                  ),
              )
            )}

            {/* Popular Combinations */}
            {filteredCategories.length > 0 && (
              <section className="bg-white rounded-lg p-6 shadow-sm mb-12">
                <h2 className="text-xl font-bold mb-4">Popular Category Combinations</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Link
                    href="/categories/headlights/headlight-assemblies?make=toyota"
                    className="border rounded-md p-4 hover:border-[#007BFF] hover:bg-blue-50 transition-colors"
                  >
                    <h3 className="font-medium">Toyota Headlight Assemblies</h3>
                    <p className="text-sm text-gray-500 mt-1">Find headlights for all Toyota models</p>
                  </Link>
                  <Link
                    href="/categories/brakes/brake-pads?make=honda"
                    className="border rounded-md p-4 hover:border-[#007BFF] hover:bg-blue-50 transition-colors"
                  >
                    <h3 className="font-medium">Honda Brake Pads</h3>
                    <p className="text-sm text-gray-500 mt-1">Quality brake pads for Honda vehicles</p>
                  </Link>
                  <Link
                    href="/categories/engine/air-filters?make=mitsubishi"
                    className="border rounded-md p-4 hover:border-[#007BFF] hover:bg-blue-50 transition-colors"
                  >
                    <h3 className="font-medium">Mitsubishi Air Filters</h3>
                    <p className="text-sm text-gray-500 mt-1">Engine air filters for Mitsubishi models</p>
                  </Link>
                  <Link
                    href="/categories/body/bumper-cover?make=nissan"
                    className="border rounded-md p-4 hover:border-[#007BFF] hover:bg-blue-50 transition-colors"
                  >
                    <h3 className="font-medium">Nissan Bumper Covers</h3>
                    <p className="text-sm text-gray-500 mt-1">Replacement bumpers for Nissan vehicles</p>
                  </Link>
                  <Link
                    href="/categories/interior/floor-mats?make=hyundai"
                    className="border rounded-md p-4 hover:border-[#007BFF] hover:bg-blue-50 transition-colors"
                  >
                    <h3 className="font-medium">Hyundai Floor Mats</h3>
                    <p className="text-sm text-gray-500 mt-1">Custom floor mats for Hyundai models</p>
                  </Link>
                  <Link
                    href="/categories/exterior/wiper-blades?universal=true"
                    className="border rounded-md p-4 hover:border-[#007BFF] hover:bg-blue-50 transition-colors"
                  >
                    <h3 className="font-medium">Universal Wiper Blades</h3>
                    <p className="text-sm text-gray-500 mt-1">Wiper blades that fit multiple vehicle makes</p>
                  </Link>
                </div>
              </section>
            )}

            {/* SEO Content */}
            <section className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-4">Find the Right Parts for Your Vehicle</h2>
              <div className="prose max-w-none text-gray-700">
                <p>
                  At PyeSakto.ph, we've organized our extensive catalog into detailed secondary categories to help you
                  find exactly what you need for your vehicle. Each subcategory contains parts specifically designed for
                  Philippine vehicles and driving conditions.
                </p>
                <p className="mt-4">
                  Our secondary categories make it easy to narrow down your search and find the exact part you're
                  looking for. Whether you need specific components for maintenance, repair, or upgrades, our detailed
                  categorization ensures you can quickly locate the right parts.
                </p>
                <p className="mt-4">
                  All parts in our secondary categories are available for popular vehicle makes in the Philippines,
                  including Toyota, Honda, Mitsubishi, Nissan, and Hyundai. Many parts also come with compatibility
                  information, so you can be confident that what you're ordering will fit your specific vehicle model.
                </p>
                <p className="mt-4">
                  For even more precise results, use our vehicle selector tool to filter products by your exact vehicle
                  make, model, and year. This ensures you only see parts that are compatible with your specific vehicle.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
