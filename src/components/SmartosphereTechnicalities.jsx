import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Search,
  Layers,
  Compass,
  Target,
  Route as RouteIcon,
  Building2,
  Network,
  GitBranch,
  Rocket,
  Users,
  Briefcase,
  Cpu,
  ShieldCheck,
} from "lucide-react";

const approach = [
  { icon: Search, title: "Understand", desc: "Surface the real constraints, intent, and operating context before recommending direction." },
  { icon: Target, title: "Strategise", desc: "Translate ambition into a clear, defensible technology strategy aligned to outcomes." },
  { icon: Layers, title: "Architect", desc: "Define architecture and decisions that will hold as the system grows in scope and load." },
  { icon: Compass, title: "Guide", desc: "Stay engaged through execution — clarifying trade-offs as the landscape evolves." },
];

const advisory = [
  { icon: Target, title: "Technology Strategy", desc: "Long-form technology direction aligned to business intent, market reality, and operational maturity." },
  { icon: RouteIcon, title: "Product & Roadmap Planning", desc: "Roadmaps grounded in feasibility — sequencing capability, dependencies, and risk against value." },
  { icon: Building2, title: "Architecture Consulting", desc: "Reference architectures and design reviews that pre-empt scale, integration, and lifecycle issues." },
  { icon: Network, title: "Scalability & Infrastructure Planning", desc: "Capacity, reliability, and infrastructure thinking before scale becomes a liability." },
  { icon: ShieldCheck, title: "Technical Decision Support", desc: "Senior input on critical technical decisions — buy vs build, stack selection, vendor evaluation, and risk." },
];

const audience = [
  { icon: Rocket, label: "Startups" },
  { icon: Layers, label: "Product Teams" },
  { icon: Network, label: "Technology Ventures" },
  { icon: Cpu, label: "Engineering Organisations" },
  { icon: Briefcase, label: "Leadership Teams" },
  { icon: Users, label: "Founders & CTOs" },
];

