import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Sparkles,
  FileText,
  FolderGit2,
  Zap,
  ArrowRight,
  CheckCircle2,
  Star,
  ShieldCheck,
  Hexagon,
  Command,
  Triangle,
  Rocket,
  Eye,
  Layers,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import { useRef } from "react";

/* ─────────────────────────────────────
   MARQUEE DATA
   ───────────────────────────────────── */
const marqueeWords = [
  "AI PROPOSALS",
  "✦",
  "PORTFOLIO ARCHITECT",
  "✦",
  "JOB RADAR",
  "✦",
  "CURATION LAB",
  "✦",
  "LLAMA 3.3",
  "✦",
  "VAULT PRO",
  "✦",
  "FIREBASE AUTH",
  "✦",
  "GITHUB SYNC",
  "✦",
];

/* ─────────────────────────────────────
   BENTO FEATURES
   ───────────────────────────────────── */
const bentoFeatures = [
  {
    icon: FileText,
    title: "AI Proposal Architect",
    description:
      "Multi-model orchestration generates persuasive, tailored proposals in seconds. Beat your competition before they even start.",
    color: "fuchsia",
    span: "bento-item-featured",
  },
  {
    icon: FolderGit2,
    title: "Curation Lab",
    description:
      "Sync your GitHub. Export stunning, interactive portfolios automatically.",
    color: "cyan",
    span: "bento-item-tall",
  },
  {
    icon: Zap,
    title: "Real-time Job Radar",
    description:
      "Industrial scanning of global markets with AI-priority filtering.",
    color: "yellow",
    span: "",
  },
  {
    icon: Rocket,
    title: "Vault Pro Storage",
    description:
      "Enterprise-grade revision control for all your proposals and portfolios.",
    color: "violet",
    span: "",
  },
  {
    icon: Eye,
    title: "Smart Analytics",
    description:
      "Track proposal win-rates, portfolio views, and client engagement in real-time.",
    color: "cyan",
    span: "bento-item-wide",
  },
];

/* ─────────────────────────────────────
   STATS
   ───────────────────────────────────── */
const stats = [
  { value: "10x", label: "Faster Proposals" },
  { value: "94%", label: "Client Win Rate" },
  { value: "50K+", label: "Proposals Generated" },
  { value: "24/7", label: "Job Scanning" },
];

/* ─────────────────────────────────────
   COLOR MAP HELPER
   ───────────────────────────────────── */
const neonColors: Record<string, string> = {
  fuchsia: "from-pink-500 to-fuchsia-600",
  cyan: "from-cyan-400 to-teal-500",
  yellow: "from-yellow-400 to-amber-500",
  violet: "from-violet-500 to-purple-600",
};

const neonTextColors: Record<string, string> = {
  fuchsia: "text-pink-400",
  cyan: "text-cyan-400",
  yellow: "text-yellow-400",
  violet: "text-violet-400",
};

const neonBgColors: Record<string, string> = {
  fuchsia: "bg-pink-500/10",
  cyan: "bg-cyan-500/10",
  yellow: "bg-yellow-500/10",
  violet: "bg-violet-500/10",
};

const neonGlowColors: Record<string, string> = {
  fuchsia: "group-hover:shadow-[0_0_40px_-8px_rgba(236,72,153,0.5)]",
  cyan: "group-hover:shadow-[0_0_40px_-8px_rgba(34,211,238,0.5)]",
  yellow: "group-hover:shadow-[0_0_40px_-8px_rgba(250,204,21,0.5)]",
  violet: "group-hover:shadow-[0_0_40px_-8px_rgba(139,92,246,0.5)]",
};

/* ─────────────────────────────────────
   MAIN COMPONENT
   ───────────────────────────────────── */
