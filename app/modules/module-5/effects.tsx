import React from 'react';
import { ChevronLeft, ChevronRight, BookOpen, Play, Code, Lightbulb } from 'lucide-react';

const UseEffectPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-8">
          <span>Module 5</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-lime-400">useEffect</span>
        </nav>

        {/* Page Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-lime-400 to-green-500 rounded-lg flex items-center justify-center">
              <Play className="w-6 h-6 text-black" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white">useEffect Hook</h1>
              <p className="text-gray-400 mt-2">Managing side effects and lifecycle events in React functional components</p>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* What is useEffect Section */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-lime-400/10 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-lime-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">What is useEffect?</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                The useEffect Hook is one of the most important hooks in React. It allows you to perform side effects 
                in functional components, such as data fetching, subscriptions, timers, and manually changing the DOM. 
                It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount combined.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                useEffect runs after every completed render by default, but you can control when it runs by providing 
                a dependency array. This makes it incredibly powerful for managing component lifecycle and side effects 
                in a declarative way.
              </p>
              <div className="bg-lime-400/5 border border-lime-400/20 rounded-lg p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Lightbulb className="w-5 h-5 text-lime-400" />
                  <span className="text-lime-400 font-medium">Key Insight</span>
                </div>
                <p className="text-gray-300 text-sm">
                  Think of useEffect as a way to "synchronize" your component with external systems like APIs, 
                  timers, or subscriptions. It bridges the gap between React's declarative nature and imperative side effects.
                </p>
              </div>
            </div>
          </section>

          {/* useEffect Patterns Section */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-lime-400/10 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-lime-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Common useEffect Patterns</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Run on Every Render</h3>
                      <p className="text-gray-400 text-sm">No dependency array - runs after every render.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Run Once on Mount</h3>
                      <p className="text-gray-400 text-sm">Empty dependency array - runs only once after mount.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Run on Specific Changes</h3>
                      <p className="text-gray-400 text-sm">Dependency array with values - runs when dependencies change.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Cleanup Function</h3>
                      <p className="text-gray-400 text-sm">Return a function to clean up subscriptions and timers.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Data Fetching</h3>
                      <p className="text-gray-400 text-sm">Fetch data from APIs when component mounts or updates.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">DOM Manipulation</h3>
                      <p className="text-gray-400 text-sm">Direct DOM updates and third-party library integration.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Code Examples Section */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-lime-400/10 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-lime-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">useEffect Syntax</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                The useEffect hook accepts two arguments: a function that contains the side effect logic, and an 
                optional dependency array that controls when the effect runs. Here are the most common patterns:
              </p>
              <div className="bg-black/50 rounded-lg p-6 font-mono text-sm">
                <div className="text-lime-400 mb-2">// Basic useEffect patterns</div>
                <div className="space-y-1 text-gray-300">
                  <div><span className="text-purple-400">import</span> <span className="text-white">React</span>, {`{ useState, useEffect }`} <span className="text-purple-400">from</span> <span className="text-green-400">'react'</span>;</div>
                  <div className="mt-4"></div>
                  <div><span className="text-blue-400">const</span> <span className="text-white">MyComponent</span> = () =&gt; {`{`}</div>
                  <div className="pl-4 space-y-1">
                    <div><span className="text-blue-400">const</span> [<span className="text-white">count</span>, <span className="text-white">setCount</span>] = <span className="text-yellow-400">useState</span>(<span className="text-orange-400">0</span>);</div>
                    <div className="mt-2"></div>
                    <div><span className="text-gray-500">// Run on every render</span></div>
                    <div><span className="text-yellow-400">useEffect</span>(() =&gt; {`{`}</div>
                    <div className="pl-4"><span className="text-white">console</span>.<span className="text-blue-400">log</span>(<span className="text-green-400">'Component rendered'</span>);</div>
                    <div>{`});`}</div>
                    <div className="mt-2"></div>
                    <div><span className="text-gray-500">// Run once on mount</span></div>
                    <div><span className="text-yellow-400">useEffect</span>(() =&gt; {`{`}</div>
                    <div className="pl-4"><span className="text-white">console</span>.<span className="text-blue-400">log</span>(<span className="text-green-400">'Component mounted'</span>);</div>
                    <div>{`}, []);`}</div>
                    <div className="mt-2"></div>
                    <div><span className="text-gray-500">// Run when count changes</span></div>
                    <div><span className="text-yellow-400">useEffect</span>(() =&gt; {`{`}</div>
                    <div className="pl-4"><span className="text-white">console</span>.<span className="text-blue-400">log</span>(<span className="text-green-400">'Count changed:'</span>, <span className="text-white">count</span>);</div>
                    <div>{`}, [count]);`}</div>
                  </div>
                  <div>{`};`}</div>
                </div>
              </div>
            </div>
          </section>

          {/* Best Practices Section */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-lime-400/10 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-lime-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Best Practices</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                Following these best practices will help you avoid common pitfalls and write more efficient React code:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-black/30 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">🎯</div>
                  <h3 className="font-semibold text-white mb-1">Always Use Dependencies</h3>
                  <p className="text-gray-400 text-sm">Include all values from component scope that change over time</p>
                </div>
                <div className="bg-black/30 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">🧹</div>
                  <h3 className="font-semibold text-white mb-1">Clean Up Resources</h3>
                  <p className="text-gray-400 text-sm">Return cleanup functions for subscriptions and timers</p>
                </div>
                <div className="bg-black/30 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">⚡</div>
                  <h3 className="font-semibold text-white mb-1">Separate Concerns</h3>
                  <p className="text-gray-400 text-sm">Use multiple useEffect hooks for different concerns</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center pt-16 border-t border-gray-800 mt-16">
          <button 
            className="flex items-center space-x-2 px-6 py-3 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors"
            onClick={() => window.location.href = '/module-5/custom-hooks'}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>
          
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-400">
              Page 3 of 3 • Module 5
            </div>
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              <div className="w-2 h-2 bg-lime-400 rounded-full"></div>

            </div>
          </div>
          
          <button 
            className="flex items-center space-x-2 px-6 py-3 bg-lime-400 text-black font-semibold rounded-lg hover:bg-lime-300 transition-colors"
            onClick={() => window.location.href = '/module-6/functions'}
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseEffectPage;