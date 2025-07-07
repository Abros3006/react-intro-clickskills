import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, GitBranch, GitCommit, GitMerge, Code, Play, Pause, Archive, Users } from 'lucide-react';

const GitPage = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const startAnimation = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 4000);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-8">
          <span>Module 2</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-lime-400">Git</span>
        </nav>

        {/* Page Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-lime-400 to-green-500 rounded-lg flex items-center justify-center">
              <GitBranch className="w-6 h-6 text-black" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white">Git Version Control</h1>
              <p className="text-gray-400 mt-2">Track changes and collaborate on your React projects</p>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* What is Git */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-lime-400/10 rounded-lg flex items-center justify-center">
                <GitBranch className="w-5 h-5 text-lime-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">What is Git?</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                Git is a distributed version control system that tracks changes in your code over time. 
                It allows you to save snapshots of your project, collaborate with others, and manage 
                different versions of your codebase efficiently.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-black/30 rounded-lg p-6">
                  <h3 className="font-semibold text-red-400 mb-3 flex items-center space-x-2">
                    <span>❌</span>
                    <span>Without Git</span>
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Lost code changes</li>
                    <li>• No backup or history</li>
                    <li>• Difficult collaboration</li>
                    <li>• File naming chaos</li>
                    <li>• No way to revert changes</li>
                  </ul>
                </div>
                
                <div className="bg-black/30 rounded-lg p-6">
                  <h3 className="font-semibold text-lime-400 mb-3 flex items-center space-x-2">
                    <span>✅</span>
                    <span>With Git</span>
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Complete change history</li>
                    <li>• Safe experimentation</li>
                    <li>• Seamless collaboration</li>
                    <li>• Organized codebase</li>
                    <li>• Easy rollback capability</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Git Workflow */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-lime-400/10 rounded-lg flex items-center justify-center">
                <GitCommit className="w-5 h-5 text-lime-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Git Workflow</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <p className="text-gray-300 leading-relaxed mb-8">
                Understanding the Git workflow is essential for effective version control. 
                Here's the typical process of working with Git:
              </p>

              {/* Interactive Animation */}
              <div className="bg-black/50 rounded-lg p-6 mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-white">Git Workflow Process</h3>
                  <button
                    onClick={startAnimation}
                    className="flex items-center space-x-2 px-4 py-2 bg-lime-400 text-black font-medium rounded-lg hover:bg-lime-300 transition-colors"
                  >
                    {isAnimating ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    <span>{isAnimating ? 'Working...' : 'Start Workflow'}</span>
                  </button>
                </div>
                
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className={`flex-1 bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 text-center transition-all duration-1000 ${isAnimating ? 'scale-105 border-blue-400' : ''}`}>
                      <div className="text-2xl mb-2">✏️</div>
                      <h4 className="font-semibold text-blue-400 mb-1">1. Modify</h4>
                      <p className="text-sm text-gray-400">Edit files in working directory</p>
                    </div>
                    <div className={`w-8 h-0.5 bg-lime-400 transition-all duration-1000 ${isAnimating ? 'bg-lime-300' : ''}`}></div>
                    <div className={`flex-1 bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 text-center transition-all duration-1000 delay-500 ${isAnimating ? 'scale-105 border-yellow-400' : ''}`}>
                      <div className="text-2xl mb-2">📋</div>
                      <h4 className="font-semibold text-yellow-400 mb-1">2. Stage</h4>
                      <p className="text-sm text-gray-400">Add changes to staging area</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <div className={`w-0.5 h-8 bg-lime-400 transition-all duration-1000 ${isAnimating ? 'bg-lime-300' : ''}`}></div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className={`flex-1 bg-green-500/10 border border-green-500/20 rounded-lg p-4 text-center transition-all duration-1000 delay-1000 ${isAnimating ? 'scale-105 border-green-400' : ''}`}>
                      <div className="text-2xl mb-2">💾</div>
                      <h4 className="font-semibold text-green-400 mb-1">3. Commit</h4>
                      <p className="text-sm text-gray-400">Save snapshot to repository</p>
                    </div>
                    <div className={`w-8 h-0.5 bg-lime-400 transition-all duration-1000 ${isAnimating ? 'bg-lime-300' : ''}`}></div>
                    <div className={`flex-1 bg-purple-500/10 border border-purple-500/20 rounded-lg p-4 text-center transition-all duration-1000 delay-1500 ${isAnimating ? 'scale-105 border-purple-400' : ''}`}>
                      <div className="text-2xl mb-2">🚀</div>
                      <h4 className="font-semibold text-purple-400 mb-1">4. Push</h4>
                      <p className="text-sm text-gray-400">Upload to remote repository</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Git Areas */}
              <div className="space-y-6">
                <div className="bg-black/30 rounded-lg p-6">
                  <h3 className="font-semibold text-lime-400 mb-4">Git Areas Explained</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-blue-500/5 border border-blue-500/20 rounded p-4">
                      <h4 className="text-blue-400 font-medium mb-2">Working Directory</h4>
                      <p className="text-sm text-gray-400 mb-2">Your actual project files</p>
                      <ul className="text-xs text-gray-500 space-y-1">
                        <li>• Modified files</li>
                        <li>• New files</li>
                        <li>• Deleted files</li>
                      </ul>
                    </div>
                    <div className="bg-yellow-500/5 border border-yellow-500/20 rounded p-4">
                      <h4 className="text-yellow-400 font-medium mb-2">Staging Area</h4>
                      <p className="text-sm text-gray-400 mb-2">Files ready to commit</p>
                      <ul className="text-xs text-gray-500 space-y-1">
                        <li>• Tracked changes</li>
                        <li>• Prepared snapshot</li>
                        <li>• Next commit preview</li>
                      </ul>
                    </div>
                    <div className="bg-green-500/5 border border-green-500/20 rounded p-4">
                      <h4 className="text-green-400 font-medium mb-2">Repository</h4>
                      <p className="text-sm text-gray-400 mb-2">Committed snapshots</p>
                      <ul className="text-xs text-gray-500 space-y-1">
                        <li>• Permanent history</li>
                        <li>• All commits</li>
                        <li>• Branch information</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Essential Git Commands */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-lime-400/10 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-lime-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Essential Git Commands</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-black/30 rounded-lg p-4">
                    <h3 className="font-semibold text-lime-400 mb-3">Basic Commands</h3>
                    <div className="space-y-3">
                      <div className="bg-black/50 rounded p-3 font-mono text-sm">
                        <div className="text-lime-400 mb-1">git init</div>
                        <div className="text-gray-400 text-xs">Initialize new repository</div>
                      </div>
                      <div className="bg-black/50 rounded p-3 font-mono text-sm">
                        <div className="text-lime-400 mb-1">git clone &lt;url&gt;</div>
                        <div className="text-gray-400 text-xs">Copy remote repository</div>
                      </div>
                      <div className="bg-black/50 rounded p-3 font-mono text-sm">
                        <div className="text-lime-400 mb-1">git status</div>
                        <div className="text-gray-400 text-xs">Check repository status</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-black/30 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-400 mb-3">Staging & Committing</h3>
                    <div className="space-y-3">
                      <div className="bg-black/50 rounded p-3 font-mono text-sm">
                        <div className="text-lime-400 mb-1">git add &lt;file&gt;</div>
                        <div className="text-gray-400 text-xs">Stage specific file</div>
                      </div>
                      <div className="bg-black/50 rounded p-3 font-mono text-sm">
                        <div className="text-lime-400 mb-1">git add .</div>
                        <div className="text-gray-400 text-xs">Stage all changes</div>
                      </div>
                      <div className="bg-black/50 rounded p-3 font-mono text-sm">
                        <div className="text-lime-400 mb-1">git commit -m "message"</div>
                        <div className="text-gray-400 text-xs">Commit with message</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-black/30 rounded-lg p-4">
                    <h3 className="font-semibold text-yellow-400 mb-3">Branching</h3>
                    <div className="space-y-3">
                      <div className="bg-black/50 rounded p-3 font-mono text-sm">
                        <div className="text-lime-400 mb-1">git branch</div>
                        <div className="text-gray-400 text-xs">List all branches</div>
                      </div>
                      <div className="bg-black/50 rounded p-3 font-mono text-sm">
                        <div className="text-lime-400 mb-1">git checkout -b &lt;branch&gt;</div>
                        <div className="text-gray-400 text-xs">Create and switch branch</div>
                      </div>
                      <div className="bg-black/50 rounded p-3 font-mono text-sm">
                        <div className="text-lime-400 mb-1">git merge &lt;branch&gt;</div>
                        <div className="text-gray-400 text-xs">Merge branch into current</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-black/30 rounded-lg p-4">
                    <h3 className="font-semibold text-purple-400 mb-3">Remote Operations</h3>
                    <div className="space-y-3">
                      <div className="bg-black/50 rounded p-3 font-mono text-sm">
                        <div className="text-lime-400 mb-1">git push origin &lt;branch&gt;</div>
                        <div className="text-gray-400 text-xs">Push branch to remote</div>
                      </div>
                      <div className="bg-black/50 rounded p-3 font-mono text-sm">
                        <div className="text-lime-400 mb-1">git pull</div>
                        <div className="text-gray-400 text-xs">Fetch and merge changes</div>
                      </div>
                      <div className="bg-black/50 rounded p-3 font-mono text-sm">
                        <div className="text-lime-400 mb-1">git fetch</div>
                        <div className="text-gray-400 text-xs">Download remote changes</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Git for React Projects */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-lime-400/10 rounded-lg flex items-center justify-center">
                <Archive className="w-5 h-5 text-lime-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Git for React Projects</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <div className="space-y-6">
                <div className="bg-black/30 rounded-lg p-6">
                  <h3 className="font-semibold text-lime-400 mb-4">.gitignore for React</h3>
                  <p className="text-gray-300 mb-4">
                    Essential files to exclude from version control in React projects:
                  </p>
                  <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
                    <div className="text-gray-300">
                      <div className="text-blue-400 mb-2"># Dependencies</div>
                      <div>node_modules/</div>
                      <div className="text-blue-400 mb-2 mt-4"># Build outputs</div>
                      <div>build/</div>
                      <div>dist/</div>
                      <div className="text-blue-400 mb-2 mt-4"># Environment variables</div>
                      <div>.env</div>
                      <div>.env.local</div>
                      <div className="text-blue-400 mb-2 mt-4"># IDE files</div>
                      <div>.vscode/</div>
                      <div>.idea/</div>
                      <div className="text-blue-400 mb-2 mt-4"># OS files</div>
                      <div>.DS_Store</div>
                      <div>Thumbs.db</div>
                    </div>
                  </div>
                </div>

                <div className="bg-black/30 rounded-lg p-6">
                  <h3 className="font-semibold text-blue-400 mb-4">Commit Message Best Practices</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-red-500/5 border border-red-500/20 rounded p-4">
                      <h4 className="text-red-400 font-medium mb-2">❌ Bad Examples</h4>
                      <ul className="text-sm text-gray-400 space-y-1">
                        <li>• "fix"</li>
                        <li>• "update stuff"</li>
                        <li>• "working on feature"</li>
                        <li>• "asdf"</li>
                      </ul>
                    </div>
                    <div className="bg-green-500/5 border border-green-500/20 rounded p-4">
                      <h4 className="text-green-400 font-medium mb-2">✅ Good Examples</h4>
                      <ul className="text-sm text-gray-400 space-y-1">
                        <li>• "feat: add user authentication"</li>
                        <li>• "fix: resolve login validation bug"</li>
                        <li>• "style: update button components"</li>
                        <li>• "docs: update README setup"</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-black/30 rounded-lg p-6">
                  <h3 className="font-semibold text-yellow-400 mb-4">React Project Git Workflow</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-blue-500/10 rounded flex items-center justify-center">
                        <span className="text-blue-400 text-sm">1</span>
                      </div>
                      <span className="text-gray-300">Create feature branch from main</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-yellow-500/10 rounded flex items-center justify-center">
                        <span className="text-yellow-400 text-sm">2</span>
                      </div>
                      <span className="text-gray-300">Develop and test your React component</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-green-500/10 rounded flex items-center justify-center">
                        <span className="text-green-400 text-sm">3</span>
                      </div>
                      <span className="text-gray-300">Commit changes with descriptive messages</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-purple-500/10 rounded flex items-center justify-center">
                        <span className="text-purple-400 text-sm">4</span>
                      </div>
                      <span className="text-gray-300">Push to remote and create pull request</span>
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
                <Users className="w-5 h-5 text-lime-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Key Takeaways</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                    <span className="text-gray-300">Git tracks all changes in your project</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                    <span className="text-gray-300">Use branches for different features</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                    <span className="text-gray-300">Write clear, descriptive commit messages</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                    <span className="text-gray-300">Always use .gitignore for React projects</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                    <span className="text-gray-300">Regular commits make collaboration easier</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                    <span className="text-gray-300">Git is essential for any development project</span>
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
            onClick={() => window.location.href = '/module-2/eslint'}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>
          
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-400">
              Page 2 of 4 • Module 2
            </div>
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
            </div>
          </div>
          
          <button 
            className="flex items-center space-x-2 px-6 py-3 bg-lime-400 text-black font-semibold rounded-lg hover:bg-lime-300 transition-colors"
            onClick={() => window.location.href = '/module-2/nomenclature'}
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GitPage;