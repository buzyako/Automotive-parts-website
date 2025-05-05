"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, ChevronRight, Home, MapPin, Search, ShoppingCart, User, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarProvider,
} from "@/components/ui/sidebar"

export default function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)

  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category)
  }

  const categories = [
    {
      name: "Headlights & Lighting",
      href: "/categories/headlights",
      subcategories: [
        { name: "Headlight Assemblies", href: "/categories/headlights/headlight-assemblies" },
        { name: "Tail Lights", href: "/categories/headlights/tail-lights" },
        { name: "Fog Lights", href: "/categories/headlights/fog-lights" },
        { name: "Signal Lights", href: "/categories/headlights/signal-lights" },
      ],
    },
    {
      name: "Body Parts & Mirrors",
      href: "/categories/body",
      subcategories: [
        { name: "Bumpers", href: "/categories/body/bumpers" },
        { name: "Fenders", href: "/categories/body/fenders" },
        { name: "Mirrors", href: "/categories/body/mirrors" },
        { name: "Hoods", href: "/categories/body/hoods" },
      ],
    },
    {
      name: "Engine & Drivetrain",
      href: "/categories/engine",
      subcategories: [
        { name: "Filters", href: "/categories/engine/filters" },
        { name: "Cooling System", href: "/categories/engine/cooling-system" },
        { name: "Ignition System", href: "/categories/engine/ignition-system" },
        { name: "Fuel System", href: "/categories/engine/fuel-system" },
      ],
    },
    {
      name: "Brakes & Suspension",
      href: "/categories/brakes",
      subcategories: [
        { name: "Brake Pads", href: "/categories/brakes/brake-pads" },
        { name: "Brake Discs/Rotors", href: "/categories/brakes/brake-discs" },
        { name: "Shock Absorbers", href: "/categories/brakes/shock-absorber" },
        { name: "Suspension Parts", href: "/categories/brakes/suspension-parts" },
      ],
    },
    {
      name: "Interior Parts",
      href: "/categories/interior",
      subcategories: [
        { name: "Floor Mats", href: "/categories/interior/floor-mats" },
        { name: "Seat Covers", href: "/categories/interior/seat-covers" },
        { name: "Steering Wheel Covers", href: "/categories/interior/steering-wheel-covers" },
        { name: "Dashboard Accessories", href: "/categories/interior/dashboard-accessories" },
      ],
    },
    {
      name: "Exterior Parts",
      href: "/categories/exterior",
      subcategories: [
        { name: "Grilles", href: "/categories/exterior/grilles" },
        { name: "Door Handles", href: "/categories/exterior/door-handles" },
        { name: "Rain Guards", href: "/categories/exterior/rain-guards" },
        { name: "Hood Protectors", href: "/categories/exterior/hood-protectors" },
      ],
    },
    {
      name: "Tools & Garage",
      href: "/categories/tools",
      subcategories: [
        { name: "Diagnostic Tools", href: "/categories/tools/diagnostic-tools" },
        { name: "Hand Tools", href: "/categories/tools/hand-tools" },
        { name: "Garage Equipment", href: "/categories/tools/garage-equipment" },
        { name: "Specialty Tools", href: "/categories/tools/specialty-tools" },
      ],
    },
  ]

  return (
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden p-2 -ml-1" aria-label="Menu">
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
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
            <span className="sr-only">Menu</span>
          </Button>
        </SheetTrigger>

        <SheetContent side="left" className="p-0 w-[85%] sm:w-[350px]">
          <SidebarProvider>
            <Sidebar>
              <SidebarHeader>
                <div className="flex items-center justify-between p-4 border-b">
                  <Link href="/" className="flex items-center gap-1" onClick={() => setIsOpen(false)}>
                    <Image src="/car-parts-logo.png" alt="PyeSakto Logo" width={40} height={40} className="h-10 w-10" />
                    <span className="text-2xl font-bold text-[#2E2E2E]">
                      PyeSakto<span className="text-[#C8102E]">.ph</span>
                    </span>
                  </Link>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-full"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                <div className="p-4 border-b">
                  <div className="relative">
                    <Input type="text" placeholder="Search parts..." className="pr-10" />
                    <Button variant="ghost" className="absolute right-0 top-0 h-full aspect-square p-2">
                      <Search className="h-5 w-5" />
                      <span className="sr-only">Search</span>
                    </Button>
                  </div>
                </div>
              </SidebarHeader>

              <SidebarContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link
                        href="/"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-2 p-3 hover:bg-gray-100 rounded-md"
                      >
                        <Home className="h-5 w-5" />
                        <span>Home</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link
                        href="/categories"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-2 p-3 hover:bg-gray-100 rounded-md"
                      >
                        <ChevronRight className="h-5 w-5" />
                        <span>All Categories</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  {categories.map((category) => (
                    <SidebarMenuItem key={category.name}>
                      <SidebarMenuButton
                        onClick={() => toggleCategory(category.name)}
                        className="flex items-center gap-2 p-3 hover:bg-gray-100 rounded-md"
                      >
                        <ChevronRight className="h-5 w-5" />
                        <span>{category.name}</span>
                        <ChevronDown
                          className={`ml-auto h-4 w-4 transition-transform ${
                            expandedCategory === category.name ? "rotate-180" : ""
                          }`}
                        />
                      </SidebarMenuButton>

                      {expandedCategory === category.name && (
                        <SidebarMenuSub>
                          {category.subcategories.map((sub) => (
                            <SidebarMenuSubItem key={sub.name}>
                              <SidebarMenuSubButton asChild>
                                <Link
                                  href={sub.href}
                                  onClick={() => setIsOpen(false)}
                                  className="block py-2 px-8 hover:bg-gray-100"
                                >
                                  {sub.name}
                                </Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                          <SidebarMenuSubItem>
                            <SidebarMenuSubButton asChild>
                              <Link
                                href={category.href}
                                onClick={() => setIsOpen(false)}
                                className="block py-2 px-8 font-medium text-[#C8102E] hover:bg-gray-100"
                              >
                                View All {category.name}
                              </Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        </SidebarMenuSub>
                      )}
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarContent>

              <SidebarFooter>
                <div className="p-4 border-t space-y-4">
                  <div className="flex flex-col space-y-2">
                    <Link
                      href="/account"
                      className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md"
                      onClick={() => setIsOpen(false)}
                    >
                      <User className="h-5 w-5" />
                      <span>My Account</span>
                    </Link>
                    <Link
                      href="/cart"
                      className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md"
                      onClick={() => setIsOpen(false)}
                    >
                      <ShoppingCart className="h-5 w-5" />
                      <span>Cart</span>
                    </Link>
                    <Link
                      href="/location"
                      className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md"
                      onClick={() => setIsOpen(false)}
                    >
                      <MapPin className="h-5 w-5" />
                      <span>Store Locations</span>
                    </Link>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <Link href="/about" onClick={() => setIsOpen(false)}>
                      <Button variant="outline" className="w-full">
                        About Us
                      </Button>
                    </Link>
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      <Button variant="outline" className="w-full">
                        Contact
                      </Button>
                    </Link>
                  </div>
                </div>
              </SidebarFooter>
            </Sidebar>
          </SidebarProvider>
        </SheetContent>
      </Sheet>
    </div>
  )
}
