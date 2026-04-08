import { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Button } from "@/components/ui/Button";
import { MapPin, GraduationCap, Clock, Users } from "lucide-react";

export const metadata: Metadata = {
  description: "Experienced personal injury attorney serving Lorain and Cuyahoga County, Ohio. Fighting for the rights of hard-working Ohioans.",
  openGraph: {
    images: "/chriswinters.jpg",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Intro Section */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="eyebrow">Overwhelmed? We Can Help</span>
              <h2 className="font-serif text-3xl font-bold text-navy mb-4">
                The Legal System Can Be Daunting
              </h2>
              <div className="divider" />
              <p className="text-text-body mb-6">
                The legal system can intimidate and overwhelm anyone &ndash; we&apos;re
                here to help find the answers and create the solutions you need.
                Don&apos;t let yourself get buried in details. Contact us instead.
              </p>
              <Button href="/contact" variant="outline-navy">
                Reach Out Today
              </Button>
            </div>

            <div className="flex flex-col gap-6">
              <div className="bg-white p-6 rounded shadow-sm border border-light-gray">
                <MapPin className="w-8 h-8 text-navy mb-4" strokeWidth={1.5} />
                <h3 className="font-serif text-lg font-bold text-navy mb-2">
                  Local Expertise
                </h3>
                <p className="text-text-body text-sm">
                  Representing clients in the Lorain and Cuyahoga County Court
                  systems for decades.
                </p>
              </div>

              <div className="bg-white p-6 rounded shadow-sm border border-light-gray">
                <GraduationCap className="w-8 h-8 text-navy mb-4" strokeWidth={1.5} />
                <h3 className="font-serif text-lg font-bold text-navy mb-2">
                  40+ Years of Experience
                </h3>
                <p className="text-text-body text-sm">
                  A track record built on dedication, persistence, and results for
                  the hard-working citizens of Ohio.
                </p>
              </div>

              <div className="bg-white p-6 rounded shadow-sm border border-light-gray">
                <Users className="w-8 h-8 text-navy mb-4" strokeWidth={1.5} />
                <h3 className="font-serif text-lg font-bold text-navy mb-2">
                  Client-First Advocacy
                </h3>
                <p className="text-text-body text-sm">
                  Passionate about being a staunch advocate for every client - you
                  focus on healing, we handle the rest.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-navy py-16">
        <div className="container text-center">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">
            Find Out How We Can Fight for You
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Learn about our services and let us put decades of courtroom experience
            to work on your behalf.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/practice-areas" variant="primary">
              Learn About Our Services
            </Button>
            <Button href="/about" variant="outline">
              Meet Mr. Winters
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
