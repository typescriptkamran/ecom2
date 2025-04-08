import Link from "next/link";
import { ArrowRight, ShoppingBag } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background image */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white to-white/80" />

      <div className="relative py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            {/* Text content */}
            <div className="md:w-1/2 md:pr-12 text-left mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                Spring Joy & Birthdays
                <br />
                <span>We Make People Smile</span>
              </h1>

              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                Beautiful flowers for every occasion, delivered fresh to your
                doorstep.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/dashboard"
                  className="inline-flex items-center px-6 py-3 text-white bg-orange-600 rounded hover:bg-orange-700 transition-colors text-base font-medium"
                >
                  Shop Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Hero image */}
            <div className="md:w-1/2">
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1596438459194-f275f413d6ff?w=800&q=80"
                  alt="Premium spring flower arrangement with seasonal blooms in vibrant colors"
                  className="w-full h-auto object-cover rounded-lg"
                  loading="eager"
                  width={800}
                  height={600}
                />
              </div>
            </div>
          </div>

          {/* Categories section */}
          <div className="mt-16 grid grid-cols-3 gap-4 text-center">
            <div className="bg-orange-100/50 rounded-lg p-4">
              <h3 className="font-medium text-lg mb-2">Our Favorites</h3>
              <Link
                href="/dashboard"
                className="text-orange-600 hover:underline inline-flex items-center"
              >
                Shop Now <ArrowRight className="ml-1 w-3 h-3" />
              </Link>
            </div>
            <div className="bg-orange-100/50 rounded-lg p-4">
              <h3 className="font-medium text-lg mb-2">Gift Baskets</h3>
              <Link
                href="/dashboard"
                className="text-orange-600 hover:underline inline-flex items-center"
              >
                Shop Now <ArrowRight className="ml-1 w-3 h-3" />
              </Link>
            </div>
            <div className="bg-orange-100/50 rounded-lg p-4">
              <h3 className="font-medium text-lg mb-2">Personalized Gifts</h3>
              <Link
                href="/dashboard"
                className="text-orange-600 hover:underline inline-flex items-center"
              >
                Shop Now <ArrowRight className="ml-1 w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
