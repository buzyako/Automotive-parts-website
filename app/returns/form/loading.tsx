import { Skeleton } from "@/components/ui/skeleton"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ReturnFormLoading() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <Skeleton className="h-10 w-64 mx-auto mb-4" />
          <Skeleton className="h-4 w-full max-w-2xl mx-auto mb-2" />
          <Skeleton className="h-4 w-full max-w-xl mx-auto" />
        </div>

        <div className="w-full max-w-md mx-auto border rounded-lg p-6">
          <Skeleton className="h-8 w-48 mb-2" />
          <Skeleton className="h-4 w-64 mb-6" />

          <div className="space-y-6">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="space-y-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-10 w-full" />
              </div>
            ))}

            <Skeleton className="h-12 w-full mt-4" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
