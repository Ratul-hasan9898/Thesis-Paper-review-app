
import React from 'react';
import { SparklesIcon } from './icons/SparklesIcon';

export const Header: React.FC = () => {
  return (
    <header className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-3">
        <SparklesIcon className="w-8 h-8 text-cyan-400" />
        <div>
            <h1 className="text-2xl font-bold text-white">Research Paper Analyzer</h1>
            <p className="text-sm text-gray-400">Unlock insights from complex documents with Gemini</p>
        </div>
      </div>
    </header>
  );
};
