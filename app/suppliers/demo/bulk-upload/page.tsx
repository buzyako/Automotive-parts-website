"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { ArrowLeft, Upload, Download, FileSpreadsheet, AlertCircle, CheckCircle2, XCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useRouter } from "next/navigation"

export default function BulkUpload() {
  const router = useRouter()
  const [isUploading, setIsUploading] = useState(false)
  const [uploadSuccess, setUploadSuccess] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0])
    }
  }

  const handleUpload = () => {
    if (!selectedFile) return

    setIsUploading(true)

    // Simulate upload process
    setTimeout(() => {
      setIsUploading(false)
      setUploadSuccess(true)

      // Redirect after showing success message
      setTimeout(() => {
        router.push("/suppliers/demo")
      }, 2000)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Demo Banner */}
      <div className="bg-blue-600 text-white p-3 text-center">
        <p className="text-sm font-medium">
          This is a demo supplier account. In a real account, you would be uploading your actual product data.
        </p>
      </div>

      {/* Success Message */}
      {uploadSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <CheckCircle2 className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-bold mb-2">Products Uploaded Successfully!</h3>
              <p className="text-gray-600 mb-4">
                Your CSV file has been processed. 24 products were added to your inventory.
              </p>
              <div className="flex gap-3">
                <Button variant="outline" onClick={() => router.push("/suppliers/demo/bulk-upload")}>
                  Upload More Products
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
              <h1 className="text-xl font-bold">Bulk Product Upload</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto py-6 px-4">
        <div className="max-w-3xl mx-auto">
          <Tabs defaultValue="upload">
            <TabsList className="mb-6">
              <TabsTrigger value="upload">Upload Products</TabsTrigger>
              <TabsTrigger value="template">Download Template</TabsTrigger>
              <TabsTrigger value="history">Upload History</TabsTrigger>
            </TabsList>

            {/* Upload Tab */}
            <TabsContent value="upload" className="space-y-6">
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <h2 className="text-lg font-medium mb-4">Upload Product CSV File</h2>

                <Alert className="mb-6 bg-blue-50 border-blue-200 text-blue-800">
                  <AlertCircle className="h-4 w-4 mr-2" />
                  <AlertDescription>
                    Make sure your CSV file follows our template format. Download the template from the "Download
                    Template" tab.
                  </AlertDescription>
                </Alert>

                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <div className="flex flex-col items-center justify-center">
                    {selectedFile ? (
                      <>
                        <FileSpreadsheet className="h-12 w-12 text-green-600 mb-4" />
                        <h3 className="text-lg font-medium mb-2">{selectedFile.name}</h3>
                        <p className="text-sm text-gray-500 mb-4">
                          {(selectedFile.size / 1024).toFixed(2)} KB • CSV File
                        </p>
                        <Button variant="outline" onClick={() => setSelectedFile(null)} className="mb-4">
                          <XCircle className="h-4 w-4 mr-2" />
                          Remove File
                        </Button>
                      </>
                    ) : (
                      <>
                        <FileSpreadsheet className="h-12 w-12 text-gray-400 mb-4" />
                        <h3 className="text-lg font-medium mb-2">Drag & Drop CSV File</h3>
                        <p className="text-sm text-gray-500 mb-4">or click to browse files</p>
                        <Input
                          type="file"
                          accept=".csv"
                          className="hidden"
                          id="csv-upload"
                          onChange={handleFileChange}
                        />
                        <Button
                          variant="outline"
                          onClick={() => document.getElementById("csv-upload")?.click()}
                          className="mb-4"
                        >
                          <Upload className="h-4 w-4 mr-2" />
                          Select CSV File
                        </Button>
                        <p className="text-xs text-gray-500">Maximum file size: 10MB</p>
                      </>
                    )}
                  </div>
                </div>

                <div className="mt-6 flex justify-end">
                  <Button
                    className="bg-[#C8102E] hover:bg-[#A50D26] text-white"
                    onClick={handleUpload}
                    disabled={!selectedFile || isUploading}
                  >
                    {isUploading ? "Uploading..." : "Upload Products"}
                  </Button>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <h2 className="text-lg font-medium mb-4">Upload Instructions</h2>
                <ol className="list-decimal pl-5 space-y-2 text-sm">
                  <li>Download our CSV template from the "Download Template" tab</li>
                  <li>Fill in your product information following the template format</li>
                  <li>Save your file as CSV format</li>
                  <li>Upload your completed CSV file using the form above</li>
                  <li>Review any errors and fix them in your CSV file</li>
                  <li>Re-upload the corrected file if necessary</li>
                </ol>
              </div>
            </TabsContent>

            {/* Template Tab */}
            <TabsContent value="template" className="space-y-6">
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <h2 className="text-lg font-medium mb-4">Download CSV Template</h2>

                <p className="text-sm text-gray-600 mb-6">
                  Use our CSV template to prepare your product data for bulk upload. The template includes all required
                  fields and examples to help you format your data correctly.
                </p>

                <div className="flex justify-center mb-6">
                  <Button className="bg-[#C8102E] hover:bg-[#A50D26] text-white">
                    <Download className="h-4 w-4 mr-2" />
                    Download CSV Template
                  </Button>
                </div>

                <div className="border rounded-md overflow-hidden">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-4 py-2 text-left font-medium text-gray-700">Field Name</th>
                        <th className="px-4 py-2 text-left font-medium text-gray-700">Required</th>
                        <th className="px-4 py-2 text-left font-medium text-gray-700">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-2 font-medium">product_name</td>
                        <td className="px-4 py-2 text-center">
                          <CheckCircle2 className="h-4 w-4 text-green-500 mx-auto" />
                        </td>
                        <td className="px-4 py-2">Full name of the product</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-medium">sku</td>
                        <td className="px-4 py-2 text-center">
                          <CheckCircle2 className="h-4 w-4 text-green-500 mx-auto" />
                        </td>
                        <td className="px-4 py-2">Unique product identifier</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-medium">brand</td>
                        <td className="px-4 py-2 text-center">
                          <CheckCircle2 className="h-4 w-4 text-green-500 mx-auto" />
                        </td>
                        <td className="px-4 py-2">Product brand name</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-medium">category</td>
                        <td className="px-4 py-2 text-center">
                          <CheckCircle2 className="h-4 w-4 text-green-500 mx-auto" />
                        </td>
                        <td className="px-4 py-2">Main product category</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-medium">price</td>
                        <td className="px-4 py-2 text-center">
                          <CheckCircle2 className="h-4 w-4 text-green-500 mx-auto" />
                        </td>
                        <td className="px-4 py-2">Regular price (numbers only)</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-medium">stock</td>
                        <td className="px-4 py-2 text-center">
                          <CheckCircle2 className="h-4 w-4 text-green-500 mx-auto" />
                        </td>
                        <td className="px-4 py-2">Available quantity</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-medium">description</td>
                        <td className="px-4 py-2 text-center">
                          <CheckCircle2 className="h-4 w-4 text-green-500 mx-auto" />
                        </td>
                        <td className="px-4 py-2">Product description</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-medium">sale_price</td>
                        <td className="px-4 py-2 text-center">
                          <XCircle className="h-4 w-4 text-gray-400 mx-auto" />
                        </td>
                        <td className="px-4 py-2">Discounted price (optional)</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-medium">vehicle_compatibility</td>
                        <td className="px-4 py-2 text-center">
                          <XCircle className="h-4 w-4 text-gray-400 mx-auto" />
                        </td>
                        <td className="px-4 py-2">Compatible vehicles (optional)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>

            {/* History Tab */}
            <TabsContent value="history" className="space-y-6">
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <h2 className="text-lg font-medium mb-4">Upload History</h2>

                <div className="border rounded-md overflow-hidden">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-4 py-2 text-left font-medium text-gray-700">Date</th>
                        <th className="px-4 py-2 text-left font-medium text-gray-700">File Name</th>
                        <th className="px-4 py-2 text-left font-medium text-gray-700">Products</th>
                        <th className="px-4 py-2 text-left font-medium text-gray-700">Status</th>
                        <th className="px-4 py-2 text-left font-medium text-gray-700">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-2">May 2, 2025</td>
                        <td className="px-4 py-2">brake_products_may2.csv</td>
                        <td className="px-4 py-2">24 products</td>
                        <td className="px-4 py-2">
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                            Completed
                          </span>
                        </td>
                        <td className="px-4 py-2">
                          <Button variant="ghost" size="sm" className="h-7 px-2">
                            View Details
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">April 28, 2025</td>
                        <td className="px-4 py-2">engine_parts_apr28.csv</td>
                        <td className="px-4 py-2">36 products</td>
                        <td className="px-4 py-2">
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                            Completed
                          </span>
                        </td>
                        <td className="px-4 py-2">
                          <Button variant="ghost" size="sm" className="h-7 px-2">
                            View Details
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">April 15, 2025</td>
                        <td className="px-4 py-2">toyota_parts_apr15.csv</td>
                        <td className="px-4 py-2">18 products</td>
                        <td className="px-4 py-2">
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800">
                            Partial (3 errors)
                          </span>
                        </td>
                        <td className="px-4 py-2">
                          <Button variant="ghost" size="sm" className="h-7 px-2">
                            View Details
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
