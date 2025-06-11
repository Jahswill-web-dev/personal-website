// import { getPosts } from "@/app/lib/strapi/getPosts";
import { getPosts } from "../app/lib/strapi/getPosts";
import { ExternalLink, Calendar, Clock, Tag } from "lucide-react";
import React, { useEffect, useState } from "react";
import dayjs from 'dayjs';

export const BlogSection = () => {
  const blogPosts = [
    {
      title: "Building Responsive Layouts with CSS Grid and Flexbox",
      excerpt:
        "Master the art of creating flexible, responsive layouts by combining CSS Grid and Flexbox. Learn when to use each technique and how they complement each other in modern web design.",
      date: "March 15, 2025",
      readTime: "8 min read",
      tags: ["CSS", "Responsive Design", "Frontend"],
      featured: true,
    },
    {
      title: "Next.js 15: App Router Deep Dive",
      excerpt:
        "Explore the powerful App Router in Next.js 15 and learn how to build scalable applications with server components, streaming, and improved performance optimization techniques.",
      date: "March 10, 2025",
      readTime: "12 min read",
      tags: ["Next.js", "React", "Performance"],
      featured: true,
    },
    {
      title: "Optimizing React Performance: Beyond Memo and useCallback",
      excerpt:
        "Discover advanced React optimization techniques including component splitting, lazy loading, and virtual scrolling to build lightning-fast user interfaces.",
      date: "March 5, 2025",
      readTime: "10 min read",
      tags: ["React", "Performance", "JavaScript"],
      featured: false,
    },
    {
      title: "TailwindCSS Custom Utilities and Component Patterns",
      excerpt:
        "Learn how to extend TailwindCSS with custom utilities, create reusable component patterns, and maintain design consistency across large-scale applications.",
      date: "February 28, 2025",
      readTime: "6 min read",
      tags: ["TailwindCSS", "CSS", "Design Systems"],
      featured: true,
    },
    {
      title: "TypeScript Best Practices for Frontend Development",
      excerpt:
        "Essential TypeScript patterns and practices for building robust frontend applications. From basic types to advanced generics and utility types.",
      date: "February 22, 2025",
      readTime: "15 min read",
      tags: ["TypeScript", "JavaScript", "Best Practices"],
      featured: false,
    },
    {
      title: "API Integration Strategies in Modern Frontend Apps",
      excerpt:
        "Compare different approaches to API integration including REST, GraphQL, and modern tools like React Query and SWR for efficient data fetching.",
      date: "February 18, 2025",
      readTime: "9 min read",
      tags: ["API", "React Query", "Data Fetching"],
      featured: true,
    },
  ];
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await getPosts();
        setPosts(response.data.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);
  useEffect(() => {
    console.log("Blog posts:", posts);
  }, [posts]);

  return (
    <section id="blogs" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Featured Blog Posts
          </h2>
          <p className="text-gray-400 text-lg">
            Sharing insights and experiences in web development
          </p>
        </div>

        {/* Featured Posts */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
            <span className="w-2 h-8 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mr-3"></span>
            Featured Articles
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {posts &&
              posts
                // .filter((post) => post.featured)
                // .slice(0, 2)
                .map((post, index) => (
                  <article
                    key={index}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all hover:transform hover:scale-[1.02] group"
                  >
                    <div className="flex items-center text-sm text-gray-400 mb-3">
                      <Calendar size={14} className="mr-2" />
                      <span>{dayjs(post.updatedAt).format('MMMM D, YYYY')}</span>
                      <span className="mx-2">•</span>
                      <Clock size={14} className="mr-2" />
                      {/* <span>{post.readTime}</span> */}
                    </div>

                    <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                      {post.title}
                    </h4>

                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {post.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="inline-flex items-center px-2 py-1 bg-purple-900/30 text-purple-300 text-xs rounded-full border border-purple-700/30"
                        >
                          <Tag size={10} className="mr-1" />
                          {tag.name}
                        </span>
                      ))}
                    </div>

                    <button className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                      <span>Read More</span>
                      <ExternalLink size={16} className="ml-2" />
                    </button>
                  </article>
                ))}
          </div>
        </div>

        {/* Recent Posts */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
            <span className="w-2 h-8 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mr-3"></span>
            Recent Posts
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(2).map((post, index) => (
              <article
                key={index}
                className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-5 border border-slate-700/30 hover:border-purple-500/30 transition-all hover:bg-slate-800/50 group"
              >
                <div className="flex items-center text-xs text-gray-500 mb-2">
                  <Calendar size={12} className="mr-1" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <Clock size={12} className="mr-1" />
                  <span>{post.readTime}</span>
                </div>

                <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors line-clamp-2">
                  {post.title}
                </h4>

                <p className="text-gray-400 text-sm mb-3 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-1 mb-3">
                  {post.tags.slice(0, 2).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-flex items-center px-2 py-0.5 bg-purple-900/20 text-purple-400 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {post.tags.length > 2 && (
                    <span className="text-xs text-gray-500">
                      +{post.tags.length - 2}
                    </span>
                  )}
                </div>

                <button className="text-sm text-purple-400 hover:text-purple-300 transition-colors">
                  Read More →
                </button>
              </article>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg transition-colors">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
};
