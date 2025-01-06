import React, { useState } from 'react';
import { MessageSquare, Send } from 'lucide-react';

const ChatInterface: React.FC = () => {
  const [message, setMessage] = useState('');

  return (
    <div className="bg-gray-800 rounded-xl p-4 shadow-lg">
      <div className="flex items-center mb-4">
        <MessageSquare className="h-5 w-5 text-blue-400 mr-2" />
        <h2 className="text-lg font-semibold">AI Assistant</h2>
      </div>
      <div className="h-[200px] bg-gray-700 rounded-lg p-3 mb-4 overflow-y-auto">
        <div className="space-y-3">
          <div className="flex items-start">
            <div className="bg-gray-600 rounded-lg p-2 max-w-[80%]">
              <p className="text-sm">Hello! How can I assist you with tracking today?</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask me anything..."
          className="flex-1 bg-gray-700 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button className="p-2 rounded-lg bg-blue-500 hover:bg-blue-600 transition-colors">
          <Send className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

export default ChatInterface;