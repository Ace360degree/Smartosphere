import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Cpu,
  Layers,
  Wrench,
  Atom,
  Handshake,
  GitBranch,
  LifeBuoy,
  Compass,
  Rocket,
  Users,
  Lightbulb,
  FlaskConical,
  Network,
} from "lucide-react";

const interests = [
  {
    icon: Cpu,
    title: "Technology Ventures",
    desc: "Early and growth-stage ventures developing differentiated technology with real engineering depth.",
  },
  {
    icon: Layers,
    title: "Product Innovation",
    desc: "Initiatives translating novel ideas into deployable, manufacturable, and scalable products.",
  },
  {
    icon: Wrench,
    title: "Engineering-Driven Development",
    desc: "Teams where engineering rigour shapes direction — not retrofitted around a marketing thesis.",
  },
  {
    icon: Atom,
    title: "Emerging Technologies",
    desc: "Domains where applied research is approaching real-world deployment readiness.",
  },
];

const participation = [
  {
    icon: Sparkles,
    title: "Innovation Participation",
    desc: "Engaging with promising innovations where ecosystem alignment can meaningfully accelerate progress.",
  },
  {
    icon: Handshake,
    title: "Venture Collaboration",
    desc: "Working alongside founders and teams rather than over them — contributing perspective, networks, and clarity.",
  },
  {
    icon: LifeBuoy,
    title: "Development-Linked Support",
    desc: "Participation structured around real development milestones, technical progress, and operational readiness.",
  },
  {
    icon: Compass,
    title: "Strategic Alignment",
    desc: "Selective engagement with ventures whose direction aligns with the wider Smartosphere ecosystem.",
  },
];

const audience = [
  { icon: Rocket, label: "Founders" },
  { icon: Lightbulb, label: "Startups" },
  { icon: Layers, label: "Product Innovators" },
  { icon: FlaskConical, label: "R&D Teams" },
  { icon: Network, label: "Technology Ventures" },
  { icon: Users, label: "Engineering Leaders" },
];

const SmartosphereCapital = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute top-0 left-1/3 w-[900px] h-[900px] rounded-full opacity-30 blur-3xl"
            style={{ background: "radial-gradient(circle, hsl(350 72% 30%) 0%, transparent 60%)" }}
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
                Smartosphere Ecosystem · Capital
              </span>
            </a>
            <h1 className="font-heading text-4xl lg:text-6xl font-bold text-heading leading-[1.05] tracking-tight">
              Smartosphere
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(120deg, hsl(32 93% 55%), hsl(350 72% 55%))" }}
              >
                Capital LLC
              </span>
            </h1>
            <p className="mt-5 text-lg lg:text-xl font-light text-body tracking-wide max-w-xl">
              Supporting innovation through strategic capital participation.
            </p>
            <p className="mt-8 text-base lg:text-lg text-body leading-relaxed max-w-xl">
              Innovation often moves faster than available resources. Smartosphere Capital explores opportunities where
              strategic participation may support promising technology and scalable innovation.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-primary-foreground text-sm font-semibold tracking-wide transition-all hover:shadow-[0_0_30px_hsl(350_72%_50%/0.45)]"
                style={{ background: "linear-gradient(135deg, hsl(32 93% 48%), hsl(350 72% 50%))" }}
              >
                Start a Conversation
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#perspective"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-border text-heading text-sm font-semibold hover:border-accent/60 hover:text-accent transition-colors"
              >
                Our Perspective
              </a>
            </div>
          </motion.div>

          {/* Hero Visual — growth pathway */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative aspect-square max-w-[520px] mx-auto w-full"
          >
            <div
              className="absolute inset-0 rounded-full blur-3xl opacity-40"
              style={{ background: "radial-gradient(circle, hsl(350 72% 38%) 0%, transparent 65%)" }}
            />
            <svg viewBox="0 0 400 400" className="relative w-full h-full">
              <defs>
                <linearGradient id="path" x1="0" y1="1" x2="1" y2="0">
                  <stop offset="0%" stopColor="hsl(350 72% 50%)" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="hsl(32 93% 55%)" stopOpacity="0.9" />
                </linearGradient>
                <radialGradient id="cglow">
                  <stop offset="0%" stopColor="hsl(32 93% 60%)" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="hsl(350 72% 40%)" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Subtle concentric arcs */}
              {[140, 100, 60].map((r, i) => (
                <circle key={r} cx="200" cy="200" r={r} fill="none" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1" opacity={0.4 - i * 0.1} />
              ))}

              {/* Ascending growth path */}
              <motion.path
                d="M40 340 Q 140 320, 180 240 T 320 120 L 360 60"
                fill="none"
                stroke="url(#path)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.4 }}
              />

              {/* Milestone nodes along the path */}
              {[
                { cx: 40, cy: 340 },
                { cx: 140, cy: 290 },
                { cx: 200, cy: 220 },
                { cx: 280, cy: 160 },
                { cx: 360, cy: 60 },
              ].map((n, i) => (
                <g key={i}>
                  <circle cx={n.cx} cy={n.cy} r="22" fill="url(#cglow)" opacity="0.7" />
                  <motion.circle
                    cx={n.cx}
                    cy={n.cy}
                    r="6"
                    fill="hsl(220 15% 10%)"
                    stroke="hsl(32 93% 55%)"
                    strokeWidth="1.5"
                    animate={{ r: [6, 8, 6] }}
                    transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.3 }}
                  />
                </g>
              ))}

              {/* Ecosystem ring */}
              <circle cx="200" cy="200" r="170" fill="none" stroke="url(#path)" strokeWidth="0.5" strokeDasharray="2 6" opacity="0.6" />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Role of Capital */}
      <section className="py-24 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-12 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">The Role</p>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-heading leading-tight">
              Enabling innovation, not transacting around it.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-8 space-y-5 text-lg text-body leading-relaxed"
          >
            <p>
              Smartosphere Capital exists to enable innovation — supporting ventures whose technical direction and
              long-term potential warrant aligned participation. The intent is not to operate as a conventional
              investment vehicle, but as a participant within a wider engineering and innovation ecosystem.
            </p>
            <p>
              Capital, on its own, is rarely the differentiator. What changes outcomes is capital paired with
              technical understanding, operational clarity, and access to the right execution capability. Smartosphere
              Capital is positioned to provide that alignment through the broader Smartosphere ecosystem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Perspective — editorial */}
      <section id="perspective" className="py-24 lg:py-32 relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10 opacity-50"
          style={{ background: "radial-gradient(ellipse at 70% 30%, hsl(350 72% 18% / 0.5) 0%, transparent 60%)" }}
        />
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-6">Our Perspective</p>
            <p className="font-heading text-2xl lg:text-4xl text-heading leading-[1.3] tracking-tight">
              <span className="text-accent">“</span>
              Meaningful innovation is rarely linear. It is built across years of disciplined engineering, refined
              direction, and the quiet conviction to continue when outcomes are uncertain.
              <span className="text-accent">”</span>
            </p>
            <div className="mt-10 grid md:grid-cols-2 gap-10 text-body text-base lg:text-lg leading-relaxed">
              <p>
                We hold a long-form view of innovation. The technologies that endure are typically those that solve
                real problems with genuine technical depth — not those optimised for short-cycle narratives.
              </p>
              <p>
                Our perspective on participation is shaped by engineering reality. We look for alignment of intent,
                clarity of direction, and the discipline required to translate ideas into systems that work.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Areas of Interest */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">Areas of Interest</p>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-heading leading-tight">
              Where we focus attention.
            </h2>
          </motion.div>

          <div className="mt-16 grid md:grid-cols-2 gap-6 lg:gap-8">
            {interests.map((it, i) => (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative rounded-2xl p-8 border border-border bg-surface-elevated/60 backdrop-blur-sm hover:border-accent/50 transition-all overflow-hidden"
              >
                <div
                  className="absolute -top-24 -right-24 w-64 h-64 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl"
                  style={{ background: "radial-gradient(circle, hsl(350 72% 40%) 0%, transparent 70%)" }}
                />
                <div className="relative flex items-start gap-5">
                  <div
                    className="shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-lg border border-accent/40 bg-background/60"
                    style={{ boxShadow: "0 0 22px hsl(32 93% 48% / 0.25)" }}
                  >
                    <it.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-heading leading-tight">{it.title}</h3>
                    <p className="mt-3 text-sm text-body leading-relaxed">{it.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Selective Participation — process */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10 opacity-60"
          style={{ background: "radial-gradient(ellipse at 20% 80%, hsl(350 72% 18% / 0.4) 0%, transparent 65%)" }}
        />
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">Selective Participation</p>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-heading leading-tight">
              How we choose to engage.
            </h2>
            <p className="mt-6 text-lg text-body leading-relaxed">
              Participation is intentionally selective. Each engagement is approached as a long-form relationship
              grounded in alignment, technical understanding, and shared direction.
            </p>
          </motion.div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            {participation.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-surface-elevated p-8 hover:bg-card transition-colors"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-heading text-xs font-bold text-accent/80 tracking-[0.2em]">
                    0{i + 1}
                  </span>
                  <div className="h-px flex-1 bg-border" />
                  <p.icon className="w-4 h-4 text-accent" />
                </div>
                <h3 className="font-heading text-lg font-bold text-heading leading-tight">{p.title}</h3>
                <p className="mt-3 text-sm text-body leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Integration */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">Ecosystem Integration</p>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-heading leading-tight">
              Capital, connected to capability.
            </h2>
            <p className="mt-6 text-lg text-body leading-relaxed">
              Participation by Smartosphere Capital is reinforced by the wider ecosystem — strategic direction through
              Technicalities, and execution through Solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-16 relative"
          >
            <div className="grid md:grid-cols-3 gap-6 lg:gap-4 relative">
              {[
                { name: "Capital", tag: "Strategic Participation", icon: Sparkles, active: true },
                { name: "Technicalities", tag: "Strategic Direction", icon: Compass, href: "/innovation-ecosystem/technicalities" },
                { name: "Solutions", tag: "Engineering Execution", icon: GitBranch, href: "/solutions" },
              ].map((node, i) => (
                <div key={node.name} className="relative">
                  <a
                    href={node.href || "#"}
                    className={`relative block rounded-2xl p-8 border backdrop-blur-sm overflow-hidden transition-all ${node.active
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
                      <div
                        className="inline-flex items-center justify-center w-11 h-11 rounded-lg border border-accent/40 bg-background/60"
                        style={{ boxShadow: "0 0 18px hsl(32 93% 48% / 0.2)" }}
                      >
                        <node.icon className="w-5 h-5 text-accent" />
                      </div>
                      <span className="font-heading text-xs font-bold text-accent/70 tracking-[0.2em]">
                        0{i + 1}
                      </span>
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
            </div>

            <div className="mt-10 text-center">
              <a
                href="/innovation-ecosystem"
                className="inline-flex items-center gap-2 text-sm font-semibold text-heading hover:text-accent transition-colors"
              >
                View the full ecosystem
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who May Benefit */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">Who May Benefit</p>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-heading leading-tight">
              Aligned with builders.
            </h2>
          </motion.div>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {audience.map((a, i) => (
              <motion.div
                key={a.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group flex items-center gap-4 p-6 rounded-xl border border-border bg-surface-elevated/40 hover:bg-surface-elevated hover:border-accent/40 transition-all"
              >
                <div
                  className="shrink-0 w-11 h-11 rounded-lg flex items-center justify-center border border-accent/30 bg-background/60"
                  style={{ boxShadow: "0 0 18px hsl(32 93% 48% / 0.2)" }}
                >
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
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-25 blur-3xl"
            style={{ background: "radial-gradient(circle, hsl(350 72% 38%) 0%, transparent 60%)" }}
          />
        </div>
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-heading text-4xl lg:text-6xl font-bold text-heading leading-tight">
              Looking Beyond
              <br />
              <span className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(120deg, hsl(32 93% 55%), hsl(350 72% 55%))" }}>
                Capital
              </span>
            </h2>
            <p className="mt-8 text-lg lg:text-xl text-body leading-relaxed">
              Innovation is built when funding matches capability.
            </p>
            <a
              href="/contact"
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

export default SmartosphereCapital;
