import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Star, Package, TrendingUp, ShoppingCart, Settings, FileText } from "lucide-react"

export default function SupplierDemo() {
  // Sample supplier data
  const supplier = {
    name: "Manila Auto Parts Supply",
    logo: "/placeholder.svg?height=100&width=100",
    storeName: "Manila Auto Parts",
    plan: "Pro",
    joinDate: "June 15, 2023",
    tin: "123-456-789-000",
    address: "123 Rizal Avenue, Sta. Cruz, Manila",
    contact: {
      name: "Juan Dela Cruz",
      position: "Owner",
      email: "juan@manilaautoparts.ph",
      phone: "+63 917 123 4567",
    },
    stats: {
      products: 342,
      orders: 1289,
      revenue: "₱1,245,678",
      rating: 4.8,
    },
  }

  // Sample products
  const products = [
    {
      id: 1,
      name: "Premium Brake Pads for Toyota Vios",
      price: "₱1,850",
      stock: 45,
      sold: 128,
      image: "/brake-pads-close-up.png",
    },
    {
      id: 2,
      name: "Headlight Assembly for Honda City",
      price: "₱3,500",
      stock: 12,
      sold: 67,
      image: "/honda-headlight.png",
    },
    {
      id: 3,
      name: "Oil Filter for Mitsubishi Mirage",
      price: "₱450",
      stock: 89,
      sold: 215,
      image: "/oil-filter.png",
    },
    {
      id: 4,
      name: "Side Mirror for Nissan Navara",
      price: "₱2,750",
      stock: 23,
      sold: 42,
      image: "/car-mirrors.png",
    },
  ]

  // Sample orders
  const orders = [
    {
      id: "ORD-12345",
      customer: "Maria Santos",
      date: "May 2, 2025",
      total: "₱4,350",
      status: "Completed",
      items: 3,
    },
    {
      id: "ORD-12346",
      customer: "Pedro Reyes",
      date: "May 2, 2025",
      total: "₱2,750",
      status: "Processing",
      items: 1,
    },
    {
      id: "ORD-12347",
      customer: "Ana Lim",
      date: "May 1, 2025",
      total: "₱6,200",
      status: "Shipped",
      items: 4,
    },
    {
      id: "ORD-12348",
      customer: "Carlo Mendoza",
      date: "April 30, 2025",
      total: "₱1,850",
      status: "Completed",
      items: 2,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Demo Banner */}
      <div className="bg-blue-600 text-white p-3 text-center">
        <p className="text-sm font-medium">
          This is a demo supplier account. In a real account, you would see your actual business data.
        </p>
      </div>

      {/* Supplier Dashboard Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto py-4 px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-gray-100 overflow-hidden">
                <Image
                  src={supplier.logo || "/placeholder.svg"}
                  alt={supplier.name}
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold">{supplier.storeName}</h1>
                <p className="text-sm text-gray-500">
                  <Badge variant="outline" className="mr-2 bg-purple-50 text-purple-700 border-purple-200">
                    {supplier.plan} Plan
                  </Badge>
                  Member since {supplier.joinDate}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-1" /> Store Settings
              </Button>
              <Link href="/suppliers/demo/add-product">
                <Button size="sm" className="bg-[#C8102E] hover:bg-[#A50D26] text-white">
                  <Package className="h-4 w-4 mr-1" /> Add New Product
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      <div className="container mx-auto py-6 px-4">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg border shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Total Products</p>
                <h3 className="text-2xl font-bold">{supplier.stats.products}</h3>
              </div>
              <div className="h-10 w-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                <Package className="h-5 w-5" />
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg border shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Total Orders</p>
                <h3 className="text-2xl font-bold">{supplier.stats.orders}</h3>
              </div>
              <div className="h-10 w-10 bg-green-50 rounded-full flex items-center justify-center text-green-600">
                <ShoppingCart className="h-5 w-5" />
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg border shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Total Revenue</p>
                <h3 className="text-2xl font-bold">{supplier.stats.revenue}</h3>
              </div>
              <div className="h-10 w-10 bg-yellow-50 rounded-full flex items-center justify-center text-yellow-600">
                <TrendingUp className="h-5 w-5" />
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg border shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Store Rating</p>
                <div className="flex items-center">
                  <h3 className="text-2xl font-bold mr-1">{supplier.stats.rating}</h3>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < Math.floor(supplier.stats.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="h-10 w-10 bg-red-50 rounded-full flex items-center justify-center text-red-600">
                <Star className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="products" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="profile">Business Profile</TabsTrigger>
          </TabsList>

          {/* Products Tab */}
          <TabsContent value="products" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Your Products</h2>
              <div className="flex gap-2">
                <Link href="/suppliers/demo/bulk-upload">
                  <Button variant="outline" size="sm">
                    <FileText className="h-4 w-4 mr-1" /> Import Products
                  </Button>
                </Link>
                <Link href="/suppliers/demo/add-product">
                  <Button size="sm" className="bg-[#C8102E] hover:bg-[#A50D26] text-white">
                    <Package className="h-4 w-4 mr-1" /> Add New Product
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 border-b">
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Product
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Price
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Stock
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Sold
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {products.map((product) => (
                      <tr key={product.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                              <Image
                                src={product.image || "/placeholder.svg"}
                                alt={product.name}
                                width={40}
                                height={40}
                                className="rounded-md object-cover"
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{product.name}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{product.price}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{product.stock}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{product.sold}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                          <div className="flex gap-2">
                            <Link href="/suppliers/demo/add-product">
                              <Button variant="ghost" size="sm">
                                Edit
                              </Button>
                            </Link>
                            <Button variant="ghost" size="sm" className="text-red-600">
                              Delete
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-gray-50 px-4 py-3 border-t flex items-center justify-between">
                <div className="text-sm text-gray-500">Showing 1 to 4 of 342 products</div>
                <div className="flex gap-1">
                  <Button variant="outline" size="sm" disabled>
                    Previous
                  </Button>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Orders Tab */}
          <TabsContent value="orders" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Recent Orders</h2>
              <Button variant="outline" size="sm">
                <FileText className="h-4 w-4 mr-1" /> Export Orders
              </Button>
            </div>

            <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 border-b">
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Order ID
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Customer
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Total
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {orders.map((order) => (
                      <tr key={order.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">{order.id}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{order.customer}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{order.date}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{order.total}</td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <Badge
                            className={
                              order.status === "Completed"
                                ? "bg-green-100 text-green-800 border-green-200"
                                : order.status === "Processing"
                                  ? "bg-blue-100 text-blue-800 border-blue-200"
                                  : "bg-yellow-100 text-yellow-800 border-yellow-200"
                            }
                          >
                            {order.status}
                          </Badge>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                          <Button variant="ghost" size="sm">
                            View Details
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-gray-50 px-4 py-3 border-t flex items-center justify-between">
                <div className="text-sm text-gray-500">Showing 1 to 4 of 1,289 orders</div>
                <div className="flex gap-1">
                  <Button variant="outline" size="sm" disabled>
                    Previous
                  </Button>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-4">
            <h2 className="text-xl font-bold">Sales Analytics</h2>

            <div className="bg-white p-6 rounded-lg border shadow-sm">
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-4">Monthly Sales (2025)</h3>
                <div className="h-64 bg-gray-50 rounded-lg border flex items-end justify-between p-4">
                  {/* Simple bar chart representation */}
                  <div className="w-1/12 flex flex-col items-center">
                    <div className="bg-blue-500 w-full rounded-t-sm" style={{ height: "40%" }}></div>
                    <span className="text-xs mt-2">Jan</span>
                  </div>
                  <div className="w-1/12 flex flex-col items-center">
                    <div className="bg-blue-500 w-full rounded-t-sm" style={{ height: "60%" }}></div>
                    <span className="text-xs mt-2">Feb</span>
                  </div>
                  <div className="w-1/12 flex flex-col items-center">
                    <div className="bg-blue-500 w-full rounded-t-sm" style={{ height: "45%" }}></div>
                    <span className="text-xs mt-2">Mar</span>
                  </div>
                  <div className="w-1/12 flex flex-col items-center">
                    <div className="bg-blue-500 w-full rounded-t-sm" style={{ height: "70%" }}></div>
                    <span className="text-xs mt-2">Apr</span>
                  </div>
                  <div className="w-1/12 flex flex-col items-center">
                    <div className="bg-[#C8102E] w-full rounded-t-sm" style={{ height: "85%" }}></div>
                    <span className="text-xs mt-2">May</span>
                  </div>
                  <div className="w-1/12 flex flex-col items-center">
                    <div className="bg-gray-300 w-full rounded-t-sm" style={{ height: "0%" }}></div>
                    <span className="text-xs mt-2">Jun</span>
                  </div>
                  <div className="w-1/12 flex flex-col items-center">
                    <div className="bg-gray-300 w-full rounded-t-sm" style={{ height: "0%" }}></div>
                    <span className="text-xs mt-2">Jul</span>
                  </div>
                  <div className="w-1/12 flex flex-col items-center">
                    <div className="bg-gray-300 w-full rounded-t-sm" style={{ height: "0%" }}></div>
                    <span className="text-xs mt-2">Aug</span>
                  </div>
                  <div className="w-1/12 flex flex-col items-center">
                    <div className="bg-gray-300 w-full rounded-t-sm" style={{ height: "0%" }}></div>
                    <span className="text-xs mt-2">Sep</span>
                  </div>
                  <div className="w-1/12 flex flex-col items-center">
                    <div className="bg-gray-300 w-full rounded-t-sm" style={{ height: "0%" }}></div>
                    <span className="text-xs mt-2">Oct</span>
                  </div>
                  <div className="w-1/12 flex flex-col items-center">
                    <div className="bg-gray-300 w-full rounded-t-sm" style={{ height: "0%" }}></div>
                    <span className="text-xs mt-2">Nov</span>
                  </div>
                  <div className="w-1/12 flex flex-col items-center">
                    <div className="bg-gray-300 w-full rounded-t-sm" style={{ height: "0%" }}></div>
                    <span className="text-xs mt-2">Dec</span>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Top Selling Products</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-sm font-medium">1.</span>
                        <span className="ml-2 text-sm">Premium Brake Pads for Toyota Vios</span>
                      </div>
                      <span className="text-sm font-medium">128 sold</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-sm font-medium">2.</span>
                        <span className="ml-2 text-sm">Oil Filter for Mitsubishi Mirage</span>
                      </div>
                      <span className="text-sm font-medium">215 sold</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-sm font-medium">3.</span>
                        <span className="ml-2 text-sm">Headlight Assembly for Honda City</span>
                      </div>
                      <span className="text-sm font-medium">67 sold</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-sm font-medium">4.</span>
                        <span className="ml-2 text-sm">Side Mirror for Nissan Navara</span>
                      </div>
                      <span className="text-sm font-medium">42 sold</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Customer Demographics</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Metro Manila</span>
                        <span className="text-sm font-medium">45%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-[#C8102E] h-2 rounded-full" style={{ width: "45%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Calabarzon</span>
                        <span className="text-sm font-medium">25%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-[#C8102E] h-2 rounded-full" style={{ width: "25%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Central Luzon</span>
                        <span className="text-sm font-medium">15%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-[#C8102E] h-2 rounded-full" style={{ width: "15%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Other Regions</span>
                        <span className="text-sm font-medium">15%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-[#C8102E] h-2 rounded-full" style={{ width: "15%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Business Profile Tab */}
          <TabsContent value="profile" className="space-y-4">
            <h2 className="text-xl font-bold">Business Profile</h2>

            <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Business Information</h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-gray-500">Business Name</p>
                        <p className="font-medium">{supplier.name}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Store Name</p>
                        <p className="font-medium">{supplier.storeName}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Tax Identification Number (TIN)</p>
                        <p className="font-medium">{supplier.tin}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Business Address</p>
                        <p className="font-medium">{supplier.address}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">Contact Information</h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-gray-500">Contact Person</p>
                        <p className="font-medium">{supplier.contact.name}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Position</p>
                        <p className="font-medium">{supplier.contact.position}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Email Address</p>
                        <p className="font-medium">{supplier.contact.email}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Phone Number</p>
                        <p className="font-medium">{supplier.contact.phone}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <h3 className="text-lg font-medium mb-4">Subscription Plan</h3>
                  <div className="flex items-center gap-4">
                    <Badge className="bg-purple-100 text-purple-800 border-purple-200">Pro Plan</Badge>
                    <span className="text-sm">₱2,499/month • 500 products</span>
                    <Button variant="outline" size="sm">
                      Upgrade Plan
                    </Button>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t flex justify-end">
                  <Button className="bg-[#C8102E] hover:bg-[#A50D26] text-white">Save Changes</Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t mt-8 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">© 2025 PyeSakto.ph. All rights reserved.</p>
            <div className="flex items-center gap-4 mt-2 md:mt-0">
              <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
                Help Center
              </Link>
              <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
                Contact Support
              </Link>
              <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
                Terms for Suppliers
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
