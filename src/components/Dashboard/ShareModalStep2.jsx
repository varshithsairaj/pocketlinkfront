// ShareModalStep2.js
import React from 'react';
import { X, Copy } from 'lucide-react'; // Removed Linkedin, Twitter

const ShareModalStep2 = ({ onClose, shareLink, onCopyLink, isDiscoverable, onDiscoverableChange, onManageSharedChats }) => {
  // Removed handleSocialShare function

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <div className="bg-gray-800 p-6 md:p-8 rounded-lg shadow-xl w-full max-w-md text-white">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Public link updated</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X size={24} />
          </button>
        </div>

        <p className="text-sm text-gray-300 mb-4">
          The public link to your chat has been updated. Manage previously shared chats via{" "}
          <button onClick={onManageSharedChats} className="text-blue-400 hover:underline">Settings</button>.
        </p>

        <div className="mb-6 flex items-start">
          <input
            type="checkbox"
            id="discoverable"
            checked={isDiscoverable}
            onChange={(e) => onDiscoverableChange(e.target.checked)}
            className="w-4 h-4 mt-1 text-purple-600 bg-gray-700 border-gray-600 rounded focus:ring-purple-500 focus:ring-2"
          />
          <label htmlFor="discoverable" className="ml-3 text-sm text-gray-300">
            Make this chat discoverable
            <span className="block text-xs text-gray-400">Allows it to be shown in web searches</span>
          </label>
        </div>

        <div className="flex mb-6">
          <input
            type="text"
            readOnly
            value={shareLink || ''}
            className="w-full bg-gray-700 border border-gray-600 rounded-l-lg p-3 text-gray-200 focus:outline-none"
          />
          <button
            onClick={onCopyLink}
            className="bg-white text-gray-900 px-4 py-3 rounded-r-lg hover:bg-gray-200 flex items-center font-semibold transition"
          >
            <Copy size={18} className="mr-2" /> Copy link
          </button>
        </div>

        {/* Social sharing buttons removed */}
        {/* 
        <div className="flex justify-center space-x-3">
          <button
            onClick={() => handleSocialShare('linkedin')}
            // ... (rest of LinkedIn button)
          >
            <Linkedin size={20} className="text-gray-300" />
          </button>
          <button
            onClick={() => handleSocialShare('reddit')}
            // ... (rest of Reddit button)
          >
            <RedditIcon className="w-5 h-5 text-gray-300" />
          </button>
          <button
            onClick={() => handleSocialShare('x')}
            // ... (rest of X button)
          >
            <Twitter size={20} className="text-gray-300" />
          </button>
        </div> 
        */}
      </div>
    </div>
  );
};

export default ShareModalStep2;