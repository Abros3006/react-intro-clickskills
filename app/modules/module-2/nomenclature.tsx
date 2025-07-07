import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, FileText, Code, Tag, Users, BookOpen, Lightbulb } from 'lucide-react';

const NomenclaturePage = () => {
  const [activeExample, setActiveExample] = useState('component');

  const examples = {
    component: {
      title: 'Component Names',
      good: ['UserProfile', 'ShoppingCart', 'NavigationBar', 'ProductCard'],
      bad: ['userprofile', 'shopping_cart', 'navBar', 'product-card']
    },
    variables: {
      title: 'Variable Names',
      good: ['userName', 'isLoggedIn', 'totalPrice', 'currentUser'],
      bad: ['un', 'flag', 'price', 'user']
    },
    functions: {
      title: 'Function Names',
      good: ['handleUserLogin', 'fetchUserData', 'calculateTotalPrice', 'validateEmail'],
      bad: ['login', 'getData', 'calc', 'check']
    },
    props: {
      title: 'Props Names',
      good: ['onClick', 'isDisabled', 'backgroundColor', 'maxLength'],
      bad: ['click', 'disabled', 'bgColor', 'max']
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-8">
          <span>Module 2</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-lime-400">Nomenclature</span>
        </nav>

        {/* Page Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-lime-400 to-green-500 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-black" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white">Naming Conventions</h1>
              <p className="text-gray-400 mt-2">Write clean, readable code with consistent naming</p>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* Why Nomenclature Matters */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-lime-400/10 rounded-lg flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-lime-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Why Nomenclature Matters</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                Good naming conventions make your code self-documenting and easier to understand. 
                When you return to your code months later, or when other developers read it, 
                clear names tell the story of what your code does.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-black/30 rounded-lg p-6">
                  <h3 className="font-semibold text-red-400 mb-3 flex items-center space-x-2">
                    <span>❌</span>
                    <span>Poor Naming</span>
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Confusing and unclear</li>
                    <li>• Requires comments to understand</li>
                    <li>• Hard to maintain</li>
                    <li>• Increases development time</li>
                    <li>• Prone to bugs</li>
                  </ul>
                </div>
                
                <div className="bg-black/30 rounded-lg p-6">
                  <h3 className="font-semibold text-lime-400 mb-3 flex items-center space-x-2">
                    <span>✅</span>
                    <span>Good Naming</span>
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Self-documenting code</li>
                    <li>• Easy to understand</li>
                    <li>• Maintainable codebase</li>
                    <li>• Faster development</li>
                    <li>• Fewer bugs</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* React Naming Conventions */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-lime-400/10 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-lime-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">React Naming Conventions</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-black/30 rounded-lg p-4">
                    <h3 className="font-semibold text-lime-400 mb-3">Components</h3>
                    <div className="space-y-2 text-sm">
                      <div className="bg-black/50 rounded p-3">
                        <div className="text-blue-400 font-medium">PascalCase</div>
                        <div className="text-gray-400 text-xs mt-1">Every word capitalized</div>
                      </div>
                      <div className="bg-green-500/10 rounded p-2 text-green-400 font-mono text-xs">
                        UserProfile, ShoppingCart, NavigationMenu
                      </div>
                    </div>
                  </div>

                  <div className="bg-black/30 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-400 mb-3">Variables & Functions</h3>
                    <div className="space-y-2 text-sm">
                      <div className="bg-black/50 rounded p-3">
                        <div className="text-blue-400 font-medium">camelCase</div>
                        <div className="text-gray-400 text-xs mt-1">First word lowercase, rest capitalized</div>
                      </div>
                      <div className="bg-green-500/10 rounded p-2 text-green-400 font-mono text-xs">
                        userName, handleClick, isLoggedIn
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-black/30 rounded-lg p-4">
                    <h3 className="font-semibold text-yellow-400 mb-3">Constants</h3>
                    <div className="space-y-2 text-sm">
                      <div className="bg-black/50 rounded p-3">
                        <div className="text-blue-400 font-medium">UPPER_SNAKE_CASE</div>
                        <div className="text-gray-400 text-xs mt-1">All uppercase with underscores</div>
                      </div>
                      <div className="bg-green-500/10 rounded p-2 text-green-400 font-mono text-xs">
                        API_BASE_URL, MAX_RETRY_COUNT
                      </div>
                    </div>
                  </div>

                  <div className="bg-black/30 rounded-lg p-4">
                    <h3 className="font-semibold text-purple-400 mb-3">Files & Folders</h3>
                    <div className="space-y-2 text-sm">
                      <div className="bg-black/50 rounded p-3">
                        <div className="text-blue-400 font-medium">kebab-case</div>
                        <div className="text-gray-400 text-xs mt-1">Lowercase with hyphens</div>
                      </div>
                      <div className="bg-green-500/10 rounded p-2 text-green-400 font-mono text-xs">
                        user-profile.js, shopping-cart.css
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Examples */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-lime-400/10 rounded-lg flex items-center justify-center">
                <Tag className="w-5 h-5 text-lime-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Interactive Examples</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <div className="mb-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {Object.entries(examples).map(([key, example]) => (
                    <button
                      key={key}
                      onClick={() => setActiveExample(key)}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                        activeExample === key 
                          ? 'bg-lime-400 text-black' 
                          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      {example.title}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-red-500/5 border border-red-500/20 rounded-lg p-6">
                  <h3 className="font-semibold text-red-400 mb-4 flex items-center space-x-2">
                    <span>❌</span>
                    <span>Bad Examples</span>
                  </h3>
                  <div className="space-y-2">
                    {//@ts-ignore
                    examples[activeExample].bad.map((item, index) => (
                      <div key={index} className="bg-black/30 rounded p-3 font-mono text-sm text-red-300">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-6">
                  <h3 className="font-semibold text-green-400 mb-4 flex items-center space-x-2">
                    <span>✅</span>
                    <span>Good Examples</span>
                  </h3>
                  <div className="space-y-2">
                    
                    {//@ts-ignore
                    examples[activeExample].good.map((item, index) => (
                      <div key={index} className="bg-black/30 rounded p-3 font-mono text-sm text-green-300">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Practical Guidelines */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-lime-400/10 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-lime-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Practical Guidelines</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <div className="space-y-6">
                <div className="bg-black/30 rounded-lg p-6">
                  <h3 className="font-semibold text-lime-400 mb-4">General Rules</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                        <span className="text-gray-300">Use descriptive names</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                        <span className="text-gray-300">Avoid abbreviations</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                        <span className="text-gray-300">Be consistent throughout</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                        <span className="text-gray-300">Use intention-revealing names</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                        <span className="text-gray-300">Avoid mental mapping</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                        <span className="text-gray-300">Use searchable names</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-black/30 rounded-lg p-6">
                  <h3 className="font-semibold text-blue-400 mb-4">React-Specific Tips</h3>
                  <div className="space-y-4">
                    <div className="bg-black/50 rounded p-4">
                      <h4 className="text-yellow-400 font-medium mb-2">Event Handlers</h4>
                      <div className="text-sm text-gray-300 mb-2">Use "handle" prefix for event handlers</div>
                      <div className="bg-green-500/10 rounded p-2 text-green-400 font-mono text-xs">
                        handleClick, handleSubmit, handleInputChange
                      </div>
                    </div>
                    
                    <div className="bg-black/50 rounded p-4">
                      <h4 className="text-yellow-400 font-medium mb-2">Boolean Props</h4>
                      <div className="text-sm text-gray-300 mb-2">Use "is", "has", "can", "should" prefixes</div>
                      <div className="bg-green-500/10 rounded p-2 text-green-400 font-mono text-xs">
                        isVisible, hasError, canEdit, shouldRender
                      </div>
                    </div>
                    
                    <div className="bg-black/50 rounded p-4">
                      <h4 className="text-yellow-400 font-medium mb-2">Custom Hooks</h4>
                      <div className="text-sm text-gray-300 mb-2">Always start with "use" prefix</div>
                      <div className="bg-green-500/10 rounded p-2 text-green-400 font-mono text-xs">
                        useAuth, useLocalStorage, useApiData
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-black/30 rounded-lg p-6">
                  <h3 className="font-semibold text-purple-400 mb-4">Common Patterns</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-black/50 rounded p-4">
                      <h4 className="text-blue-400 font-medium mb-2">Collections</h4>
                      <div className="space-y-1 text-sm">
                        <div className="text-gray-300">Use plural for arrays</div>
                        <div className="font-mono text-green-400 text-xs">users, products, items</div>
                      </div>
                    </div>
                    <div className="bg-black/50 rounded p-4">
                      <h4 className="text-blue-400 font-medium mb-2">Single Items</h4>
                      <div className="space-y-1 text-sm">
                        <div className="text-gray-300">Use singular for objects</div>
                        <div className="font-mono text-green-400 text-xs">user, product, selectedItem</div>
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
                    <span className="text-gray-300">Components use PascalCase</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                    <span className="text-gray-300">Variables and functions use camelCase</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                    <span className="text-gray-300">Constants use UPPER_SNAKE_CASE</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                    <span className="text-gray-300">Be descriptive and consistent</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                    <span className="text-gray-300">Use intention-revealing names</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                    <span className="text-gray-300">Follow React community conventions</span>
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
            onClick={() => window.location.href = '/module-2/git'}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>
          
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-400">
              Page 3 of 4 • Module 2
            </div>
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
            </div>
          </div>
          
          <button 
            className="flex items-center space-x-2 px-6 py-3 bg-lime-400 text-black font-semibold rounded-lg hover:bg-lime-300 transition-colors"
            onClick={() => window.location.href = '/module-2/tools'}
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NomenclaturePage;