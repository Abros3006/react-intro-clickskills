import React from 'react';
import { ChevronLeft, ChevronRight, Settings, Download, Terminal, CheckCircle, AlertCircle, ExternalLink } from 'lucide-react';

const SetupPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-8">
          <span>Module 1</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-lime-400">Setup</span>
        </nav>

        {/* Page Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-lime-400 to-green-500 rounded-lg flex items-center justify-center">
              <Settings className="w-6 h-6 text-black" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white">Development Environment Setup</h1>
              <p className="text-gray-400 mt-2">Setting up your machine for React development</p>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* Required Tools Section */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-lime-400/10 rounded-lg flex items-center justify-center">
                <Download className="w-5 h-5 text-lime-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Required Tools</h2>
            </div>
            <div className="space-y-6">
              {/* Node.js */}
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                      <Terminal className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">Node.js</h3>
                      <p className="text-gray-400 text-sm">JavaScript runtime environment</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-400">Required</span>
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">
                  Node.js is essential for running React development tools and managing packages. 
                  We recommend using the LTS (Long Term Support) version for stability.
                </p>
                <div className="bg-black/50 rounded-lg p-4 font-mono text-sm mb-4">
                  <div className="text-lime-400 mb-2"># Check if Node.js is installed</div>
                  <div className="text-gray-300">node --version</div>
                  <div className="text-gray-300">npm --version</div>
                </div>
                <div className="flex items-center space-x-4">
                  <a 
                    href="https://nodejs.org" 
                    className="flex items-center space-x-2 px-4 py-2 bg-lime-400 text-black font-medium rounded-lg hover:bg-lime-300 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Node.js</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <span className="text-sm text-gray-400">Recommended: v18.x or higher</span>
                </div>
              </div>

              {/* Code Editor */}
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                      <Settings className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">Code Editor</h3>
                      <p className="text-gray-400 text-sm">Professional development environment</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-400">Recommended</span>
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">
                  While you can use any text editor, we strongly recommend Visual Studio Code for its 
                  excellent React support, extensions, and debugging capabilities.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-black/30 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">VS Code Extensions</h4>
                    <ul className="space-y-1 text-sm text-gray-400">
                      <li>• ES7+ React/Redux/React-Native snippets</li>
                      <li>• Prettier - Code formatter</li>
                      <li>• ESLint</li>
                      <li>• Auto Rename Tag</li>
                    </ul>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">Alternative Editors</h4>
                    <ul className="space-y-1 text-sm text-gray-400">
                      <li>• WebStorm</li>
                      <li>• Sublime Text</li>
                      <li>• Atom</li>
                      <li>• Vim/Neovim</li>
                    </ul>
                  </div>
                </div>
                <a 
                  href="https://code.visualstudio.com" 
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Download VS Code</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Git */}
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center">
                      <Terminal className="w-5 h-5 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">Git</h3>
                      <p className="text-gray-400 text-sm">Version control system</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-400">Essential</span>
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">
                  Git is essential for version control and collaboration. You'll also need it to clone 
                  project repositories and manage your code changes.
                </p>
                <div className="bg-black/50 rounded-lg p-4 font-mono text-sm mb-4">
                  <div className="text-lime-400 mb-2"># Verify Git installation</div>
                  <div className="text-gray-300">git --version</div>
                </div>
                <a 
                  href="https://git-scm.com" 
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Git</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </section>

          {/* Creating Your First React App */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-lime-400/10 rounded-lg flex items-center justify-center">
                <Terminal className="w-5 h-5 text-lime-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Creating Your First React App</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                Once you have Node.js installed, creating a new React application is straightforward using Create React App, 
                which sets up a modern web development environment with no configuration.
              </p>
              
              <div className="space-y-4">
                <div className="bg-black/50 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-6 h-6 bg-lime-400/10 rounded flex items-center justify-center">
                      <span className="text-lime-400 text-sm font-mono">1</span>
                    </div>
                    <span className="text-white font-medium">Create a new React app</span>
                  </div>
                  <div className="font-mono text-sm">
                    <div className="text-lime-400 mb-1"># Using npx (recommended)</div>
                    <div className="text-gray-300">npx create-react-app my-first-app</div>
                  </div>
                </div>

                <div className="bg-black/50 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-6 h-6 bg-lime-400/10 rounded flex items-center justify-center">
                      <span className="text-lime-400 text-sm font-mono">2</span>
                    </div>
                    <span className="text-white font-medium">Navigate to your project</span>
                  </div>
                  <div className="font-mono text-sm">
                    <div className="text-gray-300">cd my-first-app</div>
                  </div>
                </div>

                <div className="bg-black/50 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-6 h-6 bg-lime-400/10 rounded flex items-center justify-center">
                      <span className="text-lime-400 text-sm font-mono">3</span>
                    </div>
                    <span className="text-white font-medium">Start the development server</span>
                  </div>
                  <div className="font-mono text-sm">
                    <div className="text-gray-300">npm start</div>
                  </div>
                </div>
              </div>

              <div className="bg-lime-400/5 border border-lime-400/20 rounded-lg p-6 mt-6">
                <div className="flex items-center space-x-2 mb-3">
                  <CheckCircle className="w-5 h-5 text-lime-400" />
                  <span className="text-lime-400 font-medium">Success!</span>
                </div>
                <p className="text-gray-300 text-sm">
                  Your React app should now be running at <span className="text-lime-400 font-mono">http://localhost:3000</span>. 
                  You'll see the React logo spinning on the page.
                </p>
              </div>
            </div>
          </section>

          {/* Troubleshooting */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-lime-400/10 rounded-lg flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-lime-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Common Issues</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <div className="space-y-6">
                <div className="bg-red-500/5 border border-red-500/20 rounded-lg p-4">
                  <h3 className="font-semibold text-red-400 mb-2">Node.js not found</h3>
                  <p className="text-gray-300 text-sm mb-3">
                    Make sure Node.js is properly installed and added to your system PATH.
                  </p>
                  <div className="bg-black/50 rounded p-2 font-mono text-sm text-gray-300">
                    node --version
                  </div>
                </div>

                <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-lg p-4">
                  <h3 className="font-semibold text-yellow-400 mb-2">Port already in use</h3>
                  <p className="text-gray-300 text-sm mb-3">
                    If port 3000 is busy, React will ask if you want to use a different port. Type 'y' to continue.
                  </p>
                </div>

                <div className="bg-blue-500/5 border border-blue-500/20 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-400 mb-2">Permission errors</h3>
                  <p className="text-gray-300 text-sm mb-3">
                    On macOS/Linux, you might need to use sudo or configure npm permissions properly.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center pt-16 border-t border-gray-800 mt-16">
          <button 
            className="flex items-center space-x-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
            onClick={() => window.location.href = '/module-1/introduction'}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>
          
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-400">
              Page 2 of 3 • Module 1
            </div>
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
            </div>
          </div>
          
          <button 
            className="flex items-center space-x-2 px-6 py-3 bg-lime-400 text-black font-semibold rounded-lg hover:bg-lime-300 transition-colors"
            onClick={() => window.location.href = '/module-1/v-dom'}
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SetupPage;