import { ChevronLeft, ChevronRight, BookOpen, Code, Lightbulb, Zap } from 'lucide-react';

const HooksPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-8">
          <span>Module 4</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-amber-400">Hooks</span>
        </nav>

        {/* Page Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-black" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white">React Hooks</h1>
              <p className="text-gray-400 mt-2">Master the power of React Hooks for state management and side effects</p>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* What are Hooks Section */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-amber-400/10 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-amber-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">What are React Hooks?</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                React Hooks are functions that let you "hook into" React features from functional components. 
                They allow you to use state and other React features without writing a class component. 
                Hooks were introduced in React 16.8 and have revolutionized how we write React applications.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Hooks enable you to reuse stateful logic between components, split one component into smaller 
                functions based on what pieces are related, and use React features like state management, 
                lifecycle methods, and context in functional components.
              </p>
              <div className="bg-amber-400/5 border border-amber-400/20 rounded-lg p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Lightbulb className="w-5 h-5 text-amber-400" />
                  <span className="text-amber-400 font-medium">Key Insight</span>
                </div>
                <p className="text-gray-300 text-sm">
                  Hooks follow two main rules: only call hooks at the top level of React functions, 
                  and only call hooks from React function components or custom hooks.
                </p>
              </div>
            </div>
          </section>

          {/* useState Hook Section */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-amber-400/10 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-amber-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">useState Hook</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                useState is the most commonly used hook that allows you to add state to functional components:
              </p>
              <div className="bg-black/50 rounded-lg p-6 font-mono text-sm mb-6">
                <div className="text-amber-400 mb-2">// Basic useState Example</div>
                <div className="space-y-1 text-gray-300">
                  <div><span className="text-blue-400">import</span> React, &#123;<span className="text-white">useState</span>&#125; <span className="text-blue-400">from</span> <span className="text-green-400">'react'</span>;</div>
                  <div></div>
                  <div><span className="text-blue-400">function</span> <span className="text-yellow-400">Counter</span>() &#123;</div>
                  <div className="pl-4"><span className="text-blue-400">const</span> [<span className="text-white">count</span>, <span className="text-white">setCount</span>] = <span className="text-white">useState</span>(<span className="text-orange-400">0</span>);</div>
                  <div></div>
                  <div className="pl-4"><span className="text-blue-400">return</span> (</div>
                  <div className="pl-8">&lt;<span className="text-red-400">div</span>&gt;</div>
                  <div className="pl-12">&lt;<span className="text-red-400">p</span>&gt;You clicked &#123;<span className="text-white">count</span>&#125; times&lt;/<span className="text-red-400">p</span>&gt;</div>
                  <div className="pl-12">&lt;<span className="text-red-400">button</span> <span className="text-amber-400">onClick</span>=&#123;() =&gt; <span className="text-white">setCount</span>(<span className="text-white">count</span> + <span className="text-orange-400">1</span>)&#125;&gt;</div>
                  <div className="pl-16">Click me</div>
                  <div className="pl-12">&lt;/<span className="text-red-400">button</span>&gt;</div>
                  <div className="pl-8">&lt;/<span className="text-red-400">div</span>&gt;</div>
                  <div className="pl-4">);</div>
                  <div>&#125;</div>
                </div>
              </div>
              <div className="bg-black/50 rounded-lg p-6 font-mono text-sm">
                <div className="text-amber-400 mb-2">// Object State Example</div>
                <div className="space-y-1 text-gray-300">
                  <div><span className="text-blue-400">const</span> [<span className="text-white">user</span>, <span className="text-white">setUser</span>] = <span className="text-white">useState</span>(&#123;</div>
                  <div className="pl-4"><span className="text-white">name</span>: <span className="text-green-400">''</span>,</div>
                  <div className="pl-4"><span className="text-white">email</span>: <span className="text-green-400">''</span></div>
                  <div>&#125;);</div>
                  <div></div>
                  <div><span className="text-blue-400">const</span> <span className="text-white">updateName</span> = (<span className="text-white">newName</span>) =&gt;</div>
                  <div className="pl-4"><span className="text-white">setUser</span>(<span className="text-white">prevUser</span> =&gt; (&#123;...<span className="text-white">prevUser</span>, <span className="text-white">name</span>: <span className="text-white">newName</span>&#125;));</div>
                </div>
              </div>
            </div>
          </section>

          {/* useEffect Hook Section */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-amber-400/10 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-amber-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">useEffect Hook</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                useEffect lets you perform side effects in functional components. It serves the same purpose as 
                componentDidMount, componentDidUpdate, and componentWillUnmount combined in React classes.
              </p>
              <div className="bg-black/50 rounded-lg p-6 font-mono text-sm mb-6">
                <div className="text-amber-400 mb-2">// Basic useEffect Example</div>
                <div className="space-y-1 text-gray-300">
                  <div><span className="text-blue-400">import</span> React, &#123;<span className="text-white">useState</span>, <span className="text-white">useEffect</span>&#125; <span className="text-blue-400">from</span> <span className="text-green-400">'react'</span>;</div>
                  <div></div>
                  <div><span className="text-blue-400">function</span> <span className="text-yellow-400">UserProfile</span>() &#123;</div>
                  <div className="pl-4"><span className="text-blue-400">const</span> [<span className="text-white">user</span>, <span className="text-white">setUser</span>] = <span className="text-white">useState</span>(<span className="text-orange-400">null</span>);</div>
                  <div></div>
                  <div className="pl-4"><span className="text-white">useEffect</span>(() =&gt; &#123;</div>
                  <div className="pl-8"><span className="text-gray-500">// Effect runs after every render</span></div>
                  <div className="pl-8"><span className="text-white">document.title</span> = <span className="text-green-400">`User: $&#123;user?.name || 'Loading...'&#125;`</span>;</div>
                  <div className="pl-4">&#125;, [<span className="text-white">user</span>]); <span className="text-gray-500">// Only re-run if user changes</span></div>
                  <div>&#125;</div>
                </div>
              </div>
              <div className="bg-black/50 rounded-lg p-6 font-mono text-sm">
                <div className="text-amber-400 mb-2">// useEffect with Cleanup</div>
                <div className="space-y-1 text-gray-300">
                  <div><span className="text-white">useEffect</span>(() =&gt; &#123;</div>
                  <div className="pl-4"><span className="text-blue-400">const</span> <span className="text-white">timer</span> = <span className="text-white">setInterval</span>(() =&gt; &#123;</div>
                  <div className="pl-8"><span className="text-white">console.log</span>(<span className="text-green-400">'Timer tick'</span>);</div>
                  <div className="pl-4">&#125;, <span className="text-orange-400">1000</span>);</div>
                  <div></div>
                  <div className="pl-4"><span className="text-gray-500">// Cleanup function</span></div>
                  <div className="pl-4"><span className="text-blue-400">return</span> () =&gt; <span className="text-white">clearInterval</span>(<span className="text-white">timer</span>);</div>
                  <div>&#125;, []); <span className="text-gray-500">// Empty dependency array = runs once</span></div>
                </div>
              </div>
            </div>
          </section>

          {/* Common Hooks Section */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-amber-400/10 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-amber-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Essential React Hooks</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">useContext</h3>
                      <p className="text-gray-400 text-sm">Access context values without wrapping components in Consumer</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">useReducer</h3>
                      <p className="text-gray-400 text-sm">Manage complex state logic with reducer functions</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">useCallback</h3>
                      <p className="text-gray-400 text-sm">Memoize functions to prevent unnecessary re-renders</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">useMemo</h3>
                      <p className="text-gray-400 text-sm">Memoize expensive calculations and optimize performance</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">useRef</h3>
                      <p className="text-gray-400 text-sm">Create mutable references that persist across renders</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">useLayoutEffect</h3>
                      <p className="text-gray-400 text-sm">Synchronously run effects before DOM paint</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Custom Hooks Section */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-amber-400/10 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-amber-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Custom Hooks</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                Custom hooks let you extract component logic into reusable functions. They are JavaScript functions 
                whose names start with "use" and that may call other hooks.
              </p>
              <div className="bg-black/50 rounded-lg p-6 font-mono text-sm">
                <div className="text-amber-400 mb-2">// Custom Hook Example</div>
                <div className="space-y-1 text-gray-300">
                  <div><span className="text-blue-400">function</span> <span className="text-yellow-400">useCounter</span>(<span className="text-white">initialValue</span> = <span className="text-orange-400">0</span>) &#123;</div>
                  <div className="pl-4"><span className="text-blue-400">const</span> [<span className="text-white">count</span>, <span className="text-white">setCount</span>] = <span className="text-white">useState</span>(<span className="text-white">initialValue</span>);</div>
                  <div></div>
                  <div className="pl-4"><span className="text-blue-400">const</span> <span className="text-white">increment</span> = () =&gt; <span className="text-white">setCount</span>(<span className="text-white">count</span> + <span className="text-orange-400">1</span>);</div>
                  <div className="pl-4"><span className="text-blue-400">const</span> <span className="text-white">decrement</span> = () =&gt; <span className="text-white">setCount</span>(<span className="text-white">count</span> - <span className="text-orange-400">1</span>);</div>
                  <div className="pl-4"><span className="text-blue-400">const</span> <span className="text-white">reset</span> = () =&gt; <span className="text-white">setCount</span>(<span className="text-white">initialValue</span>);</div>
                  <div></div>
                  <div className="pl-4"><span className="text-blue-400">return</span> &#123;<span className="text-white">count</span>, <span className="text-white">increment</span>, <span className="text-white">decrement</span>, <span className="text-white">reset</span>&#125;;</div>
                  <div>&#125;</div>
                  <div></div>
                  <div><span className="text-gray-500">// Using the custom hook</span></div>
                  <div><span className="text-blue-400">function</span> <span className="text-yellow-400">Counter</span>() &#123;</div>
                  <div className="pl-4"><span className="text-blue-400">const</span> &#123;<span className="text-white">count</span>, <span className="text-white">increment</span>, <span className="text-white">decrement</span>, <span className="text-white">reset</span>&#125; = <span className="text-white">useCounter</span>(<span className="text-orange-400">10</span>);</div>
                  <div className="pl-4"><span className="text-blue-400">return</span> <span className="text-gray-500">/* JSX using count and functions */</span>;</div>
                  <div>&#125;</div>
                </div>
              </div>
            </div>
          </section>

          {/* Hooks Rules and Best Practices Section */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-amber-400/10 rounded-lg flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-amber-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Hooks Rules & Best Practices</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                Following these rules and best practices will help you write better, more maintainable React applications:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-black/30 rounded-lg p-4">
                  <div className="text-2xl mb-2">🎯</div>
                  <h3 className="font-semibold text-white mb-2">Top Level Only</h3>
                  <p className="text-gray-400 text-sm">Always call hooks at the top level of your React function, never inside loops, conditions, or nested functions.</p>
                </div>
                <div className="bg-black/30 rounded-lg p-4">
                  <div className="text-2xl mb-2">⚛️</div>
                  <h3 className="font-semibold text-white mb-2">React Functions Only</h3>
                  <p className="text-gray-400 text-sm">Only call hooks from React function components or custom hooks, not regular JavaScript functions.</p>
                </div>
                <div className="bg-black/30 rounded-lg p-4">
                  <div className="text-2xl mb-2">🔧</div>
                  <h3 className="font-semibold text-white mb-2">Dependency Arrays</h3>
                  <p className="text-gray-400 text-sm">Always include all dependencies in useEffect, useCallback, and useMemo dependency arrays.</p>
                </div>
                <div className="bg-black/30 rounded-lg p-4">
                  <div className="text-2xl mb-2">🚀</div>
                  <h3 className="font-semibold text-white mb-2">Extract Custom Hooks</h3>
                  <p className="text-gray-400 text-sm">Extract reusable logic into custom hooks to improve code organization and reusability.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Advanced Hooks Patterns Section */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-amber-400/10 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-amber-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Advanced Hooks Patterns</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                As you become more comfortable with hooks, you can explore advanced patterns like compound components, 
                state machines, and performance optimizations. These patterns help you build more sophisticated and 
                efficient React applications.
              </p>
              <div className="bg-black/50 rounded-lg p-6 font-mono text-sm">
                <div className="text-amber-400 mb-2">// useReducer with Complex State</div>
                <div className="space-y-1 text-gray-300">
                  <div><span className="text-blue-400">const</span> <span className="text-white">initialState</span> = &#123;<span className="text-white">count</span>: <span className="text-orange-400">0</span>, <span className="text-white">step</span>: <span className="text-orange-400">1</span>&#125;;</div>
                  <div></div>
                  <div><span className="text-blue-400">function</span> <span className="text-yellow-400">reducer</span>(<span className="text-white">state</span>, <span className="text-white">action</span>) &#123;</div>
                  <div className="pl-4"><span className="text-blue-400">switch</span> (<span className="text-white">action.type</span>) &#123;</div>
                  <div className="pl-8"><span className="text-blue-400">case</span> <span className="text-green-400">'increment'</span>:</div>
                  <div className="pl-12"><span className="text-blue-400">return</span> &#123;<span className="text-white">count</span>: <span className="text-white">state.count</span> + <span className="text-white">state.step</span>, <span className="text-white">step</span>: <span className="text-white">state.step</span>&#125;;</div>
                  <div className="pl-8"><span className="text-blue-400">case</span> <span className="text-green-400">'decrement'</span>:</div>
                  <div className="pl-12"><span className="text-blue-400">return</span> &#123;<span className="text-white">count</span>: <span className="text-white">state.count</span> - <span className="text-white">state.step</span>, <span className="text-white">step</span>: <span className="text-white">state.step</span>&#125;;</div>
                  <div className="pl-8"><span className="text-blue-400">default</span>:</div>
                  <div className="pl-12"><span className="text-blue-400">return</span> <span className="text-white">state</span>;</div>
                  <div className="pl-4">&#125;</div>
                  <div>&#125;</div>
                  <div></div>
                  <div><span className="text-blue-400">const</span> [<span className="text-white">state</span>, <span className="text-white">dispatch</span>] = <span className="text-white">useReducer</span>(<span className="text-white">reducer</span>, <span className="text-white">initialState</span>);</div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center pt-16 border-t border-gray-800 mt-16">
          <button 
            className="flex items-center space-x-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
            onClick={() => window.location.href = '/module-4/event-handling'}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>
          
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-400">
              Page 2 of 3 • Module 4
            </div>
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
            </div>
          </div>
          
          <button 
            className="flex items-center space-x-2 px-6 py-3 bg-amber-400 text-black font-semibold rounded-lg hover:bg-amber-300 transition-colors"
            onClick={() => window.location.href = '/module-4/inputs'}
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HooksPage;