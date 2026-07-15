import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, type ReactNode } from "react";

// ── Lucide Icons (inline SVG wrappers for consistency) ──────────────────────

function ScissorsIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <line x1="8.12" y1="8.12" x2="15.88" y2="15.88" />
      <line x1="15.88" y1="8.12" x2="8.12" y2="15.88" />
    </svg>
  );
}

function PaletteIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="13.5" cy="6.5" r="0.5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r="0.5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r="0.5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r="0.5" fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.93 0 1.5-.5 1.5-1.5 0-.4-.15-.8-.4-1.1-.25-.3-.4-.7-.4-1.1 0-.93.5-1.5 1.5-1.5h2c3.3 0 6-2.7 6-6C22 6.5 17.5 2 12 2z" />
    </svg>
  );
}

function SparklesIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063A2 2 0 0 0 14.063 15.5l-1.582 6.135a.5.5 0 0 1-.963 0z" />
    </svg>
  );
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function RazorIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M9 2h6l1 7H8Z" />
      <path d="M8 9s-4 2-4 5c0 1.5 1 3 3 4 1.3.6 3 1 5 1s3.7-.4 5-1c2-1 3-2.5 3-4 0-3-4-5-4-5" />
      <path d="M12 9v8" />
    </svg>
  );
}

function SpaIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 22c-4-3-8-7-8-12 0-3 2-5 5-5 1.5 0 3 .7 4 1.8 0-1.1.5-1.8 1-2.3" />
      <path d="M12 22c4-3 8-7 8-12 0-3-2-5-5-5-1.5 0-3 .7-4 1.8" />
    </svg>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="18" x2="20" y2="18" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

