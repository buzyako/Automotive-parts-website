"use client"

import { Package, Tag, ShoppingCart, TrendingUp, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface AdminDashboardProps {
  stats: {
    productCount: number
    categoryCount: number
    brandCount: number
    orderCount: number
  }
  recentProducts: any[]
  recentOrders: any[]
}

export default function AdminDashboard({ stats, recentProducts, recentOrders }: AdminDashboardProps) {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex space-x-2">
          <Button asChild>
            <Link href="/admin/products/new">Add New Product</Link>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Products</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.productCount}</div>
            <p className="text-xs text-muted-foreground">
              <Link href="/admin/products" className="text-[#C8102E] hover:underline">
                Manage products
              </Link>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Categories</CardTitle>
            <Tag className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.categoryCount}</div>
            <p className="text-xs text-muted-foreground">
              <Link href="/admin/categories" className="text-[#C8102E] hover:underline">
                Manage categories
              </Link>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Brands</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.brandCount}</div>
            <p className="text-xs text-muted-foreground">
              <Link href="/admin/brands" className="text-[#C8102E] hover:underline">
                Manage brands
              </Link>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Orders</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.orderCount}</div>
            <p className="text-xs text-muted-foreground">
              <Link href="/admin/orders" className="text-[#C8102E] hover:underline">
                Manage orders
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Products</CardTitle>
          </CardHeader>
          <CardContent>
            {recentProducts.length > 0 ? (
              <div className="space-y-4">
                {recentProducts.map((product) => (
                  <div key={product.id} className="flex items-center justify-between">
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
                      <div>
                        <p className="text-sm font-medium">{product.name}</p>
                        <p className="text-xs text-gray-500">₱{product.price.toLocaleString()}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/admin/products/${product.id}/edit`}>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500">No products found</p>
            )}

            <div className="mt-4">
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link href="/admin/products">View All Products</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
          </CardHeader>
          <CardContent>
            {recentOrders.length > 0 ? (
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Order #{order.id.substring(0, 8)}</p>
                      <p className="text-xs text-gray-500">{new Date(order.created_at).toLocaleDateString()}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">₱{order.total_amount.toLocaleString()}</p>
                      <p
                        className={`text-xs ${
                          order.status === "completed"
                            ? "text-green-500"
                            : order.status === "processing"
                              ? "text-blue-500"
                              : "text-gray-500"
                        }`}
                      >
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500">No orders found</p>
            )}

            <div className="mt-4">
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link href="/admin/orders">View All Orders</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
