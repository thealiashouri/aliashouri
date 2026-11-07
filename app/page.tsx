"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Cpu,
  Code2,
  Layers3,
  Mail,
  ArrowLeft,
  ArrowUpLeft,
  Menu,
  X,
  BriefcaseBusiness,
  Sparkles,
  Monitor,
  ChevronDown,
  Globe,
  Terminal,
  Database,
} from "lucide-react";

import Hero3D from "@/components/Hero3D";
import ContactForm from "@/components/ContactForm";

const skills = [
  { name: "HTML / CSS / JavaScript", category: "Frontend", icon: Code2 },
  { name: "TypeScript", category: "Programming", icon: Terminal },
  { name: "React.js / Next.js", category: "Frontend Framework", icon: Layers3 },
  { name: "Node.js", category: "Backend", icon: Cpu },
  { name: "Python / Django", category: "Backend Framework", icon: Database },
  { name: "DRF / Express.js", category: "API Development", icon: Globe },
];

const projects = [
  {
    number: "01",
    title: "تجربه سه‌بعدی کافه نوآر",
    subtitle: "Noir Coffee Experience",
    description:
      "طراحی یک تجربه دیجیتال تعاملی برای کافه؛ با تمرکز بر جلوه‌های بصری چشم‌نواز، انیمیشن‌های روان و رابط کاربری مدرن.",
    tags: ["Next.js", "Three.js", "Framer Motion", "Tailwind CSS"],
    link: "https://coffee.aliashouri.ir",
    type: "Interactive Experience",
    icon: Sparkles,
    accent: "from-orange-400/20 via-rose-400/10 to-transparent",
    preview: "coffee",
  },
  {
    number: "02",
    title: "چاپخانه مجتبی",
    subtitle: "Mojtaba Printing House",
    description:
      "طراحی و توسعه راهکاری اختصاصی برای کسب‌وکار چاپخانه، با هدف بهبود فرایندهای کاری و ایجاد تجربه‌ای ساده و کاربردی برای کاربران.",
    tags: ["Web Development", "UI/UX", "Responsive Design"],
    link: "",
    type: "Business Website",
    icon: Cpu,
    accent: "from-cyan-400/20 via-blue-500/10 to-transparent",
    preview: "printing",
  },
  {
    number: "03",
    title: "سایت کاریابی با جنگو",
    subtitle: "Django Job Platform",
    description:
      "توسعه یک پلتفرم کاریابی با تمرکز بر ساختار منظم اطلاعات، مدیریت فرصت‌های شغلی و ایجاد بستری برای ارتباط کارجویان و کارفرمایان.",
    tags: ["Python", "Django", "PostgreSQL", "REST API"],
    link: "",
    type: "Full-stack Application",
    icon: Database,
    accent: "from-violet-400/20 via-blue-500/10 to-transparent",
    preview: "jobs",
  },
];

const sectionLinks = [
  { href: "#about", label: "درباره من" },
  { href: "#skills", label: "مهارت‌ها" },
  { href: "#experience", label: "تجربه کاری" },
  { href: "#projects", label: "نمونه‌کارها" },
];

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-2 text-xs font-semibold text-blue-600 dark:text-blue-300">
        <Sparkles size={14} />
        {eyebrow}
      </span>

      <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>

      <p className="mt-5 text-sm leading-8 text-slate-600 dark:text-slate-400 sm:text-base">{description}</p>
    </div>
  );
}

