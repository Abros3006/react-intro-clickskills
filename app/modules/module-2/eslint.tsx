import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Shield, Settings, AlertTriangle, Code, Play, Pause, CheckCircle } from 'lucide-react';

const ESLintPage = () => {
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
          <span>Module 2</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-lime-400">ESLint</span>
        </nav>

        {/* Page Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-lime-400 to-green-500 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-black" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white">ESLint: Code Quality & Standards</h1>
              <p className="text-gray-400 mt-2">Keep your React code clean and consistent</p>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* What is ESLint */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-lime-400/10 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-lime-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">What is ESLint?</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                ESLint is a static code analysis tool that identifies problematic patterns in JavaScript code. 
                It helps maintain code quality, consistency, and catches potential bugs before they reach production.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-black/30 rounded-lg p-6">
                  <h3 className="font-semibold text-red-400 mb-3 flex items-center space-x-2">
                    <span>❌</span>
                    <span>Without ESLint</span>
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Inconsistent code style</li>
                    <li>• Potential runtime errors</li>
                    <li>• Hard to maintain codebase</li>
                    <li>• Team collaboration issues</li>
                    <li>• Debugging nightmares</li>
                  </ul>
                </div>
                
                <div className="bg-black/30 rounded-lg p-6">
                  <h3 className="font-semibold text-lime-400 mb-3 flex items-center space-x-2">
                    <span>✅</span>
                    <span>With ESLint</span>
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Consistent code formatting</li>
                    <li>• Early error detection</li>
                    <li>• Better code readability</li>
                    <li>• Enforced best practices</li>
                    <li>• Smooth team workflow</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* How ESLint Works */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-lime-400/10 rounded-lg flex items-center justify-center">
                <Settings className="w-5 h-5 text-lime-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">How ESLint Works</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <p className="text-gray-300 leading-relaxed mb-8">
                ESLint analyzes your code using configurable rules and provides immediate feedback
                about potential issues and style violations:
              </p>

              {/* Interactive Animation */}
              <div className="bg-black/50 rounded-lg p-6 mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-white">ESLint Analysis Process</h3>
                  <button
                    onClick={startAnimation}
                    className="flex items-center space-x-2 px-4 py-2 bg-lime-400 text-black font-medium rounded-lg hover:bg-lime-300 transition-colors"
                  >
                    {isAnimating ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    <span>{isAnimating ? 'Analyzing...' : 'Start Analysis'}</span>
                  </button>
                </div>
                
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
                  <div className={`flex-1 bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 text-center transition-all duration-1000 ${isAnimating ? 'scale-105 border-blue-400' : ''}`}>
                    <div className="text-2xl mb-2">📝</div>
                    <h4 className="font-semibold text-blue-400 mb-1">1. Parse</h4>
                    <p className="text-sm text-gray-400">Read and parse your code</p>
                  </div>
                  
                  <div className={`w-8 h-0.5 bg-lime-400 transition-all duration-1000 ${isAnimating ? 'bg-lime-300' : ''}`}></div>
                  
                  <div className={`flex-1 bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 text-center transition-all duration-1000 delay-500 ${isAnimating ? 'scale-105 border-yellow-400' : ''}`}>
                    <div className="text-2xl mb-2">🔍</div>
                    <h4 className="font-semibold text-yellow-400 mb-1">2. Analyze</h4>
                    <p className="text-sm text-gray-400">Apply configured rules</p>
                  </div>
                  
                  <div className={`w-8 h-0.5 bg-lime-400 transition-all duration-1000 ${isAnimating ? 'bg-lime-300' : ''}`}></div>
                  
                  <div className={`flex-1 bg-green-500/10 border border-green-500/20 rounded-lg p-4 text-center transition-all duration-1000 delay-1000 ${isAnimating ? 'scale-105 border-green-400' : ''}`}>
                    <div className="text-2xl mb-2">📊</div>
                    <h4 className="font-semibold text-green-400 mb-1">3. Report</h4>
                    <p className="text-sm text-gray-400">Show errors and warnings</p>
                  </div>
                </div>
              </div>

              {/* Code Examples */}
              <div className="space-y-6">
                <div className="bg-black/30 rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-red-500/10 rounded-lg flex items-center justify-center">
                      <AlertTriangle className="w-5 h-5 text-red-400" />
                    </div>
                    <h3 className="font-semibold text-red-400">Common Issues ESLint Catches</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
                      <div className="text-red-400 mb-2">❌ Problematic Code</div>
                      <div className="text-gray-300">
                        <div><span className="text-blue-400">const</span> <span className="text-white">unused</span> = <span className="text-green-400">'variable'</span>;</div>
                        <div><span className="text-blue-400">if</span> (condition == <span className="text-orange-400">true</span>) {`{`}</div>
                        <div className="pl-4"><span className="text-purple-400">console</span>.<span className="text-yellow-400">log</span>(<span className="text-green-400">'debug'</span>)</div>
                        <div>{`}`}</div>
                      </div>
                    </div>
                    <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
                      <div className="text-lime-400 mb-2">✅ Fixed Code</div>
                      <div className="text-gray-300">
                        <div><span className="text-gray-500">// unused variable removed</span></div>
                        <div><span className="text-blue-400">if</span> (condition === <span className="text-orange-400">true</span>) {`{`}</div>
                        <div className="pl-4"><span className="text-gray-500">// console.log removed</span></div>
                        <div>{`}`}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-black/30 rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center">
                      <Settings className="w-5 h-5 text-blue-400" />
                    </div>
                    <h3 className="font-semibold text-blue-400">ESLint Configuration</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Configure ESLint using .eslintrc.js or package.json to define rules for your project:
                  </p>
                  <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
                    <div className="text-lime-400 mb-2">// .eslintrc.js</div>
                    <div className="text-gray-300">
                      <div><span className="text-blue-400">module</span>.<span className="text-white">exports</span> = {`{`}</div>
                      <div className="pl-4">
                        <div><span className="text-purple-400">extends</span>: [<span className="text-green-400">'react-app'</span>, <span className="text-green-400">'react-app/jest'</span>],</div>
                        <div><span className="text-purple-400">rules</span>: {`{`}</div>
                        <div className="pl-4">
                          <div><span className="text-green-400">'no-unused-vars'</span>: <span className="text-green-400">'error'</span>,</div>
                          <div><span className="text-green-400">'no-console'</span>: <span className="text-green-400">'warn'</span>,</div>
                          <div><span className="text-green-400">'eqeqeq'</span>: <span className="text-green-400">'error'</span></div>
                        </div>
                        <div>{`}`}</div>
                      </div>
                      <div>{`}`}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ESLint Rules Categories */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-lime-400/10 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-lime-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">ESLint Rule Categories</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-red-500/10 rounded-lg flex items-center justify-center mt-1">
                      <AlertTriangle className="w-4 h-4 text-red-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-red-400 mb-2">Possible Errors</h3>
                      <p className="text-gray-400 text-sm mb-3">
                        Rules that catch potential runtime errors and logical mistakes.
                      </p>
                      <ul className="text-xs text-gray-500 space-y-1">
                        <li>• no-unused-vars</li>
                        <li>• no-undef</li>
                        <li>• no-unreachable</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center mt-1">
                      <Shield className="w-4 h-4 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-400 mb-2">Best Practices</h3>
                      <p className="text-gray-400 text-sm mb-3">
                        Rules that enforce coding best practices and prevent common mistakes.
                      </p>
                      <ul className="text-xs text-gray-500 space-y-1">
                        <li>• eqeqeq (===)</li>
                        <li>• no-eval</li>
                        <li>• no-implicit-globals</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-purple-500/10 rounded-lg flex items-center justify-center mt-1">
                      <Code className="w-4 h-4 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-purple-400 mb-2">Stylistic Issues</h3>
                      <p className="text-gray-400 text-sm mb-3">
                        Rules that enforce consistent code style and formatting.
                      </p>
                      <ul className="text-xs text-gray-500 space-y-1">
                        <li>• indent</li>
                        <li>• quotes</li>
                        <li>• semi</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-black/30 rounded-lg p-6">
                  <h3 className="font-semibold text-white mb-4">Popular ESLint Presets</h3>
                  <div className="space-y-4">
                    <div className="bg-blue-500/5 border border-blue-500/20 rounded p-4">
                      <h4 className="text-blue-400 font-medium mb-2">React App</h4>
                      <p className="text-sm text-gray-400 mb-2">Default configuration for Create React App</p>
                      <code className="text-xs text-gray-500">'react-app'</code>
                    </div>
                    <div className="bg-green-500/5 border border-green-500/20 rounded p-4">
                      <h4 className="text-green-400 font-medium mb-2">Airbnb</h4>
                      <p className="text-sm text-gray-400 mb-2">Comprehensive style guide by Airbnb</p>
                      <code className="text-xs text-gray-500">'airbnb'</code>
                    </div>
                    <div className="bg-yellow-500/5 border border-yellow-500/20 rounded p-4">
                      <h4 className="text-yellow-400 font-medium mb-2">Standard</h4>
                      <p className="text-sm text-gray-400 mb-2">JavaScript Standard Style guide</p>
                      <code className="text-xs text-gray-500">'standard'</code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Setup and Usage */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-lime-400/10 rounded-lg flex items-center justify-center">
                <Settings className="w-5 h-5 text-lime-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Setup and Usage</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <div className="space-y-6">
                <div className="bg-black/30 rounded-lg p-6">
                  <h3 className="font-semibold text-lime-400 mb-4">1. Installation</h3>
                  <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
                    <div className="text-gray-300">
                      <div><span className="text-blue-400"># Install ESLint</span></div>
                      <div><span className="text-white">npm install eslint --save-dev</span></div>
                      <div className="mt-2"><span className="text-blue-400"># Install React-specific rules</span></div>
                      <div><span className="text-white">npm install eslint-plugin-react --save-dev</span></div>
                    </div>
                  </div>
                </div>

                <div className="bg-black/30 rounded-lg p-6">
                  <h3 className="font-semibold text-lime-400 mb-4">2. Initialize Configuration</h3>
                  <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
                    <div className="text-gray-300">
                      <div><span className="text-blue-400"># Create ESLint config file</span></div>
                      <div><span className="text-white">npx eslint --init</span></div>
                    </div>
                  </div>
                </div>

                <div className="bg-black/30 rounded-lg p-6">
                  <h3 className="font-semibold text-lime-400 mb-4">3. Run ESLint</h3>
                  <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
                    <div className="text-gray-300">
                      <div><span className="text-blue-400"># Check all JavaScript files</span></div>
                      <div><span className="text-white">npx eslint src/</span></div>
                      <div className="mt-2"><span className="text-blue-400"># Fix auto-fixable issues</span></div>
                      <div><span className="text-white">npx eslint src/ --fix</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Key Takeaways */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-lime-400/10 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-lime-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Key Takeaways</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                    <span className="text-gray-300">ESLint catches errors before runtime</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                    <span className="text-gray-300">Enforces consistent code style across teams</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                    <span className="text-gray-300">Highly configurable with custom rules</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                    <span className="text-gray-300">Integrates with popular editors and IDEs</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                    <span className="text-gray-300">Can automatically fix many issues</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                    <span className="text-gray-300">Essential for maintaining code quality</span>
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
            onClick={() => window.location.href = '/module-1/v-dom'}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>
          
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-400">
              Page 1 of 4 • Module 2
            </div>
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
            </div>
          </div>
          
          <button 
            className="flex items-center space-x-2 px-6 py-3 bg-lime-400 text-black font-semibold rounded-lg hover:bg-lime-300 transition-colors"
            onClick={() => window.location.href = '/module-2/git'}
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ESLintPage;