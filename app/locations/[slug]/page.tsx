import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { cities, counties, getCityBySlug, getCountyBySlug, getCitiesByCounty } from "@/lib/locationData";
import { Button } from "@/components/ui/Button";
import { MapPin, Phone, Building2, HeartPulse, Gavel, Car, Briefcase, Users, Scale, FileText, Heart } from "lucide-react";

interface LocationPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const cityParams = cities.map((city) => ({
    slug: city.slug,
  }));
  const countyParams = counties.map((county) => ({
    slug: county.slug,
  }));
  return [...cityParams, ...countyParams];
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const cityData = getCityBySlug(slug);
  const countyData = getCountyBySlug(slug);
  
  if (!cityData && !countyData) {
    return {
      title: "Location Not Found",
    };
  }

  if (cityData) {
    return {
      title: `Personal Injury Lawyer in ${cityData.name}, OH | Christopher S. Winters`,
      description: `Experienced personal injury attorney serving ${cityData.name}, Ohio. ${cityData.description.slice(0, 120)}... Free consultation.`,
      openGraph: {
        title: `Personal Injury Lawyer in ${cityData.name}, Ohio`,
        description: `Legal services for ${cityData.name} residents. Car accidents, workplace injuries, medical malpractice.`,
      },
    };
  }

  return {
    title: `Personal Injury Lawyer in ${countyData!.name} | Christopher S. Winters`,
    description: `Experienced personal injury attorney serving all of ${countyData!.name}, Ohio. ${countyData!.cities.length} cities served. Free consultation.`,
    openGraph: {
      title: `Personal Injury Lawyer in ${countyData!.name}, Ohio`,
      description: `Legal services throughout ${countyData!.name}. Car accidents, workplace injuries, wrongful death.`,
    },
  };
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { slug } = await params;
  const cityData = getCityBySlug(slug);
  const countyData = getCountyBySlug(slug);
  
  if (!cityData && !countyData) {
    notFound();
  }

  // Render CITY page
  if (cityData) {
    const county = getCountyBySlug(cityData.county);

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "LegalService",
      name: `Christopher S. Winters - Personal Injury Lawyer in ${cityData.name}`,
      description: `Personal injury legal services in ${cityData.name}, Ohio`,
      areaServed: {
        "@type": "City",
        name: cityData.name,
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: county?.name,
        },
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: cityData.name,
        addressRegion: "OH",
        addressCountry: "US",
      },
      url: `https://cswinterslaw.com/locations/${cityData.slug}`,
      telephone: "+1-877-221-2224",
    };

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
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
              <span className="eyebrow mb-4">Serving {cityData.name}, Ohio</span>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
                Personal Injury Lawyer in {cityData.name}
              </h1>
              <p className="text-white/80 text-lg mb-8">
                {cityData.description}
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

        <section className="section">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <span className="eyebrow">Local Expertise</span>
                <h2 className="font-serif text-3xl font-bold text-navy mb-4">
                  Serving {cityData.name} Residents
                </h2>
                <div className="divider" />
                <p className="text-text-body mb-6">
                  {cityData.localInfo}
                </p>
                <p className="text-text-body mb-6">
                  With over 38 years of experience representing clients throughout {county?.name}, 
                  Christopher S. Winters understands the unique challenges faced by {cityData.name} residents. 
                  Whether you&apos;ve been injured in a car accident, hurt at work, or suffered due to medical negligence, we provide personalized legal representation.
                </p>
                <Button href="/contact" variant="outline-navy">
                  Schedule Your Free Consultation
                </Button>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-light-gray">
                  <div className="flex items-start gap-4">
                    <Building2 className="w-6 h-6 text-navy flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-serif text-lg font-bold text-navy mb-2">Local Courts</h3>
                      <ul className="text-text-body text-sm space-y-1">
                        {cityData.courts.map((court) => (
                          <li key={court}>{court}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-light-gray">
                  <div className="flex items-start gap-4">
                    <HeartPulse className="w-6 h-6 text-navy flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-serif text-lg font-bold text-navy mb-2">Nearby Medical Facilities</h3>
                      <ul className="text-text-body text-sm space-y-1">
                        {cityData.nearbyHospitals.map((hospital) => (
                          <li key={hospital}>{hospital}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-light-gray">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-navy flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-serif text-lg font-bold text-navy mb-2">Community Information</h3>
                      <p className="text-text-body text-sm">
                        Population: {cityData.population}<br />
                        County: {county?.name}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-off-white">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="eyebrow">How We Can Help</span>
              <h2 className="font-serif text-3xl font-bold text-navy mb-4">
                Legal Services for {cityData.name} Residents
              </h2>
              <div className="divider divider--center" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Car className="w-10 h-10 text-navy mb-4" strokeWidth={1.5} />
                <h3 className="font-serif text-lg font-bold text-navy mb-2">Car Accidents</h3>
                <p className="text-text-body text-sm mb-4">From fender benders to serious collisions, we handle all types of auto accident cases.</p>
                <Button href="/practice-areas" variant="outline-navy" className="w-full">Learn More</Button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Briefcase className="w-10 h-10 text-navy mb-4" strokeWidth={1.5} />
                <h3 className="font-serif text-lg font-bold text-navy mb-2">Workers&apos; Compensation</h3>
                <p className="text-text-body text-sm mb-4">Injured on the job? We help navigate the workers&apos; comp system.</p>
                <Button href="/practice-areas" variant="outline-navy" className="w-full">Learn More</Button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Gavel className="w-10 h-10 text-navy mb-4" strokeWidth={1.5} />
                <h3 className="font-serif text-lg font-bold text-navy mb-2">Personal Injury</h3>
                <p className="text-text-body text-sm mb-4">When you&apos;ve been injured due to negligence, we fight for your compensation.</p>
                <Button href="/practice-areas" variant="outline-navy" className="w-full">Learn More</Button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-navy py-16">
          <div className="container text-center">
            <h2 className="font-serif text-3xl font-bold text-white mb-4">Injured in {cityData.name}?</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Don&apos;t navigate the legal system alone. With over 38 years of experience in {county?.name}, we&apos;re ready to fight for your rights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary">Get Your Free Consultation</Button>
              <Button href="tel:877-221-2224" variant="outline" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />877-221-2224
              </Button>
            </div>
          </div>
        </section>
      </>
    );
  }

  // Render COUNTY page
  const citiesInCounty = getCitiesByCounty(countyData!.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: `Christopher S. Winters - Personal Injury Lawyer in ${countyData!.name}`,
    description: `Personal injury legal services throughout ${countyData!.name}, Ohio`,
    areaServed: {
      "@type": "AdministrativeArea",
      name: countyData!.name,
    },
    address: {
      "@type": "PostalAddress",
      addressRegion: "OH",
      addressCountry: "US",
    },
    url: `https://cswinterslaw.com/locations/${countyData!.slug}`,
    telephone: "+1-877-221-2224",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
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
            <span className="eyebrow mb-4">Serving {countyData!.name}</span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              Personal Injury Lawyer in {countyData!.name}
            </h1>
            <p className="text-white/80 text-lg mb-8">{countyData!.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary">Free Consultation</Button>
              <Button href="tel:877-221-2224" variant="outline">Call 877-221-2224</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <span className="eyebrow">County-Wide Representation</span>
              <h2 className="font-serif text-3xl font-bold text-navy mb-4">Experienced in {countyData!.name} Courts</h2>
              <div className="divider" />
              <p className="text-text-body mb-6">
                With over 38 years of experience practicing in {countyData!.name}, Christopher S. Winters has deep knowledge of the local court systems, judges, and legal procedures.
              </p>
              <Button href="/contact" variant="outline-navy">Schedule Your Free Consultation</Button>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-light-gray">
                <div className="flex items-start gap-4">
                  <Building2 className="w-6 h-6 text-navy flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-serif text-lg font-bold text-navy mb-2">Court Information</h3>
                    <p className="text-text-body text-sm">{countyData!.courtInfo}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-light-gray">
                <div className="flex items-start gap-4">
                  <Users className="w-6 h-6 text-navy flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-serif text-lg font-bold text-navy mb-2">Population Served</h3>
                    <p className="text-text-body text-sm">{countyData!.population} residents across {citiesInCounty.length} cities.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-off-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow">Communities We Serve</span>
            <h2 className="font-serif text-3xl font-bold text-navy mb-4">Cities in {countyData!.name}</h2>
            <div className="divider divider--center" />
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {citiesInCounty.map((city) => (
              <Link
                key={city.slug}
                href={`/locations/${city.slug}`}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-light-gray group"
              >
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-gold group-hover:text-navy transition-colors" />
                  <span className="font-medium text-navy group-hover:text-gold transition-colors">{city.name}</span>
                </div>
                <p className="text-text-body text-xs mt-2 ml-8">Population: {city.population}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-16">
        <div className="container text-center">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">Injured in {countyData!.name}?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            No matter which city you call home, we&apos;re here to help. With 38 years of local experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary">Get Your Free Consultation</Button>
            <Button href="tel:877-221-2224" variant="outline" className="flex items-center gap-2">
              <Phone className="w-4 h-4" />877-221-2224
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