function ProjectPreview({ type, accent }: { type: string; accent: string }) {
  return (
    <div
      className={`relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br ${accent} bg-slate-100 dark:bg-slate-900 sm:h-56`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(100,116,139,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(100,116,139,0.08)_1px,transparent_1px)] bg-[size:24px_24px]" />

      {type === "coffee" && (
        <motion.div
          animate={{ y: [0, -8, 0], rotate: [-2, 2, -2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="relative flex h-28 w-28 items-center justify-center rounded-[2rem] border border-orange-300/40 bg-gradient-to-br from-orange-400 to-rose-500 shadow-2xl shadow-orange-500/20"
        >
          <Sparkles size={48} className="text-white" />
        </motion.div>
      )}

      {type === "iot" && (
        <div className="relative flex items-center gap-5">
          <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/30" />
          <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/40" />
          {[0, 1, 2].map((item) => (
            <motion.div
              key={item}
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: item * 0.3,
              }}
              className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/30 bg-white text-cyan-600 shadow-lg dark:bg-slate-900 dark:text-cyan-300"
            >
              {item === 0 ? <Cpu size={20} /> : item === 1 ? <Globe size={20} /> : <Database size={20} />}
            </motion.div>
          ))}
        </div>
      )}

      {type === "data" && (
        <div className="relative flex h-32 w-48 items-end justify-center gap-3 rounded-2xl border border-violet-400/20 bg-white/70 p-5 shadow-xl dark:bg-slate-900/80">
          {[38, 65, 48, 88, 58, 100].map((height, index) => (
            <motion.div
              key={index}
              initial={{ height: 0 }}
              whileInView={{ height: `${height}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              className="w-4 rounded-t-md bg-gradient-to-t from-blue-600 to-violet-400"
            />
          ))}
        </div>
      )}

      <span className="absolute bottom-4 left-4 rounded-lg border border-white/50 bg-white/70 px-3 py-1.5 text-[10px] font-semibold tracking-wide text-slate-600 backdrop-blur-md dark:border-white/10 dark:bg-slate-950/60 dark:text-slate-300">
        {type === "coffee" ? "3D EXPERIENCE" : type === "iot" ? "CONNECTED SYSTEMS" : "DATA ANALYTICS"}
      </span>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 24 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main
      dir="rtl"
      className="min-h-screen overflow-hidden bg-white text-slate-800 selection:bg-blue-500 selection:text-white dark:bg-[#080d18] dark:text-slate-200"
    >
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-2xl dark:border-white/[0.07] dark:bg-[#080d18]/80">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#about" aria-label="بازگشت به ابتدای صفحه" className="group flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-sm font-black text-white shadow-lg shadow-blue-600/20 transition group-hover:rotate-3 group-hover:scale-105">
              AA
            </span>

            <span>
              <span className="block text-base font-black text-slate-900 dark:text-white">علی آشوری</span>
              <span className="block text-[10px] font-medium tracking-[0.18em] text-slate-500">WEB DEVELOPER</span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {sectionLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-600 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 sm:inline-flex"
          >
            <Mail size={16} />
            شروع همکاری
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "بستن منو" : "باز کردن منو"}
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 dark:border-white/10 dark:text-white md:hidden"
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        {menuOpen && (
          <nav className="border-t border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-[#0b1220] md:hidden">
            {sectionLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm font-medium transition hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-white/5"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-bold text-white"
            >
              <Mail size={16} />
              ارتباط با من
            </a>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section
        id="about"
        className="relative mx-auto grid min-h-[740px] max-w-7xl grid-cols-1 items-center gap-8 px-5 pb-16 pt-32 sm:px-8 lg:min-h-[800px] lg:grid-cols-2 lg:gap-4 lg:pt-28"
      >
        <div className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-[100px]" />
        <div className="pointer-events-none absolute bottom-10 left-0 h-72 w-72 rounded-full bg-violet-500/[0.08] blur-[100px]" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: reduceMotion ? 0 : 0.12 },
            },
          }}
          className="relative z-10 space-y-7"
        >
          <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-2 text-xs font-semibold text-blue-700 dark:text-blue-300">
              <Cpu size={15} />
              مهندس کامپیوتر و سخت‌افزار
            </span>

            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-2 text-xs font-medium text-emerald-700 dark:text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              آماده بررسی پروژه‌های جدید
            </span>
          </motion.div>

          <motion.div variants={fadeUp}>
            <p className="mb-3 text-lg font-medium text-slate-500 dark:text-slate-400">سلام، من</p>

            <h1 className="text-5xl font-black leading-[1.35] tracking-tight text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
              علی
              <br />
              <span className="bg-gradient-to-l from-blue-500 via-blue-600 to-violet-500 bg-clip-text text-transparent">
                آشوری
              </span>
              <span className="text-blue-500">.</span>
            </h1>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="max-w-xl text-base leading-9 text-slate-600 dark:text-slate-400 sm:text-lg"
          >
            توسعه‌دهنده وب و علاقه‌مند به ساخت محصولات دیجیتال مدرن؛ از طراحی رابط کاربری تا توسعه بک‌اند و اتصال دنیای
            سخت‌افزار به نرم‌افزار.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-1">
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-700"
            >
              مشاهده نمونه‌کارها
              <ArrowLeft size={17} className="transition-transform group-hover:-translate-x-1" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/70 px-6 py-3.5 text-sm font-bold text-slate-700 transition hover:border-blue-500/40 hover:text-blue-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-200 dark:hover:text-blue-400"
            >
              <Mail size={17} />
              تماس با من
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap gap-x-6 gap-y-3 border-t border-slate-200/80 pt-6 text-xs text-slate-500 dark:border-white/10 dark:text-slate-400 sm:text-sm"
          >
            <span className="flex items-center gap-2">
              <Code2 size={16} className="text-blue-500" />
              توسعه فول‌استک
            </span>
            <span className="flex items-center gap-2">
              <Layers3 size={16} className="text-blue-500" />
              رابط کاربری مدرن
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto w-full max-w-xl lg:max-w-none"
        >
          <div className="absolute inset-[12%] rounded-full bg-blue-500/10 blur-[70px]" />

          <div className="relative">
            <Hero3D />
          </div>

          <motion.div
            animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-0 top-6 hidden items-center gap-3 rounded-2xl border border-slate-200/80 bg-white/90 p-3 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/90 sm:flex"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
              <Code2 size={20} />
            </span>
            <span>
              <span className="block text-xs font-bold text-slate-900 dark:text-white">Clean Code</span>
              <span className="mt-1 block text-[10px] text-slate-500">کیفیت در توسعه</span>
            </span>
          </motion.div>

          <motion.div
            animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-8 left-0 hidden items-center gap-3 rounded-2xl border border-slate-200/80 bg-white/90 p-3 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/90 sm:flex"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-500">
              <Monitor size={20} />
            </span>
            <span>
              <span className="block text-xs font-bold text-slate-900 dark:text-white">Modern Web</span>
              <span className="mt-1 block text-[10px] text-slate-500">تجربه دیجیتال</span>
            </span>
          </motion.div>
        </motion.div>

        <a
          href="#skills"
          className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] text-slate-400 lg:flex"
        >
          <span>ادامه را ببینید</span>
          <ChevronDown size={18} />
        </a>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="border-y border-slate-200/80 bg-slate-50/80 py-24 dark:border-white/[0.06] dark:bg-white/[0.015]"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="TECH STACK"
            title="ابزارهایی برای ساخت ایده‌ها"
            description="تکنولوژی‌هایی که در مسیر توسعه رابط کاربری، سرویس‌های بک‌اند و سیستم‌های نرم‌افزاری استفاده می‌کنم."
          />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill, index) => {
              const Icon = skill.icon;

              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.45,
                    delay: reduceMotion ? 0 : index * 0.06,
                  }}
                  whileHover={reduceMotion ? undefined : { y: -4 }}
                  className="group flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 transition-colors hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/[0.04] dark:border-white/[0.08] dark:bg-white/[0.025] dark:hover:bg-white/[0.045]"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white dark:text-blue-400">
                    <Icon size={22} />
                  </span>

                  <span className="min-w-0">
                    <span className="block text-sm font-bold text-slate-900 dark:text-white sm:text-base">
                      {skill.name}
                    </span>
                    <span className="mt-1 block text-xs text-slate-500 dark:text-slate-400">{skill.category}</span>
                  </span>

                  <ArrowUpLeft
                    size={17}
                    className="mr-auto shrink-0 text-slate-300 transition group-hover:text-blue-500"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="MY JOURNEY"
            title="مسیر حرفه‌ای من"
            description="ترکیبی از دانش نرم‌افزار، سخت‌افزار و توسعه محصولات دیجیتال."
          />

          <div className="mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl border border-slate-200/80 bg-slate-50/70 p-6 pr-8 dark:border-white/[0.08] dark:bg-white/[0.025] sm:p-9 sm:pr-12"
            >
              <div className="absolute bottom-8 right-0 top-8 w-1 rounded-l-full bg-gradient-to-b from-blue-500 to-violet-500" />

              <span className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1.5 text-xs font-semibold text-blue-700 dark:text-blue-300">
                <BriefcaseBusiness size={14} />
                ۱۳۹۹ — اکنون
              </span>

              <h3 className="mt-5 text-xl font-black text-slate-900 dark:text-white sm:text-2xl">
                مهندس نرم‌افزار و سخت‌افزار
              </h3>

              <p className="mt-4 text-sm leading-8 text-slate-600 dark:text-slate-400 sm:text-base">
                توسعه سیستم‌های وب با Next.js، پیاده‌سازی سرویس‌های بک‌اند با Django و Node.js و استفاده از دانش
                سخت‌افزاری برای اتصال تجهیزات به نرم‌افزار.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Full-stack", "Web Development", "Hardware Integration"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="border-y border-slate-200/80 bg-slate-50/80 py-24 dark:border-white/[0.06] dark:bg-white/[0.015]"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="SELECTED WORK"
            title="پروژه‌هایی که می‌سازم"
            description="نمونه‌هایی از ایده‌ها و راهکارهای نرم‌افزاری؛ با تمرکز بر تجربه کاربری، معماری و عملکرد."
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => {
              const Icon = project.icon;
              const hasLink = Boolean(project.link);

              return (
                <motion.article
                  key={project.number}
                  initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    duration: 0.5,
                    delay: reduceMotion ? 0 : index * 0.08,
                  }}
                  whileHover={reduceMotion ? undefined : { y: -5 }}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm transition-shadow hover:shadow-2xl hover:shadow-blue-950/[0.06] dark:border-white/[0.08] dark:bg-[#0b1220] dark:hover:shadow-black/20"
                >
                  <ProjectPreview type={project.preview} accent={project.accent} />

                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <span className="text-xs font-bold tracking-widest text-blue-600 dark:text-blue-400">
                        PROJECT / {project.number}
                      </span>
                      <Icon size={19} className="text-slate-400" />
                    </div>

                    <h3 className="text-lg font-black leading-8 text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                      {project.title}
                    </h3>

                    <p className="mt-1 text-xs font-medium text-slate-400">{project.subtitle}</p>

                    <p className="mt-4 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-400">
                      {project.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-slate-100 px-2.5 py-1.5 text-[10px] font-medium text-slate-600 dark:bg-white/[0.06] dark:text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 border-t border-slate-100 pt-4 dark:border-white/[0.08]">
                      {hasLink ? (
                        <a
                          href={project.link}
                          className="group/link inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition hover:text-blue-700 dark:text-blue-400"
                        >
                          مشاهده پروژه
                          <ArrowLeft size={16} className="transition-transform group-hover/link:-translate-x-1" />
                        </a>
                      ) : (
                        <span className="inline-flex cursor-default items-center gap-2 text-sm font-medium text-slate-400">
                          <Layers3 size={16} />
                          پروژه معرفی‌شده
                        </span>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <p className="mt-8 text-center text-xs leading-7 text-slate-500">
            پیش‌نمایش‌های این بخش گرافیکی هستند؛ برای پروژه‌هایی که لینک ندارند، هنوز آدرس آنلاین تعریف نشده است.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative scroll-mt-24 py-24">
        <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-500/[0.07] blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="LET'S WORK TOGETHER"
            title="ایده‌ای برای ساختن داری؟"
            description="جزئیات پروژه‌ات را بنویس تا بتوانیم درباره نیازها، امکانات و مسیر اجرای آن صحبت کنیم."
          />

          <div className="mx-auto max-w-2xl">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200/80 bg-slate-50/80 dark:border-white/[0.07] dark:bg-[#060a12]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-5 py-8 sm:px-8 md:flex-row">
          <a href="#about" className="text-lg font-black tracking-tight text-slate-900 dark:text-white">
            aliashouri<span className="text-blue-500">.</span>
          </a>

          <p className="text-center text-xs leading-6 text-slate-500">© ۲۰۲۶ علی آشوری. تمامی حقوق محفوظ است.</p>

          <a
            href="#about"
            aria-label="بازگشت به بالای صفحه"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:border-blue-500/30 hover:text-blue-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300"
          >
            <ArrowUpLeft size={19} />
          </a>
        </div>
      </footer>
    </main>
  );
}
