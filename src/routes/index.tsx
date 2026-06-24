import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import rahulAsset from "@/assets/rahul.png.asset.json";
import introAsset from "@/assets/rahul-intro.webm.asset.json";
import avatarDiwas from "@/assets/avatar-diwas.jpg";
import avatarBinit from "@/assets/avatar-binit.jpg";
import avatarKamal from "@/assets/avatar-kamal.jpg";
const rahulPhoto = rahulAsset.url;
const introVideo = introAsset.url;
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Target,
  ShoppingBag,
  Megaphone,
  Repeat,
  LineChart,
  Search,
  Gauge,
  CheckCircle2,
  Star,
  Mail,
  MessageCircle,
  Facebook,
  Linkedin,
  Instagram,
  MapPin,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const WHATSAPP_URL = "https://wa.me/9779804885935?text=Hi%20Rahul%2C%20I%27d%20like%20to%20book%20a%20free%20consultation.";
const EMAIL = "official.rahulshah@gmail.com";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rahul K Shah — Performance Marketer & Meta Ads Expert" },
      {
        name: "description",
        content:
          "Rahul K Shah helps businesses scale through data-driven Meta advertising. 6+ years, 100+ campaigns, ROI-focused performance marketing. Based in Nepal, serving clients globally.",
      },
      { property: "og:title", content: "Rahul K Shah — Performance Marketer & Meta Ads Expert" },
      {
        property: "og:description",
        content:
          "Scale your business with strategic Meta advertising. Lead generation, e-commerce growth, and ROAS optimization.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Landing,
});

const services = [
  { icon: Target, title: "Meta Ads Management", desc: "Complete campaign planning, setup, management, optimization, and scaling." },
  { icon: Megaphone, title: "Lead Generation Campaigns", desc: "Generate high-quality leads for service-based businesses." },
  { icon: ShoppingBag, title: "E-Commerce Growth", desc: "Increase online sales and maximize return on ad spend." },
  { icon: Sparkles, title: "Brand Awareness Campaigns", desc: "Reach more people and build stronger brand recognition." },
  { icon: Repeat, title: "Retargeting Campaigns", desc: "Turn visitors into customers through advanced remarketing strategies." },
  { icon: Search, title: "Conversion Tracking Setup", desc: "Meta Pixel, Conversion API, Event Tracking, and reporting systems." },
  { icon: BarChart3, title: "Campaign Audits", desc: "Identify performance gaps and opportunities for growth." },
  { icon: Gauge, title: "Performance Optimization", desc: "Improve campaign efficiency, ROI, and ROAS." },
];

const process = [
  { n: "01", title: "Business Analysis", desc: "Deep dive into your offer, margins, and growth goals." },
  { n: "02", title: "Audience Research", desc: "Identify high-intent buyers and segment them by behavior." },
  { n: "03", title: "Campaign Strategy", desc: "Build a structured plan mapped to your funnel." },
  { n: "04", title: "Creative Development & Testing", desc: "Systematic testing of hooks, angles, and formats." },
  { n: "05", title: "Tracking & Optimization", desc: "Pixel, CAPI, and daily performance optimization." },
  { n: "06", title: "Scaling Winning Campaigns", desc: "Scale profitably while protecting ROAS." },
];


const whyChoose = [
  "Data-Driven Decision Making",
  "Continuous Optimization",
  "Transparent Reporting",
  "Proven Marketing Frameworks",
  "Personalized Growth Strategies",
  "ROI & ROAS Focused Execution",
  "Strong Understanding of Customer Behavior",
  "Long-Term Growth Mindset",
  "Up-to-Date with Latest Meta Advertising Changes",
];

const skills = [
  "Meta Ads", "Facebook Ads", "Instagram Ads", "Performance Marketing",
  "Lead Generation", "Audience Research", "Conversion Tracking", "Meta Pixel",
  "Conversion API", "Campaign Scaling", "Creative Testing", "Marketing Analytics",
  "ROAS Optimization", "Sales Funnel Strategy", "Retargeting",
];

