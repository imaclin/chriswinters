import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { cities, counties, getCitiesByCounty } from "@/lib/locationData";
import { Button } from "@/components/ui/Button";
import { MapPin, Building, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Locations We Serve | Personal Injury Lawyer Ohio",
  description: "Christopher S. Winters serves clients throughout Lorain County and Cuyahoga County, Ohio. View all 35+ cities and communities we represent.",
  openGraph: {
    title: "Locations We Serve - Ohio Personal Injury Lawyer",
    description: "Legal representation in Lorain County and Cuyahoga County, Ohio",
  },
};

export default function LocationsIndexPage() {
  const lorainCities = getCitiesByCounty("lorain");
  const cuyahogaCities = getCitiesByCounty("cuyahoga");

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-navy-dark py-16 md:py-20 overflow-hidden">
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
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="eyebrow mb-4">35+ Communities Served</span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              Locations We Serve
            </h1>
            <p className="text-white/80 text-lg mb-8">
              Christopher S. Winters provides experienced personal injury representation 
              throughout Lorain County and Cuyahoga County, Ohio. From Cleveland to Lorain, 
              we&apos;re here to help injured residents get the compensation they deserve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary">
                Free Consultation
              </Button>
              <Button href="tel:877-221-2224" variant="outline">
                Call 877-221-2224
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Counties Overview */}
      <section className="section">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow">Service Areas</span>
            <h2 className="font-serif text-3xl font-bold text-navy mb-4">
              Counties We Serve
            </h2>
            <div className="divider divider--center" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {counties.map((county) => {
              const countyCities = getCitiesByCounty(county.slug);
              return (
                <Link
                  key={county.slug}
                  href={`/locations/${county.slug}`}
                  className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-light-gray group"
                >
                  <div className="flex items-start gap-4">
                    <Building className="w-8 h-8 text-gold group-hover:text-navy transition-colors flex-shrink-0" />
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-navy group-hover:text-gold transition-colors mb-2">
                        {county.name}
                      </h3>
                      <p className="text-text-body text-sm mb-3">
                        {county.description.slice(0, 140)}...
                      </p>
                      <p className="text-text-body text-xs">
                        <span className="font-medium">{countyCities.length} cities</span> • Population: {county.population}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lorain County Cities */}
      <section className="section bg-off-white">
        <div className="container">
          <div className="flex items-center gap-4 mb-8">
            <MapPin className="w-6 h-6 text-gold" />
            <h2 className="font-serif text-3xl font-bold text-navy">
              Lorain County Cities
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {lorainCities.map((city) => (
              <Link
                key={city.slug}
                href={`/locations/${city.slug}`}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all border border-light-gray group"
              >
                <h3 className="font-medium text-navy group-hover:text-gold transition-colors mb-1">
                  {city.name}
                </h3>
                <p className="text-text-body text-xs">
                  Population: {city.population}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cuyahoga County Cities */}
      <section className="section">
        <div className="container">
          <div className="flex items-center gap-4 mb-8">
            <MapPin className="w-6 h-6 text-gold" />
            <h2 className="font-serif text-3xl font-bold text-navy">
              Cuyahoga County Cities
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cuyahogaCities.map((city) => (
              <Link
                key={city.slug}
                href={`/locations/${city.slug}`}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all border border-light-gray group"
              >
                <h3 className="font-medium text-navy group-hover:text-gold transition-colors mb-1">
                  {city.name}
                </h3>
                <p className="text-text-body text-xs">
                  Population: {city.population}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Local Matters */}
      <section className="section bg-off-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="eyebrow">Local Experience Matters</span>
              <h2 className="font-serif text-3xl font-bold text-navy mb-4">
                Why Choose a Local {counties.length > 1 ? "County" : ""} Attorney?
              </h2>
              <div className="divider" />
              <ul className="space-y-4 text-text-body">
                <li className="flex items-start gap-3">
                  <span className="text-gold font-bold">1.</span>
                  <span>
                    <strong>Familiar with local courts:</strong> We know the judges, 
                    court procedures, and local rules in Lorain and Cuyahoga County courts.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold font-bold">2.</span>
                  <span>
                    <strong>Understanding of local factors:</strong> We know the 
                    accident hotspots, local hospitals, and insurance companies 
                    operating in your area.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold font-bold">3.</span>
                  <span>
                    <strong>Community connections:</strong> 40+ years of building 
                    relationships with local medical providers, experts, and court personnel.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold font-bold">4.</span>
                  <span>
                    <strong>Convenient accessibility:</strong> We&apos;re available to meet 
                    with clients throughout the counties we serve.
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-serif text-xl font-bold text-navy mb-4 text-center">
                Free Case Evaluation
              </h3>
              <p className="text-text-body text-center mb-6">
                Contact us today for a free, no-obligation consultation about your 
                personal injury case.
              </p>
              <div className="space-y-3">
                <Button href="/contact" variant="primary" className="w-full">
                  Schedule Consultation
                </Button>
                <Button 
                  href="tel:877-221-2224" 
                  variant="outline-navy" 
                  className="w-full flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  877-221-2224
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16">
        <div className="container text-center">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">
            No Matter Where You Are in Lorain or Cuyahoga County
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            We&apos;re ready to fight for your rights. With 40+ years of experience serving 
            Northeast Ohio, Christopher S. Winters has the local knowledge and legal 
            expertise to help you get the compensation you deserve.
          </p>
          <Button href="/contact" variant="primary">
            Get Your Free Consultation
          </Button>
        </div>
      </section>
    </>
  );
}
