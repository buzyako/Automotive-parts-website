"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Plus, Upload, X, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

interface ProductFormProps {
  product?: any
  categories: { id: string; name: string }[]
  brands: { id: string; name: string }[]
}

export default function ProductForm({ product, categories, brands }: ProductFormProps) {
  const router = useRouter()
  const supabase = createClientComponentClient()
  const isEditing = !!product

  const [formData, setFormData] = useState<any>({
    name: product?.name || "",
    description: product?.description || "",
    price: product?.price || 0,
    original_price: product?.original_price || 0,
    sku: product?.sku || "",
    brand_id: product?.brand_id || "",
    category_id: product?.category_id || "",
    stock: product?.stock || 0,
    images: product?.images || [],
    features: product?.features || [],
    compatibility: product?.compatibility || [],
    specifications: product?.specifications || {},
    installation_guide: product?.installation_guide || "",
    warranty: product?.warranty || "",
    shipping: product?.shipping || "",
    return_policy: product?.return_policy || "",
  })

  const [newFeature, setNewFeature] = useState("")
  const [newCompatibility, setNewCompatibility] = useState("")
  const [newSpecKey, setNewSpecKey] = useState("")
  const [newSpecValue, setNewSpecValue] = useState("")

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isUploading, setIsUploading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target

    if (name === "price" || name === "original_price" || name === "stock") {
      setFormData({
        ...formData,
        [name]: Number.parseFloat(value) || 0,
      })
    } else {
      setFormData({
        ...formData,
        [name]: value,
      })
    }
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const addFeature = () => {
    if (!newFeature.trim()) return

    setFormData({
      ...formData,
      features: [...(formData.features || []), newFeature.trim()],
    })
    setNewFeature("")
  }

  const removeFeature = (index: number) => {
    const features = [...(formData.features || [])]
    features.splice(index, 1)
    setFormData({ ...formData, features })
  }

  const addCompatibility = () => {
    if (!newCompatibility.trim()) return

    setFormData({
      ...formData,
      compatibility: [...(formData.compatibility || []), newCompatibility.trim()],
    })
    setNewCompatibility("")
  }

  const removeCompatibility = (index: number) => {
    const compatibility = [...(formData.compatibility || [])]
    compatibility.splice(index, 1)
    setFormData({ ...formData, compatibility })
  }

  const addSpecification = () => {
    if (!newSpecKey.trim() || !newSpecValue.trim()) return

    setFormData({
      ...formData,
      specifications: {
        ...(formData.specifications || {}),
        [newSpecKey.trim()]: newSpecValue.trim(),
      },
    })
    setNewSpecKey("")
    setNewSpecValue("")
  }

  const removeSpecification = (key: string) => {
    const specifications = { ...(formData.specifications || {}) }
    delete specifications[key]
    setFormData({ ...formData, specifications })
  }

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files || files.length === 0) return

    setIsUploading(true)

    try {
      const uploadPromises = Array.from(files).map(async (file) => {
        // Generate a unique file name
        const fileExt = file.name.split(".").pop()
        const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 15)}.${fileExt}`
        const filePath = `product-images/${fileName}`

        // Convert file to ArrayBuffer
        const arrayBuffer = await file.arrayBuffer()
        const buffer = new Uint8Array(arrayBuffer)

        // Upload to Supabase Storage
        const { error: uploadError } = await supabase.storage.from("products").upload(filePath, buffer, {
          contentType: file.type,
        })

        if (uploadError) {
          throw new Error(`Error uploading file: ${uploadError.message}`)
        }

        // Get the public URL
        const { data } = supabase.storage.from("products").getPublicUrl(filePath)

        return data.publicUrl
      })

      const uploadedUrls = await Promise.all(uploadPromises)

      setFormData({
        ...formData,
        images: [...(formData.images || []), ...uploadedUrls],
      })
    } catch (error) {
      console.error("Error uploading images:", error)
      // You could add toast notification here
    } finally {
      setIsUploading(false)
    }
  }

  const removeImage = (index: number) => {
    const images = [...(formData.images || [])]
    images.splice(index, 1)
    setFormData({ ...formData, images })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.price || !formData.sku) {
      // You could add toast notification here
      return
    }

    setIsSubmitting(true)

    try {
      const url = isEditing ? `/api/admin/products/${product.id}` : "/api/admin/products"

      const method = isEditing ? "PUT" : "POST"

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to save product")
      }

      // Redirect to products page
      router.push("/admin/products")
      router.refresh()
    } catch (error) {
      console.error("Error saving product:", error)
      // You could add toast notification here
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Tabs defaultValue="basic">
        <TabsList className="mb-6">
          <TabsTrigger value="basic">Basic Information</TabsTrigger>
          <TabsTrigger value="details">Product Details</TabsTrigger>
          <TabsTrigger value="images">Images</TabsTrigger>
        </TabsList>

        <TabsContent value="basic">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Product Name <span className="text-red-500">*</span>
                </label>
                <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>

              <div>
                <label htmlFor="sku" className="block text-sm font-medium mb-1">
                  SKU <span className="text-red-500">*</span>
                </label>
                <Input id="sku" name="sku" value={formData.sku} onChange={handleChange} required />
              </div>

              <div>
                <label htmlFor="brand_id" className="block text-sm font-medium mb-1">
                  Brand
                </label>
                <Select value={formData.brand_id} onValueChange={(value) => handleSelectChange("brand_id", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a brand" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">None</SelectItem>
                    {brands.map((brand) => (
                      <SelectItem key={brand.id} value={brand.id}>
                        {brand.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="category_id" className="block text-sm font-medium mb-1">
                  Category
                </label>
                <Select
                  value={formData.category_id}
                  onValueChange={(value) => handleSelectChange("category_id", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">None</SelectItem>
                    {categories.map((category) => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label htmlFor="price" className="block text-sm font-medium mb-1">
                  Price (₱) <span className="text-red-500">*</span>
                </label>
                <Input
                  id="price"
                  name="price"
                  type="number"
                  min="0"
                  step="0.01"
                  value={formData.price}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="original_price" className="block text-sm font-medium mb-1">
                  Original Price (₱)
                </label>
                <Input
                  id="original_price"
                  name="original_price"
                  type="number"
                  min="0"
                  step="0.01"
                  value={formData.original_price}
                  onChange={handleChange}
                />
                <p className="text-xs text-gray-500 mt-1">Leave empty if there is no discount</p>
              </div>

              <div>
                <label htmlFor="stock" className="block text-sm font-medium mb-1">
                  Stock Quantity
                </label>
                <Input
                  id="stock"
                  name="stock"
                  type="number"
                  min="0"
                  step="1"
                  value={formData.stock}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="description" className="block text-sm font-medium mb-1">
              Description
            </label>
            <Textarea
              id="description"
              name="description"
              rows={5}
              value={formData.description}
              onChange={handleChange}
            />
          </div>
        </TabsContent>

        <TabsContent value="details">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-medium mb-4">Features</h3>

                <div className="space-y-4">
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Add a feature"
                      value={newFeature}
                      onChange={(e) => setNewFeature(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault()
                          addFeature()
                        }
                      }}
                    />
                    <Button type="button" onClick={addFeature}>
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>

                  {formData.features && formData.features.length > 0 ? (
                    <ul className="space-y-2">
                      {formData.features.map((feature: string, index: number) => (
                        <li key={index} className="flex justify-between items-center bg-gray-50 p-2 rounded">
                          <span>{feature}</span>
                          <Button type="button" variant="ghost" size="sm" onClick={() => removeFeature(index)}>
                            <X className="h-4 w-4" />
                          </Button>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-gray-500">No features added yet</p>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-medium mb-4">Compatible Vehicles</h3>

                <div className="space-y-4">
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Add vehicle compatibility"
                      value={newCompatibility}
                      onChange={(e) => setNewCompatibility(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault()
                          addCompatibility()
                        }
                      }}
                    />
                    <Button type="button" onClick={addCompatibility}>
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>

                  {formData.compatibility && formData.compatibility.length > 0 ? (
                    <ul className="space-y-2">
                      {formData.compatibility.map((item: string, index: number) => (
                        <li key={index} className="flex justify-between items-center bg-gray-50 p-2 rounded">
                          <span>{item}</span>
                          <Button type="button" variant="ghost" size="sm" onClick={() => removeCompatibility(index)}>
                            <X className="h-4 w-4" />
                          </Button>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-gray-500">No compatibility information added yet</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6">
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium mb-4">Specifications</h3>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <Input
                    placeholder="Specification name"
                    value={newSpecKey}
                    onChange={(e) => setNewSpecKey(e.target.value)}
                  />
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Specification value"
                      value={newSpecValue}
                      onChange={(e) => setNewSpecValue(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault()
                          addSpecification()
                        }
                      }}
                    />
                    <Button type="button" onClick={addSpecification}>
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {formData.specifications && Object.keys(formData.specifications).length > 0 ? (
                  <div className="border rounded-md overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Name</th>
                          <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Value</th>
                          <th className="px-4 py-2 text-right text-sm font-medium text-gray-500">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        {Object.entries(formData.specifications).map(([key, value]) => (
                          <tr key={key}>
                            <td className="px-4 py-2 text-sm">{key}</td>
                            <td className="px-4 py-2 text-sm">{value as string}</td>
                            <td className="px-4 py-2 text-right">
                              <Button type="button" variant="ghost" size="sm" onClick={() => removeSpecification(key)}>
                                <X className="h-4 w-4" />
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <p className="text-sm text-gray-500">No specifications added yet</p>
                )}
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 space-y-6">
            <div>
              <label htmlFor="installation_guide" className="block text-sm font-medium mb-1">
                Installation Guide
              </label>
              <Textarea
                id="installation_guide"
                name="installation_guide"
                rows={3}
                value={formData.installation_guide}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="warranty" className="block text-sm font-medium mb-1">
                Warranty Information
              </label>
              <Textarea id="warranty" name="warranty" rows={2} value={formData.warranty} onChange={handleChange} />
            </div>

            <div>
              <label htmlFor="shipping" className="block text-sm font-medium mb-1">
                Shipping Information
              </label>
              <Textarea id="shipping" name="shipping" rows={2} value={formData.shipping} onChange={handleChange} />
            </div>

            <div>
              <label htmlFor="return_policy" className="block text-sm font-medium mb-1">
                Return Policy
              </label>
              <Textarea
                id="return_policy"
                name="return_policy"
                rows={2}
                value={formData.return_policy}
                onChange={handleChange}
              />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="images">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Product Images</label>
              <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
                <input
                  type="file"
                  id="images"
                  className="hidden"
                  accept="image/*"
                  multiple
                  onChange={handleImageUpload}
                  disabled={isUploading}
                />
                <label htmlFor="images" className="cursor-pointer flex flex-col items-center justify-center">
                  {isUploading ? (
                    <Loader2 className="h-10 w-10 text-gray-400 animate-spin" />
                  ) : (
                    <Upload className="h-10 w-10 text-gray-400" />
                  )}
                  <p className="mt-2 text-sm text-gray-500">
                    {isUploading ? "Uploading..." : "Click to upload or drag and drop"}
                  </p>
                  <p className="text-xs text-gray-400">PNG, JPG, GIF up to 10MB</p>
                </label>
              </div>
            </div>

            {formData.images && formData.images.length > 0 ? (
              <div>
                <h3 className="text-sm font-medium mb-2">Uploaded Images</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {formData.images.map((image: string, index: number) => (
                    <div key={index} className="relative group">
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`Product image ${index + 1}`}
                        className="h-32 w-full object-cover rounded-md"
                      />
                      <button
                        type="button"
                        className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => removeImage(index)}
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <p className="text-sm text-gray-500">No images uploaded yet</p>
            )}
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-8 flex justify-end space-x-4">
        <Button type="button" variant="outline" onClick={() => router.push("/admin/products")} disabled={isSubmitting}>
          Cancel
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              {isEditing ? "Updating..." : "Creating..."}
            </>
          ) : (
            <>{isEditing ? "Update Product" : "Create Product"}</>
          )}
        </Button>
      </div>
    </form>
  )
}
