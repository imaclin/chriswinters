import { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { MapPin, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Christopher S. Winters - 600-3 Dover Center Rd, Bay Village, OH. Call 1-877-221-2224 or send a message online.",
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
          <div className="max-w-5xl mx-auto">
            {/* Contact Info */}
            <div className="text-center mb-12">
              <span className="eyebrow">Get in Touch</span>
              <h2 className="font-serif text-3xl font-bold text-navy mb-4">
                Christopher S. Winters
              </h2>
              <div className="divider mx-auto" />
              <p className="text-text-body mt-4">
                Don&apos;t navigate the legal system alone. Reach out today and let
                us help you understand your options.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {/* Address Card */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-light-gray text-center">
                <div className="w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-navy" />
                </div>
                <div className="text-sm text-mid-gray mb-2">Address</div>
                <a
                  href="https://maps.google.com/?q=600-3+Dover+Center+Rd,+Bay+Village,+OH+44140"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy hover:text-gold transition-colors font-medium"
                >
                  600-3 Dover Center Rd
                  <br />
                  Bay Village, OH 44140
                </a>
              </div>

              {/* Phone Card */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-light-gray text-center">
                <div className="w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-navy" />
                </div>
                <div className="text-sm text-mid-gray mb-2">Phone</div>
                <a
                  href="tel:18772212224"
                  className="text-navy hover:text-gold transition-colors block"
                >
                  <span className="text-mid-gray">Toll Free:</span>{" "}
                  <span className="font-medium">1-877-221-2224</span>
                </a>
                <a
                  href="tel:2169249293"
                  className="text-navy hover:text-gold transition-colors"
                >
                  <span className="text-mid-gray">Cell:</span>{" "}
                  <span className="font-medium">216-924-9293</span>
                </a>
              </div>

              {/* Email Card */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-light-gray text-center">
                <div className="w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-navy" />
                </div>
                <div className="text-sm text-mid-gray mb-2">Email</div>
                <a
                  href="mailto:chris@cswinterslaw.com"
                  className="text-navy hover:text-gold transition-colors font-medium"
                >
                  chris@cswinterslaw.com
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="max-w-3xl mx-auto rounded overflow-hidden border border-light-gray shadow-sm">
              <iframe
                title="Office Location"
                src="https://maps.google.com/maps?q=600-3+Dover+Center+Rd,+Bay+Village,+OH+44140&output=embed"
                width="100%"
                height="300"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="border-0"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
