import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiZap } from "react-icons/fi";
import secondimage from "../../../../public/images/armyfive.jpg";
import firstimage from "../../../../public/images/armyfour.jpg";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-footer text-secondary h-full flex items-center">
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />

      <div className="absolute inset-y-0 right-0 w-1/2 bg-linear-to-l from-primary/10 to-transparent [clip-path:polygon(30%_0,100%_0,100%_100%,0_100%)]" />

      <div className="relative w-11/12 mx-auto grid lg:grid-cols-2 gap-12 items-center py-16">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 bg-primary border border-primary/40 text-gray-100 text-xs font-thin uppercase px-3 py-1.5 rounded-full mb-6">
            <FiZap size={14} /> Train Hard. Live Strong.
          </span>

          <h1 className="text-3xl md:text-6xl font-black uppercase leading-[0.95] tracking-tight">
            Forge Your
            <br />
            <span className="text-primary">Strongest</span>
            <br />
            Self.
          </h1>

          <p className="mt-5 text-secondary/90 text-md leading-relaxed max-w-md">
            Elite coaching, world-class equipment, and a community that pushes
            you past your limits. Your transformation starts on the floor.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/register"
              className="inline-flex items-center gap-2 bg-primary text-gray-100 font-light uppercase tracking-wider text-sm px-6 py-2.5 duration-500 rounded-full hover:bg-accent hover:text-footer transition-colors shadow-lg shadow-primary/30"
            >
              Start Free Trial <FiArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* RIGHT — Image collage */}
        <div className="relative h-[50vh] sm:h-[60vh] lg:h-[75vh]">
          {/* Big main image — angled */}
          <div className="absolute top-0 right-0 w-[85%] h-[72%] rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl rotate-2">
            <Image
              src={firstimage}
              alt="Athlete training"
              fill
              sizes="(max-width: 1024px) 85vw, 45vw"
              className="object-cover"
              priority
            />
          </div>

          {/* Secondary image — bottom left, angled opposite */}
          <div className="absolute bottom-0 left-0 w-[70%] h-[52%] rounded-2xl overflow-hidden border-2 border-accent/30 shadow-2xl -rotate-3">
            <Image
              src={secondimage}
              alt="Group fitness class"
              fill
              sizes="(max-width: 1024px) 70vw, 35vw"
              className="object-cover object-center"
            />
          </div>

          {/* Floating stat card */}
          <div className="absolute top-[-5%] left-[9%] bg-secondary text-footer rounded-2xl px-5 py-4 shadow-xl -rotate-6">
            <p className="text-2xl font-black leading-none">99%</p>
            <p className="text-[10px] uppercase tracking-widest font-bold mt-1">
              Goal Rate
            </p>
          </div>

          {/* Decorative dotted ring */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border-2 border-dashed border-accent/20 -z-10" />
        </div>
      </div>
    </section>
  );
}