import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Zap, RefreshCw, GitBranch, Code, Play, Pause } from 'lucide-react';

const VDOMPage = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const startAnimation = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 3000);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-8">
          <span>Module 1</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-lime-400">Virtual DOM</span>
        </nav>

        {/* Page Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-lime-400 to-green-500 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-black" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white">Understanding the Virtual DOM</h1>
              <p className="text-gray-400 mt-2">How React achieves lightning-fast performance</p>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* What is Virtual DOM */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-lime-400/10 rounded-lg flex items-center justify-center">
                <GitBranch className="w-5 h-5 text-lime-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">What is the Virtual DOM?</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                The Virtual DOM is a JavaScript representation of the actual DOM (Document Object Model). 
                It's a programming concept where a "virtual" representation of the UI is kept in memory 
                and synced with the "real" DOM through a process called reconciliation.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-black/30 rounded-lg p-6">
                  <h3 className="font-semibold text-red-400 mb-3 flex items-center space-x-2">
                    <span>❌</span>
                    <span>Traditional DOM</span>
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Direct manipulation of DOM elements</li>
                    <li>• Expensive operations</li>
                    <li>• Causes layout thrashing</li>
                    <li>• Slower re-renders</li>
                    <li>• Browser reflow/repaint</li>
                  </ul>
                </div>
                
                <div className="bg-black/30 rounded-lg p-6">
                  <h3 className="font-semibold text-lime-400 mb-3 flex items-center space-x-2">
                    <span>✅</span>
                    <span>Virtual DOM</span>
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• In-memory JavaScript objects</li>
                    <li>• Lightweight operations</li>
                    <li>• Batched updates</li>
                    <li>• Faster calculations</li>
                    <li>• Minimal DOM manipulation</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* How Virtual DOM Works */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-lime-400/10 rounded-lg flex items-center justify-center">
                <RefreshCw className="w-5 h-5 text-lime-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">How Virtual DOM Works</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <p className="text-gray-300 leading-relaxed mb-8">
                The Virtual DOM process involves three main steps that React performs automatically 
                to ensure optimal performance:
              </p>

              {/* Interactive Animation */}
              <div className="bg-black/50 rounded-lg p-6 mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-white">Virtual DOM Process</h3>
                  <button
                    onClick={startAnimation}
                    className="flex items-center space-x-2 px-4 py-2 bg-lime-400 text-black font-medium rounded-lg hover:bg-lime-300 transition-colors"
                  >
                    {isAnimating ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    <span>{isAnimating ? 'Running...' : 'Start Demo'}</span>
                  </button>
                </div>
                
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
                  <div className={`flex-1 bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 text-center transition-all duration-1000 ${isAnimating ? 'scale-105 border-blue-400' : ''}`}>
                    <div className="text-2xl mb-2">🔧</div>
                    <h4 className="font-semibold text-blue-400 mb-1">1. Create</h4>
                    <p className="text-sm text-gray-400">Build Virtual DOM tree</p>
                  </div>
                  
                  <div className={`w-8 h-0.5 bg-lime-400 transition-all duration-1000 ${isAnimating ? 'bg-lime-300' : ''}`}></div>
                  
                  <div className={`flex-1 bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 text-center transition-all duration-1000 delay-500 ${isAnimating ? 'scale-105 border-yellow-400' : ''}`}>
                    <div className="text-2xl mb-2">🔍</div>
                    <h4 className="font-semibold text-yellow-400 mb-1">2. Diff</h4>
                    <p className="text-sm text-gray-400">Compare with previous tree</p>
                  </div>
                  
                  <div className={`w-8 h-0.5 bg-lime-400 transition-all duration-1000 ${isAnimating ? 'bg-lime-300' : ''}`}></div>
                  
                  <div className={`flex-1 bg-green-500/10 border border-green-500/20 rounded-lg p-4 text-center transition-all duration-1000 delay-1000 ${isAnimating ? 'scale-105 border-green-400' : ''}`}>
                    <div className="text-2xl mb-2">⚡</div>
                    <h4 className="font-semibold text-green-400 mb-1">3. Update</h4>
                    <p className="text-sm text-gray-400">Apply changes to real DOM</p>
                  </div>
                </div>
              </div>

              {/* Detailed Steps */}
              <div className="space-y-6">
                <div className="bg-black/30 rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center">
                      <span className="text-blue-400 font-semibold">1</span>
                    </div>
                    <h3 className="font-semibold text-blue-400">Virtual DOM Creation</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    When your component state changes, React creates a new Virtual DOM tree representing 
                    the new state of your UI.
                  </p>
                  <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
                    <div className="text-lime-400 mb-2">// Virtual DOM representation</div>
                    <div className="text-gray-300">
                      <div><span className="text-blue-400">const</span> <span className="text-white">vdom</span> = {`{`}</div>
                      <div className="pl-4">
                        <div><span className="text-purple-400">type</span>: <span className="text-green-400">'div'</span>,</div>
                        <div><span className="text-purple-400">props</span>: {`{`} <span className="text-purple-400">className</span>: <span className="text-green-400">'container'</span> {`},`}</div>
                        <div><span className="text-purple-400">children</span>: [...]</div>
                      </div>
                      <div>{`}`}</div>
                    </div>
                  </div>
                </div>

                <div className="bg-black/30 rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-yellow-500/10 rounded-lg flex items-center justify-center">
                      <span className="text-yellow-400 font-semibold">2</span>
                    </div>
                    <h3 className="font-semibold text-yellow-400">Diffing Algorithm</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    React compares (diffs) the new Virtual DOM tree with the previous Virtual DOM tree 
                    to identify what has changed.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-red-500/5 border border-red-500/20 rounded p-3">
                      <h4 className="text-red-400 font-medium mb-2">Previous Tree</h4>
                      <div className="text-sm text-gray-400 font-mono">
                        <div>&lt;div&gt;</div>
                        <div className="pl-2">&lt;h1&gt;Count: 5&lt;/h1&gt;</div>
                        <div>&lt;/div&gt;</div>
                      </div>
                    </div>
                    <div className="bg-green-500/5 border border-green-500/20 rounded p-3">
                      <h4 className="text-green-400 font-medium mb-2">New Tree</h4>
                      <div className="text-sm text-gray-400 font-mono">
                        <div>&lt;div&gt;</div>
                        <div className="pl-2">&lt;h1&gt;Count: 6&lt;/h1&gt;</div>
                        <div>&lt;/div&gt;</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-black/30 rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-green-500/10 rounded-lg flex items-center justify-center">
                      <span className="text-green-400 font-semibold">3</span>
                    </div>
                    <h3 className="font-semibold text-green-400">Reconciliation</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    React updates only the parts of the real DOM that actually changed, making the 
                    process incredibly efficient.
                  </p>
                  <div className="bg-lime-400/5 border border-lime-400/20 rounded-lg p-4">
                    <div className="text-lime-400 font-medium mb-2">🎯 Result: Only text content "5" → "6" is updated</div>
                    <div className="text-sm text-gray-400">
                      No need to recreate the entire div or h1 element, just update the text node.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-lime-400/10 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-lime-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Benefits of Virtual DOM</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-lime-400/10 rounded-lg flex items-center justify-center mt-1">
                      <Zap className="w-4 h-4 text-lime-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-2">Performance</h3>
                      <p className="text-gray-400 text-sm">
                        Batched updates and minimal DOM manipulation result in faster rendering 
                        and smoother user experiences.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-lime-400/10 rounded-lg flex items-center justify-center mt-1">
                      <RefreshCw className="w-4 h-4 text-lime-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-2">Predictability</h3>
                      <p className="text-gray-400 text-sm">
                        React's reconciliation process is predictable and helps prevent 
                        common UI bugs and inconsistencies.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-lime-400/10 rounded-lg flex items-center justify-center mt-1">
                      <Code className="w-4 h-4 text-lime-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-2">Developer Experience</h3>
                      <p className="text-gray-400 text-sm">
                        Write declarative code without worrying about DOM manipulation 
                        performance optimizations.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-black/30 rounded-lg p-6">
                  <h3 className="font-semibold text-white mb-4">Performance Comparison</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-400 text-sm">Direct DOM</span>
                        <span className="text-red-400 text-sm">~100ms</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-red-400 h-2 rounded-full" style={{width: '80%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-400 text-sm">Virtual DOM</span>
                        <span className="text-lime-400 text-sm">~16ms</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-lime-400 h-2 rounded-full" style={{width: '20%'}}></div>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-400 text-xs mt-4">
                    *Performance may vary based on application complexity
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Key Takeaways */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-lime-400/10 rounded-lg flex items-center justify-center">
                <GitBranch className="w-5 h-5 text-lime-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Key Takeaways</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                    <span className="text-gray-300">Virtual DOM is a JavaScript representation of the real DOM</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                    <span className="text-gray-300">React uses diffing to find changes efficiently</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                    <span className="text-gray-300">Only necessary DOM updates are applied</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                    <span className="text-gray-300">Results in better performance and user experience</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                    <span className="text-gray-300">Enables predictable UI updates</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                    <span className="text-gray-300">Happens automatically behind the scenes</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center pt-16 border-t border-gray-800 mt-16">
          <button 
            className="flex items-center space-x-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
            onClick={() => window.location.href = '/module-1/setup'}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>
          
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-400">
              Page 3 of 3 • Module 1 Complete
            </div>
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
            </div>
          </div>
          
          <button 
            className="flex items-center space-x-2 px-6 py-3 bg-lime-400 text-black font-semibold rounded-lg hover:bg-lime-300 transition-colors"
            onClick={() => window.location.href = '/module-2/eslint'}
          >
            <span>Next Module</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VDOMPage;