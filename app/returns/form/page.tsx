import Header from "@/components/header"
import Footer from "@/components/footer"
import { ReturnForm } from "@/components/return-form"

export default function ReturnFormPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-4">Return Request Form</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Fill out the form below to initiate your return. We'll review your request and get back to you within 24-48
            hours.
          </p>
        </div>

        <ReturnForm />
      </main>
      <Footer />
    </>
  )
}
