import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-md">
        Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild className="bg-red-600 hover:bg-red-700">
          <Link href="/">Return to Home</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/categories">Browse Categories</Link>
        </Button>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-xl font-semibold mb-4">Popular Categories</h2>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/categories/headlights" className="text-red-600 hover:underline">
            Headlights
          </Link>
          <Link href="/categories/brakes" className="text-red-600 hover:underline">
            Brakes
          </Link>
          <Link href="/categories/engine" className="text-red-600 hover:underline">
            Engine Parts
          </Link>
          <Link href="/categories/body" className="text-red-600 hover:underline">
            Body Parts
          </Link>
          <Link href="/categories/interior" className="text-red-600 hover:underline">
            Interior
          </Link>
        </div>
      </div>
    </div>
  )
}
