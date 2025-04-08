"use client";

import { Product } from "@/types/product";
import ProductCard from "./product-card";
import { useState } from "react";

interface ProductCardWrapperProps {
  product: Product;
}

export default function ProductCardWrapper({
  product,
}: ProductCardWrapperProps) {
  const [cart, setCart] = useState<Product[]>([]);

  const handleAddToCart = (product: Product) => {
    setCart((prev) => [...prev, product]);
    // You can add additional logic here like showing a toast notification
  };

  return <ProductCard product={product} onAddToCart={handleAddToCart} />;
}
