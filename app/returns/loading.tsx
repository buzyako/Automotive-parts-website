import { Skeleton } from "@/components/ui/skeleton"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ReturnsLoading() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-12 text-center">
          <Skeleton className="h-10 w-64 mx-auto mb-4" />
          <Skeleton className="h-4 w-full max-w-2xl mx-auto mb-2" />
          <Skeleton className="h-4 w-full max-w-xl mx-auto" />
        </div>

        {/* Hero section skeleton */}
        <div className="bg-gray-50 rounded-xl p-6 mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <Skeleton className="h-8 w-48 mb-6" />
              <div className="space-y-4">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
              <Skeleton className="h-10 w-40 mt-6" />
            </div>
            <div className="flex justify-center">
              <Skeleton className="h-64 w-64 rounded-lg" />
            </div>
          </div>
        </div>

        {/* Return Process Steps skeleton */}
        <section className="mb-12">
          <Skeleton className="h-8 w-48 mx-auto mb-6" />
          <div className="grid md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="border rounded-lg p-6">
                <Skeleton className="h-12 w-12 rounded-full mb-4" />
                <Skeleton className="h-6 w-36 mb-3" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            ))}
          </div>
        </section>

        {/* Return Eligibility skeleton */}
        <section className="mb-12 bg-gray-50 p-6 rounded-xl">
          <Skeleton className="h-8 w-48 mb-6" />
          <div className="grid md:grid-cols-2 gap-8">
            {[...Array(2)].map((_, i) => (
              <div key={i}>
                <Skeleton className="h-6 w-40 mb-4" />
                <div className="space-y-3">
                  {[...Array(4)].map((_, j) => (
                    <div key={j} className="flex items-start">
                      <Skeleton className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                      <Skeleton className="h-4 w-full" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ skeleton */}
        <section className="mb-12">
          <Skeleton className="h-8 w-64 mx-auto mb-6" />
          <div className="space-y-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="border rounded-lg p-4">
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-full" />
              </div>
            ))}
          </div>
        </section>

        {/* CTA skeleton */}
        <section className="text-center mb-12">
          <Skeleton className="h-8 w-64 mx-auto mb-4" />
          <Skeleton className="h-4 w-full max-w-xl mx-auto mb-2" />
          <Skeleton className="h-4 w-full max-w-lg mx-auto mb-6" />
          <Skeleton className="h-12 w-48 mx-auto" />
        </section>
      </main>
      <Footer />
    </>
  )
}