const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div className="min-h-screen bg-background selection:bg-pink-500/30 selection:text-white dark">
      {/* Noise Overlay */}
      <div className="noise-overlay" />

      <Navbar />

      {/* ═══════════════════════════════════════
          HERO SECTION — ASYMMETRIC LAYOUT
          ═══════════════════════════════════════ */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden mesh-bg">
        {/* Decorative blobs */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] blob blob-fuchsia opacity-50 pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] blob blob-cyan opacity-40 pointer-events-none" style={{ animationDelay: "2s" }} />
        <div className="absolute top-[30%] left-[40%] w-[300px] h-[300px] blob blob-yellow opacity-20 pointer-events-none" style={{ animationDelay: "4s" }} />

        {/* Giant abstract floating shapes */}
        <motion.div
          className="absolute top-20 right-[10%] text-pink-500/[0.07] pointer-events-none"
          animate={{ rotate: 360, y: [0, -20, 0] }}
          transition={{ rotate: { duration: 40, repeat: Infinity, ease: "linear" }, y: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
        >
          <Hexagon className="w-80 h-80" strokeWidth={0.5} />
        </motion.div>
        <motion.div
          className="absolute bottom-32 left-[5%] text-cyan-400/[0.06] pointer-events-none"
          animate={{ rotate: -360, y: [0, 15, 0] }}
          transition={{ rotate: { duration: 50, repeat: Infinity, ease: "linear" }, y: { duration: 8, repeat: Infinity, ease: "easeInOut" } }}
        >
          <Command className="w-60 h-60" strokeWidth={0.5} />
        </motion.div>
        <motion.div
          className="absolute top-[45%] right-[25%] text-yellow-400/[0.05] pointer-events-none"
          animate={{ rotate: 180, scale: [1, 1.1, 1] }}
          transition={{ rotate: { duration: 30, repeat: Infinity, ease: "linear" }, scale: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
        >
          <Triangle className="w-44 h-44" strokeWidth={0.5} />
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
          className="relative pt-36 pb-24 px-6"
        >
          <div className="max-w-[1400px] mx-auto grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
            {/* LEFT — Giant Typography */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, type: "spring", bounce: 0.3 }}
              className="relative z-10"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-bold uppercase tracking-[0.2em] mb-8">
                <Sparkles className="h-3.5 w-3.5" />
                Intelligence Driven Freelancing
              </div>

              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-black tracking-[-0.04em] leading-[0.85] mb-8">
                SCALE
                <br />
                YOUR
                <br />
                <span className="text-gradient">EMPIRE.</span>
              </h1>

              <p className="max-w-lg text-lg md:text-xl text-muted-foreground font-medium leading-relaxed mb-10">
                The only AI-powered Operating System for elite freelancers.
                Architect professional proposals and curate stunning portfolios
                in one unified ecosystem.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link to="/auth">
                  <Button
                    size="lg"
                    className="h-14 px-8 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-600 hover:from-pink-600 hover:to-fuchsia-700 text-white font-black text-lg gap-3 shadow-[0_20px_60px_-12px_rgba(236,72,153,0.5)] hover:shadow-[0_25px_70px_-12px_rgba(236,72,153,0.6)] hover:scale-[1.03] transition-all duration-300"
                  >
                    Get Started <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/auth">
                  <Button
                    variant="ghost"
                    size="lg"
                    className="h-14 px-8 rounded-full font-bold text-lg border border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-sm hover:border-cyan-400/30 transition-all duration-300"
                  >
                    Watch Demo
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* RIGHT — Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, x: 60, rotateY: -15 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1.2, delay: 0.3, type: "spring", bounce: 0.25 }}
              className="relative hidden lg:block"
            >
              {/* Tilted card stack effect */}
              <div className="relative">
                {/* Background card (tilted) */}
                <div className="absolute -top-4 -left-4 w-full h-full glass-card rounded-3xl transform rotate-3 border-pink-500/10 opacity-40" />
                <div className="absolute -top-2 -left-2 w-full h-full glass-card rounded-3xl transform rotate-1.5 border-cyan-400/10 opacity-60" />

                {/* Main card */}
                <div className="relative glass-card rounded-3xl p-10 border-white/10 shadow-2xl overflow-hidden">
                  {/* Inner glow */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-pink-500/10 blur-[80px] rounded-full" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-400/10 blur-[80px] rounded-full" />

                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500/20 to-fuchsia-600/20 flex items-center justify-center border border-pink-500/20">
                        <Layers className="h-7 w-7 text-pink-400" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl">Command Center</h3>
                        <p className="text-sm text-muted-foreground">
                          Your freelance OS
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {stats.map((stat, i) => (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 + i * 0.15, duration: 0.6 }}
                          className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-pink-500/20 transition-colors"
                        >
                          <p className="text-3xl font-black text-gradient-static mb-1">
                            {stat.value}
                          </p>
                          <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">
                            {stat.label}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Mini stats for mobile */}
          <div className="lg:hidden mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="text-center p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]"
              >
                <p className="text-2xl font-black text-gradient-static">
                  {stat.value}
                </p>
                <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider mt-1">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════
          MARQUEE DIVIDER
          ═══════════════════════════════════════ */}
      <section className="py-6 border-y border-white/[0.06] bg-white/[0.01] overflow-hidden">
        <div className="marquee-container">
          <div className="marquee-track">
            {[...marqueeWords, ...marqueeWords].map((word, i) => (
              <span
                key={i}
                className={`mx-6 text-2xl md:text-3xl font-black tracking-tighter ${
                  word === "✦"
                    ? "text-gradient text-xl"
                    : "text-foreground/20 hover:text-foreground/60 transition-colors duration-300"
                }`}
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BENTO GRID FEATURES — ASYMMETRIC
          ═══════════════════════════════════════ */}
      <section className="relative py-28 overflow-hidden">
        {/* Background decor */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] blob blob-violet opacity-10 pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-pink-400 mb-4">
              ✦ FEATURE ARSENAL
            </p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-[-0.03em] leading-[0.9] max-w-3xl">
              TOOLS THAT
              <br />
              <span className="text-gradient">BREAK THE MOLD.</span>
            </h2>
          </motion.div>

          <div className="bento-grid">
            {bentoFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7, type: "spring", bounce: 0.2 }}
                className={`group bento-card ${feature.span} ${neonGlowColors[feature.color]} transition-shadow duration-500`}
              >
                {/* Inner gradient accent */}
                <div
                  className={`absolute top-0 right-0 w-40 h-40 rounded-full blur-[80px] opacity-0 group-hover:opacity-30 transition-opacity duration-700 bg-gradient-to-br ${neonColors[feature.color]}`}
                />

                <div className="relative z-10 h-full flex flex-col">
                  <div
                    className={`w-14 h-14 rounded-2xl ${neonBgColors[feature.color]} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}
                  >
                    <feature.icon
                      className={`h-7 w-7 ${neonTextColors[feature.color]}`}
                    />
                  </div>
                  <h3
                    className={`text-2xl md:text-3xl font-bold mb-4 tracking-tight group-hover:${neonTextColors[feature.color]} transition-colors duration-300`}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-base flex-1">
                    {feature.description}
                  </p>

                  {/* Subtle arrow indicator */}
                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-muted-foreground/50 group-hover:text-foreground/70 transition-colors">
                    Learn more
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TRUST SECTION — SLANTED WITH TESTIMONIAL
          ═══════════════════════════════════════ */}
      <section className="relative py-28 overflow-hidden">
        {/* Slant background */}
        <div className="absolute inset-0 clip-slant bg-white/[0.02] border-y border-white/[0.04]" />

        {/* Floating blob */}
        <div className="absolute top-0 right-[10%] w-[400px] h-[400px] blob blob-fuchsia opacity-15 pointer-events-none" />

        <div className="relative max-w-[1400px] mx-auto px-6 grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
          {/* Left — Copy */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400 mb-4">
              ✦ BUILT DIFFERENT
            </p>
            <h2 className="text-4xl md:text-6xl font-black tracking-[-0.03em] leading-[0.9] mb-8">
              DESIGNED FOR
              <br />
              THE <span className="text-gradient">TOP 1%.</span>
            </h2>
            <p className="text-lg text-muted-foreground font-medium leading-relaxed mb-10 max-w-md">
              Don't settle for static text. Use the same tools internal
              recruitment teams use to scan, match, and win high-ticket
              contracts.
            </p>
            <div className="space-y-4">
              {[
                "Firebase Multi-Auth Security",
                "Llama 3.3 Optimized Drafting",
                "Vault Pro Revision Storage",
              ].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500/20 to-cyan-400/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="h-4 w-4 text-pink-400" />
                  </div>
                  <span className="font-semibold text-foreground/80 group-hover:text-foreground transition-colors">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Testimonial Card with tilt */}
          <motion.div
            initial={{ opacity: 0, x: 40, rotate: 3 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring", bounce: 0.25 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-cyan-400/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="relative glass-card p-10 rounded-3xl border-white/10 shadow-2xl overflow-hidden">
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-pink-500/10 to-transparent" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-500/30 to-fuchsia-600/30 flex items-center justify-center border border-pink-500/20">
                    <Star className="h-7 w-7 text-pink-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Verified Professional</h4>
                    <p className="text-sm text-muted-foreground">
                      Top Rated Freelancer on Upwork
                    </p>
                  </div>
                </div>

                {/* Star rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <p className="text-xl md:text-2xl font-semibold text-foreground/90 mb-8 leading-relaxed">
                  "Craftigo{" "}
                  <span className="text-gradient-static">
                    doubled my win rate
                  </span>{" "}
                  in 3 weeks. The Curation Lab is a game changer for my
                  technical portfolio."
                </p>

                <div className="flex items-center gap-3 pt-6 border-t border-white/[0.06]">
                  <ShieldCheck className="h-5 w-5 text-cyan-400" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-400/80">
                    SECURITY VERIFIED ENGINEERING
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA SECTION
          ═══════════════════════════════════════ */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-pink-500/10 blur-[120px] animate-pulse" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-3xl mx-auto text-center px-6"
        >
          <h2 className="text-5xl md:text-7xl font-black tracking-[-0.04em] leading-[0.85] mb-8">
            READY TO
            <br />
            <span className="text-gradient">DOMINATE?</span>
          </h2>
          <p className="text-lg text-muted-foreground font-medium mb-10 max-w-xl mx-auto">
            Join the elite freelancers who've already transformed their workflow.
            Your empire starts here.
          </p>
          <Link to="/auth">
            <Button
              size="lg"
              className="h-16 px-12 rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-600 hover:from-pink-600 hover:via-fuchsia-600 hover:to-violet-700 text-white font-black text-xl gap-3 shadow-[0_20px_80px_-12px_rgba(236,72,153,0.5)] hover:shadow-[0_25px_90px_-12px_rgba(236,72,153,0.7)] hover:scale-[1.03] transition-all duration-300"
            >
              Start Building <Rocket className="h-6 w-6" />
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════
          FOOTER
          ═══════════════════════════════════════ */}
      <footer className="py-16 border-t border-white/[0.06]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500/20 to-fuchsia-600/20 flex items-center justify-center border border-pink-500/20">
                <Sparkles className="h-5 w-5 text-pink-400" />
              </div>
              <span className="font-display font-black text-2xl tracking-tighter">
                CRAFTIGO<span className="text-gradient">.</span>
              </span>
            </div>

            <div className="flex items-center gap-8 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
              <Link
                to="#"
                className="hover:text-pink-400 transition-colors duration-300"
              >
                Twitter
              </Link>
              <Link
                to="#"
                className="hover:text-cyan-400 transition-colors duration-300"
              >
                GitHub
              </Link>
              <Link
                to="#"
                className="hover:text-violet-400 transition-colors duration-300"
              >
                Privacy
              </Link>
              <Link
                to="#"
                className="hover:text-yellow-400 transition-colors duration-300"
              >
                Terms
              </Link>
            </div>

            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground/40">
              Built with ♥ © 2026
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
