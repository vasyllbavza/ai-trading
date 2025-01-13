import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Brain, BarChart3, Store, Wallet } from 'lucide-react';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import TradeAnalysis from './pages/TradeAnalysis';
import Marketplace from './pages/Marketplace';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/analysis" element={<TradeAnalysis />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;