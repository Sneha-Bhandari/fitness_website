"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Phone,
  ShieldCheck,
} from "lucide-react";

const AboutCTA = () => {
  return (
    <section className="relative py-10 overflow-hidden bg-footer">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{
          backgroundImage: "url('/images/about-cta.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-footer via-footer/95 to-primary/80" />

     

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-secondary/30 bg-white/5 mb-7">
            <ShieldCheck size={17} className="text-secondary" />
            <span className="text-secondary text-xs font-medium uppercase tracking-[3px]">
              Your Journey Starts Here
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-white text-3xl sm:text-3xl md:text-3xl lg:text-3xl font-extrabold leading-tight">
            Dream Big.
            <span className="text-secondary"> Train Hard.</span>
            <br className="hidden sm:block" />
            Become Stronger.
          </h2>

          {/* Description */}
          <p className="text-white/90 text-base sm:text-sm leading-8 max-w-2xl mx-auto mt-4">
            Every great journey begins with a single step. Join Gorkha
            Physical Fitness Training Center and start building the
            strength, discipline, and confidence needed to pursue your
            military dreams.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">

            <Link
              href="/contact"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3 bg-secondary text-footer rounded-lg font-medium hover:bg-white transition-all duration-300 shadow-lg"
            >
              Join Our Training
              <ArrowUpRight
                size={20}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </Link>

            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3 border border-white/40 text-white rounded-lg font-medium hover:bg-white hover:text-footer transition-all duration-300"
            >
              <Phone size={18} />
              Contact Us
            </Link>

          </div>

         

        </div>
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-secondary" />

    </section>
  );
};

export default AboutCTA;
