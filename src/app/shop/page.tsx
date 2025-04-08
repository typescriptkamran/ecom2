import { getProducts } from "@/lib/db";
import ProductCardWrapper from "@/components/product-card-wrapper";
import { Suspense } from "react";
import { ShoppingBag } from "lucide-react";

export const metadata = {
  title: "Shop | Bloom & Basket",
  description: "Browse our collection of beautiful flowers and arrangements",
};

async function ProductGrid() {
  const products = await getProducts();

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No products found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCardWrapper key={product.id} product={product} />
      ))}
    </div>
  );
}

export default function ShopPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-6">
        <header>
          <div className="flex items-center gap-2 mb-2">
            <nav className="flex text-sm text-muted-foreground">
              <ol className="flex items-center gap-1">
                <li>
                  <a href="/" className="hover:text-primary transition-colors">
                    Home
                  </a>
                </li>
                <li>/</li>
                <li className="text-foreground font-medium">Shop</li>
              </ol>
            </nav>
          </div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <ShoppingBag className="h-8 w-8" />
            Shop
          </h1>
          <p className="text-muted-foreground mt-2">
            Browse our collection of beautiful flowers and arrangements
          </p>
        </header>

        <Suspense
          fallback={
            <div className="py-12 text-center">Loading products...</div>
          }
        >
          <ProductGrid />
        </Suspense>
      </div>
    </main>
  );
}
