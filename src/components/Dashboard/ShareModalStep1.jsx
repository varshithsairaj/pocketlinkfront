// ShareModalStep1.js
import React from 'react';
import { X } from 'lucide-react';

const ShareModalStep1 = ({ onClose, onUpdateLink, isLoading, error, hasPastShare }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <div className="bg-gray-800 p-6 md:p-8 rounded-lg shadow-xl w-full max-w-md text-white">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Update public link to</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X size={24} />
          </button>
        </div>

        <p className="text-sm text-gray-300 mb-4">
          Your name, custom instructions, and any messages you add after sharing stay private.{" "}
          <a href="#" className="text-blue-400 hover:underline">Learn more</a>
        </p>

        <div className="mb-6">
          <input
            type="text"
            readOnly
            value="https://chatgpt.com/share/..." // Placeholder as in the image
            className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-gray-400 focus:outline-none cursor-default"
          />
        </div>

        {error && <p className="text-red-400 text-sm mb-4 text-center">{error}</p>}

        <button
          onClick={onUpdateLink}
          disabled={isLoading}
          className="w-full bg-white text-gray-900 font-semibold py-3 rounded-lg hover:bg-gray-200 transition duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Updating...' : 'Update link'}
        </button>

        {hasPastShare && (
          <p className="text-xs text-gray-400 mt-4 text-center">
            A past version of this chat has already been shared. Manage previously shared chats via{" "}
            <a href="#" className="text-blue-400 hover:underline">Settings</a>.
          </p>
        )}
      </div>
    </div>
  );
};

export default ShareModalStep1;