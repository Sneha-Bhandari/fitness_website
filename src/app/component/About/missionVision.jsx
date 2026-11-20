
import React from "react";
import {
  Target,
  Eye,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";

const MissionVision = () => {
  return (
    <section className="relative py-12 md:py-12 bg-[#f7f8f2] overflow-hidden">
      <div className="relative w-11/12 mx-auto">

        {/* Section Heading */}
        <div className="max-w-2xl mx-auto text-center mb-14">

          <div className="inline-flex items-center gap-3 mb-5">
            <span className="w-9 h-0.5 bg-primary" />
            <span className="text-primary font-bold uppercase tracking-[3px] text-sm">
              Our Purpose
            </span>
            <span className="w-9 h-0.5 bg-primary" />
          </div>

          <h2 className="text-3xl sm:text-3xl md:text-3xl font-extrabold text-footer leading-tight">
            Our Mission &
            <span className="text-primary"> Vision</span>
          </h2>

          <p className="text-gray-600 leading-7 mt-2 text-sm md:text-sm text-justify">
            Driven by purpose and guided by discipline, we are committed
            to shaping physically strong, mentally confident, and
            responsible individuals ready to pursue their military dreams.
          </p>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">

          {/* Mission Card */}
          <div className="group relative  h-[50vh] rounded-2xl p-5 border border-primary/10 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden flex items-center justify-center">

          
            <div className="absolute -right-12 -top-12 w-40 h-40 rounded-full bg-background/30 group-hover:scale-125 transition-transform duration-500" />

            <div className="relative z-10">

             <div className="flex gap-6">
                 <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center mb-7  transition-transform duration-300">
                <Target size={32} strokeWidth={1.8} />
              </div>

              <div>
                <span className="text-primary text-sm font-bold uppercase tracking-[3px]">
                What Drives Us
              </span>

              <h3 className="text-2xl sm:text-md font-semibold text-footer  mb-5">
                Our Mission
              </h3>

              </div>
             </div>
              <p className="text-gray-600 leading-8 text-base text-justify">
                Our mission is to provide quality physical fitness
                training and proper guidance to aspiring military
                candidates. We aim to develop their strength, stamina,
                endurance, discipline, and mental resilience through
                structured training and continuous encouragement.
              </p>

              <div className="flex items-center gap-3 mt-8  border-gray-100">
                <ShieldCheck className="text-primary" size={21} />
                <span className="text-footer font-semibold text-sm">
                  Training with Purpose
                </span>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="group relative bg-footer/80 h-[50vh] rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden flex items-center justify-center">

           
            {/* Decorative Circle */}
            <div className="absolute -right-12 -top-12 w-40 h-40 rounded-full bg-white/5 group-hover:scale-125 transition-transform duration-500" />

            <div className="relative z-10">

             <div className="flex gap-4">
                 <div className="w-16 h-16 rounded-2xl bg-secondary text-footer flex items-center justify-center mb-7  transition-transform duration-300">
                <Eye size={32} strokeWidth={1.8} />
              </div>

             <div>
                 <span className="text-secondary text-sm font-bold uppercase tracking-[3px]">
                Where We Aspire
              </span>

              <h3 className="text-2xl sm:text-md font-semibold text-white  mb-5">
                Our Vision
              </h3>
             </div>
             </div>

              <p className="text-white/75 leading-8 text-base text-justify">
                Our vision is to become a trusted and respected physical
                fitness training center, recognized for preparing
                dedicated and capable candidates for military recruitment.
                We aspire to inspire the next generation through
                discipline, quality training, and a commitment to excellence.
              </p>

              <div className="flex items-center gap-3 mt-8 border-white/15">
                <ShieldCheck className="text-secondary" size={21} />
                <span className="text-white font-semibold text-sm">
                  Building a Stronger Future
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionVision;
