import { FiAward, FiUsers, FiMapPin, FiTrendingUp } from "react-icons/fi";

const milestones = [
  { score: "12K+", target: 12, suffix: "K+", label: "Active Members", icon: FiUsers },
  { score: "40+", target: 40, suffix: "+", label: "Certified Coaches", icon: FiAward },
  { score: "8", target: 8, suffix: "", label: "Branches Nationwide", icon: FiMapPin },
  { score: "98%", target: 98, suffix: "%", label: "Goal Achievement Rate", icon: FiTrendingUp },
];

export default function MilestonesSection() {
  return (
    <section className="relative overflow-hidden bg-white text-primary py-16">
      {/* Scoped styles — no globals.css changes needed */}
      <style>{`
        @property --num {
          syntax: "<integer>";
          initial-value: 0;
          inherits: false;
        }
        @keyframes milestone-rise {
          from { opacity: 0; transform: translateY(2rem); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes milestone-count {
          from { --num: 0; }
          to   { --num: var(--target); }
        }
        .milestone-card {
          animation: milestone-rise 0.7s ease-out both;
          animation-delay: var(--delay, 0ms);
        }
        .milestone-num::before {
          content: counter(num);
          counter-reset: num var(--num);
          animation: milestone-count 1.6s ease-out forwards;
          animation-delay: var(--delay, 0ms);
        }
        .milestone-num::after {
          content: var(--suffix);
        }
        @media (prefers-reduced-motion: reduce) {
          .milestone-card { animation: none; }
          .milestone-num::before {
            animation: none;
            --num: var(--target);
          }
        }
      `}</style>

      <div className="relative w-11/12 mx-auto">
        {/* Heading */}
        <div className="flex flex-col">
          <div>
            <span className="inline-flex items-center gap-2 bg-primary/15 border border-primary/40 text-primary text-[11px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full mb-3">
              Our Milestones
            </span>
            <h2 className="text-4xl font-medium uppercase leading-tight tracking-tight">
              Numbers That <span className="text-accent">Speak</span>
            </h2>
          </div>
          <p className="text-primary max-w-3xl text-sm leading-relaxed mb-8">
            Every rep, every member, every branch — built on discipline and
            results. Here&apos;s where we stand today.
          </p>
        </div>

        {/* Score grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-4">
          {milestones.map((item, i) => {
            return (
              <div
                key={item.label}
                style={{ "--delay": `${i * 120}ms` }}
                className="milestone-card group relative cursor-pointer bg-white border border-primary/50 rounded-bl-xl rounded-r-xl p-4 md:p-6 overflow-hidden transition-all duration-700 hover:border-primary/70 hover:bg-secondary/10"
              >

                {/* Count-up number */}
                <p
                  className="text-3xl font-black text-primary leading-none tracking-tight milestone-num"
                  style={{ "--target": item.target, "--suffix": `"${item.suffix}"` }}
                >
                  <span className="sr-only">
                    {item.target}
                    {item.suffix}
                  </span>
                </p>

                {/* Label */}
                <p className="mt-2 text-[11px] md:text-xs uppercase tracking-[0.18em] font-bold text-footer/80">
                  {item.label}
                </p>

                {/* Hover accent line */}
                <span className="absolute top-0 right-0 w-16 h-0.5 bg-primary/80 group-hover:w-full transition-all duration-700" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}