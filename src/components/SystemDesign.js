import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Briefcase,
  Layers3,
  Monitor,
  FileText,
  Wrench,
  Globe,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const tokens = {
  colors: {
    bg: "#efeff3",
    surface: "#ffffff",
    surfaceMuted: "rgba(255,255,255,0.72)",
    text: "#0f172a",
    textMuted: "#5f6b85",
    line: "rgba(15, 23, 42, 0.08)",
    shadow: "0 20px 60px rgba(15, 23, 42, 0.08)",
    primary: "#1d4ed8",
    primarySoft: "rgba(29, 78, 216, 0.1)",
    dark: "#091327",
    dark2: "#0d1830",
    dark3: "#102042",
    glow: "rgba(59, 130, 246, 0.24)",
  },
  radius: {
    xl: "24px",
    xxl: "32px",
  },
  spacing: {
    container: "max-w-6xl mx-auto px-4 md:px-6",
  },
  typography: {
    display: "text-4xl md:text-6xl font-black tracking-tight leading-[0.95]",
    h1: "text-3xl md:text-5xl font-black tracking-tight leading-[0.98]",
    h2: "text-2xl md:text-4xl font-black tracking-tight leading-[1.02]",
    h3: "text-lg md:text-xl font-bold tracking-tight",
    body: "text-sm md:text-[15px] leading-7",
    small: "text-xs md:text-sm leading-6",
    eyebrow: "text-[10px] md:text-xs font-semibold uppercase tracking-[0.24em]",
  },
};

const experienceData = [
  {
    region: "Australia (Remote)",
    period: "December 2024 – Present",
    company: "Wellness Marketing",
    title: "Web Developer",
    bullets: [
      "Maintains and improves multiple client websites across WordPress and Shopify.",
      "Builds custom front-end sections, reusable content blocks, and booking-related UX flows.",
      "Supports responsive polish, content updates, and feature delivery across active client projects.",
    ],
    stack: ["WordPress", "Shopify", "PHP", "Liquid", "JavaScript"],
  },
  {
    region: "United Arab Emirates",
    period: "February 2021 – November 2024",
    company: "Holiday Factory",
    title: "Frontend Developer",
    bullets: [
      "Built booking flows and dynamic travel experiences for high-volume eCommerce journeys.",
      "Worked on voucher logic, pricing behavior, payment-related UI, and internal product tools.",
      "Partnered with design and product teams to launch polished, conversion-focused experiences.",
    ],
    stack: ["React", "JavaScript", "SCSS", "CMS", "UX"],
  },
  {
    region: "Philippines",
    period: "June 2010 – March 2021",
    company: "TELUS / HSBC",
    title: "Web Developer / Team Lead",
    bullets: [
      "Delivered CMS features, production updates, launch support, and process improvements.",
      "Led developers, documented workflows, and supported quality delivery across teams.",
      "Built a foundation in front-end execution, release accuracy, and mentoring.",
    ],
    stack: ["HTML", "CSS", "JavaScript", "Rails", "CMS"],
  },
];

const projectTabs = [
  "WooCommerce Booking Logic",
  "Holiday Factory",
  "Shopify Custom UX",
  "Appointment Request",
  "Quiz App",
  "Business Website",
];

const tools = [
  { label: "Vite", icon: Monitor },
  { label: "React", icon: Layers3 },
  { label: "Next.js", icon: Globe },
  { label: "TypeScript", icon: FileText },
  { label: "WordPress", icon: Briefcase },
  { label: "Styled Components", icon: Wrench },
];

