import React from 'react';
import { BarChart3, PieChart, Activity } from 'lucide-react';

const Portfolio = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Portfolio & Analytics</h1>
        <div className="flex gap-4">
          <select className="bg-gray-700 text-white rounded-md px-4 py-2">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 3 months</option>
          </select>
          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md">
            Export Data
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Total PNL</h3>
            <Activity className="h-5 w-5 text-green-500" />
          </div>
          <p className="text-3xl font-bold text-green-500">+456.32%</p>
          <p className="text-sm text-gray-400 mt-2">+123.45% from last period</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Active Models</h3>
            <PieChart className="h-5 w-5 text-blue-500" />
          </div>
          <p className="text-3xl font-bold">12</p>
          <p className="text-sm text-gray-400 mt-2">3 models generating profit</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Total Trades</h3>
            <BarChart3 className="h-5 w-5 text-purple-500" />
          </div>
          <p className="text-3xl font-bold">156</p>
          <p className="text-sm text-gray-400 mt-2">78% success rate</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h2 className="text-xl font-semibold mb-6">Your Models Performance</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-4 bg-gray-700 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium">Whale Tracker v{i}</h3>
                  <span className="text-green-500">+{142 + i * 30}%</span>
                </div>
                <div className="flex justify-between text-sm text-gray-400">
                  <span>{80 + i * 10} users</span>
                  <span>{45 + i * 5} SOL revenue</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h2 className="text-xl font-semibold mb-6">Recent Transactions</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-4 bg-gray-700 rounded-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">AkWQ2X7...pump</p>
                    <p className="text-sm text-gray-400">
                      {3 - i} hours ago • {2 + i} SOL
                    </p>
                  </div>
                  <span className={i % 2 === 0 ? 'text-green-500' : 'text-red-500'}>
                    {i % 2 === 0 ? '+' : '-'}{30 + i * 10}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;