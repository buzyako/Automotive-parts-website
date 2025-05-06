"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Image from "next/image"

interface Product {
  id: string
  name: string
  price: number
  stock: number
  images: string[]
}

interface AddToCartButtonProps {
  product: Product
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const [quantity, setQuantity] = useState(1)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1)
    }
  }

  const handleAddToCart = () => {
    // In a real app, this would add the product to the cart
    // For now, we'll just show a dialog
    setIsDialogOpen(true)
  }

  return (
    <div>
      <div className="flex items-center gap-2">
        <div className="flex items-center border border-gray-300 rounded-md">
          <button
            onClick={decreaseQuantity}
            className="px-2 py-1 text-gray-600 hover:text-red-600 disabled:opacity-50"
            disabled={quantity <= 1}
          >
            -
          </button>
          <span className="px-2 py-1 text-center w-10 text-sm">{quantity}</span>
          <button
            onClick={increaseQuantity}
            className="px-2 py-1 text-gray-600 hover:text-red-600 disabled:opacity-50"
            disabled={quantity >= product.stock}
          >
            +
          </button>
        </div>
        <Button onClick={handleAddToCart} className="bg-red-600 hover:bg-red-700 text-white px-6 py-1 h-auto text-sm">
          Add to Cart
        </Button>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle>Added to Cart</DialogTitle>
          </DialogHeader>
          <div className="flex items-center space-x-3 mt-2">
            <div className="relative h-14 w-14 overflow-hidden rounded-md">
              <Image src={product.images[0] || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
            </div>
            <div>
              <p className="font-medium text-sm">{product.name}</p>
              <p className="text-xs text-gray-500">Quantity: {quantity}</p>
              <p className="text-sm font-medium">₱{(product.price * quantity).toLocaleString()}</p>
            </div>
          </div>
          <div className="flex justify-end space-x-2 mt-4">
            <Button variant="outline" onClick={() => setIsDialogOpen(false)} className="h-8 text-xs">
              Continue Shopping
            </Button>
            <Button asChild className="bg-red-600 hover:bg-red-700 h-8 text-xs">
              <a href="/cart">View Cart</a>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
