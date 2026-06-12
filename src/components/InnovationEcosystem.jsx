import React from 'react';
import { motion } from "framer-motion";
import { ArrowRight, Banknote, Compass, Cpu, Rocket, Lightbulb, Users, Package, FlaskConical, Network, Sparkles } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

const pillars = [
  {
    icon: Banknote,
    name: "Smartosphere Capital LLC",
    tag: "Venture Funding & Innovation Enablement",
    summary:
      "Strategic capital participation for innovators building deep technology. We support ventures that require patient funding, technical alignment, and ecosystem leverage to scale meaningfully.",
    cta: "Explore Capital",
    href: "/innovation-ecosystem/capital",
  },
  {
    icon: Compass,
    name: "Smartosphere Technicalities INC",
    tag: "Strategic Consulting & Technical Direction",
    summary:
      "Senior technical advisory that translates ambition into executable architecture. We help organisations define product direction, evaluate feasibility, and de-risk complex engineering decisions.",
    cta: "Explore Technicalities",
    href: "/innovation-ecosystem/technicalities",
  },
  {
    icon: Cpu,
    name: "Smartosphere Solutions LLP",
    tag: "Technology Development & Engineering",
    summary:
      "End-to-end engineering execution across hardware, embedded systems, cloud, and applications. We design, build, and deploy systems that perform reliably in real operating environments.",
    cta: "Explore Solutions",
    href: "/solutions",
  },
];

const audience = [
  { icon: Rocket, label: "Startups", desc: "Early-stage ventures shaping new categories." },
  { icon: Lightbulb, label: "Innovators", desc: "Founders translating ideas into deployable systems." },
  { icon: Users, label: "Engineering Teams", desc: "Internal teams scaling capability and capacity." },
  { icon: Package, label: "Product Companies", desc: "Established products entering new domains." },
  { icon: FlaskConical, label: "R&D Initiatives", desc: "Research programmes moving toward productisation." },
  { icon: Network, label: "Technology Ventures", desc: "Deep-tech ventures requiring aligned partners." },
];

