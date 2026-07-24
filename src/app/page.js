"use client";

import React, { useEffect, useState } from "react";
import {
  ArrowUp,
  Award,
  Briefcase,
  ChevronRight,
  Code,
  Download,
  ExternalLink,
  FolderOpen,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  Sparkles,
  Sun,
  User,
  X,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import mypfp from "../../public/images/about.png";

const resumePath = "/Jahswill_Onuegbu_Software_Engineer.pdf";

const navItems = [
  { id: "about", label: "About", icon: User },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "skills", label: "Skills", icon: Code },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "projects", label: "Projects", icon: FolderOpen },
];

const skills = [
  "C",
  "Python",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "FastAPI",
  "PHP",
  "Laravel",
  "Tailwind CSS",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Redis",
  "SQLite",
  "Docker",
  "Kubernetes",
  "AWS",
  "Microsoft Azure",
  "GCP",
  "GitHub Actions",
  "CI/CD",
  "OpenAI API",
  "LLM Integration",
  "AI Agents",
  "GraphQL",
];

const competencies = [
  "End-to-end product architecture, engineering leadership, and delivery",
  "AI agent development, ML engineering, NLP, and LLM integration",
  "Cloud-native delivery across AWS, Microsoft Azure, and Google Cloud",
  "REST, GraphQL, webhooks, OAuth, and microservices architecture",
  "OWASP principles, JWT authentication, and automated testing",
  "Scalable SaaS, Web2, and Web3 product engineering",
];

