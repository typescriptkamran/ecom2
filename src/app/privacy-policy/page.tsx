import { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Bloom & Basket",
  description:
    "Learn about how Bloom & Basket collects, uses, and protects your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

        <div className="prose max-w-none">
          <p className="mb-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
          <p className="mb-4">
            At Bloom & Basket, we respect your privacy and are committed to
            protecting your personal data. This privacy policy will inform you
            about how we look after your personal data when you visit our
            website and tell you about your privacy rights and how the law
            protects you.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            2. The Data We Collect About You
          </h2>
          <p className="mb-4">
            Personal data, or personal information, means any information about
            an individual from which that person can be identified. We may
            collect, use, store and transfer different kinds of personal data
            about you which we have grouped together as follows:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              Identity Data includes first name, last name, username or similar
              identifier.
            </li>
            <li>
              Contact Data includes billing address, delivery address, email
              address and telephone numbers.
            </li>
            <li>Financial Data includes payment card details.</li>
            <li>
              Transaction Data includes details about payments to and from you
              and other details of products you have purchased from us.
            </li>
            <li>
              Technical Data includes internet protocol (IP) address, your login
              data, browser type and version.
            </li>
            <li>
              Profile Data includes your username and password, purchases or
              orders made by you, your preferences.
            </li>
            <li>
              Usage Data includes information about how you use our website and
              products.
            </li>
            <li>
              Marketing and Communications Data includes your preferences in
              receiving marketing from us and our third parties and your
              communication preferences.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            3. How We Use Your Personal Data
          </h2>
          <p className="mb-4">
            We will only use your personal data when the law allows us to. Most
            commonly, we will use your personal data in the following
            circumstances:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              Where we need to perform the contract we are about to enter into
              or have entered into with you.
            </li>
            <li>
              Where it is necessary for our legitimate interests (or those of a
              third party) and your interests and fundamental rights do not
              override those interests.
            </li>
            <li>
              Where we need to comply with a legal or regulatory obligation.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this privacy policy or our privacy
            practices, please contact us at:
          </p>
          <p className="mb-4">
            Email: privacy@bloomandbasket.com
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
