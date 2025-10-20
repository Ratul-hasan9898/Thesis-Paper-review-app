
import React from 'react';
import { SparklesIcon } from './icons/SparklesIcon';
import { AnalysisType } from '../types';

interface ResultsDisplayProps {
  result: string;
  isLoading: boolean;
  error: string | null;
  activeAnalysis: AnalysisType | null;
}

const analysisTitles: Record<AnalysisType, string> = {
    [AnalysisType.SUMMARIZE]: "Summary",
    [AnalysisType.EXPLAIN]: "Key Concepts Explained",
    [AnalysisType.APPLICATIONS]: "Potential Applications",
    [AnalysisType.EXTRACT]: "Extracted Information",
};

const LoadingSpinner: React.FC = () => (
    <div className="flex flex-col items-center justify-center h-full text-gray-400">
        <svg className="animate-spin h-10 w-10 text-cyan-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <p className="mt-4 text-lg">Generating insights...</p>
    </div>
);

const InitialState: React.FC = () => (
    <div className="flex flex-col items-center justify-center h-full text-gray-500 text-center">
        <SparklesIcon className="w-16 h-16 mb-4"/>
        <h3 className="text-xl font-semibold text-gray-300">Analysis Results</h3>
        <p>Your generated insights will appear here.</p>
        <p className="mt-2 text-sm">Select an action on the left to begin.</p>
    </div>
);

export const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ result, isLoading, error, activeAnalysis }) => {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 sm:p-6 flex-grow flex flex-col">
      <h2 className="text-lg font-semibold mb-4 text-gray-300">
        {activeAnalysis ? analysisTitles[activeAnalysis] : 'Analysis Results'}
      </h2>
      <div className="prose prose-invert prose-sm sm:prose-base max-w-none text-gray-300 flex-grow overflow-y-auto">
        {isLoading ? <LoadingSpinner /> :
         error ? <p className="text-red-400">{error}</p> :
         result ? <div dangerouslySetInnerHTML={{ __html: result.replace(/\n/g, '<br />') }} /> :
         <InitialState />
        }
      </div>
    </div>
  );
};
