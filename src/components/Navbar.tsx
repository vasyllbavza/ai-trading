import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Brain, BarChart3, Store, Wallet } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Dashboard', icon: Brain },
    { path: '/analysis', label: 'Trade Analysis', icon: BarChart3 },
    { path: '/marketplace', label: 'Marketplace', icon: Store },
    { path: '/portfolio', label: 'Portfolio', icon: Wallet },
  ];

  return (
    <nav className="bg-gray-800 border-b border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="flex-shrink-0">
              <Brain className="h-8 w-8 text-blue-500" />
            </div>
            <div className="flex space-x-4">
              {navItems.map(({ path, label, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                    location.pathname === path
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;