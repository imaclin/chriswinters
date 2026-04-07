import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative bg-navy overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-mid/50 to-transparent" />

      {/* Gold accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold to-gold-light" />

      <div className="container relative z-10 py-16 md:py-20">
        <div className="max-w-container mx-auto">
          {/* Mobile Layout */}
          <div className="flex flex-col items-center text-center lg:hidden">
            <span className="eyebrow mb-3">
              Attorney at Law - Lorain & Cuyahoga County, Ohio
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-8">
              Fighting for Your Rights
            </h1>
            <div className="my-8">
              <Image
                src="/chriswinters.jpg"
                alt="Christopher S. Winters, Attorney at Law"
                width={340}
                height={400}
                className="rounded shadow-md border-4 border-white/10"
                priority
              />
            </div>
            <p className="text-white/80 text-lg mb-8 leading-relaxed max-w-2xl">
              I am an experienced attorney working day in and day out on helping
              people recover from serious accidents. Find out how our services
              can help you get on the path to healing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary">
                Get a Free Consultation
              </Button>
              <Button href="/practice-areas" variant="outline">
                Our Practice Areas
              </Button>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex lg:items-center lg:gap-12">
            <div className="flex flex-col items-start text-left flex-1">
              <span className="eyebrow mb-3">
                Attorney at Law - Lorain & Cuyahoga County, Ohio
              </span>
              <h1 className="font-serif text-5xl font-bold text-white mb-6">
                Fighting for Your Rights
              </h1>
              <p className="text-white/80 text-lg mb-8 leading-relaxed max-w-2xl">
                I am an experienced attorney working day in and day out on helping
                people recover from serious accidents. Find out how our services
                can help you get on the path to healing.
              </p>
              <div className="flex flex-row gap-4 justify-start">
                <Button href="/contact" variant="primary">
                  Get a Free Consultation
                </Button>
                <Button href="/practice-areas" variant="outline">
                  Our Practice Areas
                </Button>
              </div>
            </div>
            <div className="flex-shrink-0">
              <Image
                src="/chriswinters.jpg"
                alt="Christopher S. Winters, Attorney at Law"
                width={340}
                height={400}
                className="rounded shadow-md border-4 border-white/10"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
