import React from 'react';

interface ErrorProps {
  message: string;
  retry?: () => void;
}

const Error: React.FC<ErrorProps> = ({ message, retry }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] p-6 bg-red-50 rounded-lg">
      <div className="text-red-600 mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">Error</h3>
      <p className="text-gray-600 text-center mb-4">{message}</p>
      {retry && (
        <button
          onClick={retry}
          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-200"
        >
          Try Again
        </button>
      )}
    </div>
  );
};

export default Error; 