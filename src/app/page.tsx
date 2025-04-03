import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import {
  ArrowUpRight,
  ShoppingBag,
  Search,
  CreditCard,
  Truck,
  Package,
  ShieldCheck,
  Clock3,
  Filter,
} from "lucide-react";
import { createClient } from "../../supabase/server";
import Image from "next/image";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Sample featured products
  const featuredProducts = [
    {
      id: 1,
      name: "Premium Headphones",
      price: "$129.99",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "$199.99",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
    },
    {
      id: 3,
      name: "Wireless Earbuds",
      price: "$89.99",
      image:
        "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500&q=80",
    },
    {
      id: 4,
      name: "Laptop Backpack",
      price: "$59.99",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <Hero />

      {/* Featured Products Section */}
      <section id="featured" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our handpicked selection of premium products with
              exceptional quality and value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all group overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all flex items-center justify-center">
                    <button className="bg-white text-blue-600 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0">
                      <ShoppingBag className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                  <p className="text-blue-600 font-medium">{product.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/dashboard"
              className="inline-flex items-center px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              View All Products
              <ArrowUpRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Shop With Confidence</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform offers a seamless shopping experience with features
              designed for your convenience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Search className="w-6 h-6" />,
                title: "Smart Search",
                description:
                  "Find products quickly with advanced filtering options",
              },
              {
                icon: <ShoppingBag className="w-6 h-6" />,
                title: "Easy Cart Management",
                description:
                  "Add, update, and remove items with real-time updates",
              },
              {
                icon: <CreditCard className="w-6 h-6" />,
                title: "Secure Checkout",
                description:
                  "Multiple payment options including Cash on Delivery",
              },
              {
                icon: <Package className="w-6 h-6" />,
                title: "Order Tracking",
                description: "Monitor your orders from purchase to delivery",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-blue-100">Products Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5,000+</div>
              <div className="text-blue-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Customer Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Shopping with us is simple, secure, and satisfying.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Filter className="w-10 h-10" />,
                title: "Browse & Filter",
                description:
                  "Explore our extensive catalog with powerful filtering options to find exactly what you need.",
              },
              {
                icon: <ShoppingBag className="w-10 h-10" />,
                title: "Add to Cart",
                description:
                  "Select your items, customize options if available, and add them to your cart with one click.",
              },
              {
                icon: <Truck className="w-10 h-10" />,
                title: "Checkout & Delivery",
                description:
                  "Complete your purchase with our secure checkout process and track your delivery in real-time.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Shopping?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who enjoy our seamless
            shopping experience.
          </p>
          <a
            href="/dashboard"
            className="inline-flex items-center px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Shop Now
            <ShoppingBag className="ml-2 w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
