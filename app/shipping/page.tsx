import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ShippingPage() {
  // Shipping methods
  const shippingMethods = [
    {
      name: "Standard Shipping",
      time: "3-5 business days",
      price: "₱250",
      description: "Available in Metro Manila and Select Urban Areas",
    },
    {
      name: "Express Shipping",
      time: "2-3 business days",
      price: "₱350",
      description: "Available in Metro Manila Only",
    },
    {
      name: "Free Shipping",
      time: "3-5 business days",
      price: "FREE",
      description: "For orders above ₱5,000 in Metro Manila and Select Urban Areas",
    },
  ]

  // Shipping partners
  const shippingPartners = [
    { name: "J&T Express", logo: "/placeholder.svg?key=94l92" },
    { name: "LBC", logo: "/placeholder.svg?key=7r7fe" },
    { name: "Ninja Van", logo: "/placeholder.svg?key=5exwq" },
    { name: "Grab Express", logo: "/placeholder.svg?key=ojz0w" },
    { name: "Lalamove", logo: "/placeholder.svg?key=b9hhd" },
  ]

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto py-3 px-4">
          <div className="flex items-center text-sm">
            <Link href="/" className="text-gray-500 hover:text-[#007BFF]">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 text-gray-400" />
            <span className="text-gray-900 font-medium">Shipping Information</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-[#2E2E2E] text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Shipping Information</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Fast, reliable delivery of auto parts across the Philippines
          </p>
        </div>
      </div>

      {/* Free Shipping Banner */}
      <div className="bg-[#C8102E] text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl font-bold">FREE SHIPPING on orders over ₱5,000!</h2>
        </div>
      </div>

      {/* Shipping Methods */}
      <div className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Shipping Methods</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {shippingMethods.map((method, index) => (
              <div key={index} className="bg-white border rounded-lg p-6">
                <h3 className="font-bold text-lg mb-1">{method.name}</h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-lg font-bold ${method.price === "FREE" ? "text-[#C8102E]" : ""}`}>
                    {method.price}
                  </span>
                  <span className="text-sm text-gray-500">• {method.time}</span>
                </div>
                <p className="text-gray-600 text-sm">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Delivery Map */}
      <div className="py-12 px-4 bg-gray-100">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">Limited Delivery Areas</h2>
              <p className="text-gray-700 mb-4">
                PyeSakto.ph delivers auto parts to Metro Manila, nearby provinces, and select urban areas only. We
                currently do not offer nationwide shipping. Delivery times may vary based on your location and the
                shipping method selected.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-green-500 flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-semibold">Metro Manila</h3>
                    <p className="text-sm text-gray-600">2-3 business days</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-semibold">Nearby Provinces (Cavite, Laguna, Rizal, Bulacan)</h3>
                    <p className="text-sm text-gray-600">3-5 business days</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-yellow-500 flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-semibold">Select Urban Areas</h3>
                    <p className="text-sm text-gray-600">3-5 business days</p>
                  </div>
                </div>
              </div>

              <Button className="bg-[#C8102E] hover:bg-[#A50D26] text-white">Check Delivery to Your Location</Button>
            </div>

            <div className="md:w-1/2 relative h-64 md:h-96 w-full rounded-lg overflow-hidden border">
              <Image
                src="/placeholder.svg?height=600&width=800&query=metro+manila+and+nearby+provinces+map"
                alt="Metro Manila and Nearby Provinces Delivery Map"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Shipping Partners */}
      <div className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Shipping Partners</h2>

          <div className="flex flex-wrap justify-center gap-8">
            {shippingPartners.map((partner, index) => (
              <div key={index} className="flex items-center justify-center">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={120}
                  height={60}
                  className="object-contain h-16"
                />
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 mt-8 max-w-2xl mx-auto">
            We partner with the Philippines' most reliable logistics providers to ensure your auto parts arrive safely
            and on time. Our team carefully selects the best carrier for each delivery based on your location.
          </p>
        </div>
      </div>

      {/* Tracking Information */}
      <div className="py-12 px-4 bg-gray-100">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto bg-white rounded-lg border p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Track Your Order</h2>

            <div className="flex gap-4 mb-6">
              <input type="text" placeholder="Enter your order number" className="flex-1 border rounded-md px-4 py-2" />
              <Button className="bg-[#2E2E2E] hover:bg-black text-white">Track</Button>
            </div>

            <div className="border-t pt-6">
              <h3 className="font-semibold mb-4">How to Track Your Order</h3>
              <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                <li>Enter your order number (found in your order confirmation email)</li>
                <li>Click the "Track" button to see your order status</li>
                <li>You can also track your order from your account dashboard</li>
                <li>Receive SMS and email notifications at each stage of delivery</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* Shipping Policies */}
      <div className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Shipping Policies</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white border rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">Order Processing</h3>
              <p className="text-gray-700 mb-4">
                Orders are typically processed within 24 hours of payment confirmation. For items in stock, your order
                will be packed and shipped within 1 business day.
              </p>
              <p className="text-gray-700">
                Orders placed after 3:00 PM will be processed the following business day. Orders placed on weekends or
                holidays will be processed on the next business day.
              </p>
            </div>

            <div className="bg-white border rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">Shipping Delays</h3>
              <p className="text-gray-700 mb-4">
                While we strive to deliver all orders on time, delays may occur due to weather conditions, traffic, or
                other factors beyond our control.
              </p>
              <p className="text-gray-700">
                During peak seasons (like holiday sales), delivery times may be extended by 1-2 business days. We'll
                notify you of any significant delays.
              </p>
            </div>

            <div className="bg-white border rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">Damaged or Lost Packages</h3>
              <p className="text-gray-700 mb-4">
                All packages are insured against damage or loss during transit. If your package arrives damaged or
                doesn't arrive at all, please contact our customer service team within 48 hours.
              </p>
              <p className="text-gray-700">
                We'll either replace the item or provide a full refund, depending on your preference and product
                availability.
              </p>
            </div>

            <div className="bg-white border rounded-lg p-6">
              <h3 className="font-bold text-lg mb-3">Shipping Coverage</h3>
              <p className="text-gray-700 mb-4">
                Currently, PyeSakto.ph only ships to Metro Manila, nearby provinces (Cavite, Laguna, Rizal, Bulacan),
                and select urban areas in the Philippines. We do not offer nationwide shipping at this time.
              </p>
              <p className="text-gray-700">
                For customers outside our delivery areas, please contact our customer service team for special
                arrangements or alternative options.
              </p>
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
              <h3 className="font-semibold mb-2">Can I change my delivery address after placing an order?</h3>
              <p className="text-gray-600">
                Yes, you can change your delivery address if the order hasn't been shipped yet. Contact our customer
                service team as soon as possible with your order number.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border">
              <h3 className="font-semibold mb-2">Do you ship to all provinces in the Philippines?</h3>
              <p className="text-gray-600">
                No, we currently only ship to Metro Manila, nearby provinces (Cavite, Laguna, Rizal, Bulacan), and
                select urban areas. We're working on expanding our delivery network in the future.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border">
              <h3 className="font-semibold mb-2">What happens if I'm not available to receive my package?</h3>
              <p className="text-gray-600">
                Our delivery partners will attempt delivery up to 3 times. If you're not available, they'll leave a
                notice and you can reschedule delivery or pick up from their local branch.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border">
              <h3 className="font-semibold mb-2">Can I request for a specific delivery time?</h3>
              <p className="text-gray-600">
                For Express and Same-Day deliveries in Metro Manila, you can request a specific delivery window (morning
                or afternoon). Standard shipping doesn't offer specific time slots.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/contact">
              <Button className="bg-[#C8102E] hover:bg-[#A50D26] text-white">Contact Our Support Team</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
