"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { ArrowLeft, Upload, Plus, Trash2, AlertCircle, CheckCircle } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function AddProduct() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [productName, setProductName] = useState("Premium Brake Pads for Toyota Vios")
  const [productImages, setProductImages] = useState([{ id: 1, src: "/brake-pads-close-up.png", isMain: true }])
  const [vehicles, setVehicles] = useState([
    { id: 1, make: "Toyota", model: "Vios", years: "2018-2023", engine: "1.3L, 1.5L" },
    { id: 2, make: "Toyota", model: "Yaris", years: "2018-2023", engine: "1.3L, 1.5L" },
  ])
  const [specs, setSpecs] = useState([
    { id: 1, name: "Material", value: "Ceramic" },
    { id: 2, name: "Position", value: "Front" },
    { id: 3, name: "Warranty", value: "1 Year" },
  ])
  const [newSpec, setNewSpec] = useState({ name: "", value: "" })

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setShowSuccess(true)

      // Redirect after showing success message
      setTimeout(() => {
        router.push("/suppliers/demo")
      }, 2000)
    }, 1500)
  }

  // Add a new specification
  const addSpecification = () => {
    if (newSpec.name && newSpec.value) {
      setSpecs([...specs, { id: specs.length + 1, name: newSpec.name, value: newSpec.value }])
      setNewSpec({ name: "", value: "" })
    }
  }

  // Remove a specification
  const removeSpecification = (id) => {
    setSpecs(specs.filter((spec) => spec.id !== id))
  }

  // Remove a vehicle
  const removeVehicle = (id) => {
    setVehicles(vehicles.filter((vehicle) => vehicle.id !== id))
  }

  // Add a placeholder image
  const addImage = () => {
    if (productImages.length < 8) {
      setProductImages([
        ...productImages,
        { id: productImages.length + 1, src: "/placeholder.svg?height=120&width=120", isMain: false },
      ])
    }
  }

  // Remove an image
  const removeImage = (id) => {
    setProductImages(productImages.filter((image) => image.id !== id))
  }

  // Set an image as main
  const setMainImage = (id) => {
    setProductImages(
      productImages.map((image) => ({
        ...image,
        isMain: image.id === id,
      })),
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Demo Banner */}
      <div className="bg-blue-600 text-white p-3 text-center">
        <p className="text-sm font-medium">
          This is a demo supplier account. In a real account, you would be adding your actual products.
        </p>
      </div>

      {/* Success Message */}
      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-bold mb-2">Product Added Successfully!</h3>
              <p className="text-gray-600 mb-4">Your product "{productName}" has been added to your inventory.</p>
              <div className="flex gap-3">
                <Button variant="outline" onClick={() => router.push("/suppliers/demo/add-product")}>
                  Add Another Product
                </Button>
                <Button
                  className="bg-[#C8102E] hover:bg-[#A50D26] text-white"
                  onClick={() => router.push("/suppliers/demo")}
                >
                  Go to Dashboard
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto py-4 px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Link href="/suppliers/demo" className="text-gray-500 hover:text-gray-700">
                <ArrowLeft className="h-5 w-5" />
                <span className="sr-only">Back to Dashboard</span>
              </Link>
              <h1 className="text-xl font-bold">Add New Product</h1>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                Save as Draft
              </Button>
              <Button
                size="sm"
                className="bg-[#C8102E] hover:bg-[#A50D26] text-white"
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Publishing..." : "Publish Product"}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <form onSubmit={handleSubmit} className="container mx-auto py-6 px-4">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Form */}
          <div className="flex-1 space-y-6">
            {/* Basic Information */}
            <div className="bg-white p-6 rounded-lg border shadow-sm">
              <h2 className="text-lg font-medium mb-4">Basic Information</h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="productName" className="block text-sm font-medium text-gray-700">
                    Product Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="productName"
                    placeholder="e.g. Premium Brake Pads for Toyota Vios 2018-2023"
                    className="border-gray-300 focus:border-[#C8102E]"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    required
                  />
                  <p className="text-xs text-gray-500">
                    Include key details like brand, model compatibility, and year range for better searchability
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="sku" className="block text-sm font-medium text-gray-700">
                      SKU <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="sku"
                      placeholder="e.g. BP-TYT-V-2023"
                      className="border-gray-300 focus:border-[#C8102E]"
                      defaultValue="BP-TYT-V-2023"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="brand" className="block text-sm font-medium text-gray-700">
                      Brand <span className="text-red-500">*</span>
                    </label>
                    <Select defaultValue="brembo">
                      <SelectTrigger>
                        <SelectValue placeholder="Select brand" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="brembo">Brembo</SelectItem>
                        <SelectItem value="bosch">Bosch</SelectItem>
                        <SelectItem value="denso">Denso</SelectItem>
                        <SelectItem value="toyota">Toyota Genuine Parts</SelectItem>
                        <SelectItem value="honda">Honda Genuine Parts</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                    Product Description <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    id="description"
                    rows={5}
                    placeholder="Describe your product in detail..."
                    className="border-gray-300 focus:border-[#C8102E]"
                    defaultValue="Premium ceramic brake pads designed specifically for Toyota Vios models. These high-quality brake pads offer superior stopping power, reduced brake dust, and longer life compared to standard pads. Manufactured with advanced friction materials that provide consistent performance in all driving conditions."
                    required
                  />
                </div>
              </div>
            </div>

            {/* Categories & Tags */}
            <div className="bg-white p-6 rounded-lg border shadow-sm">
              <h2 className="text-lg font-medium mb-4">Categories & Tags</h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                    Main Category <span className="text-red-500">*</span>
                  </label>
                  <Select defaultValue="brakes">
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="brakes">Brakes</SelectItem>
                      <SelectItem value="engine">Engine Parts</SelectItem>
                      <SelectItem value="body">Body Parts</SelectItem>
                      <SelectItem value="electrical">Electrical</SelectItem>
                      <SelectItem value="suspension">Suspension</SelectItem>
                      <SelectItem value="transmission">Transmission</SelectItem>
                      <SelectItem value="interior">Interior</SelectItem>
                      <SelectItem value="exterior">Exterior</SelectItem>
                      <SelectItem value="tools">Tools & Garage</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subcategory" className="block text-sm font-medium text-gray-700">
                    Subcategory <span className="text-red-500">*</span>
                  </label>
                  <Select defaultValue="brake_pads">
                    <SelectTrigger>
                      <SelectValue placeholder="Select subcategory" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="brake_pads">Brake Pads</SelectItem>
                      <SelectItem value="brake_discs">Brake Discs/Rotors</SelectItem>
                      <SelectItem value="brake_calipers">Brake Calipers</SelectItem>
                      <SelectItem value="brake_shoes">Brake Shoes</SelectItem>
                      <SelectItem value="brake_hoses">Brake Hoses</SelectItem>
                      <SelectItem value="brake_fluid">Brake Fluid</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="tags" className="block text-sm font-medium text-gray-700">
                    Tags
                  </label>
                  <Input
                    id="tags"
                    placeholder="e.g. ceramic, premium, front"
                    className="border-gray-300 focus:border-[#C8102E]"
                    defaultValue="ceramic, premium, front, toyota, vios"
                  />
                  <p className="text-xs text-gray-500">Separate tags with commas</p>
                </div>
              </div>
            </div>

            {/* Vehicle Compatibility */}
            <div className="bg-white p-6 rounded-lg border shadow-sm">
              <h2 className="text-lg font-medium mb-4">Vehicle Compatibility</h2>
              <div className="space-y-4">
                <Tabs defaultValue="specific">
                  <TabsList className="mb-4">
                    <TabsTrigger value="specific">Specific Vehicles</TabsTrigger>
                    <TabsTrigger value="universal">Universal Fit</TabsTrigger>
                  </TabsList>

                  <TabsContent value="specific" className="space-y-4">
                    {vehicles.map((vehicle) => (
                      <div key={vehicle.id} className="border rounded-md p-4 bg-gray-50">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-sm font-medium">
                            {vehicle.make} {vehicle.model} ({vehicle.years})
                          </h3>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-red-600 h-8 px-2"
                            onClick={() => removeVehicle(vehicle.id)}
                            type="button"
                          >
                            <Trash2 className="h-4 w-4 mr-1" />
                            Remove
                          </Button>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                          <div className="bg-white border rounded p-2">
                            <span className="text-gray-500">Make:</span> {vehicle.make}
                          </div>
                          <div className="bg-white border rounded p-2">
                            <span className="text-gray-500">Model:</span> {vehicle.model}
                          </div>
                          <div className="bg-white border rounded p-2">
                            <span className="text-gray-500">Years:</span> {vehicle.years}
                          </div>
                          <div className="bg-white border rounded p-2">
                            <span className="text-gray-500">Engine:</span> {vehicle.engine}
                          </div>
                        </div>
                      </div>
                    ))}

                    <Button
                      variant="outline"
                      className="w-full"
                      type="button"
                      onClick={() => {
                        setVehicles([
                          ...vehicles,
                          {
                            id: vehicles.length + 1,
                            make: "Honda",
                            model: "City",
                            years: "2019-2023",
                            engine: "1.5L",
                          },
                        ])
                      }}
                    >
                      <Plus className="h-4 w-4 mr-1" /> Add Another Vehicle
                    </Button>
                  </TabsContent>

                  <TabsContent value="universal">
                    <div className="flex items-start space-x-3">
                      <Checkbox id="universal" />
                      <div>
                        <label htmlFor="universal" className="font-medium text-gray-700 block">
                          This product fits all vehicles
                        </label>
                        <p className="text-sm text-gray-500">
                          Select this option only if the product is truly universal and not vehicle-specific
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>

            {/* Product Images */}
            <div className="bg-white p-6 rounded-lg border shadow-sm">
              <h2 className="text-lg font-medium mb-4">Product Images</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {productImages.map((image) => (
                    <div
                      key={image.id}
                      className={`border-2 rounded-lg p-4 flex flex-col items-center justify-center aspect-square relative ${
                        image.isMain ? "border-[#C8102E]" : "border-dashed border-gray-300"
                      }`}
                    >
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt="Product image"
                        width={120}
                        height={120}
                        className="object-cover mb-2"
                      />
                      <div className="flex gap-2 mt-2">
                        {!image.isMain && (
                          <button
                            type="button"
                            onClick={() => setMainImage(image.id)}
                            className="text-xs text-blue-600 hover:text-blue-800"
                          >
                            Set as main
                          </button>
                        )}
                        <button
                          type="button"
                          onClick={() => removeImage(image.id)}
                          className="text-xs text-red-600 hover:text-red-800"
                        >
                          Remove
                        </button>
                      </div>
                      {image.isMain && <p className="text-xs text-[#C8102E] font-medium mt-1">Main Image</p>}
                    </div>
                  ))}

                  {productImages.length < 8 && (
                    <button
                      type="button"
                      onClick={addImage}
                      className="border-2 border-dashed border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center aspect-square hover:bg-gray-50"
                    >
                      <Upload className="h-8 w-8 text-gray-400 mb-2" />
                      <p className="text-xs text-gray-500 text-center">Upload Image</p>
                    </button>
                  )}
                </div>
                <p className="text-xs text-gray-500">
                  Upload up to 8 images. First image will be used as the main product image. Recommended size:
                  1000x1000px, max 5MB each.
                </p>
              </div>
            </div>

            {/* Technical Specifications */}
            <div className="bg-white p-6 rounded-lg border shadow-sm">
              <h2 className="text-lg font-medium mb-4">Technical Specifications</h2>
              <div className="space-y-4">
                <div className="border rounded-md overflow-hidden">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-4 py-2 text-left font-medium text-gray-700">Specification</th>
                        <th className="px-4 py-2 text-left font-medium text-gray-700">Value</th>
                        <th className="px-4 py-2 text-left font-medium text-gray-700 w-16">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {specs.map((spec) => (
                        <tr key={spec.id}>
                          <td className="px-4 py-2">{spec.name}</td>
                          <td className="px-4 py-2">{spec.value}</td>
                          <td className="px-4 py-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-7 px-2 text-red-600"
                              onClick={() => removeSpecification(spec.id)}
                              type="button"
                            >
                              <Trash2 className="h-4 w-4" />
                              <span className="sr-only">Remove</span>
                            </Button>
                          </td>
                        </tr>
                      ))}
                      <tr>
                        <td className="px-4 py-2">
                          <Input
                            placeholder="Specification name"
                            className="border-gray-300 h-8"
                            value={newSpec.name}
                            onChange={(e) => setNewSpec({ ...newSpec, name: e.target.value })}
                          />
                        </td>
                        <td className="px-4 py-2">
                          <Input
                            placeholder="Specification value"
                            className="border-gray-300 h-8"
                            value={newSpec.value}
                            onChange={(e) => setNewSpec({ ...newSpec, value: e.target.value })}
                          />
                        </td>
                        <td className="px-4 py-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-7 px-2"
                            onClick={addSpecification}
                            type="button"
                            disabled={!newSpec.name || !newSpec.value}
                          >
                            <Plus className="h-4 w-4" />
                            <span className="sr-only">Add</span>
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-80 space-y-6">
            {/* Pricing & Inventory */}
            <div className="bg-white p-6 rounded-lg border shadow-sm">
              <h2 className="text-lg font-medium mb-4">Pricing & Inventory</h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="regularPrice" className="block text-sm font-medium text-gray-700">
                    Regular Price (₱) <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="regularPrice"
                    type="number"
                    placeholder="0.00"
                    className="border-gray-300 focus:border-[#C8102E]"
                    defaultValue="1850"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="salePrice" className="block text-sm font-medium text-gray-700">
                    Sale Price (₱)
                  </label>
                  <Input
                    id="salePrice"
                    type="number"
                    placeholder="0.00"
                    className="border-gray-300 focus:border-[#C8102E]"
                    defaultValue="1650"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="stock" className="block text-sm font-medium text-gray-700">
                    Stock Quantity <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="stock"
                    type="number"
                    placeholder="0"
                    className="border-gray-300 focus:border-[#C8102E]"
                    defaultValue="45"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="lowStock" className="block text-sm font-medium text-gray-700">
                    Low Stock Alert
                  </label>
                  <Input
                    id="lowStock"
                    type="number"
                    placeholder="0"
                    className="border-gray-300 focus:border-[#C8102E]"
                    defaultValue="10"
                  />
                  <p className="text-xs text-gray-500">You'll be notified when stock reaches this level</p>
                </div>
              </div>
            </div>

            {/* Shipping */}
            <div className="bg-white p-6 rounded-lg border shadow-sm">
              <h2 className="text-lg font-medium mb-4">Shipping</h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="weight" className="block text-sm font-medium text-gray-700">
                    Weight (kg)
                  </label>
                  <Input
                    id="weight"
                    type="number"
                    placeholder="0.00"
                    className="border-gray-300 focus:border-[#C8102E]"
                    defaultValue="2.5"
                  />
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div className="space-y-2">
                    <label htmlFor="length" className="block text-sm font-medium text-gray-700">
                      Length (cm)
                    </label>
                    <Input
                      id="length"
                      type="number"
                      placeholder="0"
                      className="border-gray-300 focus:border-[#C8102E]"
                      defaultValue="25"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="width" className="block text-sm font-medium text-gray-700">
                      Width (cm)
                    </label>
                    <Input
                      id="width"
                      type="number"
                      placeholder="0"
                      className="border-gray-300 focus:border-[#C8102E]"
                      defaultValue="15"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="height" className="block text-sm font-medium text-gray-700">
                      Height (cm)
                    </label>
                    <Input
                      id="height"
                      type="number"
                      placeholder="0"
                      className="border-gray-300 focus:border-[#C8102E]"
                      defaultValue="5"
                    />
                  </div>
                </div>

                <div className="flex items-start space-x-3 pt-2">
                  <Checkbox id="freeShipping" defaultChecked />
                  <div>
                    <label htmlFor="freeShipping" className="font-medium text-gray-700 block text-sm">
                      Free shipping
                    </label>
                    <p className="text-xs text-gray-500">Offer free shipping for this product</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Status */}
            <div className="bg-white p-6 rounded-lg border shadow-sm">
              <h2 className="text-lg font-medium mb-4">Product Status</h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                    Status
                  </label>
                  <Select defaultValue="active">
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="hidden">Hidden</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox id="featured" defaultChecked />
                  <div>
                    <label htmlFor="featured" className="font-medium text-gray-700 block text-sm">
                      Featured product
                    </label>
                    <p className="text-xs text-gray-500">Display this product in featured sections</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Help Box */}
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <div className="flex items-start">
                <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-sm font-medium text-blue-800 mb-2">Tips for Better Product Listings</h3>
                  <ul className="text-xs text-blue-700 space-y-1 list-disc pl-4">
                    <li>Use high-quality images from multiple angles</li>
                    <li>Include detailed specifications and measurements</li>
                    <li>Add all compatible vehicle models</li>
                    <li>Be specific about warranty and return policies</li>
                    <li>Use keywords in your product title and description</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="bg-white p-6 rounded-lg border shadow-sm">
              <div className="space-y-3">
                <Button
                  type="submit"
                  className="w-full bg-[#C8102E] hover:bg-[#A50D26] text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Publishing..." : "Publish Product"}
                </Button>
                <Button variant="outline" className="w-full" type="button">
                  Save as Draft
                </Button>
                <Button
                  variant="ghost"
                  className="w-full text-gray-500"
                  type="button"
                  className="w-full text-gray-500"
                  type="button"
                  onClick={() => router.push("/suppliers/demo")}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
