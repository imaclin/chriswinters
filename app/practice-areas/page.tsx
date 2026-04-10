import { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Shield, Truck, Users, Heart, Stethoscope, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "Practice Areas",
  description: "Personal injury, car accidents, truck accidents, motorcycle accidents, medical malpractice, wrongful death - legal services for Ohio residents.",
};

const practiceAreas = [
  {
    icon: Shield,
    title: "Personal Injury",
    description:
      "When you've been injured due to someone else's negligence, we fight to get you the compensation you deserve for medical bills, lost wages, and pain and suffering.",
  },
  {
    icon: Truck,
    title: "Truck Accidents",
    description:
      "Commercial truck accidents often result in catastrophic injuries. We understand federal trucking regulations and hold negligent trucking companies accountable.",
  },
  {
    icon: Users,
    title: "Motorcycle Accidents",
    description:
      "Motorcyclists face unique dangers on the road. We advocate for riders injured by negligent drivers who fail to share the road safely.",
  },
  {
    icon: Heart,
    title: "Wrongful Death",
    description:
      "Losing a loved one due to negligence is devastating. We help families seek justice and compensation for funeral expenses, lost income, and emotional suffering.",
  },
  {
    icon: Stethoscope,
    title: "Medical Malpractice",
    description:
      "When healthcare providers fail to meet the standard of care, patients suffer. We hold negligent doctors, nurses, and hospitals accountable for their mistakes.",
  },
  {
    icon: Scale,
    title: "Car Accidents",
    description:
      "From minor fender benders to serious collisions, we handle all types of auto accident cases and deal with insurance companies so you don't have to.",
  },
];

export default function PracticeAreasPage() {
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
          <span className="eyebrow">Our Expertise</span>
          <h1 className="font-serif text-4xl font-bold text-white">
            Practice Areas
          </h1>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="section">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow">We Can Help You</span>
            <h2 className="font-serif text-3xl font-bold text-navy mb-4">
              Personal Injury & Accident Law
            </h2>
            <div className="divider divider--center" />
            <p className="text-text-body">
              We focus on helping people who have been injured through no fault
              of their own. With 40+ years of experience, we have the
              knowledge and dedication to fight for your rights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceAreas.map((area) => (
              <div
                key={area.title}
                className="bg-white p-8 rounded-lg shadow-sm border border-light-gray hover:shadow-md transition-shadow"
              >
                <area.icon
                  className="w-12 h-12 text-navy mb-4"
                  strokeWidth={1.5}
                />
                <h3 className="font-serif text-xl font-bold text-navy mb-3">
                  {area.title}
                </h3>
                <p className="text-text-body text-sm">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-off-white">
        <div className="container">
          <div className="bg-navy rounded-lg p-8 md:p-12 text-center">
            <h2 className="font-serif text-3xl font-bold text-white mb-4">
              Not Sure If You Have a Case?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Every situation is unique. Contact us for a free consultation to
              discuss your circumstances and understand your legal options.
            </p>
            <Button href="/contact" variant="primary">
              Get a Free Consultation
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