// ── Navigation ──────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-velvet-black/80 backdrop-blur-2xl border-b border-velvet-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 sm:px-10 lg:px-16 h-20">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <span className="w-8 h-8 rounded-full gradient-gold flex items-center justify-center">
            <span className="text-velvet-black font-bold text-sm">V</span>
          </span>
          <span className="font-display text-xl tracking-wide text-velvet-cream group-hover:text-velvet-gold transition-colors duration-300">
            Velvet
            <span className="text-velvet-gold"> Studio</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-velvet-muted hover:text-velvet-cream transition-colors duration-300 tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 px-6 py-2.5 text-sm font-medium text-velvet-black gradient-gold rounded-full hover:opacity-90 transition-opacity duration-300 tracking-wide"
          >
            Book Appointment
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-velvet-cream p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <XIcon className="w-6 h-6" />
          ) : (
            <MenuIcon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`lg:hidden transition-all duration-400 overflow-hidden ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-velvet-black/95 backdrop-blur-2xl border-b border-velvet-border px-6 py-6 space-y-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm text-velvet-muted hover:text-velvet-cream transition-colors duration-300 tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="block w-full text-center mt-4 px-6 py-3 text-sm font-medium text-velvet-black gradient-gold rounded-full tracking-wide"
          >
            Book Appointment
          </a>
        </div>
      </div>
    </header>
  );
}

// ── Hero Section ────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-velvet-gold/3 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-velvet-gold/2 blur-[100px]" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-white/[0.02] blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto section-padding pt-32 pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-velvet-border">
              <span className="w-1.5 h-1.5 rounded-full bg-velvet-gold animate-pulse" />
              <span className="text-xs text-velvet-gold tracking-widest uppercase">
                Premium Salon & Beauty Studio
              </span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] tracking-tight text-balance">
              Where Style
              <br />
              Meets{" "}
              <span className="gradient-text">Elegance</span>
            </h1>

            <p className="text-lg sm:text-xl text-velvet-muted max-w-lg leading-relaxed">
              Experience premium beauty, expert styling, and a modern salon
              atmosphere designed around you.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact"
                className="px-8 py-3.5 text-sm font-medium text-velvet-black gradient-gold rounded-full hover:opacity-90 transition-all duration-300 tracking-wide shadow-lg shadow-velvet-gold/10"
              >
                Book Appointment
              </a>
              <a
                href="#services"
                className="px-8 py-3.5 text-sm font-medium text-velvet-cream border border-velvet-border rounded-full hover:bg-white/[0.04] transition-all duration-300 tracking-wide"
              >
                View Services
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-8 pt-8 border-t border-velvet-border">
              <div>
                <p className="text-2xl font-bold text-velvet-cream">8+</p>
                <p className="text-xs text-velvet-muted tracking-wide">Years</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-velvet-cream">500+</p>
                <p className="text-xs text-velvet-muted tracking-wide">
                  Clients
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-velvet-cream">4.9</p>
                <p className="text-xs text-velvet-muted tracking-wide">
                  Rating
                </p>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="relative lg:block">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-velvet-dark gold-border glow-gold">
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=85&auto=format&fit=crop"
                alt="Luxury salon interior"
                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-700"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velvet-black/60 via-transparent to-transparent" />
              {/* Decorative gold accent */}
              <div className="absolute top-6 right-6 w-16 h-16 rounded-full bg-velvet-gold/10 border border-velvet-gold/20 backdrop-blur-sm flex items-center justify-center">
                <SparklesIcon className="w-6 h-6 text-velvet-gold" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[10px] text-velvet-muted tracking-widest uppercase">
          Scroll
        </span>
        <ChevronDown className="w-4 h-4 text-velvet-gold" />
      </div>
    </section>
  );
}

// ── Services Section ────────────────────────────────────────────────────────

const SERVICES = [
  {
    icon: ScissorsIcon,
    title: "Hair Styling",
    desc: "Expert cuts, blow-dries, and styling tailored to your unique look and personality.",
  },
  {
    icon: PaletteIcon,
    title: "Hair Coloring",
    desc: "Premium balayage, highlights, and custom color treatments using luxury products.",
  },
  {
    icon: SparklesIcon,
    title: "Facial & Skincare",
    desc: "Rejuvenating facials and advanced skincare treatments for a radiant complexion.",
  },
  {
    icon: HeartIcon,
    title: "Bridal Makeup",
    desc: "Bridal beauty packages designed to make your special day unforgettable.",
  },
  {
    icon: RazorIcon,
    title: "Beard & Grooming",
    desc: "Precision beard shaping and grooming services for the modern gentleman.",
  },
  {
    icon: SpaIcon,
    title: "Spa & Relaxation",
    desc: "Luxury spa treatments including head massages and aromatherapy sessions.",
  },
];

function Services() {
  return (
    <section id="services" className="section-spacing relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-velvet-gold/[0.02] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto section-padding">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs text-velvet-gold tracking-[0.2em] uppercase">
            Our Expertise
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-4 text-velvet-cream">
            Premium Services
          </h2>
          <p className="text-velvet-muted mt-4 text-lg leading-relaxed">
            From classic cuts to luxury treatments — every service is crafted
            with precision and care.
          </p>
        </div>

        {/* Service cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-velvet-border rounded-2xl overflow-hidden">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="group bg-velvet-black p-8 sm:p-10 transition-all duration-500 hover:bg-velvet-dark relative"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-velvet-gold/[0.03] to-transparent" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-velvet-gold/10 border border-velvet-gold/20 flex items-center justify-center mb-6 group-hover:bg-velvet-gold/20 group-hover:border-velvet-gold/30 transition-all duration-500">
                  <service.icon className="w-5 h-5 text-velvet-gold" />
                </div>
                <h3 className="font-display text-xl font-semibold text-velvet-cream mb-3 group-hover:text-velvet-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-velvet-muted leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── About Section ───────────────────────────────────────────────────────────

const STATS = [
  { value: "8+", label: "Years of Experience" },
  { value: "12", label: "Professional Stylists" },
  { value: "300+", label: "Happy Clients Monthly" },
  { value: "Modern", label: "State-of-the-Art Equipment" },
];

function About() {
  return (
    <section className="section-spacing relative">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-velvet-dark gold-border glow-gold">
              <img
                src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800&q=85&auto=format&fit=crop"
                alt="Professional stylist at work"
                className="w-full h-full object-cover opacity-90"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velvet-black/50 via-transparent to-transparent" />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-6 lg:-bottom-8 lg:-right-8 bg-velvet-dark/90 backdrop-blur-xl gold-border rounded-xl p-5 lg:p-6 glow-gold-sm">
              <p className="font-display text-2xl lg:text-3xl font-bold gradient-text">
                4.9 ★
              </p>
              <p className="text-xs text-velvet-muted mt-1 tracking-wide">
                Average Client Rating
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <span className="text-xs text-velvet-gold tracking-[0.2em] uppercase">
              About Us
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-velvet-cream leading-tight">
              Where Craftsmanship
              <br />
              Meets{" "}
              <span className="gradient-text">Luxury</span>
            </h2>
            <p className="text-velvet-muted text-lg leading-relaxed">
              At Velvet Studio, we believe every visit should be an experience.
              Our team of expert stylists combines technical precision with
              artistic vision to create looks that are as unique as you are.
            </p>
            <p className="text-velvet-muted leading-relaxed">
              From the moment you step through our doors, you're welcomed into a
              space designed for relaxation and transformation. We use only the
              finest products and cutting-edge techniques to ensure every result
              exceeds expectations.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-glass rounded-xl p-5 text-center"
                >
                  <p className="font-display text-2xl font-bold gradient-text">
                    {stat.value}
                  </p>
                  <p className="text-xs text-velvet-muted mt-1 tracking-wide">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Gallery Section ─────────────────────────────────────────────────────────

const GALLERY_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=85&auto=format&fit=crop",
    alt: "Luxury salon interior with elegant decor",
  },
  {
    src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=85&auto=format&fit=crop",
    alt: "Professional hairstylist at work",
  },
  {
    src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=85&auto=format&fit=crop",
    alt: "Hair styling session",
  },
  {
    src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=85&auto=format&fit=crop",
    alt: "Beauty treatment in progress",
  },
  {
    src: "https://images.unsplash.com/photo-1596728325488-58c87691e9af?w=600&q=85&auto=format&fit=crop",
    alt: "Elegant reception area",
  },
  {
    src: "https://images.unsplash.com/photo-1560840067-ddcaeb7831d2?w=600&q=85&auto=format&fit=crop",
    alt: "Modern salon equipment",
  },
  {
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&q=85&auto=format&fit=crop",
    alt: "Salon treatment room",
  },
  {
    src: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=85&auto=format&fit=crop",
    alt: "Professional makeup session",
  },
];

function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="gallery" className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-velvet-gold/[0.015] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto section-padding">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs text-velvet-gold tracking-[0.2em] uppercase">
            Our Studio
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-4 text-velvet-cream">
            Gallery
          </h2>
          <p className="text-velvet-muted mt-4 text-lg leading-relaxed">
            A glimpse into the Velvet Studio experience — where every detail
            matters.
          </p>
        </div>

        {/* Masonry-like grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {GALLERY_IMAGES.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelected(idx)}
              className={`group relative overflow-hidden rounded-xl bg-velvet-dark gold-border cursor-pointer ${
                idx === 0 || idx === 7
                  ? "col-span-2 row-span-2"
                  : "col-span-1 row-span-1"
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-velvet-black/0 group-hover:bg-velvet-black/40 transition-all duration-500 flex items-center justify-center">
                <span className="text-white/0 group-hover:text-white/80 text-sm tracking-wide transition-all duration-500">
                  View
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 bg-velvet-black/95 backdrop-blur-xl flex items-center justify-center p-6 cursor-pointer"
          onClick={() => setSelected(null)}
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute top-6 right-6 text-velvet-cream/60 hover:text-velvet-cream transition-colors"
            aria-label="Close"
          >
            <XIcon className="w-8 h-8" />
          </button>
          <img
            src={GALLERY_IMAGES[selected].src}
            alt={GALLERY_IMAGES[selected].alt}
            className="max-w-full max-h-[90vh] object-contain rounded-2xl"
          />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {GALLERY_IMAGES.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelected(idx);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === selected
                    ? "bg-velvet-gold w-6"
                    : "bg-velvet-cream/20 hover:bg-velvet-cream/40"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

// ── Testimonials Section ────────────────────────────────────────────────────

const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    role: "Regular Client",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80&auto=format&fit=crop",
    text: "Velvet Studio transformed my hair completely. The team's attention to detail is unmatched — they listened to exactly what I wanted and delivered beyond my expectations. The ambiance is absolutely stunning.",
    rating: 5,
  },
  {
    name: "Arjun Mehta",
    role: "Grooming Client",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80&auto=format&fit=crop",
    text: "Finally found a salon that understands modern men's grooming. The beard shaping is precise, and the facial treatments are incredibly refreshing. The gold-standard service keeps me coming back.",
    rating: 5,
  },
  {
    name: "Ananya Patel",
    role: "Bridal Client",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80&auto=format&fit=crop",
    text: "My wedding day was perfect thanks to Velvet Studio. The bridal makeup was flawless and lasted all night. Every stylist was professional, warm, and made me feel like royalty. Highly recommend!",
    rating: 5,
  },
];

function Testimonials() {
  return (
    <section id="reviews" className="section-spacing relative">
      <div className="max-w-7xl mx-auto section-padding">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs text-velvet-gold tracking-[0.2em] uppercase">
            Testimonials
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-4 text-velvet-cream">
            What Our Clients Say
          </h2>
          <p className="text-velvet-muted mt-4 text-lg leading-relaxed">
            Don't take our word for it — hear from the people who trust us with
            their style.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-glass rounded-2xl p-8 lg:p-10 flex flex-col gap-6 hover:bg-white/[0.05] transition-all duration-500 gold-border"
            >
              {/* Quote icon */}
              <QuoteIcon className="w-8 h-8 text-velvet-gold/30" />

              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4 text-velvet-gold" />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm text-velvet-muted leading-relaxed flex-1">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-2 border-t border-velvet-border">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-velvet-gold/20"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-medium text-velvet-cream">
                    {t.name}
                  </p>
                  <p className="text-xs text-velvet-muted">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Hours & Contact Section ─────────────────────────────────────────────────

const HOURS = [
  { day: "Monday – Saturday", hours: "9:00 AM – 8:00 PM" },
  { day: "Sunday", hours: "10:00 AM – 5:00 PM" },
];

function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="section-spacing relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-velvet-gold/[0.02] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto section-padding">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs text-velvet-gold tracking-[0.2em] uppercase">
            Get in Touch
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-4 text-velvet-cream">
            Book Your Experience
          </h2>
          <p className="text-velvet-muted mt-4 text-lg leading-relaxed">
            Ready to transform your look? Reach out and let us create something
            beautiful together.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left: Contact info & hours */}
          <div className="lg:col-span-2 space-y-10">
            {/* Opening hours */}
            <div className="bg-glass rounded-2xl p-8 gold-border">
              <div className="flex items-center gap-3 mb-6">
                <ClockIcon className="w-5 h-5 text-velvet-gold" />
                <h3 className="font-display text-lg font-semibold text-velvet-cream">
                  Opening Hours
                </h3>
              </div>
              <div className="space-y-4">
                {HOURS.map((h) => (
                  <div
                    key={h.day}
                    className="flex justify-between items-center pb-4 border-b border-velvet-border last:border-0 last:pb-0"
                  >
                    <span className="text-sm text-velvet-muted">{h.day}</span>
                    <span className="text-sm font-medium text-velvet-cream">
                      {h.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact details */}
            <div className="bg-glass rounded-2xl p-8 gold-border space-y-6">
              <h3 className="font-display text-lg font-semibold text-velvet-cream">
                Contact Info
              </h3>

              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-lg bg-velvet-gold/10 border border-velvet-gold/20 flex items-center justify-center group-hover:bg-velvet-gold/20 transition-colors">
                  <PhoneIcon className="w-4 h-4 text-velvet-gold" />
                </div>
                <div>
                  <p className="text-xs text-velvet-muted">Phone</p>
                  <p className="text-sm text-velvet-cream group-hover:text-velvet-gold transition-colors">
                    +91 9876543210
                  </p>
                </div>
              </a>

              <a
                href="mailto:hello@velvetstudio.com"
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-lg bg-velvet-gold/10 border border-velvet-gold/20 flex items-center justify-center group-hover:bg-velvet-gold/20 transition-colors">
                  <MailIcon className="w-4 h-4 text-velvet-gold" />
                </div>
                <div>
                  <p className="text-xs text-velvet-muted">Email</p>
                  <p className="text-sm text-velvet-cream group-hover:text-velvet-gold transition-colors">
                    hello@velvetstudio.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-velvet-gold/10 border border-velvet-gold/20 flex items-center justify-center">
                  <MapPinIcon className="w-4 h-4 text-velvet-gold" />
                </div>
                <div>
                  <p className="text-xs text-velvet-muted">Address</p>
                  <p className="text-sm text-velvet-cream">
                    24 Residency Road
                    <br />
                    Bengaluru, India
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp button */}
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-[#25D366]/10 border border-[#25D366]/20 rounded-xl text-[#25D366] hover:bg-[#25D366]/20 transition-all duration-300 group"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span className="text-sm font-medium tracking-wide">
                Chat on WhatsApp
              </span>
            </a>

            {/* Social links */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/[0.04] border border-velvet-border flex items-center justify-center text-velvet-muted hover:text-velvet-gold hover:border-velvet-gold/30 transition-all duration-300"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/[0.04] border border-velvet-border flex items-center justify-center text-velvet-muted hover:text-velvet-gold hover:border-velvet-gold/30 transition-all duration-300"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/[0.04] border border-velvet-border flex items-center justify-center text-velvet-muted hover:text-velvet-gold hover:border-velvet-gold/30 transition-all duration-300"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right: Form & Map */}
          <div className="lg:col-span-3 space-y-8">
            {/* Contact form */}
            <div className="bg-glass rounded-2xl p-8 lg:p-10 gold-border">
              <h3 className="font-display text-xl font-semibold text-velvet-cream mb-6">
                Send a Message
              </h3>

              {submitted ? (
                <div className="flex items-center gap-3 py-8 text-velvet-gold">
                  <CheckIcon className="w-6 h-6" />
                  <p className="text-lg">
                    Thank you! We'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <input
                      type="text"
                      placeholder="Your Name"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="w-full px-5 py-3.5 bg-velvet-black/60 border border-velvet-border rounded-xl text-sm text-velvet-cream placeholder:text-velvet-muted/50 focus:outline-none focus:border-velvet-gold/40 focus:ring-1 focus:ring-velvet-gold/20 transition-all duration-300"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="w-full px-5 py-3.5 bg-velvet-black/60 border border-velvet-border rounded-xl text-sm text-velvet-cream placeholder:text-velvet-muted/50 focus:outline-none focus:border-velvet-gold/40 focus:ring-1 focus:ring-velvet-gold/20 transition-all duration-300"
                    />
                  </div>
                  <input
                    type="tel"
                    placeholder="Phone Number (Optional)"
                    value={formState.phone}
                    onChange={(e) =>
                      setFormState({ ...formState, phone: e.target.value })
                    }
                    className="w-full px-5 py-3.5 bg-velvet-black/60 border border-velvet-border rounded-xl text-sm text-velvet-cream placeholder:text-velvet-muted/50 focus:outline-none focus:border-velvet-gold/40 focus:ring-1 focus:ring-velvet-gold/20 transition-all duration-300"
                  />
                  <textarea
                    placeholder="Tell us what you're looking for..."
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full px-5 py-3.5 bg-velvet-black/60 border border-velvet-border rounded-xl text-sm text-velvet-cream placeholder:text-velvet-muted/50 focus:outline-none focus:border-velvet-gold/40 focus:ring-1 focus:ring-velvet-gold/20 transition-all duration-300 resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full px-8 py-3.5 text-sm font-medium text-velvet-black gradient-gold rounded-xl hover:opacity-90 transition-all duration-300 tracking-wide shadow-lg shadow-velvet-gold/10"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Map placeholder */}
            <div className="bg-glass rounded-2xl overflow-hidden gold-border h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.905800524939!2d77.5965!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzUnNDcuNCJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(1) invert(0.9)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Velvet Studio Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Footer ──────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="border-t border-velvet-border">
      <div className="max-w-7xl mx-auto section-padding py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand */}
          <div className="space-y-4">
            <a href="#home" className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-full gradient-gold flex items-center justify-center">
                <span className="text-velvet-black font-bold text-xs">V</span>
              </span>
              <span className="font-display text-lg text-velvet-cream">
                Velvet <span className="text-velvet-gold">Studio</span>
              </span>
            </a>
            <p className="text-sm text-velvet-muted leading-relaxed max-w-xs">
              Where style meets elegance. Premium beauty and grooming
              experiences crafted for the discerning client.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs text-velvet-gold tracking-[0.15em] uppercase mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-velvet-muted hover:text-velvet-cream transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs text-velvet-gold tracking-[0.15em] uppercase mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {SERVICES.slice(0, 5).map((s) => (
                <li key={s.title}>
                  <a
                    href="#services"
                    className="text-sm text-velvet-muted hover:text-velvet-cream transition-colors duration-300"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs text-velvet-gold tracking-[0.15em] uppercase mb-5">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+919876543210"
                  className="text-sm text-velvet-muted hover:text-velvet-cream transition-colors"
                >
                  +91 9876543210
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@velvetstudio.com"
                  className="text-sm text-velvet-muted hover:text-velvet-cream transition-colors"
                >
                  hello@velvetstudio.com
                </a>
              </li>
              <li>
                <p className="text-sm text-velvet-muted">
                  24 Residency Road
                  <br />
                  Bengaluru, India
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-velvet-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-velvet-muted">
            &copy; {new Date().getFullYear()} Velvet Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-xs text-velvet-muted hover:text-velvet-cream transition-colors"
            >
              Privacy Policy
            </a>
            <span className="text-velvet-muted/30">|</span>
            <a
              href="#"
              className="text-xs text-velvet-muted hover:text-velvet-cream transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ── Main Page Component ─────────────────────────────────────────────────────

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <main className="min-h-screen bg-velvet-black">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Testimonials />
      <ContactSection />
      <Footer />
    </main>
  );
}