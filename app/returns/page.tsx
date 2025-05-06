import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Package, RefreshCw, Clock, CheckCircle, AlertCircle, HelpCircle } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ReturnsPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold mb-4">Returns & Exchanges</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We want you to be completely satisfied with your purchase. If you're not, we've made our return process
            simple and hassle-free.
          </p>
        </div>

        {/* Hero section with return policy highlights */}
        <div className="bg-gradient-to-r from-blue-50 to-gray-50 rounded-xl p-6 mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Return Policy</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>30-day return window for most items</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Items must be in original condition with packaging</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Free returns for defective items</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Exchanges available for incorrect fitment</span>
                </li>
              </ul>
              <Button className="mt-6">
                Start Return Process <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?key=4gc25"
                alt="Return Process Illustration"
                width={300}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Return Process Steps */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Return Process</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="rounded-full bg-blue-100 w-12 h-12 flex items-center justify-center mb-4">
                  <Package className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">1. Request Return</h3>
                <p className="text-gray-600">
                  Contact our customer service team or fill out the return form online. You'll need your order number
                  and the reason for return.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="rounded-full bg-blue-100 w-12 h-12 flex items-center justify-center mb-4">
                  <RefreshCw className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">2. Package Item</h3>
                <p className="text-gray-600">
                  Carefully pack the item in its original packaging with all accessories. Include the return form or
                  order number inside the package.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="rounded-full bg-blue-100 w-12 h-12 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">3. Ship & Refund</h3>
                <p className="text-gray-600">
                  Ship the item using the provided return label or your preferred carrier. Once received, we'll process
                  your refund within 3-5 business days.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Return Eligibility */}
        <section className="mb-12 bg-gray-50 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-6">Return Eligibility</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Eligible for Returns</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Unopened items in original packaging</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Defective or damaged products (with photos)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Incorrect items shipped</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Items that don't fit your vehicle (with proof of incompatibility)</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Not Eligible for Returns</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Used or installed parts</span>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Items damaged due to improper installation</span>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Electrical components with broken seals</span>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Special order or custom-made items</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Refund Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Refund Information</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Refund Methods</h3>
              <p className="mb-4">Refunds will be issued to the original payment method used for the purchase:</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Credit/debit card refunds: 3-5 business days</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Bank transfers: 5-7 business days</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Store credit: Immediate</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Refund Deductions</h3>
              <p className="mb-4">The following may be deducted from your refund amount:</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <AlertCircle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0" />
                  <span>Return shipping costs (except for defective items)</span>
                </li>
                <li className="flex items-center">
                  <AlertCircle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0" />
                  <span>Restocking fee (15% for non-defective returns)</span>
                </li>
                <li className="flex items-center">
                  <AlertCircle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0" />
                  <span>Damage fees for items returned in poor condition</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Exchange Process */}
        <section className="mb-12 bg-blue-50 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-6">Exchange Process</h2>
          <p className="mb-6">
            If you'd prefer to exchange your item rather than return it for a refund, follow these steps:
          </p>

          <ol className="space-y-4">
            <li className="flex">
              <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                1
              </span>
              <div>
                <h4 className="font-semibold">Contact Customer Service</h4>
                <p className="text-gray-600">Reach out to our team via phone, email, or chat to request an exchange.</p>
              </div>
            </li>

            <li className="flex">
              <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                2
              </span>
              <div>
                <h4 className="font-semibold">Provide Details</h4>
                <p className="text-gray-600">
                  Explain why you want to exchange the item and specify the replacement you'd like.
                </p>
              </div>
            </li>

            <li className="flex">
              <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                3
              </span>
              <div>
                <h4 className="font-semibold">Return Original Item</h4>
                <p className="text-gray-600">Ship the original item back using the provided return label.</p>
              </div>
            </li>

            <li className="flex">
              <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                4
              </span>
              <div>
                <h4 className="font-semibold">Receive Replacement</h4>
                <p className="text-gray-600">Once we receive your return, we'll ship out the replacement item.</p>
              </div>
            </li>
          </ol>

          <div className="mt-6 p-4 bg-white rounded-lg border border-blue-100">
            <p className="flex items-start">
              <HelpCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-sm">
                <strong>Note:</strong> If the replacement item costs more than your original purchase, you'll need to
                pay the difference. If it costs less, we'll refund the difference.
              </span>
            </p>
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How long do I have to return an item?</AccordionTrigger>
              <AccordionContent>
                Most items can be returned within 30 days of delivery. However, some categories may have different
                return windows. Electronic components typically have a 14-day return window, while special order items
                may not be returnable. Check your product's specific return policy on its detail page.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Do I have to pay for return shipping?</AccordionTrigger>
              <AccordionContent>
                For standard returns, customers are responsible for return shipping costs. However, if you received a
                defective item or if we shipped the wrong product, we'll provide a prepaid return label at no cost to
                you. Contact our customer service team to request a return label.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>What is the restocking fee?</AccordionTrigger>
              <AccordionContent>
                A 15% restocking fee may apply to non-defective returns. This fee helps cover the costs of inspection,
                repackaging, and inventory management. The restocking fee is waived for defective items, incorrect
                shipments, or if you're exchanging for another item of equal or greater value.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Can I return an item if I installed it?</AccordionTrigger>
              <AccordionContent>
                Generally, items that have been installed cannot be returned unless they're defective. If you believe
                you received a defective part, please contact our technical support team before removing the installed
                part. They may request photos or videos to verify the defect before authorizing a return.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>How do I return an item that doesn't fit my vehicle?</AccordionTrigger>
              <AccordionContent>
                If an item doesn't fit your vehicle despite being listed as compatible, you can return it for a full
                refund or exchange. You'll need to provide documentation showing the incompatibility, such as photos or
                a mechanic's statement. Contact our customer service team to initiate this type of return.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>When will I receive my refund?</AccordionTrigger>
              <AccordionContent>
                Once we receive and inspect your return, we'll process your refund within 3-5 business days. The time it
                takes for the refund to appear in your account depends on your payment method: credit/debit cards
                typically take 3-5 business days, while bank transfers may take 5-7 business days. Store credit is
                applied immediately.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Contact Information */}
        <section className="mb-12 bg-gray-50 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-6 text-center">Need Help With Your Return?</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="bg-white p-4 rounded-lg shadow-sm mb-3 mx-auto w-12 h-12 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-gray-600">returns@pyesakto.ph</p>
              <p className="text-gray-600 text-sm">Response within 24 hours</p>
            </div>

            <div>
              <div className="bg-white p-4 rounded-lg shadow-sm mb-3 mx-auto w-12 h-12 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600">(02) 8123-4567</p>
              <p className="text-gray-600 text-sm">Mon-Fri, 9am-6pm</p>
            </div>

            <div>
              <div className="bg-white p-4 rounded-lg shadow-sm mb-3 mx-auto w-12 h-12 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Live Chat</h3>
              <p className="text-gray-600">Chat with our team</p>
              <p className="text-gray-600 text-sm">Available 24/7</p>
            </div>
          </div>
        </section>

        {/* Return Form CTA */}
        <section className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Return?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Fill out our online return form to get the process started. You'll need your order number and product
            information.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Start Return Process
          </Button>
        </section>
      </main>
      <Footer />
    </>
  )
}
