import React from 'react';
import { ChevronLeft, ChevronRight, BookOpen, Play, Code, Lightbulb, Navigation, Route, ArrowRight } from 'lucide-react';

const RoutingPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-8">
          <span>Module 6</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-lime-400">Routing & Navigation</span>
        </nav>

        {/* Page Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-lime-400 to-green-500 rounded-lg flex items-center justify-center">
              <Navigation className="w-6 h-6 text-black" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white">Routing & Navigation</h1>
              <p className="text-gray-400 mt-2">Building single-page applications with React Router</p>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* What is React Router Section */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-lime-400/10 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-lime-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">What is React Router?</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                React Router is the most popular routing library for React applications. It enables you to create 
                single-page applications (SPAs) with navigation features, allowing users to move between different 
                views without refreshing the page.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Unlike traditional multi-page websites, React Router manages the application's UI state through 
                URL changes, providing a seamless user experience while maintaining the benefits of client-side 
                routing such as faster navigation and better performance.
              </p>
              <div className="bg-lime-400/5 border border-lime-400/20 rounded-lg p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Lightbulb className="w-5 h-5 text-lime-400" />
                  <span className="text-lime-400 font-medium">Key Insight</span>
                </div>
                <p className="text-gray-300 text-sm">
                  React Router synchronizes the UI with the URL, making your app bookmarkable and enabling 
                  browser history navigation while keeping everything on the client side.
                </p>
              </div>
            </div>
          </section>

          {/* Core Concepts Section */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-lime-400/10 rounded-lg flex items-center justify-center">
                <Route className="w-5 h-5 text-lime-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Core Concepts</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">BrowserRouter</h3>
                      <p className="text-gray-400 text-sm">Wraps your app and enables routing functionality using HTML5 history API.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Routes</h3>
                      <p className="text-gray-400 text-sm">Container for all your Route components, handles route matching.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Route</h3>
                      <p className="text-gray-400 text-sm">Defines a path and the component to render when that path matches.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Link</h3>
                      <p className="text-gray-400 text-sm">Creates navigational links without page refreshes.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">useNavigate</h3>
                      <p className="text-gray-400 text-sm">Hook for programmatic navigation within your components.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">useParams</h3>
                      <p className="text-gray-400 text-sm">Hook to access URL parameters in your components.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Basic Setup Section */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-lime-400/10 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-lime-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Basic Setup</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                Let's start by installing React Router and setting up basic routing in your application. 
                First, you'll need to install the package and then configure your routes.
              </p>
              <div className="bg-black/50 rounded-lg p-6 font-mono text-sm mb-6">
                <div className="text-lime-400 mb-2">// Install React Router</div>
                <div className="text-gray-300">npm install react-router-dom</div>
              </div>
              <div className="bg-black/50 rounded-lg p-6 font-mono text-sm">
                <div className="text-lime-400 mb-2">// Basic App.js setup</div>
                <div className="space-y-1 text-gray-300">
                  <div><span className="text-blue-400">import</span> <span className="text-white">React</span> <span className="text-blue-400">from</span> <span className="text-green-400">'react'</span>;</div>
                  <div><span className="text-blue-400">import</span> {'{ BrowserRouter, Routes, Route }'} <span className="text-blue-400">from</span> <span className="text-green-400">'react-router-dom'</span>;</div>
                  <div><span className="text-blue-400">import</span> <span className="text-white">Home</span> <span className="text-blue-400">from</span> <span className="text-green-400">'./components/Home'</span>;</div>
                  <div><span className="text-blue-400">import</span> <span className="text-white">About</span> <span className="text-blue-400">from</span> <span className="text-green-400">'./components/About'</span>;</div>
                  <div className="mt-2"></div>
                  <div><span className="text-blue-400">function</span> <span className="text-yellow-400">App</span>() {'{'}</div>
                  <div className="pl-4 space-y-1">
                    <div><span className="text-blue-400">return</span> (</div>
                    <div className="pl-4 space-y-1">
                      <div>{'<BrowserRouter>'}</div>
                      <div className="pl-4 space-y-1">
                        <div>{'<Routes>'}</div>
                        <div className="pl-4 space-y-1">
                          <div>{'<Route path="/" element={<Home />} />'}</div>
                          <div>{'<Route path="/about" element={<About />} />'}</div>
                        </div>
                        <div>{'</Routes>'}</div>
                      </div>
                      <div>{'</BrowserRouter>'}</div>
                    </div>
                    <div>);</div>
                  </div>
                  <div>{'}'}</div>
                </div>
              </div>
            </div>
          </section>

          {/* Navigation & Links Section */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-lime-400/10 rounded-lg flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-lime-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Navigation & Links</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                Creating navigation between different routes is essential for user experience. React Router 
                provides the Link component for declarative navigation and hooks for programmatic navigation.
              </p>
              <div className="bg-black/50 rounded-lg p-6 font-mono text-sm mb-6">
                <div className="text-lime-400 mb-2">// Navigation Component</div>
                <div className="space-y-1 text-gray-300">
                  <div><span className="text-blue-400">import</span> {'{ Link, useNavigate }'} <span className="text-blue-400">from</span> <span className="text-green-400">'react-router-dom'</span>;</div>
                  <div className="mt-2"></div>
                  <div><span className="text-blue-400">function</span> <span className="text-yellow-400">Navigation</span>() {'{'}</div>
                  <div className="pl-4 space-y-1">
                    <div><span className="text-blue-400">const</span> <span className="text-white">navigate</span> = <span className="text-yellow-400">useNavigate</span>();</div>
                    <div className="mt-2"></div>
                    <div><span className="text-blue-400">const</span> <span className="text-white">handleLogin</span> = () =&gt; {'{'}</div>
                    <div className="pl-4 space-y-1">
                      <div><span className="text-gray-500">// Login logic here</span></div>
                      <div><span className="text-white">navigate</span>(<span className="text-green-400">'/dashboard'</span>);</div>
                    </div>
                    <div>{'};'}</div>
                    <div className="mt-2"></div>
                    <div><span className="text-blue-400">return</span> (</div>
                    <div className="pl-4 space-y-1">
                      <div>{'<nav>'}</div>
                      <div className="pl-4 space-y-1">
                        <div>{'<Link to="/">Home</Link>'}</div>
                        <div>{'<Link to="/about">About</Link>'}</div>
                        <div>{'<button onClick={handleLogin}>Login</button>'}</div>
                      </div>
                      <div>{'</nav>'}</div>
                    </div>
                    <div>);</div>
                  </div>
                  <div>{'}'}</div>
                </div>
              </div>
              <div className="bg-lime-400/5 border border-lime-400/20 rounded-lg p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Lightbulb className="w-5 h-5 text-lime-400" />
                  <span className="text-lime-400 font-medium">Pro Tip</span>
                </div>
                <p className="text-gray-300 text-sm">
                  Use Link for user-triggered navigation and useNavigate for programmatic navigation 
                  (after form submissions, authentication, etc.).
                </p>
              </div>
            </div>
          </section>

          {/* Advanced Features Section */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-lime-400/10 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-lime-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Advanced Features</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                React Router offers powerful features for complex applications including nested routes, 
                route parameters, protected routes, and lazy loading.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-black/30 rounded-lg p-4">
                  <h3 className="font-semibold text-white mb-2">🔗 Nested Routes</h3>
                  <p className="text-gray-400 text-sm mb-2">Create hierarchical route structures</p>
                  <div className="bg-black/50 rounded p-2 font-mono text-xs text-gray-300">
                    {'<Route path="/users/*" element={<Users />} />'}
                  </div>
                </div>
                <div className="bg-black/30 rounded-lg p-4">
                  <h3 className="font-semibold text-white mb-2">🎯 Route Parameters</h3>
                  <p className="text-gray-400 text-sm mb-2">Dynamic route segments</p>
                  <div className="bg-black/50 rounded p-2 font-mono text-xs text-gray-300">
                    {'<Route path="/user/:id" element={<User />} />'}
                  </div>
                </div>
                <div className="bg-black/30 rounded-lg p-4">
                  <h3 className="font-semibold text-white mb-2">🔐 Protected Routes</h3>
                  <p className="text-gray-400 text-sm mb-2">Authentication-based access</p>
                  <div className="bg-black/50 rounded p-2 font-mono text-xs text-gray-300">
                    {'<Route element={<ProtectedRoute />} />'}
                  </div>
                </div>
                <div className="bg-black/30 rounded-lg p-4">
                  <h3 className="font-semibold text-white mb-2">⚡ Lazy Loading</h3>
                  <p className="text-gray-400 text-sm mb-2">Code splitting with React.lazy</p>
                  <div className="bg-black/50 rounded p-2 font-mono text-xs text-gray-300">
                    {'const LazyComponent = lazy(() => import())'}
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
            onClick={() => window.location.href = '/module-7/forms'}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>
          
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-400">
              Page 1 of 1 • Module 6
            </div>
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
            </div>
          </div>
          
     
        </div>
      </div>
    </div>
  );
};

export default RoutingPage;