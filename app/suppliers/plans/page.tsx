import Link from "next/link"
import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SupplierPlans() {
  const plans = [
    {
      name: "Free Plan",
      color: "green",
      colorClass: "bg-green-500",
      emoji: "🟢",
      price: 0,
      productLimit: "20 products",
      features: [
        { name: "Store profile", included: true },
        { name: "Basic support", included: true },
        { name: "Order notifications", included: true },
        { name: "Sales reports", included: false },
        { name: "Store logo display", included: false },
        { name: "Priority support", included: false },
        { name: "Homepage promotion", included: false },
        { name: "Custom store banner", included: false },
        { name: "Stock alerts & advanced reports", included: false },
        { name: "Top placement in search", included: false },
        { name: "Dedicated account manager", included: false },
      ],
      popular: false,
    },
    {
      name: "Basic Plan",
      color: "blue",
      colorClass: "bg-[#007BFF]",
      emoji: "🔵",
      price: 999,
      productLimit: "100 products",
      features: [
        { name: "Store profile", included: true },
        { name: "Basic support", included: true },
        { name: "Order notifications", included: true },
        { name: "Sales reports", included: true },
        { name: "Store logo display", included: true },
        { name: "Priority support", included: true },
        { name: "Homepage promotion", included: false },
        { name: "Custom store banner", included: false },
        { name: "Stock alerts & advanced reports", included: false },
        { name: "Top placement in search", included: false },
        { name: "Dedicated account manager", included: false },
      ],
      popular: true,
    },
    {
      name: "Pro Plan",
      color: "purple",
      colorClass: "bg-purple-600",
      emoji: "🟣",
      price: 2499,
      productLimit: "500 products",
      features: [
        { name: "Store profile", included: true },
        { name: "Basic support", included: true },
        { name: "Order notifications", included: true },
        { name: "Sales reports", included: true },
        { name: "Store logo display", included: true },
        { name: "Priority support", included: true },
        { name: "Homepage promotion (1 item/month)", included: true },
        { name: "Custom store banner", included: true },
        { name: "Stock alerts & advanced reports", included: true },
        { name: "Top placement in search", included: false },
        { name: "Dedicated account manager", included: false },
      ],
      popular: false,
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header section with basic info about supplier plans */}
      <div className="bg-[#2E2E2E] text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Supplier Plans for PyeSakto.ph</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Join our network of trusted auto parts suppliers and connect with customers across the Philippines. Choose
            the plan that fits your business needs.
          </p>
        </div>
      </div>

      {/* Main pricing section */}
      <div className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`border rounded-lg overflow-hidden flex flex-col ${
                  plan.popular ? "ring-2 ring-[#C8102E]" : ""
                }`}
              >
                {/* Plan header */}
                <div className={`${plan.colorClass} p-6 text-white`}>
                  <div className="text-xl font-bold flex items-center gap-2">
                    <span>{plan.emoji}</span>
                    <span>{plan.name}</span>
                    {plan.popular && (
                      <span className="bg-white text-[#C8102E] text-xs font-semibold px-2 py-1 rounded-full ml-auto">
                        Popular
                      </span>
                    )}
                  </div>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">₱{plan.price}</span>
                    <span className="text-white/80 ml-1">/month</span>
                  </div>
                  <p className="mt-2 font-medium">{plan.productLimit}</p>
                </div>

                {/* Feature list */}
                <div className="p-6 flex-grow">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        {feature.included ? (
                          <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                        ) : (
                          <X className="h-5 w-5 text-gray-300 flex-shrink-0" />
                        )}
                        <span className={feature.included ? "text-gray-800" : "text-gray-400"}>{feature.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA button */}
                <div className="p-6 border-t">
                  <Button
                    variant={plan.price === 0 ? "outline" : "default"}
                    className={`w-full ${plan.price === 0 ? "border-[#C0C0C0] text-[#2E2E2E]" : ""}`}
                  >
                    {plan.price === 0 ? "Start for Free" : "Subscribe Now"}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits section */}
      <div className="py-12 px-4 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Benefits of Being a PyeSakto.ph Supplier</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-[#C8102E]/10 text-[#C8102E] rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Reach More Customers</h3>
              <p className="text-gray-600">
                Connect with auto enthusiasts and car owners all across the Philippines looking for quality parts.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-[#007BFF]/10 text-[#007BFF] rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Easy Management</h3>
              <p className="text-gray-600">
                Our supplier dashboard makes it simple to upload products, manage inventory, and track sales.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-[#2E2E2E]/10 text-[#2E2E2E] rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0l1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Trusted Platform</h3>
              <p className="text-gray-600">
                Join a trusted marketplace specifically designed for the Philippine automotive parts industry.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="border rounded-lg p-6">
              <h3 className="font-semibold mb-2">How do I sign up as a supplier?</h3>
              <p className="text-gray-600">
                Register for a supplier account, choose your plan, complete your store profile, and start adding your
                products.
              </p>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="font-semibold mb-2">Can I upgrade or downgrade my plan?</h3>
              <p className="text-gray-600">
                Yes, you can change your plan at any time. Changes will take effect on your next billing cycle.
              </p>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="font-semibold mb-2">How do payments work?</h3>
              <p className="text-gray-600">
                We process payments via GCash, Maya, or bank transfer. You'll receive payments for your sales, minus our
                commission, every week.
              </p>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="font-semibold mb-2">How does shipping work?</h3>
              <p className="text-gray-600">
                You can use your own shipping arrangements or our integrated shipping partners with special rates for
                PyeSakto suppliers.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/suppliers/register">
              <Button size="lg" className="bg-[#C8102E] hover:bg-[#A50D26] text-white">
                Become a Supplier Today
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-12 px-4 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">What Our Suppliers Say</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[#C8102E] text-lg">★★★★★</span>
                <span className="text-gray-600">5.0</span>
              </div>
              <p className="mb-4">
                "Joining PyeSakto as a Pro supplier has transformed our business. We've seen a 40% increase in sales
                within just 2 months."
              </p>
              <div className="font-semibold">Carlo Santos</div>
              <div className="text-sm text-gray-600">Manila Auto Parts</div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[#C8102E] text-lg">★★★★★</span>
                <span className="text-gray-600">5.0</span>
              </div>
              <p className="mb-4">
                "The platform is so easy to use. I can manage my entire inventory efficiently and the sales reports help
                me make better business decisions."
              </p>
              <div className="font-semibold">Maria Reyes</div>
              <div className="text-sm text-gray-600">Cebu Parts Solution</div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[#C8102E] text-lg">★★★★☆</span>
                <span className="text-gray-600">4.0</span>
              </div>
              <p className="mb-4">
                "Started with the Free plan and upgraded to Basic as my sales grew. The customer support team has been
                incredibly helpful throughout my journey."
              </p>
              <div className="font-semibold">Jun Mendoza</div>
              <div className="text-sm text-gray-600">Davao Car Accessories</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#2E2E2E] text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to grow your auto parts business?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join PyeSakto.ph today and start selling your products to customers across the Philippines.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/suppliers/register">
              <Button size="lg" className="bg-[#C8102E] hover:bg-[#A50D26] text-white">
                Start Selling Now
              </Button>
            </Link>
            <Link href="/suppliers/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#2E2E2E]"
              >
                Contact Sales Team
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