const SmartosphereTechnicalities = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute top-0 left-1/3 w-[900px] h-[900px] rounded-full opacity-25 blur-3xl"
            style={{ background: "radial-gradient(circle, hsl(350 72% 28%) 0%, transparent 60%)" }}
          />
          <div
            className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
            style={{ background: "radial-gradient(circle, hsl(32 93% 35%) 0%, transparent 60%)" }}
          />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <a
              href="/innovation-ecosystem"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface-elevated/50 backdrop-blur-sm mb-6 hover:border-accent/50 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span className="text-xs font-medium tracking-wider uppercase text-body">
                Smartosphere Ecosystem · Technicalities
              </span>
            </a>
            <h1 className="font-heading text-4xl lg:text-6xl font-bold text-heading leading-[1.05] tracking-tight">
              Strategic Technology
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(120deg, hsl(32 93% 55%), hsl(350 72% 55%))" }}
              >
                Direction
              </span>
            </h1>
            <p className="mt-5 text-lg lg:text-xl font-light text-body tracking-wide max-w-xl">
              Planning technology that scales.
            </p>
            <p className="mt-8 text-base lg:text-lg text-body leading-relaxed max-w-xl">
              Technology decisions influence scalability, security, and long-term growth. Smartosphere Technicalities
              supports organisations through strategic consulting and technical guidance.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-primary-foreground text-sm font-semibold tracking-wide transition-all hover:shadow-[0_0_30px_hsl(350_72%_50%/0.45)]"
                style={{ background: "linear-gradient(135deg, hsl(32 93% 48%), hsl(350 72% 50%))" }}
              >
                Start a Strategic Discussion
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#approach"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-border text-heading text-sm font-semibold hover:border-accent/60 hover:text-accent transition-colors"
              >
                Our Approach
              </a>
            </div>
          </motion.div>

          {/* Hero Visual — system architecture layers */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative aspect-square max-w-[520px] mx-auto w-full"
          >
            <div
              className="absolute inset-0 rounded-full blur-3xl opacity-40"
              style={{ background: "radial-gradient(circle, hsl(350 72% 35%) 0%, transparent 65%)" }}
            />
            <svg viewBox="0 0 400 400" className="relative w-full h-full">
              <defs>
                <linearGradient id="tline" x1="0" x2="1">
                  <stop offset="0%" stopColor="hsl(32 93% 55%)" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="hsl(350 72% 55%)" stopOpacity="0.8" />
                </linearGradient>
              </defs>

              {/* Architecture layers — isometric stack */}
              {[
                { y: 110, label: "Strategy" },
                { y: 170, label: "Architecture" },
                { y: 230, label: "Systems" },
                { y: 290, label: "Execution" },
              ].map((layer, i) => (
                <motion.g
                  key={layer.label}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                >
                  <path
                    d={`M 100 ${layer.y} L 200 ${layer.y - 30} L 300 ${layer.y} L 200 ${layer.y + 30} Z`}
                    fill="hsl(220 15% 16%)"
                    stroke="url(#tline)"
                    strokeWidth="1.2"
                    opacity={0.95 - i * 0.08}
                  />
                  <text x="200" y={layer.y + 4} textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="600" className="font-heading tracking-widest">
                    {layer.label.toUpperCase()}
                  </text>
                </motion.g>
              ))}

              {/* Vertical connectors */}
              <motion.line x1="200" y1="80" x2="200" y2="320" stroke="url(#tline)" strokeWidth="1" strokeDasharray="3 4" opacity="0.5"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2, delay: 0.9 }} />

              {/* Orbiting decision nodes */}
              {[
                { cx: 60, cy: 140 },
                { cx: 340, cy: 200 },
                { cx: 70, cy: 270 },
                { cx: 330, cy: 100 },
              ].map((n, i) => (
                <motion.circle
                  key={i}
                  cx={n.cx} cy={n.cy} r="4"
                  fill="hsl(32 93% 55%)"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
                />
              ))}
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Why Technical Direction Matters */}
      <section className="py-24 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-12 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6 }} className="lg:col-span-4"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">Why Direction</p>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-heading leading-tight">
              Complexity rewards clarity.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-8 space-y-5 text-lg text-body leading-relaxed"
          >
            <p>
              Modern technology environments are rarely defined by a single decision. They accumulate — vendor choices,
              architectural shortcuts, deferred trade-offs, and parallel initiatives — until direction itself becomes
              fragmented. The cost surfaces later, in scalability, integration, and the speed at which the organisation
              can respond.
            </p>
            <p>
              Strategic technical direction reduces that drift. It establishes the reasoning behind decisions, makes
              constraints explicit, and gives leadership a defensible basis for the choices that shape the next several
              years of the business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Approach */}
      <section id="approach" className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-50"
          style={{ background: "radial-gradient(ellipse at 70% 30%, hsl(350 72% 18% / 0.5) 0%, transparent 60%)" }} />
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6 }} className="max-w-2xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">Our Approach</p>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-heading leading-tight">
              A disciplined path from intent to architecture.
            </h2>
          </motion.div>

          <div className="mt-16 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-12 left-[8%] right-[8%] h-px"
              style={{ background: "linear-gradient(90deg, transparent, hsl(32 93% 48% / 0.5), hsl(350 72% 50% / 0.5), transparent)" }} />
            <div className="grid md:grid-cols-4 gap-8 md:gap-4 relative">
              {approach.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative text-center md:text-left"
                >
                  <div className="relative inline-flex md:flex items-center justify-center w-24 h-24 rounded-full border border-accent/40 bg-background mx-auto md:mx-0"
                    style={{ boxShadow: "0 0 30px hsl(32 93% 48% / 0.2)" }}>
                    <s.icon className="w-7 h-7 text-accent" />
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-surface-elevated border border-border flex items-center justify-center font-heading text-xs font-bold text-accent">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 font-heading text-xl font-bold text-heading">{s.title}</h3>
                  <p className="mt-3 text-sm text-body leading-relaxed max-w-xs mx-auto md:mx-0">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Advisory */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6 }} className="max-w-2xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">Areas of Advisory</p>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-heading leading-tight">
              Where we provide strategic depth.
            </h2>
          </motion.div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {advisory.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative rounded-2xl p-8 border border-border bg-surface-elevated/60 backdrop-blur-sm hover:border-accent/50 transition-all overflow-hidden"
              >
                <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl"
                  style={{ background: "radial-gradient(circle, hsl(350 72% 40%) 0%, transparent 70%)" }} />
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg border border-accent/40 bg-background/60 mb-6"
                    style={{ boxShadow: "0 0 22px hsl(32 93% 48% / 0.25)" }}>
                    <a.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-heading leading-tight">{a.title}</h3>
                  <p className="mt-4 text-sm text-body leading-relaxed">{a.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bridging Business & Engineering */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-60"
          style={{ background: "radial-gradient(ellipse at center, hsl(350 72% 18% / 0.4) 0%, transparent 70%)" }} />
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6 }} className="max-w-2xl mb-16"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">The Bridge</p>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-heading leading-tight">
              Where business vision meets engineering reality.
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl p-8 lg:p-10 border border-border bg-surface-elevated/60 backdrop-blur-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent/80 mb-3">Business Vision</p>
              <h3 className="font-heading text-2xl font-bold text-heading leading-tight">Outcomes, scale, time-to-market.</h3>
              <ul className="mt-6 space-y-3 text-sm text-body">
                {["Strategic intent and growth thesis", "Market timing and positioning", "Capital and resource constraints", "Customer and operational outcomes"].map((x) => (
                  <li key={x} className="flex gap-3"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />{x}</li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="hidden lg:flex flex-col items-center justify-center gap-3"
            >
              <div className="w-px flex-1 bg-gradient-to-b from-transparent via-accent/50 to-transparent" />
              <div className="w-14 h-14 rounded-full border border-accent/60 bg-background flex items-center justify-center"
                style={{ boxShadow: "0 0 30px hsl(32 93% 48% / 0.3)" }}>
                <GitBranch className="w-5 h-5 text-accent" />
              </div>
              <div className="w-px flex-1 bg-gradient-to-b from-transparent via-accent/50 to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl p-8 lg:p-10 border border-border bg-surface-elevated/60 backdrop-blur-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent/80 mb-3">Engineering Reality</p>
              <h3 className="font-heading text-2xl font-bold text-heading leading-tight">Feasibility, architecture, risk.</h3>
              <ul className="mt-6 space-y-3 text-sm text-body">
                {["Technical feasibility and trade-offs", "Architecture and integration constraints", "Reliability, security, and lifecycle cost", "Team capability and delivery cadence"].map((x) => (
                  <li key={x} className="flex gap-3"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />{x}</li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 text-center text-base lg:text-lg text-body max-w-2xl mx-auto"
          >
            Technicalities exists in the space between the two — translating intent into architecture, and constraints
            into decisions leadership can defend.
          </motion.p>
        </div>
      </section>

      {/* Ecosystem Integration */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6 }} className="max-w-2xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">Ecosystem Integration</p>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-heading leading-tight">
              The bridge between capital and execution.
            </h2>
            <p className="mt-6 text-lg text-body leading-relaxed">
              Technicalities sits between Smartosphere Capital and Smartosphere Solutions — connecting strategic
              participation to engineering execution through direction that is grounded in both.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-16 grid md:grid-cols-3 gap-6 lg:gap-4 relative"
          >
            {[
              { name: "Capital", tag: "Strategic Participation", icon: Sparkles, href: "/innovation-ecosystem/capital" },
              { name: "Technicalities", tag: "Strategic Direction", icon: Compass, active: true },
              { name: "Solutions", tag: "Engineering Execution", icon: GitBranch, href: "/solutions" },
            ].map((node, i) => (
              <div key={node.name} className="relative">
                <a
                  href={node.href || "#"}
                  className={`block relative rounded-2xl p-8 border backdrop-blur-sm overflow-hidden transition-all ${node.active
                    ? "border-accent/60 bg-surface-elevated"
                    : "border-border bg-surface-elevated/50 hover:border-accent/40"
                    }`}
                  style={
                    node.active
                      ? { boxShadow: "0 0 40px hsl(32 93% 48% / 0.2), inset 0 0 30px hsl(350 72% 40% / 0.1)" }
                      : undefined
                  }
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg border border-accent/40 bg-background/60"
                      style={{ boxShadow: "0 0 18px hsl(32 93% 48% / 0.2)" }}>
                      <node.icon className="w-5 h-5 text-accent" />
                    </div>
                    <span className="font-heading text-xs font-bold text-accent/70 tracking-[0.2em]">0{i + 1}</span>
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-heading">{node.name}</h3>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-accent/90">{node.tag}</p>
                </a>
                {i < 2 && (
                  <div className="hidden md:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-background border border-accent/50 items-center justify-center">
                    <ArrowRight className="w-3 h-3 text-accent" />
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Who May Benefit */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6 }} className="max-w-2xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">Who May Benefit</p>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-heading leading-tight">
              Built for leaders making consequential decisions.
            </h2>
          </motion.div>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {audience.map((a, i) => (
              <motion.div
                key={a.label}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group flex items-center gap-4 p-6 rounded-xl border border-border bg-surface-elevated/40 hover:bg-surface-elevated hover:border-accent/40 transition-all"
              >
                <div className="shrink-0 w-11 h-11 rounded-lg flex items-center justify-center border border-accent/30 bg-background/60"
                  style={{ boxShadow: "0 0 18px hsl(32 93% 48% / 0.2)" }}>
                  <a.icon className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="font-heading font-semibold text-heading">{a.label}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-28 lg:py-40 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-25 blur-3xl"
            style={{ background: "radial-gradient(circle, hsl(350 72% 38%) 0%, transparent 60%)" }} />
        </div>
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-heading text-4xl lg:text-6xl font-bold text-heading leading-tight">
              Guidance Beyond
              <br />
              <span className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(120deg, hsl(32 93% 55%), hsl(350 72% 55%))" }}>
                Advice
              </span>
            </h2>
            <p className="mt-8 text-lg lg:text-xl text-body leading-relaxed">
              Technology consulting should create clarity and better decisions — not complexity.
            </p>
            <a
              href="https://wa.me/919820953762" target="_blank" rel="noopener noreferrer"
              className="mt-12 group inline-flex items-center gap-2 px-8 py-4 rounded-lg text-primary-foreground text-sm font-semibold tracking-wide transition-all hover:shadow-[0_0_35px_hsl(350_72%_50%/0.5)]"
              style={{ background: "linear-gradient(135deg, hsl(32 93% 48%), hsl(350 72% 50%))" }}
            >
              Talk to the Smartosphere Team
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SmartosphereTechnicalities;
