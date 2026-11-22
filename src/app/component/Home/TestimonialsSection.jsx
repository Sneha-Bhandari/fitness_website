import Link from "next/link";
import Image from "next/image";
import { FiStar, FiArrowRight } from "react-icons/fi";

const testimonials = [
  {
    id: 1,
    name: "Aarav Sharma",
    role: "Member since 2022",
    result: "Lost 18 kg",
    rating: 5,
    image: "/images/userone.jpg",
    quote:
      "The coaches here don't just count reps — they rebuild how you think about training. I dropped 18 kg in 8 months and finally feel strong, not just lighter.",
  },
  {
    id: 2,
    name: "Priya Thapa",
    role: "Member since 2023",
    result: "First half-marathon",
    rating: 5,
    image: "/images/usertwo.jpg",
    quote:
      "I signed up to get fit and ended up running my first half-marathon. The conditioning program and the community around it made the difference.",
  },
  {
    id: 3,
    name: "Rohan Gurung",
    role: "Member since 2021",
    result: "Deadlift 200 kg",
    rating: 5,
    image: "/images/human1.jpg",
    quote:
      "Three years in and the strength program still challenges me every week. Coaching is personal, form checks are real, and the vibe keeps you coming back.",
  },
  {
    id: 4,
    name: "Sneha Karki",
    role: "Member since 2023",
    result: "Post-pregnancy comeback",
    rating: 5,
    image: "/images/human1.jpg",
    quote:
      "Returning after pregnancy felt overwhelming, but the team built a plan around my pace. I'm stronger now than before — and my energy with my kid is night and day.",
  },
  {
    id: 5,
    name: "Kiran Adhikari",
    role: "Member since 2022",
    result: "Gained 8 kg muscle",
    rating: 5,
    image: "/images/human1.jpg",
    quote:
      "I was the guy who 'couldn't gain weight.' Two years of structured programming and honest nutrition coaching later, I'm up 8 kg of lean muscle.",
  },
  {
    id: 6,
    name: "Maya Rai",
    role: "Member since 2024",
    result: "First pull-up",
    rating: 5,
    image: "/images/human1.jpg",
    quote:
      "Small wins matter. My first unassisted pull-up was celebrated like a PR by the whole floor. That kind of support is why I stay.",
  },
];

export default function TestimonialsSection() {
  const preview = testimonials.slice(0, 3);

  return (
    <section className="relative overflow-hidden bg-primary/40 py-16">
      <div className="relative w-11/12 mx-auto">
        {/* Heading */}
        <div className="flex flex-col mb-8">
          <div>
            <span className="inline-flex items-center gap-2 bg-primary/15 border border-primary/40 text-primary text-[11px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full mb-3">
              Testimonials
            </span>
            <h2 className="text-4xl font-medium uppercase leading-tight tracking-tight text-footer">
              Real People. <span className="text-primary">Real Results.</span>
            </h2>
          </div>
          <p className="text-footer/90 max-w-3xl text-sm leading-relaxed">
            Members don&apos;t just stay — they transform. Here&apos;s what a
            few of them have to say about training with us.
          </p>
        </div>

        {/* Cards grid — 3 previews */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-4">
          {preview.map((t) => (
            <div
              key={t.id}
              className="group relative flex flex-col bg-white/80 border border-secondary/40 rounded-xl p-5 md:p-6 transition-all duration-500 hover:border-primary/40 hover:shadow-md hover:-translate-y-1"
            >
              {/* Top row — avatar + name + rating */}
              <div className="flex items-start gap-3 mb-4">
                {/* Avatar */}
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary/30 shrink-0 bg-secondary/40">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    sizes="48px"
                    className="object-cover object-center"
                  />
                </div>

                {/* Name + role */}
                <div className="min-w-0 flex-1 mt-3">
                  <p className="text-sm font-black uppercase tracking-tight text-footer truncate">
                    {t.name}
                  </p>
                  <p className="text-[11px] uppercase tracking-[0.18em] font-bold text-footer/50 mt-0.5">
                    {t.role}
                  </p>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-0.5 text-yellow-500 shrink-0 ">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <FiStar key={i} size={16} fill="currentColor" />
                  ))}
                </div>
              </div>

              {/* Quote */}
              <p className="text-footer/70 text-xs md:text-sm leading-relaxed mb-5 flex-1 line-clamp-4">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Result tag */}
              <div className="pt-4 border-t border-secondary/40">
                <span className="inline-flex bg-primary/10 text-primary text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full">
                  {t.result}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View More — centered CTA after 3 cards */}
        <div className="mt-10 text-center">
          <Link
            href="/testimonials"
            className="inline-flex items-center gap-2 bg-primary text-white font-black uppercase tracking-wider text-sm px-8 py-4 rounded-full hover:bg-footer transition-colors shadow-lg shadow-primary/20"
          >
            View All Testimonials <FiArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}