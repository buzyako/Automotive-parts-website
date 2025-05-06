"use client"

import { useState } from "react"
import Image from "next/image"

interface ProductImageGalleryProps {
  images: string[]
  productName: string
}

export default function ProductImageGallery({ images, productName }: ProductImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <div className="space-y-2">
      <div className="relative aspect-square overflow-hidden rounded-md border border-gray-200">
        <Image
          src={images[selectedImage] || "/placeholder.svg"}
          alt={`${productName} - Image ${selectedImage + 1}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>

      {images.length > 1 && (
        <div className="grid grid-cols-5 gap-1">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`relative aspect-square overflow-hidden rounded-sm border ${
                selectedImage === index ? "border-red-600 ring-1 ring-red-600" : "border-gray-200"
              }`}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`${productName} - Thumbnail ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 25vw, 10vw"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
