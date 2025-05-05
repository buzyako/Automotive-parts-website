import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import PopularCategories from "@/components/popular-categories"
import FeaturedBrands from "@/components/featured-brands"
import PromoBanners from "@/components/promo-banners"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <Header />

      <main>
        {/* Hero Banners */}
        <section className="py-6 px-4">
          <div className="container mx-auto grid md:grid-cols-3 gap-4">
            <div className="bg-[#2E2E2E] text-white rounded-lg overflow-hidden col-span-1 md:col-span-1 relative">
              <div className="p-6 z-10 relative">
                <h2 className="text-2xl font-bold mb-1">NOW LIVE!</h2>
                <p className="text-xl font-bold mb-4">PERFORMANCE PARTS + ACCESSORIES</p>
                <p className="text-sm mb-6">FOR PHILIPPINE VEHICLES</p>
                <Link href="/categories">
                  <Button className="bg-[#C8102E] hover:bg-[#A50D26] text-white border-0">Shop Now</Button>
                </Link>
              </div>
              <Image
                src="/performance-parts.png"
                alt="Performance Parts"
                width={600}
                height={400}
                className="absolute right-0 bottom-0 h-full w-1/2 object-cover opacity-50 md:opacity-80"
              />
            </div>

            <div className="bg-[#2E2E2E] text-white rounded-lg overflow-hidden col-span-1 md:col-span-1">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">THE BRANDS YOU TRUST</h2>
                <div className="grid grid-cols-2 gap-4">
                  <Image
                    src="/brembo-logo.png"
                    alt="Brembo Logo"
                    width={120}
                    height={60}
                    className="bg-white/10 p-2 rounded"
                  />
                  <Image
                    src="/koni-logo.png"
                    alt="Koni Logo"
                    width={120}
                    height={60}
                    className="bg-white/10 p-2 rounded"
                  />
                  <Image
                    src="/k&n-logo.png"
                    alt="K&N Logo"
                    width={120}
                    height={60}
                    className="bg-white/10 p-2 rounded"
                  />
                  <Image
                    src="/bilstein-logo.png"
                    alt="Bilstein Logo"
                    width={120}
                    height={60}
                    className="bg-white/10 p-2 rounded"
                  />
                </div>
              </div>
            </div>

            <div className="bg-[#2E2E2E] text-white rounded-lg overflow-hidden col-span-1 md:col-span-1 relative">
              <div className="p-6 z-10 relative">
                <h2 className="text-2xl font-bold mb-1">BUILT FOR FILIPINO</h2>
                <p className="text-xl font-bold mb-4">AUTOMOTIVE ENTHUSIASTS</p>
                <Link href="/about">
                  <Button className="bg-[#C8102E] hover:bg-[#A50D26] text-white border-0 mt-4">Explore</Button>
                </Link>
              </div>
              <Image
                src="/modified-philippine-jeepney.png"
                alt="Philippine Vehicles"
                width={600}
                height={400}
                className="absolute right-0 bottom-0 h-full w-1/2 object-cover opacity-50 md:opacity-80"
              />
            </div>
          </div>
        </section>

        {/* Popular Categories */}
        <PopularCategories />

        {/* Promo Banners */}
        <PromoBanners />

        {/* Featured Brands */}
        <FeaturedBrands />

        {/* Local Service Highlights */}
        <section className="py-12 px-4 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Why Choose PyeSakto.ph</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-[#C0C0C0]/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2E2E2E"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                </div>
                <h3 className="font-bold mb-2">Genuine Parts</h3>
                <p className="text-sm text-gray-600">100% authentic parts sourced directly from manufacturers</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-[#C0C0C0]/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2E2E2E"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                </div>
                <h3 className="font-bold mb-2">Nationwide Delivery</h3>
                <p className="text-sm text-gray-600">Fast shipping to all major cities across the Philippines</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-[#C0C0C0]/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2E2E2E"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h3 className="font-bold mb-2">1-Year Warranty</h3>
                <p className="text-sm text-gray-600">All parts come with our comprehensive warranty protection</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-[#C0C0C0]/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2E2E2E"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h3.8a2 2 0 0 0 1.4-.6L12 4.6a2 2 0 0 1 1.4-.6H20a2 2 0 0 1 2 2v1.4c0 .63-.3 1.22-.8 1.6" />
                  </svg>
                </div>
                <h3 className="font-bold mb-2">Expert Support</h3>
                <p className="text-sm text-gray-600">Filipino mechanics and auto experts ready to assist you</p>
              </div>
            </div>
          </div>
        </section>

        {/* Supplier Section */}
        <section className="py-12 px-4 bg-[#2E2E2E] text-white">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4">Sell Your Auto Parts on PyeSakto.ph</h2>
                <p className="mb-6">
                  Join our growing marketplace of automotive parts suppliers. Reach thousands of Filipino vehicle owners
                  and grow your business with PyeSakto.ph.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/suppliers/register">
                    <Button className="bg-[#C8102E] hover:bg-[#A50D26] text-white border-0">Become a Supplier</Button>
                  </Link>
                  <Link href="/suppliers/login">
                    <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                      Supplier Login
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative w-full max-w-md">
                  <Image
                    src="/filipino-automotive-community.png"
                    alt="Supplier Partnership"
                    width={500}
                    height={300}
                    className="rounded-lg object-cover"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-[#C8102E] text-white px-4 py-2 rounded-lg shadow-lg">
                    <p className="font-bold">1,000+ Suppliers</p>
                    <p className="text-sm">Already partnered with us</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#2E2E2E] text-white pt-12 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Customer Service</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/track-order" className="hover:text-white">
                    Track Your Order
                  </Link>
                </li>
                <li>
                  <Link href="/returns" className="hover:text-white">
                    Returns & Exchanges
                  </Link>
                </li>
                <li>
                  <Link href="/shipping" className="hover:text-white">
                    Shipping Information
                  </Link>
                </li>
                <li>
                  <Link href="/warranty" className="hover:text-white">
                    Warranty Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">About PyeSakto</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>
                  <Link href="/about" className="hover:text-white">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/press" className="hover:text-white">
                    Press Releases
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/stores" className="hover:text-white">
                    Store Locations
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Popular Vehicles</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>
                  <Link href="/vehicles/toyota" className="hover:text-white">
                    Toyota
                  </Link>
                </li>
                <li>
                  <Link href="/vehicles/mitsubishi" className="hover:text-white">
                    Mitsubishi
                  </Link>
                </li>
                <li>
                  <Link href="/vehicles/honda" className="hover:text-white">
                    Honda
                  </Link>
                </li>
                <li>
                  <Link href="/vehicles/nissan" className="hover:text-white">
                    Nissan
                  </Link>
                </li>
                <li>
                  <Link href="/vehicles/hyundai" className="hover:text-white">
                    Hyundai
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
              <div className="flex space-x-4 mb-4">
                <Link href="#" className="text-gray-300 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </Link>
              </div>
              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2">Payment Methods</h4>
                <div className="flex space-x-2">
                  <div className="bg-white text-gray-900 rounded px-2 py-1 text-xs">GCash</div>
                  <div className="bg-white text-gray-900 rounded px-2 py-1 text-xs">Maya</div>
                  <div className="bg-white text-gray-900 rounded px-2 py-1 text-xs">Visa</div>
                  <div className="bg-white text-gray-900 rounded px-2 py-1 text-xs">COD</div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 text-sm text-gray-400">
            <p className="text-center">© 2025 PyeSakto.ph. All rights reserved. Designed for Filipino drivers.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
