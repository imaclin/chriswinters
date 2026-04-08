import { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Phone, GraduationCap, Clock, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Christopher S. Winters - Juris Doctor, University of Akron School of Law, practicing law for over 38 years in Ohio.",
};

export default function AboutPage() {
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
          <span className="eyebrow">The Team</span>
          <h1 className="font-serif text-4xl font-bold text-white">About</h1>
        </div>
      </section>

      {/* Bio Section */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Photo column */}
            <div className="flex justify-center items-start">
              <div>
                <Image
                  src="/chriswinters2.jpg"
                  alt="Christopher S. Winters, Attorney at Law"
                  width={300}
                  height={350}
                  className="rounded shadow-md"
                />
                <div className="mt-6 flex flex-col gap-3">
                  <div className="flex items-center gap-3 text-text-body">
                    <Phone className="w-5 h-5 text-navy" />
                    <span className="text-sm">
                      Toll Free: 1-877-221-2224
                      <br />
                      Cell: 216-924-9293
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-text-body">
                    <GraduationCap className="w-5 h-5 text-navy" />
                    <span className="text-sm">J.D., University of Akron</span>
                  </div>
                  <div className="flex items-center gap-3 text-text-body">
                    <Clock className="w-5 h-5 text-navy" />
                    <span className="text-sm">38+ Years of Practice</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Text column */}
            <div>
              <span className="eyebrow">Attorney Profile</span>
              <h2 className="font-serif text-3xl font-bold text-navy mb-4">
                Christopher S. Winters
              </h2>
              <p className="text-gold italic mb-6 font-serif text-lg">
                &ldquo;We&apos;ll help you find your way.&rdquo;
              </p>
              <div className="divider" />

              <p className="text-text-body mb-4">
                Mr. Winters found himself drawn to the law field directly 
                after graduating from Elyria West high school as valedictorian. He then pursued a law
                degree from the University of Akron School of Law, graduating
                Juris Doctor (J.D.) and has been practicing law for 40+ years.
              </p>
              <p className="text-text-body mb-6">
                When you experience an injury, everything can change &ndash; we
                know that at CS Winters Law. With more than four decades of
                experience litigating on my clients&apos; behalf, you can focus on
                recovering, instead of finding yourself overwhelmed and worried
                about your court case.
              </p>

              <blockquote className="bg-off-white p-6 rounded border-l-4 border-gold mb-6">
                <p className="italic text-text-body font-serif">
                  &ldquo;Successfully representing clients in the State of Ohio in
                  the Lorain and Cuyahoga County Court systems obtaining compensation
                  for their injuries. Passionate about being a staunch advocate for
                  the hard-working citizens of the State of Ohio and dedicated to
                  the pursuit of justice on their behalf.&rdquo;
                </p>
              </blockquote>

              <div className="flex flex-wrap gap-4">
                <Button href="/contact" variant="primary">
                  Schedule a Consultation
                </Button>
                <Button href="/practice-areas" variant="outline-navy">
                  View Practice Areas
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="section bg-off-white">
        <div className="container">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="eyebrow">Credentials & Background</span>
            <h2 className="font-serif text-3xl font-bold text-navy mb-4">
              Experience You Can Trust
            </h2>
            <div className="divider divider--center" />
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded shadow-sm text-center">
              <div className="font-serif text-4xl font-bold text-navy mb-3">
                38+
              </div>
              <h4 className="font-serif text-lg font-bold text-navy mb-2">
                Years of Practice
              </h4>
              <p className="text-text-body text-sm">
                Decades of courtroom experience litigating on behalf of injured
                Ohioans.
              </p>
            </div>

            <div className="bg-white p-8 rounded shadow-sm text-center">
              <div className="font-serif text-4xl font-bold text-navy mb-3">
                J.D.
              </div>
              <h4 className="font-serif text-lg font-bold text-navy mb-2">
                University of Akron
              </h4>
              <p className="text-text-body text-sm">
                Graduated Juris Doctor from the University of Akron School of Law.
              </p>
            </div>

            <div className="bg-white p-8 rounded shadow-sm text-center">
              <div className="font-serif text-4xl font-bold text-navy mb-3">
                OH
              </div>
              <h4 className="font-serif text-lg font-bold text-navy mb-2">
                Licensed in Ohio
              </h4>
              <p className="text-text-body text-sm">
                Practicing in Lorain and Cuyahoga County Court systems throughout
                his career.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-navy py-16">
        <div className="container text-center">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">
            Ready to Put 38 Years to Work for You?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Contact our office today. Let us handle the legal complexities while
            you focus on recovery.
          </p>
          <Button href="/contact" variant="primary">
            Contact Us Today
          </Button>
        </div>
      </section>
    </>
  );
}
