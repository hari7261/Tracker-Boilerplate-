import React from 'react';
import { Bell, AlertTriangle } from 'lucide-react';

const AlertPanel: React.FC = () => {
  return (
    <div className="bg-gray-800 rounded-xl p-4 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold flex items-center">
          <Bell className="h-5 w-5 mr-2 text-yellow-400" />
          Alerts
        </h2>
        <span className="bg-yellow-400 text-black text-xs px-2 py-1 rounded-full">2 New</span>
      </div>
      <div className="space-y-3">
        <div className="bg-gray-700 p-3 rounded-lg">
          <div className="flex items-start">
            <AlertTriangle className="h-5 w-5 text-red-400 mt-1 mr-2" />
            <div>
              <p className="text-sm">Anomaly detected in route pattern</p>
              <p className="text-xs text-gray-400">2 minutes ago</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-700 p-3 rounded-lg">
          <div className="flex items-start">
            <AlertTriangle className="h-5 w-5 text-yellow-400 mt-1 mr-2" />
            <div>
              <p className="text-sm">Predicted delay in arrival time</p>
              <p className="text-xs text-gray-400">5 minutes ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlertPanel;