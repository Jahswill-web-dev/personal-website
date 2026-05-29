"use client";

import React, { useEffect, useState } from "react";
import {
  ArrowUp,
  Briefcase,
  ChevronRight,
  Code,
  Download,
  ExternalLink,
  FolderOpen,
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
// BlogSection is temporarily disabled until the blog experience is ready.
// import { BlogSection } from "../components/BlogSection";

const navItems = [
  { id: "about", label: "About", icon: User },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "skills", label: "Skills", icon: Code },
  { id: "projects", label: "Projects", icon: FolderOpen },
];

const skills = [
  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "PHP 8",
  "Laravel",
  "Inertia.js",
  "Node.js",
  "Express.js",
  "Tailwind CSS",
  "MySQL",
  "MongoDB Atlas",
  "SQLite",
  "Redis",
  "OpenAI API",
  "LangChain.js",
  "BullMQ",
  "Pest PHP",
];

const competencies = [
  "SaaS architecture and product development",
  "AI integration and structured LLM outputs",
  "Frontend architecture and responsive UI",
  "Laravel queues and async processing",
  "API design, documentation, and testing",
  "Team leadership and developer mentorship",
];

const experiences = [
  {
    title: "Full-Stack Developer",
    company: "BuildPilot",
    meta: "Personal Project / Portfolio",
    period: "2025",
    url: "https://buildpilot-production-12ce.up.railway.app/",
    description:
      "Built an AI-powered startup planning platform that turns raw founder ideas into structured roadmaps, from authentication through deployment.",
    highlights: [
      "Integrated OpenAI through LangChain.js for structured roadmap generation.",
      "Used Laravel Queues so AI generation never blocks the browser.",
      "Covered auth, authorization, AI workflows, fallback handling, and business logic with Pest PHP tests.",
      "Designed normalization and fallback services for incomplete AI responses or API downtime.",
    ],
    stack:
      "PHP 8.3, Laravel 13, React 19, Inertia.js, Tailwind CSS 4, SQLite, Laravel Queues, LangChain.js, OpenAI API, Pest PHP",
  },
  {
    title: "Technical Lead",
    company: "HackrPost",
    meta: "AI-Powered SaaS Platform",
    period: "2025 - 2026",
    url: "http://hackrpost.com/",
    description:
      "Architected and led full-stack development of an AI-powered social media SaaS with a Node.js backend, Next.js frontend, and TypeScript across the product.",
    highlights: [
      "Trained a custom model for content optimization and integrated OpenAI for generation.",
      "Built bulk scheduling against X API v2 with BullMQ and Upstash Redis.",
      "Designed MongoDB Atlas schemas for fast content and scheduling workflows.",
      "Maintained API clarity with OpenAPI/Swagger documentation.",
    ],
    stack:
      "Node.js, Express, Next.js, React, TypeScript, MongoDB Atlas, BullMQ, Redis, OpenAI API, OpenAPI/Swagger",
  },
  {
    title: "Lead Frontend Developer",
    company: "AurifyAI",
    meta: "EdTech Platform",
    period: "2023 - 2025",
    url: null,
    description:
      "Led the frontend team on an AI-powered EdTech platform with study summaries, intelligent test generation, and text-to-speech audio features.",
    highlights: [
      "Reduced content load times by 40% with code splitting, lazy loading, and caching.",
      "Mentored junior developers on component architecture, state management, and TypeScript.",
      "Contributed to architecture decisions for a scalable student-facing product.",
      "Shipped responsive experiences across desktop and mobile.",
    ],
    stack: "React.js, Next.js, TypeScript, OpenAI API, Text-to-Speech",
  },
  {
    title: "Frontend Developer / Full-Stack Designer",
    company: "Gold Dust AI",
    meta: "Freelance Project",
    period: "Mid 2023 - 6 months",
    url: "https://golddustai.vercel.app/",
    description:
      "Designed and developed a responsive company website for an AI consulting firm using React, Next.js, and modern frontend practices.",
    highlights: [
      "Translated the company positioning into a clear, conversion-focused website.",
      "Built responsive layouts for desktop and mobile visitors.",
      "Collaborated with stakeholders on brand direction, content structure, and launch details.",
      "Optimized frontend delivery with image and implementation best practices.",
    ],
    stack: "React, Next.js, Tailwind CSS, responsive web design",
  },
  {
    title: "Frontend Developer",
    company: "J.J WILLMIN",
    meta: "Web Development & Mentorship",
    period: "2022 - 2023",
    url: "https://www.jjwillminmalls.com/",
    description:
      "Built responsive marketing pages and supported frontend delivery for campaign and business web experiences.",
    highlights: [
      "Created landing pages and responsive website interfaces for campaign needs.",
      "Improved page performance through image optimization and code minification.",
      "Mentored junior developers and students in practical web development.",
      "Supported website functionality improvements for target audience needs.",
    ],
    stack: "HTML, CSS, JavaScript, React, responsive web design",
  },
];

