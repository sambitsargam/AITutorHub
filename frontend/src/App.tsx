import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import Certificates from './pages/Certificates';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

function Header() {
  const location = useLocation();
  const [walletAddress, setWalletAddress] = useState('');

  const isActive = (path) => {
    return location.pathname === path ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-600';
  };

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.error('User rejected the request:', error);
      }
    } else {
      alert('MetaMask is not installed. Please install it to connect your wallet.');
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-indigo-600" />
            <span className="text-2xl font-bold text-gray-900">AI TutorHub</span>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link to="/dashboard" className={`${isActive('/dashboard')} transition-colors`}>
              Dashboard
            </Link>
            <Link to="/courses" className={`${isActive('/courses')} transition-colors`}>
              Courses
            </Link>
            <Link to="/certificates" className={`${isActive('/certificates')} transition-colors`}>
              Certificates
            </Link>
            <Link to="/profile" className={`${isActive('/profile')} transition-colors`}>
              Profile
            </Link>
          </nav>
          {walletAddress ? (
            <span className="text-indigo-600 font-medium">Connected: {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}</span>
          ) : (
            <button onClick={connectWallet} className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
              Connect Wallet
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

export default App;