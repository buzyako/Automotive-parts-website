"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Edit, Trash2, Plus, Search, Filter, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

interface ProductListProps {
  products: any[]
  categories: { id: string; name: string }[]
  brands: { id: string; name: string }[]
  totalCount: number
  currentPage: number
  pageSize: number
  searchQuery: string
  selectedCategory: string
  selectedBrand: string
}

export default function ProductList({
  products,
  categories,
  brands,
  totalCount,
  currentPage,
  pageSize,
  searchQuery,
  selectedCategory,
  selectedBrand,
}: ProductListProps) {
  const router = useRouter()
  const supabase = createClientComponentClient()
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [productToDelete, setProductToDelete] = useState<any | null>(null)
  const [isDeleting, setIsDeleting] = useState(false)

  const totalPages = Math.ceil(totalCount / pageSize)

  const handleSearch = (query: string) => {
    const params = new URLSearchParams()
    if (query) params.set("query", query)
    if (selectedCategory) params.set("category", selectedCategory)
    if (selectedBrand) params.set("brand", selectedBrand)
    params.set("page", "1")

    router.push(`/admin/products?${params.toString()}`)
  }

  const handleCategoryChange = (category: string) => {
    const params = new URLSearchParams()
    if (searchQuery) params.set("query", searchQuery)
    if (category && category !== "all") params.set("category", category)
    if (selectedBrand && selectedBrand !== "all") params.set("brand", selectedBrand)
    params.set("page", "1")

    router.push(`/admin/products?${params.toString()}`)
  }

  const handleBrandChange = (brand: string) => {
    const params = new URLSearchParams()
    if (searchQuery) params.set("query", searchQuery)
    if (selectedCategory && selectedCategory !== "all") params.set("category", selectedCategory)
    if (brand && brand !== "all") params.set("brand", brand)
    params.set("page", "1")

    router.push(`/admin/products?${params.toString()}`)
  }

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams()
    if (searchQuery) params.set("query", searchQuery)
    if (selectedCategory && selectedCategory !== "all") params.set("category", selectedCategory)
    if (selectedBrand && selectedBrand !== "all") params.set("brand", selectedBrand)
    params.set("page", page.toString())

    router.push(`/admin/products?${params.toString()}`)
  }

  const confirmDelete = (product: any) => {
    setProductToDelete(product)
    setIsDeleteDialogOpen(true)
  }

  const deleteProduct = async () => {
    if (!productToDelete) return

    setIsDeleting(true)

    try {
      const response = await fetch(`/api/admin/products/${productToDelete.id}`, {
        method: "DELETE",
      })

      if (!response.ok) {
        throw new Error("Failed to delete product")
      }

      // Refresh the page to show updated data
      router.refresh()
    } catch (error) {
      console.error("Error deleting product:", error)
      // You could add toast notification here
    } finally {
      setIsDeleting(false)
      setIsDeleteDialogOpen(false)
      setProductToDelete(null)
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Products</h1>
        <Button asChild>
          <Link href="/admin/products/new">
            <Plus className="mr-2 h-4 w-4" />
            Add New Product
          </Link>
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="search"
            placeholder="Search products..."
            className="pl-8"
            defaultValue={searchQuery}
            onChange={(e) => {
              if (e.target.value === "") {
                handleSearch("")
              }
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch(e.currentTarget.value)
              }
            }}
          />
        </div>

        <div className="w-full sm:w-48">
          <Select defaultValue={selectedCategory || "all"} onValueChange={handleCategoryChange}>
            <SelectTrigger>
              <div className="flex items-center">
                <Filter className="mr-2 h-4 w-4" />
                <SelectValue placeholder="All Categories" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category.id} value={category.id}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="w-full sm:w-48">
          <Select defaultValue={selectedBrand || "all"} onValueChange={handleBrandChange}>
            <SelectTrigger>
              <div className="flex items-center">
                <Filter className="mr-2 h-4 w-4" />
                <SelectValue placeholder="All Brands" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Brands</SelectItem>
              {brands.map((brand) => (
                <SelectItem key={brand.id} value={brand.id}>
                  {brand.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {products.length > 0 ? (
        <>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>SKU</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Stock</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Brand</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gray-200 rounded-md flex items-center justify-center">
                          {product.images && product.images[0] ? (
                            <img
                              src={product.images[0] || "/placeholder.svg"}
                              alt={product.name}
                              className="w-10 h-10 object-cover rounded-md"
                            />
                          ) : (
                            <Package className="h-5 w-5 text-gray-500" />
                          )}
                        </div>
                        <span className="font-medium">{product.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>{product.sku}</TableCell>
                    <TableCell>₱{product.price.toLocaleString()}</TableCell>
                    <TableCell>
                      <span className={product.stock > 0 ? "text-green-600" : "text-red-600"}>{product.stock}</span>
                    </TableCell>
                    <TableCell>{product.categories?.name || "-"}</TableCell>
                    <TableCell>{product.brands?.name || "-"}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end space-x-2">
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/admin/products/${product.id}/edit`}>
                            <Edit className="h-4 w-4" />
                          </Link>
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => confirmDelete(product)}>
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center mt-6">
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous
                </Button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </Button>
                ))}

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Next
                </Button>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="flex flex-col items-center justify-center py-12 border rounded-md">
          <Package className="h-12 w-12 text-gray-400 mb-4" />
          <h3 className="text-lg font-medium mb-1">No products found</h3>
          <p className="text-sm text-gray-500 mb-4">
            {searchQuery || selectedCategory || selectedBrand
              ? "Try adjusting your search or filter to find what you're looking for."
              : "Get started by adding your first product."}
          </p>
          {searchQuery || selectedCategory || selectedBrand ? (
            <Button variant="outline" onClick={() => router.push("/admin/products")}>
              Clear Filters
            </Button>
          ) : (
            <Button asChild>
              <Link href="/admin/products/new">
                <Plus className="mr-2 h-4 w-4" />
                Add New Product
              </Link>
            </Button>
          )}
        </div>
      )}

      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete &quot;{productToDelete?.name}&quot;? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)} disabled={isDeleting}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={deleteProduct} disabled={isDeleting}>
              {isDeleting ? "Deleting..." : "Delete"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
