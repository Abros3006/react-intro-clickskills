import React from 'react';
import { ChevronLeft, ChevronRight, BookOpen, Play, Code, Lightbulb, Database, RefreshCw } from 'lucide-react';

const TanStackPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-8">
          <span>Module 7</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-lime-400">TanStack Query</span>
        </nav>

        {/* Page Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-lime-400 to-green-500 rounded-lg flex items-center justify-center">
              <Database className="w-6 h-6 text-black" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white">TanStack Query (React Query)</h1>
              <p className="text-gray-400 mt-2">Powerful data fetching and caching library for React applications</p>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* What is TanStack Query Section */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-lime-400/10 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-lime-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">What is TanStack Query?</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                TanStack Query (formerly React Query) is a powerful data-fetching library that makes managing 
                server state in React applications incredibly simple. It provides caching, synchronization, 
                and updates for your server state with zero configuration.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Unlike traditional state management solutions, TanStack Query focuses specifically on server 
                state management, providing features like automatic background refetching, caching, 
                deduplication, and much more out of the box.
              </p>
              <div className="bg-lime-400/5 border border-lime-400/20 rounded-lg p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Lightbulb className="w-5 h-5 text-lime-400" />
                  <span className="text-lime-400 font-medium">Key Insight</span>
                </div>
                <p className="text-gray-300 text-sm">
                  TanStack Query treats server state differently from client state. While client state is 
                  synchronous and owned by your app, server state is asynchronous and can be shared across 
                  multiple components and users.
                </p>
              </div>
            </div>
          </section>

          {/* Why Use TanStack Query Section */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-lime-400/10 rounded-lg flex items-center justify-center">
                <RefreshCw className="w-5 h-5 text-lime-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Why Use TanStack Query?</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Automatic Caching</h3>
                      <p className="text-gray-400 text-sm">Intelligent caching with automatic invalidation and updates.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Background Refetching</h3>
                      <p className="text-gray-400 text-sm">Keeps data fresh with automatic background updates.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Request Deduplication</h3>
                      <p className="text-gray-400 text-sm">Prevents duplicate requests for the same data.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Optimistic Updates</h3>
                      <p className="text-gray-400 text-sm">Update UI immediately while syncing with server.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Error Handling</h3>
                      <p className="text-gray-400 text-sm">Built-in error boundaries and retry mechanisms.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">DevTools</h3>
                      <p className="text-gray-400 text-sm">Powerful developer tools for debugging queries.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Core Concepts Section */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-lime-400/10 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-lime-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Core Concepts</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                TanStack Query revolves around a few key concepts that make data fetching simple and efficient. 
                Understanding these concepts will help you leverage the full power of the library.
              </p>
              <div className="bg-black/50 rounded-lg p-6 font-mono text-sm">
                <div className="text-lime-400 mb-2">// Core TanStack Query Concepts</div>
                <div className="space-y-1 text-gray-300">
                  <div><span className="text-blue-400">const</span> <span className="text-white">concepts</span> = [</div>
                  <div className="pl-4 space-y-1">
                    <div><span className="text-green-400">'Queries - Fetching Data'</span>,</div>
                    <div><span className="text-green-400">'Mutations - Updating Data'</span>,</div>
                    <div><span className="text-green-400">'Query Keys - Unique Identifiers'</span>,</div>
                    <div><span className="text-green-400">'Query Client - Central Store'</span>,</div>
                    <div><span className="text-green-400">'Invalidation - Cache Updates'</span>,</div>
                    <div><span className="text-green-400">'Optimistic Updates - UI Sync'</span></div>
                  </div>
                  <div>];</div>
                </div>
              </div>
            </div>
          </section>

          {/* Basic Usage Section */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-lime-400/10 rounded-lg flex items-center justify-center">
                <Play className="w-5 h-5 text-lime-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Basic Usage</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                Getting started with TanStack Query is straightforward. You'll need to set up a QueryClient, 
                wrap your app with QueryClientProvider, and then use the provided hooks to fetch and manage data.
              </p>
              <div className="bg-black/50 rounded-lg p-6 font-mono text-sm mb-6">
                <div className="text-lime-400 mb-2">// Basic useQuery Example</div>
                <div className="space-y-1 text-gray-300">
                  <div><span className="text-blue-400">import</span> <span className="text-white">{'{ useQuery }'}</span> <span className="text-blue-400">from</span> <span className="text-green-400">'@tanstack/react-query'</span></div>
                  <div className="mt-2"></div>
                  <div><span className="text-blue-400">const</span> <span className="text-white">UserProfile</span> = () =&gt;{'{'}</div>
                  <div className="pl-4 space-y-1">
                    <div><span className="text-blue-400">const</span> {'{ data, isLoading, error }'} = <span className="text-yellow-400">useQuery</span>({'{'}</div>
                    <div className="pl-4 space-y-1">
                      <div><span className="text-white">queryKey:</span> [<span className="text-green-400">'user'</span>],</div>
                      <div><span className="text-white">queryFn:</span> <span className="text-yellow-400">fetchUser</span></div>
                    </div>
                    <div>{'})'}</div>
                    <div className="mt-2"></div>
                    <div><span className="text-blue-400">if</span> (isLoading) <span className="text-blue-400">return</span> <span className="text-green-400">'Loading...'</span></div>
                    <div><span className="text-blue-400">if</span> (error) <span className="text-blue-400">return</span> <span className="text-green-400">'Error!'</span></div>
                    <div><span className="text-blue-400">return</span> <span className="text-white">&lt;div&gt;{'{data.name}'}&lt;/div&gt;</span></div>
                  </div>
                  <div>{'}'}</div>
                </div>
              </div>
              <div className="bg-lime-400/5 border border-lime-400/20 rounded-lg p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Lightbulb className="w-5 h-5 text-lime-400" />
                  <span className="text-lime-400 font-medium">Pro Tip</span>
                </div>
                <p className="text-gray-300 text-sm">
                  Always use meaningful query keys that describe your data. This helps with caching, 
                  invalidation, and makes your code more maintainable.
                </p>
              </div>
            </div>
          </section>

          {/* Advanced Features Section */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-lime-400/10 rounded-lg flex items-center justify-center">
                <Database className="w-5 h-5 text-lime-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Advanced Features</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                TanStack Query offers many advanced features that help you build robust, performant applications. 
                These features handle complex scenarios like pagination, infinite scrolling, and real-time updates.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-black/30 rounded-lg p-4">
                  <div className="text-2xl mb-2">🔄</div>
                  <h3 className="font-semibold text-white mb-1">Infinite Queries</h3>
                  <p className="text-gray-400 text-sm">Load more data with infinite scrolling patterns</p>
                </div>
                <div className="bg-black/30 rounded-lg p-4">
                  <div className="text-2xl mb-2">📄</div>
                  <h3 className="font-semibold text-white mb-1">Pagination</h3>
                  <p className="text-gray-400 text-sm">Handle paginated data with ease</p>
                </div>
                <div className="bg-black/30 rounded-lg p-4">
                  <div className="text-2xl mb-2">⚡</div>
                  <h3 className="font-semibold text-white mb-1">Parallel Queries</h3>
                  <p className="text-gray-400 text-sm">Fetch multiple queries simultaneously</p>
                </div>
                <div className="bg-black/30 rounded-lg p-4">
                  <div className="text-2xl mb-2">🔧</div>
                  <h3 className="font-semibold text-white mb-1">Query Invalidation</h3>
                  <p className="text-gray-400 text-sm">Smart cache invalidation strategies</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center pt-16 border-t border-gray-800 mt-16">
          <button 
            className="flex items-center space-x-2 px-6 py-3 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors"
            onClick={() => window.location.href = '/module-6/list'}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>
          
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-400">
              Page 1 of 3 • Module 7
            </div>
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
            </div>
          </div>
          
          <button 
            className="flex items-center space-x-2 px-6 py-3 bg-lime-400 text-black font-semibold rounded-lg hover:bg-lime-300 transition-colors"
            onClick={() => window.location.href = '/module-7/forms'}
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TanStackPage;