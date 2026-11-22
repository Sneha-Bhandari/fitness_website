import Link from "next/link";
import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiYoutube,
  FiMapPin,
  FiPhone,
  FiMail,
  FiArrowUpRight,
} from "react-icons/fi";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Team", href: "/team" },
  { name: "Branches", href: "/branches" },
  { name: "Contact", href: "/contact" },
];

const programLinks = [
  { name: "Strength Training", href: "/programs" },
  { name: "Cardio & Conditioning", href: "/programs" },
  { name: "HIIT & CrossFit", href: "/programs" },
  { name: "Personal Training", href: "/programs" },
  { name: "Yoga & Mobility", href: "/programs" },
  { name: "Group Classes", href: "/programs" },
];

const socials = [
  { icon: FiFacebook, href: "https://facebook.com", label: "Facebook" },
  { icon: FiInstagram, href: "https://instagram.com", label: "Instagram" },
  { icon: FiTwitter, href: "https://twitter.com", label: "Twitter" },
  { icon: FiYoutube, href: "https://youtube.com", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-footer text-white">
      {/* Decorative glow */}

      <div className="relative w-11/12 mx-auto pb-6 pt-12">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <span className="grid place-items-center w-9 h-9 rounded-full bg-primary text-white font-black text-sm">
                IP
              </span>
              <span className="text-secondary font-black text-lg tracking-widest uppercase">
                Iron<span className="text-primary">Pulse</span>
              </span>
            </Link>

            <p className="text-secondary text-sm leading-relaxed mb-5">
              More than a gym — a community built on discipline, results, and
              support. Train hard, live strong.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-2">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="grid place-items-center w-9 h-9 rounded-full bg-secondary text-black hover:bg-primary hover:text-secondary transition-colors duration-300"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-secondary font-semibold uppercase tracking-[0.18em] text-md mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-secondary/90 text-sm hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-secondary font-semibold uppercase tracking-[0.18em] text-md mb-4">
              Programs
            </h3>
            <ul className="space-y-2">
              {programLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-secondary/90 text-sm hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-secondary font-semibold uppercase tracking-[0.18em] text-md mb-4">
              Get In Touch
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FiMapPin size={16} className="text-primary shrink-0 mt-0.5" />
                <span className="text-secondary/90 text-sm leading-relaxed">
                  123 Iron Street, Kathmandu, Nepal
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FiPhone size={16} className="text-primary shrink-0 mt-0.5" />
                <a
                  href="tel:+9779800000000"
                  className="text-secondary/90 text-sm hover:text-primary transition-colors duration-300"
                >
                  +977 980 000 0000
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FiMail size={16} className="text-primary shrink-0 mt-0.5" />
                <a
                  href="mailto:hello@ironpulse.com"
                  className="text-secondary/90 text-sm hover:text-primary transition-colors duration-300"
                >
                  hello@ironpulse.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-secondary/50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-secondary/90 text-xs">
            © {new Date().getFullYear()} IronPulse Fitness. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="/privacy"
              className="text-secondary/90 text-xs hover:text-primary transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-secondary/90 text-xs hover:text-primary transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}