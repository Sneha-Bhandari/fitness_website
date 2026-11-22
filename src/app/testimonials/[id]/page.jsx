import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FiStar, FiArrowLeft, FiArrowRight } from "react-icons/fi";

const testimonials = [
  {
    id: "aarav-sharma",
    name: "Aarav Sharma",
    role: "Member since 2022",
    result: "Lost 18 kg",
    rating: 5,
    image: "/images/userone.jpg",
    quote:
      "The coaches here don't just count reps — they rebuild how you think about training. I dropped 18 kg in 8 months and finally feel strong, not just lighter.",
  },
  {
    id: "priya-thapa",
    name: "Priya Thapa",
    role: "Member since 2023",
    result: "First half-marathon",
    rating: 5,
    image: "/images/usertwo.jpg",
    quote:
      "I signed up to get fit and ended up running my first half-marathon. The conditioning program and the community around it made the difference.",
  },
  {
    id: "rohan-gurung",
    name: "Rohan Gurung",
    role: "Member since 2021",
    result: "Deadlift 200 kg",
    rating: 5,
    image: "/images/human1.jpg",
    quote:
      "Three years in and the strength program still challenges me every week. Coaching is personal, form checks are real, and the vibe keeps you coming back.",
  },
  {
    id: "sneha-karki",
    name: "Sneha Karki",
    role: "Member since 2023",
    result: "Post-pregnancy comeback",
    rating: 5,
    image: "/images/human1.jpg",
    quote:
      "Returning after pregnancy felt overwhelming, but the team built a plan around my pace. I'm stronger now than before — and my energy with my kid is night and day.",
  },
  {
    id: "kiran-adhikari",
    name: "Kiran Adhikari",
    role: "Member since 2022",
    result: "Gained 8 kg muscle",
    rating: 5,
    image: "/images/human1.jpg",
    quote:
      "I was the guy who 'couldn't gain weight.' Two years of structured programming and honest nutrition coaching later, I'm up 8 kg of lean muscle.",
  },
  {
    id: "maya-rai",
    name: "Maya Rai",
    role: "Member since 2024",
    result: "First pull-up",
    rating: 5,
    image: "/images/human1.jpg",
    quote:
      "Small wins matter. My first unassisted pull-up was celebrated like a PR by the whole floor. That kind of support is why I stay.",
  },
];

// Pre-render all static paths at build time
export function generateStaticParams() {
  return testimonials.map((t) => ({ id: t.id }));
}

// Per-testimonial SEO metadata
export async function generateMetadata({ params }) {
  const { id } = await params;
  const testimonial = testimonials.find((t) => t.id === id);

  if (!testimonial) {
    return { title: "Testimonial Not Found | IronPulse Fitness" };
  }

  return {
    title: `${testimonial.name} — ${testimonial.result} | IronPulse Fitness`,
    description: testimonial.quote,
  };
}

export default async function TestimonialDetailPage({ params }) {
  const { id } = await params;
  const testimonial = testimonials.find((t) => t.id === id);

  if (!testimonial) notFound();

  // Previous / next navigation (wraps around)
  const currentIndex = testimonials.findIndex((t) => t.id === id);
  const prev =
    testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length];
  const next = testimonials[(currentIndex + 1) % testimonials.length];

  return (
    <main className="bg-primary/40">
      {/* Top banner */}
      <section className="relative overflow-hidden bg-footer text-secondary py-8">
        <div className="absolute -top-32 left-1/3 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

        <div className="relative w-11/12 mx-auto">
          <Link
            href="/testimonials"
            className="inline-flex items-center gap-2 text-secondary/60 text-xs uppercase tracking-wider hover:text-primary transition-colors mb-6"
          >
            <FiArrowLeft size={14} /> All Testimonials
          </Link>

          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-primary/40 shrink-0 bg-secondary/40">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                fill
                sizes="96px"
                className="object-cover object-center"
                priority
              />
            </div>

            <div>
              <h1 className="text-3xl md:text-4xl font-black uppercase leading-tight tracking-tight">
                {testimonial.name}
              </h1>
              <p className="text-secondary/60 text-xs uppercase tracking-[0.18em] font-bold mt-1">
                {testimonial.role}
              </p>

              <div className="flex items-center gap-3 mt-3">
                <div className="flex items-center gap-0.5 text-yellow-500">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <FiStar key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <span className="bg-primary/20 text-primary text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full">
                  {testimonial.result}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote body */}
      <section className="py-16">
        <div className="w-11/12 mx-auto max-w-3xl">
          <div className="bg-white/80 border border-secondary/40 rounded-xl p-6">
            <span className="block text-6xl leading-none font-black text-primary/30">
              &ldquo;
            </span>
            <p className="text-footer text-base md:text-md leading-tight text-justify">
              {testimonial.quote}
            </p>

           
          </div>

          {/* Prev / Next */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch gap-3">
            <Link
              href={`/testimonials/${prev.id}`}
              className="flex-1 flex items-center gap-3 bg-white/80 border border-secondary/40 rounded-xl px-5 py-4 hover:border-primary/40 hover:shadow-md transition-all group"
            >
              <FiArrowLeft
                size={16}
                className="text-primary shrink-0 group-hover:-translate-x-0.5 transition-transform"
              />
              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-[0.18em] font-bold text-footer/50">
                  Previous
                </p>
                <p className="text-sm font-black uppercase tracking-tight text-footer truncate">
                  {prev.name}
                </p>
              </div>
            </Link>

            <Link
              href={`/testimonials/${next.id}`}
              className="flex-1 flex items-center justify-end gap-3 bg-white/80 border border-secondary/40 rounded-xl px-5 py-4 hover:border-primary/40 hover:shadow-md transition-all group text-right"
            >
              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-[0.18em] font-bold text-footer/50">
                  Next
                </p>
                <p className="text-sm font-black uppercase tracking-tight text-footer truncate">
                  {next.name}
                </p>
              </div>
              <FiArrowRight
                size={16}
                className="text-primary shrink-0 group-hover:translate-x-0.5 transition-transform"
              />
            </Link>
          </div>

          {/* CTA */}
          <div className="mt-10 text-center">
            <Link
              href="/register"
              className="inline-flex items-center gap-2 bg-primary text-white font-black uppercase tracking-wider text-sm px-8 py-4 rounded-full hover:bg-footer transition-colors shadow-lg shadow-primary/20"
            >
              Start Your Own Story <FiArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}