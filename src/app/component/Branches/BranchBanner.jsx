
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export default function BranchBanner({ branch }) {
  return (
    <section className="relative min-h-70 md:min-h-80 flex items-center overflow-hidden bg-primary">
      <div className="absolute inset-0 bg-linear-to-r from-footer/95 via-footer/80 to-footer/30" />

      <div className="absolute -right-20 top-0 h-full w-[35%] bg-secondary/10 skew-x-[-15deg] hidden md:block" />

      <div className="relative z-10 w-11/12 mx-auto px-5 sm:px-8 lg:px-4 py-20">

        <div className="inline-flex items-center gap-3 mb-6">
          <span className="w-10 h-0.5 bg-secondary" />
          <span className="text-secondary text-sm md:text-base font-bold uppercase tracking-[3px]">
            Gorkha Physical Fitness Training Center
          </span>
        </div>

       
        <p className="text-white/85 text-sm md:text-base leading-7 max-w-2xl ">
          {branch.name}
        </p>

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mt-8 text-sm">
          <Link
            href="/"
            className="flex items-center gap-2 text-white/75 hover:text-secondary transition-colors"
          >
            <Home size={16} />
            Home
          </Link>

          <ChevronRight size={16} className="text-secondary" />

          <Link
            href="/branches"
            className="text-white/75 hover:text-secondary transition-colors"
          >
            Branches
          </Link>

          <ChevronRight size={16} className="text-secondary" />

          <span className="text-secondary font-semibold">
            {branch.location}
          </span>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-secondary" />
    </section>
  );
}
