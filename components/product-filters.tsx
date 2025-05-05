"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"

// Mock data for filters
const categories = [
  { id: "headlights", name: "Headlights" },
  { id: "body", name: "Body Parts" },
  { id: "brakes", name: "Brakes" },
  { id: "engine", name: "Engine Parts" },
  { id: "interior", name: "Interior" },
  { id: "exterior", name: "Exterior" },
  { id: "tools", name: "Tools" },
]

const brands = [
  { id: "toyota", name: "Toyota" },
  { id: "honda", name: "Honda" },
  { id: "mitsubishi", name: "Mitsubishi" },
  { id: "nissan", name: "Nissan" },
  { id: "hyundai", name: "Hyundai" },
  { id: "brembo", name: "Brembo" },
  { id: "koni", name: "Koni" },
  { id: "k&n", name: "K&N" },
  { id: "bilstein", name: "Bilstein" },
]

export default function ProductFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()

  // Initialize state from URL params
  const [selectedCategories, setSelectedCategories] = useState<string[]>(searchParams.get("category")?.split(",") || [])
  const [selectedBrands, setSelectedBrands] = useState<string[]>(searchParams.get("brand")?.split(",") || [])
  const [priceRange, setPriceRange] = useState<[number, number]>([
    Number(searchParams.get("minPrice")) || 0,
    Number(searchParams.get("maxPrice")) || 10000,
  ])

  // Handle category selection
  const handleCategoryChange = (category: string, checked: boolean) => {
    setSelectedCategories(
      checked ? [...selectedCategories, category] : selectedCategories.filter((c) => c !== category),
    )
  }

  // Handle brand selection
  const handleBrandChange = (brand: string, checked: boolean) => {
    setSelectedBrands(checked ? [...selectedBrands, brand] : selectedBrands.filter((b) => b !== brand))
  }

  // Handle price range change
  const handlePriceChange = (value: number[]) => {
    setPriceRange([value[0], value[1]])
  }

  // Apply filters
  const applyFilters = () => {
    const params = new URLSearchParams()

    if (selectedCategories.length > 0) {
      params.set("category", selectedCategories.join(","))
    }

    if (selectedBrands.length > 0) {
      params.set("brand", selectedBrands.join(","))
    }

    if (priceRange[0] > 0) {
      params.set("minPrice", priceRange[0].toString())
    }

    if (priceRange[1] < 10000) {
      params.set("maxPrice", priceRange[1].toString())
    }

    // Preserve sort parameter if it exists
    const sort = searchParams.get("sort")
    if (sort) {
      params.set("sort", sort)
    }

    router.push(`/products?${params.toString()}`)
  }

  // Reset filters
  const resetFilters = () => {
    setSelectedCategories([])
    setSelectedBrands([])
    setPriceRange([0, 10000])
    router.push("/products")
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Filters</h3>
        <p className="text-sm text-gray-500">Narrow down your search</p>
      </div>

      <Separator />

      <Accordion type="multiple" defaultValue={["categories", "brands", "price"]}>
        <AccordionItem value="categories">
          <AccordionTrigger>Categories</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={`category-${category.id}`}
                    checked={selectedCategories.includes(category.id)}
                    onCheckedChange={(checked) => handleCategoryChange(category.id, checked === true)}
                  />
                  <label
                    htmlFor={`category-${category.id}`}
                    className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {category.name}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="brands">
          <AccordionTrigger>Brands</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {brands.map((brand) => (
                <div key={brand.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={`brand-${brand.id}`}
                    checked={selectedBrands.includes(brand.id)}
                    onCheckedChange={(checked) => handleBrandChange(brand.id, checked === true)}
                  />
                  <label
                    htmlFor={`brand-${brand.id}`}
                    className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {brand.name}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="price">
          <AccordionTrigger>Price Range</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <Slider
                defaultValue={[priceRange[0], priceRange[1]]}
                max={10000}
                step={100}
                onValueChange={handlePriceChange}
              />
              <div className="flex items-center justify-between">
                <span className="text-sm">₱{priceRange[0].toLocaleString()}</span>
                <span className="text-sm">₱{priceRange[1].toLocaleString()}</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="flex flex-col space-y-2">
        <Button onClick={applyFilters}>Apply Filters</Button>
        <Button variant="outline" onClick={resetFilters}>
          Reset Filters
        </Button>
      </div>
    </div>
  )
}
