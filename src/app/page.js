"use client";
import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ChevronDown,
  Menu,
  X,
  Code,
  Briefcase,
  User,
  FolderOpen,
  Newspaper,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Image from "next/image";
import mypfp from "../../public/images/about.png"; // Adjust the path as necessary
import Link from "next/link";
import { BlogSection } from "../components/BlogSection";
const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
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

  // Content of the portfolio page
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Next.js",
    "TailwindCSS",
    "TypeScript",
    "Mongodb",
    "Node.js",
    "Express.js",
    "Redux",
  ];

  const coreSkills = [
    "Basic UI/UX Principles",
    "Communication and Collaboration",
    "Knowledge of Design Tools",
    "Frontend Frameworks",
    "API Integration",
    "Responsive Design",
  ];

  const experiences = [
    {
      title: "Frontend Developer",
      company: "Aurify AI",
      url: "https://aurifyai.xyz/",
      period: "Recent",
      description:
        "Led UI design and frontend development using Next.js (React), Redux, Tailwind CSS, and various other development libraries.",
      highlights: [
        "Collaborated with Cross-Functional Teams",
        "Optimized User Experience through testing and feedback",
        "Implemented Responsive Design with mobile-first approach",
        "Integrated and Tested APIs using Postman",
      ],
    },
    {
      title: "Fullstack Web Developer & Designer",
      company: "Gold Dust AI (Freelance)",
      url: "https://golddustai.vercel.app/",
      period: "2022",
      description:
        "Designed and developed a responsive, modern website for GoldDustAI, an AI consulting firm.",
      highlights: [
        "Built responsive website optimized for desktop and mobile",
        "Implemented clean UI/UX for clear value proposition communication",
        "Integrated contact forms and analytics for lead generation",
        "Collaborated with stakeholders on branding and technical structure",
      ],
    },
    {
      title: "Frontend Developer",
      company: "J.J WILLMIN",
      url: "https://www.jjwillminmalls.com/",
      period: "2022-2024",
      description:
        "Designed and developed landing pages for marketing campaigns with conversion-focused UI.",
      highlights: [
        "Enhanced website functionality for target audience needs",
        "Provided mentorship to students in web development",
        "Optimized website performance through image optimization and code minification",
        "Implemented responsive design principles across various devices",
      ],
    },
  ];

  const projects = [
    {
      title: "Airbnb Landing page clone",
      url: "https://airbnbclone-olive.vercel.app/",
      description:
        "Using Tailwindcss and Next.js to replicate Airbnb landing page",
    },
    {
      title: "ClipBoard landing page",
      url: "https://jahswill-web-dev.github.io/clipboard-landing-page/",
      description: "Converted Figma designs to pixel-perfect HTML/CSS",
    },
    {
      title: "Sinnyside landing page",
      url: "https://jahswill-web-dev.github.io/sunnyside-landing-page/",
      description:
        "A modern website built following the figma design in detail using HTML and CSS",
    },
    {
      title: "Huddle landing page",
      url: "https://jahswill-web-dev.github.io/huddle-landing-page/",
      description: "A modern website built following the exact figma design",
    },
    {
      title: "Inkwell",
      url: "https://useinkwell.vercel.app/",
      description:
        "An AI-powered writing assistant that helps users improve their writing skills",
    },
    {
      title: "Gold Dust AI",
      url: "https://golddustai.vercel.app/",
      description:
        "Modern website for AI consulting firm focused on business operations improvement",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-slate-900/95 backdrop-blur-sm shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-white">
              Jahswill<span className="text-purple-400">.</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: "about", label: "About", icon: User },
                { id: "experience", label: "Experience", icon: Briefcase },
                { id: "skills", label: "Skills", icon: Code },
                { id: "projects", label: "Projects", icon: FolderOpen },
                { id: "blogs", label: "Blogs", icon: Newspaper },
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                    activeSection === id
                      ? "text-purple-400 bg-purple-400/10"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon size={16} />
                  <span>{label}</span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-slate-800/95 backdrop-blur-sm rounded-lg mt-2 p-4">
              {[
                { id: "about", label: "About", icon: User },
                { id: "experience", label: "Experience", icon: Briefcase },
                { id: "skills", label: "Skills", icon: Code },
                { id: "projects", label: "Projects", icon: FolderOpen },
                { id: "blogs", label: "Blogs", icon: Newspaper },
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="flex items-center space-x-2 w-full text-left px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <Icon size={16} />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                {"Hi, I'm "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Jahswill
                </span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-gray-300 mb-6">
                Frontend Developer
              </h2>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Passionate Frontend Developer with over 3 years of experience
                crafting multiple websites. Discovered love for coding during
                2020 downtime, showcasing dedication to technology and
                continuous learning. Proficient in modern web technologies and
                frameworks.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="mailto:onuegbujahswill@gmail.com"
                  className="flex items-center justify-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors"
                >
                  <Mail size={20} />
                  <span>Get In Touch</span>
                </a>
                <div className="flex flex-row gap-7 md:gap-5 items-center justify-center">
                  {/* Github */}
                  <a
                    href="https://github.com/Jahswill-web-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" text-purple-400 hover:text-white py-3 transition-colors"
                  >
                    <FaGithub size={25} />
                  </a>
                  {/* linkedIn */}
                  <a
                    href="https://www.linkedin.com/in/jahswillc/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" text-purple-400 hover:text-white py-3 transition-colors"
                  >
                    <FaLinkedin size={25} />
                  </a>
                  {/* Twitter */}
                  <a
                    href="https://x.com/Jahswille1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" text-purple-400 hover:text-white py-3 transition-colors"
                  >
                    <BsTwitterX size={25} />
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 text-gray-300">
                <div className="flex items-center space-x-2">
                  <Mail size={18} className="text-purple-400" />
                  <span>onuegbujahswill@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone size={18} className="text-purple-400" />
                  <span>+356 9998 9225</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin size={18} className="text-purple-400" />
                  <span>Malta</span>
                </div>
              </div>
            </div>
            {/* Pfp */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-1">
                {/* <div className=""> */}
                <Image
                  objectFit
                  src={mypfp}
                  alt="A picture of Jahswill"
                  className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center"
                />
                {/* </div> */}
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-600/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-600/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Work Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50 hover:border-purple-500/50 transition-colors"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <span className="flex items-center space-x-2 mb-2">
                      <Briefcase size={20} className="text-purple-400" />
                      <h3 className="text-xl font-semibold text-white">
                        {exp.title}
                      </h3>
                    </span>

                    <Link
                      href={exp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors mb-2"
                    >
                      <p className="text-purple-400 text-lg">{exp.company}</p>
                      <ExternalLink size={16} />
                    </Link>
                  </div>
                  <span className="text-gray-400 text-sm lg:text-base">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">{exp.description}</p>
                <div className="grid md:grid-cols-2 gap-2">
                  {exp.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-2 text-gray-400"
                    >
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Skills & Technologies
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Technologies
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 text-center border border-slate-700/50 hover:border-purple-500/50 transition-colors"
                  >
                    <span className="text-gray-300 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Core Skills
              </h3>
              <div className="space-y-3">
                {coreSkills.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-white mb-3">
                  Languages
                </h4>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                  <span className="text-gray-300">English (Fluent)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all hover:transform hover:scale-105"
              >
                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <ExternalLink size={18} />
                  <span>View Project</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Blog */}
      <BlogSection />

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 mb-4">
            Built with Next.js and TailwindCSS
          </p>
          <p className="text-gray-500">
            © 2025 Jahswill Onuegbu. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Scroll to top button */}
      <button
        onClick={() => scrollToSection("about")}
        className="fixed bottom-8 right-8 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg transition-colors"
      >
        <ChevronDown size={20} className="transform rotate-180" />
      </button>
    </div>
  );
};

export default Portfolio;
