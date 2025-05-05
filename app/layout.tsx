import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { VehicleProvider } from "@/lib/vehicle-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PyeSakto.ph - Auto Parts for Philippine Vehicles",
  description: "Find the perfect auto parts for your vehicle in the Philippines",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <VehicleProvider>{children}</VehicleProvider>
      </body>
    </html>
  )
}