const experiences = [
  {
    title: "Coding Instructor",
    company: "ESINED Group",
    meta: "Hybrid, Malta",
    period: "2026",
    url: "https://www.esinedgroup.com",
    description:
      "Deliver structured coding instruction in hybrid formats, adapting lessons and support to varied skill levels.",
    highlights: [
      "Design hands-on exercises and guided projects that turn programming concepts into practical skills.",
      "Provide individualized code review, debugging support, assignment feedback, and technical mentoring.",
    ],
    footerLabel: "Focus",
    stack: "Programming instruction, guided projects, code review, debugging support",
  },
  {
    title: "Software Engineer (Freelance)",
    company: "Ceemore Smart Luxury Estates",
    meta: "Remote",
    period: "Jan 2026 - Mar 2026",
    url: "https://ceemoresmartluxuryestates.com/",
    description:
      "Led end-to-end delivery of a custom real estate platform, from requirements and architecture through production.",
    highlights: [
      "Built secure authentication and a role-based staff portal for analytics, listings, and administration.",
      "Created workflows for property projects, client records, inquiries, support, and follow-ups.",
      "Built scalable Node.js APIs and PostgreSQL models for high-traffic workloads.",
      "Deployed to Microsoft Azure with GitHub Actions CI/CD and production release pipelines.",
    ],
    stack: "Next.js, React, TypeScript, Node.js, PostgreSQL, Microsoft Azure, GitHub Actions",
  },
  {
    title: "Technical Lead & Senior Full-Stack Engineer",
    company: "HackrPost",
    meta: "AI-Powered SaaS Platform · Remote",
    period: "2025 - 2026",
    description:
      "Led the engineering team and owned the architecture, delivery, and deployment of an AI content and social publishing platform.",
    highlights: [
      "Architected Node.js, Express, and MongoDB services for content, analytics, and publishing.",
      "Integrated OpenAI and fine-tuned models using cleaned, structured, and validated training data.",
      "Built X scheduling and AI auto-posting with OAuth, BullMQ, Redis, and multiple workers.",
      "Deployed Docker services to Azure and GCP with CI/CD and automated test coverage.",
    ],
    stack: "Next.js, TypeScript, Node.js, Express, MongoDB, OpenAI, BullMQ, Redis, Docker, Azure, GCP",
  },
  {
    title: "AI & Software Engineer",
    company: "AurifyAI",
    meta: "EdTech Platform · Remote, Nigeria",
    period: "2024 - 2025",
    description:
      "Built an AI learning platform with multimodal study experiences, agentic workflows, and cloud-native services.",
    highlights: [
      "Built a responsive Next.js interface for AI-generated study content, quizzes, and audio.",
      "Designed multi-stage AI and agentic pipelines for content generation and workflow orchestration.",
      "Built FastAPI services handling 10,000+ daily requests with 99.9% uptime.",
      "Deployed Dockerized microservices with Kubernetes and GitHub Actions CI/CD.",
    ],
    stack: "Next.js, FastAPI, Gemini, Vertex AI, AWS S3, Celery, Redis, Docker, Kubernetes",
  },
  {
    title: "AI Integration Specialist & Engineer",
    company: "Gold Dust AI",
    meta: "Remote",
    period: "2023 · 6 months",
    description:
      "Led delivery of AI automation, integration, and workflow solutions for consulting clients.",
    highlights: [
      "Designed AI workflows integrating OpenAI and LLM APIs with client applications and business systems.",
      "Connected forms, CRM, analytics, and third-party services through REST APIs and webhooks.",
      "Built a responsive Next.js website with strong performance, accessibility, and lead capture.",
      "Added validation, logging, monitoring, and error handling for production reliability.",
    ],
    stack: "OpenAI, LLM APIs, REST APIs, webhooks, Next.js, React, analytics, monitoring",
  },
  {
    title: "Lead Frontend Engineer",
    company: "PLPFactory",
    meta: "Design Marketplace · Remote, Nigeria",
    period: "2022 - 2024",
    description:
      "Led frontend engineering for a design marketplace serving more than 3,000 users and visitors.",
    highlights: [
      "Built responsive flows for browsing, buying, selling, and managing digital design assets.",
      "Created reusable component systems and consistent UI patterns across the platform.",
      "Implemented Redux state management for sessions, marketplace data, and user interactions.",
      "Led planning, code reviews, UI testing, and delivery coordination across teams.",
    ],
    stack: "React, Redux, component systems, UI testing, engineering leadership",
  },
  {
    title: "Programming Instructor & Community Mentor",
    company: "Coderzwave",
    meta: "Online Coding Community · Remote",
    period: "2022",
    description:
      "Taught programming to hundreds of students through structured live classes, exercises, and community workshops.",
    highlights: [
      "Designed practical lessons and guided projects that made core concepts accessible.",
      "Mentored students through debugging, problem-solving, code reviews, and technical challenges.",
      "Led interactive technical discussions and question-and-answer workshops.",
    ],
    footerLabel: "Focus",
    stack: "Live instruction, coding exercises, mentoring, code review, community learning",
  },
  {
    title: "Full-Stack Software Engineer & Business Systems",
    company: "J.J Willmin",
    meta: "Hybrid, Nigeria",
    period: "Jan 2021 - Dec 2022",
    url: "https://www.jjwillminmalls.com/",
    description:
      "Built business systems for construction projects, clients, employees, advertising, and sales operations.",
    highlights: [
      "Built a custom CRM for managing and following up on leads across the sales pipeline.",
      "Engineered a load-balanced architecture supporting thousands of requests per minute.",
      "Created client and employee workflows that centralized records and operational activities.",
      "Implemented visit, event, campaign, and advertising performance tracking.",
    ],
    stack: "React, jQuery, Styled Components, CRM systems, load-balanced architecture, analytics",
  },
];

const education = [
  {
    title: "International Diploma in Information Technology",
    institution: "Domain Academy",
    location: "Malta",
    status: "Completed",
  },
  {
    title: "CS50: Introduction to Computer Science",
    institution: "Harvard University",
    location: "Online",
    status: "Ongoing",
  },
];

const certifications = [
  { title: "Frontend Developer (React) Certificate", issuer: "HackerRank" },
  { title: "Software Engineer Certificate", issuer: "HackerRank" },
  { title: "The Complete Full-Stack Web Development Bootcamp", issuer: "Udemy" },
];

