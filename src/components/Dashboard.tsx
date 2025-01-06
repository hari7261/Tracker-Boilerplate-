import React from 'react';
import { MapPin, Activity, Bell, MessageSquare } from 'lucide-react';
import TrackingMap from './TrackingMap';
import AlertPanel from './AlertPanel';
import ChatInterface from './ChatInterface';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto p-4">
        <header className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-2">
            <MapPin className="h-8 w-8 text-blue-400" />
            <h1 className="text-2xl font-bold">AI Tracking System</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors">
              <Activity className="h-5 w-5 text-green-400" />
            </button>
            <button className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors">
              <Bell className="h-5 w-5 text-yellow-400" />
            </button>
            <button className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors">
              <MessageSquare className="h-5 w-5 text-blue-400" />
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-gray-800 rounded-xl p-4 shadow-lg">
              <TrackingMap />
            </div>
          </div>
          <div className="space-y-6">
            <AlertPanel />
            <ChatInterface />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;