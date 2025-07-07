import React from 'react';
import { ChevronLeft, ChevronRight, BookOpen, Play, Code, Lightbulb, Zap, Settings } from 'lucide-react';

const CustomHooksPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-8">
          <span>Module 5</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-lime-400">Custom Hooks</span>
        </nav>

        {/* Page Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-lime-400 to-green-500 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-black" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white">Custom Hooks</h1>
              <p className="text-gray-400 mt-2">Building reusable stateful logic with custom React hooks</p>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* What are Custom Hooks Section */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-lime-400/10 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-lime-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">What are Custom Hooks?</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                Custom hooks are JavaScript functions that start with "use" and can call other hooks. They allow you 
                to extract component logic into reusable functions, making your code more modular and easier to test.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Unlike regular functions, custom hooks can use React hooks like useState, useEffect, and other built-in 
                or custom hooks. This makes them perfect for sharing stateful logic between components without 
                duplicating code.
              </p>
              <div className="bg-lime-400/5 border border-lime-400/20 rounded-lg p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Lightbulb className="w-5 h-5 text-lime-400" />
                  <span className="text-lime-400 font-medium">Key Insight</span>
                </div>
                <p className="text-gray-300 text-sm">
                  Custom hooks follow the same rules as built-in hooks: they must start with "use" and can only be 
                  called from React function components or other hooks.
                </p>
              </div>
            </div>
          </section>

          {/* Creating Custom Hooks Section */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-lime-400/10 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-lime-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Creating Your First Custom Hook</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                Let's create a simple counter hook that can be reused across multiple components:
              </p>
              <div className="bg-black/50 rounded-lg p-6 font-mono text-sm mb-6">
                <div className="text-lime-400 mb-2">// useCounter.js</div>
                <div className="space-y-1 text-gray-300">
                  <div><span className="text-purple-400">import</span> {`{ useState }`} <span className="text-purple-400">from</span> <span className="text-green-400">'react'</span>;</div>
                  <div className="mt-3">
                    <span className="text-blue-400">function</span> <span className="text-yellow-400">useCounter</span>(initialValue = 0) {`{`}
                  </div>
                  <div className="pl-4 space-y-1">
                    <div><span className="text-blue-400">const</span> [count, setCount] = <span className="text-yellow-400">useState</span>(initialValue);</div>
                    <div className="mt-2">
                      <span className="text-blue-400">const</span> increment = () =&gt <span className="text-yellow-400">setCount</span>(count + 1);
                    </div>
                    <div><span className="text-blue-400">const</span> decrement = () =&gt <span className="text-yellow-400">setCount</span>(count - 1);</div>
                    <div><span className="text-blue-400">const</span> reset = () =&gt <span className="text-yellow-400">setCount</span>(initialValue);</div>
                    <div className="mt-2">
                      <span className="text-blue-400">return</span> {`{ count, increment, decrement, reset }`};
                    </div>
                  </div>
                  <div>{`}`}</div>
                  <div className="mt-3">
                    <span className="text-blue-400">export</span> <span className="text-blue-400">default</span> useCounter;
                  </div>
                </div>
              </div>
              <div className="bg-black/50 rounded-lg p-6 font-mono text-sm">
                <div className="text-lime-400 mb-2">// Using the custom hook</div>
                <div className="space-y-1 text-gray-300">
                  <div><span className="text-blue-400">function</span> <span className="text-yellow-400">Counter</span>() {`{`}</div>
                  <div className="pl-4 space-y-1">
                    <div><span className="text-blue-400">const</span> {`{ count, increment, decrement, reset }`} = <span className="text-yellow-400">useCounter</span>(0);</div>
                    <div className="mt-2">
                      <span className="text-blue-400">return</span> (
                    </div>
                    <div className="pl-4 space-y-1">
                      <div>{`<div>`}</div>
                      <div className="pl-4">{`<p>Count: {count}</p>`}</div>
                      <div className="pl-4">{`<button onClick={increment}>+</button>`}</div>
                      <div className="pl-4">{`<button onClick={decrement}>-</button>`}</div>
                      <div className="pl-4">{`<button onClick={reset}>Reset</button>`}</div>
                      <div>{`</div>`}</div>
                    </div>
                    <div>);</div>
                  </div>
                  <div>{`}`}</div>
                </div>
              </div>
            </div>
          </section>

          {/* Common Custom Hook Patterns Section */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-lime-400/10 rounded-lg flex items-center justify-center">
                <Settings className="w-5 h-5 text-lime-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Common Custom Hook Patterns</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">useFetch</h3>
                      <p className="text-gray-400 text-sm">Handle API calls with loading states and error handling.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">useLocalStorage</h3>
                      <p className="text-gray-400 text-sm">Sync state with localStorage for data persistence.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">useToggle</h3>
                      <p className="text-gray-400 text-sm">Simple boolean state management with toggle function.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">useDebounce</h3>
                      <p className="text-gray-400 text-sm">Delay function execution for search inputs and API calls.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">useWindowSize</h3>
                      <p className="text-gray-400 text-sm">Track window dimensions for responsive components.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">useForm</h3>
                      <p className="text-gray-400 text-sm">Manage form state, validation, and submission logic.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Advanced Custom Hook Example */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-lime-400/10 rounded-lg flex items-center justify-center">
                <Play className="w-5 h-5 text-lime-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Advanced Example: useFetch Hook</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                Here's a more advanced custom hook that handles API calls with loading states and error handling:
              </p>
              <div className="bg-black/50 rounded-lg p-6 font-mono text-sm">
                <div className="text-lime-400 mb-2">// useFetch.js</div>
                <div className="space-y-1 text-gray-300">
                  <div><span className="text-purple-400">import</span> {`{ useState, useEffect }`} <span className="text-purple-400">from</span> <span className="text-green-400">'react'</span>;</div>
                  <div className="mt-3">
                    <span className="text-blue-400">function</span> <span className="text-yellow-400">useFetch</span>(url) {`{`}
                  </div>
                  <div className="pl-4 space-y-1">
                    <div><span className="text-blue-400">const</span> [data, setData] = <span className="text-yellow-400">useState</span>(<span className="text-orange-400">null</span>);</div>
                    <div><span className="text-blue-400">const</span> [loading, setLoading] = <span className="text-yellow-400">useState</span>(<span className="text-orange-400">true</span>);</div>
                    <div><span className="text-blue-400">const</span> [error, setError] = <span className="text-yellow-400">useState</span>(<span className="text-orange-400">null</span>);</div>
                    <div className="mt-2">
                      <span className="text-yellow-400">useEffect</span>(() =&gt; {`{`}
                    </div>
                    <div className="pl-4 space-y-1">
                      <div><span className="text-blue-400">const</span> fetchData = <span className="text-blue-400">async</span> () =&gt; {`{`}</div>
                      <div className="pl-4 space-y-1">
                        <div><span className="text-blue-400">try</span> {`{`}</div>
                        <div className="pl-4 space-y-1">
                          <div><span className="text-yellow-400">setLoading</span>(<span className="text-orange-400">true</span>);</div>
                          <div><span className="text-blue-400">const</span> response = <span className="text-blue-400">await</span> <span className="text-yellow-400">fetch</span>(url);</div>
                          <div><span className="text-blue-400">const</span> result = <span className="text-blue-400">await</span> response.<span className="text-yellow-400">json</span>();</div>
                          <div><span className="text-yellow-400">setData</span>(result);</div>
                        </div>
                        <div>{`} catch (err) {`}</div>
                        <div className="pl-4"><span className="text-yellow-400">setError</span>(err.<span className="text-white">message</span>);</div>
                        <div>{`} finally {`}</div>
                        <div className="pl-4"><span className="text-yellow-400">setLoading</span>(<span className="text-orange-400">false</span>);</div>
                        <div>{`}`}</div>
                      </div>
                      <div>{`};`}</div>
                      <div className="mt-2"><span className="text-yellow-400">fetchData</span>();</div>
                    </div>
                    <div>{`}, [url]);`}</div>
                    <div className="mt-2">
                      <span className="text-blue-400">return</span> {`{ data, loading, error }`};
                    </div>
                  </div>
                  <div>{`}`}</div>
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
              <h2 className="text-2xl font-semibold text-white">Custom Hook Best Practices</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <div className="space-y-6">
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6">
                  <h3 className="font-semibold text-green-400 mb-3">✓ Do</h3>
                  <div className="space-y-3 text-gray-300">
                    <div>• Start hook names with "use" to follow React conventions</div>
                    <div>• Return objects with named properties for better API clarity</div>
                    <div>• Keep hooks focused on a single responsibility</div>
                    <div>• Use TypeScript for better type safety and documentation</div>
                    <div>• Add cleanup in useEffect when necessary</div>
                  </div>
                </div>
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6">
                  <h3 className="font-semibold text-red-400 mb-3">✗ Don't</h3>
                  <div className="space-y-3 text-gray-300">
                    <div>• Call hooks conditionally or inside loops</div>
                    <div>• Make hooks too complex - split them if needed</div>
                    <div>• Forget to handle edge cases and error states</div>
                    <div>• Use hooks for logic that doesn't need React features</div>
                    <div>• Return arrays when object destructuring is clearer</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* When to Use Custom Hooks */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-lime-400/10 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-lime-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">When to Create Custom Hooks</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                Custom hooks are perfect when you find yourself repeating the same stateful logic across multiple components. 
                Here are some clear indicators that you should create a custom hook:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-black/30 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">🔄</div>
                  <h3 className="font-semibold text-white mb-1">Repetitive Logic</h3>
                  <p className="text-gray-400 text-sm">Same useState/useEffect patterns across components</p>
                </div>
                <div className="bg-black/30 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">🧪</div>
                  <h3 className="font-semibold text-white mb-1">Testing Benefits</h3>
                  <p className="text-gray-400 text-sm">Isolated logic that can be tested independently</p>
                </div>
                <div className="bg-black/30 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">📚</div>
                  <h3 className="font-semibold text-white mb-1">Reusable API</h3>
                  <p className="text-gray-400 text-sm">Complex state management that multiple components need</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center pt-16 border-t border-gray-800 mt-16">
          <button 
            className="flex items-center space-x-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
            onClick={() => window.location.href = '/module-5/context'}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>
          
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-400">
              Page 2 of 3 • Module 5
            </div>
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
            </div>
          </div>
          
          <button 
            className="flex items-center space-x-2 px-6 py-3 bg-lime-400 text-black font-semibold rounded-lg hover:bg-lime-300 transition-colors"
            onClick={() => window.location.href = '/module-5/effects'}
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomHooksPage;