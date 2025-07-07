import { ChevronLeft, ChevronRight, BookOpen, Code, Lightbulb, Zap } from 'lucide-react';

const EventHandlingPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-8">
          <span>Module 4</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-amber-400">Event Handling</span>
        </nav>

        {/* Page Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-black" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white">Event Handling in React</h1>
              <p className="text-gray-400 mt-2">Learn how to handle user interactions and events in your React applications</p>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* What are Events Section */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-amber-400/10 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-amber-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">What are Events in React?</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                Events in React are actions that can be triggered by user interactions, such as clicking a button, 
                typing in an input field, or hovering over an element. React uses SyntheticEvents, which are 
                wrappers around native DOM events that provide consistent behavior across different browsers.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Event handlers are functions that are called when specific events occur. They allow your React 
                components to respond to user actions and update the application state accordingly, making your 
                applications interactive and dynamic.
              </p>
              <div className="bg-amber-400/5 border border-amber-400/20 rounded-lg p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Lightbulb className="w-5 h-5 text-amber-400" />
                  <span className="text-amber-400 font-medium">Key Insight</span>
                </div>
                <p className="text-gray-300 text-sm">
                  React's SyntheticEvents provide a consistent API across all browsers and include additional 
                  features like event pooling for better performance.
                </p>
              </div>
            </div>
          </section>

          {/* Basic Event Handling Section */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-amber-400/10 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-amber-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Basic Event Handling</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                Here's how you can handle common events in React components:
              </p>
              <div className="bg-black/50 rounded-lg p-6 font-mono text-sm mb-6">
                <div className="text-amber-400 mb-2">// Basic Click Handler</div>
                <div className="space-y-1 text-gray-300">
                  <div><span className="text-blue-400">function</span> <span className="text-yellow-400">ButtonExample</span></div>
                  <div className="pl-4 space-y-1">
                    <div><span className="text-blue-400">const</span> <span className="text-white">handleClick</span> = () =&gt; </div>
                    <div className="pl-4"><span className="text-white">alert</span>(<span className="text-green-400">'Button clicked!'</span>);</div>
                    <div><span className="text-blue-400">return</span></div>
                    <div className="pl-4 space-y-1">
                      <div>&lt;<span className="text-red-400">button</span> <span className="text-amber-400">onClick</span>={<span className="text-white">handleClick</span>}&gt;</div>
                      <div className="pl-4">Click me!</div>
                      <div>&lt;/<span className="text-red-400">button</span>&gt;</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-black/50 rounded-lg p-6 font-mono text-sm">
                <div className="text-amber-400 mb-2">// Input Change Handler</div>
                <div className="space-y-1 text-gray-300">
                  <div><span className="text-blue-400">function</span> <span className="text-yellow-400">InputExample</span></div>
                  <div className="pl-4 space-y-1">
                    <div><span className="text-blue-400">const</span> [<span className="text-white">value</span>, <span className="text-white">setValue</span>] = <span className="text-white">useState</span>(<span className="text-green-400">''</span>);</div>
                    <div><span className="text-blue-400">const</span> <span className="text-white">handleChange</span> = (<span className="text-white">event</span>) =&gt;</div>
                    <div className="pl-4"><span className="text-white">setValue</span>(<span className="text-white">event.target.value</span>);</div>
                    <div><span className="text-blue-400">return</span> &lt;<span className="text-red-400">input</span> <span className="text-amber-400">onChange</span>={<span className="text-white">handleChange</span>} <span className="text-amber-400">value</span>={<span className="text-white">value</span>} /&gt;;</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Common Event Types Section */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-amber-400/10 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-amber-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Common Event Types</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Mouse Events</h3>
                      <p className="text-gray-400 text-sm">onClick, onMouseOver, onMouseOut, onMouseDown, onMouseUp</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Keyboard Events</h3>
                      <p className="text-gray-400 text-sm">onKeyDown, onKeyUp, onKeyPress for handling keyboard input</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Form Events</h3>
                      <p className="text-gray-400 text-sm">onChange, onSubmit, onFocus, onBlur for form interactions</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Touch Events</h3>
                      <p className="text-gray-400 text-sm">onTouchStart, onTouchEnd, onTouchMove for mobile devices</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Focus Events</h3>
                      <p className="text-gray-400 text-sm">onFocus, onBlur for handling element focus states</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Drag Events</h3>
                      <p className="text-gray-400 text-sm">onDragStart, onDragEnd, onDrop for drag and drop functionality</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Event Object Section */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-amber-400/10 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-amber-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Working with Event Objects</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                Event handler functions receive an event object as their first parameter. This object contains 
                useful information about the event and provides methods to control event behavior.
              </p>
              <div className="bg-black/50 rounded-lg p-6 font-mono text-sm">
                <div className="text-amber-400 mb-2">// Working with Event Objects</div>
                <div className="space-y-1 text-gray-300">
                  <div><span className="text-blue-400">function</span> <span className="text-yellow-400">EventExample</span></div>
                  <div className="pl-4 space-y-1">
                    <div><span className="text-blue-400">const</span> <span className="text-white">handleSubmit</span> = (<span className="text-white">event</span>) =&gt;</div>
                    <div className="pl-4 space-y-1">
                      <div><span className="text-gray-500">// Prevent form from submitting</span></div>
                      <div><span className="text-white">event.preventDefault</span>();</div>
                      <div><span className="text-gray-500">// Get form data</span></div>
                      <div><span className="text-blue-400">const</span> <span className="text-white">formData</span> = <span className="text-blue-400">new</span> <span className="text-white">FormData</span>(<span className="text-white">event.target</span>);</div>
                      <div><span className="text-white">console.log</span>(<span className="text-white">formData.get</span>(<span className="text-green-400">'username'</span>));</div>
                    </div>
                    <div></div>
                    <div><span className="text-blue-400">const</span> <span className="text-white">handleKeyPress</span> = (<span className="text-white">event</span>) =&gt;</div>
                    <div className="pl-4 space-y-1">
                      <div><span className="text-blue-400">if</span> (<span className="text-white">event.key</span> === <span className="text-green-400">'Enter'</span>)</div>
                      <div className="pl-4"><span className="text-white">console.log</span>(<span className="text-green-400">'Enter pressed!'</span>);</div>
                    </div>
                    <div><span className="text-blue-400">return</span> (</div>
                    <div className="pl-4 space-y-1">
                      <div>&lt;<span className="text-red-400">form</span> <span className="text-amber-400">onSubmit</span>={<span className="text-white">handleSubmit</span>}&gt;</div>
                      <div className="pl-4">&lt;<span className="text-red-400">input</span> <span className="text-amber-400">name</span>=<span className="text-green-400">"username"</span> <span className="text-amber-400">onKeyPress</span>={<span className="text-white">handleKeyPress</span>} /&gt;</div>
                      <div>&lt;/<span className="text-red-400">form</span>&gt;</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Event Handling Best Practices Section */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-amber-400/10 rounded-lg flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-amber-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Event Handling Best Practices</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                Following these best practices will help you write more efficient and maintainable event handling code:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-black/30 rounded-lg p-4">
                  <div className="text-2xl mb-2">🎯</div>
                  <h3 className="font-semibold text-white mb-2">Use Arrow Functions</h3>
                  <p className="text-gray-400 text-sm">Arrow functions automatically bind 'this' context and are more concise for simple event handlers.</p>
                </div>
                <div className="bg-black/30 rounded-lg p-4">
                  <div className="text-2xl mb-2">🚫</div>
                  <h3 className="font-semibold text-white mb-2">Avoid Inline Functions</h3>
                  <p className="text-gray-400 text-sm">Define event handlers outside JSX to prevent unnecessary re-renders and improve performance.</p>
                </div>
                <div className="bg-black/30 rounded-lg p-4">
                  <div className="text-2xl mb-2">🔄</div>
                  <h3 className="font-semibold text-white mb-2">Use useCallback</h3>
                  <p className="text-gray-400 text-sm">Wrap event handlers in useCallback to prevent child components from re-rendering unnecessarily.</p>
                </div>
                <div className="bg-black/30 rounded-lg p-4">
                  <div className="text-2xl mb-2">📋</div>
                  <h3 className="font-semibold text-white mb-2">Handle Edge Cases</h3>
                  <p className="text-gray-400 text-sm">Always check for null/undefined values and handle error cases gracefully in your event handlers.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Advanced Event Patterns Section */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-amber-400/10 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-amber-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Advanced Event Patterns</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                As you advance in React, you'll encounter more complex event handling scenarios like event delegation, 
                custom events, and handling events in dynamic lists. Understanding these patterns will help you build 
                more sophisticated and efficient applications.
              </p>
              <div className="bg-black/50 rounded-lg p-6 font-mono text-sm">
                <div className="text-amber-400 mb-2">// Event Delegation Example</div>
                <div className="space-y-1 text-gray-300">
                  <div><span className="text-blue-400">function</span> <span className="text-yellow-400">TodoList</span>()</div>
                  <div className="pl-4 space-y-1">
                    <div><span className="text-blue-400">const</span> <span className="text-white">handleListClick</span> = (<span className="text-white">event</span>) =&gt;</div>
                    <div className="pl-4 space-y-1">
                      <div><span className="text-blue-400">const</span> <span className="text-white">todoId</span> = <span className="text-white">event.target.dataset.id</span>;</div>
                      <div><span className="text-blue-400">if</span> (<span className="text-white">event.target.classList.contains</span>(<span className="text-green-400">'delete-btn'</span>))</div>
                      <div className="pl-4"><span className="text-white">deleteTodo</span>(<span className="text-white">todoId</span>);</div>
                    </div>
                    <div></div>
                    <div><span className="text-blue-400">return</span> &lt;<span className="text-red-400">ul</span> <span className="text-amber-400">onClick</span>={<span className="text-white">handleListClick</span>}&gt;{<span className="text-white">todos</span>}&lt;/<span className="text-red-400">ul</span>&gt;;</div>
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
            onClick={() => window.location.href = '/module-3/props'}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>
          
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-400">
              Page 1 of 3 • Module 4
            </div>
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
            </div>
          </div>
          
          <button 
            className="flex items-center space-x-2 px-6 py-3 bg-amber-400 text-black font-semibold rounded-lg hover:bg-amber-300 transition-colors"
            onClick={() => window.location.href = '/module-4/hooks'}
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventHandlingPage;