import { getPosts } from "../app/lib/strapi/getPosts";
import { ArrowRight, Calendar, Clock, ExternalLink, Tag } from "lucide-react";
import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import Link from "next/link";

const fallbackPosts = [
  {
    title: "Building AI features that fail gracefully",
    description:
      "Notes on structured output, validation, fallback services, and keeping product flows usable when an LLM response is incomplete.",
    updatedAt: "2026-05-01",
    slug: "building-ai-features-that-fail-gracefully",
    tags: [{ name: "AI" }, { name: "Architecture" }],
  },
  {
    title: "What I learned shipping Laravel and Inertia products",
    description:
      "A practical look at queues, tests, frontend boundaries, and the small decisions that make full-stack products easier to maintain.",
    updatedAt: "2026-04-18",
    slug: "shipping-laravel-inertia-products",
    tags: [{ name: "Laravel" }, { name: "Inertia" }],
  },
  {
    title: "Frontend performance for content-heavy products",
    description:
      "How code splitting, lazy loading, and careful state boundaries can make AI and EdTech interfaces feel faster.",
    updatedAt: "2026-03-22",
    slug: "frontend-performance-content-heavy-products",
    tags: [{ name: "Frontend" }, { name: "Performance" }],
  },
];

export const BlogSection = () => {
  const [posts, setPosts] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await getPosts();
        const remotePosts = response?.data?.data;
        setPosts(Array.isArray(remotePosts) && remotePosts.length > 0 ? remotePosts : fallbackPosts);
      } catch (error) {
        setPosts(fallbackPosts);
      } finally {
        setHasLoaded(true);
      }
    };

    fetchPosts();
  }, []);

  const visiblePosts = posts.slice(0, 3);

  return (
    <section id="blogs" className="bg-stone-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase text-teal-900">Writing</p>
            <h2 className="mt-2 text-4xl font-semibold text-zinc-950">Notes from building.</h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-zinc-600">
            Practical thoughts on full-stack development, AI product architecture, and frontend craft.
          </p>
        </div>

        {!hasLoaded ? (
          <div className="grid gap-4 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="h-64 animate-pulse rounded-md border border-zinc-200 bg-white shadow-sm" />
            ))}
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-3">
            {visiblePosts.map((post) => (
              <article key={post.slug || post.title} className="flex min-h-[280px] flex-col justify-between rounded-md border border-zinc-200 bg-white p-5 shadow-sm">
                <div>
                  <div className="flex flex-wrap items-center gap-3 text-xs font-medium uppercase text-zinc-400">
                    <span className="inline-flex items-center gap-1">
                      <Calendar size={13} />
                      {dayjs(post.updatedAt).format("MMM D, YYYY")}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock size={13} />
                      5 min read
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-semibold leading-7 text-zinc-950">{post.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-600">{post.description}</p>
                </div>

                <div className="mt-6">
                  <div className="mb-5 flex flex-wrap gap-2">
                    {(post.tags || []).slice(0, 3).map((tag) => (
                      <span key={tag.name} className="inline-flex items-center gap-1 rounded-md border border-zinc-200 px-2 py-1 text-xs font-medium text-zinc-600">
                        <Tag size={12} />
                        {tag.name}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/blogs/${post.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-teal-900 transition-colors hover:text-teal-700"
                  >
                    <span>Read article</span>
                    <ExternalLink size={15} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

        <div className="mt-10">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 rounded-md border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:border-teal-900 hover:text-teal-900"
          >
            <span>View all posts</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};