const testimonials = [
  {
    quote:
      "Rahul rebuilt our entire Meta ad strategy and the results were immediate. Our cost per order dropped and we finally started scaling profitably online.",
    name: "Diwas",
    role: "Founder, Shoe Hub Nepal",
    photo: avatarDiwas,
  },
  {
    quote:
      "Working with Rahul has been a game changer for Himalayan Feature. His targeting and creative testing brought us a flood of quality engagement at a fraction of the cost.",
    name: "Binit Pokhrel",
    role: "Founder, Himalayan Feature",
    photo: avatarBinit,
  },
  {
    quote:
      "For eTutor, Rahul delivered more student inquiries in 3 weeks than we had managed in months. Clear communication, sharp strategy, and real performance.",
    name: "Kamal Pokhrel",
    role: "Founder, eTutor",
    photo: avatarKamal,
  },
];

const faqs = [
  { q: "Which businesses do you work with?", a: "I work with startups, local businesses, e-commerce brands, personal brands, and service-based businesses." },
  { q: "Do you work internationally?", a: "Yes. I work with both national and international clients." },
  { q: "What platforms do you specialize in?", a: "Facebook and Instagram advertising through the Meta ecosystem." },
  { q: "How do you measure campaign success?", a: "Through performance metrics such as ROI, ROAS, Cost Per Lead, Conversion Rate, and Revenue Growth." },
];

