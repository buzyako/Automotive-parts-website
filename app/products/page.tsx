import { Suspense } from "react"
import ProductGrid from "@/components/product-grid"
import ProductFilters from "@/components/product-filters"
import ProductSort from "@/components/product-sort"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { SlidersHorizontal } from "lucide-react"
import ProductsLoading from "./loading"

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">All Products</h1>
        <p className="text-gray-500">Browse our complete catalog of automotive parts and accessories</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 mt-8">
        {/* Filters - Desktop */}
        <div className="hidden lg:block w-64 flex-shrink-0">
          <div className="sticky top-24">
            <ProductFilters />
          </div>
        </div>

        {/* Mobile Filter Button */}
        <div className="lg:hidden flex justify-between items-center mb-4">
          <Button variant="outline" className="flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </Button>
          <ProductSort />
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="hidden lg:flex justify-between items-center mb-6">
            <p className="text-sm text-gray-500">Showing 1-24 of 156 products</p>
            <ProductSort />
          </div>
          <Separator className="mb-6" />
          <Suspense fallback={<ProductsLoading />}>
            <ProductGrid />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