const projects = [
  {
    title: "C Algorithms & Core Systems Engine",
    eyebrow: "Harvard CS50 Coursework",
    description:
      "A low-level systems collection implemented in C, covering graph algorithms, high-performance lookup, cryptography, and manual memory management.",
    highlights: [
      "Built Plurality and Tideman voting simulations with directed graphs and recursive cycle detection.",
      "Engineered a spell checker around a custom hash table and bucket-based lookup strategy.",
      "Managed memory directly with malloc and free, using Valgrind to eliminate leaks and invalid access.",
      "Implemented Caesar and Vigenere ciphers with modular transformations and robust input handling.",
    ],
    tags: ["C", "Algorithms", "Data Structures", "Valgrind"],
    featured: true,
  },
  {
    title: "BuildPilot",
    eyebrow: "AI Startup Planning Platform",
    url: "https://buildpilot-production-12ce.up.railway.app/",
    description:
      "Generates structured startup roadmaps, MVP scopes, target users, and execution phases.",
    tags: ["Laravel", "Inertia", "OpenAI", "Pest"],
  },
  {
    title: "Inkwell",
    eyebrow: "AI Writing Assistant",
    url: "https://useinkwell.vercel.app/",
    description:
      "Helps users strengthen, reshape, and refine their writing through an intentionally focused interface.",
    tags: ["AI", "Frontend", "SaaS"],
  },
];

const contactItems = [
  { icon: Mail, label: "Email", value: "onuegbujahswill@gmail.com", href: "mailto:onuegbujahswill@gmail.com" },
  { icon: Phone, label: "Phone", value: "+356 9998 9225", href: "tel:+35699989225" },
  { icon: MapPin, label: "Location", value: "Malta" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/Jahswill-web-dev", icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jahswillc/", icon: FaLinkedin },
  { label: "X", href: "https://x.com/Jahswille1", icon: BsTwitterX },
];

