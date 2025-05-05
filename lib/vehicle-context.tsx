"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

type VehicleType = {
  year: string
  make: string
  model: string
  engine: string
}

type VehicleContextType = {
  vehicle: VehicleType
  setVehicle: (vehicle: VehicleType) => void
  clearVehicle: () => void
  isVehicleSelected: boolean
}

const VehicleContext = createContext<VehicleContextType | undefined>(undefined)

export function VehicleProvider({ children }: { children: ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Initialize from URL params if they exist
  const [vehicle, setVehicleState] = useState<VehicleType>({
    year: searchParams.get("year") || "",
    make: searchParams.get("make") || "",
    model: searchParams.get("model") || "",
    engine: searchParams.get("engine") || "",
  })

  const isVehicleSelected = !!(vehicle.year && vehicle.make && vehicle.model && vehicle.engine)

  // Update vehicle state and store in localStorage
  const setVehicle = (newVehicle: VehicleType) => {
    setVehicleState(newVehicle)
    localStorage.setItem("selectedVehicle", JSON.stringify(newVehicle))
  }

  // Clear vehicle selection
  const clearVehicle = () => {
    setVehicleState({ year: "", make: "", model: "", engine: "" })
    localStorage.removeItem("selectedVehicle")
  }

  // Load vehicle from localStorage on initial render
  useEffect(() => {
    const savedVehicle = localStorage.getItem("selectedVehicle")
    if (savedVehicle) {
      try {
        const parsedVehicle = JSON.parse(savedVehicle)
        setVehicleState(parsedVehicle)
      } catch (e) {
        console.error("Failed to parse saved vehicle", e)
        localStorage.removeItem("selectedVehicle")
      }
    }
  }, [])

  return (
    <VehicleContext.Provider value={{ vehicle, setVehicle, clearVehicle, isVehicleSelected }}>
      {children}
    </VehicleContext.Provider>
  )
}

export function useVehicle() {
  const context = useContext(VehicleContext)
  if (context === undefined) {
    throw new Error("useVehicle must be used within a VehicleProvider")
  }
  return context
}
