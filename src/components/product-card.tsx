"use client";

import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

export default function ProductCard({
  product,
  onAddToCart,
}: ProductCardProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleAddToCart = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      if (onAddToCart) {
        onAddToCart(product);
      }
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="bg-card rounded-lg overflow-hidden border shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="relative h-48 w-full bg-muted">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1 line-clamp-1">
          {product.name}
        </h3>
        <p className="text-muted-foreground text-sm mb-2 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-3">
          <span className="text-primary font-bold">
            ${product.price.toFixed(2)}
          </span>
          <Button
            onClick={handleAddToCart}
            disabled={isLoading || product.stock <= 0}
            size="sm"
          >
            {isLoading ? (
              <span className="animate-pulse">Adding...</span>
            ) : product.stock <= 0 ? (
              "Out of Stock"
            ) : (
              <>
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </>
            )}
          </Button>
        </div>
        <div className="mt-2 text-xs text-muted-foreground">
          {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
        </div>
      </div>
    </div>
  );
}
