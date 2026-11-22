"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    id: "1",
    title: "Do I need prior gym experience to join?",
    description:
      "<p>Not at all. Every new member gets a free orientation session with a coach who walks you through equipment, form basics, and a starter plan tailored to your level.</p>",
  },
  {
    id: "2",
    title: "Can I freeze or cancel my membership?",
    description:
      "<p>Yes. You can <strong>freeze for up to 2 months per year</strong> at no cost, or cancel anytime with 30 days' notice. No hidden fees, ever.</p>",
  },
  {
    id: "3",
    title: "Is personal training included in the membership?",
    description:
      "<p>Group classes are included in all plans. <strong>One-on-one personal training</strong> is an add-on, billed per session or as a monthly package.</p>",
  },
  {
    id: "4",
    title: "What are your opening hours?",
    description:
      "<p>All branches are open <strong>24/7 for members</strong> with keycard access. Staffed hours are 6 AM – 10 PM daily for onboarding and support.</p>",
  },
  {
    id: "5",
    title: "Do you offer nutrition guidance?",
    description:
      "<p>Yes. Our certified nutrition coaches build custom meal plans based on your goals and body metrics. Included in <strong>Pro and Elite</strong> plans.</p>",
  },
  {
    id: "6",
    title: "Can I access all branches with one membership?",
    description:
      "<p>The <strong>Pro and Elite</strong> plans include access to all 8 branches nationwide. The Basic plan is limited to your home branch.</p>",
  },
];

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div
      className={`group bg-secondary/20 border rounded-xl overflow-hidden transition-all duration-500 ${
        isOpen
          ? "bg-white border-primary/30 shadow-sm"
          : "border-primary/10 hover:bg-secondary/30 hover:border-primary/20"
      }`}
    >
      {/* Question — dark footer color */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full px-6 py-4 flex items-center justify-between gap-4 text-left cursor-pointer"
      >
        <span className="font-medium text-footer text-md">
          {item.title}
        </span>
        <span
          className={`shrink-0 grid place-items-center w-8 h-8 rounded-full transition-all duration-700 ${
            isOpen
              ? "bg-primary text-white rotate-180"
              : "bg-white text-primary rotate-0"
          }`}
        >
          <ChevronDown className="h-4 w-4" />
        </span>
      </button>

      {/* Answer — animated smooth open/close via grid-template-rows */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-5 border-t pt-2 border-gray-200">
            {/* Answer — olive primary color */}
            <div
              dangerouslySetInnerHTML={{ __html: item.description }}
              className="text-gray-900 text-xs md:text-sm tracking-wide [&>p]:mb-2 last:[&>p]:mb-0 [&>strong]:text-accent [&>strong]:font-semibold"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FaqSection() {
  const [openId, setOpenId] = useState(null);

  if (!faqs.length) return null;

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section className="relative overflow-hidden bg-gray-50 py-8">
      <div className="relative w-11/12 mx-auto max-w-5xl">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary text-[11px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-4xl font-medium uppercase leading-tight tracking-tight text-footer mb-1">
            Frequently <span className="text-accent">Asked</span>
          </h2>
          <p className="text-footer/60 text-sm leading-relaxed max-w-md mx-auto">
            Everything you need to know before your first session. Can&apos;t
            find your answer? Our team is one message away.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((item) => (
            <FaqItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => toggle(item.id)}
            />
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-xs text-footer/50 mt-10">
          Still have questions?{" "}
          <a
            href="/contact"
            className="text-primary hover:underline font-semibold"
          >
            Contact us
          </a>{" "}
          and we&apos;ll be happy to help.
        </p>
      </div>
    </section>
  );
}