
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  Target,
  Dumbbell,
  ShieldCheck,
} from "lucide-react";

const WhoWeAre = () => {
  const highlights = [
    {
      icon: Target,
      title: "Goal-Oriented Training",
      description: "Focused preparation for military recruitment."
    },
    {
      icon: Dumbbell,
      title: "Physical Excellence",
      description: "Building strength, stamina, and endurance."
    },
    {
      icon: ShieldCheck,
      title: "Discipline & Confidence",
      description: "Developing a strong mindset and self-discipline."
    },
     {
      icon: ShieldCheck,
      title: "Discipline & Confidence",
      description: "Developing a strong mindset and self-discipline."
    },
  ];

  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden">
      <div className="w-11/12 mx-auto px-5 ">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          <div className="relative">
            {/* Main Image */}
            <div className="relative h-95 sm:h-120 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/army1.jpg"
                alt="Physical fitness training at Gorkha Training Center"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

          
            <div className="absolute -bottom-10 left-2 sm:right-8 bg-footer text-white p-6 sm:p-4 rounded-xl shadow-xl max-w-60">
              <div className="text-secondary text-lg font-semibold mb-2">
                Strong
              </div>
              <p className="text-white text-xs leading-6 text-justify">
                Training today for a stronger and more disciplined tomorrow.
              </p>
            </div>

            {/* Decorative Shape */}
            <div className="absolute -bottom-5 -left-5 w-24 h-24 border-4 border-secondary rounded-bl-[40px] -z-10" />

          </div>

          {/* RIGHT CONTENT SECTION */}
          <div className="pt-4 lg:pt-0">

            {/* Section Label */}
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-0.5 bg-primary" />
              <span className="text-primary font-bold uppercase tracking-[3px] text-sm">
                Who We Are
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-footer leading-tight">
              Empowering Aspirants to
              <span className="text-primary"> Become Stronger</span>
            </h2>

            {/* Introduction */}
            <p className="text-gray-600 leading-8 mt-2 text-sm text-justify">
              Gorkha Physical Fitness Training Center is dedicated to
              preparing aspiring candidates for military recruitment
              through structured physical training, discipline, and
              personal development.
            </p>

            <p className="text-gray-600 leading-8 mt-2 text-sm text-justify">
              We believe that becoming a successful soldier requires
              more than physical strength. It takes determination,
              confidence, mental resilience, and a commitment to
              continuous improvement. Our training approach focuses
              on helping every candidate develop these qualities.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-3">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="flex items-center  gap-4 "
                  >
                    <div className="w-12 h-12 shrink-0 rounded-xl bg-background/40 flex items-center justify-center text-primary">
                      <Icon size={23} />
                    </div>

                   
                      <h3 className="text-footer font-semibold  text-base">
                        {item.title}
                      </h3>
                      {/* <p className="text-gray-500 text-sm leading-6 mt-1">
                        {item.description}
                      </p> */}
                   
                  </div>
                );
              })}
            </div>

          

          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
