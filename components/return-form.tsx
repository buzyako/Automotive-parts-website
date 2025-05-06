"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

const returnReasons = [
  "Defective product",
  "Wrong item received",
  "Doesn't fit my vehicle",
  "Changed my mind",
  "Damaged during shipping",
  "Not as described",
  "Other",
]

export function ReturnForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    orderNumber: "",
    email: "",
    productName: "",
    reason: "",
    details: "",
    returnType: "refund",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would normally submit the form data to your backend
    console.log("Form submitted:", formData)

    // For demo purposes, we'll just show a success message
    setTimeout(() => {
      setIsSubmitted(true)
    }, 1000)
  }

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-center text-green-600">Return Request Submitted</CardTitle>
          <CardDescription className="text-center">Your return request has been received</CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          <p className="mb-2">
            Return Request Number: <strong>RTN-{Math.floor(Math.random() * 10000)}</strong>
          </p>
          <p className="text-sm text-gray-600 mb-4">
            We've sent a confirmation email with instructions on how to proceed with your return.
          </p>
          <p className="text-sm text-gray-600">
            Our team will review your request and get back to you within 24-48 hours.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button onClick={() => setIsSubmitted(false)}>Submit Another Return</Button>
        </CardFooter>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Return Request Form</CardTitle>
        <CardDescription>Please fill out this form to initiate your return</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="orderNumber">Order Number*</Label>
            <Input
              id="orderNumber"
              name="orderNumber"
              placeholder="e.g., ORD-12345"
              required
              value={formData.orderNumber}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address*</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="productName">Product Name*</Label>
            <Input
              id="productName"
              name="productName"
              placeholder="e.g., Toyota Headlight Assembly"
              required
              value={formData.productName}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="reason">Reason for Return*</Label>
            <Select
              name="reason"
              value={formData.reason}
              onValueChange={(value) => handleSelectChange("reason", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a reason" />
              </SelectTrigger>
              <SelectContent>
                {returnReasons.map((reason) => (
                  <SelectItem key={reason} value={reason}>
                    {reason}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="details">Additional Details</Label>
            <Textarea
              id="details"
              name="details"
              placeholder="Please provide any additional information about your return"
              value={formData.details}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <Label>Return Type*</Label>
            <div className="flex space-x-4">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="refund"
                  name="returnType"
                  value="refund"
                  checked={formData.returnType === "refund"}
                  onChange={handleChange}
                  className="mr-2"
                />
                <Label htmlFor="refund" className="cursor-pointer">
                  Refund
                </Label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="exchange"
                  name="returnType"
                  value="exchange"
                  checked={formData.returnType === "exchange"}
                  onChange={handleChange}
                  className="mr-2"
                />
                <Label htmlFor="exchange" className="cursor-pointer">
                  Exchange
                </Label>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <Button type="submit" className="w-full">
              Submit Return Request
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