const InnovationEcosystem = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero */}
      <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 1.5 }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle, hsl(350 72% 35%) 0%, transparent 60%)" }} />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle, hsl(32 93% 40%) 0%, transparent 60%)" }} />
          <div className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }} />
        </div>

        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface-elevated/50 backdrop-blur-sm mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span className="text-xs font-medium tracking-wider uppercase text-body">Smartosphere Ecosystem</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold text-heading leading-[1.05] tracking-tight"
            >
              Innovation
              <br />
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(120deg, hsl(32 93% 55%), hsl(350 72% 55%))" }}>
                Ecosystem
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-5 text-lg md:text-xl lg:text-2xl font-light text-body tracking-wide"
            >
              Capital. Strategy. Engineering.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-6 md:mt-8 text-sm md:text-base lg:text-lg text-body leading-relaxed max-w-xl"
            >
              Innovation requires more than technology alone. Through the Smartosphere ecosystem, innovators and organisations
              can access aligned expertise across capital participation, strategic consulting, and engineering execution.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 md:mt-10 flex flex-col sm:flex-row flex-wrap gap-4"
            >
              <a
                href="/contact"
                className="group inline-flex justify-center items-center gap-2 px-7 py-3.5 rounded-lg text-primary-foreground text-sm font-semibold tracking-wide transition-all hover:shadow-[0_0_30px_hsl(350_72%_50%/0.45)]"
                style={{ background: "linear-gradient(135deg, hsl(32 93% 48%), hsl(350 72% 50%))" }}
              >
                Start a Conversation
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#ecosystem" className="inline-flex justify-center items-center gap-2 px-7 py-3.5 rounded-lg border border-border text-heading text-sm font-semibold hover:border-accent/60 hover:text-accent transition-colors">
                Explore the Ecosystem
              </a>
            </motion.div>
          </motion.div>

          {/* Hero Visual — connected nodes */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 50 }}
            className="relative aspect-square max-w-[320px] sm:max-w-[400px] lg:max-w-[520px] mx-auto w-full mt-10 lg:mt-0"
          >
            <div className="absolute inset-0 rounded-full blur-3xl opacity-40"
              style={{ background: "radial-gradient(circle, hsl(350 72% 40%) 0%, transparent 65%)" }} />
            <svg viewBox="0 0 400 400" className="relative w-full h-full">
              <defs>
                <linearGradient id="edge" x1="0" x2="1">
                  <stop offset="0%" stopColor="hsl(32 93% 55%)" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="hsl(350 72% 55%)" stopOpacity="0.8" />
                </linearGradient>
                <radialGradient id="nodeGlow">
                  <stop offset="0%" stopColor="hsl(32 93% 60%)" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="hsl(350 72% 40%)" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Triangle connecting three pillars */}
              <motion.line x1="200" y1="80" x2="80" y2="300" stroke="url(#edge)" strokeWidth="1.5"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.4, delay: 0.8 }} />
              <motion.line x1="200" y1="80" x2="320" y2="300" stroke="url(#edge)" strokeWidth="1.5"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.4, delay: 1.0 }} />
              <motion.line x1="80" y1="300" x2="320" y2="300" stroke="url(#edge)" strokeWidth="1.5"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.4, delay: 1.2 }} />

              {/* Center node */}
              <circle cx="200" cy="200" r="60" fill="url(#nodeGlow)" />
              <motion.circle cx="200" cy="200" r="22" fill="hsl(220 15% 16%)" stroke="hsl(32 93% 55%)" strokeWidth="1.5"
                animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 3, repeat: Infinity }} style={{ transformOrigin: "200px 200px" }} />

              {/* Three pillar nodes */}
              {[
                { cx: 200, cy: 80, label: "Capital" },
                { cx: 80, cy: 300, label: "Strategy" },
                { cx: 320, cy: 300, label: "Engineering" },
              ].map((n, i) => (
                <g key={n.label}>
                  <circle cx={n.cx} cy={n.cy} r="40" fill="url(#nodeGlow)" opacity="0.7" />
                  <motion.circle
                    cx={n.cx} cy={n.cy} r="14"
                    fill="hsl(220 15% 10%)" stroke="hsl(350 72% 55%)" strokeWidth="1.5"
                    animate={{ r: [14, 17, 14] }}
                    transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.5 }}
                  />
                  <text x={n.cx} y={n.cy + (n.cy < 200 ? -28 : 35)} textAnchor="middle"
                    fill="#ffffff" className="font-heading" fontSize="13" fontWeight="600">
                    {n.label}
                  </text>
                </g>
              ))}
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Ecosystem intro + pillars */}
      <section id="ecosystem" className="py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6 }} className="max-w-3xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">The Ecosystem</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-heading leading-tight">
              Three specialised entities. One aligned purpose.
            </h2>
            <p className="mt-4 md:mt-6 text-base md:text-lg text-body leading-relaxed">
              Smartosphere operates through three specialised entities working together to support innovation and scalable development —
              each contributing a distinct dimension to how technology ventures are funded, directed, and built.
            </p>
          </motion.div>

          <div className="mt-12 md:mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {pillars.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative rounded-2xl p-6 md:p-8 border border-border bg-surface-elevated/60 backdrop-blur-sm hover:border-accent/50 transition-all overflow-hidden"
              >
                <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl"
                  style={{ background: "radial-gradient(circle, hsl(350 72% 40%) 0%, transparent 70%)" }} />
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg border border-accent/40 bg-background/50 mb-6"
                    style={{ boxShadow: "0 0 24px hsl(32 93% 48% / 0.25)" }}>
                    <p.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-heading leading-tight">{p.name}</h3>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-accent/90">{p.tag}</p>
                  <p className="mt-4 md:mt-5 text-sm text-body leading-relaxed">{p.summary}</p>
                  <a href={p.href}
                    className="mt-6 md:mt-8 inline-flex items-center gap-2 text-sm font-semibold text-heading group-hover:text-accent transition-colors">
                    {p.cta}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Ecosystem Matters */}
      <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-60"
          style={{ background: "radial-gradient(ellipse at center, hsl(350 72% 18% / 0.4) 0%, transparent 70%)" }} />
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">Why Ecosystem</p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-heading leading-tight">
                Capital, strategy, and engineering — working as one.
              </h2>
              <p className="mt-4 md:mt-6 text-base md:text-lg text-body leading-relaxed">
                Isolated services rarely produce durable outcomes. Innovation moves forward when funding is informed by
                technical reality, when strategy is grounded in what can actually be built, and when engineering is
                aligned to long-term direction.
              </p>
              <p className="mt-4 text-base md:text-lg text-body leading-relaxed">
                The Smartosphere ecosystem closes those gaps — bringing the three forces of meaningful innovation into a
                single, coordinated operating model.
              </p>
            </motion.div>

            {/* Layered diagram */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square max-w-[320px] sm:max-w-[400px] md:max-w-[500px] mx-auto w-full"
            >
              {[
                { label: "Capital", size: 100, delay: 0, color: "hsl(32 93% 48%)" },
                { label: "Strategy", size: 75, delay: 0.15, color: "hsl(15 80% 50%)" },
                { label: "Engineering", size: 50, delay: 0.3, color: "hsl(350 72% 50%)" },
              ].map((ring, i) => (
                <motion.div
                  key={ring.label}
                  initial={{ opacity: 0, scale: 0.6 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: ring.delay }}
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ padding: `${(100 - ring.size) / 2}%` }}
                >
                  <div className="w-full h-full rounded-full border flex items-start justify-center pt-2 md:pt-4 backdrop-blur-sm"
                    style={{
                      borderColor: ring.color,
                      background: `radial-gradient(circle at center, ${ring.color}10 0%, transparent 70%)`,
                      boxShadow: `inset 0 0 60px ${ring.color}15, 0 0 40px ${ring.color}20`,
                    }}>
                    <span className="text-[10px] md:text-xs font-heading font-bold uppercase tracking-[0.2em]" style={{ color: ring.color }}>
                      {ring.label}
                    </span>
                  </div>
                </motion.div>
              ))}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-3 h-3 rounded-full bg-accent shadow-[0_0_30px_hsl(32_93%_48%)]" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6 }} className="max-w-2xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">Who We Work With</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-heading leading-tight">
              Partners across the innovation lifecycle.
            </h2>
          </motion.div>

          <div className="mt-10 md:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {audience.map((a, i) => (
              <motion.div
                key={a.label}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group flex flex-col sm:flex-row items-start sm:items-center lg:items-start gap-4 p-5 md:p-6 rounded-xl border border-border bg-surface-elevated/40 hover:bg-surface-elevated hover:border-accent/40 transition-all"
              >
                <div className="shrink-0 w-11 h-11 rounded-lg flex items-center justify-center border border-accent/30 bg-background/60"
                  style={{ boxShadow: "0 0 18px hsl(32 93% 48% / 0.2)" }}>
                  <a.icon className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-heading">{a.label}</h3>
                  <p className="mt-1 text-sm text-body leading-relaxed">{a.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-20 md:py-28 lg:py-40 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-25 blur-3xl"
            style={{ background: "radial-gradient(circle, hsl(350 72% 40%) 0%, transparent 60%)" }} />
        </div>
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-6xl font-bold text-heading leading-tight">
              Building Beyond
              <br />
              <span className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(120deg, hsl(32 93% 55%), hsl(350 72% 55%))" }}>
                Individual Services
              </span>
            </h2>
            <p className="mt-6 md:mt-8 text-base md:text-lg lg:text-xl text-body leading-relaxed">
              Meaningful innovation requires aligned thinking, technical capability, and long-term execution.
            </p>
            <a
              href="https://wa.me/919820953762" target="_blank" rel="noopener noreferrer"
              className="mt-10 md:mt-12 group inline-flex justify-center items-center gap-2 px-6 md:px-8 py-3.5 md:py-4 rounded-lg text-primary-foreground text-sm font-semibold tracking-wide transition-all hover:shadow-[0_0_35px_hsl(350_72%_50%/0.5)]"
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

export default InnovationEcosystem;
