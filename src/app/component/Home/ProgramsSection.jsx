import {
  FiActivity,
  FiHeart,
  FiZap,
  FiTarget,
  FiUser,
  FiUsers,
} from "react-icons/fi";

const programs = [
  {
    title: "Strength Training",
    desc: "Build raw power with free weights, barbells, and progressive overload programs.",
    icon: FiActivity,
    tag: "Power",
  },
  {
    title: "Cardio & Conditioning",
    desc: "Treadmills, rowers, and endurance circuits to push your stamina to the limit.",
    icon: FiHeart,
    tag: "Endurance",
  },
  {
    title: "HIIT & CrossFit",
    desc: "High-intensity interval training that torches fat and builds explosive athleticism.",
    icon: FiZap,
    tag: "Intensity",
  },
  {
    title: "Personal Training",
    desc: "One-on-one coaching tailored to your goals, schedule, and fitness level.",
    icon: FiTarget,
    tag: "1-on-1",
  },
  {
    title: "Yoga & Mobility",
    desc: "Recover, stretch, and restore balance with guided mobility and yoga sessions.",
    icon: FiUser,
    tag: "Recovery",
  },
  {
    title: "Group Classes",
    desc: "Train with the pack — spinning, boxing, dance, and more in high-energy group sessions.",
    icon: FiUsers,
    tag: "Community",
  },
];

export default function ProgramsSection() {
  return (
    <section className="relative overflow-hidden bg-primary/40 py-16">
      <div className="relative w-11/12 mx-auto">
        {/* Heading — matches Milestones structure */}
        <div className="flex flex-col mb-8">
          <div>
            <span className="inline-flex items-center gap-2 bg-primary/15 border border-primary/40 text-primary text-[11px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full mb-3">
              Our Programs
            </span>
            <h2 className="text-4xl font-medium uppercase leading-tight tracking-tight text-footer">
              Train Your <span className="text-primary">Way</span>
            </h2>
          </div>
          <p className="text-footer/70 max-w-3xl text-sm leading-relaxed">
            Whatever your goal — strength, endurance, recovery, or community —
            we have a program built for you.
          </p>
        </div>

        {/* Program grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-4">
          {programs.map((program) => (
            <div
              key={program.title}
              className="group relative bg-white/80 border cursor-pointer border-secondary/40 rounded-xl p-5 md:p-6 transition-colors duration-500 hover:border-primary/40 hover:shadow-md "
            >
              {/* Title */}
              <h3 className="text-lg font-black uppercase tracking-tight text-footer mb-2">
                {program.title}
              </h3>

              {/* Description */}
              <p className="text-footer/70 text-xs md:text-sm leading-relaxed mb-4">
                {program.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
