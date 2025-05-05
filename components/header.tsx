"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, ShoppingCart, User, MapPin, Home, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import MobileSidebar from "@/components/mobile-sidebar"
import VehicleSelector from "@/components/vehicle-selector"

export default function Header() {
  const [isSticky, setIsSticky] = useState(false)
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false)
  const [isSearchVisible, setIsSearchVisible] = useState(false)

  const toggleAccountDropdown = () => {
    setIsAccountDropdownOpen((prev) => !prev)
  }

  const toggleSearchBar = () => {
    setIsSearchVisible((prev) => !prev)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const dropdown = document.getElementById("account-dropdown")
      const accountButton = document.getElementById("account-button")

      if (
        dropdown &&
        accountButton &&
        !dropdown.contains(event.target as Node) &&
        !accountButton.contains(event.target as Node)
      ) {
        setIsAccountDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      // Make header sticky after scrolling past the top bar
      setIsSticky(window.scrollY > 40)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      {/* Top Bar - Not sticky */}
      <div className="bg-[#2E2E2E] text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-sm font-medium hidden md:block">SHOP QUALITY AUTO PARTS FOR PHILIPPINE VEHICLES</div>
          <div className="flex items-center gap-2 md:gap-4 text-xs md:text-sm">
            <Link href="/shipping" className="hover:underline whitespace-nowrap">
              Free Shipping on ₱5,000+
            </Link>
            <span className="hidden md:inline">|</span>
            <Link href="/warranty" className="hover:underline hidden md:inline">
              1-Year Warranty
            </Link>
            <span className="hidden md:inline">|</span>
            <Link href="/returns" className="hover:underline whitespace-nowrap">
              Easy Returns
            </Link>
          </div>
        </div>
      </div>

      {/* Spacer div that takes up space when header becomes sticky */}
      {isSticky && (
        <div className="h-[calc(100px+40px+var(--vehicle-selector-height,56px))] md:h-[calc(72px+40px+var(--vehicle-selector-height,56px))]"></div>
      )}

      {/* Main Header - Sticky */}
      <header
        className={`bg-white border-b transition-all duration-300 ${
          isSticky ? "fixed top-0 left-0 right-0 z-50 shadow-md" : ""
        }`}
      >
        {/* Main Header Content */}
        <div className="container mx-auto py-3 md:py-4 px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MobileSidebar />

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
                <Image
                  src="/car-parts-logo.png"
                  alt="PyeSakto Logo"
                  width={40}
                  height={40}
                  className="h-8 w-8 md:h-10 md:w-10"
                />
                <span className="text-xl md:text-2xl font-bold text-[#2E2E2E]">
                  PyeSakto<span className="text-[#C8102E]">.ph</span>
                </span>
              </Link>
            </div>

            {/* Desktop Search */}
            <div className="hidden md:flex flex-1 max-w-xl mx-4">
              <div className="relative w-full">
                <Input
                  type="text"
                  placeholder="Search by Part Name, Part Number, Vehicle or Brand"
                  className="w-full pl-4 pr-10 py-2 border rounded-md"
                />
                <Button variant="ghost" className="absolute right-0 top-0 h-full aspect-square p-2">
                  <Search className="h-5 w-5" />
                  <span className="sr-only">Search</span>
                </Button>
              </div>
            </div>

            <div className="flex items-center gap-1 md:gap-4">
              {/* Mobile Search Toggle */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={toggleSearchBar}
                aria-label={isSearchVisible ? "Close search" : "Open search"}
              >
                {isSearchVisible ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
              </Button>

              <Link href="/location" className="hidden md:flex items-center gap-1 text-sm">
                <MapPin className="h-5 w-5" />
                <span>Metro Manila</span>
              </Link>
              <div className="relative">
                <button
                  id="account-button"
                  className="flex items-center gap-1 text-sm p-2 rounded-full hover:bg-gray-100"
                  onClick={toggleAccountDropdown}
                  aria-expanded={isAccountDropdownOpen}
                  aria-controls="account-dropdown"
                >
                  <User className="h-5 w-5" />
                  <span className="hidden md:inline">Account</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`hidden md:inline transition-transform duration-200 ${isAccountDropdownOpen ? "rotate-180" : ""}`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                {isAccountDropdownOpen && (
                  <div
                    id="account-dropdown"
                    className="absolute right-0 top-full mt-1 w-48 bg-white shadow-lg rounded-md border border-gray-200 z-50"
                  >
                    <div className="py-2">
                      <Link
                        href="/account"
                        className="block px-4 py-2 text-sm hover:bg-gray-100"
                        onClick={() => setIsAccountDropdownOpen(false)}
                      >
                        Customer Login
                      </Link>
                      <Link
                        href="/suppliers/login"
                        className="block px-4 py-2 text-sm hover:bg-gray-100"
                        onClick={() => setIsAccountDropdownOpen(false)}
                      >
                        Supplier Login
                      </Link>
                      <Link
                        href="/suppliers/register"
                        className="block px-4 py-2 text-sm hover:bg-gray-100"
                        onClick={() => setIsAccountDropdownOpen(false)}
                      >
                        Become a Supplier
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <Link href="/cart" className="flex items-center gap-1 text-sm p-2 rounded-full hover:bg-gray-100">
                <ShoppingCart className="h-5 w-5" />
                <span className="hidden md:inline">Cart</span>
              </Link>
            </div>
          </div>

          {/* Mobile Search Bar - Conditional Rendering */}
          {isSearchVisible && (
            <div className="md:hidden pt-3 pb-2 animate-slideDown">
              <div className="relative w-full">
                <Input
                  type="text"
                  placeholder="Search parts..."
                  className="w-full pl-4 pr-10 py-2 border rounded-md"
                  autoFocus
                />
                <Button variant="ghost" className="absolute right-0 top-0 h-full aspect-square p-2">
                  <Search className="h-5 w-5" />
                  <span className="sr-only">Search</span>
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="bg-gray-100 hidden md:block">
          <div className="container mx-auto overflow-x-auto">
            <ul className="flex items-center justify-between text-sm font-medium min-w-max">
              <li className="py-3 px-4 hover:bg-gray-200 transition-colors">
                <Link href="/categories/headlights">Headlights and Lighting</Link>
              </li>
              <li className="py-3 px-4 hover:bg-gray-200 transition-colors">
                <Link href="/categories/body">Body Parts and Mirrors</Link>
              </li>
              <li className="py-3 px-4 hover:bg-gray-200 transition-colors">
                <Link href="/categories/engine">Engine and Drivetrain</Link>
              </li>
              <li className="py-3 px-4 hover:bg-gray-200 transition-colors">
                <Link href="/categories/brakes">Brakes and Suspension</Link>
              </li>
              <li className="py-3 px-4 hover:bg-gray-200 transition-colors">
                <Link href="/categories/interior">Interior Parts</Link>
              </li>
              <li className="py-3 px-4 hover:bg-gray-200 transition-colors">
                <Link href="/categories/exterior">Exterior Parts</Link>
              </li>
              <li className="py-3 px-4 hover:bg-gray-200 transition-colors">
                <Link href="/categories/tools">Tools and Garage</Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Vehicle Selector */}
        <div className="vehicle-selector-container">
          <VehicleSelector />
        </div>
      </header>
    </>
  )
}
