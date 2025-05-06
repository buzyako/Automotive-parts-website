import Link from "next/link"
import Image from "next/image"

export default function PromoBanners() {
  return (
    <section className="py-8 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6">Shop By Category</h2>
        <div className="bg-[#C8102E] text-white py-2 px-4 rounded-md">
          <p className="text-center font-medium">
            FREE SHIPPING on orders over ₱5,000 in Metro Manila and Select Urban Areas!
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          {/* Brakes Banner */}
          <div className="bg-[#C8102E] text-white rounded-lg overflow-hidden flex">
            <div className="p-6 flex-1">
              <h3 className="text-2xl font-bold mb-2">BRAKES</h3>
              <p className="mb-4">Quality brake parts for all Philippine vehicles</p>
              <Link href="/categories/brakes" className="inline-block text-white font-semibold hover:underline">
                Shop Now
              </Link>
            </div>
            <div className="hidden md:block w-1/3">
              <Image
                src="/brake-disc.png"
                alt="Brake Parts"
                width={200}
                height={200}
                className="object-cover h-full w-full"
              />
            </div>
          </div>

          {/* Car Care Banner (Replacing Catalytic Converter) */}
          <div className="bg-[#C8102E] text-white rounded-lg overflow-hidden flex">
            <div className="p-6 flex-1">
              <h3 className="text-2xl font-bold mb-2">CAR CARE</h3>
              <p className="mb-4">Keep your vehicle looking its best</p>
              <Link href="/categories/tools/car-care" className="inline-block text-white font-semibold hover:underline">
                Shop Now
              </Link>
            </div>
            <div className="hidden md:block w-1/3">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Car Care Products"
                width={200}
                height={200}
                className="object-cover h-full w-full"
              />
            </div>
          </div>

          {/* Maintenance Banner */}
          <div className="bg-[#C8102E] text-white rounded-lg overflow-hidden flex">
            <div className="p-6 flex-1">
              <h3 className="text-2xl font-bold mb-2">MAINTENANCE</h3>
              <p className="mb-4">Keep your vehicle running smoothly</p>
              <Link
                href="/categories/tools/maintenance"
                className="inline-block text-white font-semibold hover:underline"
              >
                Shop Now
              </Link>
            </div>
            <div className="hidden md:block w-1/3">
              <Image
                src="/oil-filter.png"
                alt="Maintenance Parts"
                width={200}
                height={200}
                className="object-cover h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
