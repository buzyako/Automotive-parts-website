"use client"

import { useEffect, useState } from "react"
import VehicleSelector from "@/components/vehicle-selector"

export default function StickyVehicleSelector() {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Get the header height to determine when to make the selector sticky
      // Assuming header is roughly 200px tall (adjust based on actual header height)
      const headerHeight = 200
      setIsSticky(window.scrollY > headerHeight)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div
      className={`w-full bg-white transition-all duration-300 ${
        isSticky ? "fixed top-0 left-0 z-50 shadow-md border-b border-gray-200" : ""
      }`}
    >
      <div className="container mx-auto">
        <VehicleSelector />
      </div>
    </div>
  )
}
