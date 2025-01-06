import React from 'react';
import { MapPin } from 'lucide-react';

const TrackingMap: React.FC = () => {
  return (
    <div className="relative h-[600px] bg-gray-700 rounded-lg overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1553290322-e4e8f6c75c90?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-50"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <MapPin className="h-12 w-12 text-blue-400 mx-auto animate-bounce" />
          <p className="text-white mt-4">Map integration coming soon...</p>
        </div>
      </div>
    </div>
  );
}

export default TrackingMap;