"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useVehicle } from "@/lib/vehicle-context"

export default function VehicleSelector() {
  const { vehicle, setVehicle, clearVehicle } = useVehicle()
  const router = useRouter()

  const [year, setYear] = useState(vehicle?.year || "")
  const [make, setMake] = useState(vehicle?.make || "")
  const [model, setModel] = useState(vehicle?.model || "")
  const [variant, setVariant] = useState(vehicle?.engine || "")
  const [isExpanded, setIsExpanded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Set CSS variable for the vehicle selector height
  useEffect(() => {
    if (containerRef.current) {
      const height = containerRef.current.offsetHeight
      document.documentElement.style.setProperty("--vehicle-selector-height", `${height}px`)
    }
  }, [isExpanded])

  // Reset dependent fields when a parent field changes
  useEffect(() => {
    if (!year) {
      setMake("")
      setModel("")
      setVariant("")
    }
  }, [year])

  useEffect(() => {
    if (!make) {
      setModel("")
      setVariant("")
    }
  }, [make])

  useEffect(() => {
    if (!model) {
      setVariant("")
    }
  }, [model])

  // Sample data - in a real app, this would come from an API
  const years = ["2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015"]

  const makes = ["Toyota", "Honda", "Mitsubishi", "Nissan", "Hyundai", "Kia", "Suzuki", "Isuzu"]

  const modelsByMake: Record<string, string[]> = {
    Toyota: ["Vios", "Fortuner", "Innova", "Hilux", "Corolla Cross", "Wigo", "Rush"],
    Honda: ["Civic", "City", "CR-V", "BR-V", "Brio", "Mobilio"],
    Mitsubishi: ["Mirage", "Mirage G4", "Montero Sport", "Strada", "Xpander"],
    Nissan: ["Navara", "Terra", "Almera", "Urvan", "NV350"],
    Hyundai: ["Accent", "Tucson", "Santa Fe", "Stargazer", "Staria"],
    Kia: ["Soluto", "Seltos", "Sportage", "Sorento", "Stonic"],
    Suzuki: ["Jimny", "Ertiga", "Swift", "Dzire", "XL7", "Celerio"],
    Isuzu: ["mu-X", "D-MAX", "Traviz"],
  }

  const variantsByModel: Record<string, string[]> = {
    Vios: ["1.3 E MT", "1.3 E CVT", "1.5 G MT", "1.5 G CVT", "1.5 GR-S CVT"],
    Fortuner: ["2.4 G Diesel 4x2 MT", "2.4 G Diesel 4x2 AT", "2.8 V Diesel 4x4 AT", "2.8 LTD Diesel 4x4 AT"],
    Civic: ["1.5 S Turbo CVT", "1.5 V Turbo CVT", "1.5 RS Turbo CVT"],
    City: ["1.5 S MT", "1.5 S CVT", "1.5 V CVT", "1.5 RS CVT"],
    Mirage: ["GLX MT", "GLX CVT", "GLS CVT"],
    "Mirage G4": ["GLX MT", "GLX CVT", "GLS CVT"],
    Navara: ["2.5 EL MT 4x2", "2.5 VE MT 4x2", "2.5 VE AT 4x2", "2.5 VL MT 4x4", "2.5 VL AT 4x4", "2.5 PRO-4X AT 4x4"],
    Accent: ["1.4 GL MT", "1.4 GL AT", "1.6 CRDi GL MT", "1.6 CRDi GL AT"],
  }

  const handleSubmit = () => {
    if (year && make && model && variant) {
      setVehicle({
        year,
        make,
        model,
        engine: variant,
      })
      router.push("/vehicle-results")
      setIsExpanded(false)
    }
  }

  const handleClear = () => {
    setYear("")
    setMake("")
    setModel("")
    setVariant("")
    clearVehicle()
  }

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div ref={containerRef} className="bg-gray-50 border-t border-b border-gray-200 py-3 px-4">
      <div className="container mx-auto">
        {/* Mobile View - Collapsed/Expanded Toggle */}
        <div className="md:hidden">
          <div className="flex items-center justify-between">
            <div className="font-medium text-sm text-gray-700">Find parts for your vehicle:</div>
            <Button variant="outline" size="sm" onClick={toggleExpanded} className="text-xs" aria-expanded={isExpanded}>
              {isExpanded ? "Collapse" : "Expand"}
            </Button>
          </div>

          {/* Show selected vehicle or prompt if none selected */}
          {!isExpanded && vehicle && vehicle.year && (
            <div className="mt-2 p-2 bg-white rounded border text-sm">
              <p className="font-medium">
                {vehicle.year} {vehicle.make} {vehicle.model}
              </p>
              <p className="text-xs text-gray-500">{vehicle.engine}</p>
            </div>
          )}

          {/* Expanded selector on mobile */}
          {isExpanded && (
            <div className="mt-3 space-y-3 animate-fadeIn">
              {/* Year Selector */}
              <Select value={year} onValueChange={setYear}>
                <SelectTrigger className="bg-white w-full">
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent className="bg-white border border-gray-200 shadow-lg z-50">
                  {years.map((y) => (
                    <SelectItem key={y} value={y} className="hover:bg-gray-100">
                      {y}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Make Selector */}
              <Select value={make} onValueChange={setMake} disabled={!year}>
                <SelectTrigger className="bg-white w-full">
                  <SelectValue placeholder={year ? "Make" : "Select year first"} />
                </SelectTrigger>
                <SelectContent className="bg-white border border-gray-200 shadow-lg z-50">
                  {makes.map((m) => (
                    <SelectItem key={m} value={m} className="hover:bg-gray-100">
                      {m}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Model Selector */}
              <Select value={model} onValueChange={setModel} disabled={!make || !year}>
                <SelectTrigger className="bg-white w-full">
                  <SelectValue placeholder={make ? "Model" : "Select make first"} />
                </SelectTrigger>
                <SelectContent className="bg-white border border-gray-200 shadow-lg z-50">
                  {make &&
                    modelsByMake[make]?.map((m) => (
                      <SelectItem key={m} value={m} className="hover:bg-gray-100">
                        {m}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>

              {/* Engine/Variant Selector */}
              <Select value={variant} onValueChange={setVariant} disabled={!model || !make || !year}>
                <SelectTrigger className="bg-white w-full">
                  <SelectValue placeholder={model ? "Engine" : "Select model first"} />
                </SelectTrigger>
                <SelectContent className="bg-white border border-gray-200 shadow-lg z-50">
                  {model &&
                    variantsByModel[model]?.map((v) => (
                      <SelectItem key={v} value={v} className="hover:bg-gray-100">
                        {v}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>

              <div className="flex gap-2 pt-2">
                <Button
                  onClick={handleSubmit}
                  className="flex-1 bg-[#C8102E] hover:bg-[#A50D25]"
                  disabled={!year || !make || !model || !variant}
                >
                  Find Parts
                </Button>
                <Button onClick={handleClear} variant="outline" className="flex-1">
                  Clear
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Desktop View - Always Expanded */}
        <div className="hidden md:block">
          <div className="flex flex-col md:flex-row items-center gap-3">
            <div className="font-medium text-sm md:text-base text-gray-700 md:mr-2">Find parts for your vehicle:</div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 w-full md:w-auto flex-1">
              {/* Year Selector */}
              <Select value={year} onValueChange={setYear}>
                <SelectTrigger className="bg-white">
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent className="bg-white border border-gray-200 shadow-lg z-50">
                  {years.map((y) => (
                    <SelectItem key={y} value={y} className="hover:bg-gray-100">
                      {y}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Make Selector */}
              <Select value={make} onValueChange={setMake} disabled={!year}>
                <SelectTrigger className="bg-white">
                  <SelectValue placeholder={year ? "Make" : "Select year first"} />
                </SelectTrigger>
                <SelectContent className="bg-white border border-gray-200 shadow-lg z-50">
                  {makes.map((m) => (
                    <SelectItem key={m} value={m} className="hover:bg-gray-100">
                      {m}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Model Selector */}
              <Select value={model} onValueChange={setModel} disabled={!make || !year}>
                <SelectTrigger className="bg-white">
                  <SelectValue placeholder={make ? "Model" : "Select make first"} />
                </SelectTrigger>
                <SelectContent className="bg-white border border-gray-200 shadow-lg z-50">
                  {make &&
                    modelsByMake[make]?.map((m) => (
                      <SelectItem key={m} value={m} className="hover:bg-gray-100">
                        {m}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>

              {/* Engine/Variant Selector */}
              <Select value={variant} onValueChange={setVariant} disabled={!model || !make || !year}>
                <SelectTrigger className="bg-white">
                  <SelectValue placeholder={model ? "Engine" : "Select model first"} />
                </SelectTrigger>
                <SelectContent className="bg-white border border-gray-200 shadow-lg z-50">
                  {model &&
                    variantsByModel[model]?.map((v) => (
                      <SelectItem key={v} value={v} className="hover:bg-gray-100">
                        {v}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <Button
                onClick={handleSubmit}
                className="flex-1 md:flex-none bg-[#C8102E] hover:bg-[#A50D25]"
                disabled={!year || !make || !model || !variant}
              >
                Find Parts
              </Button>
              <Button onClick={handleClear} variant="outline" className="flex-1 md:flex-none">
                Clear
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
