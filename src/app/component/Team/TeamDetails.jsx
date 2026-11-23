
import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Trainer Name",
    designation: "Head Trainer",
    location: "Butwal",
    branchSlug: "butwal",
    image: "/LP9.webp",
  },
  {
    id: 2,
    name: "Trainer Name",
    designation: "Physical Trainer",
    location: "Pokhara",
    branchSlug: "pokhara",
    image: "/LP10.webp",
  },
  {
    id: 3,
    name: "Trainer Name",
    designation: "Physical Trainer",
    location: "Kathmandu",
    branchSlug: "kathmandu",
    image: "/LP11.webp",
  },
  {
    id: 4,
    name: "Trainer Name",
    designation: "Physical Trainer",
    location: "Birgunj",
    branchSlug: "birgunj",
    image: "/LP9.webp",
  },
];

const locationPriority = {
  Butwal: 1,
  Pokhara: 2,
  Kathmandu: 3,
  Birgunj: 4,
};

export default function TeamDetail() {
  const sortedTeamMembers = [...teamMembers].sort(
    (a, b) =>
      (locationPriority[a.location] ?? 99) -
      (locationPriority[b.location] ?? 99)
  );

  return (
    <section className="py-12 bg-[#f7f8f2]">
      <div className="w-11/12 max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center w-11/12 mx-auto mb-14">
          <span className="text-primary font-bold uppercase tracking-[3px] text-sm">
            Our People
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold text-footer mt-1">
            Meet Our <span className="text-primary">Team</span>
          </h2>

          <p className="text-gray-600 leading-7 mt-1">
            Meet the dedicated trainers and team members who guide and
            support our candidates throughout their physical training journey.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
          {sortedTeamMembers.map((member) => (
            <div
              key={member.id}
              className="group bg-white rounded-2xl overflow-hidden border border-accent/20 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-55 overflow-hidden bg-primary/10">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-linear-to-t from-footer/50 via-transparent to-transparent" />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-footer group-hover:text-primary transition-colors">
                  {member.name}
                </h3>

                <p className="text-gray-500 text-sm mt-2">
                  {member.designation}
                </p>

                {/* Branch Location */}
                <div className="border-t border-accent/20 mt-5 pt-4">
                  <Link
                    href={`/branches/${member.branchSlug}`}
                    className="inline-flex items-center justify-center gap-2 text-primary font-semibold text-sm hover:text-footer transition-colors"
                  >
                    <MapPin size={17} />
                    {member.location} Branch
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
