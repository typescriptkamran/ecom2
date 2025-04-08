import Link from "next/link";
import {
  Twitter,
  Instagram,
  Facebook,
  CreditCard,
  Truck,
  ShieldCheck,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 py-12">
        {/* Payment and Shipping Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 pb-12 border-b border-gray-200">
          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="p-3 bg-orange-100 rounded-full text-orange-600">
              <Truck className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Free Shipping</h3>
              <p className="text-gray-600 text-sm">On orders over $50</p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="p-3 bg-orange-100 rounded-full text-orange-600">
              <CreditCard className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Secure Payments</h3>
              <p className="text-gray-600 text-sm">
                Including Cash on Delivery
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="p-3 bg-orange-100 rounded-full text-orange-600">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">30-Day Returns</h3>
              <p className="text-gray-600 text-sm">Hassle-free return policy</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Shop Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#featured"
                  className="text-gray-600 hover:text-orange-600"
                >
                  Featured Products
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="text-gray-600 hover:text-orange-600"
                >
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="text-gray-600 hover:text-orange-600"
                >
                  Best Sellers
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="text-gray-600 hover:text-orange-600"
                >
                  Special Offers
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">
              Customer Service
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/contact-us"
                  className="text-gray-600 hover:text-orange-600"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-orange-600">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-orange-600">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-orange-600">
                  Returns & Exchanges
                </Link>
              </li>
            </ul>
          </div>

          {/* Account Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Your Account</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/sign-in"
                  className="text-gray-600 hover:text-orange-600"
                >
                  Sign In
                </Link>
              </li>
              <li>
                <Link
                  href="/sign-up"
                  className="text-gray-600 hover:text-orange-600"
                >
                  Register
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="text-gray-600 hover:text-orange-600"
                >
                  Order History
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="text-gray-600 hover:text-orange-600"
                >
                  Track Orders
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-600 hover:text-orange-600"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-gray-600 hover:text-orange-600"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-orange-600">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-orange-600">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
          <div className="text-gray-600 mb-4 md:mb-0">
            © {currentYear} Bloom & Basket Flower Shop. All rights reserved.
          </div>

          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Facebook</span>
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Instagram</span>
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
