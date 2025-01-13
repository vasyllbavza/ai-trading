import React, { useState } from 'react';
import { Send, AlertCircle, CheckCircle } from 'lucide-react';

const TradeAnalysis = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      type: 'system',
      content: 'Welcome! Enter a wallet address or contract to analyze.',
    },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      { type: 'user', content: input },
      {
        type: 'system',
        content: 'Analyzing... (This would be replaced with actual AI analysis)',
      },
    ]);
    setInput('');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Trade Analysis</h1>

      <div className="bg-gray-800 rounded-lg border border-gray-700 h-[600px] flex flex-col">
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((message, i) => (
            <div
              key={i}
              className={`flex ${
                message.type === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`max-w-[80%] p-4 rounded-lg ${
                  message.type === 'user'
                    ? 'bg-blue-600'
                    : 'bg-gray-700'
                }`}
              >
                <p>{message.content}</p>
              </div>
            </div>
          ))}
        </div>

        <form
          onSubmit={handleSubmit}
          className="border-t border-gray-700 p-4 flex gap-4"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter wallet address or contract..."
            className="flex-1 bg-gray-700 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md flex items-center gap-2"
          >
            <Send className="h-4 w-4" />
            Send
          </button>
        </form>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h2 className="text-xl font-semibold mb-4">Market Data</h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-400">Market Cap</span>
              <span>$12,000</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Volume (24h)</span>
              <span>$45,000</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Holders</span>
              <span>156</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h2 className="text-xl font-semibold mb-4">Risk Analysis</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-green-500">
              <CheckCircle className="h-5 w-5" />
              <span>Verified Contract</span>
            </div>
            <div className="flex items-center gap-2 text-yellow-500">
              <AlertCircle className="h-5 w-5" />
              <span>Low Liquidity</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TradeAnalysis;