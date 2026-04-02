import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const contactReasons = [
  "General Inquiry",
  "Technical Support",
  "Partnership",
  "Feedback",
  "Other",
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-gray-500 text-lg max-w-md mx-auto">
            Have a question or want to work together? We would love to hear
            from you.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-md p-8">
          <form className="flex flex-col gap-6">

            {/* Name row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                id="firstName"
                label="First Name"
                placeholder="Alice"
                required
              />
              <Input
                id="lastName"
                label="Last Name"
                placeholder="Chen"
                required
              />
            </div>

            {/* Email */}
            <Input
              id="email"
              label="Email Address"
              type="email"
              placeholder="alice@example.com"
              required
            />

            {/* Reason */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="reason"
                className="text-sm font-medium text-gray-700"
              >
                Reason for Contact
                <span className="text-red-500 ml-1">*</span>
              </label>
              <select
                id="reason"
                name="reason"
                required
                className="border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition bg-white"
              >
                <option value="">Select a reason...</option>
                {contactReasons.map((reason) => (
                  <option key={reason} value={reason}>
                    {reason}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="message"
                className="text-sm font-medium text-gray-700"
              >
                Message
                <span className="text-red-500 ml-1">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Tell us what's on your mind..."
                className="border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition resize-none"
              />
            </div>

            {/* Submit */}
            <div className="flex justify-end">
              <Button type="submit" variant="primary">
                Send Message →
              </Button>
            </div>

          </form>
        </div>

        {/* Back link */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
          >
            ← Back to Home
          </Link>
        </div>

      </div>
    </main>
  );
}