const projects = [
  {
    title: "BuildPilot",
    url: "https://buildpilot-production-12ce.up.railway.app/",
    description:
      "AI startup planning platform that generates structured roadmaps, MVP scopes, target users, and execution phases.",
    tags: ["Laravel", "Inertia", "OpenAI", "Pest"],
  },
  {
    title: "HackrPost",
    url: null,
    description:
      "AI social media SaaS for content generation, engagement optimization, and queued bulk scheduling.",
    tags: ["Next.js", "Node.js", "BullMQ", "MongoDB"],
  },
  {
    title: "AurifyAI",
    url: null,
    description:
      "AI EdTech platform with study summaries, test generation, and text-to-speech learning tools.",
    tags: ["Next.js", "TypeScript", "AI"],
  },
  {
    title: "Gold Dust AI",
    url: "https://golddustai.vercel.app/",
    description:
      "Modern company website for an AI consulting firm focused on practical business automation.",
    tags: ["React", "Next.js", "Design"],
  },
  {
    title: "Inkwell",
    url: "https://useinkwell.vercel.app/",
    description:
      "AI-powered writing assistant that helps users improve and reshape their writing.",
    tags: ["AI", "Frontend", "SaaS"],
  },
  {
    title: "Airbnb Landing Page Clone",
    url: "https://airbnbclone-olive.vercel.app/",
    description:
      "Responsive landing page recreation focused on layout accuracy and component polish.",
    tags: ["Next.js", "Tailwind CSS"],
  },
];

const contactItems = [
  { icon: Mail, label: "Email", value: "onuegbujahswill@gmail.com", href: "mailto:onuegbujahswill@gmail.com" },
  { icon: Phone, label: "Phone", value: "+356 9998 9225", href: "tel:+35699989225" },
  { icon: MapPin, label: "Location", value: "Malta", href: null },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/Jahswill-web-dev", icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jahswillc/", icon: FaLinkedin },
  { label: "X", href: "https://x.com/Jahswille1", icon: BsTwitterX },
];

