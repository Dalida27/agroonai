import React from 'react';

const Loading: React.FC = () => {
  return (
      <div className="flex items-center justify-center h-screen">
        <div
            className="w-12 h-12 rounded-full animate-spin border-8 border-solid border-green-500 border-t-transparent"></div>
      </div>
  );
};

export default Loading;