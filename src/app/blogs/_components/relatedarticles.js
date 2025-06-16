import React from 'react';
import { ArrowLeft } from 'lucide-react';

export default function RelatedArticles() {
    
    return ( 
        <section className="mt-20">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Related Articles</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {post.map((article, index) => (
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
                    {article.description}
                  </p>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{dayjs(post.updatedAt).format("MMMM D, YYYY")}</span>
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {/* <span>{article.readTime}</span> */}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
     );
}

