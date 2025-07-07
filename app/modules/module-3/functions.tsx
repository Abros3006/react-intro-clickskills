import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Box, Code, Terminal, Package, Settings, Users, Monitor, Zap, Download, Play, Component, Layers, BookOpen } from 'lucide-react';

interface FunctionExample {
  name: string;
  description: string;
  type: string;
  features: string[];
  example: string;
  popularity: number;
}

interface FunctionCategory {
  title: string;
  icon: React.ReactNode;
  functions: FunctionExample[];
}

interface FunctionCategories {
  [key: string]: FunctionCategory;
}

const FunctionsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('basics');
  const [installedFunctions, setInstalledFunctions] = useState<Set<string>>(new Set());

  const functionCategories: FunctionCategories = {
    basics: {
      title: 'Function Basics',
      icon: <Code className="w-5 h-5" />,
      functions: [
        {
          name: 'Arrow Functions',
          description: 'Modern ES6 syntax for writing functions',
          type: 'ES6',
          features: ['Concise syntax', 'Lexical this', 'Implicit returns', 'Modern standard'],
          example: 'const add = (a: number, b: number) => a + b;',
          popularity: 95
        },
        {
          name: 'Function Declarations',
          description: 'Traditional function syntax with hoisting',
          type: 'ES5',
          features: ['Hoisting', 'Function scope', 'this binding', 'Named functions'],
          example: 'function add(a: number, b: number) { return a + b; }',
          popularity: 80
        },
        {
          name: 'Function Expressions',
          description: 'Functions assigned to variables',
          type: 'Expression',
          features: ['No hoisting', 'Anonymous functions', 'First-class citizens', 'Variable assignment'],
          example: 'const add = function(a: number, b: number) { return a + b; };',
          popularity: 70
        }
      ]
    },
    parameters: {
      title: 'Parameters & Arguments',
      icon: <Settings className="w-5 h-5" />,
      functions: [
        {
          name: 'Default Parameters',
          description: 'Parameters with default values',
          type: 'ES6',
          features: ['Default values', 'Fallback behavior', 'Type safety', 'Cleaner code'],
          example: 'const greet = (name: string = "World") => `Hello, ${name}!`;',
          popularity: 90
        },
        {
          name: 'Rest Parameters',
          description: 'Collect multiple arguments into an array',
          type: 'ES6',
          features: ['Variable arguments', 'Array methods', 'Flexible functions', 'Type safety'],
          example: 'const sum = (...numbers: number[]) => numbers.reduce((a, b) => a + b, 0);',
          popularity: 85
        },
        {
          name: 'Destructuring Parameters',
          description: 'Extract values from objects or arrays in parameters',
          type: 'ES6',
          features: ['Object destructuring', 'Array destructuring', 'Cleaner syntax', 'Default values'],
          example: 'const greet = ({ name, age }: { name: string; age: number }) => `${name} is ${age}`;',
          popularity: 80
        }
      ]
    },
    advanced: {
      title: 'Advanced Functions',
      icon: <Zap className="w-5 h-5" />,
      functions: [
        {
          name: 'Higher-Order Functions',
          description: 'Functions that take or return other functions',
          type: 'Pattern',
          features: ['Function composition', 'Callback functions', 'Functional programming', 'Reusability'],
          example: 'const withLogging = (fn: Function) => (...args: any[]) => { console.log("Calling:", fn.name); return fn(...args); };',
          popularity: 75
        },
        {
          name: 'Closures',
          description: 'Functions that capture variables from outer scope',
          type: 'Concept',
          features: ['Lexical scoping', 'Data privacy', 'Factory functions', 'Module pattern'],
          example: 'const counter = () => { let count = 0; return () => ++count; };',
          popularity: 70
        },
        {
          name: 'Async Functions',
          description: 'Functions that handle asynchronous operations',
          type: 'ES2017',
          features: ['Promise handling', 'Async/await', 'Error handling', 'Cleaner syntax'],
          example: 'const fetchData = async (url: string) => { const response = await fetch(url); return response.json(); };',
          popularity: 90
        }
      ]
    },
    utility: {
      title: 'Utility Functions',
      icon: <Terminal className="w-5 h-5" />,
      functions: [
        {
          name: 'Pure Functions',
          description: 'Functions without side effects that return same output for same input',
          type: 'Concept',
          features: ['No side effects', 'Predictable', 'Testable', 'Functional programming'],
          example: 'const multiply = (a: number, b: number) => a * b;',
          popularity: 85
        },
        {
          name: 'Curried Functions',
          description: 'Functions that return other functions for partial application',
          type: 'Pattern',
          features: ['Partial application', 'Function composition', 'Reusability', 'Functional programming'],
          example: 'const add = (a: number) => (b: number) => a + b;',
          popularity: 60
        },
        {
          name: 'Memoized Functions',
          description: 'Functions that cache results for performance',
          type: 'Optimization',
          features: ['Caching', 'Performance', 'Expensive operations', 'Trade-offs'],
          example: 'const memoize = (fn: Function) => { const cache = new Map(); return (...args: any[]) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : cache.set(key, fn(...args)).get(key); }; };',
          popularity: 65
        }
      ]
    }
  };

  const handleFunctionTry = (functionName: string): void => {
    setInstalledFunctions(prev => new Set([...prev, functionName]));
    setTimeout(() => {
      setInstalledFunctions(prev => {
        const newSet = new Set(prev);
        newSet.delete(functionName);
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
          <span>Module 3</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-blue-400">Functions</span>
        </nav>

        {/* Page Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center">
              <Code className="w-6 h-6 text-black" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white">JavaScript Functions</h1>
              <p className="text-gray-400 mt-2">The building blocks of JavaScript logic</p>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* Function Categories Overview */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-blue-400/10 rounded-lg flex items-center justify-center">
                <Settings className="w-5 h-5 text-blue-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Function Fundamentals</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                Functions are reusable blocks of code that perform specific tasks. They are fundamental to JavaScript 
                and React development, enabling code organization, reusability, and maintainability. Understanding 
                different function types and patterns is crucial for effective programming.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {Object.entries(functionCategories).map(([key, category]) => (
                  <div 
                    key={key}
                    className={`bg-black/30 rounded-lg p-4 cursor-pointer transition-all ${
                      activeCategory === key ? 'ring-2 ring-blue-400' : 'hover:bg-black/40'
                    }`}
                    onClick={() => setActiveCategory(key)}
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 bg-blue-400/10 rounded-lg flex items-center justify-center">
                        {category.icon}
                      </div>
                      <h3 className="font-semibold text-white text-sm">{category.title}</h3>
                    </div>
                    <p className="text-xs text-gray-400">{category.functions.length} concepts</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Function Details */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-blue-400/10 rounded-lg flex items-center justify-center">
                {functionCategories[activeCategory].icon}
              </div>
              <h2 className="text-2xl font-semibold text-white">{functionCategories[activeCategory].title}</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <div className="space-y-6">
                {functionCategories[activeCategory].functions.map((func, index) => (
                  <div key={index} className="bg-black/30 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-semibold text-white text-lg">{func.name}</h3>
                          <span className="px-2 py-1 bg-blue-400/10 text-blue-400 text-xs rounded-full">
                            {func.type}
                          </span>
                        </div>
                        <p className="text-gray-300 mb-3">{func.description}</p>
                        
                        {/* Usage Bar */}
                        <div className="mb-4">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="text-sm text-gray-400">Usage in Modern JavaScript</span>
                            <span className="text-sm text-blue-400">{func.popularity}%</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div 
                              className="bg-blue-400 h-2 rounded-full transition-all duration-1000"
                              style={{ width: `${func.popularity}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      
                      <button
                        onClick={() => handleFunctionTry(func.name)}
                        className={`ml-4 px-4 py-2 rounded-lg font-medium transition-colors ${
                          installedFunctions.has(func.name)
                            ? 'bg-green-500 text-white'
                            : 'bg-blue-400 text-white hover:bg-blue-300'
                        }`}
                      >
                        {installedFunctions.has(func.name) ? '✓ Learned' : 'Learn'}
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-cyan-400 mb-2">Key Features</h4>
                        <ul className="space-y-1">
                          {func.features.map((feature, fIndex) => (
                            <li key={fIndex} className="text-sm text-gray-400 flex items-center space-x-2">
                              <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-yellow-400 mb-2">Example</h4>
                        <div className="bg-black/50 rounded p-3 font-mono text-sm text-gray-300 overflow-x-auto">
                          {func.example}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Function Best Practices */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-blue-400/10 rounded-lg flex items-center justify-center">
                <Download className="w-5 h-5 text-blue-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Best Practices</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                Follow these best practices to write clean, maintainable, and efficient functions:
              </p>
              
              <div className="space-y-4">
                <div className="bg-black/30 rounded-lg p-6">
                  <h3 className="font-semibold text-blue-400 mb-4">Function Design</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-cyan-500/10 rounded flex items-center justify-center">
                          <span className="text-cyan-400 text-sm">1</span>
                        </div>
                        <div>
                          <div className="font-medium text-white">Single Responsibility</div>
                          <div className="text-sm text-gray-400">One function, one task</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-yellow-500/10 rounded flex items-center justify-center">
                          <span className="text-yellow-400 text-sm">2</span>
                        </div>
                        <div>
                          <div className="font-medium text-white">Pure Functions</div>
                          <div className="text-sm text-gray-400">Avoid side effects when possible</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-500/10 rounded flex items-center justify-center">
                          <span className="text-green-400 text-sm">3</span>
                        </div>
                        <div>
                          <div className="font-medium text-white">Descriptive Names</div>
                          <div className="text-sm text-gray-400">Clear function and parameter names</div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-purple-500/10 rounded flex items-center justify-center">
                          <span className="text-purple-400 text-sm">4</span>
                        </div>
                        <div>
                          <div className="font-medium text-white">Type Safety</div>
                          <div className="text-sm text-gray-400">Use TypeScript annotations</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-pink-500/10 rounded flex items-center justify-center">
                          <span className="text-pink-400 text-sm">5</span>
                        </div>
                        <div>
                          <div className="font-medium text-white">Error Handling</div>
                          <div className="text-sm text-gray-400">Handle edge cases gracefully</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-orange-500/10 rounded flex items-center justify-center">
                          <span className="text-orange-400 text-sm">6</span>
                        </div>
                        <div>
                          <div className="font-medium text-white">Keep It Simple</div>
                          <div className="text-sm text-gray-400">Avoid overly complex functions</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-black/30 rounded-lg p-6">
                  <h3 className="font-semibold text-cyan-400 mb-4">Function Patterns</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-black/50 rounded p-3">
                      <h4 className="font-medium text-white mb-1">Arrow Functions</h4>
                      <p className="text-xs text-gray-400">Use for short, simple functions</p>
                    </div>
                    <div className="bg-black/50 rounded p-3">
                      <h4 className="font-medium text-white mb-1">Higher-Order Functions</h4>
                      <p className="text-xs text-gray-400">For functional programming patterns</p>
                    </div>
                    <div className="bg-black/50 rounded p-3">
                      <h4 className="font-medium text-white mb-1">Async/Await</h4>
                      <p className="text-xs text-gray-400">For handling asynchronous operations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Function Examples */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-blue-400/10 rounded-lg flex items-center justify-center">
                <Play className="w-5 h-5 text-blue-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Function Examples</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <div className="space-y-6">
                <div className="bg-black/30 rounded-lg p-6">
                  <h3 className="font-semibold text-blue-400 mb-4">Practical Function Examples</h3>
                  <div className="space-y-4">
                    <div className="bg-black/50 rounded-lg p-4">
                      <h4 className="font-medium text-white mb-2">Array Processing Function</h4>
                      <div className="bg-black/50 rounded p-3 font-mono text-sm text-blue-400 overflow-x-auto">
                        {`const processUsers = (users: User[]) => {
  return users
    .filter(user => user.isActive)
    .map(user => ({ ...user, displayName: \`\${user.firstName} \${user.lastName}\` }))
    .sort((a, b) => a.displayName.localeCompare(b.displayName));
};`}
                      </div>
                    </div>
                    <div className="bg-black/50 rounded-lg p-4">
                      <h4 className="font-medium text-white mb-2">Event Handler Function</h4>
                      <div className="bg-black/50 rounded p-3 font-mono text-sm text-blue-400 overflow-x-auto">
                        {`const handleSubmit = async (formData: FormData) => {
  try {
    const response = await fetch('/api/submit', {
      method: 'POST',
      body: formData
    });
    
    if (!response.ok) throw new Error('Submission failed');
    
    const result = await response.json();
    console.log('Success:', result);
  } catch (error) {
    console.error('Error:', error);
  }
};`}
                      </div>
                    </div>
                    <div className="bg-black/50 rounded-lg p-4">
                      <h4 className="font-medium text-white mb-2">Utility Function with Currying</h4>
                      <div className="bg-black/50 rounded p-3 font-mono text-sm text-blue-400 overflow-x-auto">
                        {`const createValidator = (minLength: number) => 
  (value: string) => 
    value.length >= minLength ? null : \`Must be at least \${minLength} characters\`;

const validatePassword = createValidator(8);
const validateUsername = createValidator(3);`}
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
              <div className="w-8 h-8 bg-blue-400/10 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-blue-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Key Takeaways</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300">Functions are the building blocks of JavaScript</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300">Arrow functions are the modern standard</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300">Parameters enable function flexibility</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300">TypeScript provides parameter type safety</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300">Pure functions are easier to test and debug</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300">Async/await simplifies asynchronous code</span>
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
            onClick={() => window.location.href = '/module-3/components'}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>
          
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-400">
              Page 2 of 3 • Module 3
            </div>
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
            </div>
          </div>
          
          <button 
            className="flex items-center space-x-2 px-6 py-3 bg-blue-400 text-white font-semibold rounded-lg hover:bg-blue-300 transition-colors"
            onClick={() => window.location.href = '/module-3/props'}
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