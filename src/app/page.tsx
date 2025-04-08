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
  Heart,
  Gift,
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
      name: "Pure Heart",
      price: "$49.99",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1591886960571-74d43a9d4166?w=500&q=80",
    },
    {
      id: 2,
      name: "Elegant Beauty",
      price: "$39.99",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=500&q=80",
    },
    {
      id: 3,
      name: "Subtle Freshness",
      price: "$45.99",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1567696153798-9111f9cd3d0d?w=500&q=80",
    },
    {
      id: 4,
      name: "Colours for Mom",
      price: "$59.99",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1599789197514-47270cd526b4?w=500&q=80",
    },
    {
      id: 5,
      name: "Pink Bloom",
      price: "$42.99",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1587052755556-57795bd5b129?w=500&q=80",
    },
    {
      id: 6,
      name: "Rainbow",
      price: "$55.99",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=500&q=80",
    },
    {
      id: 7,
      name: "Pure Love for All",
      price: "$52.99",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1589244159943-460088ed5c92?w=500&q=80",
    },
    {
      id: 8,
      name: "Peach Flavour",
      price: "$37.99",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1557428894-56bcc97113fe?w=500&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />

      {/* Our Favorites Section */}
      <section id="featured" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-left mb-8">
            <h2 className="text-2xl font-bold mb-4">Our Favorites</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.slice(0, 4).map((product) => (
              <div
                key={product.id}
                className="bg-white rounded border border-gray-200 transition-all group overflow-hidden flex flex-col"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-3 flex flex-col flex-grow">
                  <h3 className="font-medium text-base mb-1">{product.name}</h3>
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-orange-600 font-medium mt-auto">
                    {product.price}
                  </p>
                </div>
                <div className="px-3 pb-3">
                  <button className="w-full py-2 px-4 border border-gray-300 rounded text-sm hover:bg-gray-50 transition-colors">
                    Add to basket
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Gift Baskets Section */}
          <div className="text-left mt-16 mb-8">
            <h2 className="text-2xl font-bold mb-4">Gift Baskets</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.slice(4, 8).map((product) => (
              <div
                key={product.id}
                className="bg-white rounded border border-gray-200 transition-all group overflow-hidden flex flex-col"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-3 flex flex-col flex-grow">
                  <h3 className="font-medium text-base mb-1">{product.name}</h3>
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-orange-600 font-medium mt-auto">
                    {product.price}
                  </p>
                </div>
                <div className="px-3 pb-3">
                  <button className="w-full py-2 px-4 border border-gray-300 rounded text-sm hover:bg-gray-50 transition-colors">
                    Add to basket
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/dashboard"
              className="inline-flex items-center px-6 py-3 text-white bg-orange-600 rounded hover:bg-orange-700 transition-colors"
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

      {/* Premium Collection Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-black text-white p-8 flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-4">
                Our Premium Collection
              </h2>
              <p className="text-gray-300 mb-6">
                Special gifts for that special someone
              </p>
              <a
                href="/dashboard"
                className="text-white border border-white rounded px-4 py-2 inline-block text-center hover:bg-white hover:text-black transition-colors"
              >
                Shop Now
              </a>
            </div>

            {[
              {
                name: "Endless Passion",
                price: "$99.99",
                image:
                  "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=500&q=80",
              },
              {
                name: "Floral Prestige",
                price: "$129.99",
                image:
                  "https://images.unsplash.com/photo-1591886960571-74d43a9d4166?w=500&q=80",
              },
              {
                name: "Embrace of Love",
                price: "$89.99",
                image:
                  "https://images.unsplash.com/photo-1589244159943-460088ed5c92?w=500&q=80",
              },
            ].map((product, index) => (
              <div
                key={index}
                className="bg-white rounded border border-gray-200 transition-all group overflow-hidden flex flex-col"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-3 flex flex-col flex-grow">
                  <h3 className="font-medium text-base mb-1">{product.name}</h3>
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-orange-600 font-medium mt-auto">
                    {product.price}
                  </p>
                </div>
                <div className="px-3 pb-3">
                  <button className="w-full py-2 px-4 border border-gray-300 rounded text-sm hover:bg-gray-50 transition-colors">
                    Add to basket
                  </button>
                </div>
              </div>
            ))}
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
