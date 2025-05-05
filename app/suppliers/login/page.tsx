"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, AlertCircle } from "lucide-react"

export default function SupplierLogin() {
  const router = useRouter()
  const [email, setEmail] = useState("demo@manilaautoparts.ph")
  const [password, setPassword] = useState("demo123456")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)

      // For demo purposes, always redirect to the demo dashboard
      router.push("/suppliers/demo")
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Demo Banner */}
      <div className="bg-blue-600 text-white p-3 text-center">
        <p className="text-sm font-medium">
          This is a demo login page. Use the pre-filled credentials to access the supplier dashboard.
        </p>
      </div>

      <div className="flex-1 flex flex-col md:flex-row">
        {/* Left Side - Login Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            <div className="text-center mb-8">
              <Link href="/" className="inline-block">
                <Image src="/pyesakto-logo.png" alt="PyeSakto Logo" width={180} height={60} className="mx-auto" />
              </Link>
              <h1 className="text-2xl font-bold mt-6 mb-2">Supplier Login</h1>
              <p className="text-gray-600">Access your supplier dashboard</p>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md flex items-start">
                <AlertCircle className="h-5 w-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-red-800 text-sm">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="border-gray-300"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <Link href="#" className="text-sm text-[#C8102E] hover:text-[#A50D26]">
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="border-gray-300 pr-10"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center">
                <Checkbox id="remember" />
                <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>

              <Button type="submit" className="w-full bg-[#C8102E] hover:bg-[#A50D26] text-white" disabled={isLoading}>
                {isLoading ? "Logging in..." : "Log In"}
              </Button>

              <div className="text-center text-sm text-gray-600">
                Don't have an account?{" "}
                <Link href="/suppliers/register" className="text-[#C8102E] hover:text-[#A50D26] font-medium">
                  Register as a Supplier
                </Link>
              </div>
            </form>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-xs text-center text-gray-500">
                By logging in, you agree to PyeSakto's{" "}
                <Link href="#" className="text-[#C8102E]">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="#" className="text-[#C8102E]">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="hidden md:block md:w-1/2 bg-[#C8102E]">
          <div className="h-full flex flex-col items-center justify-center p-8 text-white">
            <div className="max-w-md text-center">
              <h2 className="text-3xl font-bold mb-6">Grow Your Auto Parts Business</h2>
              <p className="text-lg mb-8">
                Join thousands of suppliers selling auto parts to customers across the Philippines.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex flex-col items-center">
                  <div className="text-4xl font-bold mb-2">1M+</div>
                  <div className="text-sm">Monthly Customers</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-4xl font-bold mb-2">₱50M+</div>
                  <div className="text-sm">Monthly Sales</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-4xl font-bold mb-2">5,000+</div>
                  <div className="text-sm">Active Suppliers</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-4xl font-bold mb-2">100K+</div>
                  <div className="text-sm">Products Listed</div>
                </div>
              </div>

              <Image
                src="/filipino-automotive-community.png"
                alt="Filipino Automotive Community"
                width={400}
                height={300}
                className="mx-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