function SectionHeader({ eyebrow, title, description, light = false, align = "between" }) {
  return (
    <div
      className={`grid gap-4 md:gap-8 ${
        align === "between" ? "md:grid-cols-[1.35fr_0.8fr] items-end" : "max-w-3xl"
      }`}
    >
      <div>
        {eyebrow ? (
          <div
            className={`${tokens.typography.eyebrow} mb-3 ${
              light ? "text-white/55" : "text-slate-500"
            }`}
          >
            {eyebrow}
          </div>
        ) : null}
        <h2 className={`${tokens.typography.h2} ${light ? "text-white" : "text-slate-950"}`}>
          {title}
        </h2>
      </div>
      {description ? (
        <p className={`${tokens.typography.body} ${light ? "text-white/70" : "text-slate-500"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}

function GlassCard({ children, className = "" }) {
  return (
    <Card
      className={`border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] ${className}`}
      style={{ borderRadius: tokens.radius.xl }}
    >
      <CardContent className="p-5 md:p-6">{children}</CardContent>
    </Card>
  );
}

function SurfaceCard({ children, className = "" }) {
  return (
    <Card
      className={`border border-slate-200/80 bg-white shadow-[0_16px_50px_rgba(15,23,42,0.08)] ${className}`}
      style={{ borderRadius: tokens.radius.xl }}
    >
      <CardContent className="p-5 md:p-7">{children}</CardContent>
    </Card>
  );
}

function NavPill() {
  const nav = ["About", "Experience", "My Work", "CV"];
  return (
    <div className="sticky top-4 z-20 flex justify-center px-4">
      <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/88 px-3 py-2 shadow-[0_8px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl">
        <div className="rounded-full bg-slate-950 px-3 py-1.5 text-xs font-semibold text-white">
          Paolo Jay Yasay
        </div>
        <div className="hidden md:flex items-center gap-1">
          {nav.map((item) => (
            <button
              key={item}
              className="rounded-full px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
            >
              {item}
            </button>
          ))}
        </div>
        <div className="ml-1 flex items-center gap-1.5">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-7 w-7 rounded-full border border-slate-200 bg-white" />
          ))}
        </div>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <SurfaceCard className="overflow-hidden">
      <div className="grid gap-8 md:grid-cols-[180px_1fr] md:items-center">
        <div className="mx-auto h-36 w-28 rounded-[28px] bg-[radial-gradient(circle_at_top,_#dbeafe,_#bfdbfe_35%,_#94a3b8_100%)] p-2 shadow-inner md:h-44 md:w-36">
          <div className="flex h-full w-full items-end justify-center rounded-[22px] bg-[linear-gradient(180deg,_#dbeafe_0%,_#e2e8f0_100%)]">
            <div className="mb-3 h-24 w-24 rounded-full bg-slate-300/80 blur-[0.2px] md:h-28 md:w-28" />
          </div>
        </div>

        <div>
          <div className="mb-3 inline-flex rounded-full bg-slate-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-500">
            Available for work
          </div>
          <h1 className={`${tokens.typography.h1} max-w-2xl text-blue-700`}>
            Frontend Developer building clean, fast web experiences.
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500 md:text-[15px]">
            I specialize in React, Next.js, Shopify, and WordPress. Creating modern interfaces,
            scalable UI systems, and high-performance marketing or eCommerce websites that are easy
            to use and easy to grow.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button className="rounded-full bg-slate-950 px-5 text-white hover:bg-slate-800">
              Download CV <Download className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="rounded-full border-slate-300 bg-white px-5">
              View My Work <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {["React / Next.js", "Shopify", "WordPress", "UI Systems", "Performance"].map(
              (item) => (
                <Badge
                  key={item}
                  variant="secondary"
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-medium text-slate-600"
                >
                  {item}
                </Badge>
              )
            )}
          </div>
        </div>
      </div>
    </SurfaceCard>
  );
}

function ExperienceCard({ item }) {
  return (
    <GlassCard>
      <div className="grid gap-5 md:grid-cols-[180px_1fr]">
        <div>
          <div className="text-sm font-semibold text-white">{item.region}</div>
          <div className="mt-1 text-xs text-white/45">{item.period}</div>
        </div>

        <div>
          <div className="text-lg font-bold text-white">{item.company}</div>
          <div className="mt-1 text-sm text-blue-200">{item.title}</div>

          <ul className="mt-4 space-y-2 text-sm leading-7 text-white/72">
            {item.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-300" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-2">
            {item.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[11px] font-medium text-white/70"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </GlassCard>
  );
}

function ExperienceSection() {
  return (
    <section className="mt-8 md:mt-12">
      <div className={`${tokens.spacing.container}`}>
        <div
          className="relative overflow-hidden rounded-[32px] border border-white/10 px-5 py-7 shadow-[0_30px_80px_rgba(2,6,23,0.4)] md:px-8 md:py-10"
          style={{
            background:
              "radial-gradient(circle at 20% 20%, rgba(37,99,235,0.32), transparent 28%), radial-gradient(circle at 80% 40%, rgba(59,130,246,0.18), transparent 24%), linear-gradient(180deg, #081222 0%, #09162c 38%, #07111f 100%)",
          }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:36px_36px] opacity-20" />

          <div className="relative space-y-6">
            <SectionHeader
              eyebrow="My Journey"
              title="Experiences"
              description="A snapshot of the teams, regions, and products I’ve worked on across frontend development, digital experiences, and web operations."
              light
            />

            <div className="space-y-4">
              {experienceData.map((item) => (
                <ExperienceCard key={item.company} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkHeroCard() {
  return (
    <SurfaceCard className="overflow-hidden">
      <div className="rounded-[20px] border border-slate-200 bg-slate-50 p-2">
        <div className="rounded-[16px] bg-white p-4 shadow-sm">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                Commerce / UX Work
              </div>
              <div className="mt-1 text-lg font-bold text-slate-950">WooCommerce Booking Logic</div>
            </div>
            <div className="rounded-full bg-blue-50 px-3 py-1 text-[11px] font-semibold text-blue-700">
              FEATURED WORK
            </div>
          </div>

          <div className="h-56 rounded-[18px] bg-[linear-gradient(135deg,_#dbeafe,_#e2e8f0_45%,_#cbd5e1)] md:h-80" />

          <div className="mt-4 grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-sm leading-7 text-slate-500">
                Custom product and booking interactions for more structured and user-friendly flows.
                Built for real-world eCommerce behavior, not theory floating in the void.
              </p>
            </div>
            <div className="space-y-2 rounded-[18px] bg-slate-50 p-4">
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                  Project Type
                </div>
                <div className="mt-1 text-sm font-semibold text-slate-900">WooCommerce / Booking UX</div>
              </div>
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                  Focus
                </div>
                <div className="mt-1 text-sm font-semibold text-slate-900">UI clarity, dynamic pricing, booking flow</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {projectTabs.map((item, i) => (
          <button
            key={item}
            className={`rounded-2xl border px-3 py-2 text-xs font-medium transition md:px-4 ${
              i === 0
                ? "border-blue-200 bg-blue-50 text-blue-700 shadow-sm"
                : "border-slate-200 bg-white text-slate-500 hover:border-slate-300 hover:text-slate-900"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </SurfaceCard>
  );
}

function WorkSection() {
  return (
    <section className="mt-14 md:mt-20">
      <div className={`${tokens.spacing.container} space-y-6`}>
        <SectionHeader
          eyebrow="My Work"
          title="Frontend work powering real bookings, real stores, and real businesses."
          description="A curated collection of projects across eCommerce, booking platforms, and custom web applications. Designed, built, and shaped for companies that needed things to actually work. Wild concept."
        />
        <WorkHeroCard />
      </div>
    </section>
  );
}

function CVSection() {
  return (
    <section className="mt-14 md:mt-20">
      <div className={tokens.spacing.container}>
        <SurfaceCard>
          <div className="grid gap-6 md:grid-cols-[0.92fr_1.08fr] md:items-center">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                Curriculum Vitae
              </div>
              <h3 className="mt-2 text-3xl font-black leading-tight tracking-tight text-slate-950 md:text-5xl">
                View my CV at a glance.
              </h3>
              <p className="mt-4 max-w-md text-sm leading-7 text-slate-500">
                A concise snapshot of my experience across frontend development, eCommerce builds,
                UI implementation, and real-world client work. Preview it here or download the PDF.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["React / Next.js", "WordPress / Shopify", "UI Systems"].map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] text-slate-600"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <Button className="mt-6 rounded-full bg-slate-950 px-5 text-white hover:bg-slate-800">
                Download PDF <Download className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="mx-auto w-full max-w-md rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_20px_50px_rgba(15,23,42,0.12)]"
            >
              <div className="mb-4 flex items-center gap-1.5 px-2">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
              </div>
              <div className="rounded-[20px] border border-slate-200 bg-[linear-gradient(180deg,_#ffffff,_#f8fafc)] p-5">
                <div className="h-[420px] rounded-[16px] bg-[linear-gradient(180deg,_#ffffff,_#f8fafc)] p-4">
                  <div className="space-y-4">
                    <div>
                      <div className="text-lg font-bold text-slate-950">Paolo Jay Yasay</div>
                      <div className="mt-1 text-xs text-slate-400">
                        Frontend Developer • React / WordPress / Shopify
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 rounded-full bg-slate-200" />
                      <div className="h-2 w-11/12 rounded-full bg-slate-200" />
                      <div className="h-2 w-10/12 rounded-full bg-slate-200" />
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 w-28 rounded-full bg-slate-300" />
                      <div className="h-2 rounded-full bg-slate-200" />
                      <div className="h-2 w-11/12 rounded-full bg-slate-200" />
                      <div className="h-2 w-9/12 rounded-full bg-slate-200" />
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 w-36 rounded-full bg-slate-300" />
                      <div className="h-2 rounded-full bg-slate-200" />
                      <div className="h-2 w-11/12 rounded-full bg-slate-200" />
                      <div className="h-2 w-10/12 rounded-full bg-slate-200" />
                      <div className="h-2 w-8/12 rounded-full bg-slate-200" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </SurfaceCard>
      </div>
    </section>
  );
}

function ToolsSection() {
  return (
    <section className="mt-14 md:mt-20">
      <div className={`${tokens.spacing.container}`}>
        <div
          className="relative overflow-hidden rounded-[32px] border border-white/10 px-5 py-8 md:px-8 md:py-10"
          style={{
            background:
              "radial-gradient(circle at 30% 10%, rgba(37,99,235,0.26), transparent 28%), linear-gradient(180deg, #081222 0%, #09162c 100%)",
          }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:36px_36px] opacity-20" />
          <div className="relative">
            <SectionHeader
              eyebrow="My Stack"
              title="Carefully chosen tools behind this portfolio."
              description="Designed and developed with a frontend stack focused on speed, reusability, motion, and polished user experience."
              light
              align="start"
            />
            <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
              {tools.map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className="rounded-[22px] border border-white/10 bg-white/[0.04] p-4 text-white backdrop-blur-xl"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/[0.06]">
                    <Icon className="h-5 w-5 text-blue-200" />
                  </div>
                  <div className="mt-4 text-sm font-semibold">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ComponentGuidelines() {
  const items = [
    {
      title: "Foundation tokens",
      text: "Use one light canvas, one dark showcase surface, one strong primary blue, rounded 24–32px corners, soft borders, and long shadows.",
    },
    {
      title: "Section rhythm",
      text: "Keep each section framed like a product card: generous outer spacing, compact internal hierarchy, and one clear visual anchor.",
    },
    {
      title: "Card language",
      text: "Mix soft white cards for information and dark glass cards for career storytelling. That contrast is doing real labor here.",
    },
    {
      title: "Interaction style",
      text: "Buttons, badges, pills, and tabs all share capsule or softened rectangle shapes. Motion should be quiet, not disco soup.",
    },
  ];

  return (
    <section className="mt-14 md:mt-20 mb-20">
      <div className={`${tokens.spacing.container} grid gap-4 md:grid-cols-2 xl:grid-cols-4`}>
        {items.map((item) => (
          <SurfaceCard key={item.title} className="h-full">
            <div className="text-lg font-bold text-slate-950">{item.title}</div>
            <p className="mt-3 text-sm leading-7 text-slate-500">{item.text}</p>
          </SurfaceCard>
        ))}
      </div>
    </section>
  );
}

export default function PortfolioUIComponentSystem() {
  return (
    <div className="min-h-screen bg-[#efeff3] text-slate-950">
      <div className="px-3 pt-4 md:px-6 md:pt-6">
        <NavPill />
      </div>

      <main className="pb-10 pt-4 md:pt-8">
        <div className={`${tokens.spacing.container}`}>
          <HeroSection />
        </div>

        <ExperienceSection />
        <WorkSection />
        <CVSection />
        <ToolsSection />
        <ComponentGuidelines />
      </main>
    </div>
  );
}
