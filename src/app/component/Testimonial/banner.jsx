
import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

const TestimonialBanner = () => {
  return (
    <section className="relative min-h-70 md:min-h-60 flex items-center overflow-hidden bg-primary">

      
    

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-footer/95 via-footer/80 to-footer/30" />

      {/* Decorative Shape */}
      <div className="absolute -right-20 top-0 h-full w-[35%] bg-secondary/10 skew-x-[-15deg] hidden md:block" />

      {/* Content */}
      <div className="relative z-10 w-11/12 mx-auto px-5 sm:px-8 lg:px-4 py-20">

        {/* Label */}
        <div className="inline-flex items-center gap-3 mb-6">
          <span className="w-10 h-0.5 bg-secondary" />
          <span className="text-secondary text-xl font-bold uppercase tracking-[3px]">
            Gorkha Physical Fitness Training Center
          </span>
        </div>

        {/* Heading */}
        {/* <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-4xl font-extrabold leading-[1.1] max-w-3xl">
          Building Strength.
          <br />
          <span className="text-secondary">
            Shaping Warriors.
          </span>
        </h1> */}

        {/* Description */}
        <p className="text-white/85 text-sm  leading-6 max-w-2xl ">
          We are dedicated to preparing aspiring candidates through
          professional physical fitness training, discipline, and
          mental strength to help them pursue their military dreams.
        </p>

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mt-9 text-sm">
          <Link
            href="/"
            className="flex items-center gap-2 text-white/75 hover:text-secondary transition-colors"
          >
            <Home size={16} />
            Home
          </Link>

          <ChevronRight size={16} className="text-secondary" />

          <span className="text-secondary font-semibold">
            Testimonial
          </span>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-secondary" />

    </section>
  );
};

export default TestimonialBanner;
