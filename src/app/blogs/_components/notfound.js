'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Home, Search, RefreshCw } from 'lucide-react';

export default function PageNotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center flex-col lg:flex-row-reverse gap-12">
          
          {/* Animated 404 Illustration */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative">
              {/* Large 404 Text */}
              <div className="text-8xl md:text-9xl font-bold text-gray-200 select-none">
                404
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-4 -right-4 w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 animate-bounce"></div>
              <div className="absolute -bottom-2 -left-6 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute top-1/2 -right-8 w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-25 animate-bounce delay-300"></div>
              
              {/* Error Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-gray-200 shadow-lg">
                  <span className="text-2xl">🤔</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="mb-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Oops! 🫠
              </h1>
              <div className="space-y-2">
                <p className="text-xl text-white font-medium">
                  Looks like this page went on vacation! 🏖️
                </p>
                <p className="text-white">
                  {`Don't worry though - even the best developers encounter 404s. 
                  The URL might have changed, or maybe you're exploring uncharted territory! 🗺️`}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Link
                  href="/blog"
                  className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium group"
                >
                  <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                  Back to Blog
                </Link>
                
                <Link
                  href="/blogs"
                  className="inline-flex items-center px-6 py-3 bg-white/70 backdrop-blur-sm border border-gray-200 text-gray-700 rounded-lg hover:bg-white hover:shadow-md transition-all font-medium group"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Go Home
                </Link>
              </div>

              {/* Quick Actions */}
              
            </div>

            {/* Fun Developer Message */}
            <div className="mt-8 p-4 bg-gray-50/50 backdrop-blur-sm rounded-lg border border-gray-100">
              <p className="text-sm text-gray-600">
                <span className="font-mono bg-gray-100 px-2 py-1 rounded text-xs mr-2">
                  console.log()
                </span>
               {`"If you think this is a bug, feel free to let me know! 🐛"`}
              </p>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
}