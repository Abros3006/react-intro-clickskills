import React from 'react';
import { ChevronLeft, ChevronRight, BookOpen, Play, Code, Lightbulb } from 'lucide-react';

const ListsPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-8">
          <span>Module 6</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-lime-400">Lists in React</span>
        </nav>

        {/* Page Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-lime-400 to-green-500 rounded-lg flex items-center justify-center">
              <Play className="w-6 h-6 text-black" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white">Lists in React</h1>
              <p className="text-gray-400 mt-2">Rendering dynamic lists and collections of data in React applications</p>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* What are Lists in React Section */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-lime-400/10 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-lime-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Rendering Lists in React</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                Lists are fundamental to building dynamic user interfaces in React. Whether you're displaying a list 
                of users, products, comments, or any collection of data, React provides powerful tools to render 
                and manage lists efficiently. The key to working with lists in React is understanding how to use 
                JavaScript's array methods like map(), filter(), and reduce().
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                When rendering lists in React, each item needs a unique "key" prop to help React identify which 
                items have changed, been added, or removed. This optimization ensures that React can efficiently 
                update the DOM when the list changes, leading to better performance and avoiding potential bugs.
              </p>
              <div className="bg-lime-400/5 border border-lime-400/20 rounded-lg p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Lightbulb className="w-5 h-5 text-lime-400" />
                  <span className="text-lime-400 font-medium">Key Insight</span>
                </div>
                <p className="text-gray-300 text-sm">
                  The map() method is your best friend for rendering lists in React. It transforms an array of data 
                  into an array of JSX elements, making it perfect for dynamic list rendering.
                </p>
              </div>
            </div>
          </section>

          {/* List Rendering Techniques Section */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-lime-400/10 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-lime-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">List Rendering Techniques</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Basic List Rendering</h3>
                      <p className="text-gray-400 text-sm">Using map() to render simple lists of data.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Conditional Rendering</h3>
                      <p className="text-gray-400 text-sm">Showing different content based on list conditions.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Filtering Lists</h3>
                      <p className="text-gray-400 text-sm">Using filter() to show only relevant items.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Nested Lists</h3>
                      <p className="text-gray-400 text-sm">Rendering lists within lists for complex data structures.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Dynamic Updates</h3>
                      <p className="text-gray-400 text-sm">Adding, removing, and modifying list items.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Sorting Lists</h3>
                      <p className="text-gray-400 text-sm">Organizing data in different orders dynamically.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Code Examples Section */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-lime-400/10 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-lime-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">List Rendering Examples</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                Here are practical examples of how to render lists in React, from basic mapping to more advanced 
                techniques with filtering and conditional rendering:
              </p>
              <div className="bg-black/50 rounded-lg p-6 font-mono text-sm">
                <div className="text-lime-400 mb-2">// List rendering examples</div>
                <div className="space-y-1 text-gray-300">
                  <div><span className="text-purple-400">import</span> <span className="text-white">React</span> <span className="text-purple-400">from</span> <span className="text-green-400">'react'</span>;</div>
                  <div className="mt-3"></div>
                  <div><span className="text-blue-400">const</span> <span className="text-white">UserList</span> = () =&gt; {`{`}</div>
                  <div className="pl-4 space-y-1">
                    <div><span className="text-blue-400">const</span> <span className="text-white">users</span> = [</div>
                    <div className="pl-4 space-y-1">
                      <div>{`{ id: 1, name: 'John Doe', age: 25 },`}</div>
                      <div>{`{ id: 2, name: 'Jane Smith', age: 30 },`}</div>
                      <div>{`{ id: 3, name: 'Bob Johnson', age: 35 }`}</div>
                    </div>
                    <div>];</div>
                    <div className="mt-2"></div>
                    <div><span className="text-purple-400">return</span> (</div>
                    <div className="pl-4 space-y-1">
                      <div><span className="text-red-400">&lt;ul&gt;</span></div>
                      <div className="pl-4">{`{users.map(user => (`}</div>
                      <div className="pl-8"><span className="text-red-400">&lt;li</span> <span className="text-blue-400">key</span>={`{user.id}`}<span className="text-red-400">&gt;</span></div>
                      <div className="pl-12">{`{user.name} - Age: {user.age}`}</div>
                      <div className="pl-8"><span className="text-red-400">&lt;/li&gt;</span></div>
                      <div className="pl-4">{`))}`}</div>
                      <div><span className="text-red-400">&lt;/ul&gt;</span></div>
                    </div>
                    <div>);</div>
                  </div>
                  <div>{`};`}</div>
                  <div className="mt-4"></div>
                  <div><span className="text-gray-500">// Filtered list example</span></div>
                  <div><span className="text-blue-400">const</span> <span className="text-white">filteredUsers</span> = <span className="text-white">users</span>.<span className="text-yellow-400">filter</span>(<span className="text-white">user</span> =&gt; <span className="text-white">user</span>.<span className="text-white">age</span> &gt; <span className="text-orange-400">25</span>);</div>
                </div>
              </div>
            </div>
          </section>

          {/* Keys and Performance Section */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-lime-400/10 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-lime-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Keys and Performance</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                Understanding keys is crucial for efficient list rendering in React. Keys help React identify which 
                items have changed, been added, or removed, enabling optimal updates to the DOM.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-black/30 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">🔑</div>
                  <h3 className="font-semibold text-white mb-1">Unique Keys</h3>
                  <p className="text-gray-400 text-sm">Always use unique, stable keys for list items</p>
                </div>
                <div className="bg-black/30 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">⚡</div>
                  <h3 className="font-semibold text-white mb-1">Performance</h3>
                  <p className="text-gray-400 text-sm">Proper keys improve rendering performance</p>
                </div>
                <div className="bg-black/30 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">🚫</div>
                  <h3 className="font-semibold text-white mb-1">Avoid Index Keys</h3>
                  <p className="text-gray-400 text-sm">Don't use array indices as keys for dynamic lists</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center pt-16 border-t border-gray-800 mt-16">
          <button 
            className="flex items-center space-x-2 px-6 py-3 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors"
            onClick={() => window.location.href = '/module-6/functions'}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>
          
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-400">
              Page 2 of 2 • Module 6
            </div>
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
            </div>
          </div>
          
          <button 
            className="flex items-center space-x-2 px-6 py-3 bg-lime-400 text-black font-semibold rounded-lg hover:bg-lime-300 transition-colors"
            onClick={() => window.location.href = '/module-7/tanstack'}
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListsPage;