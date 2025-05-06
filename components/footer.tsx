import type React from "react"
import Link from "next/link"

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-semibold mb-3">About Us</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-blue-600">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-600">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-blue-600">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-blue-600">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/returns" className="hover:text-blue-600">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-blue-600">
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-blue-600">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/warranty" className="hover:text-blue-600">
                  Warranty
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Contact Us</h4>
            <p className="text-sm">Email: info@pyesakto.ph</p>
            <p className="text-sm">Phone: (02) 8123-4567</p>
            <p className="text-sm">Hours: Mon-Fri, 9am-6pm</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Shipping</h4>
            <p className="text-sm">Available in Metro Manila, nearby provinces, and select urban areas only.</p>
            <p className="text-sm mt-2">Free shipping on orders over ₱5,000</p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} PyeSakto.ph. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-4 text-sm">
                <li>
                  <Link href="/privacy" className="text-gray-500 hover:text-blue-600">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-500 hover:text-blue-600">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/sitemap" className="text-gray-500 hover:text-blue-600">
                    Sitemap
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
