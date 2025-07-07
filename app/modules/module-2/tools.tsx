import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Wrench, Code, Terminal, Package, Settings, Users, Monitor, Zap, Download, Play } from 'lucide-react';

const ToolsPage = () => {
  const [activeCategory, setActiveCategory] = useState('development');
  const [installedTools, setInstalledTools] = useState(new Set());

  const toolCategories = {
    development: {
      title: 'Development Tools',
      icon: <Code className="w-5 h-5" />,
      tools: [
        {
          name: 'Visual Studio Code',
          description: 'Most popular code editor for React development',
          type: 'Editor',
          features: ['IntelliSense', 'Git integration', 'Extensions', 'Debugging'],
          install: 'Download from code.visualstudio.com',
          popularity: 95
        },
        {
          name: 'WebStorm',
          description: 'Powerful IDE with advanced React features',
          type: 'IDE',
          features: ['Smart coding assistance', 'Refactoring', 'Testing', 'Version control'],
          install: 'Download from jetbrains.com',
          popularity: 75
        },
        {
          name: 'React Developer Tools',
          description: 'Browser extension for debugging React',
          type: 'Browser Extension',
          features: ['Component tree', 'Props inspection', 'State debugging', 'Performance profiling'],
          install: 'Install from Chrome/Firefox store',
          popularity: 90
        }
      ]
    },
    bundlers: {
      title: 'Build Tools & Bundlers',
      icon: <Package className="w-5 h-5" />,
      tools: [
        {
          name: 'Vite',
          description: 'Fast build tool with instant HMR',
          type: 'Build Tool',
          features: ['Lightning fast', 'Hot module replacement', 'TypeScript support', 'Plugin ecosystem'],
          install: 'npm create vite@latest',
          popularity: 85
        },
        {
          name: 'Create React App',
          description: 'Official React project starter',
          type: 'Starter Kit',
          features: ['Zero configuration', 'Development server', 'Build scripts', 'Testing setup'],
          install: 'npx create-react-app my-app',
          popularity: 80
        },
        {
          name: 'Webpack',
          description: 'Module bundler for complex applications',
          type: 'Bundler',
          features: ['Code splitting', 'Asset optimization', 'Plugin system', 'Development server'],
          install: 'npm install webpack webpack-cli',
          popularity: 70
        }
      ]
    },
    testing: {
      title: 'Testing Tools',
      icon: <Zap className="w-5 h-5" />,
      tools: [
        {
          name: 'Jest',
          description: 'JavaScript testing framework',
          type: 'Testing Framework',
          features: ['Snapshot testing', 'Mocking', 'Coverage reports', 'Watch mode'],
          install: 'npm install --save-dev jest',
          popularity: 90
        },
        {
          name: 'React Testing Library',
          description: 'Testing utilities for React components',
          type: 'Testing Library',
          features: ['User-focused testing', 'Accessibility testing', 'Simple API', 'Best practices'],
          install: 'npm install --save-dev @testing-library/react',
          popularity: 85
        },
        {
          name: 'Cypress',
          description: 'End-to-end testing framework',
          type: 'E2E Testing',
          features: ['Real browser testing', 'Time travel debugging', 'Screenshots', 'Video recording'],
          install: 'npm install --save-dev cypress',
          popularity: 75
        }
      ]
    },
    deployment: {
      title: 'Deployment Tools',
      icon: <Monitor className="w-5 h-5" />,
      tools: [
        {
          name: 'Vercel',
          description: 'Platform for frontend deployment',
          type: 'Hosting Platform',
          features: ['Git integration', 'Automatic deployments', 'Edge network', 'Analytics'],
          install: 'npm install -g vercel',
          popularity: 85
        },
        {
          name: 'Netlify',
          description: 'Modern web development platform',
          type: 'Hosting Platform',
          features: ['Continuous deployment', 'Forms handling', 'Functions', 'Identity management'],
          install: 'npm install -g netlify-cli',
          popularity: 80
        },
        {
          name: 'GitHub Pages',
          description: 'Free static site hosting',
          type: 'Static Hosting',
          features: ['Free hosting', 'Custom domains', 'GitHub integration', 'HTTPS'],
          install: 'Configure in repository settings',
          popularity: 70
        }
      ]
    }
  };
 //@ts-ignore
  const handleToolInstall = (toolName) => {
    setInstalledTools(prev => new Set([...prev, toolName]));
    setTimeout(() => {
      setInstalledTools(prev => {
        const newSet = new Set(prev);
        newSet.delete(toolName);
        return newSet;
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-8">
          <span>Module 2</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-lime-400">Tools</span>
        </nav>

        {/* Page Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-lime-400 to-green-500 rounded-lg flex items-center justify-center">
              <Wrench className="w-6 h-6 text-black" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white">Essential React Tools</h1>
              <p className="text-gray-400 mt-2">Build faster and more efficiently with the right tools</p>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* Tool Categories Overview */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-lime-400/10 rounded-lg flex items-center justify-center">
                <Settings className="w-5 h-5 text-lime-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Development Ecosystem</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                The React ecosystem offers a rich set of tools that can significantly improve your development experience. 
                From code editors to deployment platforms, choosing the right tools can make you more productive and help you build better applications.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {Object.entries(toolCategories).map(([key, category]) => (
                  <div 
                    key={key}
                    className={`bg-black/30 rounded-lg p-4 cursor-pointer transition-all ${
                      activeCategory === key ? 'ring-2 ring-lime-400' : 'hover:bg-black/40'
                    }`}
                    onClick={() => setActiveCategory(key)}
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 bg-lime-400/10 rounded-lg flex items-center justify-center">
                        {category.icon}
                      </div>
                      <h3 className="font-semibold text-white text-sm">{category.title}</h3>
                    </div>
                    <p className="text-xs text-gray-400">{category.tools.length} tools</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Tool Details */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-lime-400/10 rounded-lg flex items-center justify-center">
                {//@ts-ignore
                toolCategories[activeCategory].icon}
              </div>
              <h2 className="text-2xl font-semibold text-white">{//@ts-ignore
              toolCategories[activeCategory].title}</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <div className="space-y-6">
                {//@ts-ignore
                toolCategories[activeCategory].tools.map((tool, index) => (
                  <div key={index} className="bg-black/30 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-semibold text-white text-lg">{tool.name}</h3>
                          <span className="px-2 py-1 bg-lime-400/10 text-lime-400 text-xs rounded-full">
                            {tool.type}
                          </span>
                        </div>
                        <p className="text-gray-300 mb-3">{tool.description}</p>
                        
                        {/* Popularity Bar */}
                        <div className="mb-4">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="text-sm text-gray-400">Popularity</span>
                            <span className="text-sm text-lime-400">{tool.popularity}%</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div 
                              className="bg-lime-400 h-2 rounded-full transition-all duration-1000"
                              style={{ width: `${tool.popularity}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      
                      <button
                        onClick={() => handleToolInstall(tool.name)}
                        className={`ml-4 px-4 py-2 rounded-lg font-medium transition-colors ${
                          installedTools.has(tool.name)
                            ? 'bg-green-500 text-white'
                            : 'bg-lime-400 text-black hover:bg-lime-300'
                        }`}
                      >
                        {installedTools.has(tool.name) ? '✓ Added' : 'Try It'}
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-blue-400 mb-2">Key Features</h4>
                        <ul className="space-y-1">
                          {//@ts-ignore
                          tool.features.map((feature, fIndex) => (
                            <li key={fIndex} className="text-sm text-gray-400 flex items-center space-x-2">
                              <div className="w-1 h-1 bg-lime-400 rounded-full"></div>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-yellow-400 mb-2">Installation</h4>
                        <div className="bg-black/50 rounded p-3 font-mono text-sm text-gray-300">
                          {tool.install}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Recommended Setup */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-lime-400/10 rounded-lg flex items-center justify-center">
                <Download className="w-5 h-5 text-lime-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Recommended Setup</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                Here's a recommended toolchain for React development that works well for most projects:
              </p>
              
              <div className="space-y-4">
                <div className="bg-black/30 rounded-lg p-6">
                  <h3 className="font-semibold text-lime-400 mb-4">Essential Setup</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-500/10 rounded flex items-center justify-center">
                          <span className="text-blue-400 text-sm">1</span>
                        </div>
                        <div>
                          <div className="font-medium text-white">Code Editor</div>
                          <div className="text-sm text-gray-400">Visual Studio Code + Extensions</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-yellow-500/10 rounded flex items-center justify-center">
                          <span className="text-yellow-400 text-sm">2</span>
                        </div>
                        <div>
                          <div className="font-medium text-white">Project Setup</div>
                          <div className="text-sm text-gray-400">Vite or Create React App</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-500/10 rounded flex items-center justify-center">
                          <span className="text-green-400 text-sm">3</span>
                        </div>
                        <div>
                          <div className="font-medium text-white">Browser Tools</div>
                          <div className="text-sm text-gray-400">React Developer Tools</div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-purple-500/10 rounded flex items-center justify-center">
                          <span className="text-purple-400 text-sm">4</span>
                        </div>
                        <div>
                          <div className="font-medium text-white">Testing</div>
                          <div className="text-sm text-gray-400">Jest + React Testing Library</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-pink-500/10 rounded flex items-center justify-center">
                          <span className="text-pink-400 text-sm">5</span>
                        </div>
                        <div>
                          <div className="font-medium text-white">Deployment</div>
                          <div className="text-sm text-gray-400">Vercel or Netlify</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-orange-500/10 rounded flex items-center justify-center">
                          <span className="text-orange-400 text-sm">6</span>
                        </div>
                        <div>
                          <div className="font-medium text-white">Version Control</div>
                          <div className="text-sm text-gray-400">Git + GitHub</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-black/30 rounded-lg p-6">
                  <h3 className="font-semibold text-blue-400 mb-4">VS Code Extensions</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-black/50 rounded p-3">
                      <h4 className="font-medium text-white mb-1">ES7+ React/Redux</h4>
                      <p className="text-xs text-gray-400">Code snippets and shortcuts</p>
                    </div>
                    <div className="bg-black/50 rounded p-3">
                      <h4 className="font-medium text-white mb-1">Prettier</h4>
                      <p className="text-xs text-gray-400">Code formatting</p>
                    </div>
                    <div className="bg-black/50 rounded p-3">
                      <h4 className="font-medium text-white mb-1">Auto Rename Tag</h4>
                      <p className="text-xs text-gray-400">Sync HTML/JSX tags</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Start Guide */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-lime-400/10 rounded-lg flex items-center justify-center">
                <Play className="w-5 h-5 text-lime-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Quick Start Guide</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <div className="space-y-6">
                <div className="bg-black/30 rounded-lg p-6">
                  <h3 className="font-semibold text-lime-400 mb-4">Setting Up Your First Project</h3>
                  <div className="space-y-4">
                    <div className="bg-black/50 rounded-lg p-4">
                      <h4 className="font-medium text-white mb-2">1. Create a new React app</h4>
                      <div className="bg-black/50 rounded p-3 font-mono text-sm text-lime-400">
                        npm create vite@latest my-react-app -- --template react
                      </div>
                    </div>
                    <div className="bg-black/50 rounded-lg p-4">
                      <h4 className="font-medium text-white mb-2">2. Navigate to your project</h4>
                      <div className="bg-black/50 rounded p-3 font-mono text-sm text-lime-400">
                        cd my-react-app
                      </div>
                    </div>
                    <div className="bg-black/50 rounded-lg p-4">
                      <h4 className="font-medium text-white mb-2">3. Install dependencies</h4>
                      <div className="bg-black/50 rounded p-3 font-mono text-sm text-lime-400">
                        npm install
                      </div>
                    </div>
                    <div className="bg-black/50 rounded-lg p-4">
                      <h4 className="font-medium text-white mb-2">4. Start development server</h4>
                      <div className="bg-black/50 rounded p-3 font-mono text-sm text-lime-400">
                        npm run dev
                      </div>
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
                    <span className="text-gray-300">Choose tools that enhance productivity</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                    <span className="text-gray-300">Start simple, add complexity as needed</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                    <span className="text-gray-300">VS Code is the most popular choice</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                    <span className="text-gray-300">Use React Developer Tools for debugging</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                    <span className="text-gray-300">Testing and deployment tools are essential</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                    <span className="text-gray-300">Keep your toolchain updated</span>
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
            onClick={() => window.location.href = '/module-2/nomenclature'}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>
          
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-400">
              Page 4 of 4 • Module 2
            </div>
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
            </div>
          </div>
          
          <button 
            className="flex items-center space-x-2 px-6 py-3 bg-lime-400 text-black font-semibold rounded-lg hover:bg-lime-300 transition-colors"
            onClick={() => window.location.href = '/module-3/components'}
          >
            <span>Next Module</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToolsPage;