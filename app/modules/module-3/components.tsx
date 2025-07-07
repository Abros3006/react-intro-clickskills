import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Box, Code, Terminal, Package, Settings, Users, Monitor, Zap, Download, Play, Component, Layers, BookOpen } from 'lucide-react';

interface ComponentExample {
  name: string;
  description: string;
  type: string;
  features: string[];
  example: string;
  popularity: number;
}

interface ComponentCategory {
  title: string;
  icon: React.ReactNode;
  components: ComponentExample[];
}

interface ComponentCategories {
  [key: string]: ComponentCategory;
}

const ComponentsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('basics');
  const [installedComponents, setInstalledComponents] = useState<Set<string>>(new Set());

  const componentCategories: ComponentCategories = {
    basics: {
      title: 'Component Basics',
      icon: <Component className="w-5 h-5" />,
      components: [
        {
          name: 'Functional Components',
          description: 'Modern way to write React components using functions',
          type: 'Function',
          features: ['Hooks support', 'Simpler syntax', 'Better performance', 'Modern standard'],
          example: 'const MyComponent: React.FC = () => { return <div>Hello</div>; }',
          popularity: 95
        },
        {
          name: 'Class Components',
          description: 'Traditional React components using ES6 classes',
          type: 'Class',
          features: ['Lifecycle methods', 'State management', 'Error boundaries', 'Legacy support'],
          example: 'class MyComponent extends React.Component { render() { return <div>Hello</div>; } }',
          popularity: 30
        },
        {
          name: 'JSX Elements',
          description: 'JavaScript XML syntax for describing UI',
          type: 'Syntax',
          features: ['HTML-like syntax', 'JavaScript expressions', 'Component composition', 'Type safety'],
          example: 'const element = <h1>Hello, {name}!</h1>;',
          popularity: 100
        }
      ]
    },
    props: {
      title: 'Props & State',
      icon: <Package className="w-5 h-5" />,
      components: [
        {
          name: 'Props Interface',
          description: 'Type-safe component props with TypeScript',
          type: 'Interface',
          features: ['Type safety', 'IntelliSense', 'Required props', 'Default values'],
          example: 'interface Props { name: string; age?: number; }',
          popularity: 90
        },
        {
          name: 'useState Hook',
          description: 'Manage local component state',
          type: 'Hook',
          features: ['State management', 'Re-renders', 'Functional updates', 'Type inference'],
          example: 'const [count, setCount] = useState<number>(0);',
          popularity: 95
        },
        {
          name: 'Props Drilling',
          description: 'Passing props through component tree',
          type: 'Pattern',
          features: ['Data flow', 'Component communication', 'Nested components', 'State lifting'],
          example: '<Parent data={data}><Child data={data} /></Parent>',
          popularity: 70
        }
      ]
    },
    lifecycle: {
      title: 'Component Lifecycle',
      icon: <Layers className="w-5 h-5" />,
      components: [
        {
          name: 'useEffect Hook',
          description: 'Handle side effects in functional components',
          type: 'Hook',
          features: ['Side effects', 'Data fetching', 'Cleanup', 'Dependencies'],
          example: 'useEffect(() => { /* effect */ }, [dependency]);',
          popularity: 90
        },
        {
          name: 'Component Mounting',
          description: 'When component is first rendered to DOM',
          type: 'Phase',
          features: ['Initial render', 'DOM insertion', 'Side effects', 'Data fetching'],
          example: 'useEffect(() => { fetchData(); }, []);',
          popularity: 85
        },
        {
          name: 'Component Unmounting',
          description: 'Cleanup when component is removed',
          type: 'Phase',
          features: ['Cleanup functions', 'Event listeners', 'Timers', 'Subscriptions'],
          example: 'useEffect(() => { return () => cleanup(); }, []);',
          popularity: 80
        }
      ]
    },
    patterns: {
      title: 'Component Patterns',
      icon: <BookOpen className="w-5 h-5" />,
      components: [
        {
          name: 'Higher-Order Components',
          description: 'Function that takes a component and returns a new component',
          type: 'Pattern',
          features: ['Code reuse', 'Logic sharing', 'Props manipulation', 'Composition'],
          example: 'const withAuth = (Component: React.FC) => (props: any) => <Component {...props} />;',
          popularity: 60
        },
        {
          name: 'Render Props',
          description: 'Share code between components using a prop whose value is a function',
          type: 'Pattern',
          features: ['Dynamic rendering', 'Flexible APIs', 'Logic sharing', 'Component composition'],
          example: '<DataProvider render={(data) => <Display data={data} />} />',
          popularity: 55
        },
        {
          name: 'Compound Components',
          description: 'Multiple components that work together to form a complete UI',
          type: 'Pattern',
          features: ['Flexible API', 'Implicit state', 'Composition', 'Reusability'],
          example: '<Select><Option value="1">One</Option><Option value="2">Two</Option></Select>',
          popularity: 70
        }
      ]
    }
  };

  const handleComponentTry = (componentName: string): void => {
    setInstalledComponents(prev => new Set([...prev, componentName]));
    setTimeout(() => {
      setInstalledComponents(prev => {
        const newSet = new Set(prev);
        newSet.delete(componentName);
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
          <span className="text-blue-400">Components</span>
        </nav>

        {/* Page Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg flex items-center justify-center">
              <Box className="w-6 h-6 text-black" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white">React Components</h1>
              <p className="text-gray-400 mt-2">Building blocks of React applications</p>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* Component Categories Overview */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-blue-400/10 rounded-lg flex items-center justify-center">
                <Settings className="w-5 h-5 text-blue-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Component Fundamentals</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                React components are the building blocks of any React application. They let you split the UI into independent, 
                reusable pieces that can be composed together to build complex interfaces. Understanding components is fundamental 
                to mastering React development.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {Object.entries(componentCategories).map(([key, category]) => (
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
                    <p className="text-xs text-gray-400">{category.components.length} concepts</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Component Details */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-blue-400/10 rounded-lg flex items-center justify-center">
                {componentCategories[activeCategory].icon}
              </div>
              <h2 className="text-2xl font-semibold text-white">{componentCategories[activeCategory].title}</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <div className="space-y-6">
                {componentCategories[activeCategory].components.map((component, index) => (
                  <div key={index} className="bg-black/30 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-semibold text-white text-lg">{component.name}</h3>
                          <span className="px-2 py-1 bg-blue-400/10 text-blue-400 text-xs rounded-full">
                            {component.type}
                          </span>
                        </div>
                        <p className="text-gray-300 mb-3">{component.description}</p>
                        
                        {/* Usage Bar */}
                        <div className="mb-4">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="text-sm text-gray-400">Usage in Modern React</span>
                            <span className="text-sm text-blue-400">{component.popularity}%</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div 
                              className="bg-blue-400 h-2 rounded-full transition-all duration-1000"
                              style={{ width: `${component.popularity}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      
                      <button
                        onClick={() => handleComponentTry(component.name)}
                        className={`ml-4 px-4 py-2 rounded-lg font-medium transition-colors ${
                          installedComponents.has(component.name)
                            ? 'bg-blue-500 text-white'
                            : 'bg-blue-400 text-black hover:bg-blue-300'
                        }`}
                      >
                        {installedComponents.has(component.name) ? '✓ Learned' : 'Learn'}
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-blue-400 mb-2">Key Features</h4>
                        <ul className="space-y-1">
                          {component.features.map((feature, fIndex) => (
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
                          {component.example}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Component Best Practices */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-blue-400/10 rounded-lg flex items-center justify-center">
                <Download className="w-5 h-5 text-blue-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Best Practices</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                Follow these best practices to write maintainable and efficient React components:
              </p>
              
              <div className="space-y-4">
                <div className="bg-black/30 rounded-lg p-6">
                  <h3 className="font-semibold text-blue-400 mb-4">Component Structure</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-500/10 rounded flex items-center justify-center">
                          <span className="text-blue-400 text-sm">1</span>
                        </div>
                        <div>
                          <div className="font-medium text-white">Single Responsibility</div>
                          <div className="text-sm text-gray-400">One component, one purpose</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-yellow-500/10 rounded flex items-center justify-center">
                          <span className="text-yellow-400 text-sm">2</span>
                        </div>
                        <div>
                          <div className="font-medium text-white">Descriptive Names</div>
                          <div className="text-sm text-gray-400">Clear, meaningful component names</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-500/10 rounded flex items-center justify-center">
                          <span className="text-green-400 text-sm">3</span>
                        </div>
                        <div>
                          <div className="font-medium text-white">Small Components</div>
                          <div className="text-sm text-gray-400">Keep components focused and small</div>
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
                          <div className="text-sm text-gray-400">Use TypeScript interfaces</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-pink-500/10 rounded flex items-center justify-center">
                          <span className="text-pink-400 text-sm">5</span>
                        </div>
                        <div>
                          <div className="font-medium text-white">Props Validation</div>
                          <div className="text-sm text-gray-400">Define required and optional props</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-orange-500/10 rounded flex items-center justify-center">
                          <span className="text-orange-400 text-sm">6</span>
                        </div>
                        <div>
                          <div className="font-medium text-white">Consistent Structure</div>
                          <div className="text-sm text-gray-400">Follow a consistent file structure</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-black/30 rounded-lg p-6">
                  <h3 className="font-semibold text-blue-400 mb-4">Component Composition</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-black/50 rounded p-3">
                      <h4 className="font-medium text-white mb-1">Composition over Inheritance</h4>
                      <p className="text-xs text-gray-400">Use composition to build complex UIs</p>
                    </div>
                    <div className="bg-black/50 rounded p-3">
                      <h4 className="font-medium text-white mb-1">Children Props</h4>
                      <p className="text-xs text-gray-400">Use children for flexible layouts</p>
                    </div>
                    <div className="bg-black/50 rounded p-3">
                      <h4 className="font-medium text-white mb-1">Render Props</h4>
                      <p className="text-xs text-gray-400">Share logic between components</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Component Examples */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-blue-400/10 rounded-lg flex items-center justify-center">
                <Play className="w-5 h-5 text-blue-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Component Examples</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <div className="space-y-6">
                <div className="bg-black/30 rounded-lg p-6">
                  <h3 className="font-semibold text-blue-400 mb-4">Basic Functional Component</h3>
                  <div className="space-y-4">
                    <div className="bg-black/50 rounded-lg p-4">
                      <h4 className="font-medium text-white mb-2">TypeScript Interface</h4>
                      <div className="bg-black/50 rounded p-3 font-mono text-sm text-blue-400 overflow-x-auto">
                        {`interface ButtonProps {
  text: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}`}
                      </div>
                    </div>
                    <div className="bg-black/50 rounded-lg p-4">
                      <h4 className="font-medium text-white mb-2">Component Implementation</h4>
                      <div className="bg-black/50 rounded p-3 font-mono text-sm text-blue-400 overflow-x-auto">
                        {`const Button: React.FC<ButtonProps> = ({ 
  text, 
  onClick, 
  variant = 'primary' 
}) => {
  return (
    <button 
      onClick={onClick}
      className={\`btn btn-\${variant}\`}
    >
      {text}
    </button>
  );
};`}
                      </div>
                    </div>
                    <div className="bg-black/50 rounded-lg p-4">
                      <h4 className="font-medium text-white mb-2">Usage</h4>
                      <div className="bg-black/50 rounded p-3 font-mono text-sm text-blue-400 overflow-x-auto">
                        {`<Button 
  text="Click me" 
  onClick={() => alert('Clicked!')} 
  variant="primary" 
/>`}
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
                    <span className="text-gray-300">Components are the building blocks of React</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300">Functional components are the modern standard</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300">Props enable component communication</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300">TypeScript provides type safety</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300">Composition over inheritance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300">Keep components small and focused</span>
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
            onClick={() => window.location.href = '/module-2/tools'}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>
          
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-400">
              Page 1 of 3 • Module 3
            </div>
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
            </div>
          </div>
          
          <button 
            className="flex items-center space-x-2 px-6 py-3 bg-blue-400 text-black font-semibold rounded-lg hover:bg-blue-300 transition-colors"
            onClick={() => window.location.href = '/module-3/functions'}
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComponentsPage;