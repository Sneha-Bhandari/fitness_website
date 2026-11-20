import Image from "next/image";
import Link from "next/link";
import { FiCheck, FiArrowRight } from "react-icons/fi";
import aboutImage from "../../../../public/images/armythree.jpg"; 

const features = [
  "Certified coaches with 10+ years of experience",
  "24/7 access across all 8 branches",
  "Personalized training and nutrition plans",
  "Modern equipment, maintained daily",
];

export default function WhyChooseUsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16">
      <div className="relative w-11/12 mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* LEFT — Image */}
        <div className="relative h-[40vh] sm:h-[50vh] lg:h-[60vh] rounded-2xl overflow-hidden border border-primary/30 shadow-lg">
          <Image
            src={aboutImage}
            alt="Training at our gym"
            fill
            sizes="(max-width: 1024px) 92vw, 45vw"
            className="object-cover object-center"
          />
        </div>

        {/* RIGHT — Content */}
        <div>
          {/* Badge */}
          <span className="inline-flex items-center gap-2 bg-primary/15 border border-primary/40 text-primary text-[11px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full mb-3">
            Why Choose Us
          </span>

          {/* Heading */}
          <h2 className="text-4xl font-medium uppercase leading-tight tracking-tight text-footer mb-4">
            More Than <span className="text-accent">A Gym</span>
          </h2>

          {/* Description */}
          <p className="text-footer/70 text-sm leading-relaxed mb-6 max-w-lg">
            We&apos;re a community built on discipline, results, and support.
            From your first session to your hundredth, our coaches and members
            push you to become the strongest version of yourself.
          </p>

          {/* Feature list */}
          <ul className="space-y-3 mb-8">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <span className="grid place-items-center w-5 h-5 rounded-full bg-primary/15 text-primary shrink-0 mt-0.5">
                  <FiCheck size={12} />
                </span>
                <span className="text-footer/80 text-sm leading-relaxed">
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link
            href="/about"
            className="inline-flex items-center gap-2 bg-primary text-white font-black uppercase tracking-wider text-sm px-6 py-3 rounded-full hover:bg-footer transition-colors shadow-lg shadow-primary/20"
          >
            Learn More <FiArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}