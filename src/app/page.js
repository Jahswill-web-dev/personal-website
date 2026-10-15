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

const skillGroups = [
  {
    title: "Frontend",
    skills: ["JavaScript", "TypeScript", "React", "Next.js", "Redux", "Tailwind CSS", "Lexical", "Responsive UI", "Accessibility", "Component Systems"],
  },
  {
    title: "Backend & Data",
    skills: ["Python", "Node.js", "Express", "FastAPI", "PHP", "Laravel", "REST APIs", "GraphQL", "PostgreSQL", "MongoDB", "Redis", "SQLAlchemy"],
  },
  {
    title: "AI & Cloud",
    skills: ["LLMs", "AI Agents", "Gemini", "Vertex AI", "OpenAI", "OpenRouter", "Docker", "Kubernetes", "AWS", "Azure", "GCP"],
  },
  {
    title: "Delivery & Quality",
    skills: ["GitHub Actions", "CI/CD", "Celery", "BullMQ", "OAuth", "JWT", "Pytest", "Unit Testing", "Integration Testing", "E2E Testing", "Logging", "Monitoring"],
  },
];

const experienceGroups = [
  {
    title: "Core professional experience",
    experiences: [
      {
        company: "AurifyAI",
        meta: "EdTech Platform",
        period: "Jan 2023 - Dec 2025",
        roles: [
          { title: "Lead Frontend Developer", period: "Jan 2023 - Dec 2023" },
          { title: "AI Engineer", period: "Jan 2024 - Dec 2025" },
        ],
        description:
          "Progressed from leading frontend delivery for an AI-powered learning platform to engineering its multi-stage AI, backend, and cloud systems.",
        highlights: [
          "Created reusable, accessible Next.js and TypeScript experiences for generated study content, quizzes, guided learning, and audio.",
          "Designed Gemini and Vertex AI pipelines for content generation, workflow orchestration, and scalable inference.",
          "Built FastAPI services with Celery, Redis, JWT authentication, AWS S3, validation, retries, and error handling.",
          "Delivered TTS and AI audio capabilities and deployed Dockerized microservices with Kubernetes and GitHub Actions CI/CD.",
        ],
        stack: "Next.js, TypeScript, FastAPI, Gemini, Vertex AI, Celery, Redis, AWS S3, Docker, Kubernetes",
      },
      {
        company: "J.J Willmin",
        meta: "Construction & Business Systems",
        period: "Jan 2021 - Jan 2024",
        url: "https://www.jjwillminmalls.com/",
        roles: [
          { title: "Junior Frontend Developer", period: "Jan 2021 - Dec 2021" },
          { title: "Full-Stack Engineer", period: "Jan 2022 - Jan 2024" },
        ],
        description:
          "Progressed from responsive frontend delivery into full-stack ownership of a custom business application and CRM.",
        highlights: [
          "Built React, jQuery, and Styled Components workflows for construction projects, client records, lead generation, and internal operations.",
          "Developed systems for projects, clients, employees, sales follow-up, operational reporting, and centralized data handling.",
          "Integrated APIs, analytics, automated notifications, visit and event records, and advertising-performance tracking.",
          "Supported production reliability and translated business requirements into reusable operational workflows.",
        ],
        stack: "React, jQuery, Styled Components, APIs, analytics, CRM workflows, production support",
      },
    ],
  },
  {
    title: "Freelance projects",
    experiences: [
      {
        title: "Technical Lead & Senior Full-Stack Engineer (Freelance)",
        company: "HackrPost",
        meta: "AI-Powered SaaS Platform",
        period: "Dec 2025 - May 2026",
        url: "http://hackrpost.com/",
        description:
          "Led architecture and engineering delivery across product interfaces, backend services, analytics, AI integration, and publishing workflows.",
        highlights: [
          "Built with Next.js, TypeScript, Node.js, Express, and MongoDB.",
          "Integrated OpenAI and fine-tuned models using cleaned and validated training data, improving consistency and relevance.",
          "Built X API scheduling and AI auto-posting with OAuth, BullMQ, Redis, and multiple worker services.",
          "Deployed Docker services to Azure and GCP through CI/CD with unit, integration, and end-to-end testing.",
        ],
        stack: "Next.js, TypeScript, Node.js, Express, MongoDB, OpenAI, OAuth, BullMQ, Redis, Docker, Azure, GCP",
      },
      {
        title: "Senior Frontend Developer (Freelance)",
        company: "PLPFactory",
        meta: "Design Marketplace",
        period: "Oct 2022 - Dec 2024",
        description:
          "Led frontend delivery for a React and Redux marketplace serving 10,000 visitors.",
        highlights: [
          "Built responsive workflows for browsing, buying, selling, and managing design assets.",
          "Developed reusable component systems and managed application state, forms, loading states, and error recovery.",
          "Added UI tests for critical workflows and supported code review, release validation, and cross-team coordination.",
        ],
        stack: "React, Redux, component systems, state management, forms, UI testing",
      },
      {
        title: "Software Engineer (Freelance)",
        company: "Ceemore Smart Luxury Estates",
        meta: "Real Estate Platform",
        period: "Jan 2026 - Mar 2026",
        url: "https://ceemoresmartluxuryestates.com/",
        description:
          "Delivered a custom real estate platform with secure authentication, a role-based staff portal, and self-service content tools.",
        highlights: [
          "Built workflows for listings, property projects, client records, inquiries, support, follow-ups, analytics, and administration.",
          "Engineered the platform with Next.js, TypeScript, Node.js, and PostgreSQL.",
          "Managed production deployment to Microsoft Azure through GitHub Actions CI/CD.",
        ],
        stack: "Next.js, TypeScript, Node.js, PostgreSQL, Microsoft Azure, GitHub Actions",
      },
      {
        title: "Frontend Developer (Freelance)",
        company: "DVSongrl.com",
        meta: "Oil Services Company",
        period: "Jul 2026",
        description:
          "Designed and built a client-specific frontend, translating business requirements into a responsive production interface.",
        highlights: [
          "Handled frontend implementation, responsive quality, deployment preparation, and cloud delivery.",
          "Completed the working project in under two weeks, meeting the client deadline within a one-month engagement.",
        ],
        stack: "Next.js, TypeScript, Tailwind CSS, responsive UI, cloud delivery",
      },
    ],
  },
  {
    title: "Additional experience",
    experiences: [
      {
        title: "Full-Stack Developer",
        company: "Gold Dust AI",
        meta: "Consulting",
        period: "2023 (6 months)",
        description:
          "Built a responsive Next.js and React website and connected business systems for consulting clients.",
        highlights: [
          "Integrated forms, CRM, analytics, and third-party services through REST APIs and webhooks.",
          "Improved validation, logging, monitoring, SEO, accessibility, and error handling.",
        ],
        stack: "Next.js, React, REST APIs, webhooks, CRM, analytics, logging, monitoring",
      },
      {
        title: "Coding Instructor & Community Mentor",
        company: "ESINED Group and Coderzwave",
        meta: "Technical Education",
        period: "2022 - 2026",
        url: "https://www.esinedgroup.com",
        description:
          "Delivered coding instruction and technical mentoring for learners at varied skill levels.",
        highlights: [
          "Designed guided projects and practical exercises.",
          "Provided code reviews, debugging support, assignment feedback, and individualized mentoring.",
        ],
        footerLabel: "Focus",
        stack: "Coding instruction, guided projects, code review, debugging support, mentoring",
      },
    ],
  },
];

