import { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Terms of Service | Bloom & Basket",
  description:
    "Read the terms and conditions that govern your use of Bloom & Basket's website and services.",
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>

        <div className="prose max-w-none">
          <p className="mb-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
          <p className="mb-4">
            Welcome to Bloom & Basket. These terms and conditions outline the
            rules and regulations for the use of our website.
          </p>
          <p className="mb-4">
            By accessing this website, we assume you accept these terms and
            conditions in full. Do not continue to use Bloom & Basket's website
            if you do not accept all of the terms and conditions stated on this
            page.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            2. License to Use Website
          </h2>
          <p className="mb-4">
            Unless otherwise stated, Bloom & Basket and/or its licensors own the
            intellectual property rights for all material on this website. All
            intellectual property rights are reserved. You may view and/or print
            pages from the website for your own personal use subject to
            restrictions set in these terms and conditions.
          </p>
          <p className="mb-4">You must not:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Republish material from this website</li>
            <li>Sell, rent or sub-license material from this website</li>
            <li>Reproduce, duplicate or copy material from this website</li>
            <li>
              Redistribute content from Bloom & Basket (unless content is
              specifically made for redistribution)
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            3. Product Purchases and Delivery
          </h2>
          <p className="mb-4">
            When you place an order through our website, you are offering to
            purchase a product on and subject to the following terms and
            conditions. All orders are subject to availability and confirmation
            of the order price.
          </p>
          <p className="mb-4">
            Delivery times may vary according to availability and any guarantees
            or representations made as to delivery times are limited to delivery
            within the country in which the flowers are delivered and are
            subject to any delays resulting from postal delays or force majeure
            for which we will not be responsible.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Governing Law</h2>
          <p className="mb-4">
            These terms and conditions are governed by and construed in
            accordance with the laws of the United States and you irrevocably
            submit to the exclusive jurisdiction of the courts in that location.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about these Terms of Service, please
            contact us at:
          </p>
          <p className="mb-4">
            Email: legal@bloomandbasket.com
            <br />
            Phone: +1 (555) 123-4567
            <br />
            Address: 123 Flower Street, Garden City, NY 10001
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
