import React from "react";
import axios from "axios";
import PageNotFound from "../_components/notfound";
import { ArrowLeft, Clock } from "lucide-react";
import dayjs from "dayjs";
import markdownit from "markdown-it";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const response = await axios.get(
    "http://localhost:1337/api/articles?populate=*"
  );
  const posts = response.data.data;
  const post = posts.find((post) => post.slug === params.slug);
  if (!post) {
    return {
      notFound: true,
    };
  }
  return {
    title: posts.title,
    description: posts.description,
    keywords:
      posts.keywords ||
      "Jahswill, Portfolio, Web Developer, Software Engineer, Next.js, React",
  };
}

export async function generateStaticParams() {
  const response = await axios.get(
    "http://localhost:1337/api/articles?populate=*"
  );
  const posts = response.data.data;
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Page({ params }) {
  const response = await axios.get(
    `http://localhost:1337/api/articles?filters[slug][$eq]=${params.slug}&populate=*`
  );
  const post = response.data.data[0];

  if (!post || post.length === 0) {
    return <PageNotFound />;
  }
  const md = markdownit({
    html: true,
    linkify: true,
    typographer: true,
  });
  const htmlContent = md.render(post.content);
  

  // Related articles data
  const relatedArticles = [
    {
      title: "Understanding React Server Components",
      excerpt:
        "A deep dive into React's new server components and how they change the way we think about rendering.",
      readTime: "5 min read",
      date: "2024-06-05",
    },
    {
      title: "TypeScript Best Practices for Large Applications",
      excerpt:
        "Essential patterns and practices for maintaining type safety in enterprise-scale TypeScript projects.",
      readTime: "7 min read",
      date: "2024-05-28",
    },
    {
      title: "Optimizing Web Performance with Modern Tools",
      excerpt:
        "A comprehensive guide to performance optimization using the latest web development tools and techniques.",
      readTime: "9 min read",
      date: "2024-05-20",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Simple Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-6 py-4">
          <Link href="/blogs" className="flex items-center text-gray-500 hover:text-gray-900 transition-colors mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-6 py-12">
        {/* Article Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-6">
            {post?.title}
          </h1>

          <div className="flex items-center text-sm text-gray-500 space-x-4">
            <span>Jahswill Onuegbu</span>
            <span>•</span>
            <span>{dayjs(post.updatedAt).format("MMMM D, YYYY")}</span>
            <span>•</span>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {/* <span>{blogData.readTime}</span> */}
            </div>
          </div>
        </header>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <div
            className="text-gray-800 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </article>

        {/* Author Section */}
        {/* <section className="mt-16 pt-8 border-t border-gray-100">
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-medium text-lg">
                Jahswill Onuegbu
              </span>
            </div>
            <h3 className="font-medium text-gray-900 mb-2">
             Jahswill
            </h3>
            <p className="text-gray-600 text-sm max-w-md mx-auto">
              Fullstack developer passionate about creating efficient, scalable
              web applications and sharing insights from the development
              journey.
            </p>
          </div>
        </section> */}

        {/* Related Articles */}
        <section className="mt-20">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">
            Related Articles
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {relatedArticles.map((article, index) => (
              <article
                key={index}
                className="bg-white/70 backdrop-blur-sm border border-gray-100 rounded-xl p-6 hover:shadow-lg hover:border-gray-200 transition-all duration-200 cursor-pointer group"
              >
                <div className="mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white text-sm font-medium">📝</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>
                    {new Date(article.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
