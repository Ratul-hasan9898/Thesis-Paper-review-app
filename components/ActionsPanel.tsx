
import React from 'react';
import { AnalysisType } from '../types';

interface ActionsPanelProps {
  onAnalyzeAction: (type: AnalysisType) => void;
  isLoading: boolean;
  activeAnalysis: AnalysisType | null;
}

const actionButtons: { type: AnalysisType; label: string }[] = [
  { type: AnalysisType.SUMMARIZE, label: 'Summarize' },
  { type: AnalysisType.EXPLAIN, label: 'Explain Concepts' },
  { type: AnalysisType.APPLICATIONS, label: 'Find Applications' },
  { type: AnalysisType.EXTRACT, label: 'Extract Info' },
];

export const ActionsPanel: React.FC<ActionsPanelProps> = ({ onAnalyzeAction, isLoading, activeAnalysis }) => {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-4 text-gray-300">Analysis Actions</h2>
      <div className="grid grid-cols-2 gap-3">
        {actionButtons.map(({ type, label }) => (
          <button
            key={type}
            onClick={() => onAnalyzeAction(type)}
            disabled={isLoading}
            className={`px-4 py-2 text-sm font-semibold rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed
              ${isLoading && activeAnalysis === type
                ? 'bg-cyan-600 text-white animate-pulse'
                : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
              }`}
          >
            {isLoading && activeAnalysis === type ? 'Analyzing...' : label}
          </button>
        ))}
      </div>
    </div>
  );
};
