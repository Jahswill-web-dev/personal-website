"use client";
import { useState, useEffect } from "react";
import {
  User,
  Briefcase,
  Code,
  FolderOpen,
  Newspaper,
  Menu,
  X,
} from "lucide-react";
import { getPosts } from "../lib/strapi/getPosts";
import dayjs from "dayjs";
import { Calendar, Clock } from "lucide-react";
import Link from "next/link";

export default function BlogPage() {
  const [activeSection, setActiveSection] = useState("about");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [blogPosts, setBlogPosts] = useState([]);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await getPosts();
        setBlogPosts(response.data.data);
        // console.log(response.data.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    if (blogPosts.length > 0) {
      console.log("Blog posts:", blogPosts);
    }
  }, [blogPosts]);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen text-white">
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-slate-900/95 backdrop-blur-sm shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/">
              <div className="text-2xl font-bold text-white hover:text-gray-300">
                Jahswill<span className="text-purple-400">.</span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: "about", label: "About", icon: User },
                // { id: "experience", label: "Experience", icon: Briefcase },
                // { id: "skills", label: "Skills", icon: Code },
                // { id: "projects", label: "Projects", icon: FolderOpen },
                // { id: "blogs", label: "Blogs", icon: Newspaper },
              ].map(({ id, label, icon: Icon }) => (
                <Link
                  key={id}
                  onClick={() => scrollToSection(id)}
                  href="/"
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors hover:text-gray-300`}
                >
                  <Icon size={16} />
                  <span>{label}</span>
                </Link>
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
                // { id: "experience", label: "Experience", icon: Briefcase },
                // { id: "skills", label: "Skills", icon: Code },
                // { id: "projects", label: "Projects", icon: FolderOpen },
                // { id: "blogs", label: "Blogs", icon: Newspaper },
              ].map(({ id, label, icon: Icon }) => (
                <Link
                  href="/"
                  key={id}
                  className="flex items-center space-x-2 w-full text-left px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <Icon size={16} />
                  <span>{label}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>
      {/* Blogs */}
      <div className="px-10">
        <div className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Hey you! 👀 Welcome to my blog!
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Explore my thoughts, experiences, and insights on web development,
            software engineering, and more.
          </p>
        </div>
        <div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts &&
              blogPosts.map((post, index) => (
                <Link href={`/blogs/${post.slug}`}>
                  <article
                    key={index}
                    className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-5 border border-slate-700/30 hover:border-purple-500/30 transition-all hover:bg-slate-800/50 group
                  cursor-pointer"
                  >
                    <div className="flex items-center text-xs text-gray-500 mb-2">
                      <Calendar size={12} className="mr-1" />
                      <span>
                        {dayjs(post.updatedAt).format("MMMM D, YYYY")}
                      </span>
                      <span className="mx-2">•</span>
                      <Clock size={12} className="mr-1" />
                      {/* <span>{post.readTime}</span> */}
                    </div>

                    <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors line-clamp-2">
                      {post.title}
                    </h4>

                    <p className="text-gray-400 text-sm mb-3 line-clamp-3">
                      {post.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-3">
                      {post.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="inline-flex items-center px-2 py-0.5 bg-purple-900/20 text-purple-400 text-xs rounded-full"
                        >
                          {tag.name}
                        </span>
                      ))}
                      {/* {post.tags.length > 2 && (
                    <span className="text-xs text-gray-500">
                      +{post.tags.length - 2}
                    </span>
                  )} */}
                    </div>
                    <button className="text-sm text-purple-400 hover:text-purple-300 transition-colors">
                      Read More →
                    </button>
                  </article>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
