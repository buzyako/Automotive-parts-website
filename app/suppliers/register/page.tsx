import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"

export default function SupplierRegister() {
  return (
    <div className="py-12 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Register as a PyeSakto.ph Supplier</h1>
          <p className="text-gray-600">Fill out the form below to start selling your auto parts on our platform</p>
        </div>

        <div className="bg-white border rounded-lg p-8 shadow-sm">
          <form>
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Business Information</h2>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">
                      Business Name <span className="text-red-500">*</span>
                    </label>
                    <Input id="businessName" placeholder="Your business name" required />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="businessType" className="block text-sm font-medium text-gray-700">
                      Business Type
                    </label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select business type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="manufacturer">Manufacturer</SelectItem>
                        <SelectItem value="distributor">Distributor</SelectItem>
                        <SelectItem value="retailer">Retailer</SelectItem>
                        <SelectItem value="individual">Individual Seller</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <label htmlFor="tin" className="block text-sm font-medium text-gray-700">
                      Tax Identification Number (TIN) <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="tin"
                      placeholder="XXX-XXX-XXX-XXX"
                      required
                      aria-required="true"
                      className="border-gray-300 focus:border-[#C8102E]"
                    />
                    <p className="text-xs text-gray-500">Valid TIN format: XXX-XXX-XXX-XXX or XXXXXXXXXXXX</p>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                      Business Address <span className="text-red-500">*</span>
                    </label>
                    <Input id="address" placeholder="Street address" required />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                      City <span className="text-red-500">*</span>
                    </label>
                    <Input id="city" placeholder="City" required />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="province" className="block text-sm font-medium text-gray-700">
                      Province <span className="text-red-500">*</span>
                    </label>
                    <Input id="province" placeholder="Province" required />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
                      ZIP Code
                    </label>
                    <Input id="zipCode" placeholder="ZIP Code" required />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Contact Information</h2>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="contactName" className="block text-sm font-medium text-gray-700">
                      Contact Person
                    </label>
                    <Input id="contactName" placeholder="Full name" required />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="position" className="block text-sm font-medium text-gray-700">
                      Position
                    </label>
                    <Input id="position" placeholder="Your position" required />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <Input id="email" type="email" placeholder="email@example.com" required />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <Input id="phone" type="tel" placeholder="+63 XXX XXX XXXX" required />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Choose Your Plan</h2>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3 border rounded-md p-4 hover:border-[#007BFF] cursor-pointer">
                    <input type="radio" id="freePlan" name="plan" className="text-[#C8102E]" />
                    <div className="flex-1">
                      <label htmlFor="freePlan" className="block font-medium text-gray-900">
                        🟢 Free Plan
                      </label>
                      <p className="text-sm text-gray-500">₱0/month • 20 products</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 border rounded-md p-4 hover:border-[#007BFF] cursor-pointer bg-gray-50 border-[#007BFF]">
                    <input type="radio" id="basicPlan" name="plan" className="text-[#C8102E]" defaultChecked />
                    <div className="flex-1">
                      <label htmlFor="basicPlan" className="block font-medium text-gray-900">
                        🔵 Basic Plan
                      </label>
                      <p className="text-sm text-gray-500">₱999/month • 100 products</p>
                      <span className="inline-flex bg-[#C8102E] text-white text-xs px-2 py-0.5 rounded-full mt-1">
                        Recommended
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 border rounded-md p-4 hover:border-[#007BFF] cursor-pointer">
                    <input type="radio" id="proPlan" name="plan" className="text-[#C8102E]" />
                    <div className="flex-1">
                      <label htmlFor="proPlan" className="block font-medium text-gray-900">
                        🟣 Pro Plan
                      </label>
                      <p className="text-sm text-gray-500">₱2,499/month • 500 products</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 border rounded-md p-4 hover:border-[#007BFF] cursor-pointer">
                    <input type="radio" id="enterprisePlan" name="plan" className="text-[#C8102E]" />
                    <div className="flex-1">
                      <label htmlFor="enterprisePlan" className="block font-medium text-gray-900">
                        🟡 Enterprise
                      </label>
                      <p className="text-sm text-gray-500">₱4,999/month • Unlimited products</p>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-gray-500">
                  You can upgrade or downgrade your plan at any time from your supplier dashboard.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Account Setup</h2>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                      Username
                    </label>
                    <Input id="username" placeholder="Choose a username" required />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <Input id="password" type="password" placeholder="Create a password" required />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <label htmlFor="storeName" className="block text-sm font-medium text-gray-700">
                      Store Name (as it will appear on PyeSakto.ph)
                    </label>
                    <Input id="storeName" placeholder="Your store name" required />
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox id="terms" required />
                <div className="text-sm">
                  <label htmlFor="terms" className="font-medium text-gray-700">
                    I agree to PyeSakto.ph's
                  </label>
                  <p className="text-gray-500">
                    <Link href="/terms" className="text-[#007BFF] hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-[#007BFF] hover:underline">
                      Privacy Policy
                    </Link>
                  </p>
                </div>
              </div>

              <Button type="submit" className="w-full bg-[#C8102E] hover:bg-[#A50D26] text-white">
                Register as Supplier
              </Button>

              <p className="text-sm text-gray-500 text-center">
                Already have a supplier account?{" "}
                <Link href="/suppliers/login" className="text-[#007BFF] hover:underline">
                  Login here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
