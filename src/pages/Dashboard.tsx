import React from 'react';
import { Brain, TrendingUp, Users, Clock } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">AI Trading Dashboard</h1>
        <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md">
          New Trade Analysis
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: 'Active Models', value: '24', icon: Brain, color: 'blue' },
          { title: 'Total PNL', value: '+324%', icon: TrendingUp, color: 'green' },
          { title: 'Model Users', value: '1.2k', icon: Users, color: 'purple' },
          { title: 'Avg Hold Time', value: '4.2h', icon: Clock, color: 'orange' },
        ].map((stat) => (
          <div key={stat.title} className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">{stat.title}</p>
                <p className="text-2xl font-bold mt-1">{stat.value}</p>
              </div>
              <stat.icon className={`h-8 w-8 text-${stat.color}-500`} />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h2 className="text-xl font-semibold mb-4">Recent Trades</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-gray-700 rounded-md">
                <div>
                  <p className="font-medium">AkWQ2X7...pump</p>
                  <p className="text-sm text-gray-400">3 SOL • 2 hours ago</p>
                </div>
                <span className="text-green-500">+42%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h2 className="text-xl font-semibold mb-4">Top Models</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-gray-700 rounded-md">
                <div className="flex items-center">
                  <Brain className="h-6 w-6 text-blue-500 mr-3" />
                  <div>
                    <p className="font-medium">Whale Tracker v2</p>
                    <p className="text-sm text-gray-400">by trading.sol</p>
                  </div>
                </div>
                <span className="text-green-500">98% success</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;