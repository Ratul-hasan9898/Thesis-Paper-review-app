import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { PaperInput } from './components/PaperInput';
import { ActionsPanel } from './components/ActionsPanel';
import { ResultsDisplay } from './components/ResultsDisplay';
// FIX: Import `AnalysisType` from its source file `types.ts` instead of from `services/geminiService.ts` where it is not exported.
import { analyzePaper } from './services/geminiService';
import { AnalysisType } from './types';
import { paperAbstract } from './constants';

const App: React.FC = () => {
  const [paperText, setPaperText] = useState<string>(paperAbstract);
  const [analysisResult, setAnalysisResult] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [activeAnalysis, setActiveAnalysis] = useState<AnalysisType | null>(null);

  const handleAnalysis = useCallback(async (type: AnalysisType) => {
    if (!paperText.trim()) {
      setError("Paper content cannot be empty.");
      return;
    }
    if (isLoading) return;

    setIsLoading(true);
    setError(null);
    setAnalysisResult('');
    setActiveAnalysis(type);

    try {
      const result = await analyzePaper(paperText, type);
      setAnalysisResult(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred.");
    } finally {
      setIsLoading(false);
    }
  }, [paperText, isLoading]);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8 flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/2 flex flex-col gap-6">
          <PaperInput value={paperText} onChange={(e) => setPaperText(e.target.value)} />
          <ActionsPanel onAnalyzeAction={handleAnalysis} isLoading={isLoading} activeAnalysis={activeAnalysis} />
        </div>
        <div className="lg:w-1/2 flex flex-col">
          <ResultsDisplay 
            result={analysisResult} 
            isLoading={isLoading} 
            error={error} 
            activeAnalysis={activeAnalysis}
          />
        </div>
      </main>
      <footer className="text-center p-4 text-gray-500 text-sm">
        <p>Powered by Gemini. For informational purposes only.</p>
      </footer>
    </div>
  );
};

export default App;