function BrandMark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`relative grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-xl text-background shadow-[var(--shadow-glow)] ${className}`}
      style={{ background: "var(--gradient-brand)" }}
      aria-hidden="true"
    >
      <TrendingUp className="h-5 w-5" strokeWidth={2.6} />
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/25 to-transparent" />
    </span>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <a href="#top" className="flex min-w-0 items-center gap-2.5 font-semibold tracking-tight">
          <BrandMark />
          <span className="flex min-w-0 flex-col leading-none">
            <span className="truncate text-[15px] text-ink">Rahul K Shah</span>
            <span className="mt-1 hidden text-[10px] font-medium uppercase tracking-[0.18em] text-ink-soft sm:inline">
              Performance Marketer
            </span>
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-ink-soft md:flex">
          <a href="#about" className="hover:text-ink transition-colors">About</a>
          <a href="#services" className="hover:text-ink transition-colors">Services</a>
          <a href="#process" className="hover:text-ink transition-colors">Process</a>
          <a href="#faq" className="hover:text-ink transition-colors">FAQ</a>
        </nav>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-sm font-medium text-background transition-transform hover:scale-[1.02]"
        >
          Book a Call <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div className="container-x grid gap-12 py-20 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:py-28">
        <div className="flex flex-col justify-center">
          <span className="eyebrow ring-dot mb-6">Performance Marketer · Meta Ads Expert</span>
          <h1 className="font-display text-5xl leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            Scale Your Business with{" "}
            <em className="italic text-ink-soft">Data-Driven</em> Meta Advertising
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            Helping businesses generate more leads, increase sales, improve ROI, and scale
            profitably through strategic Meta advertising.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-background shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02]"
            >
              Book a Free Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-ink-soft sm:grid-cols-2">
            {[
              "6+ Years Experience",
              "100+ Campaigns Managed",
              "National & International Clients",
              "ROI & ROAS Focused",
            ].map((b) => (
              <li key={b} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-ink" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-surface to-transparent" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border bg-surface shadow-[var(--shadow-card)]">
            <img
              src={rahulPhoto}
              alt="Rahul K Shah — Performance Marketer"
              width={1024}
              height={1280}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-background p-4 shadow-[var(--shadow-card)] sm:block">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-ink text-background">
                <LineChart className="h-5 w-5" />
              </div>
              <div>
                <div className="text-2xl font-bold leading-none text-ink">4.2×</div>
                <div className="mt-1 text-xs text-ink-soft">Avg. Client ROAS</div>
              </div>
            </div>
          </div>
          <div className="absolute -right-4 top-8 hidden rounded-2xl border border-border bg-background p-4 shadow-[var(--shadow-card)] sm:block">
            <div className="text-xs text-ink-soft">Based in</div>
            <div className="mt-1 flex items-center gap-1.5 font-semibold text-ink">
              <MapPin className="h-4 w-4" /> Nepal · Global
            </div>
          </div>
        </div>
      </div>

      <Marquee />
    </section>
  );
}

function Marquee() {
  const items = ["Meta Ads", "Performance Marketing", "Lead Generation", "ROAS Optimization", "Conversion Tracking", "Funnel Strategy", "Creative Testing", "Retargeting"];
  return (
    <div className="border-y border-border bg-background/60 py-5">
      <div className="container-x flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm text-ink-soft">
        {items.map((i, idx) => (
          <span key={i} className="flex items-center gap-10">
            <span className="font-medium tracking-tight">{i}</span>
            {idx < items.length - 1 && <span className="h-1 w-1 rounded-full bg-border" />}
          </span>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <div>
          <span className="eyebrow ring-dot mb-5">About</span>
          <h2 className="font-display text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
            Meet Rahul <em className="italic text-ink-soft">K Shah</em>
          </h2>
          <p className="mt-6 text-ink-soft">
            Performance Marketer & Meta Ads Specialist with 6+ years of hands-on experience
            helping businesses grow through data-driven advertising.
          </p>
          <div className="mt-8 rounded-2xl border border-border bg-surface p-6">
            <div className="text-xs uppercase tracking-widest text-ink-soft">I work with</div>
            <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-ink">
              {["Startups", "Small Businesses", "E-commerce Brands", "Service Businesses", "Personal Brands", "Growing Companies"].map((x) => (
                <li key={x} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-ink" /> {x}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-5 text-lg leading-relaxed text-ink-soft">
          <p>
            My expertise lies in creating, managing, optimizing, and scaling Meta advertising
            campaigns that generate measurable business outcomes. My approach goes beyond
            launching ads — I focus on audience research, creative testing, conversion tracking,
            funnel optimization, performance analysis, and continuous scaling.
          </p>
          <p>
            I believe successful marketing comes from understanding data and customer behavior,
            not guesswork. To stay ahead of industry changes, I continuously update my skills,
            follow platform updates, and adapt campaigns based on real performance metrics.
          </p>
          <p className="text-ink">
            Based in Nepal and working with clients globally, my goal is simple:{" "}
            <span className="font-semibold">help businesses generate sustainable growth</span>{" "}
            through strategic advertising and performance-focused marketing.
          </p>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { v: "6+", l: "Years of Experience" },
    { v: "100+", l: "Campaigns Managed" },
    { v: "12+", l: "Industries Served" },
    { v: "4.2×", l: "Avg. Client ROAS" },
  ];
  return (
    <section className="border-y border-border bg-ink text-background">
      <div className="container-x grid grid-cols-2 gap-px bg-white/10 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.l} className="bg-ink p-8 md:p-10">
            <div className="font-display text-5xl tracking-tight md:text-6xl">{s.v}</div>
            <div className="mt-2 text-sm text-background/70">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="section bg-surface">
      <div className="container-x">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow ring-dot mb-5">Services</span>
            <h2 className="font-display text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
              Services <em className="italic text-ink-soft">I Offer</em>
            </h2>
          </div>
          <p className="max-w-md text-ink-soft">
            End-to-end Meta advertising services built around your business goals, not vanity metrics.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="group flex flex-col gap-4 bg-background p-7 transition-colors hover:bg-surface">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-ink text-background transition-transform group-hover:scale-105">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold tracking-tight text-ink">{s.title}</h3>
                <p className="text-sm leading-relaxed text-ink-soft">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="section">
      <div className="container-x">
        <div className="mb-14 max-w-2xl">
          <span className="eyebrow ring-dot mb-5">Process</span>
          <h2 className="font-display text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
            How I <em className="italic text-ink-soft">Grow Businesses</em>
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {process.map((p) => (
            <div key={p.n} className="group relative rounded-2xl border border-border bg-background p-7 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
              <div className="font-display text-5xl text-ink-soft/40 transition-colors group-hover:text-ink">{p.n}</div>
              <h3 className="mt-4 text-xl font-semibold tracking-tight text-ink">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function WhyMe() {
  return (
    <section className="section">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
        <div>
          <span className="eyebrow ring-dot mb-5">Why Me</span>
          <h2 className="font-display text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
            Why Businesses <em className="italic text-ink-soft">Choose Me</em>
          </h2>
          <p className="mt-6 text-ink-soft">
            A combination of strategy, execution, and obsessive attention to numbers — the
            same approach high-performing brands trust.
          </p>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {whyChoose.map((w) => (
            <li key={w} className="flex items-start gap-3 rounded-xl border border-border bg-background p-4 transition-colors hover:border-ink/30">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-ink" />
              <span className="text-sm font-medium text-ink">{w}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section bg-surface">
      <div className="container-x">
        <div className="mb-10 max-w-2xl">
          <span className="eyebrow ring-dot mb-5">Expertise</span>
          <h2 className="font-display text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
            Skills & <em className="italic text-ink-soft">Tools</em>
          </h2>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {skills.map((s) => (
            <span key={s} className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-ink hover:bg-ink hover:text-background">
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="mb-14 max-w-2xl">
          <span className="eyebrow ring-dot mb-5">Testimonials</span>
          <h2 className="font-display text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
            What Clients <em className="italic text-ink-soft">Say</em>
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="flex flex-col justify-between rounded-3xl border border-border bg-background p-7 shadow-[var(--shadow-card)]">
              <div className="flex gap-0.5 text-ink">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-ink" />
                ))}
              </div>
              <blockquote className="mt-5 text-base leading-relaxed text-ink">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                <img
                  src={t.photo}
                  alt={t.name}
                  loading="lazy"
                  width={80}
                  height={80}
                  className="h-12 w-12 shrink-0 rounded-full object-cover ring-2 ring-border"
                />
                <div className="min-w-0">
                  <div className="truncate font-semibold text-ink">{t.name}</div>
                  <div className="truncate text-sm text-ink-soft">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="section bg-surface">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
        <div>
          <span className="eyebrow ring-dot mb-5">FAQ</span>
          <h2 className="font-display text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
            Frequently Asked <em className="italic text-ink-soft">Questions</em>
          </h2>
          <p className="mt-6 text-ink-soft">
            Still curious? Drop your question through the contact form and I'll get back personally.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-left text-lg font-medium text-ink hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-base text-ink-soft">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="grid gap-4 rounded-3xl border border-border bg-background p-6 shadow-[var(--shadow-card)] sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name"><Input required placeholder="Your full name" /></Field>
        <Field label="Email"><Input required type="email" placeholder="you@company.com" /></Field>
        <Field label="Phone Number"><Input placeholder="+977 ..." /></Field>
        <Field label="Business Name"><Input placeholder="Company / Brand" /></Field>
      </div>
      <Field label="Monthly Advertising Budget">
        <select required className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          <option value="">Select a range</option>
          <option>Under $500</option>
          <option>$500 – $2,000</option>
          <option>$2,000 – $10,000</option>
          <option>$10,000 – $50,000</option>
          <option>$50,000+</option>
        </select>
      </Field>
      <Field label="Message">
        <Textarea required rows={4} placeholder="Tell me about your business and goals…" />
      </Field>
      <Button type="submit" size="lg" className="mt-2 h-12 rounded-full bg-ink text-base hover:bg-ink/90">
        {sent ? "Thank you — I'll reply within 24h" : "Send Message"}
        {!sent && <ArrowRight className="ml-1 h-4 w-4" />}
      </Button>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-2">
      <Label className="text-xs font-medium uppercase tracking-wider text-ink-soft">{label}</Label>
      {children}
    </div>
  );
}

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <div>
          <span className="eyebrow ring-dot mb-5">Contact</span>
          <h2 className="font-display text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
            Let's Grow Your <em className="italic text-ink-soft">Business</em>
          </h2>
          <p className="mt-6 max-w-md text-ink-soft">
            Ready to scale your business through strategic Meta advertising? Let's discuss
            your goals and create a marketing strategy designed to generate measurable results.
          </p>

          <div className="mt-8 space-y-3">
            <ContactLink href={WHATSAPP_URL} icon={MessageCircle} label="WhatsApp" value="+977 9804885935" />
            <ContactLink href={`mailto:${EMAIL}`} icon={Mail} label="Email" value={EMAIL} />
            <div className="flex items-center gap-3 pt-4">
              <Social href="#" icon={Facebook} />
              <Social href="#" icon={Linkedin} />
              <Social href="#" icon={Instagram} />
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

function ContactLink({ href, icon: Icon, label, value }: { href: string; icon: React.ElementType; label: string; value: string }) {
  return (
    <a href={href} className="group flex items-center justify-between rounded-2xl border border-border bg-background p-4 transition-colors hover:border-ink/40">
      <div className="flex items-center gap-4">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-surface text-ink">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-ink-soft">{label}</div>
          <div className="text-sm font-medium text-ink">{value}</div>
        </div>
      </div>
      <ArrowUpRight className="h-4 w-4 text-ink-soft transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}

function Social({ href, icon: Icon }: { href: string; icon: React.ElementType }) {
  return (
    <a href={href} className="grid h-10 w-10 place-items-center rounded-full border border-border bg-background text-ink transition-colors hover:bg-ink hover:text-background">
      <Icon className="h-4 w-4" />
    </a>
  );
}

function FinalCTA() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2rem] bg-ink p-10 text-background sm:p-16 lg:p-20">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
          <div className="relative max-w-3xl">
            <span className="eyebrow mb-5 text-background/70" style={{ color: "oklch(1 0 0 / 0.7)" }}>
              Ready to scale?
            </span>
            <h2 className="font-display text-4xl leading-tight tracking-tight sm:text-6xl">
              Ready to Scale Your <em className="italic text-background/70">Business?</em>
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-background/70">
              Let's build a marketing system that drives more leads, more sales, and better
              returns from your advertising investment.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-background px-7 py-4 text-sm font-semibold text-ink transition-transform hover:scale-[1.02]"
            >
              Book a Free Consultation
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-x grid gap-10 py-16 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2 font-semibold tracking-tight">
            <BrandMark />
            <span>Rahul K Shah</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-ink-soft">
            Performance Marketer | Meta Ads Expert. Helping businesses turn advertising into
            predictable growth through strategy, optimization, and performance marketing.
          </p>
          <p className="mt-4 flex items-center gap-1.5 text-sm text-ink-soft">
            <MapPin className="h-4 w-4" /> Based in Nepal · Serving Clients Globally
          </p>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-ink">Explore</div>
          <ul className="mt-4 space-y-2 text-sm text-ink-soft">
            <li><a href="#about" className="hover:text-ink">About</a></li>
            <li><a href="#services" className="hover:text-ink">Services</a></li>
            
            <li><a href="#faq" className="hover:text-ink">FAQ</a></li>
          </ul>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-ink">Connect</div>
          <ul className="mt-4 space-y-2 text-sm text-ink-soft">
            <li><a href={`mailto:${EMAIL}`} className="hover:text-ink">{EMAIL}</a></li>
            <li><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-ink">WhatsApp · +977 9804885935</a></li>
            <li><a href="#" className="hover:text-ink">LinkedIn</a></li>
            <li><a href="#" className="hover:text-ink">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-ink-soft sm:flex-row">
          <div>© 2026 Rahul K Shah. All Rights Reserved.</div>
          <div>Performance Marketer · Meta Ads Expert</div>
        </div>
      </div>
    </footer>
  );
}

function VideoIntro() {
  return (
    <section className="section bg-surface">
      <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center lg:gap-16">
        <div>
          <span className="eyebrow ring-dot mb-5">Intro</span>
          <h2 className="font-display text-3xl leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Meet Me in <em className="italic text-ink-soft">60 Seconds</em>
          </h2>
          <p className="mt-5 text-ink-soft sm:text-lg">
            A quick intro to how I think about Meta advertising, what I work on, and the
            kind of growth I help businesses unlock.
          </p>
        </div>
        <div className="relative w-full overflow-hidden rounded-2xl border border-border bg-ink shadow-[var(--shadow-card)] sm:rounded-3xl">
          <div className="aspect-video w-full">
            <video
              src={introVideo}
              controls
              playsInline
              preload="metadata"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Landing() {
  return (
    <main className="min-h-screen bg-background text-ink">
      <Nav />
      <Hero />
      <Stats />
      <VideoIntro />
      <Services />
      <Process />
      <WhyMe />
      <Skills />
      <About />
      <Testimonials />
      <FAQ />
      <Contact />
      <FinalCTA />
      <Footer />
    </main>
  );
}