function SectionHeading({ label, title, description, light = false }) {
  return (
    <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
      <div>
        <p className="text-sm font-semibold uppercase text-accent">{label}</p>
        <h2 className={`mt-2 text-4xl font-semibold ${light ? "text-canvas" : "text-ink dark:text-canvas"}`}>{title}</h2>
      </div>
      <p className={`max-w-xl text-base leading-7 ${light ? "text-canvas/70" : "text-ink/70 dark:text-canvas/70"}`}>
        {description}
      </p>
    </div>
  );
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
      const currentSection = navItems.findLast(({ id }) => {
        const element = document.getElementById(id);
        return element && element.getBoundingClientRect().top <= 120;
      });
      if (currentSection) setActiveSection(currentSection.id);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="min-h-screen bg-canvas text-ink transition-colors duration-300 dark:bg-ink dark:text-canvas">
        <nav className={`fixed top-0 z-50 w-full border-b transition-all duration-300 ${
          isScrolled
            ? "border-ink/10 bg-canvas/95 shadow-sm backdrop-blur dark:border-canvas/10 dark:bg-ink/95"
            : "border-transparent bg-canvas/80 backdrop-blur dark:bg-ink/80"
        }`}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-4">
              <button onClick={() => scrollToSection("about")} className="text-left text-lg font-semibold" aria-label="Scroll to about">
                Jahswill Onuegbu
              </button>

              <div className="hidden items-center gap-1 lg:flex">
                {navItems.map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className={`inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                      activeSection === id
                        ? "bg-accent text-canvas"
                        : "text-ink/65 hover:bg-ink/5 hover:text-ink dark:text-canvas/70 dark:hover:bg-canvas/10 dark:hover:text-canvas"
                    }`}
                  >
                    <Icon size={16} />
                    {label}
                  </button>
                ))}
              </div>

              <div className="hidden items-center gap-2 lg:flex">
                <button
                  onClick={() => setIsDarkMode((current) => !current)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-ink/15 transition-colors hover:border-accent hover:text-accent dark:border-canvas/20"
                  aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                >
                  {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
                </button>
                <a href={resumePath} download className="inline-flex items-center gap-2 rounded-md border border-ink/15 px-4 py-2 text-sm font-semibold transition-colors hover:border-accent hover:text-accent dark:border-canvas/20">
                  <Download size={16} />
                  Resume
                </a>
              </div>

              <div className="flex items-center gap-2 lg:hidden">
                <button onClick={() => setIsDarkMode((current) => !current)} className="rounded-md border border-ink/15 p-2 dark:border-canvas/20" aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}>
                  {isDarkMode ? <Sun size={22} /> : <Moon size={22} />}
                </button>
                <button onClick={() => setIsMenuOpen((current) => !current)} className="rounded-md border border-ink/15 p-2 dark:border-canvas/20" aria-label="Toggle menu">
                  {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
              </div>
            </div>

            {isMenuOpen && (
              <div className="mb-4 grid gap-2 rounded-md border border-ink/10 bg-canvas p-3 shadow-sm dark:border-canvas/10 dark:bg-ink lg:hidden">
                {navItems.map(({ id, label, icon: Icon }) => (
                  <button key={id} onClick={() => scrollToSection(id)} className={`flex items-center gap-2 rounded-md px-3 py-2 text-left text-sm font-medium ${
                    activeSection === id ? "bg-accent text-canvas" : "text-ink/70 hover:bg-ink/5 dark:text-canvas/70 dark:hover:bg-canvas/10"
                  }`}>
                    <Icon size={16} />
                    {label}
                  </button>
                ))}
                <a href={resumePath} download className="flex items-center gap-2 rounded-md border border-ink/15 px-3 py-2 text-sm font-semibold dark:border-canvas/20">
                  <Download size={16} />
                  Download Resume
                </a>
              </div>
            )}
          </div>
        </nav>

        <main>
          <section id="about" className="px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-24 lg:pt-36">
            <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-accent/20 px-3 py-2 text-sm font-semibold text-accent shadow-sm">
                  <Sparkles size={16} />
                  Software engineer · AI integration · Full-stack development
                </div>
                <h1 className="max-w-4xl text-5xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
                  I engineer intelligent products that are built to scale.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/70 dark:text-canvas/70">
                  I&apos;m Jahswill Onuegbu, a software engineer with 5+ years of experience building SaaS products,
                  cloud-native platforms, and production-ready Web2 and Web3 solutions. I specialize in Python,
                  JavaScript, AI agents, machine learning, LLM integration, and full-stack systems.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a href="mailto:onuegbujahswill@gmail.com" className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-canvas transition-colors hover:bg-accent/90">
                    <Mail size={18} />
                    Get in touch
                  </a>
                  <a href={resumePath} download className="inline-flex items-center justify-center gap-2 rounded-md border border-ink/15 px-5 py-3 text-sm font-semibold transition-colors hover:border-accent hover:text-accent dark:border-canvas/20">
                    <Download size={18} />
                    Download Resume
                  </a>
                </div>
                <div className="mt-8 grid gap-3 text-sm sm:grid-cols-3">
                  {contactItems.map(({ icon: Icon, label, value, href }) => {
                    const content = (
                      <span className="flex min-w-0 items-center gap-2 rounded-md border border-ink/10 px-3 py-3 shadow-sm dark:border-canvas/10">
                        <Icon size={16} className="shrink-0 text-accent" />
                        <span className="min-w-0">
                          <span className="block text-xs font-semibold uppercase text-ink/45 dark:text-canvas/45">{label}</span>
                          <span className="block truncate text-ink/75 dark:text-canvas/75">{value}</span>
                        </span>
                      </span>
                    );
                    return href ? <a key={label} href={href}>{content}</a> : <div key={label}>{content}</div>;
                  })}
                </div>
              </div>

              <div className="lg:justify-self-end">
                <div className="overflow-hidden rounded-md border border-ink/10 p-3 shadow-sm dark:border-canvas/10">
                  <div className="grid gap-5 sm:grid-cols-[180px_1fr] lg:grid-cols-1">
                    <div className="relative aspect-square overflow-hidden rounded-md bg-ink/5 dark:bg-canvas/10">
                      <Image src={mypfp} alt="Jahswill Onuegbu" fill sizes="(max-width: 640px) 100vw, 360px" className="object-cover" priority />
                    </div>
                    <div className="p-2">
                      <p className="text-sm font-semibold uppercase text-ink/45 dark:text-canvas/45">Currently based in</p>
                      <p className="mt-1 text-2xl font-semibold">Malta</p>
                      <p className="mt-3 text-sm leading-6 text-ink/70 dark:text-canvas/70">
                        Building production AI and cloud systems, while teaching the next generation of developers.
                      </p>
                      <div className="mt-5 flex gap-3">
                        {socialLinks.map(({ label, href, icon: Icon }) => (
                          <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-ink/10 text-ink/75 transition-colors hover:border-accent hover:text-accent dark:border-canvas/10 dark:text-canvas/75">
                            <Icon size={19} />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {[["5+", "Years"], ["10k+", "Daily API calls"], ["99.9%", "Uptime"]].map(([value, label]) => (
                    <div key={label} className="rounded-md border border-ink/10 p-4 shadow-sm dark:border-canvas/10">
                      <p className="text-2xl font-semibold">{value}</p>
                      <p className="mt-1 text-xs font-medium uppercase text-ink/55 dark:text-canvas/55">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="experience" className="border-y border-ink/10 px-4 py-16 dark:border-canvas/10 sm:px-6 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-7xl">
              <SectionHeading
                label="Experience"
                title="From product architecture to production."
                description="Leadership and hands-on delivery across AI SaaS, cloud platforms, marketplaces, business systems, and technical education."
              />
              <div className="grid gap-4">
                {experiences.map((experience) => (
                  <article key={`${experience.company}-${experience.period}`} className="rounded-md border border-ink/10 p-5 dark:border-canvas/10">
                    <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 text-sm text-ink/55 dark:text-canvas/55">
                          <span>{experience.period}</span>
                          <span className="h-1 w-1 rounded-full bg-accent" />
                          <span>{experience.meta}</span>
                        </div>
                        <h3 className="mt-3 text-2xl font-semibold">{experience.title}</h3>
                        {experience.url ? (
                          <Link href={experience.url} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent/80">
                            {experience.company}
                            <ExternalLink size={15} />
                          </Link>
                        ) : <p className="mt-2 text-sm font-semibold text-accent">{experience.company}</p>}
                        <p className="mt-4 text-sm leading-6 text-ink/70 dark:text-canvas/70">{experience.description}</p>
                      </div>
                      <div>
                        <div className="grid gap-2 sm:grid-cols-2">
                          {experience.highlights.map((highlight) => (
                            <div key={highlight} className="flex gap-2 text-sm leading-6 text-ink/75 dark:text-canvas/75">
                              <ChevronRight size={16} className="mt-1 shrink-0 text-accent" />
                              <span>{highlight}</span>
                            </div>
                          ))}
                        </div>
                        <p className="mt-5 rounded-md border border-ink/10 p-3 text-sm leading-6 text-ink/70 dark:border-canvas/10 dark:text-canvas/70">
                          <span className="font-semibold text-ink dark:text-canvas">{experience.footerLabel || "Stack"}: </span>
                          {experience.stack}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="skills" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-sm font-semibold uppercase text-accent">Technical range</p>
                <h2 className="mt-2 text-4xl font-semibold">Systems thinking across the stack.</h2>
                <p className="mt-4 text-base leading-7 text-ink/70 dark:text-canvas/70">
                  Product engineering from low-level C and backend services to responsive interfaces, AI pipelines,
                  cloud infrastructure, security, and test automation.
                </p>
              </div>
              <div className="grid gap-6">
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {skills.map((skill) => (
                    <div key={skill} className="rounded-md border border-ink/10 px-4 py-3 text-sm font-semibold text-ink/75 shadow-sm dark:border-canvas/10 dark:text-canvas/75">
                      {skill}
                    </div>
                  ))}
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {competencies.map((competency) => (
                    <div key={competency} className="flex items-start gap-3 rounded-md border border-ink/10 px-4 py-3 text-sm leading-6 text-ink/75 dark:border-canvas/10 dark:text-canvas/75">
                      <Code size={16} className="mt-1 shrink-0 text-accent" />
                      {competency}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="education" className="border-y border-ink/10 bg-ink px-4 py-16 text-canvas dark:border-canvas/10 sm:px-6 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-7xl">
              <SectionHeading
                label="Education & certifications"
                title="A foundation that keeps expanding."
                description="Formal information technology training, computer science coursework, and independently validated software engineering skills."
                light
              />
              <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
                <div>
                  <div className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase text-canvas/55">
                    <GraduationCap size={18} className="text-accent" />
                    Education
                  </div>
                  <div className="grid gap-4">
                    {education.map((item) => (
                      <article key={item.title} className="rounded-md border border-canvas/10 bg-canvas/[0.04] p-5">
                        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                          <div>
                            <h3 className="text-xl font-semibold">{item.title}</h3>
                            <p className="mt-2 text-sm text-canvas/65">{item.institution} · {item.location}</p>
                          </div>
                          <span className="w-fit rounded-md border border-accent/30 px-2 py-1 text-xs font-semibold text-accent">{item.status}</span>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase text-canvas/55">
                    <Award size={18} className="text-accent" />
                    Certifications
                  </div>
                  <div className="grid gap-4">
                    {certifications.map((item) => (
                      <article key={item.title} className="flex items-start gap-3 rounded-md border border-canvas/10 bg-canvas/[0.04] p-5">
                        <Award size={18} className="mt-1 shrink-0 text-accent" />
                        <div>
                          <h3 className="font-semibold">{item.title}</h3>
                          <p className="mt-1 text-sm text-canvas/60">{item.issuer}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="projects" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-7xl">
              <SectionHeading
                label="Key projects"
                title="Algorithms, systems, and AI products."
                description="Selected work showing both computer science fundamentals and production-focused product engineering."
              />
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                  <article key={project.title} className={`${project.featured ? "md:col-span-2 lg:col-span-2" : ""} flex min-h-[270px] flex-col justify-between rounded-md border border-ink/10 p-5 transition-colors hover:border-accent dark:border-canvas/10`}>
                    <div>
                      <p className="text-xs font-semibold uppercase text-accent">{project.eyebrow}</p>
                      <h3 className="mt-2 text-xl font-semibold">{project.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-ink/70 dark:text-canvas/70">{project.description}</p>
                      {project.highlights && (
                        <div className="mt-5 grid gap-2 sm:grid-cols-2">
                          {project.highlights.map((highlight) => (
                            <div key={highlight} className="flex gap-2 text-sm leading-6 text-ink/70 dark:text-canvas/70">
                              <ChevronRight size={16} className="mt-1 shrink-0 text-accent" />
                              {highlight}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="mt-6">
                      <div className="mb-5 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="rounded-md border border-ink/10 px-2 py-1 text-xs font-medium text-ink/65 dark:border-canvas/10 dark:text-canvas/65">{tag}</span>
                        ))}
                      </div>
                      {project.url ? (
                        <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent/80">
                          View project
                          <ExternalLink size={16} />
                        </a>
                      ) : (
                        <span className="text-sm font-semibold text-ink/45 dark:text-canvas/45">Coursework project collection</span>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-ink/10 px-4 py-10 dark:border-canvas/10 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-ink/55 dark:text-canvas/55 md:flex-row md:items-center md:justify-between">
            <p>Built with Next.js and Tailwind CSS.</p>
            <p>Copyright 2026 Jahswill Onuegbu. All rights reserved.</p>
          </div>
        </footer>

        <button onClick={() => scrollToSection("about")} className="fixed bottom-6 right-6 inline-flex h-11 w-11 items-center justify-center rounded-md bg-accent text-canvas shadow-lg transition-colors hover:bg-accent/90" aria-label="Scroll to top">
          <ArrowUp size={20} />
        </button>
      </div>
    </div>
  );
}
