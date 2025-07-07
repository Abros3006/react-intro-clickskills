import { Outlet } from 'react-router';
import logo from '../assets/logo.png';

const Layout = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
                <a href="/" className="flex items-center space-x-3">
                <img src={logo} className="w-40 h-auto"/>
                </a>
              <div>
                <h3 className="text-sm text-gray-400">React Mastery Course</h3>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-400">7 Modules • 20+ Topics</span>
              <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <Outlet /> {/* This is where nested routes will render */}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img src={logo} className="w-40 h-auto"/>
              <div>
                <p className="text-sm text-gray-400">Empowering developers worldwide</p>
              </div>
            </div>
            <div className="text-sm text-gray-400">
              © 2025 ClickSkills. Built with React & Tailwind CSS.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;