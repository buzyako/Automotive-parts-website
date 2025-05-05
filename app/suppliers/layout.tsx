import type React from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Home } from "lucide-react"

export default function SuppliersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Top Bar */}
      <div className="bg-[#2E2E2E] text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-sm font-medium hidden md:block">SELL YOUR AUTO PARTS ON PYESAKTO.PH</div>
          <div className="flex items-center gap-4 text-sm">
            <Link href="/suppliers/faq" className="hover:underline">
              Supplier FAQs
            </Link>
            <span className="hidden md:inline">|</span>
            <Link href="/suppliers/support" className="hover:underline hidden md:inline">
              Support
            </Link>
            <span className="hidden md:inline">|</span>
            <Link href="/suppliers/login" className="hover:underline">
              Supplier Login
            </Link>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto py-4 px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Home Button */}
            <Link
              href="/"
              className="flex items-center justify-center p-2 rounded-full hover:bg-gray-100 transition-colors"
              title="Home"
            >
              <Home className="h-5 w-5 text-[#2E2E2E]" />
              <span className="sr-only">Home</span>
            </Link>

            <Link href="/" className="flex items-center gap-1">
              <Image src="/car-parts-logo.png" alt="PyeSakto Logo" width={40} height={40} className="h-10 w-10" />
              <span className="text-2xl font-bold text-[#2E2E2E]">
                PyeSakto<span className="text-[#C8102E]">.ph</span>
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/suppliers/dashboard">
              <Button variant="outline" className="hidden sm:inline-flex">
                Supplier Dashboard
              </Button>
            </Link>
            <Link href="/suppliers/register">
              <Button className="bg-[#C8102E] hover:bg-[#A50D26] text-white">Become a Supplier</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      {children}

      {/* Footer */}
      <footer className="bg-[#2E2E2E] text-white pt-12 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Supplier Resources</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>
                  <Link href="/suppliers/guides" className="hover:text-white">
                    Seller Guides
                  </Link>
                </li>
                <li>
                  <Link href="/suppliers/policies" className="hover:text-white">
                    Policies
                  </Link>
                </li>
                <li>
                  <Link href="/suppliers/terms" className="hover:text-white">
                    Terms for Suppliers
                  </Link>
                </li>
                <li>
                  <Link href="/suppliers/help" className="hover:text-white">
                    Help Center
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
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>
                  <Link href="/privacy" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="hover:text-white">
                    Cookie Policy
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
                <h4 className="text-sm font-semibold mb-2">Contact Sales</h4>
                <p className="text-sm text-gray-300">suppliers@pyesakto.ph</p>
                <p className="text-sm text-gray-300">+63 2 8888 7777</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 text-sm text-gray-400">
            <p className="text-center">
              © 2025 PyeSakto.ph. All rights reserved. Designed for Filipino drivers and suppliers.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
