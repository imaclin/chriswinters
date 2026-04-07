import { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { MapPin, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Christopher S. Winters - 26550 Primrose Ln, Westlake, OH. Call 1-877-221-2224 or send a message online.",
};

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative bg-navy-dark py-16 overflow-hidden">
        {/* Background fabric image */}
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/fabric.jpg"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container text-center relative z-10">
          <span className="eyebrow">Reach Out</span>
          <h1 className="font-serif text-4xl font-bold text-white">Contact Us</h1>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <span className="eyebrow">Get in Touch</span>
              <h2 className="font-serif text-3xl font-bold text-navy mb-4">
                Our Location
              </h2>
              <div className="divider" />
              <p className="text-text-body mb-8">
                Don&apos;t navigate the legal system alone. Reach out today and let
                us help you understand your options.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-navy" />
                  </div>
                  <div>
                    <div className="text-sm text-mid-gray mb-1">Address</div>
                    <a
                      href="https://maps.google.com/?q=26550+Primrose+Ln,+Westlake,+OH+44145"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-navy hover:text-gold transition-colors"
                    >
                      26550 Primrose Ln
                      <br />
                      Westlake, OH 44145
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-navy" />
                  </div>
                  <div>
                    <div className="text-sm text-mid-gray mb-1">Phone</div>
                    <a
                      href="tel:18772212224"
                      className="text-navy hover:text-gold transition-colors block"
                    >
                      Toll Free: 1-877-221-2224
                    </a>
                    <a
                      href="tel:2169249293"
                      className="text-navy hover:text-gold transition-colors"
                    >
                      Cell: 216-924-9293
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-navy" />
                  </div>
                  <div>
                    <div className="text-sm text-mid-gray mb-1">Email</div>
                    <a
                      href="mailto:chris@cswinterslaw.com"
                      className="text-navy hover:text-gold transition-colors"
                    >
                      chris@cswinterslaw.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8 rounded overflow-hidden border border-light-gray">
                <iframe
                  title="Office Location"
                  src="https://maps.google.com/maps?q=26550+Primrose+Ln,+Westlake,+OH+44145&output=embed"
                  width="100%"
                  height="300"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="border-0"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <span className="eyebrow">Send a Message</span>
              <h2 className="font-serif text-3xl font-bold text-navy mb-4">
                Where Do I Go?
              </h2>
              <div className="divider" />

              <form className="bg-white p-6 rounded-lg shadow-sm border border-light-gray space-y-4">
                <div>
                  <label className="block text-sm font-medium text-navy mb-1">
                    Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-light-gray rounded focus:outline-none focus:ring-2 focus:ring-gold/50"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy mb-1">
                    Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-light-gray rounded focus:outline-none focus:ring-2 focus:ring-gold/50"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy mb-1">
                    Subject <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-light-gray rounded focus:outline-none focus:ring-2 focus:ring-gold/50"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy mb-1">
                    Message <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-light-gray rounded focus:outline-none focus:ring-2 focus:ring-gold/50 resize-none"
                    placeholder="Briefly describe your situation…"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold text-navy font-medium py-3 rounded hover:bg-gold-light transition-colors"
                >
                  Send Message
                </button>
              </form>

              <p className="text-sm text-mid-gray mt-4 leading-relaxed">
                Your message is confidential. Submitting this form does not
                create an attorney-client relationship. For urgent matters,
                please call{" "}
                <a href="tel:18772212224" className="text-navy font-semibold">
                  1-877-221-2224
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
