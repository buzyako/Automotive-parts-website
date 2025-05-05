import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function FeaturedBrands() {
  const brands = [
    {
      name: "Toyota",
      logo: "/toyota-logo.png",
      href: "/brands/toyota",
    },
    {
      name: "Mitsubishi",
      logo: "/mitsubishi-logo.png",
      href: "/brands/mitsubishi",
    },
    {
      name: "Honda",
      logo: "/honda-logo.png",
      href: "/brands/honda",
    },
    {
      name: "Nissan",
      logo: "/nissan-logo.png",
      href: "/brands/nissan",
    },
    {
      name: "Hyundai",
      logo: "/hyundai-logo.png",
      href: "/brands/hyundai",
    },
    {
      name: "Isuzu",
      logo: "/placeholder.svg?key=yd8ff",
      href: "/brands/isuzu",
    },
  ]

  return (
    <section className="py-12 px-4 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold">Featured Brands</h2>
            <p className="text-gray-600">Quality parts for popular Philippine vehicles</p>
          </div>
          <Button
            variant="outline"
            className="mt-4 md:mt-0 border-[#C0C0C0] text-[#2E2E2E] hover:bg-[#007BFF] hover:text-white hover:border-[#007BFF]"
          >
            View All Brands
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {brands.map((brand, index) => (
            <Link
              key={index}
              href={brand.href}
              className="border rounded-lg p-4 flex items-center justify-center h-24 hover:border-[#C0C0C0] transition-colors"
            >
              <Image
                src={brand.logo || "/placeholder.svg"}
                alt={brand.name}
                width={120}
                height={60}
                className="max-h-full object-contain"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
