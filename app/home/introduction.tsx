import react from '../assets/react.png';

import { ChevronRight, Code, BookOpen, Zap, Users, Play, Clock } from 'lucide-react';

const Introduction = () => {
  const modules = [
    {
      id: 1,
      title: "Introduction & Setup",
      description: "Get started with React fundamentals, environment setup, and project structure",
      topics: ["Introduction.tsx", "Setup.tsx", "V-dom.tsx"],
      color: "from-lime-400 to-green-500",
      icon: <Play className="w-6 h-6" />
    },
    {
      id: 2,
      title: "Core Concepts",
      description: "Master ESLint, Git workflows, nomenclature, and essential development tools",
      topics: ["Eslint.tsx", "Git.tsx", "Nomenclature.tsx", "Tools.tsx"],
      color: "from-green-400 to-emerald-500",
      icon: <Code className="w-6 h-6" />
    },
    {
      id: 3,
      title: "Components & Functions",
      description: "Build reusable components, understand props, and create functional components",
      topics: ["Components.tsx", "Functions.tsx", "Props.tsx"],
      color: "from-emerald-400 to-teal-500",
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      id: 4,
      title: "Interactivity & State",
      description: "Handle events, manage state with hooks, and create interactive user interfaces",
      topics: ["Event-handling.tsx", "Hooks.tsx", "Inputs.tsx"],
      color: "from-teal-400 to-cyan-500",
      icon: <Zap className="w-6 h-6" />
    },
    {
      id: 5,
      title: "Advanced Patterns",
      description: "Learn context API, custom hooks, and advanced React patterns for complex apps",
      topics: ["Context.tsx", "Custom-hooks.tsx", "Effects.tsx"],
      color: "from-cyan-400 to-blue-500",
      icon: <Users className="w-6 h-6" />
    },
    {
      id: 6,
      title: "Data Management",
      description: "Work with functions, lists, and manage complex data structures efficiently",
      topics: ["Functions.tsx", "List.tsx"],
      color: "from-blue-400 to-indigo-500",
      icon: <Clock className="w-6 h-6" />
    },
    {
      id: 7,
      title: "Forms & Routing",
      description: "Build dynamic forms and implement navigation with React Router",
      topics: ["Tanstack.tsx","Forms.tsx", "Routing.tsx"],
      color: "from-indigo-400 to-purple-500",
      icon: <ChevronRight className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 h-screen">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            Master React
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-500">
              From Zero to Hero
            </span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Transform your web development skills with our comprehensive React course. 
            Build modern, interactive applications with confidence.
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <img
            src={react}
            className='color-white w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96'
          />
        </div>
        <div className="flex justify-center mt-12">
            <button
            className="px-8 py-3 bg-lime-400 text-black font-semibold rounded-lg hover:bg-lime-300 transition-colors"
            onClick={() => window.open('https://clickskills.in/courses', '_blank')}
            >
            Start Learning
            </button>
        </div>
      </section>

      {/* Course Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-lime-400 mb-2">7</div>
              <div className="text-gray-400">Comprehensive Modules</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-lime-400 mb-2">20+</div>
              <div className="text-gray-400">Practical Topics</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-lime-400 mb-2">∞</div>
              <div className="text-gray-400">Career Opportunities</div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Course Modules</h2>
            <p className="text-xl text-gray-400">Structured learning path from basics to advanced concepts</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module) => (
              <div
                key={module.id}
                className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-lime-400/50 transition-all duration-300 hover:transform hover:scale-[1.02] cursor-pointer"
                onClick={() => window.location.href = `/module-${module.id}/${module.topics[0].toLowerCase().replace('.tsx', '')}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${module.color} flex items-center justify-center text-black`}>
                    {module.icon}
                  </div>
                  <div className="text-sm text-gray-500 font-mono">
                    Module {module.id}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 group-hover:text-lime-400 transition-colors">
                  {module.title}
                </h3>
                
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {module.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  {module.topics.map((topic, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-500">
                      <div className="w-1 h-1 bg-lime-400 rounded-full mr-3"></div>
                      {topic.replace('.tsx', '')}
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                  <span className="text-sm text-gray-500">
                    {module.topics.length} Topics
                  </span>
                  <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-lime-400 group-hover:translate-x-1 transition-all" />
                </div>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-lime-400/5 to-green-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Introduction;