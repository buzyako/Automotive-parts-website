import Image from "next/image"
import Link from "next/link"

export default function CategoriesPage() {
  // Main product categories
  const mainCategories = [
    {
      name: "Headlights & Lighting",
      description: "Headlights, tail lights, fog lights, and lighting accessories",
      image: "/car-headlights.png",
      href: "/categories/headlights",
      count: 1245,
    },
    {
      name: "Body Parts & Mirrors",
      description: "Bumpers, fenders, mirrors, hoods, and body panels",
      image: "/car-bumper.png",
      href: "/categories/body",
      count: 987,
    },
    {
      name: "Engine & Drivetrain",
      description: "Engine parts, filters, cooling system, and drivetrain components",
      image: "/car-engine-parts.png",
      href: "/categories/engine",
      count: 1456,
    },
    {
      name: "Brakes & Suspension",
      description: "Brake pads, rotors, shocks, struts, and suspension parts",
      image: "/brake-pads-close-up.png",
      href: "/categories/brakes",
      count: 976,
    },
    {
      name: "Interior Parts",
      description: "Seat covers, floor mats, steering wheel covers, and interior accessories",
      image: "/car-interior-accessories.png",
      href: "/categories/interior",
      count: 829,
    },
    {
      name: "Exterior Parts",
      description: "Grilles, door handles, window visors, and exterior accessories",
      image: "/car-grille.png",
      href: "/categories/exterior",
      count: 736,
    },
    {
      name: "Tools & Garage",
      description: "Diagnostic tools, hand tools, jacks, and garage equipment",
      image: "/automotive-tools.png",
      href: "/categories/tools",
      count: 892,
    },
    {
      name: "Wheels & Tires",
      description: "Wheels, rims, tires, and wheel accessories",
      image: "/placeholder.svg?key=jyiu1",
      href: "/categories/wheels",
      count: 543,
    },
  ]

  // Popular subcategories
  const popularSubcategories = [
    { name: "Brake Pads", href: "/categories/brakes/brake-pads" },
    { name: "Oil Filters", href: "/categories/engine/filters" },
    { name: "Headlight Assemblies", href: "/categories/headlights/headlight-assemblies" },
    { name: "Floor Mats", href: "/categories/interior/floor-mats" },
    { name: "Side Mirrors", href: "/categories/body/mirrors" },
    { name: "Spark Plugs", href: "/categories/engine/ignition-system" },
    { name: "Wiper Blades", href: "/categories/exterior/wiper-blades" },
    { name: "Air Filters", href: "/categories/engine/filters" },
    { name: "Shock Absorbers", href: "/categories/brakes/shock-absorber" },
    { name: "Radiators", href: "/categories/engine/cooling-system" },
    { name: "Tail Lights", href: "/categories/headlights/tail-lights" },
    { name: "Batteries", href: "/categories/engine/electrical" },
  ]

  return (
    <div>
      {/* Category Header */}
      <div className="bg-[#2E2E2E] text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">All Categories</h1>
          <p className="text-gray-300 max-w-3xl">
            Browse our complete selection of auto parts and accessories for Philippine vehicles. Find exactly what you
            need with our comprehensive category listings.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-8 px-4">
        {/* Main Categories Grid */}
        <h2 className="text-2xl font-bold mb-6">Main Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {mainCategories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="bg-white border rounded-lg overflow-hidden hover:shadow-md transition-shadow group"
            >
              <div className="aspect-video relative">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 right-0 bg-[#C8102E] text-white text-xs font-medium px-2 py-1 rounded-tl-md">
                  {category.count} Products
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1 group-hover:text-[#C8102E] transition-colors">{category.name}</h3>
                <p className="text-sm text-gray-600">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Popular Subcategories */}
        <div className="bg-gray-100 rounded-lg p-6 mb-12">
          <h2 className="text-xl font-bold mb-4">Popular Subcategories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {popularSubcategories.map((subcategory) => (
              <Link
                key={subcategory.name}
                href={subcategory.href}
                className="bg-white border rounded-md px-4 py-3 hover:border-[#007BFF] hover:text-[#007BFF] transition-colors"
              >
                {subcategory.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Shop by Vehicle Make */}
        <h2 className="text-2xl font-bold mb-6">Shop by Vehicle Make</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
          <Link
            href="/vehicles/toyota"
            className="bg-white border rounded-lg p-4 text-center hover:shadow-md transition-shadow"
          >
            <div className="aspect-square relative mb-2">
              <Image src="/toyota-logo.png" alt="Toyota" fill className="object-contain p-4" />
            </div>
            <span className="font-medium">Toyota</span>
          </Link>
          <Link
            href="/vehicles/honda"
            className="bg-white border rounded-lg p-4 text-center hover:shadow-md transition-shadow"
          >
            <div className="aspect-square relative mb-2">
              <Image src="/honda-logo.png" alt="Honda" fill className="object-contain p-4" />
            </div>
            <span className="font-medium">Honda</span>
          </Link>
          <Link
            href="/vehicles/mitsubishi"
            className="bg-white border rounded-lg p-4 text-center hover:shadow-md transition-shadow"
          >
            <div className="aspect-square relative mb-2">
              <Image src="/mitsubishi-logo.png" alt="Mitsubishi" fill className="object-contain p-4" />
            </div>
            <span className="font-medium">Mitsubishi</span>
          </Link>
          <Link
            href="/vehicles/nissan"
            className="bg-white border rounded-lg p-4 text-center hover:shadow-md transition-shadow"
          >
            <div className="aspect-square relative mb-2">
              <Image src="/nissan-logo.png" alt="Nissan" fill className="object-contain p-4" />
            </div>
            <span className="font-medium">Nissan</span>
          </Link>
          <Link
            href="/vehicles/hyundai"
            className="bg-white border rounded-lg p-4 text-center hover:shadow-md transition-shadow"
          >
            <div className="aspect-square relative mb-2">
              <Image src="/hyundai-logo.png" alt="Hyundai" fill className="object-contain p-4" />
            </div>
            <span className="font-medium">Hyundai</span>
          </Link>
          <Link
            href="/vehicles"
            className="bg-white border rounded-lg p-4 text-center hover:shadow-md transition-shadow flex flex-col items-center justify-center"
          >
            <div className="text-3xl text-gray-400 mb-2">+</div>
            <span className="font-medium">View All Makes</span>
          </Link>
        </div>

        {/* SEO Content */}
        <div className="bg-white border rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Quality Auto Parts for Philippine Vehicles</h2>
          <div className="prose max-w-none text-gray-700">
            <p>
              At PyeSakto.ph, we offer a comprehensive selection of auto parts and accessories specifically designed for
              vehicles in the Philippines. Our extensive catalog is organized into easy-to-navigate categories to help
              you find exactly what you need for your vehicle.
            </p>
            <p className="mt-4">
              Whether you're looking for essential maintenance parts, performance upgrades, or accessories to enhance
              your vehicle's appearance and functionality, our categories cover everything you need. We provide both OEM
              and high-quality aftermarket options to suit your preferences and budget.
            </p>
            <p className="mt-4">
              Our parts are sourced from trusted manufacturers and are designed to withstand the unique challenges of
              Philippine driving conditions, from heavy urban traffic to provincial roads. Each category features
              products that are compatible with popular vehicle makes and models in the Philippines, including Toyota,
              Honda, Mitsubishi, Nissan, and Hyundai.
            </p>
            <p className="mt-4">
              Browse our categories to find the perfect parts for your vehicle maintenance, repair, or upgrade projects.
              If you need assistance finding the right part, our vehicle selector tool can help you narrow down options
              that are specifically compatible with your vehicle.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
