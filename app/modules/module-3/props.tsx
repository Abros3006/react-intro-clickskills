import React from 'react';
import { ChevronLeft, ChevronRight, BookOpen, Code, Lightbulb, ArrowDown } from 'lucide-react';

const PropsPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-8">
          <span>Module 3</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-blue-400">Props</span>
        </nav>

        {/* Page Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg flex items-center justify-center">
              <ArrowDown className="w-6 h-6 text-black" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white">Props in React</h1>
              <p className="text-gray-400 mt-2">Understanding how to pass data between components</p>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* What are Props Section */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-blue-400/10 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-blue-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">What are Props?</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                Props (short for "properties") are a way of passing data from parent to child components in React. 
                Think of props as arguments to a function - they allow you to customize how a component behaves 
                and what it displays.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Props are read-only, meaning a component cannot modify the props it receives. This immutability 
                helps maintain predictable data flow and makes your applications easier to debug and reason about.
              </p>
              <div className="bg-blue-400/5 border border-blue-400/20 rounded-lg p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Lightbulb className="w-5 h-5 text-blue-400" />
                  <span className="text-blue-400 font-medium">Key Insight</span>
                </div>
                <p className="text-gray-300 text-sm">
                  Props enable component reusability by allowing the same component to render different content 
                  based on the data passed to it.
                </p>
              </div>
            </div>
          </section>

          {/* Basic Props Usage Section */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-blue-400/10 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-blue-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Basic Props Usage</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                Here's how you can pass and use props in your React components:
              </p>
              <div className="bg-black/50 rounded-lg p-6 font-mono text-sm mb-6">
                <div className="text-blue-400 mb-2">// Parent Component</div>
                <div className="space-y-1 text-gray-300">
                  <div><span className="text-blue-400">function</span> <span className="text-yellow-400">App</span></div>
                  <div className="pl-4 space-y-1">
                    <div><span className="text-blue-400">return</span> (</div>
                    <div className="pl-4 space-y-1">
                      <div>&lt;<span className="text-red-400">div</span>&gt;</div>
                      <div className="pl-4 space-y-1">
                        <div>&lt;<span className="text-red-400">Greeting</span> <span className="text-blue-400">name</span>=<span className="text-blue-400">"John"</span> <span className="text-blue-400">age</span>={<span className="text-blue-400">25</span>} /&gt;</div>
                        <div>&lt;<span className="text-red-400">Greeting</span> <span className="text-blue-400">name</span>=<span className="text-blue-400">"Sarah"</span> <span className="text-blue-400">age</span>={<span className="text-blue-400">30</span>} /&gt;</div>
                      </div>
                      <div>&lt;/<span className="text-red-400">div</span>&gt;</div>
                    </div>
                    <div>);</div>
                  </div>
                </div>
              </div>
              <div className="bg-black/50 rounded-lg p-6 font-mono text-sm">
                <div className="text-blue-400 mb-2">// Child Component</div>
                <div className="space-y-1 text-gray-300">
                  <div><span className="text-blue-400">function</span> <span className="text-yellow-400">Greeting</span>(<span className="text-white">props</span>)</div>
                  <div className="pl-4 space-y-1">
                    <div><span className="text-blue-400">return</span> (</div>
                    <div className="pl-4 space-y-1">
                      <div>&lt;<span className="text-red-400">h1</span>&gt;</div>
                      <div className="pl-4">Hello, {<span className="text-white">props.name</span>}! You are {<span className="text-white">props.age</span>} years old.</div>
                      <div>&lt;/<span className="text-red-400">h1</span>&gt;</div>
                    </div>
                    <div>);</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Props Features Section */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-blue-400/10 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-blue-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Props Features</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Destructuring</h3>
                      <p className="text-gray-400 text-sm">Extract props directly in function parameters for cleaner code.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Default Values</h3>
                      <p className="text-gray-400 text-sm">Set default values for props that might not be provided.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Children Props</h3>
                      <p className="text-gray-400 text-sm">Access content between component tags using props.children.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">PropTypes</h3>
                      <p className="text-gray-400 text-sm">Validate prop types during development for better debugging.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Functions as Props</h3>
                      <p className="text-gray-400 text-sm">Pass functions to enable child-to-parent communication.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Spread Operator</h3>
                      <p className="text-gray-400 text-sm">Pass multiple props efficiently using the spread syntax.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Advanced Props Section */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-blue-400/10 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-blue-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Advanced Props Patterns</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                As you become more comfortable with props, you'll discover advanced patterns that make your 
                components more flexible and reusable. These include destructuring, default props, and 
                passing functions as props for event handling.
              </p>
              <div className="bg-black/50 rounded-lg p-6 font-mono text-sm">
                <div className="text-blue-400 mb-2">// Advanced Props Example</div>
                <div className="space-y-1 text-gray-300">
                  <div>
                    <span className="text-blue-400">function</span>
                    <span className="text-yellow-400">UserCard</span>
                    <span className="text-white">name = "Anonymous"</span>
                    <span className="text-white">email</span>
                    <span className="text-white">onEdit</span>
                    <span className="text-white">children</span>
                    </div>
                  <div className="pl-4 space-y-1">
                    <div><span className="text-blue-400">return</span> (</div>
                    <div className="pl-4 space-y-1">
                      <div>&lt;<span className="text-red-400">div</span> <span className="text-blue-400">className</span>=<span className="text-green-400">"user-card"</span>&gt;</div>
                      <div className="pl-4 space-y-1">
                        <div>&lt;<span className="text-red-400">h2</span>&gt;{<span className="text-white">name</span>}&lt;/<span className="text-red-400">h2</span>&gt;</div>
                        <div>&lt;<span className="text-red-400">p</span>&gt;{<span className="text-white">email</span>}&lt;/<span className="text-red-400">p</span>&gt;</div>
                        <div>&lt;<span className="text-red-400">button</span> <span className="text-blue-400">onClick</span>={<span className="text-white">onEdit</span>}&gt;Edit&lt;/<span className="text-red-400">button</span>&gt;</div>
                        <div>{<span className="text-white">children</span>}</div>
                      </div>
                      <div>&lt;/<span className="text-red-400">div</span>&gt;</div>
                    </div>
                    <div>);</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Best Practices Section */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-blue-400/10 rounded-lg flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-blue-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Props Best Practices</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                Following these best practices will help you write more maintainable and reliable React applications:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-black/30 rounded-lg p-4">
                  <div className="text-2xl mb-2">📝</div>
                  <h3 className="font-semibold text-white mb-2">Keep Props Simple</h3>
                  <p className="text-gray-400 text-sm">Pass only the data that the component needs, avoid passing entire objects when possible.</p>
                </div>
                <div className="bg-black/30 rounded-lg p-4">
                  <div className="text-2xl mb-2">🔒</div>
                  <h3 className="font-semibold text-white mb-2">Never Mutate Props</h3>
                  <p className="text-gray-400 text-sm">Props are read-only. Create new objects/arrays instead of modifying received props.</p>
                </div>
                <div className="bg-black/30 rounded-lg p-4">
                  <div className="text-2xl mb-2">✅</div>
                  <h3 className="font-semibold text-white mb-2">Use PropTypes</h3>
                  <p className="text-gray-400 text-sm">Define expected prop types for better development experience and debugging.</p>
                </div>
                <div className="bg-black/30 rounded-lg p-4">
                  <div className="text-2xl mb-2">🎯</div>
                  <h3 className="font-semibold text-white mb-2">Meaningful Names</h3>
                  <p className="text-gray-400 text-sm">Use descriptive prop names that clearly indicate their purpose and expected data.</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center pt-16 border-t border-gray-800 mt-16">
          <button 
            className="flex items-center space-x-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
            onClick={() => window.location.href = '/module-3/functions'}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>
          
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-400">
              Page 3 of 3 • Module 3
            </div>
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            </div>
          </div>
          
          <button 
            className="flex items-center space-x-2 px-6 py-3 bg-blue-400 text-black font-semibold rounded-lg hover:bg-blue-300 transition-colors"
            onClick={() => window.location.href = '/module-4/event-handling'}
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropsPage;