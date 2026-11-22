
import React from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  Dumbbell,
  Footprints,
  Mountain,
  Users,
  CheckCircle2,
} from "lucide-react";

const facilities = [
  {
    id: 1,
    title: "Spacious Training Ground",
    description:
      "A dedicated outdoor training area for physical exercises, group activities, and military fitness preparation.",
    image: "/army1.jpg",
    icon: Footprints,
    number: "01",
  },
  {
    id: 2,
    title: "Fitness & Strength Training",
    description:
      "Training equipment and exercise facilities to help candidates build strength, stamina, and physical endurance.",
    image: "/army2.jpg",
    icon: Dumbbell,
    number: "02",
  },
  {
    id: 3,
    title: "Obstacle Course Training",
    description:
      "Practical training activities designed to improve agility, coordination, balance, and physical confidence.",
    image: "/army3.jpg",
    icon: Mountain,
    number: "03",
  },
  {
    id: 4,
    title: "Group Training Environment",
    description:
      "A motivating team environment that encourages discipline, teamwork, confidence, and consistency.",
    image: "/army4.jpg",
    icon: Users,
    number: "04",
  },
];

const OurFacilities = () => {
  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden">

      <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative w-11/12 mx-auto ">

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">

          <div className="max-w-2xl">

            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-0.5 bg-primary" />
              <span className="text-primary font-bold uppercase tracking-[3px] text-sm">
                Our Facilities
              </span>
            </div>

            <h2 className="text-3xl sm:text-3xl md:text-3xl font-extrabold text-footer leading-tight">
              Everything You Need
              <span className="text-primary"> to Train Stronger</span>
            </h2>

            <p className="text-gray-600 mt-5 leading-8 text-sm text-justify md:text-sm">
              We aim to provide a supportive training environment
              with facilities that help aspiring candidates improve
              their physical fitness, develop discipline, and prepare
              for military recruitment.
            </p>
          </div>

         
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {facilities.map((facility) => {
            const Icon = facility.icon;

            return (
              <div
                key={facility.id}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
              >

                {/* Image */}
                <div className="relative h-60 overflow-hidden">

                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-footer/70 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">

                  <h3 className="text-md font-bold text-footer group-hover:text-primary transition-colors">
                    {facility.title}
                  </h3>

                  <p className="text-gray-500 text-sm leading-7 mt-2">
                    {facility.description}
                  </p>

                  

                </div>
              </div>
            );
          })}

        </div>  
      </div>
    </section>
  );
};

export default OurFacilities;
