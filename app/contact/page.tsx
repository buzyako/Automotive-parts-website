"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Header from "@/components/header"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header />

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto py-3 px-4">
          <div className="flex items-center text-sm">
            <Link href="/" className="text-gray-500 hover:text-[#007BFF]">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 text-gray-400" />
            <span className="text-gray-900 font-medium">Contact Us</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-[#2E2E2E] text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have questions about our products, orders, or need technical assistance? We're here to help!
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg border text-center">
              <div className="w-12 h-12 bg-[#C8102E]/10 text-[#C8102E] rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Call Us</h3>
              <p className="text-gray-600 mb-2">Customer Service Hours:</p>
              <p className="text-gray-600 mb-4">Monday - Saturday: 8:00 AM - 8:00 PM</p>
              <a href="tel:+6328888777" className="text-[#007BFF] font-medium hover:underline">
                +63 2 8888 7777
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg border text-center">
              <div className="w-12 h-12 bg-[#007BFF]/10 text-[#007BFF] rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Email Us</h3>
              <p className="text-gray-600 mb-2">We'll respond within 24 hours</p>
              <p className="text-gray-600 mb-4">For faster service, include your order number</p>
              <a href="mailto:support@pyesakto.ph" className="text-[#007BFF] font-medium hover:underline">
                support@pyesakto.ph
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg border text-center">
              <div className="w-12 h-12 bg-[#2E2E2E]/10 text-[#2E2E2E] rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Visit Us</h3>
              <p className="text-gray-600 mb-2">Main Office & Showroom:</p>
              <p className="text-gray-600 mb-4">123 Automotive Street, Makati City, Metro Manila</p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#007BFF] font-medium hover:underline"
              >
                Get Directions
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white p-6 rounded-lg border">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-500 mx-auto mb-4"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent Successfully!</h3>
                  <p className="text-green-700 mb-4">
                    Thank you for contacting us. Our team will get back to you within 24 hours.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setIsSubmitted(false)}
                    className="border-green-500 text-green-500 hover:bg-green-50"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number (Optional)
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+63 XXX XXX XXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <Select onValueChange={(value) => handleSelectChange("subject", value)} value={formData.subject}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a topic" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="order">Order Inquiry</SelectItem>
                        <SelectItem value="product">Product Question</SelectItem>
                        <SelectItem value="return">Return/Refund</SelectItem>
                        <SelectItem value="technical">Technical Support</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      rows={5}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#C8102E] hover:bg-[#A50D26] text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>

            {/* Map and Store Locations */}
            <div>
              <div className="bg-white p-6 rounded-lg border mb-6">
                <h2 className="text-2xl font-bold mb-6">Our Locations</h2>
                <div className="aspect-video relative rounded-lg overflow-hidden border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123743.88037948117!2d120.93726!3d14.58555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c90264a0ed01%3A0x2b066ed57830c578!2sMetro%20Manila!5e0!3m2!1sen!2sph!4v1620815234567!5m2!1sen!2sph"
                    width="100%"
                    height="100%"
                    style={{ border: 0, position: "absolute", top: 0, left: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border">
                <h3 className="font-bold text-lg mb-4">Store Locations</h3>
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <h4 className="font-semibold">Makati Flagship Store</h4>
                    <p className="text-gray-600 text-sm">123 Automotive Street, Makati City</p>
                    <p className="text-gray-600 text-sm">Open daily: 9:00 AM - 7:00 PM</p>
                  </div>
                  <div className="border-b pb-4">
                    <h4 className="font-semibold">Quezon City Branch</h4>
                    <p className="text-gray-600 text-sm">456 Parts Avenue, Quezon City</p>
                    <p className="text-gray-600 text-sm">Open daily: 9:00 AM - 7:00 PM</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Cebu Branch</h4>
                    <p className="text-gray-600 text-sm">789 Automotive Boulevard, Cebu City</p>
                    <p className="text-gray-600 text-sm">Open daily: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-12 px-4 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg border">
              <h3 className="font-semibold mb-2">What are your shipping times?</h3>
              <p className="text-gray-600">
                We offer next-day delivery to Metro Manila and 2-3 day shipping to most major cities in the Philippines.
                Remote areas may take 3-5 business days.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border">
              <h3 className="font-semibold mb-2">How do I return a product?</h3>
              <p className="text-gray-600">
                You can initiate a return through your account dashboard or by contacting our customer service team.
                Returns must be initiated within 15 days of delivery.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border">
              <h3 className="font-semibold mb-2">Do you offer installation services?</h3>
              <p className="text-gray-600">
                We partner with certified mechanics across the Philippines. You can book installation services during
                checkout or through your account dashboard.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border">
              <h3 className="font-semibold mb-2">How can I check if a part fits my vehicle?</h3>
              <p className="text-gray-600">
                Use our Vehicle Compatibility Checker on each product page. Simply enter your vehicle's make, model, and
                year to verify compatibility.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/faq">
              <Button variant="outline" className="border-[#C8102E] text-[#C8102E] hover:bg-[#C8102E] hover:text-white">
                View All FAQs
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
