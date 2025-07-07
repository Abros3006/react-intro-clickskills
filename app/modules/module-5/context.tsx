import React from 'react';
import { ChevronLeft, ChevronRight, BookOpen, Play, Code, Lightbulb, Share2, Database } from 'lucide-react';

const ContextPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-8">
          <span>Module 5</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-lime-400">Context</span>
        </nav>

        {/* Page Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-lime-400 to-green-500 rounded-lg flex items-center justify-center">
              <Share2 className="w-6 h-6 text-black" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white">React Context</h1>
              <p className="text-gray-400 mt-2">Managing global state and avoiding prop drilling</p>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* What is Context Section */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-lime-400/10 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-lime-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">What is React Context?</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                React Context provides a way to pass data through the component tree without having to pass props 
                down manually at every level. It's designed to share data that can be considered "global" for a 
                tree of React components.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Context is primarily used when some data needs to be accessible by many components at different 
                nesting levels. Common use cases include theme data, user authentication, language preferences, 
                or any data that many components need access to.
              </p>
              <div className="bg-lime-400/5 border border-lime-400/20 rounded-lg p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Lightbulb className="w-5 h-5 text-lime-400" />
                  <span className="text-lime-400 font-medium">Key Insight</span>
                </div>
                <p className="text-gray-300 text-sm">
                  Context solves the "prop drilling" problem where you need to pass data through many intermediate 
                  components that don't actually need the data themselves.
                </p>
              </div>
            </div>
          </section>

          {/* Creating Context Section */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-lime-400/10 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-lime-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Creating and Using Context</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                Creating Context involves three main steps: creating the context, providing the context, and consuming the context.
              </p>
              <div className="bg-black/50 rounded-lg p-6 font-mono text-sm mb-6">
                <div className="text-lime-400 mb-2">// Step 1: Create Context</div>
                <div className="space-y-1 text-gray-300">
                  <div><span className="text-purple-400">import</span> React, {`{ createContext, useContext, useState }`} <span className="text-purple-400">from</span> <span className="text-green-400">'react'</span>;</div>
                  <div className="mt-3">
                    <span className="text-blue-400">const</span> <span className="text-white">ThemeContext</span> = <span className="text-yellow-400">createContext</span>();
                  </div>
                </div>
              </div>
              <div className="bg-black/50 rounded-lg p-6 font-mono text-sm mb-6">
                <div className="text-lime-400 mb-2">// Step 2: Provide Context</div>
                <div className="space-y-1 text-gray-300">
                  <div><span className="text-blue-400">function</span> <span className="text-yellow-400">ThemeProvider</span>({`{ children }`}) {`{`}</div>
                  <div className="pl-4 space-y-1">
                    <div><span className="text-blue-400">const</span> [theme, setTheme] = <span className="text-yellow-400">useState</span>(<span className="text-green-400">'light'</span>);</div>
                    <div className="mt-2">
                      <span className="text-blue-400">return</span> (
                    </div>
                    <div className="pl-4 space-y-1">
                      <div>{`<ThemeContext.Provider value={{ theme, setTheme }}>`}</div>
                      <div className="pl-4">{`{children}`}</div>
                      <div>{`</ThemeContext.Provider>`}</div>
                    </div>
                    <div>);</div>
                  </div>
                  <div>{`}`}</div>
                </div>
              </div>
              <div className="bg-black/50 rounded-lg p-6 font-mono text-sm">
                <div className="text-lime-400 mb-2">// Step 3: Consume Context</div>
                <div className="space-y-1 text-gray-300">
                  <div><span className="text-blue-400">function</span> <span className="text-yellow-400">ThemedButton</span>() {`{`}</div>
                  <div className="pl-4 space-y-1">
                    <div><span className="text-blue-400">const</span> {`{ theme, setTheme }`} = <span className="text-yellow-400">useContext</span>(ThemeContext);</div>
                    <div className="mt-2">
                      <span className="text-blue-400">return</span> (
                    </div>
                    <div className="pl-4 space-y-1">
                      <div>{`<button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}`}</div>
                      <div className="pl-8">{`className={theme === 'light' ? 'light-theme' : 'dark-theme'}>`}</div>
                      <div className="pl-4">{`Toggle Theme`}</div>
                      <div>{`</button>`}</div>
                    </div>
                    <div></div>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </section>

          {/* Context Patterns Section */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-lime-400/10 rounded-lg flex items-center justify-center">
                <Database className="w-5 h-5 text-lime-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Common Context Patterns</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Theme Context</h3>
                      <p className="text-gray-400 text-sm">Managing light/dark themes across your application.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Authentication Context</h3>
                      <p className="text-gray-400 text-sm">Sharing user authentication state and methods.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Language Context</h3>
                      <p className="text-gray-400 text-sm">Managing internationalization and language switching.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Shopping Cart Context</h3>
                      <p className="text-gray-400 text-sm">Managing cart state in e-commerce applications.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Modal Context</h3>
                      <p className="text-gray-400 text-sm">Controlling modal visibility and content globally.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Notification Context</h3>
                      <p className="text-gray-400 text-sm">Managing toast notifications and alerts.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Best Practices Section */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-lime-400/10 rounded-lg flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-lime-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Context Best Practices</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <div className="space-y-6">
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6">
                  <h3 className="font-semibold text-green-400 mb-3">✓ Do</h3>
                  <div className="space-y-3 text-gray-300">
                    <div>• Use Context for truly global state that many components need</div>
                    <div>• Create custom hooks to consume context (e.g., useTheme, useAuth)</div>
                    <div>• Split contexts by concern to avoid unnecessary re-renders</div>
                    <div>• Provide default values when creating context</div>
                  </div>
                </div>
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6">
                  <h3 className="font-semibold text-red-400 mb-3">✗ Don't</h3>
                  <div className="space-y-3 text-gray-300">
                    <div>• Use Context for all state - start with local state first</div>
                    <div>• Put rapidly changing values in Context without optimization</div>
                    <div>• Create too many contexts - it can become hard to manage</div>
                    <div>• Forget to handle cases where context is not provided</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Example Implementation */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-lime-400/10 rounded-lg flex items-center justify-center">
                <Play className="w-5 h-5 text-lime-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Complete Example</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                Here's a complete example of a User Context with authentication functionality:
              </p>
              <div className="bg-black/50 rounded-lg p-6 font-mono text-sm">
                <div className="text-lime-400 mb-2">// UserContext.js</div>
                <div className="space-y-1 text-gray-300">
                  <div><span className="text-blue-400">const</span> <span className="text-white">UserContext</span> = <span className="text-yellow-400">createContext</span>({`{`}</div>
                  <div className="pl-4 space-y-1">
                    <div>user: <span className="text-orange-400">null</span>,</div>
                    <div>login: () =&gt; {'{}'},</div>
                    <div>logout: () =&gt; {`{}`},</div>
                    <div>loading: <span className="text-orange-400">false</span></div>
                  </div>
                  <div>{`});`}</div>
                  <div className="mt-4">
                    <span className="text-blue-400">export</span> <span className="text-blue-400">const</span> <span className="text-yellow-400">useUser</span> = () =&gt; {`{`}
                  </div>
                  <div className="pl-4 space-y-1">
                    <div><span className="text-blue-400">const</span> context = <span className="text-yellow-400">useContext</span>(UserContext);</div>
                    <div><span className="text-blue-400">if</span> (!context) {`{`}</div>
                    <div className="pl-4"><span className="text-blue-400">throw</span> <span className="text-blue-400">new</span> <span className="text-yellow-400">Error</span>(<span className="text-green-400">'useUser must be used within UserProvider'</span>);</div>
                    <div>{`}`}</div>
                    <div><span className="text-blue-400">return</span> context;</div>
                  </div>
                  <div>{`};`}</div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center pt-16 border-t border-gray-800 mt-16">
          <button 
            className="flex items-center space-x-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
            onClick={() => window.location.href = '/module-4/inputs'}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>
          
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-400">
              Page 1 of 3 • Module 5
            </div>
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
            </div>
          </div>
          
          <button 
            className="flex items-center space-x-2 px-6 py-3 bg-lime-400 text-black font-semibold rounded-lg hover:bg-lime-300 transition-colors"
            onClick={() => window.location.href = '/module-5/custom-hooks'}
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContextPage;