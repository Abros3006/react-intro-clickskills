import React from 'react';
import { ChevronLeft, ChevronRight, BookOpen, Play, Code, Lightbulb, FormInput, CheckCircle } from 'lucide-react';

const TanstackFormsPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-8">
          <span>Module 7</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-lime-400">Tanstack Forms</span>
        </nav>

        {/* Page Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-lime-400 to-green-500 rounded-lg flex items-center justify-center">
              <FormInput className="w-6 h-6 text-black" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white">Tanstack Forms</h1>
              <p className="text-gray-400 mt-2">Advanced form handling and validation in React with Tanstack Form</p>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* What is Tanstack Forms Section */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-lime-400/10 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-lime-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">What is Tanstack Forms?</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                Tanstack Forms (formerly React Hook Form) is a powerful, flexible, and performant library for 
                managing forms in React applications. It provides a simple API for handling form state, validation, 
                and submission with minimal re-renders.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Unlike traditional form libraries, Tanstack Forms embraces uncontrolled components and uses refs 
                to manage form inputs, resulting in better performance and less complex code. It integrates seamlessly 
                with popular validation libraries like Yup, Zod, and Joi.
              </p>
              <div className="bg-lime-400/5 border border-lime-400/20 rounded-lg p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Lightbulb className="w-5 h-5 text-lime-400" />
                  <span className="text-lime-400 font-medium">Key Insight</span>
                </div>
                <p className="text-gray-300 text-sm">
                  Tanstack Forms reduces the number of re-renders by using uncontrolled components, making your 
                  forms faster and more efficient compared to traditional controlled form approaches.
                </p>
              </div>
            </div>
          </section>

          {/* Why Use Tanstack Forms Section */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-lime-400/10 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-lime-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Why Use Tanstack Forms?</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Minimal Re-renders</h3>
                      <p className="text-gray-400 text-sm">Optimized performance with uncontrolled components.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Easy Validation</h3>
                      <p className="text-gray-400 text-sm">Built-in validation with external schema support.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Small Bundle Size</h3>
                      <p className="text-gray-400 text-sm">Lightweight library with zero dependencies.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">TypeScript Support</h3>
                      <p className="text-gray-400 text-sm">Full TypeScript support with excellent type inference.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">DevTools Integration</h3>
                      <p className="text-gray-400 text-sm">Powerful debugging with React DevTools integration.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Flexible API</h3>
                      <p className="text-gray-400 text-sm">Adaptable to any form design and validation pattern.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Core Concepts Section */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-lime-400/10 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-lime-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Core Concepts</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                Understanding these core concepts will help you master Tanstack Forms and build robust form 
                solutions in your React applications.
              </p>
              <div className="bg-black/50 rounded-lg p-6 font-mono text-sm">
                <div className="text-lime-400 mb-2">// Core Tanstack Forms Concepts</div>
                <div className="space-y-1 text-gray-300">
                  <div><span className="text-blue-400">const</span> <span className="text-white">concepts</span> = [</div>
                  <div className="pl-4 space-y-1">
                    <div><span className="text-green-400">'useForm Hook'</span>,</div>
                    <div><span className="text-green-400">'Field Registration'</span>,</div>
                    <div><span className="text-green-400">'Validation Schemas'</span>,</div>
                    <div><span className="text-green-400">'Error Handling'</span>,</div>
                    <div><span className="text-green-400">'Form Submission'</span>,</div>
                    <div><span className="text-green-400">'Dynamic Forms'</span></div>
                  </div>
                  <div>];</div>
                </div>
              </div>
            </div>
          </section>

          {/* What You'll Learn Section */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-lime-400/10 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-lime-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">What You'll Learn</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                This comprehensive module will teach you everything you need to know about Tanstack Forms, 
                from basic setup to advanced form patterns and integrations.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Basic Form Setup</h3>
                      <p className="text-gray-400 text-sm">Setting up forms with useForm hook and field registration.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Validation Patterns</h3>
                      <p className="text-gray-400 text-sm">Client-side validation with built-in and custom rules.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Schema Integration</h3>
                      <p className="text-gray-400 text-sm">Using Yup, Zod, and other validation libraries.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Error Handling</h3>
                      <p className="text-gray-400 text-sm">Displaying and managing form errors effectively.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Dynamic Forms</h3>
                      <p className="text-gray-400 text-sm">Creating forms with dynamic fields and field arrays.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Advanced Patterns</h3>
                      <p className="text-gray-400 text-sm">Conditional fields, multi-step forms, and complex validations.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Performance Optimization</h3>
                      <p className="text-gray-400 text-sm">Optimizing forms for better performance and user experience.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-lime-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Testing Forms</h3>
                      <p className="text-gray-400 text-sm">Best practices for testing forms with React Testing Library.</p>
                    </div>
                  </div>
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
                Before diving into Tanstack Forms, make sure you're comfortable with these React concepts:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-black/30 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">⚛️</div>
                  <h3 className="font-semibold text-white mb-1">React Hooks</h3>
                  <p className="text-gray-400 text-sm">useState, useEffect, and custom hooks</p>
                </div>
                <div className="bg-black/30 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">📝</div>
                  <h3 className="font-semibold text-white mb-1">Form Handling</h3>
                  <p className="text-gray-400 text-sm">Basic form elements and event handling</p>
                </div>
                <div className="bg-black/30 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">🔧</div>
                  <h3 className="font-semibold text-white mb-1">TypeScript</h3>
                  <p className="text-gray-400 text-sm">Basic TypeScript knowledge (optional)</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center pt-16 border-t border-gray-800 mt-16">
          <button 
            className="flex items-center space-x-2 px-6 py-3 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors"
            onClick={() => window.location.href = '/module-6/tanstack'}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>
          
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-400">
              Page 3 of 3 • Module 7
            </div>
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
            </div>
          </div>
          
          <button 
            className="flex items-center space-x-2 px-6 py-3 bg-lime-400 text-black font-semibold rounded-lg hover:bg-lime-300 transition-colors"
            onClick={() => window.location.href = '/module-7/routing'}
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TanstackFormsPage;