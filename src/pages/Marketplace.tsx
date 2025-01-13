import React from 'react';
import { Star, Users, TrendingUp } from 'lucide-react';

const Marketplace = () => {
  const models = [
    {
      id: 1,
      name: 'Whale Tracker Pro',
      creator: 'whale.sol',
      price: '50 SOL',
      pnl: '+425%',
      users: '1.2k',
      rating: 4.8,
      description: 'Advanced whale tracking with real-time alerts and analysis',
    },
    {
      id: 2,
      name: 'Momentum Master',
      creator: 'trading.sol',
      price: '35 SOL',
      pnl: '+312%',
      users: '856',
      rating: 4.6,
      description: 'Technical analysis based on volume and price action',
    },
    {
      id: 3,
      name: 'Smart Scalper',
      creator: 'alpha.sol',
      price: '25 SOL',
      pnl: '+278%',
      users: '634',
      rating: 4.5,
      description: 'Quick trades based on market inefficiencies',
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Model Marketplace</h1>
        <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md">
          List Your Model
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {models.map((model) => (
          <div
            key={model.id}
            className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden"
          >
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold">{model.name}</h3>
                  <p className="text-gray-400">by {model.creator}</p>
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 mr-1" />
                  <span>{model.rating}</span>
                </div>
              </div>

              <p className="mt-4 text-gray-300">{model.description}</p>

              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <TrendingUp className="h-5 w-5 mx-auto text-green-500" />
                  <p className="mt-1 text-sm text-gray-400">PNL</p>
                  <p className="font-semibold text-green-500">{model.pnl}</p>
                </div>
                <div className="text-center">
                  <Users className="h-5 w-5 mx-auto text-blue-500" />
                  <p className="mt-1 text-sm text-gray-400">Users</p>
                  <p className="font-semibold">{model.users}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-400">Price</p>
                  <p className="font-semibold">{model.price}</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gray-700 flex justify-between items-center">
              <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md w-full">
                Purchase Model
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Marketplace;