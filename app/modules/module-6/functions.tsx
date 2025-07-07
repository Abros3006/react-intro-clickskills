import React from 'react';
import { ChevronLeft, ChevronRight, BookOpen, Play, Code, Lightbulb } from 'lucide-react';

const FunctionsPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-8">
          <span>Module 1</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-lime-400">Functions in React</span>
        </nav>

        {/* Page Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-lime-400 to-green-500 rounded-lg flex items-center justify-center">
              <Play className="w-6 h-6 text-black" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white">Functions in React</h1>
              <p className="text-gray-400 mt-2">Understanding functional components and JavaScript functions in React development</p>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* What are Functions in React Section */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-lime-400/10 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-lime-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Functions in React</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                Functions are the foundation of modern React development. With the introduction of React Hooks, 
                functional components have become the preferred way to write React components. They're simpler, 
                more readable, and provide all the capabilities that class components offered.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                In React, functions serve multiple purposes: they can be components that return JSX, event handlers 
                that respond to user interactions, utility functions that perform calculations, and custom hooks 
                that encapsulate reusable logic. Understanding how to work with functions effectively is crucial 
                for React development.
              </p>
              <div className="bg-lime-400/5 border border-lime-400/20 rounded-lg p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Lightbulb className="w-5 h-5 text-lime-400" />
                  <span className="text-lime-400 font-medium">Key Insight</span>
                </div>
                <p className="text-gray-300 text-sm">
                  Functional components are just JavaScript functions that return JSX. They're easier to test, 
                  debug, and understand compared to class components, making them the modern standard for React development.
                </p>
              </div>
            </div>
          </section>

          {/* Types of Functions Section */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-lime-400/10 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-lime-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Types of Functions in React</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Functional Components</h3>
                      <p className="text-gray-400 text-sm">Functions that return JSX and represent UI components.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Event Handlers</h3>
                      <p className="text-gray-400 text-sm">Functions that handle user interactions and events.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Utility Functions</h3>
                      <p className="text-gray-400 text-sm">Helper functions for calculations and data manipulation.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Custom Hooks</h3>
                      <p className="text-gray-400 text-sm">Functions that encapsulate reusable stateful logic.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Higher-Order Functions</h3>
                      <p className="text-gray-400 text-sm">Functions that take or return other functions.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Arrow Functions</h3>
                      <p className="text-gray-400 text-sm">Modern ES6 syntax for writing concise functions.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Function Syntax Section */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-lime-400/10 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-lime-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Function Syntax Examples</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                Here are different ways to write functions in React, from basic functional components to more 
                advanced patterns. Each syntax has its use cases and benefits:
              </p>
              <div className="bg-black/50 rounded-lg p-6 font-mono text-sm">
                <div className="text-lime-400 mb-2">// Different function syntaxes in React</div>
                <div className="space-y-1 text-gray-300">
                  <div><span className="text-gray-500">// 1. Function Declaration Component</span></div>
                  <div><span className="text-purple-400">function</span> <span className="text-white">MyComponent</span>() {`{`}</div>
                  <div className="pl-4"><span className="text-purple-400">return</span> <span className="text-red-400">&lt;div&gt;</span>Hello World<span className="text-red-400">&lt;/div&gt;</span>;</div>
                  <div>{`}`}</div>
                  <div className="mt-3"></div>
                  <div><span className="text-gray-500">// 2. Arrow Function Component</span></div>
                  <div><span className="text-blue-400">const</span> <span className="text-white">MyComponent</span> = () =&gt; {`{`}</div>
                  <div className="pl-4"><span className="text-purple-400">return</span> <span className="text-red-400">&lt;div&gt;</span>Hello World<span className="text-red-400">&lt;/div&gt;</span>;</div>
                  <div>{`};`}</div>
                  <div className="mt-3"></div>
                  <div><span className="text-gray-500">// 3. Event Handler Function</span></div>
                  <div><span className="text-blue-400">const</span> <span className="text-white">handleClick</span> = () =&gt; {`{`}</div>
                  <div className="pl-4"><span className="text-white">console</span>.<span className="text-blue-400">log</span>(<span className="text-green-400">'Button clicked!'</span>);</div>
                  <div>{`};`}</div>
                  <div className="mt-3"></div>
                  <div><span className="text-gray-500">// 4. Function with Parameters</span></div>
                  <div><span className="text-blue-400">const</span> <span className="text-white">greetUser</span> = (<span className="text-orange-400">name</span>) =&gt; {`{`}</div>
                  <div className="pl-4"><span className="text-purple-400">return</span> <span className="text-green-400">`Hello, ${`{name}`}!`</span>;</div>
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
              <h2 className="text-2xl font-semibold text-white">Function Best Practices</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                Following these best practices will help you write cleaner, more maintainable React code with functions:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-black/30 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">🎯</div>
                  <h3 className="font-semibold text-white mb-1">Keep Functions Pure</h3>
                  <p className="text-gray-400 text-sm">Functions should be predictable and not cause side effects</p>
                </div>
                <div className="bg-black/30 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">📝</div>
                  <h3 className="font-semibold text-white mb-1">Use Descriptive Names</h3>
                  <p className="text-gray-400 text-sm">Function names should clearly describe what they do</p>
                </div>
                <div className="bg-black/30 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">⚡</div>
                  <h3 className="font-semibold text-white mb-1">Optimize Re-renders</h3>
                  <p className="text-gray-400 text-sm">Use useCallback for functions passed as props</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center pt-16 border-t border-gray-800 mt-16">
          <button 
            className="flex items-center space-x-2 px-6 py-3 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors"
            onClick={() => window.location.href = '/module-5/effects'}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>
          
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-400">
              Page 3 of 8 • Module 1
            </div>
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
            </div>
          </div>
          
          <button 
            className="flex items-center space-x-2 px-6 py-3 bg-lime-400 text-black font-semibold rounded-lg hover:bg-lime-300 transition-colors"
            onClick={() => window.location.href = '/module-6/list'}
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FunctionsPage;