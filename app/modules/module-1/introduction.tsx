import React from 'react';
import { ChevronLeft, ChevronRight, BookOpen, Play, Code, Lightbulb } from 'lucide-react';

const IntroductionPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-8">
          <span>Module 1</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-lime-400">Introduction</span>
        </nav>

        {/* Page Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-lime-400 to-green-500 rounded-lg flex items-center justify-center">
              <Play className="w-6 h-6 text-black" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white">Introduction to React</h1>
              <p className="text-gray-400 mt-2">Understanding the fundamentals of React and modern web development</p>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* What is React Section */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-lime-400/10 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-lime-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">What is React?</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                React is a powerful JavaScript library for building user interfaces, particularly web applications. 
                Developed by Facebook (now Meta), React has revolutionized how we think about building interactive 
                and dynamic web applications.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                At its core, React allows developers to create reusable UI components that manage their own state. 
                This component-based architecture makes it easier to build complex applications by breaking them 
                down into smaller, manageable pieces.
              </p>
              <div className="bg-lime-400/5 border border-lime-400/20 rounded-lg p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Lightbulb className="w-5 h-5 text-lime-400" />
                  <span className="text-lime-400 font-medium">Key Insight</span>
                </div>
                <p className="text-gray-300 text-sm">
                  React follows a declarative programming paradigm, meaning you describe what the UI should look like 
                  for any given state, and React figures out how to update the DOM efficiently.
                </p>
              </div>
            </div>
          </section>

          {/* Why Learn React Section */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-lime-400/10 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-lime-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Why Learn React?</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Industry Standard</h3>
                      <p className="text-gray-400 text-sm">React is used by major companies like Netflix, Airbnb, and Instagram.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Great Job Market</h3>
                      <p className="text-gray-400 text-sm">High demand for React developers with competitive salaries.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Component Reusability</h3>
                      <p className="text-gray-400 text-sm">Write once, use anywhere - build maintainable applications.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Large Ecosystem</h3>
                      <p className="text-gray-400 text-sm">Vast library of tools, packages, and community support.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Performance</h3>
                      <p className="text-gray-400 text-sm">Virtual DOM ensures efficient updates and fast rendering.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Learning Curve</h3>
                      <p className="text-gray-400 text-sm">Relatively easy to learn with JavaScript knowledge.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Course Overview Section */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-lime-400/10 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-lime-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">What You'll Learn</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                Throughout this comprehensive course, you'll master React from the ground up. We'll start with the 
                fundamentals and gradually build up to advanced concepts, ensuring you have a solid foundation 
                at each step.
              </p>
              <div className="bg-black/50 rounded-lg p-6 font-mono text-sm">
                <div className="text-lime-400 mb-2">// Course Learning Path</div>
                <div className="space-y-1 text-gray-300">
                  <div><span className="text-blue-400">const</span> <span className="text-white">topics</span> = [</div>
                  <div className="pl-4 space-y-1">
                    <div><span className="text-green-400">'React Fundamentals & Setup'</span>,</div>
                    <div><span className="text-green-400">'Components & JSX'</span>,</div>
                    <div><span className="text-green-400">'State Management & Hooks'</span>,</div>
                    <div><span className="text-green-400">'Event Handling & Forms'</span>,</div>
                    <div><span className="text-green-400">'Advanced Patterns & Context'</span>,</div>
                    <div><span className="text-green-400">'Routing & Navigation'</span></div>
                  </div>
                  <div>];</div>
                </div>
              </div>
            </div>
          </section>

          {/* Prerequisites Section */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-lime-400/10 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-lime-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Prerequisites</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                To get the most out of this course, you should have a basic understanding of the following technologies:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-black/30 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">🌐</div>
                  <h3 className="font-semibold text-white mb-1">HTML & CSS</h3>
                  <p className="text-gray-400 text-sm">Basic web markup and styling</p>
                </div>
                <div className="bg-black/30 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">⚡</div>
                  <h3 className="font-semibold text-white mb-1">JavaScript</h3>
                  <p className="text-gray-400 text-sm">ES6+ features and fundamentals</p>
                </div>
                <div className="bg-black/30 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">🔧</div>
                  <h3 className="font-semibold text-white mb-1">Development Tools</h3>
                  <p className="text-gray-400 text-sm">Code editor and browser DevTools</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center pt-16 border-t border-gray-800 mt-16">
          <button 
            className="flex items-center space-x-2 px-6 py-3 bg-gray-800 text-gray-400 rounded-lg hover:bg-gray-700 transition-colors cursor-not-allowed"
            disabled
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>
          
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-400">
              Page 1 of 3 • Module 1
            </div>
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
            </div>
          </div>
          
          <button 
            className="flex items-center space-x-2 px-6 py-3 bg-lime-400 text-black font-semibold rounded-lg hover:bg-lime-300 transition-colors"
            onClick={() => window.location.href = '/module-1/setup'}
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntroductionPage;