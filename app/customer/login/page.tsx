"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"

export default function CustomerLogin() {
  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")
  const [registerName, setRegisterName] = useState("")
  const [registerEmail, setRegisterEmail] = useState("")
  const [registerPassword, setRegisterPassword] = useState("")
  const [registerAddress, setRegisterAddress] = useState("")
  const [registerCity, setRegisterCity] = useState("")
  const [registerProvince, setRegisterProvince] = useState("")
  const [registerZipCode, setRegisterZipCode] = useState("")
  const [registerPhone, setRegisterPhone] = useState("")
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Implement login logic here
    console.log("Login with:", loginEmail, loginPassword)
    setTimeout(() => setLoading(false), 1000)
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Implement registration logic here
    console.log("Register with:", registerName, registerEmail, registerPassword)
    setTimeout(() => setLoading(false), 1000)
  }

  return (
    <div className="py-12 px-4">
      <div className="container mx-auto max-w-md">
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle>Customer Login</CardTitle>
                <CardDescription>Enter your credentials to access your account</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="login-email">Email</Label>
                    <Input
                      id="login-email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="login-password">Password</Label>
                      <Link href="/customer/forgot-password" className="text-sm text-[#007BFF] hover:underline">
                        Forgot password?
                      </Link>
                    </div>
                    <Input
                      id="login-password"
                      type="password"
                      placeholder="••••••••"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-[#C8102E] hover:bg-[#A50D26]" disabled={loading}>
                    {loading ? "Logging in..." : "Login"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="register">
            <Card>
              <CardHeader>
                <CardTitle>Create an Account</CardTitle>
                <CardDescription>Register to track orders and save your shipping information</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleRegister} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="register-name">
                      Full Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="register-name"
                      placeholder="Juan Dela Cruz"
                      value={registerName}
                      onChange={(e) => setRegisterName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-email">
                      Email Address <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="register-email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={registerEmail}
                      onChange={(e) => setRegisterEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-password">
                      Password <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="register-password"
                      type="password"
                      placeholder="••••••••"
                      value={registerPassword}
                      onChange={(e) => setRegisterPassword(e.target.value)}
                      required
                      minLength={8}
                    />
                    <p className="text-xs text-gray-500">Password must be at least 8 characters</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-address">
                      Complete Address <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="register-address"
                      placeholder="Street address"
                      value={registerAddress}
                      onChange={(e) => setRegisterAddress(e.target.value)}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="register-city">
                        City <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="register-city"
                        placeholder="City"
                        value={registerCity}
                        onChange={(e) => setRegisterCity(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="register-province">
                        Province <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="register-province"
                        placeholder="Province"
                        value={registerProvince}
                        onChange={(e) => setRegisterProvince(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="register-zipcode">
                        ZIP Code <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="register-zipcode"
                        placeholder="ZIP Code"
                        value={registerZipCode}
                        onChange={(e) => setRegisterZipCode(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="register-phone">
                        Contact Number <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="register-phone"
                        type="tel"
                        placeholder="+63 XXX XXX XXXX"
                        value={registerPhone}
                        onChange={(e) => setRegisterPhone(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-[#C8102E] hover:bg-[#A50D26]" disabled={loading}>
                    {loading ? "Creating Account..." : "Create Account"}
                  </Button>
                </form>
              </CardContent>
              <CardFooter className="text-sm text-center text-gray-500">
                By creating an account, you agree to our{" "}
                <Link href="/terms" className="text-[#007BFF] hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-[#007BFF] hover:underline">
                  Privacy Policy
                </Link>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
