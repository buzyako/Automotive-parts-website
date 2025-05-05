"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ShoppingCart, Minus, Plus, Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface AddToCartButtonProps {
  productId: string
  className?: string
}

export default function AddToCartButton({ productId, className }: AddToCartButtonProps) {
  const [quantity, setQuantity] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value)
    if (!isNaN(value) && value > 0) {
      setQuantity(value)
    } else if (e.target.value === "") {
      setQuantity(1)
    }
  }

  const handleAddToCart = async () => {
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 800))

    toast({
      title: "Added to cart",
      description: `${quantity} item(s) added to your cart`,
    })

    setIsLoading(false)
  }

  const handleBuyNow = async () => {
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 800))

    // In a real app, this would navigate to checkout
    toast({
      title: "Proceeding to checkout",
      description: `${quantity} item(s) ready for checkout`,
    })

    setIsLoading(false)
  }

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="flex items-center">
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={decreaseQuantity}
          disabled={quantity <= 1}
          className="rounded-r-none"
        >
          <Minus className="h-4 w-4" />
        </Button>
        <Input
          type="number"
          min="1"
          value={quantity}
          onChange={handleQuantityChange}
          className="w-16 text-center rounded-none border-x-0"
        />
        <Button type="button" variant="outline" size="icon" onClick={increaseQuantity} className="rounded-l-none">
          <Plus className="h-4 w-4" />
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Button onClick={handleAddToCart} disabled={isLoading} variant="outline" className="w-full">
          {isLoading ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <ShoppingCart className="h-4 w-4 mr-2" />}
          Add to Cart
        </Button>
        <Button onClick={handleBuyNow} disabled={isLoading} className="w-full">
          {isLoading ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : "Buy Now"}
        </Button>
      </div>
    </div>
  )
}