const education = [
  {
    title: "OTHM Level 4 Diploma in Information Technology (EQF/MQF Level 5)",
    institution: "European College of Innovation (ECI)",
    location: "Malta",
    status: "Expected Nov 2026",
  },
  {
    title: "International Diploma in Information Technology (MQF Level 4)",
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
  { title: "Complete Full-Stack Web Development Bootcamp", issuer: "Udemy" },
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
    eyebrow: "AI Voice Interview Platform",
    url: "https://useinkwell.vercel.app/",
    description:
      "Runs secure guest voice interviews with invitation links, article context, live transcript capture, durable persistence, and source-linked AI insights.",
    tags: ["Next.js", "OpenAI Realtime", "FastAPI", "PostgreSQL"],
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
                  AI &amp; Full-Stack Software Engineer
                </div>
                <h1 className="max-w-4xl text-5xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
                  I engineer intelligent products that are built to scale.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/70 dark:text-canvas/70">
                  I&apos;m Jahswill Onuegbu, an AI and full-stack software engineer with 5+ years of experience progressing
                  from frontend development into end-to-end product, backend, AI, and cloud engineering. I build responsive
                  interfaces, secure APIs, AI-powered workflows, asynchronous services, and production deployments.
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
                        Building production software across SaaS, EdTech, marketplaces, and business systems.
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
                  {[["5+", "Years"], ["10,000", "Marketplace visitors"], ["3", "Cloud platforms"]].map(([value, label]) => (
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
              <div className="grid gap-10">
                {experienceGroups.map((group) => (
                  <div key={group.title}>
                    <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-accent">{group.title}</h3>
                    <div className="grid gap-4">
                      {group.experiences.map((experience) => (
                        <article key={`${experience.company}-${experience.period}`} className="rounded-md border border-ink/10 p-5 dark:border-canvas/10">
                          <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
                            <div>
                              <div className="flex flex-wrap items-center gap-2 text-sm text-ink/55 dark:text-canvas/55">
                                {experience.period && <span>{experience.period}</span>}
                                {experience.period && experience.meta && <span className="h-1 w-1 rounded-full bg-accent" />}
                                <span>{experience.meta}</span>
                              </div>
                              {experience.url ? (
                                <Link href={experience.url} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 text-2xl font-semibold hover:text-accent">
                                  {experience.company}
                                  <ExternalLink size={17} />
                                </Link>
                              ) : <h4 className="mt-3 text-2xl font-semibold">{experience.company}</h4>}
                              {experience.roles ? (
                                <div className="mt-4 grid gap-2">
                                  {experience.roles.map((role) => (
                                    <div key={`${role.title}-${role.period}`} className="flex flex-col gap-1 border-l-2 border-accent/40 pl-3 text-sm sm:flex-row sm:items-center sm:justify-between">
                                      <span className="font-semibold">{role.title}</span>
                                      <span className="text-ink/55 dark:text-canvas/55">{role.period}</span>
                                    </div>
                                  ))}
                                </div>
                              ) : <p className="mt-2 text-sm font-semibold text-accent">{experience.title}</p>}
                              <p className="mt-4 text-sm leading-6 text-ink/70 dark:text-canvas/70">{experience.description}</p>
                            </div>
                            <div>
                              {experience.highlights.length > 0 && (
                                <div className="grid gap-2 sm:grid-cols-2">
                                  {experience.highlights.map((highlight) => (
                                    <div key={highlight} className="flex gap-2 text-sm leading-6 text-ink/75 dark:text-canvas/75">
                                      <ChevronRight size={16} className="mt-1 shrink-0 text-accent" />
                                      <span>{highlight}</span>
                                    </div>
                                  ))}
                                </div>
                              )}
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
                ))}
              </div>
            </div>
          </section>

          <section id="skills" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr]">
              <div>
                <p className="text-sm font-semibold uppercase text-accent">Technical range</p>
                <h2 className="mt-2 text-4xl font-semibold">Systems thinking across the stack.</h2>
                <p className="mt-4 text-base leading-7 text-ink/70 dark:text-canvas/70">
                  Product engineering across responsive interfaces, secure backend systems, AI workflows, cloud delivery,
                  and automated quality practices.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {skillGroups.map((group) => (
                  <article key={group.title} className="rounded-md border border-ink/10 p-5 shadow-sm dark:border-canvas/10">
                    <div className="flex items-center gap-2">
                      <Code size={17} className="text-accent" />
                      <h3 className="font-semibold">{group.title}</h3>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span key={skill} className="rounded-md border border-ink/10 px-2.5 py-1.5 text-xs font-medium text-ink/70 dark:border-canvas/10 dark:text-canvas/70">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
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