const Portfolio = () => {
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

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className={`${isDarkMode ? "dark" : ""}`}>
    <div className="min-h-screen bg-canvas text-ink transition-colors duration-300 dark:bg-ink dark:text-canvas">
      <nav
        className={`fixed top-0 z-50 w-full border-b transition-all duration-300 ${
          isScrolled
            ? "border-ink/10 bg-canvas/95 shadow-sm backdrop-blur dark:border-canvas/10 dark:bg-ink/95"
            : "border-transparent bg-canvas/80 backdrop-blur dark:bg-ink/80"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <button
              onClick={() => scrollToSection("about")}
              className="text-left text-lg font-semibold tracking-normal text-ink dark:text-canvas"
              aria-label="Scroll to about section"
            >
              Jahswill Onuegbu
            </button>

            <div className="hidden items-center gap-1 md:flex">
              {navItems.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    activeSection === id
                      ? "bg-accent text-canvas"
                      : "text-ink/65 hover:bg-canvas/70 hover:text-ink dark:text-canvas/70 dark:hover:bg-canvas/10 dark:hover:text-canvas"
                  }`}
                >
                  <Icon size={16} />
                  <span>{label}</span>
                </button>
              ))}
            </div>

            <div className="hidden items-center gap-2 md:flex">
              <button
                onClick={() => setIsDarkMode((current) => !current)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-ink/15 bg-canvas text-ink transition-colors hover:border-accent hover:text-accent dark:border-canvas/20 dark:bg-ink dark:text-canvas dark:hover:border-accent dark:hover:text-accent"
                aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
              </button>
              <a
                href="/Jahswill_Onuegbu_CV.docx"
                download
                className="inline-flex items-center gap-2 rounded-md border border-ink/15 bg-canvas px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent dark:border-canvas/20 dark:bg-ink dark:text-canvas dark:hover:border-accent dark:hover:text-accent"
              >
                <Download size={16} />
                <span>CV</span>
              </a>
            </div>

            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={() => setIsDarkMode((current) => !current)}
                className="rounded-md border border-ink/15 bg-canvas p-2 text-ink dark:border-canvas/20 dark:bg-ink dark:text-canvas"
                aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {isDarkMode ? <Sun size={22} /> : <Moon size={22} />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="rounded-md border border-ink/15 bg-canvas p-2 text-ink dark:border-canvas/20 dark:bg-ink dark:text-canvas"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="mb-4 grid gap-2 rounded-md border border-ink/10 bg-canvas p-3 shadow-sm dark:border-canvas/10 dark:bg-ink md:hidden">
              {navItems.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center gap-2 rounded-md px-3 py-2 text-left text-sm font-medium transition-colors ${
                    activeSection === id
                      ? "bg-accent text-canvas"
                      : "text-ink/70 hover:bg-ink/5 dark:text-canvas/70 dark:hover:bg-canvas/10"
                  }`}
                >
                  <Icon size={16} />
                  <span>{label}</span>
                </button>
              ))}
              <a
                href="/Jahswill_Onuegbu_CV.docx"
                download
                className="flex items-center gap-2 rounded-md border border-ink/15 px-3 py-2 text-sm font-semibold text-ink dark:border-canvas/20 dark:text-canvas"
              >
                <Download size={16} />
                <span>Download CV</span>
              </a>
            </div>
          )}
        </div>
      </nav>

      <main>
        <section id="about" className="px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-24 lg:pt-36">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-accent/20 bg-canvas px-3 py-2 text-sm font-semibold text-accent shadow-sm dark:bg-ink dark:text-canvas">
                <Sparkles size={16} />
                <span>Full-stack developer focused on AI-powered SaaS</span>
              </div>

              <h1 className="max-w-4xl text-5xl font-semibold leading-tight text-ink sm:text-6xl dark:text-canvas lg:text-7xl">
                I build practical AI products from idea to production.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/70 dark:text-canvas/70">
                I am Jahswill Onuegbu, a full-stack developer with 4+ years of experience shipping SaaS products,
                AI-integrated platforms, and EdTech tools across React, Next.js, Node.js, TypeScript, Laravel, and Inertia.js.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="mailto:onuegbujahswill@gmail.com"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-canvas transition-colors hover:bg-accent/90"
                >
                  <Mail size={18} />
                  <span>Get in touch</span>
                </a>
                <a
                  href="/Jahswill_Onuegbu_CV.docx"
                  download
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-ink/15 bg-canvas px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent dark:border-canvas/20 dark:bg-ink dark:text-canvas dark:hover:border-accent dark:hover:text-accent"
                >
                  <Download size={18} />
                  <span>Download CV</span>
                </a>
              </div>

              <div className="mt-8 grid gap-3 text-sm text-ink/70 dark:text-canvas/70 sm:grid-cols-3">
                {contactItems.map(({ icon: Icon, label, value, href }) => {
                  const content = (
                    <span className="flex min-w-0 items-center gap-2 rounded-md border border-ink/10 bg-canvas px-3 py-3 shadow-sm dark:border-canvas/10 dark:bg-ink">
                      <Icon size={16} className="shrink-0 text-accent" />
                      <span className="min-w-0">
                        <span className="block text-xs font-semibold uppercase text-ink/45 dark:text-canvas/45">{label}</span>
                        <span className="block truncate text-ink/75 dark:text-canvas/75">{value}</span>
                      </span>
                    </span>
                  );

                  return href ? (
                    <a key={label} href={href} className="min-w-0">
                      {content}
                    </a>
                  ) : (
                    <div key={label} className="min-w-0">
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="lg:justify-self-end">
              <div className="overflow-hidden rounded-md border border-ink/10 bg-canvas p-3 shadow-sm dark:border-canvas/10 dark:bg-ink">
                <div className="grid gap-5 sm:grid-cols-[180px_1fr] lg:grid-cols-1">
                  <div className="relative aspect-square overflow-hidden rounded-md bg-ink/5 dark:bg-canvas/10">
                    <Image
                      src={mypfp}
                      alt="Jahswill Onuegbu"
                      fill
                      sizes="(max-width: 640px) 100vw, 360px"
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="p-2">
                    <p className="text-sm font-semibold uppercase text-ink/45 dark:text-canvas/45">Currently based in</p>
                    <p className="mt-1 text-2xl font-semibold text-ink dark:text-canvas">Malta</p>
                    <p className="mt-3 text-sm leading-6 text-ink/70 dark:text-canvas/70">
                      Locally based and open to sponsored work or residence permit opportunities.
                    </p>
                    <div className="mt-5 flex gap-3">
                      {socialLinks.map(({ label, href, icon: Icon }) => (
                        <a
                          key={label}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={label}
                          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-ink/10 text-ink/75 transition-colors hover:border-accent hover:text-accent dark:border-canvas/10 dark:text-canvas/75"
                        >
                          <Icon size={19} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3">
                {[
                  ["4+", "Years"],
                  ["90%+", "Test coverage"],
                  ["40%", "Load-time cut"],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-md border border-ink/10 bg-canvas p-4 shadow-sm dark:border-canvas/10 dark:bg-ink">
                    <p className="text-2xl font-semibold text-ink dark:text-canvas">{value}</p>
                    <p className="mt-1 text-xs font-medium uppercase text-ink/55 dark:text-canvas/55">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="border-y border-ink/10 bg-canvas px-4 py-16 dark:border-canvas/10 dark:bg-ink sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-semibold uppercase text-accent">Experience</p>
                <h2 className="mt-2 text-4xl font-semibold text-ink dark:text-canvas">Product work with real systems underneath.</h2>
              </div>
              <p className="max-w-xl text-base leading-7 text-ink/70 dark:text-canvas/70">
                Recent work spans AI roadmapping, social scheduling, EdTech features, backend queues, testing, and production frontend architecture.
              </p>
            </div>

            <div className="grid gap-4">
              {experiences.map((experience) => (
                <article key={`${experience.company}-${experience.period}`} className="rounded-md border border-ink/10 bg-canvas p-5 dark:border-canvas/10 dark:bg-ink">
                  <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 text-sm text-ink/55 dark:text-canvas/55">
                        <span>{experience.period}</span>
                        <span className="h-1 w-1 rounded-full bg-accent" />
                        <span>{experience.meta}</span>
                      </div>
                      <h3 className="mt-3 text-2xl font-semibold text-ink dark:text-canvas">{experience.title}</h3>
                      {experience.url ? (
                        <Link
                          href={experience.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent/80"
                        >
                          <span>{experience.company}</span>
                          <ExternalLink size={15} />
                        </Link>
                      ) : (
                        <p className="mt-2 text-sm font-semibold text-accent">{experience.company}</p>
                      )}
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
                      <p className="mt-5 rounded-md border border-ink/10 bg-canvas p-3 text-sm leading-6 text-ink/70 dark:border-canvas/10 dark:bg-ink dark:text-canvas/70">
                        <span className="font-semibold text-ink dark:text-canvas">Stack: </span>
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
              <p className="text-sm font-semibold uppercase text-accent">Skills</p>
              <h2 className="mt-2 text-4xl font-semibold text-ink dark:text-canvas">Frontend polish, backend depth, AI fluency.</h2>
              <p className="mt-4 text-base leading-7 text-ink/70 dark:text-canvas/70">
                I work comfortably across modern JavaScript and PHP stacks, with a strong focus on practical AI features and maintainable product architecture.
              </p>
            </div>

            <div className="grid gap-6">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {skills.map((skill) => (
                  <div key={skill} className="rounded-md border border-ink/10 bg-canvas px-4 py-3 text-sm font-semibold text-ink/75 shadow-sm dark:border-canvas/10 dark:bg-ink dark:text-canvas/75">
                    {skill}
                  </div>
                ))}
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {competencies.map((skill) => (
                  <div key={skill} className="flex items-start gap-3 rounded-md border border-ink/10 bg-canvas px-4 py-3 text-sm leading-6 text-ink/75 dark:border-canvas/10 dark:bg-ink dark:text-canvas/75">
                    <Code size={16} className="mt-1 shrink-0 text-accent" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="border-y border-ink/10 bg-ink px-4 py-16 text-canvas dark:border-canvas/10 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-semibold uppercase text-accent">Projects</p>
                <h2 className="mt-2 text-4xl font-semibold">Selected product builds.</h2>
              </div>
              <p className="max-w-xl text-base leading-7 text-canvas/70">
                A mix of personal products, SaaS work, AI interfaces, and focused frontend builds.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <article key={project.title} className="flex min-h-[250px] flex-col justify-between rounded-md border border-canvas/10 bg-canvas/[0.04] p-5 transition-colors hover:border-accent">
                  <div>
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-canvas/70">{project.description}</p>
                  </div>

                  <div className="mt-6">
                    <div className="mb-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-md border border-canvas/10 px-2 py-1 text-xs font-medium text-canvas/70">
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent/80"
                      >
                        <span>View project</span>
                        <ExternalLink size={16} />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-canvas/55">
                        <span>Case study available on request</span>
                      </span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* BlogSection is intentionally commented out for now.
        <BlogSection />
        */}
      </main>

      <footer className="border-t border-ink/10 bg-canvas px-4 py-10 dark:border-canvas/10 dark:bg-ink sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-ink/55 dark:text-canvas/55 md:flex-row md:items-center md:justify-between">
          <p>Built with Next.js and Tailwind CSS.</p>
          <p>Copyright 2026 Jahswill Onuegbu. All rights reserved.</p>
        </div>
      </footer>

      <button
        onClick={() => scrollToSection("about")}
        className="fixed bottom-6 right-6 inline-flex h-11 w-11 items-center justify-center rounded-md bg-accent text-canvas shadow-lg transition-colors hover:bg-accent/90"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </div>
    </div>
  );
};

export default Portfolio;
